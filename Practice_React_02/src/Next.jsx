import { Fragment } from "react";
import Times from './api/Times.json';
import Models from "./Models";
const Next = () =>{
    return( <Fragment>
        <ul>
            {Times.map((curr)=>{
               return <Models key={curr.id}  data={curr} />
            })
            }
        </ul>

    </Fragment>
        );
}

export default Next ;