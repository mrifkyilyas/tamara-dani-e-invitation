import { ColorModeScript, ChakraProvider } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import reportWebVitals from "./reportWebVitals"
import * as serviceWorker from "./serviceWorker"
import { Invitation } from "./views/Invitation"
import Welcome from "./views/Welcome"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { NotFound } from "./views/NotFound"
import "react-image-lightbox/style.css";


const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

const router = createBrowserRouter([
  {
    path: "/not-found",
    element: <NotFound  />,
  },
  {
    path: "/invitation/:slug",
    element: <Welcome/>,
  },
  {
    path: "/invitation-detail/:slug",
    element: <Invitation />,
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);

root.render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>

  </React.StrictMode>,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
