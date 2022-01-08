import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    console.log(router);
  }, []);
  return (
    <main>
      <h1>Home page</h1>
      <p>this is home page guys</p>
    </main>
  );
}
