import React, { useState } from 'react';
import { Avatar, IconButton, Modal, Box, Tabs, Tab, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [tabValue, setTabValue] = useState(0);
    const [role, setRole] = useState(''); // Default role is 'user'

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleTabChange = (event, newValue) => setTabValue(newValue);
    const handleRoleChange = (event) => setRole(event.target.value);

    return (
        <div className='px-5 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between'>
            <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
                <span className='logo font-semibold text-gray-300 text-2xl'>
                    VyanjanVibes
                </span>
            </div>

            <div className='flex items-center space-x-2 lg:space-x-10'>
                 <div>
                     {/* <IconButton>
                        <SearchIcon sx={{ fontSize: '1.5rem' }} />
                    </IconButton> */}
                    
 
<div> 

</div>
                </div>
                <div>
                    <Avatar sx={{ bgcolor: 'white', color: 'red' }} onClick={handleOpen}></Avatar>
                </div>
               
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
                    <Typography id="modal-title" variant="h6" component="h2">
                        {tabValue === 0 ? 'Login' : 'Register'}
                    </Typography>
                    <Tabs value={tabValue} onChange={handleTabChange} aria-label="login-register tabs">
                        <Tab label="Login" />
                        <Tab label="Register" />
                    </Tabs>
                    {tabValue === 1 && (
                        <Box sx={{ mt: 2 }}>
                            <Typography variant="h6" gutterBottom>
                                Select Role
                            </Typography>
                            <FormControl fullWidth margin="normal">
                                <InputLabel id="role-label">Role</InputLabel>
                                <Select
                                    labelId="role-label"
                                    value={role}
                                    onChange={handleRoleChange}
                                    label="Role"
                                >
                                    <MenuItem value="user">User</MenuItem>
                                    <MenuItem value="restaurant">Restaurant</MenuItem>
                                    
                                </Select>
                            </FormControl>
                        </Box>
                    )}
                    <Box sx={{ p: 2 }}>
                        {tabValue === 0 ? <Login role={role} /> : <Register role={role} />}
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};

export default NavBar;

