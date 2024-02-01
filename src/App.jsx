import { useState } from "react";
import "./App.css";
import ContentAling from "./components/ContentAling";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";
import PostListProvider from "./store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <PostListProvider>
        <div className="app-container">
          <Sidebar></Sidebar>
          <div className="content">
            <Header></Header>
            <ContentAling></ContentAling>
            <Outlet />
            <Footer></Footer>
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
