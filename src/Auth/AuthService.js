function generateRandomString(length) {
    const array = new Uint8Array(length);
    window.crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

function sha256(plain) {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return window.crypto.subtle.digest('SHA-256', data);
}

function base64UrlEncode(str) {
    return btoa(String.fromCharCode.apply(null, new Uint8Array(str)))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}

const generateCodeChallenge = async (codeVerifier) => {
    const hashed = await sha256(codeVerifier);
    return base64UrlEncode(hashed);
};

const authorize = async (config) => {
    //const codeVerifier = generateRandomString(128);
    //const codeChallenge = await generateCodeChallenge(codeVerifier);

    //localStorage.setItem('code_verifier', codeVerifier);

    // with PKCE
    //window.location.href = `${config.authorizationUrl}?response_type=code&client_id=${config.client_id}&scope=${config.scope}&redirect_uri=${config.redirectUri}&code_challenge=${codeChallenge}&code_challenge_method=S256`;
    console.log(`${config.authorizationUrl}?response_type=code&client_id=${config.client_id}&scope=${config.scope}&redirect_uri=${config.redirectUri}`);
    window.location.href = `${config.authorizationUrl}?response_type=code&client_id=${config.client_id}&scope=${config.scope}&redirect_uri=${config.redirectUri}`;
};

const handleCallback = async (config) => {
    const queryParams = new URLSearchParams(window.location.search);
    const code = queryParams.get('code');
    console.log(config.client_id);
    console.log('the code is : ' + code);

    const codeVerifier = localStorage.getItem('code_verifier');

    const tokenData = new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        client_id: config.client_id,
        redirect_uri: config.redirectUri,
        // code_verifier: codeVerifier,
    });

    console.log(tokenData.toString());

    console.log('token data are: ');
    console.log(tokenData.toString());

    console.log('token uri is: ' + config.tokenUri);
    const response = await fetch(config.tokenUri, {
        method: 'POST',
        headers: {
            'Content-Type': 'x-www-form-urlencoded',
        },
        body: tokenData.toString(),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    localStorage.setItem('access_token', data.access_token);
    localStorage.setItem('refresh_token', data.refresh_token);
    console.warn(data.code);

    return data;
};

export {authorize, handleCallback};