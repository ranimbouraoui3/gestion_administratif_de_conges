import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { Header } from "./components";
import { AllRoutes } from "./routes/AllRoutes";
import { Footer } from "./components";
function App() {
    return (
        <div className="dark:bg-darkbg ">
            <Header />
            <AllRoutes />
            <Footer />
        </div>
    );
}

export default App;
