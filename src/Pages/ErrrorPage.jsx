import {NavLink ,useRouteError } from "react-router-dom"

function ErrorPage(){
    const error=useRouteError();
    console.log(error)
    return(
        <div>
        <h1> Oops! An Error occured</h1>
        {error && <p>{error.status}</p>}
        <NavLink to="/"><button className="btnclass">Go Home</button></NavLink>
        </div>
        
    
    )
}
export default ErrorPage;