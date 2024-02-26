export async function fetchAvailablePosts() {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/posts`);
    const resData = await response.json();

    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }

    return resData;
}

export async function registerUser(user){
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/register`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json'
        }
    });

    const resData = await response.json();

    if (!response.ok) {
        throw new Error('Failed to register User.');
    }

    return resData.message;
}