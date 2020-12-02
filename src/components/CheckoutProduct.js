import { Rating } from '@material-ui/lab';
import React, { forwardRef } from 'react';
import './CheckoutProduct.css'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { useStateValue } from '../StateProvider';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        marginRight: 10
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

const CheckoutProduct = forwardRef(({ id, title, image, price, rating, hidebutton }, ref) => {
    const classes = useStyles();
    const [{ basket }, dispatch] = useStateValue()


    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }

    return (
        <div ref={ref} className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={image} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    {title}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    <small>₹</small>
                                    <strong>{(price).toFixed(2).replace(/(\d)(?=(\d{2})+\d\.)/g, '$1,')}</strong>
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    <Rating name="half-rating-read" value={rating} precision={0.5} readOnly size="small" />
                                </Typography>
                            </Grid>
                            <Grid item>
                                <div className="checkoutProduct__button">
                                    {!hidebutton && (
                                        <button onClick={removeFromBasket}>Remove from Basket</button>
                                    )}
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            <br></br>
        </div>
    );
})

export default CheckoutProduct;