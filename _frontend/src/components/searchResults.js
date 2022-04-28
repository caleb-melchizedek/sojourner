import Link from 'next/link'
export default function SearchResults({searchResult,searched}){
  return(
    <>
      <Link href={`/rooms/${searchResult._id}`}  >
        <div className="w-full rounded-md bg-white h-68  md:h-44 flex flex-col md:flex-row items-start p-2 my-2 cursor-pointer">
          <div className=" h-36 w-full md:h-36 md:w-36 rounded-md md:mr-2 flex justify-center">
            <img className="h-full w-full object-cover rounded-md " src={`/facilityImages/${searchResult.facility.facilityname}_0.jpg`} ></img>
          </div>
          <div className=" md:truncate  h-full w-full flex flex-col mt-2 md:ml-10">
            <h1 className="font-semibold text-lg md:text-3xl ">{searchResult.facility.facilityname}</h1>
            <p className=" truncate text-xs md:text-sm ">{searchResult.facility.location}</p>
            <p className=" md:font-semibold text-xs md:text-xl "><strong>{searchResult.pricing.currency} {searchResult.pricing.amount}</strong> per {searchResult.pricing.paymentCycle}</p>
            <p className=" md:font-semibold text-xs md:text-xl ">{searchResult.roomCapacity} in a room</p>                  
          </div>
        </div>
      </Link>
    </>
  )
}
