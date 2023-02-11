import {Routes , Route } from 'react-router-dom';
import Form from './components/Form';

import Map from './components/Map';

export default function App() {
  return (
    <>
    
    <Routes>
      <Route path='/map' element={<Map/>} />
      <Route path='/' element={<Form />} />
    </Routes>
    </>
  )
}
