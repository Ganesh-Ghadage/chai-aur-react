import About from "./About/About";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "./Home/Home";
import User from "./User/User";
import Github from "./Github/Github";

export {Home, About, Contact, Header, Footer, User, Github};

export const githubLoaderInfo = async () => {
    const responce = await fetch ("https://api.github.com/users/Ganesh-Ghadage")
    return responce.json()
}