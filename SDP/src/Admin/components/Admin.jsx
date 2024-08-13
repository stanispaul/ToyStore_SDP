import React, { useState } from "react";
import {
  useTheme,
  useMediaQuery,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
  CssBaseline,
  Drawer,
  ListItemText,
  Box,
} from "@mui/material";
import { Route, Routes, useNavigate } from "react-router-dom";
import {
  Dashboard,
  ShoppingCart,
  People,
  AddCircleOutline,
} from "@mui/icons-material";
import PaymentsIcon from '@mui/icons-material/Payments';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import InboxIcon from "@mui/icons-material/Inbox";
import Dashboard1 from "./Dashboard1";
import CreateProductForm from "./CreateProductForm";
import OrdersTable from "./OrdersTable";
import CustomersTable from "./CustomersTable";
import ProductTable00 from "./ProductTable00";
import Payment from "./Payment";


const menu = [
  { name: "Dashboard", path: "/admin", icon: <Dashboard /> },
  { name: "Products", path: "/admin/products", icon: <ShoppingCart /> },
  { name: "Feedback", path: "/admin/feedback", icon: <People /> },
  { name: "Payment", path: "/admin/payment", icon: <PaymentsIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <ShoppingCart /> },
  {
    name: "AddProduct",
    path: "/admin/product/create",
    icon: <AddCircleOutline />,
  },
];

const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSidebarVisible] = useState(false);
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <Box>
        <List>
          {menu.map((item, index) => (
            <ListItem
              key={item.name}
              disablePadding
              onClick={() => navigate(item.path)}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.name}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
  
      
    </Box>
  );

  return (
    <div>
      <div className="flex h-[100vh] sticky top-0">
        <CssBaseline />

        <div className="w-[15%] border border-r-gray-300 h-full">
          {drawer}
        </div>

        <div className="w-[85%] ">
          <Routes>
            <Route path="/" element={<Dashboard1 />}></Route>
            <Route path="/product/create" element={<CreateProductForm />}></Route>
            <Route path="/products" element={<ProductTable00 />}></Route>
            <Route path="/orders" element={<OrdersTable/>}></Route>
            <Route path="/payment" element={<Payment/>}></Route>
            <Route path="/feedback" element={<CustomersTable/>}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
