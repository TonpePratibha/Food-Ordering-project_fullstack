// import React, { useState } from 'react';
// import { TextField, Button, Box, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
// import Userservice from '../../service/Userservice';
// import Restaurentservice from '../../service/Restaurentservice';
// import Adminservice from '../../service/Adminservice';

// const staticCategories = [
//     { id: 1, name: 'MAHARASHTRIAN' },
//     { id: 2, name: 'CHINESE' },
//     { id: 3, name: 'SOUTHINDIAN' },
//     { id: 4, name: 'DESSERTS' },
//     { id: 5, name: 'BEVERAGES' },
// ];

// function Register({role}) {
//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//         address: '',
//         mobileno: '',
//         category: '',
//         adminName: '',
//         restaurentname:''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleCategoryChange = (e) => {
//         setFormData({
//             ...formData,
//             category: e.target.value,
//         });
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         console.log("Form Data Submitted:", formData);

//         try {
//             if (role === 'user') {
//                 await Userservice.registerUser(formData);
//             } else if (role === 'restaurant') {
//                 await Restaurentservice.registerRestro(formData);
//             } else if (role === 'admin') {
//                 await Adminservice.registerAdmin(formData);
//             }

//             alert("Registration successful");
//         } catch (error) {
//             console.error('Registration failed:', error.response ? error.response.data : error.message);
//             alert('Registration failed. Please try again.');
//         }
//     };

//     return (
//         <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
//             <Typography variant="h6" component="div" gutterBottom>
//                 Register {role.charAt(0).toUpperCase() + role.slice(1)}
//             </Typography>
//             <TextField
//                 fullWidth
//                 label="Email"
//                 name="email"
//                 margin="normal"
//                 required
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//             />
//             <TextField
//                 fullWidth
//                 label="Password"
//                 name="password"
//                 margin="normal"
//                 required
//                 type="password"
//                 value={formData.password}
//                 onChange={handleChange}
//             />
//             {role === 'user' && (
//  <>
//  <TextField
//      fullWidth
//      label="Username"
//      name="username"
//      margin="normal"
//      required
//      value={formData.username}
//      onChange={handleChange}
//  />
//  <TextField
//      fullWidth
//      label="Address"
//      name="address"
//      margin="normal"
//      required
//      value={formData.address}
//      onChange={handleChange}
//  />
//  <TextField
//      fullWidth
//      label="Mobile No"
//      name="mobileno"
//      margin="normal"
//      required
//      value={formData.mobileno}
//      onChange={handleChange}
//  />

//         </>    )}
         
//             {role === 'restaurant' && (
//                 <>
//                     <TextField
//                         fullWidth
//                         label="Restaurentname"
//                         name="restaurentname"
//                         margin="normal"
//                         required
//                         value={formData.restaurentname}
//                         onChange={handleChange}
//                     />
//                     <TextField
//                         fullWidth
//                         label="Address"
//                         name="address"
//                         margin="normal"
//                         required
//                         value={formData.address}
//                         onChange={handleChange}
//                     />
//                     <TextField
//                         fullWidth
//                         label="Mobile No"
//                         name="mobileno"
//                         margin="normal"
//                         required
//                         value={formData.mobileno}
//                         onChange={handleChange}
//                     />
//                     <FormControl fullWidth margin="normal">
//                         <InputLabel id="category-label">Category</InputLabel>
//                         <Select
//                             labelId="category-label"
//                             name="category"
//                             value={formData.category}
//                             onChange={handleCategoryChange}
//                             required
//                         >
//                             {staticCategories.map(category => (
//                                 <MenuItem key={category.id} value={category.name}>
//                                     {category.name}
//                                 </MenuItem>
//                             ))}
//                         </Select>
//                     </FormControl>
//                 </>
//             )}
//             {role === 'admin' && (
//                 <TextField
//                     fullWidth
//                     label="Admin Name"
//                     name="adminname"
//                     margin="normal"
//                     required
//                     value={formData.adminname}
//                     onChange={handleChange}
//                 />
//             )}
//             <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
//                 Register
//             </Button>
//         </Box>
//     );
// }

// export default Register;


import React, { useState } from 'react';
import { TextField, Button, Box, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Userservice from '../../service/Userservice';
import Restaurentservice from '../../service/Restaurentservice';

const staticCategories = [
    { id: 1, name: 'MAHARASHTRIAN' },
    { id: 2, name: 'CHINESE' },
    { id: 3, name: 'SOUTHINDIAN' },
    { id: 4, name: 'DESSERTS' },
    { id: 5, name: 'BEVERAGES' },
];

function Register({ role }) {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        mobileno: '',
        category: '',
        restaurentname: ''
    });

    const [errors, setErrors] = useState({
        mobile: '',
        password: '',
        confirmPassword: ''
    });

    const validatePassword = (password) => {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const isValid = password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber;
        
        if (!isValid) {
            return 'Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, and one number.';
        }
        return '';
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Validate mobile number
        if (name === 'mobileno') {
            const mobilePattern = /^[0-9]{10}$/;
            if (!mobilePattern.test(value)) {
                setErrors((prevErrors) => ({ ...prevErrors, mobile: 'Mobile number must be exactly 10 digits' }));
            } else {
                setErrors((prevErrors) => ({ ...prevErrors, mobile: '' }));
            }
        }

        // Validate password
        if (name === 'password') {
            const passwordError = validatePassword(value);
            setErrors((prevErrors) => ({ ...prevErrors, password: passwordError }));
        }

        // Validate confirm password
        if (name === 'confirmPassword') {
            if (value !== formData.password) {
                setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: 'Passwords do not match' }));
            } else {
                setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: '' }));
            }
        }

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

        // Prevent submission if there are validation errors
        if (errors.mobile || errors.password || errors.confirmPassword) {
            alert('Please fix the errors in the form');
            return;
        }

        console.log("Form Data Submitted:", formData);

        try {
            if (role === 'user') {
                await Userservice.registerUser(formData);
            } else if (role === 'restaurant') {
                await Restaurentservice.registerRestro(formData);
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
                error={!!errors.password}
                helperText={errors.password}
            />
            <TextField
                fullWidth
                label="Confirm Password"
                name="confirmPassword"
                margin="normal"
                required
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
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
                        error={!!errors.mobile}
                        helperText={errors.mobile}
                    />
                </>
            )}
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
                        error={!!errors.mobile}
                        helperText={errors.mobile}
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
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                Register
            </Button>
        </Box>
    );
}

export default Register;

