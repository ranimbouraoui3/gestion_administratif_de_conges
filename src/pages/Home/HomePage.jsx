/*import { Hero } from "./components/Hero";
import { useTitle } from "../../hooks/useTitle";

export const HomePage = () => {
    useTitle("Home");
    return (
        <>
            <main>
                <Hero />
            </main>
        </>
    );
};
*/
import { useEffect, useState } from "react";
import { Hero } from "./components/Hero";
import { useTitle } from "../../hooks/useTitle";
import axios from "axios";

export const HomePage = () => {
    useTitle("Home");

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api/test"); // Calls localhost:8080/api/test
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <main>
                <Hero />
                <section>
                    <h2>API Data:</h2>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </section>
            </main>
        </>
    );
};
