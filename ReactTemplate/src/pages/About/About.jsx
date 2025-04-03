import styles from "./About.module.scss"
import classNames from "classnames"
import { userNameAtom } from "../../atoms/user"
import { useAtom } from "jotai"
export default function About() {
    const [userName, setUserName] = useAtom(userNameAtom)
    return (
        <>
            <h1 className={classNames(styles.class1, 'bg-white')}>About</h1>
            <h1>Hello, I'm {userName}</h1>
        </>
    )
}