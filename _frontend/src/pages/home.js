import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router'
import { useState } from "react";



import SearchSection from "../components/searchSection"
import SearchResults from "../components/searchResults"
import LoginForm from "../components/loginForm"

export default function Home() {
  const router = useRouter()
  const [searchQuery,setSearchQuery]= useState({lowestPrice:"",highestPrice:"",roomCapacity:"",paymentCycle:""})
  const [searchResults,setSearchResults] =useState({results:[],searched:false,searching:false})
  const [showLogin,setShowLogin]= useState(false)
  const [loginDetails,setLoginDetails]= useState({email:"",password:""})
  const [loginIn,setLoginIn]= useState(false)
  const [loginError,setLoginError]= useState("")
  const [showHelp,setShowHelp]= useState(false)


const toggleHelp= ()=>{
  let a= document.querySelector(".help-text")
   console.log(a.style.marginRight )
   console.log(showHelp)
  if (showHelp){
    a.style.marginRight="-50rem"
    setShowHelp(false)
  }
  else{
    a.style.marginRight="0rem"
    setShowHelp(true)
  }
}


  const  handleSubmit = async (e)=>{
    setSearchResults({searching:true})
    console.log(searchQuery);
    e.preventDefault();
    const response= await fetch('https://rentit-backend.herokuapp.com/search', 
    // const response= await fetch('https://rentit-backend.herokuapp.com/search', 
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
      setSearchResults({results,searched:true,searching:false})
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
    setLoginIn(true)
    setLoginError("")
    const response= await fetch('https://rentit-backend.herokuapp.com/adminLogin', 
    // const response= await fetch('http://localhost:4000/adminLogin', 
    {
      method: 'POST',
      // mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginDetails),
    })
    const {adminId,errMessage} = await response.json()
    if(adminId){
      console.log(adminId); 
      router.push(`/admin/${adminId}`);
    } else{
      setLoginIn(false)
      setLoginError(errMessage)
      console.log(errMessage)
    }
  }

  return (  
    <>
    <div className="bg-[url('/bg.jpg')] bg-cover bg-fixed min-h-screen min-w-full">

      <Head>
        <title>Rent It</title>
      </Head>
      <div className=" backdrop-blur-sm backdrop-opacity-50  min-h-screen min-w-full">
        <div className="flex flex-col  items-stretch w-full px-4 md:px-10 pt-4 md:pt-7 z-10 ">
          <header id="landing-text" className="w-full flex flex-row justify-between">
            <div>
              <Link href="/">
                <h1 className=" text-white text-xl md:text-4xl sm:text-7xl font-bold cursor-pointer ">
                  Rent It
                </h1>
              </Link>
              <h4 className="md:font-semibold text-white text-xs md:text-sm">
                Find a hostel near the UPSA Campus
              </h4>
            </div>
            <div>
              <button className="self-center h-12 md:h-10 md:mt-7 p-2 text-black bg-white font-semibold text-xs md:text-base hover:bg-blue-500 hover:text-white transition-all" onClick={toggleLogin}>Login in as admin</button>
              <div className="relative my-3">
                {showLogin && 
                  <LoginForm handleLogin={handleLogin} toggleLogin={toggleLogin} handleLoginDetailsChange={handleLoginDetailsChange} loginError={loginError} loginIn={loginIn} />
                }
              </div>
            </div>
          </header>
            <div className="flex flex-row grow w-full items-center justify-center my-6 ">
              <SearchSection handleSubmit={handleSubmit} handleSearchParamChange={handleSearchParamChange} />
            </div>
        </div>
        <section className="px-10 py-4">
        { (searchResults.searching)? 
            (
              <div className="flex flex-col items-center justify-center">
              <img className="h-36" src="Infinity-1s-200px.svg"></img>
              {/* <p className="font-semibold text-2xl  text-white ">Searching for good places</p> */}
              </div>
            ):  
            (searchResults.searched===true && searchResults.results.length>0)?
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

<         div className=" fixed bottom-2 right-2 flex flex-col w-full items-end justify-end overflow-hidden ">
            <div className="help-text" >
              <p className="text-sm px-4 py-2 items-center justify-center ">
                Need help contacting a hostel? Call our help line on: &nbsp;<b>055 123 4567</b>
              </p>
            </div>
            <button onClick={()=>toggleHelp()} className=" bottom-14  md:bottom-10 rounded-full h-full  text-sm  flex px-4 py-2 items-center justify-center text-white bg-blue-500">Help<img className="h-4 mx-1 white " src="/icons8-help-30.png"/></button>
          </div>
           
        </section>
        </div>
      </div>
    </>
  );
}
