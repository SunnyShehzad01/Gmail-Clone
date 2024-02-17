import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Mail from './Components/Mail'
import EmailList from './Components/EmailList'
import { Email } from '@mui/icons-material'
import SendMail from './Components/SendMail'
import { useDispatch, useSelector } from 'react-redux'
import { selectMail } from './features/mailSlice'
import { login, selectUser } from './features/userSlice'
import Login from './pages/login'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'

function App() {

  const sendMessageIsOpen = useSelector(selectMail)
  const user = useSelector(selectUser)
  const auth = getAuth()
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          })
        )
      }
    })
  }, [])

  return (
    <BrowserRouter>
    {
      !user ? ( 
        <Login /> 
        ) : (
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
        )
    }

    </BrowserRouter>
  )
}

export default App
