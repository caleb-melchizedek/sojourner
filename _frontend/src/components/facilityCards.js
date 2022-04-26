import Link from 'next/link'
export default function FacilityCards({facility}){
  return(
    <>
      <Link href={`/admin/facility/${facility._id}`}  >
        <div className="w-full rounded-md bg-white h-30 md:h-40 flex flex-row items-start p-1 md:p-2 my-2 cursor-pointer">
          <div className="h-24 md:h-36 w-24 md:w-36 rounded-md md:mr-2">
            <img className="h-full w-full object-cover rounded-md" src="/bg.jpg"></img>
          </div>
          <div className=" h-full flex flex-col ml-4 md:ml-10 ">
            <h1 className=" font-semibold text-lg md:text-3xl  ">{facility.facilityname}</h1>
            <p className="  text-xs md:text-sm">{facility.location}</p>
            <p className="  md:font-semibold text-xs md:text-xl  ">Tel: {facility.tel}</p>
            <p className="  md:font-semibold text-xs md:text-xl  ">Email: {(facility.email)?facility.email:<>Not available</>} </p>                  
          </div>
        </div>
      </Link>
    </>
  )
}
