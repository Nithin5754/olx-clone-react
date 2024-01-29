import { BrowserRouter as Router ,Route, Routes } from "react-router-dom"
import {Form,Header,BrowserPage  } from "./components/index";
import { SharedHeaderLayout} from "../src/layouts/index";


function App() {

  return (<>
  <Router>
      <Routes>
           <Route path="/" element={<SharedHeaderLayout/>}>
              <Route index element={<Form/>}/>
              <Route path="browser" element={<BrowserPage/>}/>

           </Route>
      </Routes>
  </Router>
 </> 
 )
}

export default App
