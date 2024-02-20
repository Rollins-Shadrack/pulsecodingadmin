import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "@/pages/dashboard";
import Courses from "@/pages/courses";
import AllCourses from "@/pages/courses/AllCourses"
import SingleCourse from "@/pages/courses/singleCourse"
import Assessments from "@/pages/assessments";
import Challenges from "@/pages/challenges";
import Certification from "@/pages/certification";
import Project from "@/pages/project";
import Settings from "@/pages/settings";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* private routes */}
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="courses">
              <Route index element={<Courses />} />
              <Route path="all" element={<AllCourses />} />
              <Route path=":id" element={<SingleCourse />} />
            </Route>
            <Route path="assessments" element={<Assessments />} />
            <Route path="challenges" element={<Challenges />} />
            <Route path="certification" element={<Certification />} />
            <Route path="project" element={<Project />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* public routes */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App