import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./components/home/Home";
import AboutUs from "./components/aboutUs/AboutUs";
import SearchACar from "./components/searchACar/SearchACar";
import CorporateEnquiries from "./components/CorporateEnquiries/CorporateEnquiries";
import OurClients from "./components/ourClients/OurClients";
import Blog from "./components/Blog/Blog";
import ContactUs from "./components/ContactUs/ContactUs";
import SignUp from "./components/reusableComponents/SignUp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TermsOfUse from "./components/termsOfUse/TermsOfUse";
import PrivacyPolicy from "./components/privacyPolicy/PrivacyPolicy";
import Faqs from "./components/FAQS/Faqs";
import BecomeAChauffuer from "./components/becomeAChauffer/BecomeAChauffuer";
import RegisterYourCar from "./components/registerYourCar/RegisterYourCar";
import CheckOut from "./components/checkout/CheckOut";
import Protected from "./components/Dashboard/Protected";
import Loader from "./components/reusableComponents/Loader";
import Loader2 from "./components/reusableComponents/Loader2";
import Dashboard from "./components/Dashboard/dashboard/Dashboard";
import RegisterYourCarPanel from "./components/Dashboard/dashboard/dashBoardRegisterCar/RegistrationDashboard";
import InvestorsCars from "./components/Dashboard/InvestorsCars/InvestorCars";
import CarsForApproval from "./components/Dashboard/dashboard/ApproveCars/ApproveCars";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/search-a-car" element={<SearchACar />} />
        <Route path="/corporate-enquiries" element={<CorporateEnquiries />} />
        <Route path="/our-clients" element={<OurClients />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/ChauffuerSignUp" element={<BecomeAChauffuer />} />
        <Route path="/register-your-car" element={<RegisterYourCar />} />
        <Route path="/check-out" element={<CheckOut />} />
        <Route path="/loading" element={<Loader />} />
        <Route path="/loading-2" element={<Loader2 />} />
        <Route path="/investors-Cars" element={<InvestorsCars />} />
        <Route path="/cars-for-approval" element={<CarsForApproval />} />
        <Route
          path="/register-car-via-panel"
          element={<RegisterYourCarPanel />}
        />
        {/* <Route path="/investor-panel" element={<Protected Cmp={Investor} />} /> */}

        <Route path="/dashboard" element={<Protected Cmp={Dashboard} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
