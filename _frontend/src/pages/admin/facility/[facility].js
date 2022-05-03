import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Router from "next/router"


export default function Facility({facility,rooms}) {  

//   const room = props.facility[0];
  console.log(rooms);
  console.log(facility);

  const [showLogin,setShowLogin]= useState(false)
  const [loginDetails,setLoginDetails]= useState({email:"",password:""})


  

  return (
    <>
      <div className="bg-[url('/bg.jpg')] bg-cover bg-fixed min-h-screen">
        <Head>
          <title>Sojourner</title>
        </Head>
        <div className=" backdrop-blur-sm min-h-screen">
          <div className="flex flex-col  items-stretch w-full px-4 md:px-10 pt-4 md:pt-7 z-10 ">
          <header id="landing-text" className="w-full flex flex-row justify-between items-start">
              <div>
                <Link href="/">
                  <h1 className=" text-white text-xl md:text-4xl sm:text-7xl font-bold cursor-pointer ">
                    Sojourner
                  </h1>
                </Link>
                <h4 className="md:font-semibold text-white text-xs md:text-lg">
                  Search for a suitable accommodation
                </h4>
              </div>
              <div className="pt-2 md:p-0">
                <p className="self-center md:mt-7  text-white text-xs md:text-base md:font-semibold transition-all">Welcome,</p>
                <Link href="/"><button className="float-right self-center md:h-10  p-2 text-white font-semibold text-xs md:text-base hover:bg-blue-500 transition-all">Log Out</button></Link>
              </div>
            </header>
          </div>
          <section className="px-10 py-10 md:py-4">
          <div className=" bg-white px-3 md:px-14 py-6 flex flex-col grow w-full items-center justify-center rounded-lg">
            <div className="w-full rounded-md  flex flex-col md:flex-row items-center justify-center md:items-start mb-10 ">
            <div className="h-40 md:w-36 rounded-md mr-2 flex flex-row  ">
                    <img className="h-full w-full object-cover rounded-md" src={facility.images[0]}></img>
                </div>
                <div className=" h-full grow flex flex-col md:flex-row items-start md:items-center justify-between mt-2 mx-2 md:mx-10 ">
                  <div className="h-full">
                    <h1 className="  font-semibold text-lg md:text-3xl ">{facility.facilityname}</h1>
                    <p className=" text-sm  "> Location: {facility.location}</p>
                    <p className=" text-sm  "> Email: {facility.email===""? "not available":facility.email}</p>
                    <p className=" text-sm  "> Tel: {facility.tel}</p>
                  </div>
                  <div className="h-full ">
                       
                  </div>            
                </div>
              </div>
              <div className=" w-full h-48 rounded-md flex flex-nowrap items-start overflow-y-hidden overflow-x-auto scroll-smooth snap-x  snap-mandatory scroll-w-0 ">
                  {facility.images.map((img)=>{
                    return(
                      <img className="h-36 w-auto object-cover rounded-md mr-4  snap-always snap-center" key={img} src={img}></img>  
                    )
                 
                  })}
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
  const response = await fetch(`https://rentit-backend.herokuapp.com/admin/facility/${params.facility}`)
  // const response = await fetch(`http://localhost:4000/admin/facility/${params.facility}`)
  const data = await response.json()
  return {
    props: {
      facility:data.facility[0],
      rooms:data.rooms
    }, // will be passed to the page component as props
  }
}