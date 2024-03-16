import Navbar from "./components/navbar/Navbar.jsx";
import Accueil from "./components/Accueil.jsx";
import MeilleurAttractionPages from "./pages/MeilleurAttractionPages.jsx";
import FeaturesPages from "./pages/FeaturesPages.jsx";
import ContactPages from "./pages/ContactPages.jsx";
import LoginPages from "./pages/LoginPages.jsx";
import RegisterPages from "./pages/RegisterPages.jsx";
import ProfilPages from "./pages/ProfilPages.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Accueil />} />
                    <Route
                        path="/meilleur-attraction"
                        element={<MeilleurAttractionPages />}
                    />
                    <Route path="/features" element={<FeaturesPages />} />

                    <Route path="/contact" element={<ContactPages />} />

                    <Route path="/login" element={<LoginPages />} />

                    <Route path="/register" element={<RegisterPages />} />

                    <Route path="/profil" element={<ProfilPages />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
