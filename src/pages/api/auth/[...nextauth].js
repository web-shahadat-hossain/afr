import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          // Authenticate the user
          const loginResponse = await fetch(
            "https://www.api.afroonbd.com/api/v1/auth/login",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
              }),
            }
          );

          const loginResult = await loginResponse.json();

          if (!loginResponse.ok) {
            throw new Error(loginResult.message || "Login failed");
          }

          // Get the authToken (secretToken) from login response
          const authToken = loginResult?.data?.secretToken;

          // Fetch user details using the token in the Authorization header
          const userResponse = await fetch(
            `https://www.api.afroonbd.com/api/v1/users/${credentials.email}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `${authToken}`, // Set the token here
              },
            }
          );

          const user = await userResponse.json();

          if (!userResponse.ok) {
            throw new Error(user.message || "Failed to fetch user details");
          }

          // Merge the login result and user details and return the full user object
          return { sToken: loginResult.data.secretToken, ...user.data };
        } catch (error) {
          throw new Error(error.message || "Something went wrong");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.secretT = user.sToken; // Store the authToken in JWT
        token.email = user.email;
        token.name = user.name;
        token.role = user.role;
      }

      return token;
    },
    async session({ session, token }) {
      session.secretT = token?.secretT; // Store the authToken in JWT
      session.email = token.email;
      session.name = token.name;
      session.role = token.role;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_URL, // Make sure to put this in an environment variable
});
