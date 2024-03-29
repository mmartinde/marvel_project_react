import React from "react";
import { Card } from "react-bootstrap";

export default function ComicCard({comic}) {

  return (
    <Card style={{width: '18rem'}} className="pt-1 h-100 mx-auto">
      <Card.Img variant="top" src={comic.cover}/>
      <Card.Body>
        <Card.Title>{comic.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-mute">
          Number {comic.number} - {comic.published}
        </Card.Subtitle>
        <Card.Text>{comic.synopsis}</Card.Text>
        <Card.Text>Series: {comic.series}</Card.Text>
        <Card.Text>Writer: {comic.writer}</Card.Text>
        <Card.Text>Penciler: {comic.penciler}</Card.Text>
      </Card.Body>
    </Card>
  );
}




