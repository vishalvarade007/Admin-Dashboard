import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import App from '../App'
import { Main } from '../Components/Main'

export function Router() {
  return (
    <div>
         <BrowserRouter>
           <Routes>
              <Route path="/" element={<App/>}>
                     <Route index element={<Main/>}/>
              </Route>
              
           </Routes>
         </BrowserRouter>
    </div>
  )
}

