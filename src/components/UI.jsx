import {useConfiguratorStore} from "../store";
import { useEffect } from "react";
const AssetsBox =() => {
    const{ categories, currentCategory, fetchCatergories, setCurrentCategory } = 
    useConfiguratorStore();

    useEffect(() => {
        fetchCatergories();
    }, []);
    return(
        <div className="rounded-2xl bg-white drop-shadow-md p-6 gap-6 flex flex-col">
            <div className="flex items-center gap-6 pointer-events-auto">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setCurrentCategory(category)}
                        className={`transition-colors duration-200 font-medium ${
                            currentCategory === category.name
                                ? "text-indigo-500"
                                : "text-gray-500 hover:text-gray-700"
                        }`}
                    >
                {category.name}
                </button>
                ))}
            </div>
        </div>
    );
}
const DownloadButton = () => {
    return(
        <button
        className="rounded-lg bg-indigo-500 hover:bg-indigo-600 transition-colors
        duration-300 text-white font-medium px-4 py-3 pointer-events-auto">
            Download
        </button>
    );
}

export const UI = () => {
    return (
        <main className="pointer-events-none fixed z-10 inset-0 p-10">
            <div className="mx-auto h-full max-w-screen-xl w-full flex flex-col justify-between">
                <div className="flex justify-between items-center">
                    <a
                        className="pointer-events-auto"
                        href=""
                    >
                        <img />
                    </a>
                    <DownloadButton/>
                </div>
                <div className="flex flex-col gap-6">
                    <AssetsBox/>
                </div>
            </div>
        </main>
    )
}