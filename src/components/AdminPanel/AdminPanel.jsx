import React, { useContext, useState } from "react";
import { StoreContext } from "../../store/StoreProvider";
import CourseDetails from "./subcomponents/CourseDetails";
import CoursePopup from "./subcomponents/CoursePopup";

const AdminPanel = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const { courses } = useContext(StoreContext);

  const hidePopup = (e) => {
    e.preventDefault();
    setIsOpenPopup(false);
  };

  const showPopup = () => setIsOpenPopup(true);

  const coursesElements = courses.map((course) => (
    <CourseDetails key={course.id} {...course} />
  ));

  return (
    <section>
      {coursesElements}
      <button onClick={showPopup}>Dodaj nowy kurs</button>
      <CoursePopup
        hidePopup={hidePopup}
        isEditMode={false}
        isOpenPopup={isOpenPopup}
      />
    </section>
  );
};

export default AdminPanel;
