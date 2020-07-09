import React from "react";
import "../../assets/scss/Course/Course.scss";
import Padi from "../../assets/img/course/PADI.svg";

const Course = () => {
  return (
    <section id="course">
      <h2 id="courseTitle">PADI - DYKKERCERTIFIKAT</h2>
      <figure id="courseCover">
        <div id="courseTextContainer">
          <figcaption id="courseCaption">
            TAG ET INTNERNATIONALT ANERKENDT DYKKERCERTIFIKAT
          </figcaption>
          <p className="coursePText">
            Her finder du et stort udvalg af dykkerkurser lige fra begynder til
            proffesionel. Vi er et af Danmarks førende dykkercentre. som udanner
            fra PADI organisationen. Når du vælger at tage et dykkercertifikat
            hos os. får du ikke kun et internationalt anerkendt dykkercertifikat
            til markedets bedste pris, du får også et dykkerkursus, hvor
            kvaliteten er i top.
          </p>
          <p className="coursePText">
            Vi har kompetennte intruktører på vores dykkerkurser. Erfaring,
            tilid og sikkerhed er vigtigt, når du dykker med os, derfor stå vi
            klar med et stort hold af kompetente intstruktører.
          </p>
        </div>
        <img
          className="courseImg"
          src={Padi}
          alt="PADI Brand logo for Diving Certificate"
        />
      </figure>
      <a id="courseLink" href="/course">
        SE ALLE KURSER OG CERTIFIKATER HER!
      </a>
    </section>
  );
};

export default Course;
