import { Link } from "react-router-dom"


export default function Button({btnName, className, linkRef}){

    return(
        <Link to={linkRef} >
        <button className={className}>
            {btnName}
        </button>
        </Link>
    )
}