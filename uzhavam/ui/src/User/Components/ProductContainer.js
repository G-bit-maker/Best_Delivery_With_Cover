import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import userimage from "../../Image/userimage.png"
import "../style/products.scss"


export default function MediaCard() {

  return (
    <Card className={" proCon"}>
      <CardActionArea>
        <CardMedia
          className={"img"}
          image={userimage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            Lizard
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            $699 <span className={"offer"}>&nbsp;&nbsp;&nbsp;30% off</span>
          </Typography>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating name="read-only" value={3.9} readOnly />
            </Box>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={"Addbtn"} variant="contained" color="primary">
            Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
