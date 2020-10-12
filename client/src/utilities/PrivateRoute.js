import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {  // renamed my component to Component for use in my render 
    return (
        
        <Route
            {...rest}
            render={props =>
                localStorage.getItem("token") ? ( //  recieved the token from server  
                    <Component {...props} />
                ) : 
                (
                        <Redirect to="/login" />
                        )
            }
        />
    );
};

export default PrivateRoute;


// This is my utility closet 