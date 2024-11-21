import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./utilities/reportWebVitals";
import List from "./pages/main/List";
import "./styles/index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GetPaginationPosts from "./pages/pagination/GetPaginationPosts";
import GetPosts from "./pages/getPosts/GetPosts";
import GetPhotos from "./pages/getPhotos/GetPhotos";
import UserList from "./pages/users/UserLists";
import Header from "./pages/main/header/Header";
import Footer from "./pages/main/footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("started");

// root.render(s
//   <React.StrictMode>
//     <List />
//   </React.StrictMode>
// );

// root.render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route path="/" element={<List />} />
//         <Route path="/apiCall" element={<ApiCall />} />
//         <Route path="/pagination" element={<Pagination />} />
//       </Routes>
//     </Router>
//   </React.StrictMode>
// );

root.render(
  <React.StrictMode>
    <div id="root">
      <Header />
      <Router>
        <main>
          {" "}
          {/* Wrap Routes inside a <main> element */}
          <Routes>
            <Route path="/" element={<List />} />
            <Route
              path="/getPaginationPosts"
              element={<GetPaginationPosts />}
            />
            <Route path="/getPosts" element={<GetPosts />} />
            <Route path="/userLists" element={<UserList />} />
            <Route path="/getPhotos" element={<GetPhotos />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
