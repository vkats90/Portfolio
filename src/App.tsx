//update text for shinobi project
//add more minor projects
// populate highlights
//add bonus skills
// make highlights appear on scroll

import { createContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import TopBar from './components/topbar'

const ViewContext = createContext({ inView: false, setInView: (value: boolean) => {} })

function App() {
  const [inView, setInView] = useState(false)
  return (
    <ViewContext.Provider value={{ inView, setInView: (value: boolean) => setInView(value) }}>
      <div className="relative bg-backg">
        <TopBar />
        <Outlet />
      </div>
    </ViewContext.Provider>
  )
}
export { ViewContext }
export default App
