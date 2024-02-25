export async function fetchAvailablePosts() {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/posts`);
    const resData = await response.json();

    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }

    return resData;
}