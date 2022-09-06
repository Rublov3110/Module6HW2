import { useState } from "react";
import GetFilm from "../CrudRequests/GetFilm";
import FilmModel from "../Models/FilmModel";
import { Button, Form } from "react-bootstrap";
import { idInput } from "../Types/Types";
import { Link } from "react-router-dom";

const GetFilmComponent = (): JSX.Element => {
    const [film, setFilm] = useState<FilmModel | undefined>(undefined);

    return (
        <>
            <div>
                <Form
                    onSubmit={async (e) => {
                        e.preventDefault();

                        const target = e.target as typeof e.target & idInput;
                        async function init() {
                            let id: number = Number(target.filmId.value);
                            const result = await GetFilm(id);
                            setFilm(result);
                        }

                        await init();
                    }}
                >
                    <Form.Group controlId="id">
                        <Form.Label>
                            <i>Enter Film id</i>
                        </Form.Label>
                        <Form.Control></Form.Control>
                    </Form.Group>
                    <Button variant="btn btn-primary active" type="submit">
                        Get
                    </Button>
                </Form>
                <div>
                    Name: {film?.name || "film don't exist"}, Price:{" "}
                    {film?.price || ""}, About: {film?.shortDescription}
                </div>
            </div>
        </>
    );
};

export default GetFilmComponent;
