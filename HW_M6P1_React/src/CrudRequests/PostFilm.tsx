import { appConfig } from "../apiConfig";
import FilmModel from "../Models/FilmModel";

const PostFilm = async (film: FilmModel): Promise<boolean> => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(film),
    };

    const result: Response = await fetch(
        `${appConfig.appUrl}/api/Film`,
        requestOptions
    );
    const body = await result.json();
    return body as boolean;
};

export default PostFilm;
