import Home from "./Pages/Home";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FooterNew from "./components/FooterNew";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home />    */}
      <div className="min-h-screen flex flex-col">
        {/* Main Content Area */}
        <main className="flex-grow">
          <Outlet />
        </main>

        {/* Footer */}
        {/* <Footer /> */}
        <FooterNew />
      </div>
      {/* <SignInForm /> */}
      {/* <Register /> */}
      {/* <Templeparticipants /> */}
      {/* <Myevents /> */}
      {/* <Error /> */}
      {/* <SignInForm /> */}
      {/* <Register /> */}
      {/* <Templeparticipants /> */}
      {/* <Myevents /> */}
      {/* <Error /> */}
    </>
  );
}

export default App;
