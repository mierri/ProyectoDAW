import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ReviewsMain } from './ReviewsMain'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReviewsMain />
  </StrictMode>
)
