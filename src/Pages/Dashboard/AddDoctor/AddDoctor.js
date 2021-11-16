import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Input } from '@mui/material';

const AddDoctor = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if (!image) {
            return;
        }

        const formData = new FormData();
        formData.append('name', name)
        formData.append('email', email)
        formData.append('image', image)

        fetch('https://doctors-portal-21k-server.herokuapp.com/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Doctor Added successfully')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    return (
        <div>
            <h1>Add Doctor</h1>
            <form action="" onSubmit={handleSubmit}>
                <TextField
                    onChange={e => setName(e.target.value)}
                    sx={{ width: '50%' }}
                    required
                    label="Name"
                    variant="standard"
                />
                <br />
                <TextField
                    onChange={e => setEmail(e.target.value)}
                    sx={{ width: '50%' }}
                    required
                    type="email"
                    label="Email"
                    variant="standard"
                />
                <br />
                <Input
                    onChange={e => setImage(e.target.files[0])}
                    accept="image/*"
                    type="file"
                />
                <br />
                <Button variant="contained" type="submit">
                    Add Doctor
                </Button>
            </form>
        </div >
    );
};

export default AddDoctor;