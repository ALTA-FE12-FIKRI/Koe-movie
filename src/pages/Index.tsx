import React, { Component } from "react";

import Layout from "../components/Layout";
import Card from "../components/Card";

import { MovieType } from "../types/movie";
import { withRouter } from "../utils/navigation";
import axios from "axios";

interface State {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  datas: MovieType[];
}

class Home extends Component<State> {
  state = {
    datas: [],
    data: [],
    coming: [],
  };

  componentDidMount() {
    this.nowPLaying();
    this.popular();
    this.upComing();
  }

  nowPLaying() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`
      )
      .then((response) => {
        this.setState({ datas: response.data.results });
      })
      .catch((error) => {
        alert(error.message)
      });
  }

  popular() {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=3`)
    .then((response) => {
      this.setState({ data: response.data.results });
    })
    .catch((error) => {
      console.error(error)
    })
  }

  upComing() {
    axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=4`)
    .then((response) => {
      this.setState({ coming: response.data.results });
    })
    .catch((error) => {
      console.error(error)
    })
  }

  render() {
    const { datas, data, coming } = this.state;

    return (
      <Layout>
        <div className="container flex flex-col">
          <h1 className="my-5 text-center text-5xl text-black">upComing</h1>
          <div className="m-4 grid grid-flow-row auto-rows-max grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5 space-x-5">
            {coming.map((data: any) => {
              return (
                <Card
                 id={data.id}
                  key={data.id}
                  title={data.title}
                  image={data.poster_path}
                />
              );
            })}
          </div>
          <h1 className="my-5 text-center text-5xl text-black">Now Playing</h1>
          <div className="m-4 grid grid-flow-row auto-rows-max grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5 space-x-5">
            {datas.map((data: any) => {
              return (
                <Card
                  key={data.id}
                  id={data.id}
                  title={data.title}
                  image={data.poster_path}
                />
              );
            })}
          </div>
          <div>
          <h1 className="my-5 text-center text-5xl text-black">Popular</h1>
          <div className="m-4 grid grid-flow-row auto-rows-max grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5 space-x-5">
            {data.map((data: any) => {
              return (
                <Card
                 id={data.id}
                  key={data.id}
                  title={data.title}
                  image={data.poster_path}
                />
              );
            })}
          </div>
          </div>
          
        </div>
      </Layout>
    );
  }
}

export default withRouter(Home);
