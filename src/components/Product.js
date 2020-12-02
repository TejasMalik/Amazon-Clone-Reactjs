import { Rating } from '@material-ui/lab';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Product.css'
import { useStateValue } from '../StateProvider';

function Product({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue()

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })

    }

    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
            backgroundColor: "White",
        },
    });

    const classes = useStyles();

    return (
        <div className="product">
            <Card className={classes.root}>
                <CardActionArea>
                    <div className="product__image">
                        <img src={image} alt="" />
                    </div>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography gutterBottom variant="h5">
                            <small>₹</small>
                            <strong>{(price).toFixed(2).replace(/(\d)(?=(\d{2})+\d\.)/g, '$1,')}</strong>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <Rating name="half-rating-read" value={rating} precision={0.5} readOnly size="small" />
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className="product__button">
                    <button onClick={addToBasket}>Add to Basket</button>
                </CardActions>
            </Card>
        </div>
    );
}

export default Product;