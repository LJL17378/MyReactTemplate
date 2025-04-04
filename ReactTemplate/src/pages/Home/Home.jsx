import { useLocation } from "wouter";
import styles from "./Home.module.scss"
import classNames from "classnames";
import { Button } from "@mui/material";
import { useTest } from "../../query/tets/tets";
import { useEffect } from "react";
export default function Home() {
    const [location, navigate] = useLocation();
    const { data, isLoading } = useTest();
    useEffect(() => {
        console.log(data)
    }, [isLoading])
    return (
        <>
            <h1 className={classNames(styles.class1)}>Home</h1>
            <h2 onClick={() => navigate('/about')}>To About</h2>
            {data?.map((item) => {
                return item.id < 20 && 
                <div className="p-4 flex bg-slate-200 rounded m-4">
                    {item.id}
                    {item.title}
                </div>
            }
            )}
            <Button variant="contained">mui button</Button>
        </>
    )
}