import Link from 'next/link'
export default function SearchResults({searchResult,searched}){
  return(
    <>
      <Link href={`/rooms/${searchResult._id}`}  >
        <div className="w-full rounded-md bg-white h-40 flex flex-row items-start p-2 my-2 cursor-pointer">
          <div className="h-36 w-36 rounded-md mr-2">
            <img className="h-full w-full object-cover rounded-md" src="/bg.jpg"></img>
          </div>
          <div className=" h-full flex flex-col ml-10 ">
            <h1 className=" font-semibold text-3xl ">{searchResult.facility.facilityname}</h1>
            <p className="  text-sm ">{searchResult.facility.location}</p>
            <p className=" font-semibold text-xl ">{searchResult.pricing.currency} {searchResult.pricing.amount} per {searchResult.pricing.paymentCycle}</p>
            <p className=" font-semibold text-xl ">{searchResult.roomCapacity} in a room</p>                  
          </div>
        </div>
      </Link>
    </>
  )
}
