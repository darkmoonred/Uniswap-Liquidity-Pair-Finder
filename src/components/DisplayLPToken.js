import React, { Component, useState } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

export class DisplayLPToken extends Component {


    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {
            values: { tokenContract, LPTokenValue }
        } = this.props;

        return (
            <MuiThemeProvider>
                <>
                    <AppBar title="Uniswap Liquidity Provider Token Finder" />
                    <Grid container justify="center">
                        <List>
                            <ListItem>
                                <ListItemText primary="Main Token Contract Address" secondary={tokenContract} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Matching Uniswap Liquidity Pool Provider Token Address" />
                            </ListItem>
                            <ListItem>
                                <LPTokenValue tokenContract={tokenContract} />
                            </ListItem>
                            <br />
                            <ListItem>
                                <p><b>Verify on etherscan: <a href='https://etherscan.io/'>www.etherscan.io</a></b></p>
                            </ListItem>
                        </List>
                    </Grid>
                    <br />

                    <Button
                        color="secondary"
                        variant="contained"
                        onClick={this.back}
                    >Back
                    </Button>
                </>
            </MuiThemeProvider>
        );
    }
}

export default DisplayLPToken;