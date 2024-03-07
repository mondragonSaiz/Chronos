import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import AppProvider from "./utils/AppContext";
import Profile from "./pages/Profile";
import DayView from "./pages/DayView";
import { useState } from "react";
function App() {
  const [loginModal, setLoginModal] = useState(false);
  console.log("CHECK ", loginModal);
  return (
    <div className="App">
      <AppProvider>
        <Header setLoginModal={setLoginModal} loginModal={loginModal} />
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Home setLoginModal={setLoginModal} loginModal={loginModal} />
              }
            ></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/dayView" element={<DayView />}></Route>
          </Routes>
        </Router>
      </AppProvider>
    </div>
  );
}

export default App;
