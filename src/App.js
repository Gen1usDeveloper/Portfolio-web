import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./styles.css";

export default function App() {
  return (
    <>
    <Routes>
      < Route path="/" element={<Homepage/>}/>
    </Routes>
    </>
  );
}