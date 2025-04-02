import { useLocation } from "wouter";
export default function Home(){
    const[location, navigate] = useLocation();
    return(
        <>
            <h1>Home</h1>
            <h2 onClick={()=> navigate('/about')}>To About</h2>
        </>
    )
}