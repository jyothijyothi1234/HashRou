import React from "react";
import { Link } from "react-router-dom";



function Pagefound(){


    return(

        <div>
           <h1>404 page not found</h1>
           <p> please go to home page </p>
           <Link  to="/">gotohome</Link>
        </div>
    )
}

export default Pagefound;