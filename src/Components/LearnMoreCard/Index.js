import React from "react";
import "./style.css";
import Typography from "@mui/material/Typography";
import { laptopimg } from "../../config/Images/Images";
const LearnMoreCard = () => {
  return (
    <div className="learn_body">
      <h4 className="learn_h4">Project background</h4>
      <div className="learn_subbody">
        <Typography variant="body2" className="learn_typography1">
          Child neurodevelopment and autism research unit launches in South Asia
        </Typography>
        <br />
        <Typography variant="body2" className="learn_typography3">
          A £6.95 million Global Health Research Unit on Neurodevelopment and
          Autism for children in South Asia is to launch with the help of
          University of Manchester expertise.
        </Typography>
        <br />
        <Typography variant="body2" className="learn_typography3">
          The NIHR Global Health Research Unit on Neurodevelopment and Autism in
          South Asia Treatment and Evidence -known as NAMASTE - has been awarded
          by the National Institute of Health and Care Research (NIHR) using UK
          aid from the UK Government which supports global health research.
        </Typography>
        <br />
        <Typography variant="body2" className="learn_typography3">
          NAMASTE builds on Manchester’s own autism programme and more than a
          decade of partnership with India, to implement a novel integrated
          detection-care pathway for young children with autism and their
          families in India, Sri Lanka and Nepal, using lay health workers.
        </Typography>
        <br />
        <Typography variant="body2" className="learn_typography3">
          NAMASTE will also develop much needed research capacity in the field
          of neurodevelopmental disorders in South Asia.
        </Typography>
        <br />
        <Typography variant="body2" className="learn_typography3">
          Autism Spectrum Disorder (‘Autism’) is a severe neurodevelopmental
          disability with significant impact on children’s social development
          and independence into adulthood and profound economic consequences.
          The WHO included autism as a key priority in its Mental Health Action
          Plan in 2014.
        </Typography>
        <br />
        <Typography variant="body2" className="learn_typography3">
          About five million families in India live with a young autistic child,
          the great majority with no access to services. Over a 10-year
          collaboration, Sangath and The University of Manchester have carefully
          adapted an autism programme developed for the UK to the South Asian
          context. The resulting 'Parent-mediated Autism Social Communication
          Intervention for non-Specialists Plus’ (PASS Plus), delivered by
          lay-health workers, is the first of its kind and has shown real-world
          impact in two initial randomised controlled trials, with large-scale
          evaluation underway in New Delhi.
        </Typography>
        <br />
        <Typography variant="body2" className="learn_typography3">
          NAMASTE will be a collaboration between the two lead organisations and
          Autism Care Nepal, the College of Paediatrics Sri Lanka, Harvard
          Medical School, La Trobe University, Kings College London, the World
          Health Organisation and Ummeed, Mumbai.
        </Typography>
        <br />
        <Typography variant="body2" className="learn_typography1">
          Dr Asiri Hewamalahe, Consultant Community Physician, Ministry of
          Health, Sri Lanka and Dr Dilini Vipulaguna a community paediatrician,
          who will together be leading the work in Sri Lanka are clear that
        </Typography>
        <br />
        <Typography variant="body2" className="learn_typography1">
          "Namaste will complement the existing system of early detection and
          early interventions for developmental disorders including autism in
          Sri Lanka. Most importantly, it will fill the gap in caregiver
          training and parent advocacy which is a timely need for families.
          During the current context of economic hardships to Sri Lanka
          'Namaste' is indeed a blessing".
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
        //   style={{
        //     position: "absolute",
        //     width: "650px",
        //     height: "650px",
        //     borderRadius: "50%",
        //     backgroundColor: "purple",
        //     zIndex: -1,
        //   }}
        >
          <img
            src={laptopimg}
            alt="laptopimg"
            // width="650px"
            // height="650px"
            style={{
              zIndex: 1,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LearnMoreCard;
