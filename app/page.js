"use client";

import { useState } from "react";

const counties = [
  ["Box Elder", 28, 14],
  ["Cache", 58, 10],
  ["Rich", 67, 10],
  ["Weber", 53, 20],
  ["Morgan", 60, 23],
  ["Davis", 49, 24],
  ["Salt Lake", 50, 32],
  ["Tooele", 28, 34],
  ["Summit", 67, 29],
  ["Daggett", 88, 27],
  ["Utah", 55, 43],
  ["Wasatch", 65, 38],
  ["Duchesne", 76, 40],
  ["Uintah", 90, 42],
  ["Juab", 29, 52],
  ["Carbon", 73, 52],
  ["Millard", 30, 64],
  ["Sanpete", 57, 61],
  ["Emery", 72, 66],
  ["Grand", 87, 66],
  ["Sevier", 57, 72],
  ["Beaver", 28, 79],
  ["Piute", 52, 80],
  ["Wayne", 68, 80],
  ["Iron", 28, 88],
  ["Garfield", 66, 88],
  ["San Juan", 86, 89],
  ["Washington", 24, 96],
  ["Kane", 54, 96],
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
                width: 26,
                height: 26,
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
            <li><strong>Utah Legal Help:</strong> https://www.utahlegalhelp.org</li>
            <li><strong>Free Virtual Legal Clinic:</strong> https://www.utahlegalhelp.org/vlc.html</li>
            <li><strong>And Justice for All:</strong> https://andjusticeforall.org</li>
            <li><strong>Utah State Bar Access to Justice:</strong> https://www.utahbar.org</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
