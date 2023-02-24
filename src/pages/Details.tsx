import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import SkeletonLoading from "../components/Loading";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Button from "../components/Button";
import CardDet from "../components/CardDet";
import "../styles/index.css";

import { MovieType, VideoType } from "../types/movie";
import axios from "axios";

const Details = () => {
  const { id_movie } = useParams();
  const [data, setData] = useState<MovieType>({});
  const [similar, setSimilar] = useState<MovieType[]>([]);
  const [videos, setVideos] = useState<VideoType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
    semilar();
  }, []);

  function fetchData() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id_movie}?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&append_to_response=videos`
      )
      .then((response) => {
        const data = response.data;
        setData(data);
        setVideos(data.videos?.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function semilar() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id_movie}/similar?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=1`
      )
      .then((response) => {
        setSimilar(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <Layout>
      {loading ? (
        <SkeletonLoading />
      ) : (
        <>
          <div
            className=" w-full h-[65vh] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("https://image.tmdb.org/t/p/original${data.backdrop_path}")`,
            }}
          >
            <div className="flex h-full w-full flex-wrap items-start justify-start from-white p-6 dark:from-black">
              <div className="card w-1/5 gap-4 bg-glass p-3 lg:card-side md:w-3/5">
                <div className="card-body justify-between">
                  <div className="flex flex-col">
                    <p className="text-start text-3xl font-bold text-black dark:text-white">
                      {data.title}
                    </p>
                    <p className="text-lg font-medium text-black dark:text-white">
                      Runtime: {data.runtime} minutes
                    </p>
                    <p className="text-lg font-medium text-black dark:text-white">
                      Release Date: {data.release_date}
                    </p>
                    <p className="text-lg font-medium text-black dark:text-white">
                      Genre:{" "}
                      {data.genres
                        ?.map((genre) => {
                          return genre.name;
                        })
                        .join(", ")}
                    </p>
                    <p className="text-lg font-medium text-black dark:text-white">
                      Overview: {data.overview}
                    </p>
                  </div>
                  <div>
                    <Button
                      className="btn bg-zinc-500 p-2 font-bold text-white hover:bg-zinc-400/90 dark:bg-zinc-800/90 dark:hover:bg-zinc-700/90"
                      label="ADD FAVORITE"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Hero
              datas={videos.slice(0, 5)}
              content={(data) => (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${data.key}`}
                  title={data.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            />
          </div>
          <div className="flex flex-col container">
            <h1 className="my-5 text-center text-5xl text-black">Similar</h1>
            <div className="m-2 grid grid-flow-row auto-rows-max grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5">
                {similar.map((datas: MovieType) => (
                  <CardDet
                  id={datas.id}
                  key={datas.id}
                  title={datas.title}
                  image={datas.poster_path}
                  labelButton="ADD FAVORITE"
                  />
                ))}
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default Details;
