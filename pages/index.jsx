import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Head>
        <title>user list | Home</title>
      </Head>
      <h1 className="title">Home page</h1>
      <p className="explain">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
        illo cum vero, ipsam qui, temporibus sequi ducimus tempora molestias
        animi pariatur, repudiandae debitis aspernatur quibusdam quisquam.
        Architecto sapiente ut soluta.
      </p>
      <p className="explain">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
        illo cum vero, ipsam qui, temporibus sequi ducimus tempora molestias
        animi pariatur, repudiandae debitis aspernatur quibusdam quisquam.
        Architecto sapiente ut soluta. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Perspiciatis illo cum vero, ipsam qui, temporibus
        sequi ducimus tempora molestias animi pariatur, repudiandae debitis
        aspernatur quibusdam quisquam. Architecto sapiente ut soluta. Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis illo
        cum vero, ipsam qui, temporibus sequi ducimus tempora molestias animi
        pariatur, repudiandae debitis aspernatur quibusdam quisquam. Architecto
        sapiente ut soluta.
      </p>
      <Link href="/users">
        <button className="btn">go to users</button>
      </Link>
    </main>
  );
}
