"use client";

import { useEffect, useState } from "react";

const countyIds = [
  "Box_Elder", "Cache", "Rich", "Weber", "Morgan", "Davis", "Salt_Lake",
  "Tooele", "Summit", "Daggett", "Utah", "Wasatch", "Duchesne", "Uintah",
  "Juab", "Carbon", "Millard", "Sanpete", "Emery", "Grand", "Sevier",
  "Beaver", "Piute", "Wayne", "Iron", "Garfield", "San_Juan", "Washington", "Kane"
];

function displayName(id) {
  return id.replaceAll("_", " ");
}

export default function Page() {
  const [county, setCounty] = useState("Kane");

  useEffect(() => {
    countyIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      el.style.cursor = "pointer";

      el.onclick = () => {
        setCounty(displayName(id));
      };
    });
  }, []);

  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: 24 }}>
      <h1 style={{ color: "#7A0019" }}>Utah Legal Resource Finder</h1>
      <p>Click a county to find free and low-cost legal help.</p>

      <div style={{ display: "flex", gap: 32, alignItems: "flex-start", flexWrap: "wrap" }}>
        <iframe
  src="/utah-map.svg"
  style={{
    width: 520,
    maxWidth: "100%",
    height: 620,
    border: "none",
  }}
/>

        <section style={{ maxWidth: 520, border: "1px solid #ddd", padding: 20, borderRadius: 12 }}>
          <h2>{county} County Legal Help</h2>

          <h3>Tell us more</h3>

          <label>
            Legal issue:
            <select style={{ display: "block", width: "100%", margin: "6px 0 12px", padding: 8 }}>
              <option>Family law / child custody</option>
              <option>Housing</option>
              <option>Protective orders</option>
              <option>Immigration</option>
              <option>Benefits</option>
              <option>Consumer / debt</option>
              <option>Expungement</option>
              <option>Employment</option>
              <option>Wills / probate</option>
              <option>General help</option>
            </select>
          </label>

          <label>
            Deadline or court date?
            <input style={{ display: "block", width: "100%", margin: "6px 0 12px", padding: 8 }} />
          </label>

          <label>
            Language access needed?
            <input style={{ display: "block", width: "100%", margin: "6px 0 12px", padding: 8 }} />
          </label>

          <h3>Statewide Utah resources</h3>
          <ul>
            <li><a href="https://www.utahlegalhelp.org" target="_blank"><strong>Utah Legal Help</strong></a></li>
            <li><a href="https://www.utahlegalhelp.org/vlc.html" target="_blank"><strong>Free Virtual Legal Clinic</strong></a></li>
            <li><a href="https://andjusticeforall.org" target="_blank"><strong>And Justice for All</strong></a></li>
            <li><a href="https://www.utahbar.org" target="_blank"><strong>Utah State Bar Access to Justice</strong></a></li>
          </ul>
        </section>
      </div>
    </main>
  );
}
