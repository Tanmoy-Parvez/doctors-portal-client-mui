import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div>
            <h2>Our Doctors: {doctors.length}</h2>
            <Grid container spacing={2}>
                {
                    doctors.map(doctor =>
                        <Grid key={doctor._id} item xs={12} sm={6} md={4} >
                            <img src={`data:image/jpeg;base64,${doctor?.image}`} width="200px" alt="" />
                            <Typography variant="h5" component="div">
                                {doctor.name}
                            </Typography>
                        </Grid>
                    )
                }

            </Grid>
        </div>
    );
};

export default Doctors;