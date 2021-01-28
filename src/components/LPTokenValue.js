import React, { Component, useContext, useEffect, useState } from 'react'
import { ChainId, Fetcher, WETH, } from '@uniswap/sdk'
import FormTokenDetails from './FormTokenDetails'

const useFetch = (tokenContract) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {

            const chainId = ChainId.MAINNET;
            const tokenAddress = tokenContract;
            const mainToken = await Fetcher.fetchTokenData(chainId, tokenAddress);
            const weth = WETH[chainId];
            const pair = await Fetcher.fetchPairData(mainToken, weth);
            setData(pair.liquidityToken.address);
            setLoading(false);
        }
        getData()
    }, []);
    return { data, loading };
}

export default ({ tokenContract }) => {
    const { data, loading } = useFetch(tokenContract);

    return (
        <div>
            {loading ? <div>...loading</div> : <div>{data}</div>}
        </div>
    );
};