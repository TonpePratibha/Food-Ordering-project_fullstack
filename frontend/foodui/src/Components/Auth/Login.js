import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Userservice from '../../service/Userservice';
import Restaurentservice from '../../service/Restaurentservice';
import Adminservice from '../../service/Adminservice';
import { Box, TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

  
    
    
  
    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            let response;
    
            if (role === 'user') {
                response = await Userservice.loginUser({ email, password });
            } else if (role === 'restaurant') {
                response = await Restaurentservice.loginRestro({ email, password });
            } else if (role === 'admin') {
                response = await Adminservice.loginAdmin({ email, password });
            } else {
                throw new Error('Invalid role selected');
            }
    
            console.log('Login response:', response);
    
            if (response && response.data && response.data.id) {
                localStorage.setItem('userRole', role);
                localStorage.setItem('userId', response.data.id);
                if(role==='user'){
                    localStorage.setItem('username',response.data.username);
                }else if(role==='restaurent'){
                    localStorage.setItem('restaurentname',response.data.restaurentname);
                }
                
                
                const redirectPath = role === 'user' 
                    ? '/user-dashboard' 
                    : role === 'restaurant' 
                    ? '/restaurant-page' 
                    : '/admin-dashboard';
                    
                console.log('Redirecting to:', redirectPath);
                navigate(redirectPath);


                // Redirect based on role
                // if (role === 'user') {
                //     navigate('/user-dashboard');
                // } else if (role === 'restaurant') {
                //     navigate('/restaurant-page');
                // } else if (role === 'admin') {
                //     navigate('/admin-dashboard');
                // }

            } else {
                setError('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Login failed:', error);
            setError('Login failed. Please try again.');
        }
    };
    
    
    
    
    return (
        <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5, p: 3, border: '1px solid #ddd', borderRadius: 2, boxShadow: 3 }}>
            <Typography variant="h4" component="h2" gutterBottom>
                Login
            </Typography>
            <form onSubmit={handleLogin}>
                <FormControl fullWidth margin="normal">
                    <TextField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </FormControl>
                <FormControl fullWidth margin="normal">
                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </FormControl>
                <FormControl fullWidth margin="normal">
                    <InputLabel id="role-label">Role</InputLabel>
                    <Select
                        labelId="role-label"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                    >
                        <MenuItem value="">Select Role</MenuItem>
                        <MenuItem value="user">User</MenuItem>
                        <MenuItem value="restaurant">Restaurant</MenuItem>
                        <MenuItem value="admin">Admin</MenuItem>
                    </Select>
                </FormControl>
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                    Login
                </Button>
                {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
            </form>
        </Box>
    );
};

export default Login;
