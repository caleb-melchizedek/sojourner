import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Home(props) {  

  const room = props.room[0];
  console.log(room);
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
                <button className="self-center mt-7 p-2 text-white font-semibold hover:bg-blue-500 transition-all">Sign In as admin</button>
              </div>
            </header>
          </div>
          <section className="px-10 py-4 ">
            <div className=" bg-white px-14 py-6 flex flex-col grow w-full items-center justify-center rounded-lg">
              <div className="w-full rounded-md  flex flex-row items-start mb-10 ">
                <div className="h-36 w-36 rounded-md mr-2">
                    <img className="h-full w-full object-cover rounded-md" src="/bg.jpg"></img>
                </div>
                <div className=" h-full grow flex flex-row items-center justify-between  mx-10 ">
                  <div className="h-full">
                    <h1 className=" font-semibold text-3xl ">{room.facility.facilityname}</h1>
                    <p className=" text-base "> Location: {room.facility.location}</p>
                    <p className=" text-base "> Email: {room.facility.email===""? "not available":room.facility.email}</p>
                    <p className=" text-base "> Tel: {room.facility.tel}</p>
                    <p className=" font-normal text-sm ">Extra featurs{room.extraFeatures} </p>
                  </div>
                  <div className="h-full ">
                    <p className=" font-semibold text-xl ">{room.pricing.currency} {room.pricing.amount} per {room.pricing.paymentCycle}</p>
                    <p className=" font-semibolb text-xl ">{room.roomCapacity} in a room</p>      
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