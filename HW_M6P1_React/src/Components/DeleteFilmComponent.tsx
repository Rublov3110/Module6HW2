import { useState } from "react";
import DeleteFilm from "../CrudRequests/DeleteFilm";
import { Button, Form } from "react-bootstrap";
import { idInput } from "../Types/Types";
import { Link } from "react-router-dom";

const DeleteFilmComponent = (): JSX.Element => {
    const [responseStatus, setResponseStatus] = useState<boolean | undefined>(
        undefined
    );

    return (
        
        <>
            <div>
                <Form
                    onSubmit={async (e) => {
                        e.preventDefault();

                        const target = e.target as typeof e.target & idInput;
                        async function init() {
                            let id: number = Number(target.filmId.value);
                            const result = await DeleteFilm(id);
                            setResponseStatus(result);
                        }

                        await init();
                    }}
                >
                    <Form.Group controlId="filmId">
                        <Form.Label>
                            <i>Enter film id</i>
                        </Form.Label>
                        <Form.Control></Form.Control>
                    </Form.Group>
                    <Button variant="btn btn-primary active" type="submit">
                        Delete
                    </Button>
                </Form>
                <div>
                    Response:{" "}
                    {responseStatus === undefined
                        ? ""
                        : responseStatus.toString()}
                </div>
            </div>
        </>
    );
};

export default DeleteFilmComponent;
