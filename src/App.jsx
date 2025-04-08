import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Portfolio from "./pages/Portfolio";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Password from "./pages/Password";
import Overview from "./pages/Overview";
import SideBar from "./pages/SideBar";
import UserDashboard from "./components/dashboards/userDashboard/UserDashboard";
import Investment from "./pages/Investment";
import Wallet from "./pages/Wallet";
import NewProject from "./pages/NewProject";
import Setting from "./pages/Setting";
import Profile from "./components/settings/profile/Profile";
import Notification from "./components/settings/notification/Notification";
import Billings from "./components/settings/billing/Billings";
import AdminSideBar from "./pages/AdminSideBar";
import AdminDashBoard from "./pages/AdminDashBoard";
import UserManagement from "./pages/UserManagement";
import AdminDashBoardMain from "./components/adminDashboard/AdminDashboards/AdminDashBoardMain";


const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeaderFooter =
    location.pathname.includes("/login") ||
    location.pathname.includes("/signup") ||
    location.pathname.includes("/forgotpassword") ||
    location.pathname.includes("/sidebar") ||
    location.pathname.includes("/adminSidebar");
  location.pathname.includes("/userDashboard");
  return (
    <div>
      {!hideHeaderFooter && <Header />}
      {children}
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="about" element={<About />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="contact" element={<Contact />} />
            <Route path="forgotpassword" element={<Password />} />
            <Route path="overview" element={<Overview />} />
            <Route path="userdashboard" element={<UserDashboard />} />
            <Route path="sidebar" element={<SideBar />}>
              <Route index element={<Overview />} />
              <Route path="overview" element={<Overview />} />
              <Route path="investments" element={<Investment />}>
                <Route path="projects" element={<NewProject />} />
              </Route>
              <Route path="wallet" element={<Wallet />} />
              <Route path="settings" element={<Setting />}>
                <Route index element={<Profile />} />
                <Route path="profile" element={<Profile />} />
                <Route path="notifications" element={<Notification />} />
                <Route path="billing" element={<Billings />} />
              </Route>
            </Route>
            <Route path="adminSidebar" element={<AdminSideBar />}>
              <Route index element={<AdminDashBoard />} />
              <Route path="adminDashboard" element={<AdminDashBoard />} />
              <Route path="userManagement" element={<UserManagement />} />
              {/* add your own routes here */}
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
