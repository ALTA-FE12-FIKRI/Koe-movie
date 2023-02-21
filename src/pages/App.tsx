import React, { Component } from 'react';

import Layout from '../components/Layout';
import Card from '../components/Card';

import movie from '../api/movie.json'

interface State {
  id: number;
  title: string;
  image: string;
}

class App extends Component<State> {
  render() {
    return (
      <Layout>
        <div className="container flex flex-col">
        <h1 className="my-5 text-center text-5xl text-black">
          Now Playing
        </h1>
        <div className='m-4 grid grid-flow-row auto-rows-max grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5 space-x-5'>
          {movie.map((data: any) => {
            return (
              <Card 
              id={data.id}
              title={data.title}
              image={data.image}
              />
            )
          })}
        </div>
        </div>
      </Layout>
    )
  }
}

export default App;