import { BrowserRouter, Route, Routes } from 'react-router-dom'
import * as Screen from '../screens'

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Screen.Home />} />
        <Route path="/favorites" element={<Screen.Favorites />} />
      </Routes>
    </BrowserRouter>
  )
}