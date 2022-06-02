import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router'
import { useState } from "react";



import SearchSection from "../components/searchSection"
import SearchResults from "../components/searchResults"
import LoginForm from "../components/loginForm"

export default function Home() {
  const router = useRouter()
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
        <title>Rent It</title>Looking for a Hostel near UPSA
        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
        <script defer src="/assets/scripts/LPageAnim.js"></script>
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
            
        </div>
        <section className="px-10 py-4 flex flex-col">    
          <h1 className="ml11 text-white text-base md:text-5xl font-bold">
            <span className="text-wrapper relative inline-block p-2">
              <span className="line line1   absolute left-0 top-0 height-full w-2 bg-black origin-center"></span>
              <span className="letters">Looking for a hostel near UPSA?</span>
            </span>
          </h1>
          <h1 className="ml12 text-white text-sm md:text-2xl font-bold">
            <span className="text-wrapper relative inline-block p-2">
              <span className="line line1   absolute left-0 top-0 height-full w-2 bg-black origin-center"></span>
              <span className="letters">Search based on price range, payment cycle, and room capacity</span>
            </span>
          </h1>
          <h1 className="ml13 text-white text-xs md:text-xl font-bold">
            <span className="text-wrapper relative inline-block p-2">
              <span className="line line1    absolute left-0 top-0 height-full w-2 bg-black origin-center"></span>
              <span className="letters">Click "Search" below</span>
            </span>
          </h1>
          
          <Link href="/home"><button className="self-center h-12 w-48 mt-28 md:w-1/3 md:h-10 md:mt-30 p-2 text-white  bg-blue-500 font-semibold text-xs md:text-base hover:bg-white hover:text-black  transition-all">Search</button></Link>
          <div className=" fixed bottom-2 right-2 flex  w-full items-end justify-end overflow-hidden ">
            <div className="help-text" >
              <p className=" text-xs px-4  md:text-sm md:py-2  items-center justify-center ">
                Need help contacting a hostel? Call our help line on: &nbsp;<b>055 123 4567</b>
              </p>
            </div>
            <button onClick={()=>toggleHelp()} className=" bottom-14  md:bottom-10 rounded-full h-full  text-sm  flex mx-1 md:ml-10 px-4 py-2 items-center justify-center text-white bg-blue-500">Help<img className="h-4 mx-1 white " src="/icons8-help-30.png"/></button>
          </div>
           
        </section>
        </div>
      </div>
    </>
  );
}
