import "../styles.css"

const Button = ({handleClick}) => {
    return(
        <>
            <button onClick={handleClick} type="button" class="btn btn-success" >ADD</button>
        </>
    )
}

export default Button