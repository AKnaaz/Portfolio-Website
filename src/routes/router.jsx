import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import SkillSphere from "../Components/SkillSphere/SkillSphere";
import HumanAid from "../Components/HumanAid/HumanAid";
import AppOrbit from "../Components/AppOrbit/AppOrbit";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: "/skillSphere",
            Component: SkillSphere
        },
        {
            path: "/humanAid",
            Component: HumanAid
        },
        {
            path: "/appOrbit",
            Component: AppOrbit
        },
    ]
  },
]);