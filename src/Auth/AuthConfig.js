const AuthConfig = {
    client_id: 'client',
    authorizationUrl: 'http://localhost:8080/oauth2/authorize',
    tokenUri: 'http://localhost:8080/oauth2/token',
    redirectUri: 'http://localhost:3000/callback',
    scope: 'openid',
}
 export default AuthConfig;