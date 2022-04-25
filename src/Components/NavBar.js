import { Link } from "react-router-dom"

export default function NavBar () {
    return (
        <nav>
            <h1>
                <Link to = ""> THEODORE FRAZIER</Link>
            </h1>
            <button>
                <Link to = ""> View My Resume</Link>
            </button>
        </nav>
    )
}