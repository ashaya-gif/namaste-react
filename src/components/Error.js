import { useRouteError } from "react-router"; //useRouterError is a hook it gives you more information about the error

const Error = () => {
    const err = useRouteError();
    console.log(err);//from here we fetced that we can use statusText below and then we used it
    return(
        <div>
            <h1>Oops... Something went wrong</h1>
            <h2>
                {err.status}: {err.statusText}
             </h2>
        </div>
    );
};

export default Error;