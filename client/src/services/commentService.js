import * as request from "../lib/request";

const baseUrl = `http://localhost:3030/jsonstore/comments`;

export const create = async (recipeId, username, text) => {
    const newComment = await request.post(baseUrl, {
        recipeId,
        username,
        text,
    });

    return newComment;
};

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return Object.values(result);
};