"use client";
import Image from "next/image";
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
import styles from "./styles/faculties.module.css";
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
          Hemvati Nandan Bahuguna Garhwal Univeristy (A Central University)
        </h2>
      </header>


      <div className={styles.grid}>
       <div className={styles.card} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Image
            src="/Picture10.jpeg"
            alt="Prof. Shri Prakash Singh"
            width={100}
            height={100}
            className={styles.image}
          />
          <h3 className={styles.name}>Prof. Shri Prakash Singh</h3>
          <h4 className={styles.name}>Vice-Chancellor</h4>
        </div>

        {/* Faculty 2 */}
      <div className={styles.card} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Image
            src="/Picture11.png"
            alt="Prof. M. M. Semwal"
            width={100}
            height={100}
            className={styles.image}
          />
          <h3 className={styles.name}>Prof. M. M. Semwal</h3>
          <h4 className={styles.name}>DACE - Coordinator</h4>
        </div>
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
