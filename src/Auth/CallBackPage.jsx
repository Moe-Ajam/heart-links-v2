import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {handleCallback} from "./AuthService";
import AuthConfig from "./AuthConfig";

const CallBackPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        handleCallback(AuthConfig).then((data) => {
        navigate('/home');
    }).catch(
        error => {
            console.error(error)
        });
    }, [navigate]);

    return <div>Loading...</div>
}

export default CallBackPage;