/* import TableAdminFilms from "../../components/tableAdminFilms/TableAdminFilms"; */
import ActionsAdminComics from "../../components/ActionsAdminComic/ActionAdminComics";


export default function AdminComics(){

    return (
      <>
        <div className="divAdmin">
          <h2>Welcome Admin</h2>
          <h3>
          In this area you can create or delete the desired comics from the database.
          </h3>
          <div className="admin">
            {/* <div className="listaBuscador">
              <TableAdminFilms></TableAdminFilms>
            </div> */}
            <div className="crearBorrar">
              <ActionsAdminComics></ActionsAdminComics>
            </div>            
          </div>
          
        </div>
      </>
    );
}