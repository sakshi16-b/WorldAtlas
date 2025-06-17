import { useRouteError } from "react-router-dom"

function ErrorPage(){
    const error=useRouteError();
    return(
        <h1>Error Page</h1>
    )
}
export default ErrorPage;