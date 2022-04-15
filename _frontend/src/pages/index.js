import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import SearchSection from "../components/searchSection"
import SearchResults from "../components/searchResults"


export default function Home() {
  const [searchResults,setSearchResults] =useState([])

  const  handleSubmit= async (e)=>{
    e.preventDefault;
    const response= await fetch()
    const results = await response.json()
    setSearchResults(results)
  }

  return (
    <>
    <div className="bg-[url('/bg.jpg')] bg-cover bg-fixed">
      <Head>
        <title>Sojourner</title>
      </Head>
      
        <div className="flex flex-col  items-stretch w-full min-h-screen px-7 pt-7 z-10 backdrop-blur-sm">
          <header id="landing-text" className="w-full flex flex-row justify-between">
            <div>
              <h1 className=" text-white text-4xl sm:text-7xl font-bold  ">
              Sojourner
              </h1>
              <h4 className="font-semibold  text-white">
                Search for a suitable accommodation
              </h4>
            </div>
            <div>
              <button className="self-center p-2 text-white font-semibold hover:bg-blue-500 transition-all">Sign In as admin</button>

            </div>
          </header>
            <div className="flex flex-row grow w-full items-center justify-center ">
              <SearchSection handleSubmit={handleSubmit} />
              <SearchResults searchResults={searchResults}/>
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
