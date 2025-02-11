
import video from "../../../assets/video/video1.mp4";
import { Link } from "react-router-dom";

export const Video = () => {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center text-center text-white mb-6">
            <div className="video-docker absolute top-0 left-0 -z-1 w-full h-full overflow-hidden">
                <video
                    className="min-w-full min-h-full absolute object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={video} type="video/mp4" />
                </video>

                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            </div>

            <div className="video-content space-y-2 z-10 flex flex-col items-center gap-2">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">
                    Get back to growth with{" "}
                    <span className="text-blue-600 dark:text-blue-500">
                the world’s #1{" "}
            </span>
                    Leave Management System
                </h1>
                <p className="text-lg font-normal lg:text-xl text-gray-300">
                    Digitize your leave management process with OffTimeMaster.
                </p>

                <Link
                    to="/login"
                    className="text-white max-w-36 bg-blue-700 hover:bg-blue-100 hover:text-slate-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 focus:outline-none dark:focus:ring-blue-800"
                >
                    Get Started
                </Link>
            </div>
        </section>

    );
};
