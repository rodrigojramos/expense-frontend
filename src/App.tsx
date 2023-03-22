import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Card from "./routes/Home/Card";


export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          <Route index element={<Card />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

