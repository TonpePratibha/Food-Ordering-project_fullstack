// import React from 'react';
// import { Navigate } from 'react-router-dom';

// // Higher-Order Component to protect routes
// const ProtectedRoute = ({ component: Component, allowedRoles, ...rest }) => {
//     const userRole = localStorage.getItem('userRole');

//     if (!userRole) {
//         // If no role, redirect to login page
//         return <Navigate to="/login" />;
//     }

//     if (allowedRoles && !allowedRoles.includes(userRole)) {
//         // If user role is not allowed, redirect to an error page or another route
//         return <Navigate to="/unauthorized" />;
//     }

// //     return <Component {...rest} />;
// // };

// // export default ProtectedRoute;

// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ component: Component, allowedEntities, ...rest }) => {
//     const userEntity = localStorage.getItem('userEntity');

//     if (!userEntity) {
//         // If no entity, redirect to login page
//         return <Navigate to="/login" />;
//     }

//     if (allowedEntities && !allowedEntities.includes(userEntity)) {
//         // If user entity is not allowed, redirect to an error page or another route
//         return <Navigate to="/unauthorized" />;
//     }

//     return <Component {...rest} />;
// };

// export default ProtectedRoute;


