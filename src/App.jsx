import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Footer, Container } from "./components";
import { Home, Contact } from "./pages";
const App = () => {
  const a = 2,
    b = 3;
  const x = a + b;

  return (
    <div className="bg-gray-900 w-full overflow-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Container>
          <Footer />
        </Container>
      </BrowserRouter>
    </div>
  );
};

export default App;
