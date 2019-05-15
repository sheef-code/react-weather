import React from "react";
import Weather from "./components/weather";
import Form from "./components/form";
// import SWeather from "./components/stateless_weather";
// import SForm from "./components/stateless_form"
import Titles from "./components/titles";

const Api_Key = "8d2de98e089f1c28e1a22fc19a24ef04";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
    csunTitle: undefined,
    csunTemp: undefined,
    csun: undefined,
    usa: undefined,
    csunHumidity: undefined,
    csunDescription: undefined
  };

  //getWeather is a method we'll use to make the api call
  getWeather = async e => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`
    );
    const response = await api_call.json();
    const api_call2 = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=northridge,usa&appid=${Api_Key}`
    );
    const response2 = await api_call2.json();
    console.log(response);
    console.log(response2);
    if (city && country) {
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: "",
        csunTitle: "CSUN INFORMATION",
        csunTemp: response2.main.temp,
        csun: response2.name,
        usa: response2.sys.country,
        csunHumidity: response2.main.humidity,
        csunDescription: response2.weather[0].description
      });
    } else {
      this.setState({
        error: "Please input search values..."
      });
    }
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div
                  className={
                    this.state.csun === undefined
                      ? "col-xs-5 title-container"
                      : "col-xs-5 title-container2"
                  }
                >
                  <Titles />
                </div>
                <div
                  className={
                    this.state.csun === undefined
                      ? "col-xs-7 form-container"
                      : "col-xs-7 form-container2"
                  }
                >
                  <Form loadWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                    title={this.state.csunTitle}
                    csunTemp={this.state.csunTemp}
                    csun={this.state.csun}
                    usa={this.state.usa}
                    csunHumidity={this.state.csunHumidity}
                    csunDescription={this.state.csunDescription}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
