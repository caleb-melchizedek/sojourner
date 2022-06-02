export default function SearchSection(props){
    const{handleSubmit,handleSearchParamChange}=props
    return(
        <>
        <form className="search" onSubmit={(e)=>{handleSubmit(e)}}>
                <div className="w-full flex flex-col md:flex-row justify-center mb-4  ">
                  {/* whats your budget? lowest */}
                  <div className="flex flex-col items-center m-4">
                    <label className="text-black font-medium mb-2">I'll spend at least</label>
                    <input name="lowestPrice" onChange={(e)=>{handleSearchParamChange(e)}} className="" type="Number" min={"0"} placeholder="GHC"></input>
                  </div>
                  {/* whats your budget? highest */}
                  <div className="flex flex-col items-center m-4">
                    <label className="text-black font-medium mb-2">I'll spend at most</label>
                  <input name="highestPrice" onChange={(e)=>{handleSearchParamChange(e)}} type="Number" min={"0"} placeholder="GHC"></input>
                  </div>
                  {/*  whats your budget? room capacity*/}
                  <div className="flex flex-col items-center m-4">
                    <label className="text-black font-medium mb-2">Room capacity</label>
                  <input name="roomCapacity" onChange={(e)=>{handleSearchParamChange(e)}} type="Number" min={"1"} max={"4"} placeholder="People per room"></input>
                  </div>
                  {/* whats your budget? payment cycle */}
                  <div className="flex flex-col items-center m-4">
                    <label className="text-black font-medium mb-2">Payment cycle</label>
                  <select name="paymentCycle" onChange={(e)=>{handleSearchParamChange(e)}}>
                    <option value={""}>Any</option> 
                    <option value={"month"}>Month</option>
                    <option value={"semester"}>Semester</option>
                    <option value={"year"}>Year</option>
                    
                  </select>
                  </div>
                </div>
                <button type="submit"> Search</button>
              </form>
        </>
    )
}