// Import necessary components and functions from react-router-dom.

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Home } from "./pages/Home";
import ExploreSection from "./pages/ExploreSection";
import Details from "./pages/Details";

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home />} errorElement={<h1>Not found!</h1>} >
        <Route index element={ <ExploreSection />} />  
        <Route path="details/:id" element={<Details />} />
      </Route>
    )
);