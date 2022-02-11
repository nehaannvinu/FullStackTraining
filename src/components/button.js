const Button = ({handleClick}) => {
    return(
        <div>
            <button onClick={handleClick} type="button" class="btn btn-success" >ADD</button>
        </div>
    )
}

export default Button