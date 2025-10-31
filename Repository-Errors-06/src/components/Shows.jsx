import React, { useState, useEffect } from "react";
import ShowCard from "./ShowCard";

const Shows = () => {
    const [shows, setShows] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchShows = async () => {
            try {
                const res = await fetch("https://api.tvmaze.com/shows");
                const data = await res.json();
                setShows(data.slice(0, 40)); // Sirf 40 shows for performance
            } catch (error) {
                console.error("Error fetching shows:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchShows();
    }, []);


    if (loading) {
        return <h2 className="text-center text-gray-500 mt-10">Loading shows...</h2>;
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-indigo-700 text-center mb-6">
                Popular TV Shows
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {shows.map((show) => (
                    <ShowCard key={show.id} />
                ))}
            </div>
        </div>
    );
};

export default Shows;
