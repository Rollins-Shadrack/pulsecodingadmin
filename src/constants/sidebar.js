import { BarChart, FileText, Folders, GraduationCap, Home, SquarePen, Star } from "lucide-react";

export const menu = [
  { name: "Dashboard", link: "/", icon: Home },
  { name: "Courses", link: "courses", icon: GraduationCap },
  { name: "Assessments", link: "assessments", icon: BarChart },
  { name: "Challenges", link: "challenges", icon: Star },
  { name: "Certification", link: "certification", icon: FileText },
  { name: "Project", link: "project", icon: Folders },
  { name: "Settings", link: "settings", icon: SquarePen },
];