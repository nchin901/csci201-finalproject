import '../styles/Login.css';
import Top from "../components/all/Top";
import Window from "../components/login/Window"

function Login() {
    return (
        <div style={{ justifyContent: "center" }}>
            <Top title="Login"></Top>
            <Window></Window>
        </div>
    );
}

export default Login;