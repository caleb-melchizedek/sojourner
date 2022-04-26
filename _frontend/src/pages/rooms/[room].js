import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Router from "next/router"


import LoginForm from "../../components/loginForm"

export default function Home(props) {  

  const room = props.room[0];
  console.log(props.room);

  const [showLogin,setShowLogin]= useState(false)
  const [loginDetails,setLoginDetails]= useState({email:"",password:""})

  var loginError=""

  const toggleLogin= ()=>{
    setShowLogin(!showLogin);
  }

  const handleLoginDetailsChange = (e)=>{
    const {name,value}= e.target;
    setLoginDetails({...loginDetails, [name] : value});
    console.log(loginDetails);
  }

  const handleLogin= async (e)=>{
    console.log(loginDetails);
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
    const results = await response.json()
    if(results.adminId){
       Router.push(`/admin/${results.adminId}`)
      console.log(results.adminId)
    } else{
      loginError= results.errMessage
      console.log(results.errMessage)
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
                  <h1 className=" text-white text-4xl sm:text-7xl font-bold cursor-pointer">
                    Sojourner
                  </h1>
                </Link>
                <h4 className="font-semibold  text-white">
                  Search for a suitable accommodation
                </h4>
              </div>
              <div>
                <button className="self-center mt-7 p-2 text-white font-semibold hover:bg-blue-500 transition-all" onClick={toggleLogin}>login as admin</button>
                <div className="relative my-3">
                  {showLogin && 
                     <LoginForm handleLogin={handleLogin} toggleLogin={toggleLogin} handleLoginDetailsChange={handleLoginDetailsChange} loginError={loginError} />
                  }
                </div>
              </div>
            </header>
          </div>
          <section className="px-10 py-4 ">
            <div className=" bg-white px-3 md:px-14 py-6 flex flex-col grow w-full items-center justify-center rounded-lg">
              <div className="w-full rounded-md  flex flex-col md:flex-row items-center md:items-start mb-10 ">
                <div className="h-40 md:w-36 rounded-md mr-2">
                    <img className="h-full w-full object-cover rounded-md" src="/bg.jpg"></img>
                </div>
                <div className=" h-full grow flex flex-col md:flex-row items-start md:items-center justify-between mt-2 mx-2 md:mx-10 ">
                  <div className="h-full">
                    <h1 className=" font-semibold text-lg md:text-3xl ">{room.facility.facilityname}</h1>
                    <p className=" text-sm "> Location: {room.facility.location}</p>
                    <p className=" text-sm "> Email: {room.facility.email===""? "not available":room.facility.email}</p>
                    <p className=" text-sm "> Tel: {room.facility.tel}</p>
                    <p className=" font-normal text-sm ">Extra features{room.extraFeatures} </p>
                  </div>
                  <div className="h-full ">
                    <p className=" font-semibold md:text-xl ">{room.pricing.currency} {room.pricing.amount} per {room.pricing.paymentCycle}</p>
                    <p className=" font-semibolb md:text-xl ">{room.roomCapacity} in a room</p>      
                  </div>            
                </div>
              </div>
              <div className=" w-full h-48 rounded-md flex flex-nowrap items-start overflow-y-hidden overflow-x-auto scroll-smooth snap-x  snap-mandatory scroll-w-0 ">
                  <img className="h-36 w-auto object-cover rounded-md mr-4  snap-always snap-center" src="/bg.jpg"></img>
                  <img className="h-36 w-auto object-cover rounded-md mr-4 snap-always snap-center" src="/bg.jpg"></img>
                  <img className="h-36 w-auto object-cover rounded-md mr-4 snap-always snap-center" src="/bg.jpg"></img>
                  <img className="h-36 w-auto object-cover rounded-md mr-4 snap-always snap-center" src="/bg.jpg"></img>
                  <img className="h-36 w-auto object-cover rounded-md mr-4 snap-always snap-center" src="/bg.jpg"></img>
                  <img className="h-36 w-auto object-cover rounded-md mr-4 snap-always snap-center" src="/bg.jpg"></img>
                  <img className="h-36 w-auto object-cover rounded-md mr-4 snap-always snap-center" src="/bg.jpg"></img>
                  <img className="h-36 w-auto object-cover rounded-md mr-4 snap-always snap-center" src="/bg.jpg"></img>
                  <img className="h-36 w-auto object-cover rounded-md mr-4 snap-always snap-center" src="/bg.jpg"></img>
                  <img className="h-36 w-auto object-cover rounded-md mr-4 snap-always snap-center" src="/bg.jpg"></img>
              </div>
            </div>
          </section>
          </div>
      </div>
    </>
  )
}


export async function getServerSideProps(context) {
  const {params}= context;
  const response = await fetch(`https://rentit-backend.herokuapp.com/room/${params.room}`)
  const data = await response.json()
  return {
    props: {
      room:data
    }, // will be passed to the page component as props
  }
}