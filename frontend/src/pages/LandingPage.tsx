import Navbar from "../components/Navbar"

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <div className="flex h-[calc(100vh-3.5rem)] items-center justify-center">
                <h1 className="text-black">LandingPage give intro about this app</h1>
            </div>
        </>
    )
}

export default LandingPage
