import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import FacilityCards from "../../components/facilityCards"

export default function Home({dashboardInfo}) {  
  console.log(dashboardInfo)
  const admin = dashboardInfo.admin;
  const facilities = dashboardInfo.facilities;
  return (
    <>
      <div className="bg-[url('/bg.jpg')] bg-cover bg-fixed min-h-screen">
        <Head>
          <title>Sojourner</title>
        </Head>
        <div className=" backdrop-blur-sm min-h-screen min-w-full">
          <div className="flex flex-col  items-stretch w-full px-4 md:px-10 pt-4 md:pt-7 z-10  ">
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
              <div className="pt-2">
                <p className="self-center md:mt-7  text-white text-xs md:text-base font-semibold transition-all">Welcome, {admin.fullname}</p>
                <Link href="/"><button className="float-right self-center md:h-10 md:mt-7 text-white font-semibold text-xs md:text-base hover:bg-blue-500 transition-all">Log Out</button></Link>
              </div>
            </header>
          </div>
          <section className=" md:px-10 py-10 md:py-4 ">
            <div className=" px-10 md:px-14 md:py-6 flex flex-col grow w-full items-center justify-center rounded-lg">
              {
                facilities.map(fac=>{
                  return(
                  <FacilityCards key={fac._id} facility={fac} />
                  )
                })
              }
            </div>
          </section>
          </div>
      </div>
    </>
  )
}


export async function getServerSideProps(context) {
  const {params}= context;
  const response = await fetch(`https://rentit-backend.herokuapp.com/admin/${params.admin}`)
// const response = await fetch(`http://localhost:4000/admin/${params.admin}`)
  const data = await response.json()
  console.log(data)
  return {
    props: {
      dashboardInfo:data
    }, // will be passed to the page component as props
  }
}