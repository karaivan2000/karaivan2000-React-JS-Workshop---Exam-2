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

export const getAll = async (recipeId) => {
    const query = new URLSearchParams({
        where: `recipeId="${recipeId}"`,
    });

    const result = await request.get(`${baseUrl}?${query.toString()}`);

    return Object.values(result);
};