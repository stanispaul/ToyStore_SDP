import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/HomePage/HomePage";
import Navigation from "../customer/components/Navigation/navigation";
import Footer from "../customer/components/Footer/Footer";
import Product from "../customer/components/Product/Product";
import Cart from "../customer/components/Cart/Cart";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/Order/Order";
import OrderDetails from "../customer/components/Order/OrderDetails";
import TermsAndConditions from "../Pages/TermsAndConditions";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import FAQ from "../Pages/FAQ";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import PaymentSuccess from "../customer/components/Payment/PaymentSuccess";
import ProfileCard from "../Pages/ProfileCard";
import PaymentForm from "../customer/components/Payment/PaymentForm";


const CustomerRouters = () => {
  
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<HomePage />} />
        <Route path="/register" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/t&s" element={<TermsAndConditions />} />
        <Route path="/policy" element={<PrivacyPolicy />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route
          path="/:lavelOne/:lavelTwo/:lavelThree"
          element={<Product />}
        />
        <Route
          path="/product/:productId"
          element={<ProductDetails />}
        />
        <Route
          path="/checkout"
          element={<Checkout />}
        />
        <Route
          path="/account/order"
          element={<Order />}
        />
        <Route
          path="/account/order/:orderId"
          element={<OrderDetails />}
        />
        <Route
          path="/payment/:orderId"
          element={<PaymentSuccess />}
        />
        <Route
          path="/profile"
          element={<ProfileCard />}
        />
        <Route path="/payment" element={<PaymentForm />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;
