import { useState, useEffect} from "react";

const Login = () => {

    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState()

    useEffect(() => {
        localStorage.setItem("email", JSON.stringify(email));
        localStorage.setItem("password", JSON.stringify(password));
      }, [email, password]);

    const handleSubmit = async e => {
        e.preventDefault();
        console.log("Value Submitted");
    }
    if (user) {
        return <div>Welcome {user.name}!</div>;
    }

    return (
        <div>
            <h3>LOGIN SCREEN</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email: </label>
                <input
                    type="email"
                    value={email}
                    required
                    placeholder="neha@gmail.com"
                    onChange={({ target }) => setemail(target.value)
                    }
                />
                <div>
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        value={password}
                        required
                        placeholder="enter a password"
                        onChange={({ target }) => setPassword(target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;