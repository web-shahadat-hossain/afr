import css from "@/styles/dashboard.module.css";
import Image from "next/image";
import Head from "next/head";
import { signIn, useSession } from "next-auth/react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Spinner from "@/components/UI/Spinner";
const Dashboard = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return <Spinner />;

  // If not authenticated, redirect to login page
  if (status === "unauthenticated") {
    signIn(); // Redirect to login
    return null;
  }

  return (
    <>
      <Head>
        <title>
          Afroon BD - Dashboard - Your Ultimate E-commerce Destination for
          Attar, Jersey, Panjabi, Borka, Gadgets, Kids Essentials, Sneakers, and
          Bags
        </title>
        <meta
          name="description"
          content="Discover a world of style and elegance at Afroon BD, the leading E-commerce platform. Explore our exquisite collection of Attar, trendy Jerseys, traditional Panjabis, modest Borkas, cutting-edge Gadgets, adorable Kids' fashion, exclusive Sneakers, and fashionable Bags"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DashboardLayout>
        <aside className={css.profile_container}>
          <h2>My Profile</h2>
          <div className={css.profile_img_box}>
            <Image src="/img/profile.png" alt="" width={100} height={100} />
          </div>
          <div>
            <ul>
              <li>
                <span>Name:</span>{" "}
                {session.name ? session.name : "Please add your Name"}
              </li>
              <li>
                <span>Email:</span>
                {session?.email ? session?.email : "Please add your Email"}
              </li>
              <li>
                <span>Contact No:</span>{" "}
                {session?.contactNo
                  ? session?.contactNo
                  : "Please add your Contact No"}
              </li>
              <li>
                <span>Address:</span>{" "}
                {session?.address
                  ? session?.address
                  : "Please add your Address"}
              </li>
            </ul>
          </div>

          {/* <button onClick={()=>setOpen(true)}>Update Profile</button>
      {
        open && <ProfileModal setOpen={setOpen} id={data?.data?._id}/>
      } */}
        </aside>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
