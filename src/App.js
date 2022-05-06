import Welcome from "./pages/welcome";
import Quiz from "./pages/quiz";
import ShareResult from "./pages/share-result";
import Result from "./pages/result";
import { Routes, Route, Link } from "react-router-dom";
import db from "./firebase.config";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import store from "./store";
import { setConfig } from "./actions";

const App = () => {
  const [ data, setData ] = useState({});

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const configData = await getDocs(collection(db, "config"));
        const data = await configData?.docs?.map((doc) => doc.data());
        setData(data[0]);  
        store.dispatch({ type: setConfig, payload: data[0] });
      } catch(error) {
        console.error(error.message);
      }
    };
    fetchConfig();
  }, []);

  return (
    <div className="App">
      {data?.pages?.length && (
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="share-result" element={<ShareResult />} />
          <Route path="result" element={<Result />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
