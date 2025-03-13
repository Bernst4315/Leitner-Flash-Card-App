import { Link } from "react-router-dom"


export default function Button({btnName, className, linkRef, type}){

    return(
        <Link to={linkRef} >
        <button className={className} type={type}>
            {btnName}
        </button>
        </Link>
    )
}