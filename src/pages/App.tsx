import React, { Component } from "react";

import Layout from "../components/Layout";
import Card from "../components/Card";

import axios from "axios";

interface State {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  datas: [];
}

class App extends Component<State> {
  state = {
    datas: [],
  };

  componentDidMount() {
    this.nowPLaying();
  }

  nowPLaying() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=1`
      )
      .then((response) => {
        this.setState({ datas: response.data.results });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Layout>
        <div className="container flex flex-col">
          <h1 className="my-5 text-center text-5xl text-black">Now Playing</h1>
          <div className="m-4 grid grid-flow-row auto-rows-max grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5 space-x-5">
            {this.state.datas.map((data: any) => {
              return (
                <Card
                  key={data.id}
                  title={data.title}
                  image={data.poster_path}
                />
              );
            })}
          </div>
        </div>
      </Layout>
    );
  }
}

export default App;
