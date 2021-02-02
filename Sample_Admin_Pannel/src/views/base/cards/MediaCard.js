import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
    CButton,
    CCol,
  } from '@coreui/react'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <CCol xs="12" sm="12" md="3">
      <Card className={classes.root+ " mar_right20"} >
        <CardActionArea className={""}>
          <CardMedia
            className={classes.media}
            image={props.images}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.Title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.subTitle}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          
          {props.nameBtn1 ? 
          <CButton block shape="pill" color={props.colorBtn1}>{props.nameBtn1}</CButton> : ""
          }
          {props.nameBtn2 ? 
          <CButton block shape="pill" color={props.colorBtn2}>{props.nameBtn2}</CButton> : ""
          }
          
        </CardActions>
      </Card>
    </CCol>
    
  );
}
