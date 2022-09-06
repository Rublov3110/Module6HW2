import { appConfig } from "../apiConfig";

const DeleteFilm = async (id: number): Promise<boolean> => {
    const requestOptions = {
        method: "DELETE",
    };
    const result: Response = await fetch(
        `${appConfig.appUrl}/api/Film/${id}`,
        requestOptions
    );
    const body = await result.json();
    return body as boolean;
};

export default DeleteFilm;
