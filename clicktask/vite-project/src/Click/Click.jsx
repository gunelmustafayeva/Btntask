import './Click.css'


function Click({state,setState}){
    return ( 
        <button onClick={() =>setState(!state)}>Subscribed</button>
    )
}

export default Click
