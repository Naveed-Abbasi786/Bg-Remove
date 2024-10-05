import Router from './Components/Routing/Router'
import { ModeProvider } from './Components/Context/UseContext'
import Navbar from './Components/Navbar'
function App() {
  
  return (
<ModeProvider>
  <Navbar/>
    <Router/>
</ModeProvider>    
  )
}
export default App
