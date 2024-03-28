/* import TableAdminFilms from "../../components/tableAdminFilms/TableAdminFilms"; */
import ActionsAdminComics from "../../components/ActionsAdminComic/ActionAdminComics";
import {Form} from 'react-bootstrap';

export default function AdminComics(){

    return (
      <>
        <Form className="mt-4 p-8">
          <Form.Label className="h5 m-5 p-2">Welcome Admin</Form.Label>
          <Form.Label className="h6 m-0 p-2">
          🗃️ In this area you can create or delete the desired comics from the database
          </Form.Label>
        
            <Form.Group className="m-3 p-5">
              <ActionsAdminComics></ActionsAdminComics>
            </Form.Group>            
          
          
        </Form>
      </>
    );
}