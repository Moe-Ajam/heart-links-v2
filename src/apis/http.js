import {json, redirect} from "react-router-dom";

export async function fetchAvailablePosts() {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/posts`);
    const resData = await response.json();

    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }

    return resData;
}

export async function fetchLogin(user) {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/login`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    let data;
    try {
        data = await response.json();
    } catch (error) {
        data = { message: "The server's response was not in JSON format." };
    }

    return {
        ok: response.ok,
        status: response.status,
        data,
    };
}


export async function registerUser(user) {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/register`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json'
        }
    });

    if (response.status === 422 || response.status === 401) {
        return response;
    }

    if (!response.ok) {
        throw json({message: 'Could not authenticate user.', status: 500});
    }

    return redirect('/home');
}

export const LOGIN_API = `${process.env.REACT_APP_API_URL}/api/register`;