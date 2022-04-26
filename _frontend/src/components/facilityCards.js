import Link from 'next/link'
export default function FacilityCards({facility}){
  return(
    <>
      <Link href={`/admin/facility/${facility._id}`}  >
        <div className="w-full rounded-md bg-white h-40 flex flex-row items-start p-2 my-2 cursor-pointer">
          <div className="h-36 w-36 rounded-md mr-2">
            <img className="h-full w-full object-cover rounded-md" src="/bg.jpg"></img>
          </div>
          <div className=" h-full flex flex-col ml-10 ">
            <h1 className=" font-semibold text-3xl ">{facility.facilityname}</h1>
            <p className="  text-sm ">{facility.location}</p>
            <p className="  text-sm ">Tel: {facility.tel}</p>
            <p className="  text-sm ">Email: {(facility.email)?facility.email:<>Not available</>} </p>                  
          </div>
        </div>
      </Link>
    </>
  )
}
