import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import DashboardHome from "../components/Dashboard/DashboardHome/DashboardHome";
import Pay from "../Pages/Pay";
import MyOrders from "../Pages/MyOrders";
import AddProduct from "../Pages/AddProduct";
import MakeAdmin from "../Pages/MakeAdmin";
import ManageProducts from "../Pages/ManageProducts";
import ManageAllOrders from "../Pages/ManageAllOrders";
import { Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import UpdateProduct from "./UpdateProduct";
import AddReview from "./AddReview";
import useAuth from "../hooks/useAuth";
import AdminRoute from "../AdminRoute/AdminRoute";

const drawerWidth = 240;

const DashBoard = (props) => {
  const { admin, logOut } = useAuth();
  let { path, url } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ backgroundColor: '"#1ba370"' }}>
      <Toolbar />
      <Divider />
      <List>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <Link to='/' style={{ textDecoration: "none" }}>
              <Button variant='text'>
                <KeyboardArrowRightIcon /> Home
              </Button>
            </Link>
          </li>
          <li>
            <Link to='/dashboard' style={{ textDecoration: "none" }}>
              <Button variant='text'>
                <KeyboardArrowRightIcon /> Dashboard
              </Button>
            </Link>
          </li>
          {!admin && (
            <Box>
              <li>
                <Link to={`${url}/myorders`} style={{ textDecoration: "none" }}>
                  <Button variant='text'>
                    <KeyboardArrowRightIcon /> My Orders
                  </Button>
                </Link>
              </li>
              <li>
                <Link
                  to={`${url}/addreview`}
                  style={{ textDecoration: "none" }}>
                  <Button variant='text'>
                    <KeyboardArrowRightIcon /> ADD Review
                  </Button>
                </Link>
              </li>
              <li>
                <Link to={`${url}/pay`} style={{ textDecoration: "none" }}>
                  <Button variant='text'>
                    <KeyboardArrowRightIcon /> Pay
                  </Button>
                </Link>
              </li>
            </Box>
          )}
          {admin && (
            <Box>
              <li>
                <Link
                  to={`${url}/addproduct`}
                  style={{ textDecoration: "none" }}>
                  <Button variant='text'>
                    <KeyboardArrowRightIcon /> Add Product
                  </Button>
                </Link>
              </li>
              <li>
                <Link
                  to={`${url}/manageorders`}
                  style={{ textDecoration: "none" }}>
                  <Button variant='text'>
                    <KeyboardArrowRightIcon /> Manage All Orders
                  </Button>
                </Link>
              </li>
              <li>
                <Link
                  to={`${url}/manageproducts`}
                  style={{ textDecoration: "none" }}>
                  <Button variant='text'>
                    <KeyboardArrowRightIcon /> Manage All Products
                  </Button>
                </Link>
              </li>
              <li>
                <Link
                  to={`${url}/makeadmin`}
                  style={{ textDecoration: "none" }}>
                  <Button variant='text'>
                    <KeyboardArrowRightIcon /> Make An Admin
                  </Button>
                </Link>
              </li>
            </Box>
          )}
          <li>
            <Button variant='text' onClick={logOut}>
              <KeyboardArrowRightIcon /> Log Out
            </Button>
          </li>
        </ul>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap component='div'>
            DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='mailbox folders'>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open>
          {drawer}
        </Drawer>
      </Box>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}>
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <DashboardHome />
          </Route>
          <Route path={`${path}/pay`}>
            <Pay />
          </Route>
          <Route path={`${path}/myOrders`}>
            <MyOrders />
          </Route>
          <Route path={`${path}/addreview`}>
            <AddReview />
          </Route>
          <AdminRoute path={`${path}/addproduct`}>
            <AddProduct />
          </AdminRoute>
          <AdminRoute path={`${path}/makeadmin`}>
            <MakeAdmin />
          </AdminRoute>
          <AdminRoute path={`${path}/manageproducts`}>
            <ManageProducts />
          </AdminRoute>
          <AdminRoute path={`${path}/manageorders`}>
            <ManageAllOrders />
          </AdminRoute>
          <AdminRoute path={`${path}/productupdate/:id`}>
            <UpdateProduct />
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
};

export default DashBoard;
