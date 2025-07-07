import { useState } from 'react';
import InputField from '../komponen/InputField';
import SocialLogin from '../komponen/SocialLogin';
import '../style/Login.css';
import { useNavigate } from 'react-router-dom';


function Login() {
    //State untuk email, password & error message
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [erorMsg, setErorMsg] = useState("");
    const navigate = useNavigate();

    //Fungsi untuk handle login
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        //Validasi email harus mengandung "@"
        if (!email.includes('@')) {
            setErorMsg("Email harus mengandung '@' ")
            return;
        }

        //Simulasi login sederhana
        if (email === "admin@example.com" && password === "admin1234"){
            localStorage.setItem("token", "dummyToken123");
            alert("Login berhasil!");
            setErorMsg("");
            //Redirect ke halaman dashboard setelah login sukses
            navigate('/Dashboard');
        }else{
            setErorMsg("Email atau password salah");
            
        }
    };
    

    return (
        <div className="login-page">
            <div className="login-body">
                <div className="login-container">
                    <h2 className="form-title">Log in with</h2>
                    <SocialLogin/>

                    {/* <p className='separator'><span>or</span></p> */}
                    
                    <form onSubmit={handleLogin} className="login-form">
                        <InputField 
                            type="email" 
                            placeholder="Email Address" 
                            icon="mail" 
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        />
                        <InputField 
                            type="password" 
                            placeholder="Password" 
                            icon="lock" 
                            value={password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        />

                        {/* menampilkan jika eror */}
                        {erorMsg && <p className='alert'>{erorMsg}</p>}

                        <a href="#" className="forgot-pass-link">Forgot Password?</a>
                        <button type="submit" className="login-btn">Log In</button>
                    </form>

                    <p className="signup-text">Don&apos;t have an account? <a href='#'>Sign up now</a></p>

                    
                </div>
            </div>
        </div>

        
    );
}

export default Login;