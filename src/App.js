import React from "react";
import styles from "./App.module.css";

import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";

import Logoaffinity from "./images/Logoaffinity.svg";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img src={Logoaffinity} alt="Covid-19" className={styles.logo} />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
