
import { Hero } from "./components/Hero"; // Your hero section
import {Video} from "./components/Video.jsx"
export const HomePage = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-900">
            <Video/>
            <Hero />
        </div>
    );
};
