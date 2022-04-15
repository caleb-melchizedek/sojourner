export default function SearchSection(props){
    const{handleSubmit}=props
    return(
        <>
        <form className="search">
                <div className="w-full flex justify-center mb-4 ">
                  {/* whats your budget? lowest */}
                  <div className="flex flex-col items-center m-4">
                    <label className="text-white font-medium mb-2">I'll spend at least</label>
                    <input className="" type="text" placeholder="GHC"></input>
                  </div>
                  {/* whats your budget? highest */}
                  <div className="flex flex-col items-center m-4">
                    <label className="text-white font-medium mb-2">I'll spend at most</label>
                  <input type="text" placeholder="GHC"></input>
                  </div>
                  {/*  whats your budget? room capacity*/}
                  <div className="flex flex-col items-center m-4">
                    <label className="text-white font-medium mb-2">Room capacity</label>
                  <input type="Number" min={"1"} max={"4"} placeholder="People per room"></input>
                  </div>
                  {/* whats your budget? payment cycle */}
                  <div className="flex flex-col items-center m-4">
                    <label className="text-white font-medium mb-2">Payment cycle</label>
                  <select >
                    <option value={"Month"}>Month</option>
                    <option value={"Semester"}>Semester</option>
                    <option value={"Year"}>Year</option>
                  </select>
                  </div>
                </div>
                <button type="submit" onSubmit={()=>{handleSubmit(e)}}> Search</button>
              </form>
        </>
    )
}