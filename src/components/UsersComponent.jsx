import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from "../redux/actions/users";
import Card from './CardComponent'

const Users = () => {

    const dispatch = useDispatch()
    const users = useSelector(state => state.Users.users);
    console.log(users)

    useEffect(() => {
        dispatch(getUsers([{
            id: 1,
            name: 'Neha',
            company: {
                name: 'Calibraint',
                place: 'Chennai'
            }
        }]))
    },[])

    return (
        <>
            {users.length > 0 && users.map((user) => (
                <Card key={user.id} user={user} />
            ))}
            {users.length === 0 && <p>No users available!</p>}
            <Card />
        </>
    )
}

export default Users;