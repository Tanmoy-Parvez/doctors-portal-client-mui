import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        e.preventDefault();
        const user = { email }
        fetch('https://doctors-portal-21k-server.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }
    return (

        <div>
            <h1>Make Admin</h1>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    onBlur={handleOnBlur}
                    type="email"
                    label="Email"
                    variant="outlined"
                    sx={{ width: '50%', m: 1 }} />
                <br />
                <Button type="submit" variant="contained">Submit</Button>
            </form>
        </div >
    );
};

export default MakeAdmin;