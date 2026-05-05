"use client";

import { useState } from "react";

const counties = [
  ["Box Elder", 22, 20],
  ["Cache", 40, 16],
  ["Rich", 47, 16],
  ["Weber", 36, 25],
  ["Morgan", 40, 27],
  ["Davis", 34, 29],
  ["Salt Lake", 35, 35],
  ["Tooele", 22, 42],
  ["Summit", 48, 34],
  ["Daggett", 63, 32],
  ["Utah", 39, 45],
  ["Wasatch", 48, 41],
  ["Duchesne", 59, 44],
  ["Uintah", 73, 45],
  ["Juab", 25, 54],
  ["Carbon", 55, 54],
  ["Millard", 26, 65],
  ["Sanpete", 41, 62],
  ["Emery", 57, 66],
  ["Grand", 72, 66],
  ["Sevier", 41, 72],
  ["Beaver", 25, 78],
  ["Piute", 38, 80],
  ["Wayne", 54, 80],
  ["Iron", 25, 87],
  ["Garfield", 52, 88],
  ["San Juan", 72, 90],
  ["Washington", 20, 96],
  ["Kane", 42, 96],
];

export default function Page() {
  const [county, setCounty] = useState("Kane");

  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: 24 }}>
      <h1 style={{ color: "#7A0019" }}>Utah Legal Resource Finder</h1>
      <p>Click a county to find free and low-cost legal help.</p>

      <div style={{ display: "flex", gap: 32, alignItems: "flex-start", flexWrap: "wrap" }}>
        <div style={{ position: "relative", width: 520, maxWidth: "100%" }}>
          <img src="/utah-map.svg" alt="Utah county map" style={{ width: "100%" }} />

          {counties.map(([name, left, top]) => (
            <button
              key={name}
              onClick={() => setCounty(name)}
              title={name}
              style={{
                position: "absolute",
                left: `${left}%`,
                top: `${top}%`,
                transform: "translate(-50%, -50%)",
                background: county === name ? "#7A0019" : "transparent",
                color: county === name ? "white" : "transparent",
                border: "none",
                borderRadius: 999,
                width: 44,
                height: 44,
                cursor: "pointer",
              }}
            >
              •
            </button>
          ))}
        </div>

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
            <li>
  <strong>Utah Legal Help:</strong>{" "}
  <a href="https://www.utahlegalhelp.org" target="_blank">
    Visit site
  </a>
</li>
<li>
  <strong>Free Virtual Legal Clinic:</strong>{" "}
  <a href="https://www.utahlegalhelp.org/vlc.html" target="_blank">
    Sign up here
  </a>
</li>
<li>
  <strong>And Justice for All:</strong>{" "}
  <a href="https://andjusticeforall.org" target="_blank">
    Visit site
  </a>
</li>
<li>
  <strong>Utah State Bar Access to Justice:</strong>{" "}
  <a href="https://www.utahbar.org" target="_blank">
    Visit site
  </a>
</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
