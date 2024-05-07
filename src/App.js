import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
// import { Cart } from "./Components/Cart";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <Home /> },
        // { path: "/cart", element: <Cart /> },
      ]
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
