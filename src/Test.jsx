import { Typography, Button, } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";


function Test() {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",    
    });

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    };
    
    return (
        <>
            <Typography variant="h1" className="text-green-500">Hello World</Typography>
            <div>
                <Button variant="contained" color="primary" size="large">FIRST</Button>
                <Button variant="outlined" color="error" size="medium" sx={{ ml: 2 }}>SECOND</Button>
                <Button variant="text" color="warning" size="small" className="ml-10">THIRD</Button>
            </div>
            <div className="m-50 bg-red-500">
                <form className="flex flex-col">  
                <TextField 
                    name="name"
                    value={inputs.name}
                    type="text"
                    onChange= {handleChange}
                    placeholder="Name"
                    variant="outlined"
                />
                <TextField
                    name="email"
                    value={inputs.email}
                    type="email"
                    onChange= {handleChange}
                    placeholder="Email"
                    variant="standard"
                />
                <TextField
                    name="password"
                    value={inputs.password}
                    onChange= {handleChange}
                    type="password"
                    placeholder="Password"
                    variant="filled"
                />
                </form>
                
            </div>
        </>
    )
}

export default Test 