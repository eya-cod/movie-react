import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, 
  } from 'reactstrap';
  import Rating from './Rating'

const MovieCard = ({Movie}) => {

    return (
           <Card>
                <CardImg style={{width: "200px"}} src={Movie.posterUrl} alt="" />
                <CardBody>
                  <CardTitle tag="h5">{Movie.title}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">  </CardSubtitle>
                  <Rating Rate={Movie.rate} />
                  
                  <CardText> {Movie.description} </CardText>
                  
                </CardBody>
            </Card>
         
          );
    
}

export default MovieCard
