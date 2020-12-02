import { Grid } from '@material-ui/core';
import React from 'react';
import './Home.css'
import Product from './Product';
import { makeStyles } from '@material-ui/core/styles';

function Home(props) {
    const useStyles = makeStyles({
        root: {
            zIndex: 1,
        },
    });

    const classes = useStyles()


    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_3000x1200._CB431281466_.jpg" alt="" />

                <div className="home__row">
                    <Grid container className={classes.root} spacing={1}>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Product id="1" title="Apple iPhone 11 (64GB) - Black" price={51999} image="https://m.media-amazon.com/images/I/71i2XhHU3pL._AC_UY327_FMwebp_QL65_.jpg" rating="4.5" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Product id="2" title="PS4 1TB Slim Bundled with 1TB" price={27990} image="https://m.media-amazon.com/images/I/81cIK-WlKDL._AC_UY327_FMwebp_QL65_.jpg" rating="4" />

                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Product id="3" title="AKG Pro Audio K92 Closed-Back Headphones" price={2999} image="https://m.media-amazon.com/images/I/617bCEDc8WL._AC_UY327_FMwebp_QL65_.jpg" rating="4" />

                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>

                            <Product id="4" title="ThrustMaster T-LCM Pedals Xbox" price={27799} image="https://m.media-amazon.com/images/I/81yNYiSAhuL._AC_UY327_FMwebp_QL65_.jpg" rating="5" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Product id="5" title="Samsung 23.5 inch (59.8 cm)" price={8699} image="https://m.media-amazon.com/images/I/71nplbAMwzL._AC_UY327_FMwebp_QL65_.jpg" rating="4.5" />

                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>

                            <Product id="6" title="MSI GL65 Leopard, Intel 9th Gen" price={61990} image="https://m.media-amazon.com/images/I/81cBdLyWiGL._AC_UY327_FMwebp_QL65_.jpg" rating="4.5" />
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={4}>

                            <Product id="7" title="LG 80 cm (32 inches) HD Ready" price={14999} image="https://m.media-amazon.com/images/I/71uKCdULRgL._AC_UY327_FMwebp_QL65_.jpg" rating="4" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>

                            <Product id="8" title="Canon EOS 1500D 24.1 Digital SLR" price={28990} image="https://m.media-amazon.com/images/I/914hFeTU2-L._AC_UL480_FMwebp_QL65_.jpg" rating="4.5" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>

                            <Product id="9" title="Amazon Brand - Solimo Lily Bloom" price={759} image="https://m.media-amazon.com/images/I/91WpPGL-YmL._AC_UL480_FMwebp_QL65_.jpg" rating="4.5" />
                        </Grid>
                    </Grid>
                </div>
            </div>

        </div>
    );
}

export default Home;