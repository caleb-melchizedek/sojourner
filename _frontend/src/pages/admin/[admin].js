import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/router'
// import Router from 'next/router'


import FacilityCards from "../../components/facilityCards"
import AddFacilityForm from "../../components/addFacilityForm"
import UpdateFacilityForm from "../../components/updateFacilityForm"

export default function Home({dashboardInfo}) {  
  const router = useRouter()

  const [showAddFacilityForm,setshowAddFacilityForm]= useState(false)
  const [showUpdateFacilityForm,setshowUpdateFacilityForm]= useState(false)
  const [facilityInfo,setfacilityInfo]= useState({facilityname:"",tel:"",email:"",location:"",image:"",_id:""})
  const [submitting,setSubmitting]= useState(false)
  const [error,setError]= useState("")
  const [isDeleting,setIsDeleting]=useState(false)


   console.log(dashboardInfo)
  const admin = dashboardInfo.admin;
  const facilities = dashboardInfo.facilities;

  const  handleAddSubmit = async (e)=>{
    setSubmitting(true)
    console.log(facilityInfo);
    e.preventDefault();
    const response= await fetch('https://rentit-backend.herokuapp.com/addFacility',
    // const response= await fetch('http://localhost:4000/addFacility',
    {
      method: 'POST',
      // mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(facilityInfo),
    })
    const {success,errMessage} = await response.json()
    if(success){
      console.log(success); 
      router.reload()
      // console.log(router)
    } else{
      setSubmitting(false)
      setError(errMessage)
      console.log(errMessage)
    }
   
  }

  const  handleUpdateSubmit = async (e)=>{
    setSubmitting(true)
    console.log(facilityInfo);
    e.preventDefault();
    const response= await fetch('https://rentit-backend.herokuapp.com/updateFacility',
    // const response= await fetch('http://localhost:4000/updateFacility',
    {
      method: 'POST',
      // mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(facilityInfo),
    })
    const {success,errMessage} = await response.json()
    if(success){
      console.log(success); 
      router.reload();
    } else{
      setSubmitting(false)
      setError(errMessage)
      console.log(errMessage)
    }
   
  }

  const  handleDelete = async ({_id})=>{
    setIsDeleting(true)
    console.log(facilityInfo);
    const response= await fetch('https://rentit-backend.herokuapp.com/updateFacility',
    // const response= await fetch('http://localhost:4000/deleteFacility',
    {
      method: 'POST',
      // mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({_id}),
    })
    const {success,errMessage} = await response.json()
    if(success){
      console.log(success); 
      router.reload();
    } else{
      setIsDeleting(false)
      setError(errMessage)
      console.log(errMessage)
    }
   
  }

  const handleFacilityDetailsChange= (e)=>{
    const {name,value}= e.target;
    setfacilityInfo({...facilityInfo, [name] : value});
    console.log(facilityInfo);
  }
  const toggleAddFacilityForm= ({name,tel,email,location,image,_id})=>{
    setfacilityInfo({facilityname:name,tel,email,location,image,_id});
    setshowAddFacilityForm(!showAddFacilityForm);
  }
  const toggleUpdateFacilityForm= ({name,tel,email,location,image,_id})=>{
    setfacilityInfo({facilityname:name,tel,email,location,image,_id});
    setshowUpdateFacilityForm(!showUpdateFacilityForm);
  }
  return (
    <>
      <div className="bg-[url('/bg.jpg')] bg-cover bg-fixed min-h-screen relative">
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
                <p className="self-center md:mt-7  text-white text-xs md:text-base md:font-semibold transition-all">Welcome, {admin.fullname}</p>
                <Link href="/"><button className="float-right self-center p-2 md:h-10 md:mt-7 text-white font-semibold text-xs md:text-sm hover:bg-blue-500 transition-all">Log Out</button></Link>
              </div>
            </header>
          </div>
          <section className=" md:px-10 py-10 md:py-4 ">
            <div className=" px-10 md:px-14 md:py-6 flex flex-col grow w-full items-center justify-center rounded-lg">
              {
                facilities.map(fac=>{
                  return(
                  <FacilityCards key={fac._id} facility={fac} showFacilityForm={toggleUpdateFacilityForm} handleDelete={handleDelete} isDeleting={isDeleting} />
                  )
                })
              }
              {showAddFacilityForm && <AddFacilityForm handleFacilityDetailsChange={handleFacilityDetailsChange} toggleFacilityForm={toggleAddFacilityForm} handleSubmit={handleAddSubmit} submitting={submitting} facilityInfo={facilityInfo} error={error} />}
              {showUpdateFacilityForm && <UpdateFacilityForm handleFacilityDetailsChange={handleFacilityDetailsChange} toggleFacilityForm={toggleUpdateFacilityForm} handleSubmit={handleUpdateSubmit} submitting={submitting} facilityInfo={facilityInfo} error={error} />}
            </div>
            
          </section>
          </div>
          <div className="sticky bottom-2 flex flex-row w-full items-end justify-end ">
            <button onClick={()=>toggleAddFacilityForm({name:"",email:"",tel:"",location:""})} className="bottom-10 rounded-full h-full  text-sm mr-3 flex p-2 items-center justify-center text-white bg-blue-500">Add new<img className="h-4 mx-1 white invert" src="/icons8-plus-48.png"/></button>
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