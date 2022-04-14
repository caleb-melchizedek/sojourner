import Head from "next/head";
import Link from "next/link";


export default function Home() {
  return (
    <>
    <div className="bg-[url('/bg.jpg')] bg-cover bg-fixed">
      <Head>
        <title>Sojourner</title>
      </Head>
      
        <div className="flex flex-col  items-stretch  min-h-screen px-7 pt-7 z-10 backdrop-blur-sm">
          <header id="landing-text" className="w-full">
            <h1 className=" text-4xl sm:text-7xl font-bold  ">
             Sojourner
            </h1>
            <h4 className="font-semibold  text-m">
              Search for a suitable accommodation
            </h4>
          </header>
            <div className="flex flex-row grow w-full items-center justify-center ">
              <form className="search">
                <div className="w-full flex justify-center mb-4 ">
                  {/* whats your budget? lowest */}
                  <div className="flex flex-col items-center m-4">
                    <label className="text-white font-medium mb-2">I'll spend at least</label>
                    <input className="" type="text" placeholder="GHC"></input>
                  </div>
                  {/* whats your budget? highest */}
                  <div className="flex flex-col items-center m-4">
                    <label className="text-white font-medium mb-2">I'll spend at most</label>
                  <input type="text" placeholder="GHC"></input>
                  </div>
                  {/*  whats your budget? room capacity*/}
                  <div className="flex flex-col items-center m-4">
                    <label className="text-white font-medium mb-2">Room capacity</label>
                  <input type="text" placeholder="People per room"></input>
                  </div>
                  {/* whats your budget? payment cycle */}
                  <div className="flex flex-col items-center m-4">
                    <label className="text-white font-medium mb-2">Payment cycle</label>
                  <input type="text" placeholder="per month"></input>
                  </div>
                </div>
                <button type="submit"> Search</button>
              </form>
            </div>
            <footer className="flex items-center text-sm justify-center w-full h-10">
              Powered by{" "}
              <img src="/Mag_Mel-log.png" alt="some Logo" className="h-7 ml-4" />
            </footer>
        </div>
      
      </div>
    </>
  );
}
