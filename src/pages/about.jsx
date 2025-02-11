import { AboutCard } from "./Home/components/AboutCard.jsx";
// import ranimImage from "../assets/photo/ranim.jpg"; // Ensure correct path
// import mariemImage from "../assets/photo/mariem.png"; // Ensure correct path
import isimmImage from "../assets/photo/isimm.png";
import Testimonials from "./Home/components/Testimonials.jsx";
import {UserRolesCard} from "./Home/components/UserRolesCard.jsx"; // Ensure correct path

export const About = () => {
    const para1 =
        "L'Institut Supérieur d'Informatique et de Mathématiques de Monastir utilise avec succès notre application de gestion des congés depuis son déploiement. Grâce à cette plateforme conviviale, notre personnel peut demander et gérer efficacement leurs congés, ce qui contribue à une meilleure organisation et à une plus grande transparence dans la planification des ressources humaines.";

    return (
        <div>
            <h1 className="text-4xl font-bold text-gray-700 dark:text-white m-12 text-center">
                Qui utilise notre Application ?
            </h1>

            <AboutCard
                image={isimmImage}
                nom="Institut Supérieur d'Informatique et de Mathématiques de Monastir"
                lien="http://www.isimm.rnu.tn/public/"
                para={para1}
            />

            <Testimonials/>
            <UserRolesCard/>

        {/*    <div className="py-16 bg-white text-gray-700 dark:text-white">*/}
        {/*        <h2 className="text-3xl text-center font-semibold dark:text-slate-100 mb-5 ">*/}
        {/*            Students About OffTimeMaster*/}
        {/*        </h2>*/}
        {/*        <div className="grid mb-8 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">*/}
        {/*            /!* First Student *!/*/}
        {/*            <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">*/}
        {/*                <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">*/}
        {/*                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">*/}
        {/*                        Très facile à intégrer*/}
        {/*                    </h3>*/}
        {/*                    <p className="my-4 font-light">*/}
        {/*                        Si vous tenez à votre temps, je choisirais sans hésiter cette solution.*/}
        {/*                    </p>*/}
        {/*                </blockquote>*/}
        {/*                <figcaption className="flex justify-center items-center space-x-3">*/}
        {/*                    <div className="space-y-0.5 font-medium dark:text-white text-left">*/}
        {/*                        <div>Bouraoui Ranim</div>*/}
        {/*                        <div className="text-sm font-light text-gray-500 dark:text-gray-400">*/}
        {/*                            Etudiante à l'ISIMM*/}
        {/*                        </div>*/}
        {/*                    </div>*/}
        {/*                </figcaption>*/}
        {/*                <img*/}
        {/*                    src={ranimImage}*/}
        {/*                    alt="Bouraoui Ranim"*/}
        {/*                    className="rounded-full w-24 h-24 mt-4"*/}
        {/*                />*/}
        {/*            </figure>*/}

        {/*            /!* Second Student *!/*/}
        {/*            <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tr-lg md:border-l dark:bg-gray-800 dark:border-gray-700">*/}
        {/*                <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">*/}
        {/*                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">*/}
        {/*                        Solution idéale pour l'entreprise*/}
        {/*                    </h3>*/}
        {/*                    <p className="my-4 font-light">*/}
        {/*                        Cette Application m'a permis d'optimiser l'ensemble des processus administratifs de mon entreprise.*/}
        {/*                    </p>*/}
        {/*                </blockquote>*/}
        {/*                <figcaption className="flex justify-center items-center space-x-3">*/}
        {/*                    <div className="space-y-0.5 font-medium dark:text-white text-left">*/}
        {/*                        <div>Boughizene Mariem</div>*/}
        {/*                        <div className="text-sm font-light text-gray-500 dark:text-gray-400">*/}
        {/*                            Etudiante à l'ISIMM*/}
        {/*                        </div>*/}
        {/*                    </div>*/}
        {/*                </figcaption>*/}
        {/*                <img*/}
        {/*                    src={mariemImage}*/}
        {/*                    alt="Boughizene Mariem"*/}
        {/*                    className="rounded-full w-24 h-24 mt-4"*/}
        {/*                />*/}
        {/*            </figure>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        </div>
    );
};
