import { useRouteError } from "react-router-dom";
export default function ErrorPage() {
    const error = useRouteError();
    return(
        <div  className="flex flex-col justify-center items-center w-full h-80 font-bold italic">
            <h1>Ooops!</h1>
            <p>Sorry the unexpencrted error</p>
            <p>
                <i>{error.statusText || error.message} :(</i>
            </p>
        </div>
    )
}