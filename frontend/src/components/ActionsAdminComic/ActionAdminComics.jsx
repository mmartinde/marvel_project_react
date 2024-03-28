import Form from 'react-bootstrap/Form';
import CreateComics from "../createComic/CreateComics";
import DeleteComis from "../deleteComic/DeleteComics";



export default function ActionsAdminFilms(){



    return (
      <>
        <Form>
          <Form.Group className="p-2">
            <DeleteComis></DeleteComis>
          </Form.Group>
          <Form.Group className="p-2">
            <CreateComics></CreateComics>
          </Form.Group>
        </Form>
      </>
    );
}