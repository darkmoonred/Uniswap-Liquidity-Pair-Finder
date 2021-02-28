import React, { Component, useState } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";

import styles from "./Display.module.css";

import Navbar from "./Navbar";

export class DisplayLPToken extends Component {
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { tokenContract, LPTokenValue },
    } = this.props;

    return (
      <>
        <Navbar />
        <Grid container justify="center">
          <List className={styles.det}>
            <ListItem>
              <ListItemText
                primary="Main Token Contract Address"
              />
            </ListItem>
            <ListItem className={styles.des}>
              <ListItemText primary={tokenContract} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Matching Uniswap Liquidity Pool Provider Token Address" />
            </ListItem>
            <ListItem className={styles.des}>
              <LPTokenValue tokenContract={tokenContract} />
            </ListItem>
            <br />
            <ListItem>
              <p>
                <b>
                  Verify on etherscan:{" "}
                  <a href="https://etherscan.io/" className={styles.link}>
                    www.etherscan.io
                  </a>
                </b>
              </p>
            </ListItem>
          </List>
        </Grid>
        <br />

        <button className={styles.button} onClick={this.back}>
            Back
        </button>
      </>
    );
  }
}

export default DisplayLPToken;
