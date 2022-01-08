import Head from "next/head";
import Link from "next/link";

const NotFound = () => {
  return (
    <main>
      <Head>
        <title>not found: 404</title>
      </Head>
      <h1>Oooops!</h1>
      <h2>not found</h2>
      <p>
        go back to{" "}
        <Link href="/">
          <a>home page</a>
        </Link>
      </p>
    </main>
  );
};

export default NotFound;
