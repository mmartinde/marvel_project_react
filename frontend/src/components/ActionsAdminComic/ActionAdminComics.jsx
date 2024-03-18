
import CreateComics from "../createComic/CreateComics";
import DeleteComis from "../deleteComic/DeleteComics"



export default function ActionsAdminFilms(){



    return (
      <>
        <div className="formsComics">
          <div className="formComics_Delete">
            <DeleteComis></DeleteComis>
          </div>
          <div className="formComics_Create">
            <CreateComics></CreateComics>
          </div>
        </div>
      </>
    );
}