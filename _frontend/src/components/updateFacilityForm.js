export default function UpdateFacilityForm (props){
    const{handleFacilityDetailsChange,handleSubmit,toggleFacilityForm,facilityInfo,error,submitting,}= props
    return(
        <form className=" facilityForm" onSubmit={(e)=>{handleSubmit(e)}} enctype="multipart/form-data">
            <div className="w-full flex justify-end mr-2 mt-2 text-lg cursor-pointer" onClick={toggleFacilityForm}><img className="h-5" src="https://img.icons8.com/ios/50/000000/cancel.png"/></div>
            <label className="text-xs text-gray-500 font-medium mb-3   ">Edit Facility Info</label>
            <input className="input" type="text" required name="facilityname" placeholder="Name" value={facilityInfo.facilityname} onChange={(e)=>{handleFacilityDetailsChange(e)}}></input>
            <input className="input" type="email"  name="email" placeholder="Email" value={facilityInfo.email} onChange={(e)=>{handleFacilityDetailsChange(e)}}></input>
            <input className="input" type="Number" required name="tel" placeholder="Telephone" value={facilityInfo.tel} onChange={(e)=>{handleFacilityDetailsChange(e)}}></input>
            <textarea required name="location" placeholder="Location" value={facilityInfo.location} onChange={(e)=>{handleFacilityDetailsChange(e)}}></textarea>
            <label className="text-xs text-gray-500 font-medium  ">Add more photos of the facility</label>
            <input multiple className="inputfile"  type="file" required name="images" placeholder="Image" accept="image/jpg" value={facilityInfo.img} onChange={(e)=>{handleFacilityDetailsChange(e)}}></input>
            <div className="flex flex-nowrap px-4 justify-center"><p className=" text-red-600 text-xs ">{error}</p></div>
            
            {
            submitting &&(
                <div className=" flex flex-col p- items-center justify-center">
                    <img className="h-6 text-blue-500" src="/Infinity-1s-200px_blue.svg"></img>
                </div>  
            )
            }
            <button type="submit"> Update</button>
        </form>
    )
}
