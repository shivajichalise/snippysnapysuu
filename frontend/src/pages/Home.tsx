import { useState } from "react"
import Content from "../components/Content"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const Home = () => {
  const [selectedTab, setSelectedTab] = useState("snippets")

  const selectTab = (tab: string) => {
    setSelectedTab(tab)
  }

  return (
    <>
      <Navbar />
      <div className='flex'>
        <Sidebar tab={selectedTab} selectTab={selectTab} />
        <Content show={selectedTab} />
      </div>
    </>
  )
}

export default Home
