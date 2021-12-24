import propTypes from "prop-types";


function Card({children, reverse}) {
    // return (
    //     <div className={`card ${reverse && 'reverse'}`}>
    //         {children}
    //     </div> 
    //     This is 'conditional class', can change based off the 
    //     prop ({reverse = true}) we pass in
    // )
    return (
        <div className="card" style={{
            backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
            color: reverse ? '#fff' : '#000',
        }}>{children}</div>
    )
    // This is a 'conditional styles', we're inputting inline css styles 
    //and hence not taking from index.css as the former
}

Card.defaultProps = {
    reverse: false,
}


Card.propTypes = {
    children: propTypes.node.isRequired, //will give an error if NO children props is passed
    reverse: propTypes.bool, //optional
}
export default Card
