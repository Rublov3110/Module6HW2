import { useState } from "react";
import PostFilm from "../CrudRequests/PostFilm";
import { Button, Form } from "react-bootstrap";
import FilmModel from "../Models/FilmModel";
import { filmInput } from "../Types/Types";
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

                        const target = e.target as typeof e.target &
                            filmInput;
                        async function init() {
                            let film: FilmModel =
                                new Object() as FilmModel;

                            film.filmId = Number(target.filmId.value);
                            film.name = target.name.value;
                            film.price = Number(target.price.value);
                            film.shortDescription =
                                target.shortDescription.value;
                            film.description = target.description.value;

                            const result = await PostFilm(film);
                            setResponseStatus(result);
                        }

                        await init();
                    }}
                >
                    <Form.Group controlId="filmId">
                        <Form.Label>
                            <i>Enter film id</i>
                        </Form.Label>
                        <Form.Control name="filmId"></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="name">
                        <Form.Label>
                            <i>Enter film name</i>
                        </Form.Label>
                        <Form.Control name="name"></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="price">
                        <Form.Label>
                            <i>Enter film price</i>
                        </Form.Label>
                        <Form.Control name="price"></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="shortDescription">
                        <Form.Label>
                            <i>Enter film shortDescription</i>
                        </Form.Label>
                        <Form.Control name="shortDescription"></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="description">
                        <Form.Label>
                            <i>Enter film description</i>
                        </Form.Label>
                        <Form.Control name="description"></Form.Control>
                    </Form.Group>

                    <Button variant="btn btn-primary active" type="submit">
                        Post
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
