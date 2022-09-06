import { appConfig } from "../apiConfig";
import FilmModel from "../Models/FilmModel";

const PutFilm = async (film: FilmModel): Promise<number> => {
    const requestOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(film),
    };

    const result: Response = await fetch(
        `${appConfig.appUrl}/api/Film/${film.filmId}`,
        requestOptions
    );

    const body = await result.json();
    return body as number;
};

export default PutFilm;
