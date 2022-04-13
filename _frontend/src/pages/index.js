import Head from "next/head";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Head>
        <title>Make your Mark</title>
        {/* <link rel="icon" href="" /> */}
      </Head>
      <div className="relative top-20 flex flex-row items-center justify-center z-10 ">
        <div
          id="forms"
          className="flex flex-col px-10 sm:px-20  items-center justify-center top-20 sm:top-20 fixed"
        >
        </div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <header id="landing-text" className="flex flex-col items-center my-24 ">
          <h1 className=" text-4xl sm:text-7xl pb-4 font-semibold  ">
            Make your mark
          </h1>
          <h4 className="font-semibold text-gray-400">
            Tell your story, your way, Be a marker.{" "}
          </h4>
        </header>
        <Link href="#featured-marks" passHref scroll>
          <button className="btn-red w-20 sm:w-28 justify-self-end">View featured</button>
        </Link>
      </div>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center">
        <div className="w-full">
          <h1 className="font-medium text-3xl sm:text-2xl pb-4">
            Featured Marks
          </h1>

          <section
            id="featured-marks"
            className="flex flex-col md:flex-row md:space-x-12 justify-evenly pt-14 pb-10 w-full border-t border-b "
          >
          </section>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 ">
        Powered by{" "}
        <img src="/Mag_Mel-log.png" alt="some Logo" className="h-7 ml-4" />
      </footer>
    </>
  );
}
