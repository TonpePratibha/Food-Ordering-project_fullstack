
import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { darkTheme } from './Components/NavBar/Themes/Darkthemes';
import Home from './Components/Home/Home';
import UserPage from './Components/Pages/UserPage';
import { Navigate, Route,Routes,Router } from 'react-router-dom';
import AdminPage from './Components/Pages/AdminPage';
import RestaurentPage from './Components/Pages/RestaurentPage';
import ProtectedRoute from './Components/Router/ProtectedRoute'
import Logout from './Components/Auth/Logout';
import Login from './Components/Auth/Login';
import RestaurantPage from './Components/Pages/RestaurentPage';
import UpdateRestaurent from './Components/Pages/UpdateRestaurent';
import UpdateItems from './Components/Pages/Items/UpdateItems';
import AddItems from './Components/Pages/Items/AddItems';


function App() {
  const userRole = localStorage.getItem('userRole');
  console.log(userRole);
  return (
    <ThemeProvider theme={darkTheme}>
     <CssBaseline/>
     <NavBar/>
     
     
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
                <Route
                    path="/user-dashboard"
                    
                    element={userRole === 'user' ? <UserPage /> : <Navigate to="/" />}
                />
                <Route
                    path="/restaurant-page"
                   
                    element={userRole === 'restaurant' ? <RestaurentPage /> : <Navigate to="/" />}
                />
                <Route
                    path="/admin-dashboard"
                    element={userRole === 'admin' ? <AdminPage/> : <Navigate to="/" />}
                />
                <Route path="/logout" element={<Logout />} />
                <Route path='/edit-restaurant' element={<UpdateRestaurent/>}></Route>
                <Route path='/edit-item/:id'element={<UpdateItems/>}></Route>
                <Route path='/add-item' element={<AddItems/>}></Route>
                
      </Routes>
     
      
    </ThemeProvider>

  );
}

export default App;
