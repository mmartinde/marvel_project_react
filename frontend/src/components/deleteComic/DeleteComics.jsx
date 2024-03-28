import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { SessionContext } from "../../contexts/SessionContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from "sweetalert2";

export default function DeleteComis() {
  const { user } = useContext(SessionContext);
  const [id, setId] = useState("");
  const [comicDeleted, setComicDeleted] = useState([""]);

  function deleteComic(id) {
    const DeleteComicById = `http://localhost:3000/api/comics/${id}?token=${user.token}`;
    axios
      .delete(DeleteComicById)
      .then((response) => {
        setComicDeleted((prevComics) => [...prevComics]);
        Swal.fire({title:"Process completed!",
        text: "The comic has been deleted.",
        icon: "sucess"});
        setId("");
      })
      .catch((error) => {
        console.error("Error deleting comic:", error);
        setComicDeleted((prevComics) => [...prevComics]);
        Swal.fire({title:"Error",
        text: "Failed to delete comic",
        icon: "error"});
      });
  }

  useEffect(() => {
    if (comicDeleted[comicDeleted.length - 1] === "The comic was deleted") {
      setId("");
    }
  }, [comicDeleted]);

  return (
    <Form className="container p-3">
      <Form.Label className="h3">Delete Comic</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter ID of the comic to be deleted"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <Button className="p-2 mt-2" onClick={() => deleteComic(id)}>Delete Comic</Button>
      <p>{comicDeleted[comicDeleted.length - 1]}</p>
    </Form>
  );
}
