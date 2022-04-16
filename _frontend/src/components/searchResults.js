export default function SearchResults(props){
  return(
        <div>
          <div className="w-full rounded-md bg-white h-40 flex flex-row items-start p-2 my-4">
            <div className="h-36 w-36 rounded-md mr-2">
              <img className="h-full w-full object-cover rounded-md" src="/bg.jpg"></img>
            </div>
            <div className=" h-full flex flex-col ml-10 ">
              <h1 className=" font-semibold text-3xl ">Facility Name {props.searchResult}</h1>
              <p className="  text-sm ">location</p>
              <p className=" font-semibold text-xl ">Price per Payment Cycle</p>
              <p className=" font-semibold text-xl ">Room Capacity</p>                  
            </div>
          </div>
        </div>
  )
}
