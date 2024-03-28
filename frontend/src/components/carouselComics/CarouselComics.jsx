import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { CardSubtitle, CardTitle, Container, Row } from "react-bootstrap";
import ComicCard from "../comicCard/comicCard";
import './carouselComics.scss'

export default function CarouselComics() {
  const [cookies] = useCookies();
  const userToken = cookies.user;
  const ruteToken = `http://localhost:3000/api/comics?token=${userToken.token}`;


  const [comics, setComics] = useState([]);

  useEffect(() => {
    axios
      .get(ruteToken)
      .then((response) => {
        setComics([...comics, ...response.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <CardTitle as="h1" className="mb-2 p-3">
        Marvel World comics
      </CardTitle>

      <Container fluid="flex" className="p-3  w-75 mx-auto">
        <Row>
          {comics.map((comic) => (
            <ComicCard key={comic.id} comic={comic} />
          ))}
        </Row>
      </Container>
    </>
  );
}
