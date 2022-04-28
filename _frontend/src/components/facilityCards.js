import Link from 'next/link'
export default function FacilityCards({facility,showFacilityForm,handleDelete,isDeleting}){
  const {facilityname,tel,email,location,_id,image}=facility
  return(
    <>
      <Link href={`/admin/facility/${facility._id}`}  >
        <div className="w-full rounded-md bg-white h-72  md:h-44 flex flex-col md:flex-row items-start p-2 my-2 cursor-pointer">
          <div className=" h-36 w-full md:h-36 md:w-36 rounded-md md:mr-2 flex justify-center">
            <img className="h-full w-full object-cover rounded-md " src={`./facilityImages/${facility.facilityname.toLowerCase()}_0.jpg`} alt="Photo" ></img>
          </div>
          <div className=" md:truncate  h-full w-full flex flex-col mt-2 md:ml-10 ">
            <h1 className=" font-semibold text-lg md:text-3xl  ">{facilityname}</h1>
            <p className=" truncate text-xs md:text-sm">{location}</p>
            <p className="  md:font-semibold text-xs md:text-xl  ">Tel: {(tel)?tel: <>Not available</>}</p>
            <p className="  md:font-semibold text-xs md:text-xl  ">Email: {(email)?email:<>Not available</>} </p>                  
            
            {/*  */}
            {/* {name:facility.facilityname,email:facility.email,tel:facility.tel,location:facility.location} */}
          </div>
        </div>
      </Link>
      <div className='relative w-full flex flex-row justify-end p-1 bottom-3 md:bottom-5'>
        <div className="absolute bottom-3 md:bottom-1 flex">
          <button onClick={()=>showFacilityForm({name:facilityname,email,tel,location,_id}) } className=" h-6 button self-end text-sm mr-3 flex p-2 items-center  transition-all hover:bg-amber-700 hover:invert ">Edit <img className="h-4 mx-1 white " src="/icons8-edit.svg"/></button>
          <div className=" flex flex-col p- items-center justify-center">
              { isDeleting && <img className="h-6 text-blue-500" src="/Infinity-1s-200px_blue.svg"></img>}
              <button onClick={()=>handleDelete({_id}) } className=" h-6 button self-end text-sm mr-3 flex p-2 items-center  transition-all hover:bg-teal-400 hover:invert ">Delete <img className="h-3 mx-1 white " src="/icons8-trash.svg"/></button>
           </div> 
          
        </div>
      </div>
      
    </>
  )
}
