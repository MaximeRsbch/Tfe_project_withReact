import Navbar from "./components/navbar/Navbar.jsx";
import Accueil from "./components/Accueil.jsx";
import MeilleurAttractionPages from "./pages/MeilleurAttractionPages.jsx";
import FeaturesPages from "./pages/FeaturesPages.jsx";
import ContactPages from "./pages/ContactPages.jsx";
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
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
