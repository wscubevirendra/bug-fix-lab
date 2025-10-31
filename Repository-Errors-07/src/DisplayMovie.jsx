import React from 'react';

const DisplayMovie = (props) => {
    console.log(props.movies, 'props data');
    return (
        <div className='grid grid-cols-4 p-2'>

            {
                props.movies.map(
                    (d, i) => {
                        
                         <AllMovie mtitle={d.title} posterpath={d.poster_path} overview={d.overview} />
                    }
                )
            }

            {/* <AllMovie />
            <AllMovie />
            <AllMovie /> */}

        </div>
    );
}

export default DisplayMovie;




const AllMovie = ({ mtitle, posterpath, overview }) => {
    console.log(posterpath, 'allmovies data ');
    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
                <img className="w-full" src={"https://image.tmdb.org/t/p/w1280 + posterpath"} alt="Movie Poster" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{mtitle}</div>
                    <p className="text-gray-700 text-base">
                        {overview}  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Action</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Drama</span>
                </div>
            </div>
        </div>
    );
}
