import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import styles from './Form.module.css'

import Navbar from "./Navbar";

export class FormTokenDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <Navbar />
        <br />
        <br />
        <p className={styles.des}>
          Find A Uniswap Liquidity Provider Token Address:
        </p>
        <br />
        <input
          type="text"
          placeholder="Enter Token Conctract Address"
          className={styles.inputc}
          onChange={handleChange("tokenContract")}
        />
        <br />
        <button className={styles.button} onClick={this.continue}>
          Continue
        </button>
      </>
    );
  }
}

export default FormTokenDetails;
