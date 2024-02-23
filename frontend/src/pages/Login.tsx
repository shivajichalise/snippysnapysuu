import { Link } from "react-router-dom"
import InputSubmit from "../components/InputSubmit"
import InputText from "../components/InputText"
import Logo from "../components/Logo"

const Login = () => {
    return (
        <>
            <div className='bg-300 flex flex-1'>
                <div className='flex h-screen w-full flex-col items-center justify-center'>
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex flex-col items-center justify-center p-4">
                            <Logo height={75} width={75} />
                            <h1 className="my-2 text-lg">Login to SnipySnapySuu</h1>
                            <div
                                className='bg-200 rounded-md p-6 text-white'
                            >
                                <form method="POST" action="/api/login">
                                    <InputText name="email" id="email" placeholder="user@email.com" onChange={() => console.log(1)} hasLabel={true} inputLabel="Email" />
                                    <InputText name="password" id="password" placeholder="********" onChange={() => console.log(1)} hasLabel={true} inputLabel="Password" />
                                    <InputSubmit value="Login" />
                                </form>
                            </div>
                        </div>
                        <div
                            className='bg-300 border-100 w-max rounded-md border p-3 text-white'
                        >
                            <p className="text-sm">
                                Don't have an account? <Link className="hover:text-primary-300 text-primary-200 cursor-pointer text-sm hover:underline" to="/signup">Create one</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
