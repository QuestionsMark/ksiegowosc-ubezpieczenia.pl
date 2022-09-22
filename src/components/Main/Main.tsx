import { Route, Routes } from "react-router-dom";
import { BHP } from "../../views/BHP/BHP";
import { Contact } from "../../views/Contact/Contact";
import { Home } from "../../views/Home/Home";
import { Insurance } from "../../views/Insurance/Insurance";
import { Offer } from "../../views/Offer/Offer";
import { NotFound } from "../NotFound";

export const Main = () => {
    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/uslugi-ksiegowe" element={<Offer />} />
                <Route path="/ubezpieczenia" element={<Insurance />} />
                <Route path="/szkolenia-bhp" element={<BHP />} />
                <Route path="/kontakt" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    );
};