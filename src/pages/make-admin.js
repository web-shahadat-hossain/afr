import { getSession } from "next-auth/react";
import axios from "axios";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { useRouter } from "next/router";

const MakeAdmin = ({ users }) => {
  const router = useRouter();
  const makeAdmin = async (userId) => {
    try {
      const data = await axios.patch(
        `https://www.api.afroonbd.com/api/v1/users/admin/${userId}`,
        {
          role: "admin",
        }
      );

      alert(`User ${userId} is now an admin`);
      router.reload(); // Reload page to reflect changes
    } catch (error) {
      console.error("Failed to make admin:", error);
    }
  };

  // Function to delete a user
  const deleteUser = async (userId) => {
    try {
      await axios.delete(`https://www.api.afroonbd.com/api/v1/users/${userId}`);
      alert(`User ${userId} deleted`);
      router.reload();
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  return (
    <DashboardLayout>
      <h2>Manage Users</h2>

      {/* Responsive table using Bootstrap */}
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.data?.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  {user.role === "admin" ? (
                    <button className="btn btn-secondary" disabled>
                      Already Admin
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() => makeAdmin(user._id)}
                    >
                      Make Admin
                    </button>
                  )}
                  <button
                    className="btn btn-danger ml-2"
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete User
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default MakeAdmin;

// Fetch session and users in getServerSideProps
export async function getServerSideProps(context) {
  const session = await getSession(context); // Get session data from the server
  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  }

  try {
    const response = await axios.get(
      `https://www.api.afroonbd.com/api/v1/users`,
      {
        headers: {
          authorization: `${session.secretT}`, // Include the session token
        },
      }
    );

    const users = response.data;

    return {
      props: {
        users,
      },
    };
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return {
      props: {
        users: [],
      },
    };
  }
}
