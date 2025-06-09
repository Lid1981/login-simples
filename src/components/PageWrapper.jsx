import { useEffect } from "react"

export default function PageWrapper({children}){
//use effect para pegar o token do localStorage
useEffect(() => {
    const token = localStorage.getItem('token');

    if(!token){
        window.location.href = '/'
    }
}, [])


    return(
        <div className="w-full h-screen bg-white text-black">
            {children}
        </div>

)}