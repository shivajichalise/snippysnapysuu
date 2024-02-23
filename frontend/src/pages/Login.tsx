import { Link } from "react-router-dom"
import InputSubmit from "../components/InputSubmit"
import InputText from "../components/InputText"
import Logo from "../components/Logo"
import { FormEvent, useEffect, useRef, useState } from "react"
import ValidationError from "../types/ValidationError"
import axiosClient from "../axios-client"
import SpanAlert from "../components/SpanAlert"
import { useStateContext } from "../contexts/ContextProvider"

const Login = () => {
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const [errors, setErrors] = useState<ValidationError[]>([])
    const [emailError, setEmailError] = useState<ValidationError>()
    const [passwordError, setPasswordError] = useState<ValidationError>()

    const [loginError, setLoginError] = useState<string|null>(null)

    const { setUser, setToken } = useStateContext()

    const submitForm = (e: FormEvent) => {
        e.preventDefault()

        if (
                emailRef.current &&
                passwordRef.current
        ) {
            const payload = {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            }

            axiosClient.post('/auth/login', payload)
                .then(({ data }) => {
                    const user = data.data.user
                    const token = data.data.token

                    setUser(user)
                    setToken(token)
                })
                .catch((err) => {
                    const response = err.response
                    if(response && response.status === 403){
                        setErrors(response.data.data)
                        setLoginError(response.data.message)
                    }
                })

        } else {
            console.error("");
        }
    }

    useEffect(() => {
        setEmailError(errors.find(e => e.path === "email"))
        setPasswordError(errors.find(e => e.path === "password"))
    }, [errors])

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
                                <form onSubmit={submitForm}>
                                    <InputText ref={emailRef} type="email" name="email" id="email" placeholder="user@email.com" hasLabel={true} inputLabel="Email" required={true} />
                                    { emailError && <SpanAlert type="error" message={emailError.msg} /> }
                                    { loginError && <SpanAlert type="error" message={loginError} /> }

                                    <InputText ref={passwordRef} type="password" name="password" id="password" placeholder="********" hasLabel={true} inputLabel="Password" required={true}/>
                                    { passwordError && <SpanAlert type="error" message={passwordError.msg} /> }

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
