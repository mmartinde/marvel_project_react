import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { SessionContext } from "../../contexts/SessionContext";
export default function DeleteComis() {
  const { user } = useContext(SessionContext);
  const [id, setId] = useState("");
  const [comicDeleted, setComicDeleted] = useState([
    "No comics have been deleted so far",
  ]);

  function deleteComic(id) {
    let routeDeleteComicById = `http://localhost:3000/api/comics/${id}?token=${user.token}`;
    axios
      .delete(routeDeleteComicById)
      .then((response) => {
        setComicDeleted((prevComics) => [...prevComics, "Process completed!"]);
        window.alert("The comic was deleted");
      })
      .catch((error) => {
        console.error("Error deleting comic:", error);
        setComicDeleted((prevComics) => [
          ...prevComics,
          "Failed to delete comic",
        ]);
      });
  }

  useEffect(() => {
    if (comicDeleted[comicDeleted.length - 1] === "The comic was deleted") {
      setId("");
    }
  }, [comicDeleted]);

  return (
    <div>
      <h2>Delete Comic</h2>
      <input
        type="text"
        placeholder="Enter ID of the comic to be deleted"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={() => deleteComic(id)}>Delete Comic</button>
      <p>{comicDeleted[comicDeleted.length - 1]}</p>
    </div>
  );
}
