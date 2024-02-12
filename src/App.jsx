import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Mail from './Components/Mail'
import EmailList from './Components/EmailList'
import { Email } from '@mui/icons-material'
import SendMail from './Components/SendMail'
import { useSelector } from 'react-redux'
import { selectMail } from './features/mailSlice'

function App() {

  const sendMessageIsOpen = useSelector(selectMail)

  return (
    <BrowserRouter>
    
        <div className='app'>
          <Header />

        <div className="app-body">
              <Sidebar />

              <Routes>
                <Route path='/mail' element={<Mail />} />
                <Route path='/' element={<EmailList />} />
              </Routes>
        </div>

        <div className="send-mail">
          {sendMessageIsOpen && <SendMail />}
        </div>
        </div>

    </BrowserRouter>
  )
}

export default App
