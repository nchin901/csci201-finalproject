import '../styles/Login.css';
//import Top from "../components/all/Top";
import LoginPage from "../components/login/LoginPage"

function Login() {
    return (
        <div style={{ justifyContent: "center" }}>
            {/* <Top title="Login"></Top> */}
            <LoginPage></LoginPage>
        </div>
    );
}

export default Login;