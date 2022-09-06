import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Outlet, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import GetFilmComponent from "./Components/GetFilmComponent";
import InsertFilmComponent from "./Components/InsertFilmComponent";
import DeleteFilmComponent from "./Components/DeleteFilmComponent";
import UpdateFilmComponent from "./Components/UpdateFilmComponent";
import { Button } from 'react-bootstrap';

function App() {
    
    return (

      <Routes>
                <Route path="/" element={<LayoutComponent />}>
                    <Route index element={<HomeComponent />} />
                    <Route path="get" element={<GetFilmComponent />} />
                    <Route path="insert" element={<InsertFilmComponent />} />
                    <Route path="update" element={<UpdateFilmComponent />} />
                    <Route path="delete" element={<DeleteFilmComponent />} />
      </Route>

        </Routes>

    );
}

function LayoutComponent() {
  const navigation = useNavigate();

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="get">Get</Link></li>
          <li><Link to="insert">Insert</Link></li>
          <li><Link to="update">Update</Link></li>
          <li><Link to="delete">Delete</Link></li>        
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

const HomeComponent = () => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default App;
