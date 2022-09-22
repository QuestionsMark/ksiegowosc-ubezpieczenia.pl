import { useScrollUp } from "../hooks/useScrollUp";
import { Footer } from "./Footer/Footer";
import { Nav } from "./Header/Nav";
import { Main } from "./Main/Main";

export const App = () => {
    useScrollUp();

    return (
        <div className="app">
            <Nav />
            <Main />
            <Footer />
        </div>
    );
};