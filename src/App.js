import React, { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import Dashboard from "./components/Dashboard";
import "./App.css";
import { get } from "./utils/api";
import { SECTIONS_DATA_URL, STUDENTS_MARKS_URL } from "./utils/constants";

const userIcon = "../../images/user.png";
const thunderIcon = "../../images/thunder.png";

function App() {
  const profile = {
    name: "Cody Simmons",
    position: "Lecturer"
  };
  const [sectionsData, setSectionsData] = useState(null);
  const [studentsMarks, setStudentsMarks] = useState(null);
  useEffect(() => {
    const getSectionsDataFromServer = async () => {
      try {
        const sectionsResponse = await get(SECTIONS_DATA_URL);

        const transformedResponse = sectionsResponse.map(data => {
          if (data.title === "Students") {
            return {
              ...data,
              icon: userIcon
            };
          } else {
            return {
              ...data,
              icon: thunderIcon
            };
          }
        });
        setSectionsData(transformedResponse);
      } catch (e) {
        console.log(e.message);
      }
    };
    const getStudentsDataFromServer = async () => {
      try {
        const studentsMarksResponse = await get(STUDENTS_MARKS_URL);

        setStudentsMarks(studentsMarksResponse);
      } catch (e) {
        console.log(e.message);
      }
    };
    getSectionsDataFromServer();
    getStudentsDataFromServer();
  }, []);

  return (
    <div className="App">
      <SideBar />
      <Dashboard
        userProfile={profile}
        sectionsData={sectionsData}
        studentsMarks={studentsMarks}
      />
    </div>
  );
}

export default App;
