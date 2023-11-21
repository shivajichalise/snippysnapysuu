import Content from "../components/Content"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        <Content />
      </div>
    </>
  )
}

export default Home
