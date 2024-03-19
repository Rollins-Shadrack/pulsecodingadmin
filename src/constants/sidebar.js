import { BarChart, BookCheck, BookOpenCheck, BookPlus, FilePlus2, Folders, GraduationCap, Home,  Layers, SquarePen, Star, UserCog2, UserPlus, Users, UsersRound } from "lucide-react";

export const menu = [
  { name: "Dashboard", link: "/dashboard", icon: Home },
  {
    name: "Manage Courses",
    link: "courses",
    icon: GraduationCap,
    submenu: [
      { name: "All Courses", link: "courses/all", icon: BookCheck },
      { name: "My Courses", link: "courses", icon: BookOpenCheck },
      { name: "Add Course", link: "courses/new", icon: BookPlus },
    ],
  },
  {
    name: "Manage Instructor",
    link: "courses",
    icon: UserCog2,
    submenu: [
      { name: "All Instructors", link: "instructors", icon: Users },
      { name: "Add Instructor", link: "instructors/new", icon: UserPlus },
    ],
  },
  {
    name: "Manage Students",
    link: "courses",
    icon: UsersRound,
    submenu: [
      { name: "All Students", link: "students", icon: Users },
      { name: "Add Student", link: "students/new", icon: UserPlus },
    ],
  },
  { name: "Assessments", link: "assessments", icon: BarChart },
  { name: "Challenges", link: "challenges", icon: Star },
  {
    name: "Certificate",
    link: "courses",
    icon: Layers,
    submenu: [
      { name: "All Certificates", link: "certification", icon: BookOpenCheck },
      { name: "Add Certificate", link: "", icon: FilePlus2 },
    ],
  },
  { name: "Project", link: "project", icon: Folders },
  { name: "Settings", link: "settings", icon: SquarePen },
];