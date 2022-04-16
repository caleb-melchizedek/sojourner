import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import SearchSection from "../components/searchSection"
import SearchResults from "../components/searchResults"


export default function Home() {
  const [searchQuery,setSearchQuery]= useState({lowestPrice:"",highestPrice:"",roomCapacity:"",paymentCycle:"month"})
  const [searchResults,setSearchResults] =useState([1,2,3,4,5])

  const  handleSubmit = async (e)=>{
    e.preventDefault();
    const response= await fetch('http://localhost:4000/search', 
    {
      method: 'POST',
      // mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(searchQuery),
    })
    const results = await response.json()
    // setSearchResults(results)
    console.log(results);
  }

  const handleSearchParamChange = (e)=>{
    const {name,value}= e.target;
    setSearchQuery({...searchQuery, [name] : value});
    console.log(searchQuery);
  }

  return (
    <>
    <div className="bg-[url('/bg.jpg')] bg-cover bg-fixed min-h-screen">
      <Head>
        <title>Sojourner</title>
      </Head>
      <div className=" backdrop-blur-sm min-h-screen">
        <div className="flex flex-col  items-stretch w-full  px-10 pt-7 z-10 ">
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
            <div className="flex flex-row grow w-full items-center justify-center my-12 ">
              <SearchSection handleSubmit={handleSubmit} handleSearchParamChange={handleSearchParamChange} />
            </div>
        </div>
        <section className="px-10 py-10">
        { 
           searchResults.map(res=>{
           return( 
            <SearchResults key={res}searchResult={res}/>
            )
          })
        }
          
           
            {/* <div className="w-full rounded-md bg-white h-40 flex flex-row items-start p-2 my-4">
              <div className="h-36 w-36 rounded-md mr-2">
                <img className="h-full w-full object-cover rounded-md" src="/bg.jpg"></img>
              </div>
              <div className=" h-full flex flex-col ml-10 ">
                <h1 className=" font-semibold text-3xl ">Facility Name</h1>
                <p className="  text-sm ">location</p>
                <p className=" font-semibold text-xl ">Price per Payment Cycle</p>
                <p className=" font-semibold text-xl ">Room Capacity</p>
                
              </div>
            </div> */}
          

          {/* <footer className="flex text-sm self-end justify-center w-full h-10">
            Powered by{" "}
            <img src="/Mag_Mel-log.png" alt="some Logo" className="h-7 ml-4" />
          </footer> */}
        </section>
        </div>
      </div>
    </>
  );
}
