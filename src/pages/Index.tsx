import React, { FC } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SkeletonLoading from "../components/Loading";
import Layout from "../components/Layout";
import CardDet from "../components/CardDet";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";

import { MovieType } from "../types/movie";
import axios from "axios";
import Button from "../components/Button";

const Home = () => {
  const navigate = useNavigate();
  const [playing, setPlaying] = useState<MovieType[]>([]);
  const [coming, setComing] = useState<MovieType[]>([]);
  const [popular, setPopular] = useState<MovieType[]>([]);
  const [rated, setRated] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    nowPlaying();
    upComing();
    populer();
    topRated();
  }, []);

  function topRated() {
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=1`
      )
      .then((response) => {
        setRated(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }

  function nowPlaying() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=1`
      )
      .then((response) => {
        setPlaying(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function upComing() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=1`
      )
      .then((response) => {
        setComing(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function populer() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=3`
      )
      .then((response) => {
        setPopular(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <Layout>
      <div className="container flex flex-col">
        <Hero
          datas={rated.slice(0, 5)}
          content={(rated) => (
            <div
              className="hero min-h-[30vh] bg-no-repeat lg:bg-top"
              style={{
                backgroundImage: `linear-gradient(
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.5)
            ), url(https://image.tmdb.org/t/p/original${rated.backdrop_path})`,
              }}
            >
              <div className="text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">{rated.title}</h1>
                  <p className="mb-5">{rated.overview}</p>
                  <Button
                    label="SEE DETAILS"
                    id="btn-topRated-details"
                    className="btn bg-black text-white"
                  />
                </div>
              </div>
            </div>
          )}
        />
      </div>
      <div className="container flex flex-col">
        <h1 className="my-5 text-center text-5xl text-black">UpComing</h1>
        <div className="my-10 text-center text-5xl text-slate-900 dark:text-white">
          {!loading && (
            <Carousel
              datas={coming}
              name="upcoming"
              content={(coming) => (
                <CardDet
                  id={coming.id}
                  key={coming.id}
                  image={coming.poster_path}
                  labelButton="SEE Details"
                />
              )}
            />
          )}
        </div>
        </div>
        <div className="container flex flex-col">
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
  );
};

export default Home;
