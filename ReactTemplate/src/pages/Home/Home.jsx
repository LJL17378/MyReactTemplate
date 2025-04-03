import { useLocation } from "wouter";
import styles from "./Home.module.scss"
import classNames from "classnames";
import { Button } from "@mui/material";
export default function Home(){
    const[location, navigate] = useLocation();
    return(
        <>
            <h1 className={classNames(styles.class1)}>Home</h1>
            <h2 onClick={()=> navigate('/about')}>To About</h2>
            <Button variant="contained">mui button</Button>
        </>
    )
}