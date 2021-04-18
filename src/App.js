import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/HomePage/Home/Home';
import AdminPage from './components/AdminPage/AdminPage/AdminPage';
import AddService from './components/AdminPage/AddService/AddService';
import UserPage from './components/UserPage/UserPage/UserPage';
import AddReview from './components/UserPage/AddReview/AddReview';
import Book from './components/UserPage/Book/Book';
import { createContext, useState } from 'react';
import Payment from './components/UserPage/Payment/Payment';
import UserBookingList from './components/UserPage/UserBookingList/UserBookingList';
import Login from './components/Shared/Login/Login';
import PrivateRoute from './components/Shared/PrivateRoute/PrivateRoute';
import MakeAdmin from './components/AdminPage/MakeAdmin/MakeAdmin';
import AllBooking from './components/AdminPage/AllBooking/AllBooking';
import NotFound from './components/NotFound/NotFound';

export const userContext = createContext();
export const serviceContext = createContext();


function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  const [services, setServices] = useState([]);

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <serviceContext.Provider value={[services, setServices]}>
   <Router>
     <Switch>
       <Route path="/home">
          <Home></Home>
       </Route>
       <Route exact path="/">
          <Home></Home>
       </Route>
       <PrivateRoute path="/admin">
          <AdminPage></AdminPage>
       </PrivateRoute>
       <PrivateRoute path="/user">
          <UserPage></UserPage>
       </PrivateRoute>
       <Route path="/addservice">
          <AddService></AddService>
       </Route>
       <Route path="/book">
          <Book></Book>
       </Route>
       <Route path="/pay">
          <Payment></Payment>
       </Route>
       <Route path="/allbooking">
          <AllBooking></AllBooking>
       </Route>
       <Route path="/userbooking">
          <UserBookingList></UserBookingList>
       </Route>
       <Route path="/addreview">
          <AddReview></AddReview>
       </Route>
       <Route path="/makeadmin">
          <MakeAdmin></MakeAdmin>
       </Route>
       <Route path="/login">
          <Login></Login>
       </Route>
       <Route path="*">
          <NotFound></NotFound>
       </Route>
       
     </Switch>
   </Router>
   </serviceContext.Provider>
   </userContext.Provider>
  );
}

export default App;
