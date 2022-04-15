import SearchSection from "../components/searchSection"

export default function Search(Props){

    return(
        <>
        <div className="bg-[url('/bg.jpg')] bg-cover bg-fixed ">
            <div className="backdrop-blur-sm min-h-screen">
             <SearchSection/>
            </div>
        </div>
        </>
    )
}