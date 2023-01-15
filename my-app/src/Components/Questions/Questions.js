import React from "react";
import "./Questions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
export default function Questions() {
  return (
    <div className="container questions">
      <h2 className="q-header">Frequently Asked Questions</h2>
      <div className="row ">
        <div className="col">
          <h4>
            {" "}
            
            How often should I get a Dental Clean?
          </h4>
          <p>
            It is recommended that you visit the Dentist a minimum of 2 times a
            year. According to the Dental Association of Australia, “dentists
            recommend a routine dental check-up every 6 months, but a cookie
            cutter approach does not necessarily work for everyone.” We
            recommend a professional clean every 6 months for most people, but
            others with a high risk of gum disease or tooth decay may need to
            visit the dentist every 3 months.
          </p>
        </div>
        <div className="col">
          <h4>
            
            Are checkups important?
          </h4>
          <p>
            This will allow us to determine whether your mouth is healthy or if
            there are any issues we can address in later visits. Hence, checkups
            are important as they can help see if you’re healthy!
          </p>
        </div>
        <div className="w-100"></div>
        <div className="col">
          <h4>
            
            Why do I Need Dental X-Rays?
          </h4>
          <p>
            Your dentist should take a full set of dental X-rays early into the
            doctor-patient relationship. X-rays help your doctor monitor any
            changes that could be happening in your teeth between appointments.
            Most adult patients have bitewing X-rays every year. Our clinic
            provides in house X-Rays with our own X-Ray machine. This means you
            do not have to go to another X-Ray clinic. We can take the X-Ray
            during your first consultation visit. The full mouth (OPG) X-Ray is
            covered by Medicare.
          </p>
        </div>
        <div className="col">
          <h4>
            I Have Sensitive
            Teeth. How Do I Fix This?
          </h4>
          <p>
            You should try to avoid strongly acidic foods or drinks and wait at
            least an hour after eating before brushing as this could cause even
            more sensitivity. Grinding your teeth can also increase sensitivity
            and a mouth guard may be necessary.
          </p>
        </div>
        <div className="w-100"></div>
        <div className="col">
          <h4>
            
            How Do I Practice Good Oral Hygiene at Home?
          </h4>
          <p>
            Aside from the obvious – brush twice a day for 2-3 mins each time–
            here are some steps you can take for great dental wellbeing.
          </p>
        </div>
        <div className="col">
          <h4>
            
            Why does my mouth feel dry
          </h4>
          <p>
            Dry mouth can be a symptom of many different problems and can happen
            as you get older. Quite often it is a side effect of medication –
            especially heart, blood pressure, and depression tablets.
          </p>
        </div>
      </div>
    </div>
  );
}
