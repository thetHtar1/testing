import Link from "next/link"
import { useRouter } from "next/router";
import { useEffect } from "react";

const Page404 =() =>{
    const router= useRouter()
    useEffect (()=>{
        setTimeout(()=>{
           router.push('/')
        }, 10000)
    },[])
    return(
        <div>
            <p>Oops</p>
            <p>This page is not found If you want to reutrn to home Page </p>
            <Link href={'/'}>
           click Here
            </Link>
        </div>
    )
}
export default Page404;