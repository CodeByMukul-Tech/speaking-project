function Test(props){
    return(
        <div>
            <ul>
                <li>Hello{props.name} </li>
                <li>password is {props.password}</li>
                
            </ul>
        </div>
    )
}

export default Test;