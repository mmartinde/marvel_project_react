export default function ComicsForm(){
    return(
        <>
            <fieldset>
                <legend>Add a new comic: </legend>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title"/>
                </div>
                <div>
                    <label>Number:</label>
                    <input type="text" name="number"/>
                </div>
                <div>
                    <label>Published:</label>
                    <input type="text" name="published"/>
                </div>
                <div>
                    <label>Synopsis:</label>
                    <input type="text" name="synopsis"/>
                </div>
                <div>
                    <label>Series:</label>
                    <input type="text" name="series"/>
                </div>
                <div>
                    <label>Writer:</label>
                    <input type="text" name="writer"/>
                </div>
                <div>
                    <label>Penciler:</label>
                    <input type="text" name="penciler"/>
                </div>
                <div>
                    <label>Cover:</label>
                    <input type="text" name="cover"/>
                </div>
            </fieldset>
            <button>Submit</button>
        </>
    )
}
