import Home from "../Home/Home";
import Teams from "../Teams/Teams";
import Portfolio from "../Portfolio/Portfolio";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import OurStory from "../About/OurStory";
import ProjectDetails from "../Portfolio/ProjectDetails";

export const routes = [
    { name: "Home", component: Home, path: "/" },
    { name: "Our Story", component: OurStory, path: "/about" },
    { name: "Portfolio", component: Portfolio, path: "/portfolio" },
    { name: "Project Detail", component: ProjectDetails, path: "/portfolio/:id" },
    { name: "Teams", component: Teams, path: "/teams" },
    { name: "Blogs", component: Blogs, path: "/blogs" },
    { name: "Contact", component: Contact, path: "/contact" },
];
