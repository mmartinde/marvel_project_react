import { useForm } from "react-hook-form";
import { useContext } from "react";
import { SessionContext } from "../../contexts/SessionContext";
import axios from "axios";
import { useState } from "react";

export default function CreateComics() {
  const { register, handleSubmit } = useForm();
  const { user } = useContext(SessionContext);
  const [comicCreated, setComicCreated] = useState(["Fill out the form"]);

  function createComic(datos) {
    let routePostComicById = `http://localhost:3000/api/comics?token=${user.token}`;
    axios.post(routePostComicById, datos)
    .then((response) => {
        setComicCreated('The comic book was created')
    });
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="createComics">
              <form onSubmit={handleSubmit(createComic)}>
                <h3 className="titleForm">Add comics to collection</h3>
                <div className="mb-1">
                  <label htmlFor="InputTitle" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    placeholder="Comic book title"
                    {...register("title", { required: true })}
                    className="form-control"
                    id="InputTitle"
                  />
                </div>
                <div className="mb-1">
                  <label htmlFor="InputNumber" className="form-label">
                    Number
                  </label>
                  <input
                    type="text"
                    placeholder="Comic book number"
                    {...register("number", { required: true })}
                    className="form-control"
                    id="InputNumber"
                  />
                </div>
                <div className="mb-1">
                  <label htmlFor="InputPublished" className="form-label">
                    Published
                  </label>
                  <input
                    type="text"
                    placeholder="Year published"
                    {...register("published", { required: true })}
                    className="form-control"
                    id="InputPublished"
                  />
                </div>
                <div className="mb-1">
                  <label htmlFor="InputSynopsis" className="form-label">
                    Synopsis
                  </label>
                  <input
                    type="text"
                    placeholder="Synopsis"
                    {...register("synopsis", { required: false })}
                    className="form-control"
                    id="InputPublished"
                  />
                </div>
                <div className="mb-1">
                  <label htmlFor="InputSeries" className="form-label">
                    Series
                  </label>
                  <input
                    type="text"
                    placeholder="Series"
                    {...register("series", { required: false })}
                    className="form-control"
                    id="InputSeries"
                  />
                </div>
                <div className="mb-1">
                  <label htmlFor="InputWriter" className="form-label">
                    Writer
                  </label>
                  <input
                    type="text"
                    placeholder="Writer"
                    {...register("writer", { required: true })}
                    className="form-control"
                    id="InputWriter"
                  />
                </div>
                <div className="mb-1">
                  <label htmlFor="InputPinceler" className="form-label">
                    Pinceler
                  </label>
                  <input
                    type="text"
                    placeholder="Pinceler"
                    {...register("pinceler", { required: false })}
                    className="form-control"
                    id="InputPinceler"
                  />
                </div>
                <div className="mb-1">
                  <label htmlFor="InputCover" className="form-label">
                    Cover
                  </label>
                  <input
                    type="string"
                    placeholder="Link of the cover"
                    {...register("cover", { required: false })}
                    className="form-control"
                    id="InputCover"
                  />
                </div>
          
                <div>
                <button type="submit" className="btn btn-primary">
                  Create a Comic
                </button>
                <p>{comicCreated}</p>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
