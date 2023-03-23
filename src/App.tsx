import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import ExpensesListing from "./routes/Home/ExpensesListing";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          <Route index element={<ExpensesListing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

