import React, { useState } from 'react';
import { TextField, Button, Box, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Userservice from '../../service/Userservice';
import Restaurentservice from '../../service/Restaurentservice';
import Adminservice from '../../service/Adminservice';

const staticCategories = [
    { id: 1, name: 'MAHARASHTRIAN' },
    { id: 2, name: 'CHINESE' },
    { id: 3, name: 'SOUTHINDIAN' },
    { id: 4, name: 'DESSERTS' },
    { id: 5, name: 'BEVERAGES' },
];

function Register({role}) {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        mobileno: '',
        category: '',
        adminName: '',
        restaurentname:''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCategoryChange = (e) => {
        setFormData({
            ...formData,
            category: e.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log("Form Data Submitted:", formData);

        try {
            if (role === 'user') {
                await Userservice.registerUser(formData);
            } else if (role === 'restaurant') {
                await Restaurentservice.registerRestro(formData);
            } else if (role === 'admin') {
                await Adminservice.registerAdmin(formData);
            }

            alert("Registration successful");
        } catch (error) {
            console.error('Registration failed:', error.response ? error.response.data : error.message);
            alert('Registration failed. Please try again.');
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <Typography variant="h6" component="div" gutterBottom>
                Register {role.charAt(0).toUpperCase() + role.slice(1)}
            </Typography>
            <TextField
                fullWidth
                label="Email"
                name="email"
                margin="normal"
                required
                type="email"
                value={formData.email}
                onChange={handleChange}
            />
            <TextField
                fullWidth
                label="Password"
                name="password"
                margin="normal"
                required
                type="password"
                value={formData.password}
                onChange={handleChange}
            />
            {role === 'user' && (
 <>
 <TextField
     fullWidth
     label="Username"
     name="username"
     margin="normal"
     required
     value={formData.username}
     onChange={handleChange}
 />
 <TextField
     fullWidth
     label="Address"
     name="address"
     margin="normal"
     required
     value={formData.address}
     onChange={handleChange}
 />
 <TextField
     fullWidth
     label="Mobile No"
     name="mobileno"
     margin="normal"
     required
     value={formData.mobileno}
     onChange={handleChange}
 />

        </>    )}
         
            {role === 'restaurant' && (
                <>
                    <TextField
                        fullWidth
                        label="Restaurentname"
                        name="restaurentname"
                        margin="normal"
                        required
                        value={formData.restaurentname}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        label="Address"
                        name="address"
                        margin="normal"
                        required
                        value={formData.address}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        label="Mobile No"
                        name="mobileno"
                        margin="normal"
                        required
                        value={formData.mobileno}
                        onChange={handleChange}
                    />
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="category-label">Category</InputLabel>
                        <Select
                            labelId="category-label"
                            name="category"
                            value={formData.category}
                            onChange={handleCategoryChange}
                            required
                        >
                            {staticCategories.map(category => (
                                <MenuItem key={category.id} value={category.name}>
                                    {category.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </>
            )}
            {role === 'admin' && (
                <TextField
                    fullWidth
                    label="Admin Name"
                    name="adminname"
                    margin="normal"
                    required
                    value={formData.adminname}
                    onChange={handleChange}
                />
            )}
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                Register
            </Button>
        </Box>
    );
}

export default Register;




