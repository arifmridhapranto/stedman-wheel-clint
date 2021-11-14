import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Products from "./Pages/Products";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import DashBoard from "./Pages/DashBoard";
import AuthProvider from "./contexts/AuthProvider";
import Purchase from "./components/Purchase/Purchase";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/about'>
            <AboutUs></AboutUs>
          </Route>
          <Route path='/contact'>
            <ContactUs></ContactUs>
          </Route>
          <Route path='/products'>
            <Products></Products>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/registration'>
            <Registration></Registration>
          </Route>
          <PrivateRoute path='/purchase/:id'>
            <Purchase></Purchase>
          </PrivateRoute>
          <PrivateRoute path='/dashboard'>
            <DashBoard></DashBoard>
          </PrivateRoute>
          <PrivateRoute path='/dashboard/:topic'>
            <DashBoard></DashBoard>
          </PrivateRoute>

          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
