import Loader from "react-loader-spinner";
import React from 'react';
import './loader.css'
export default class LoaderClass extends React.Component {
  //other logic
  render() {
    return (
      <Loader
        type="Circles"
        color="black"
        height={100}
        width={100}
        className="loader_position"
        // timeout={3000} //3 secs
      />
    );
  }
}
