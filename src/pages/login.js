/* eslint-disable react/no-unescaped-entities */
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/UI/PageHeader";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Clear previous errors

    const result = await signIn("credentials", {
      redirect: false, // We handle the redirect manually
      email,
      password,
    });

    setLoading(false);

    if (result?.error) {
      setError(result.error); // Set the error message returned by NextAuth
    } else {
      // On successful login, redirect to home
      router.push("/dashboard");
    }
  };

  return (
    <Layout>
      <PageHeader title={"Login"} />
      <div className="container">
        <div className="wrapper">
          <form className="form-signin" onSubmit={handleSubmit}>
            <h2 className="form-signin-heading mb-4 text-center">Login</h2>

            {/* Email Input */}
            <div className="mb-3 position-relative">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <div className="input-group">
                <span className="input-group-text" id="basic-addon1">
                  <i className="bi bi-envelope"></i>
                </span>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  required
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-3 position-relative">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="input-group">
                <span className="input-group-text" id="basic-addon2">
                  <i className="bi bi-lock"></i>
                </span>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  name="password"
                  placeholder="*******"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="mb-3 text-end">
              <Link href="#" className="small text-muted">
                I forgot my password
              </Link>
            </div>

            {/* Error Message */}
            {error && <div className="text-danger mb-3">{error}</div>}

            {/* Submit Button */}
            <button
              className="btn btn-lg btn-primary btn-block w-100"
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login!"}
            </button>
          </form>

          {/* Signup Link */}
          <p className="account-signup text-center mt-4">
            Don't have an account? <Link href="/signup">Sign up here</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
