import {UserManager} from "oidc-client";

const settings = {
    authority: 'http://localhost:8080/',
    client_id: 'client',
    redirect_uri: window.location.origin + '/callback',
    response_type: 'code',
    scope: 'openid profile email',
    post_login_url: window.location.origin,
};
class AuthService {
    userManager ;
    constructor() {
        this.userManager = new UserManager(settings);
    }
    getUser() {
        return this.userManager.getUser();
    }

    login() {
        return this.userManager.signinRedirect();
    }

    logout() {
        return this.userManager.signoutRedirect();
    }

    handleRedirectCallback() {
        return this.userManager.signinRedirectCallback();
    }
}

const authService = new AuthService();
export default authService;