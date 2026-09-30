import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import WebsiteLayout from "./layouts/WebsiteLayout"
import Home from "./pages/Home"
import Services from "./pages/Services"
import ServiceDetails from "./pages/ServiceDetails"
import About from "./pages/About"
import Pricing from "./pages/Pricing"
import Blog from "./pages/Blog"
import BlogDetails from "./pages/BlogDetails"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"

export default function App() {
  return (
    <BrowserRouter>
      <WebsiteLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home-two" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </WebsiteLayout>
    </BrowserRouter>
  )
}