import React, { useEffect, useState } from 'react';


function Poster(props) {

    const {loaded, movies} = props;
    const [index, setIndex] = useState(0);

    useEffect(()=>{
        setIndex(Math.floor(Math.random() * 19))
    },[])

    const changeHandel = (index) => {
        setIndex(index);
    }

    if ( !loaded ) {
        return <div className={'w-full h-[calc(100vh-200px)] bg-slate-300 flex items-center justify-center'}>Loading...</div>;
    } else {
        return (
            <div 
                className={'w-full h-[calc(100vh-200px)] bg-no-repeat bg-center bg-cover relative grid items-center'} 
                style={{backgroundImage: 'url(https://image.tmdb.org/t/p/original' + movies[index].backdrop_path + ')'}}
            >
                <div className={'absolute bottom-0 left-0 top-0 right-0 bg-slate-900 opacity-70'}></div>     
                <div className='max-w-screen-2xl mx-auto p-4 relative z-10'>
                    <div className='text-white'>
                        <span className='text-2xl mb:text-7xl mb-28 block'>{movies[index].original_title}</span>
                        <p className='text-md mb:text-2xl mb-16'>{movies[index].overview}</p>
                        <div className=''><span className=''>Release date:</span> <span className=''>{movies[index].release_date}</span></div>
                        <div className=''><span className=''>Rating:</span> <span className=''>{movies[index].vote_average}</span></div>
                        <div className=''><span className=''>Vote count:</span> <span className=''>{movies[index].vote_count}</span></div>
                    </div>
                </div>
                <div className='absolute bottom-0 flex items-center'>
                    {movies.map((movie, index) => (
                        <button key={index} className="hover:scale-150 transition ease-in-out delay-350" onClick={() => changeHandel(index)}>
                            <div className=''>
                                <img className='' src={'https://image.tmdb.org/t/p/w220_and_h330_face'+ movie.poster_path} alt=''/>
                                {/* <div className='Poster-average'>{movie.vote_average}</div> */}
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        );
    }
}

export default Poster;