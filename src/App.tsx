import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import ExpensesForm from "./routes/Home/ExpensesForm";
import ExpensesListing from "./routes/Home/ExpensesListing";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          <Route index element={<ExpensesListing />} />
          <Route path="expenses" element={<ExpensesListing />} />
          <Route path="expenses/form" element={<ExpensesForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

