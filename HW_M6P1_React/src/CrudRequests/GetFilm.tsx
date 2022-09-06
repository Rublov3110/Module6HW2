import { appConfig } from "../apiConfig";
import FilmModel from "../Models/FilmModel";

const GetFilm = async (id: number): Promise<FilmModel> => {
    const result: Response = await fetch(
        `${appConfig.appUrl}/api/Film/${id}`
    );
    const body = await result.json();
    let film = new Object() as FilmModel;
    if (body) {
        film = body as FilmModel;
    }
    return film;
};

export default GetFilm;
