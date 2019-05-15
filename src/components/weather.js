import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div className="weather-info">
        {this.props.country && this.props.city && (
          <p className="weather__key">
            Location:
            <span className="weather__value">
              {" "}
              {this.props.city}, {this.props.country}
            </span>
          </p>
        )}
        {this.props.temperature && (
          <p className="weather__key">
            Temperature:
            <span className="weather__value"> {this.props.temperature}</span>
          </p>
        )}
        {this.props.humidity && (
          <p className="weather__key">
            Humidity:
            <span className="weather__value"> {this.props.humidity}</span>
          </p>
        )}
        {this.props.description && (
          <p className="weather__key">
            Conditions:
            <span className="weather__value"> {this.props.description}</span>
          </p>
        )}
        {this.props.error && (
          <p className="weather__error">{this.props.error}</p>
        )}
        {/*CSUN INFORMATION*/}
        <div className={this.props.title === undefined ? "notActive" : "CSUN"}>
          <p className="weather_key">{this.props.title}</p>
          {this.props.title && (
            <p className="weather__key">
              Location:
              <span className="weather__value">
                {" "}
                {this.props.csun}, {this.props.usa}
              </span>
            </p>
          )}{" "}
          {this.props.csunTemp && (
            <p className="weather__key">
              Temperature:
              <span className="weather__value"> {this.props.csunTemp}</span>
            </p>
          )}
          {this.props.csunHumidity && (
            <p className="weather__key">
              Humidity:
              <span className="weather__value"> {this.props.csunHumidity}</span>
            </p>
          )}
          {this.props.csunDescription && (
            <p className="weather__key">
              Conditions:
              <span className="weather__value">
                {" "}
                {this.props.csunDescription}
              </span>
            </p>
          )}
        </div>
        <br />
      </div>
    );
  }
}

export default Weather;
