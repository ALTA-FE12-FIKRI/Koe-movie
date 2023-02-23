import React, { Component } from "react";

import Layout from "../components/Layout";
import Card from "../components/Card";
import "../styles/index.css";

import { withRouter } from "../utils/navigation";
import { MovieType, VideoType } from "../types/movie";

import axios from "axios";
import Button from "../components/Button";

interface PropsType {
  params: any;
}

interface StateProps {
  data: MovieType;
  videos: VideoType[];
}

class Details extends Component<PropsType, StateProps> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      data: {},
      videos: [],
    };
  }

  async componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const { id_movie } = this.props.params;
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id_movie}?api_key=04d6bdd5100220d638c32064cb1a2d27&language=en-US&append_to_response=videos`, { method: "GET" });
    const data = await response.json();
    this.setState({ data, videos: data.videos.results });
  }

  render() {
    return (
      <Layout>
        <div
            className="w-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("https://image.tmdb.org/t/p/w500${this.state.data.backdrop_path}")`
            }}
          >
            <div className="flex h-full w-full flex-wrap items-center justify-center bg-gradient-to-t from-white p-6 dark:from-black">
              <div className="card w-4/5 gap-4 bg-glass p-3 shadow-lg shadow-black backdrop-blur-md lg:h-4/5 lg:card-side">
                <img
                  className="h-3/5 w-2/5 place-self-center object-contain md:h-4/5 md:w-3/5"
                  src={`https://image.tmdb.org/t/p/w500${this.state.data.poster_path}`}
                  alt={this.state.data.title}
                />
                <div className="card-body justify-between">
                  <div className="flex flex-col">
                    <p className="text-center text-3xl font-bold text-black dark:text-white">
                      {this.state.data.title}
                    </p>
                    <p className="text-lg font-medium text-black dark:text-white">
                      Runtime: {this.state.data.runtime}
                    </p>
                    <p className="text-lg font-medium text-black dark:text-white">
                      Release Date:{" "}
                      {this.state.data.release_date}
                    </p>
                    <p className="text-lg font-medium text-black dark:text-white">
                      Genre:{" "}
                      
                    </p>
                    <p className="text-lg font-medium text-black dark:text-white">
                      Overview: {this.state.data.overview}
                    </p>
                  </div>
                  <Button
                    className="btn bg-zinc-500 p-2 font-bold text-white hover:bg-zinc-400/90 dark:bg-zinc-800/90 dark:hover:bg-zinc-700/90"
                    label="WATCH NOW"
                  />
                </div>
              </div>
            </div>
          </div>
      </Layout>
    );
  }
}

export default withRouter(Details);
