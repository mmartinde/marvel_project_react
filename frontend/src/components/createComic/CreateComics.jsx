import { useContext } from "react";
import { SessionContext } from "../../contexts/SessionContext";
import axios from "axios";
import { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import Swal from "sweetalert2";

export default function CreateComics() {
  const { user } = useContext(SessionContext);
  const [comicCreated, setComicCreated] = useState({
    title: "",
    number: "",
    published: "",
    synopsis: "",
    series: "",
    writer: "",
    penciler: "",
    cover: ""
  });

  const handleSubmit = (event)=> {
    event.preventDefault();
    const PostComic = `http://localhost:3000/api/comics?token=${user.token}`;
      axios.post(PostComic,comicCreated)
      .then((response)=>{
        console.log (response.data);
        Swal.fire({
          title:"Process completed!",
          text: "The comic has been created.",
          icon: "success"});
        setComicCreated({
            title: "",
            number: "",
            published: "",
            synopsis: "",
            series: "",
            writer: "",
            penciler: "",
            cover: ""
          });
      })
      .catch((error)=>{
        console.log(error)
        Swal.fire({
          title:"Process error!",
          text: "Error in the creation of the comic.",
          icon: "error"});
      })
    }

return(
    <>
      <Form className="container  p-3">
      <Form.Label className="h3">Create a New Comic</Form.Label>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Comic book title"
            onChange={(e)=>setComicCreated({...comicCreated, title:e.target.value})}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Comic book number"
            onChange={(e)=>setComicCreated({...comicCreated, number:e.target.value})}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Published</Form.Label>
          <Form.Control
            type="text"
            placeholder="Year published"
            onChange={(e)=>setComicCreated({...comicCreated, published:e.target.value})}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Synopsis</Form.Label>
          <Form.Control
            type="text"
            placeholder="Synopsis"
            onChange={(e)=>setComicCreated({...comicCreated, synopsis:e.target.value})}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Series</Form.Label>
          <Form.Control
            type="text"
            placeholder="Series"
            onChange={(e)=>setComicCreated({...comicCreated, series:e.target.value})}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Writer</Form.Label>
          <Form.Control
            type="text"
            placeholder="Writer"
            onChange={(e)=>setComicCreated({...comicCreated, writer:e.target.value})}
          />
          <Form.Control.Feedback type="invalid">
            Writer is required.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Penciler</Form.Label>
          <Form.Control
            type="text"
            placeholder="Penciler"
            onChange={(e)=>setComicCreated({...comicCreated, penciler:e.target.value})}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Cover</Form.Label>
          <Form.Control
            type="text"
            placeholder="Link of the cover"
            onChange={(e)=>setComicCreated({...comicCreated, cover:e.target.value})}
          />
        </Form.Group>

        <Button  className="p-2 mt-2" variant="primary" type="button" onClick={handleSubmit}>
          Create a Comic
        </Button>
  </Form>
    </>
  )
}

