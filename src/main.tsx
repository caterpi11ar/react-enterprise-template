import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { initialize } from '@/lib/initialize'
import App from './App'
import './styles/index.css'

const rootElement = document.getElementById('root')!
const root = ReactDOM.createRoot(rootElement)

initialize().then(() => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})
