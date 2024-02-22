import InputText from "../components/InputText"
import Logo from "../components/Logo"

const Login = () => {
    return (
        <>
            <div className='bg-300 flex flex-1'>
                <div className='flex h-screen w-full flex-col items-center justify-center'>
                        <Logo height={75} width={75} />
                    <div
                        className='bg-200 w-fit cursor-pointer rounded-md p-4 text-white'
                    >
                        <InputText name="email" id="email" placeholder="user@email.com" onChange={() => console.log(1)} hasLabel={true} inputLabel="Email" />
                        <InputText name="password" id="password" placeholder="********" onChange={() => console.log(1)} hasLabel={true} inputLabel="Password" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
