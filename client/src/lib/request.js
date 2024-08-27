const buildOptions = (data) => {
    const options = {};

    if (data) {
        options.headers = {
            "Content-Type": "application/json",
        };
        options.body = JSON.stringify(data);
    }
    const token = localStorage.getItem(`accessToken`);

    if (token) {
        options.headers = {
            ...options.headers,
            "X-Authorization": token
        };
    }

    return options;
};

const request = async (method, url, data) => {
    const response = await fetch(url, {
        ...buildOptions(data),
        method,
    });

    if (response.status === 204) {
        return {};
    }

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;
};

export const get = (url, data) => request(`GET`, url, data);
export const post = (url, data) => request(`POST`, url, data);
export const put = (url, data) => request(`PUT`, url, data);
export const del = (url, data) => request(`DELETE`, url, data);