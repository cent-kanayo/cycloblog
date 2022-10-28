import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import AdminDash from './components/AdminDash';
import BlogDetail from './components/BlogDetail';
import Contact from './components/Contact';
import Courses from './components/Courses';
import Home from './components/Home';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import SharedLayout from './components/SharedLayout';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="courses" element={<Courses />} />
          <Route path="blogs/:id" element={<BlogDetail />} />
          <Route
            path="admin"
            element={
              <ProtectedRoute>
                <AdminDash />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
