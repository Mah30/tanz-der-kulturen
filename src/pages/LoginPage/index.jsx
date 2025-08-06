
import LoginForm from "./LoginForm";
import { Spinner, Button, Card, TextInput, Label, Alert } from "flowbite-react";


const LoginPage = () => {
    
    





    return ( 
        <div className="flex min-h-screen items-center justify-center bg-green-100">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
                <h2>
                    Login 
                </h2>

            
                <LoginForm />
            </div>
        </div>
     );
}
 
export default LoginPage;