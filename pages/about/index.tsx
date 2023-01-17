import {NextPage} from "next";

const About:NextPage =()=>{{
    return(
        <div>
            <h1>About Page</h1>
            <p>This is a About page for test</p>
            <a style={{color:'blue'}} href={"/blog"}>Blog</a>
        </div>
        
    )
}}
export default About;