import './App.scss';
import {Header} from "./Header/Header";
import {MainContent} from "./Components/MainContent/MainContent";
import {About} from "./Components/Skills/About";
import {Projects} from "./Components/Projects/Projects";
import {Contacts} from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";
import {BurgerMenu} from "./Components/BurgerMenu/BurgerMenu";
import CvProfile from "./Components/CV_profile/CvProfile";


function App() {
    return (
        <div className="App">
            <Header/>
            <BurgerMenu/>
            <MainContent/>
            <About/>
            <Projects/>
            <CvProfile/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
