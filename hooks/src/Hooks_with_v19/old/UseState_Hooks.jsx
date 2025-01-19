/*
use state hook is a function react version v16.8 and 
they is use to manage the state of current value
after update the value and store it ..

use example jasa 
shooping cart ma kisi bhi item ka button pa click karka 
use store car satkta hai use .. 
cart empty hai agar user na koi add item nhi kara hai ...
cart empty hogi phele se 

example no of followers ek id ma kitna hai on instagram,facebook,twiter(x) 

*/

import { useState } from "react";
import { Fragment } from "react";
function Likes(){
     const [current_likes , setlikes]= useState(0)

     const like_button=()=>{
        setlikes((cur)=>cur+1 );
     }

    return (
        <Fragment>
            
             <button id="Like_button" onClick={like_button} >
                <img id="like_button_image" src="heart.jpeg" alt="heart" />
                <p id="like_count"> {current_likes} </p>
             </button>

                      
        </Fragment>
    )
}
export default Likes;
