import React, {FC} from 'react';
import { useState, useEffect } from 'react';

import SkeletonLoading from '../components/Loading';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Carousel from '../components/Carousel';

import { MovieType } from '../types/movie';
import axios from 'axios';

const Home = () => {
  const [ playing, setPlaying ] = useState<MovieType[]>([]);
  const [ coming, setComing ] = useState<MovieType[]>([]);
  const [ popular, setPopular ] = useState<MovieType[]>([]);
  const [loading, setLoading ] = useState<boolean>(false);


  useEffect(() => {
    nowPlaying();
    upComing();
    populer();
  }, []);

  function nowPlaying() {
    axios
    .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`)
    .then((response) => {
      setPlaying(response.data.results);
    })
    .catch((error) => {
      console.error(error);
    })
  }

  function upComing() {
    axios
    .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`)
    .then((response) => {
      setComing(response.data.results);
    })
    .catch((error) => {
      console.error(error);
    })
  }

  function populer() {
    axios
    .get(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=3`)
    .then((response) => {
      setPopular(response.data.results);
    })
    .catch((error) => {
      console.error(error)
    })
  }

  return (
    <Layout>
      <div className='container flex flex-col'>
      <h1 className="my-5 text-center text-5xl text-black">UpComing</h1>
           <div className="my-10 text-center text-5xl text-slate-900 dark:text-white">
           {!loading && (
              <Carousel 
              datas={coming}
              name="upcoming"
              content={(coming) => (
                <Card
                id={coming.id}
                key={coming.id}
                title={coming.title}
                image={coming.poster_path}
                />
              )}
              />
             )}
          </div>
      <h1 className="my-5 text-center text-5xl text-black">NowPlaying</h1>
           <div className="my-10 text-center text-5xl text-slate-900 dark:text-white">
           {!loading && (
              <Carousel 
              datas={playing}
              name="upcoming"
              content={(playing) => (
                <Card
                id={playing.id}
                key={playing.id}
                title={playing.title}
                image={playing.poster_path}
                />
              )}
              />
             )}
          </div>
      <h1 className="my-5 text-center text-5xl text-black">Popular</h1>
           <div className="my-10 text-center text-5xl text-slate-900 dark:text-white">
           {!loading && (
              <Carousel 
              datas={popular}
              name="upcoming"
              content={(popular) => (
                <Card
                id={popular.id}
                key={popular.id}
                title={popular.title}
                image={popular.poster_path}
                />
              )}
              />
             )}
          </div>
      </div>
    </Layout>
  )
}

export default Home;
