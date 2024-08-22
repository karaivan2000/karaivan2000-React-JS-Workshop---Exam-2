const buildOptions = (data) => {
    const options = {};

    if (data) {
        options.headers = {
            "Content-Type": "application/json",
        };
        options.body = JSON.stringify(data);
    }

    return options;
};

const request = async (method, url, data) => {
    const response = await fetch(url, {
        ...buildOptions(data),
        method,
    });

    const result = await response.json();

    return result;
};

export const get = (url, data) => request(`GET`, url, data);
export const post = (url, data) => request(`POST`, url, data);
export const put = (url, data) => request(`PUT`, url, data);
export const del = (url, data) => request(`DELETE`, url, data);