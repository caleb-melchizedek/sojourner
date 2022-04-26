import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router'
import { useState } from "react";



import SearchSection from "../components/searchSection"
import SearchResults from "../components/searchResults"


export default function Home() {
  const router = useRouter()
  const [searchQuery,setSearchQuery]= useState({lowestPrice:"",highestPrice:"",roomCapacity:"",paymentCycle:"month"})
  const [searchResults,setSearchResults] =useState({results:[],searched:false})
  const [showLogin,setShowLogin]= useState(false)
  const [loginDetails,setLoginDetails]= useState({email:"",password:""})


   var loginError=""

  const  handleSubmit = async (e)=>{
    console.log(searchQuery);
    e.preventDefault();
    // const response= await fetch('https://rentit-backend.herokuapp.com/search', 
    const response= await fetch('https://rentit-backend.herokuapp.com/search', 
    {
      method: 'POST',
      // mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(searchQuery),
    })
    const results = await response.json()
    console.log(results);
      setSearchResults({results,searched:true})
      console.log(searchResults);
   
  }

  const handleSearchParamChange = (e)=>{
    const {name,value}= e.target;
    setSearchQuery({...searchQuery, [name] : value});
    console.log(searchQuery);
  }
  const toggleLogin= ()=>{
    setShowLogin(!showLogin);
  }

  const handleLoginDetailsChange = (e)=>{
    const {name,value}= e.target;
    setLoginDetails({...loginDetails, [name] : value});
    console.log(loginDetails);
  }

  const handleLogin= async (e)=>{
    e.preventDefault();
    // const response= await fetch('https://rentit-backend.herokuapp.com/search', 
    const response= await fetch('http://localhost:4000/adminLogin', 
    {
      method: 'POST',
      // mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginDetails),
    })
    const {adminId} = await response.json()
    if(adminId){
      console.log(adminId); 
      router.push(`/admin/${adminId}`);
    } else{
      loginError= result.errMessage
      console.log(result.errMessage)
    }
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
              <Link href="/">
                <h1 className=" text-white text-4xl sm:text-7xl font-bold cursor-pointer ">
                  Sojourner
                </h1>
              </Link>
              <h4 className="font-semibold  text-white">
                Search for a suitable accommodation
              </h4>
            </div>
            <div>
              <button className="self-center mt-7 p-2 text-white font-semibold hover:bg-blue-500 transition-all" onClick={toggleLogin}>Login In as admin</button>
              <div className="relative my-3">
                {showLogin && 
                  <form className="login" onSubmit={(e)=>{handleLogin(e)}}>
                    <div className="w-full flex justify-end mt-2 mr-2 text-lg cursor-pointer" onClick={toggleLogin}>x</div>
                    <label className="text-xs text-gray-500 font-medium mb-3 mt-1  ">login as admin</label>
                    <input type="email" required name="email" placeholder="Email" onChange={(e)=>{handleLoginDetailsChange(e)}}></input>
                    <input type="password" required name="password" placeholder="Password" onChange={(e)=>{handleLoginDetailsChange(e)}} ></input>
                    <button type="submit"> login</button>
                    <p className="login Error">{loginError}</p>
                  </form>
                }
              </div>
            </div>
          </header>
            <div className="flex flex-row grow w-full items-center justify-center my-6 ">
              <SearchSection handleSubmit={handleSubmit} handleSearchParamChange={handleSearchParamChange} />
            </div>
        </div>
        <section className="px-10 py-4">
        { (searchResults.searched===true && searchResults.results.length>0)?
            searchResults.results.map(res=>{
              //return String(res)
            return( 
                <SearchResults key={res._id} searchResult={res} />   
              )
            })
          :(searchResults.searched===true && searchResults.results.length===0)?
            ( <div className="flex flex-row items-center justify-center">
                <h2 className="font-semibold text-3xl  text-white ">Sorry could not find any such room</h2>
              </div>
            )
          :null 
           
          
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
