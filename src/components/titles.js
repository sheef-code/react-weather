import React from "react";

class Titles extends React.Component {
  render() {
    return (
      <div style={{ background: "rgba(10, 34, 50, 0.5)" }}>
        <h1 className="title-container__title">Weather Scanner </h1>
        <p className="title-container__subtitle">
          {" "}
          Helps you find weather conditions in cities...{" "}
        </p>
      </div>
    );
  }
}

export default Titles;
