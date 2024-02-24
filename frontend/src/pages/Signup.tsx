import { Link } from "react-router-dom"
import InputSubmit from "../components/InputSubmit"
import InputText from "../components/InputText"
import Logo from "../components/Logo"
import { FormEvent, useEffect, useRef, useState } from "react"
import axiosClient from "../axios-client"
import ValidationError from "../types/ValidationError"
import SpanAlert from "../components/SpanAlert"
import { useStateContext } from "../contexts/ContextProvider"

const Signup = () => {
    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const confirmPasswordRef = useRef<HTMLInputElement>(null)

    const [errors, setErrors] = useState<ValidationError[]>([])
    const [nameError, setNameError] = useState<ValidationError>()
    const [emailError, setEmailError] = useState<ValidationError>()
    const [passwordError, setPasswordError] = useState<ValidationError>()
    const [confirmPasswordError, setConfirmPasswordError] = useState<ValidationError>()

    const { setUser, setToken } = useStateContext()

    const submitForm = (e: FormEvent) => {
        e.preventDefault()

        if (
            nameRef.current &&
                emailRef.current &&
                passwordRef.current &&
                confirmPasswordRef.current
        ) {
            const payload = {
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
                password_confirmation: confirmPasswordRef.current.value,
            }

            axiosClient.post('/auth/register', payload)
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
                    }
                })

        } else {
            console.error("");
        }

    }

    useEffect(() => {
        setNameError(errors.find(e => e.path === "name"))
        setEmailError(errors.find(e => e.path === "email"))
        setPasswordError(errors.find(e => e.path === "password"))
        setConfirmPasswordError(errors.find(e => e.path === "password_confirmation"))
    }, [errors])

    return (
        <>
            <div className='bg-300 flex flex-1'>
                <div className='flex h-screen w-full flex-col items-center justify-center'>
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex flex-col items-center justify-center p-4">
                            <Logo height={75} width={75} />
                            <h1 className="my-2 text-lg">Signup to SnipySnapySuu</h1>
                            <div
                                className='bg-200 w-full rounded-md p-6 text-white'
                            >
                                <form onSubmit={submitForm}>
                                    <InputText ref={nameRef} name="name" id="name" placeholder="User Jr White" hasLabel={true} inputLabel="Name" required={true} />
                                    { nameError && <SpanAlert type="error" message={nameError.msg} /> }

                                    <InputText ref={emailRef} type="email" name="email" id="email" placeholder="user@email.com" hasLabel={true} inputLabel="Email" required={true} />
                                    { emailError && <SpanAlert type="error" message={emailError.msg} /> }

                                    <InputText ref={passwordRef} type="password" name="password" id="password" placeholder="********" hasLabel={true} inputLabel="Password" required={true}/>
                                    { passwordError && <SpanAlert type="error" message={passwordError.msg} /> }

                                    <InputText ref={confirmPasswordRef} type="password" name="password_confirmation" id="password_confirmation" placeholder="********" hasLabel={true} inputLabel="Confirm password" required={true}/>
                                    { confirmPasswordError && <SpanAlert type="error" message={confirmPasswordError.msg} /> }

                                    <InputSubmit value="Signup" />
                                </form>
                            </div>
                        </div>
                        <div
                            className='bg-300 border-100 w-max rounded-md border p-3 text-white'
                        >
                            <p className="text-sm">
                                Already an account? <Link className="hover:text-primary-300 text-primary-200 cursor-pointer text-sm hover:underline" to="/login">Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
