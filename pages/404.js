import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.push({ pathname: "/", search: "HEY=Hey" }), 3000);
  }, []);

  return (
    <main>
      <Head>
        <title>not found: 404</title>
      </Head>
      <h1 className="title">Oooops!</h1>
      <h2 className="title">not found</h2>
      <p>
        <Link href={{ pathname: "/", query: { HEY: "Hey" } }}>
          <button className="btn">go back to home page</button>
        </Link>
      </p>
    </main>
  );
};

export default NotFound;
