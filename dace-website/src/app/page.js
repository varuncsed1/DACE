"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Vision from "./components/Vision";
import Mission from "./components/Mission";
import About from "./components/About";
import SelectionProcedure from "./components/SelectionProcedures";
import Eligibility from "./components/Eligibility";
import OtherActivities from "./components/OtherActivities";
import Faculties from "./components/Faculties";
import LinksPage from "./components/Links";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main>
      <Navbar />
      <header
        style={{
          textAlign: "center",
          padding: "1.5rem 1rem",
          backgroundColor: "#d4f3d5ff",
        }}
      >
        <h1
          style={{
            fontSize: "1.75rem",
            fontWeight: "bold",
            color: "#1e40af",
            
          }}
        >
          Dr. Ambedkar Centre of Excellence (DACE)
        </h1>
        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: "500",
            color: "#374151",
          }}
        >
          H.N.B. Garhwal University
        </h2>
      </header>

            <h2 className={styles.heading}>Vice Chancellor</h2>
      <div className={styles.grid}>
        {/* Faculty 1 */}
        <div className={styles.card}>
          <Image
            src="/Picture10.jpeg"
            alt="Dr. Shri Prakash"
            width={400}
            height={400}
            className={styles.image}
          />
          <h3 className={styles.name}>Dr. Shri Prakash</h3>
          <p className={styles.details}>
            (Social Sciences)<br />
            (Joined on 7 Nov. 2022)<br />
            M.A. Geography<br />
            NET-JRF Qualified<br />
            03 times UPSC mains exam appeared<br />
            Multiple State Services Exams Qualified
          </p>
        </div>

        {/* Faculty 2 */}
        <div className={styles.card}>
          <Image
            src="/Picture11.png"
            alt="Dr. Ashish Bahuguna"
            width={400}
            height={400}
            className={styles.image}
          />
          <h3 className={styles.name}>Dr. Ashish Bahuguna</h3>
          <p className={styles.details}>
            (Science &amp; Technology)<br />
            (Joined on 10 Nov. 2022)<br />
            M.Sc. Chemistry<br />
            NET-JRF, GATE, U-SET Qualified<br />
            PhD from IIT Mandi<br />
            Postdoc (Israel)<br />
            02 Times UPSC-CDS Qualified
          </p>
        </div>
      <Vision />
      <section id="mission" style={{ scrollMarginTop: "80px", padding: "3rem 1rem", maxWidth: "64rem", margin: "0 auto" }}>
        <Mission/>
      </section>

      <section id="about" style={{ scrollMarginTop: "80px", padding: "3rem 1rem", maxWidth: "64rem", margin: "0 auto" }}>
        <About/>
      </section>

      <section id="selection-procedures" style={{ scrollMarginTop: "80px", padding: "3rem 1rem", maxWidth: "64rem", margin: "0 auto" }}>
        <SelectionProcedure />
      </section>

      <section id="eligibility" style={{ scrollMarginTop: "80px", padding: "3rem 1rem", maxWidth: "64rem", margin: "0 auto" }}>
        <Eligibility />
      </section>

      <section id="other-activities" style={{ scrollMarginTop: "80px", padding: "3rem 1rem", maxWidth: "64rem", margin: "0 auto" }}>
        <OtherActivities/>
      </section>

      <section id="faculties" style={{ scrollMarginTop: "80px", padding: "3rem 1rem", maxWidth: "64rem", margin: "0 auto" }}>
        <Faculties />
      </section>


      <section id="links" style={{ scrollMarginTop: "80px", padding: "3rem 1rem", maxWidth: "64rem", margin: "0 auto" }}>
        <LinksPage />
      </section>
    </main>
  );
}
