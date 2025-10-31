import React from "react";

const ShowCard = ({ show }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all">
      {show.image ? (
        <img
          src={show.image.medium}
          alt={show.name}
          className="w-full h-60 object-cover"
        />
      ) : (
        <div className="w-full h-60 bg-gray-200 flex items-center justify-center text-gray-400">
          No Image
        </div>
      )}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-indigo-700 mb-1">{show.name}</h2>
        <p className="text-sm text-gray-600 mb-2">
          {show.genres && show.genres.length > 0
            ? show.genres.join(", ")
            : "No genres listed"}
        </p>
        <p className="text-gray-700 text-sm line-clamp-3">
          {show.summary ? show.summary.replace(/<[^>]*>/g, "") : "No summary available"}
        </p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-yellow-600 font-semibold">
            ⭐ {show.rating.average || "N/A"}
          </span>
          {show.officialSite && (
            <a
              href={show.officialSite}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600 hover:underline text-sm"
            >
              🔗 Visit Site
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowCard;

