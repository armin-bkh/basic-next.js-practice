import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
    const router = useRouter();
    
    useEffect(()=> {
        setTimeout(()=> router.push({ pathname: "/", search: "HEY=Hey" }), 3000)
    }, [])

  return (
    <main>
      <Head>
        <title>not found: 404</title>
      </Head>
      <h1>Oooops!</h1>
      <h2>not found</h2>
      <p>
        go back to{" "}
        <Link href={{ pathname: "/", query: { HEY: "Hey" } }}>
          <a>home page</a>
        </Link>
      </p>
    </main>
  );
};

export default NotFound;
