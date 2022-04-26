export default function LoginForm (props){
    const{handleLoginDetailsChange,handleLogin,toggleLogin,loginError,loginIn}= props
    return(
        <form className="login" onSubmit={(e)=>{handleLogin(e)}}>
            <div className="w-full flex justify-end mr-2 mt-2 text-lg cursor-pointer" onClick={toggleLogin}><img className="h-5" src="https://img.icons8.com/ios/50/000000/cancel.png"/></div>
            <label className="text-xs text-gray-500 font-medium mb-3   ">login as admin</label>
            <input type="email" required name="email" placeholder="Email" onChange={(e)=>{handleLoginDetailsChange(e)}}></input>
            <input type="password" required name="password" placeholder="Password" onChange={(e)=>{handleLoginDetailsChange(e)}} ></input>
            <div className="flex flex-nowrap px-4 justify-center"><p className=" text-red-600 text-xs ">{loginError}</p></div>
            
            {
            loginIn &&(
                <div className=" flex flex-col p- items-center justify-center">
                    <img className="h-6 text-blue-500" src="Infinity-1s-200px_blue.svg"></img>
                </div>  
            )
            }
            <button type="submit"> login</button>
        </form>
    )
}
