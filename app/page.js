"use client";

import React, { useMemo, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Search, MapPin, Phone, Globe, Scale, Languages } from "lucide-react";

const BRAND = {
  maroon: "#580100",
  gold: "#D7B15C",
  charcoal: "#231F20",
  gray: "#F6F4F1",
  teal: "#335C67",
};

// Utah county GeoJSON source from Plotly public datasets.
// If this URL ever changes, download the file and host it with your app.
const geoUrl = "/counties.json";

const UTAH_STATE_FIPS = "49";

// Starter data. Use your GPT to create/verify each county's resources,
// then paste the finalized public-facing resource entries here.
const resources = {
  "Iron": {
    local: [
      {
        name: "Iron County Justice Court",
        category: "Court Self-Help",
        description: "Provides basic court information and filing guidance.",
        website: "https://www.utcourts.gov/",
        phone: "(435) 867-5335",
        eligibility: "Open to the public",
        languages: "Interpreter services may be available through the court",
      },
    ],
    regional: [
      {
        name: "Five County Association of Governments",
        category: "Housing and Benefits Support",
        description: "May help with housing, rent assistance, and supportive services in southern Utah.",
        website: "https://www.fivecounty.utah.gov/",
        phone: "(435) 673-3548",
        eligibility: "Varies by program",
        languages: "Contact provider",
      },
    ],
    statewide: [],
  },
  "Salt Lake": {
    local: [
      {
        name: "Legal Aid Society of Salt Lake",
        category: "Family Law / Domestic Violence",
        description: "Provides legal help in family law matters, including help for survivors of domestic violence.",
        website: "https://www.legalaidsocietyofsaltlake.org/",
        phone: "(801) 328-8849",
        eligibility: "Varies by case and income",
        languages: "Contact provider",
      },
    ],
    regional: [],
    statewide: [],
  },
  "Utah": {
    local: [
      {
        name: "Timpanogos Legal Center",
        category: "Legal Clinic / Family Law",
        description: "Offers legal clinics and help with common civil legal issues.",
        website: "https://www.timplegal.org/",
        phone: "(801) 649-8895",
        eligibility: "Varies by clinic",
        languages: "Contact provider",
      },
    ],
    regional: [],
    statewide: [],
  },
};

const statewideResources = [
  {
    name: "Utah Legal Services",
    category: "Civil Legal Aid",
    description: "Provides free civil legal help to eligible low-income Utah residents.",
    website: "https://www.utahlegalservices.org/",
    phone: "(801) 328-8891",
    eligibility: "Income and case-type requirements may apply",
    languages: "Contact provider",
  },
  {
    name: "Utah Courts Self-Help Center",
    category: "Court Self-Help",
    description: "Provides information and forms for people handling civil legal matters without a lawyer.",
    website: "https://www.utcourts.gov/selfhelp/",
    phone: "Contact through Utah Courts website",
    eligibility: "Open to the public",
    languages: "Interpreter information available through Utah Courts",
  },
  {
    name: "And Justice For All",
    category: "Legal Aid Network",
    description: "Connects people to Utah nonprofit legal aid organizations and access-to-justice resources.",
    website: "https://andjusticeforall.org/",
    phone: "(801) 924-3181",
    eligibility: "Varies by partner organization",
    languages: "Contact provider",
  },
];

function normalizeCountyName(name) {
  return String(name || "").replace(/ County$/i, "").trim();
}

function ResourceCard({ item }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="rounded-xl p-2" style={{ backgroundColor: "#F8F0DC" }}>
          <Scale size={18} style={{ color: BRAND.maroon }} />
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="text-base font-bold" style={{ color: BRAND.charcoal }}>{item.name}</h4>
          <p className="mt-1 text-sm font-semibold" style={{ color: BRAND.teal }}>{item.category}</p>
          <p className="mt-2 text-sm leading-6 text-stone-700">{item.description}</p>
          <div className="mt-3 grid gap-2 text-sm text-stone-700">
            {item.website && (
              <a className="flex items-center gap-2 underline decoration-stone-300 underline-offset-4" href={item.website} target="_blank" rel="noreferrer">
                <Globe size={15} /> {item.website.replace(/^https?:\/\//, "")}
              </a>
            )}
            {item.phone && <div className="flex items-center gap-2"><Phone size={15} /> {item.phone}</div>}
            {item.languages && <div className="flex items-center gap-2"><Languages size={15} /> {item.languages}</div>}
          </div>
          {item.eligibility && (
            <p className="mt-3 rounded-xl bg-stone-50 px-3 py-2 text-xs text-stone-600"><strong>Eligibility:</strong> {item.eligibility}</p>
          )}
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="mt-6">
      <h3 className="mb-3 text-lg font-bold" style={{ color: BRAND.maroon }}>{title}</h3>
      <div className="grid gap-3">{children}</div>
    </section>
  );
}

export default function UtahLegalResourceMapEmbed() {
  const [selectedCounty, setSelectedCounty] = useState("Iron");
  const [query, setQuery] = useState("");

  const selectedData = resources[selectedCounty] || { local: [], regional: [], statewide: [] };
  const countyOptions = useMemo(() => Object.keys(resources).sort(), []);

  const filteredOptions = countyOptions.filter((county) =>
    county.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-stone-50 p-4 text-stone-900 md:p-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 ring-stone-200">
        <header className="px-6 py-7 md:px-10" style={{ backgroundColor: BRAND.maroon }}>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold tracking-wide" style={{ color: BRAND.gold }}>UTAH STATE BAR</p>
              <h1 className="mt-2 text-3xl font-bold text-white md:text-4xl" style={{ fontFamily: "Palatino, Georgia, serif" }}>
                Utah Legal Resource Finder
              </h1>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-white/85 md:text-base">
                Select a county to find local legal help first, followed by regional and statewide resources.
              </p>
            </div>
            <div className="rounded-2xl px-4 py-3 text-sm font-semibold" style={{ backgroundColor: BRAND.gold, color: BRAND.charcoal }}>
              Free and low-cost resources
            </div>
          </div>
        </header>

        <main className="grid gap-0 lg:grid-cols-[1.05fr_.95fr]">
          <div className="border-b border-stone-200 p-5 md:p-8 lg:border-b-0 lg:border-r">
            <div className="mb-5 flex items-center gap-2 rounded-2xl border border-stone-200 bg-white px-4 py-3 shadow-sm">
              <Search size={18} className="text-stone-500" />
              <input
                className="w-full outline-none"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search county, e.g., Iron or Salt Lake"
              />
            </div>

            {query && (
              <div className="mb-5 flex flex-wrap gap-2">
                {filteredOptions.map((county) => (
                  <button
                    key={county}
                    onClick={() => { setSelectedCounty(county); setQuery(""); }}
                    className="rounded-full border px-4 py-2 text-sm font-semibold transition hover:shadow-sm"
                    style={{ borderColor: BRAND.gold, color: BRAND.maroon }}
                  >
                    {county} County
                  </button>
                ))}
              </div>
            )}

            <div className="rounded-3xl bg-stone-100 p-3">
              <ComposableMap
                projection="geoAlbersUsa"
                width={620}
                height={720}
                className="h-auto w-full"
              >
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies
                      .filter((geo) => String(geo.id).startsWith(UTAH_STATE_FIPS))
                      .map((geo) => {
                        const countyName = normalizeCountyName(geo.properties.NAME);
                        const isSelected = countyName === selectedCounty;
                        const hasResources = Boolean(resources[countyName]);
                        return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            onClick={() => setSelectedCounty(countyName)}
                            style={{
                              default: {
                                fill: isSelected ? BRAND.maroon : hasResources ? BRAND.gold : "#DDD6CC",
                                stroke: "#FFFFFF",
                                strokeWidth: 1.2,
                                outline: "none",
                                cursor: "pointer",
                              },
                              hover: {
                                fill: BRAND.teal,
                                stroke: "#FFFFFF",
                                strokeWidth: 1.2,
                                outline: "none",
                                cursor: "pointer",
                              },
                              pressed: {
                                fill: BRAND.maroon,
                                stroke: "#FFFFFF",
                                strokeWidth: 1.2,
                                outline: "none",
                              },
                            }}
                          />
                        );
                      })
                  }
                </Geographies>
              </ComposableMap>
            </div>

            <p className="mt-4 text-xs leading-5 text-stone-500">
              This tool provides legal information and referral resources. It does not provide legal advice.
            </p>
          </div>

          <aside className="p-5 md:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl p-3" style={{ backgroundColor: "#F8F0DC" }}>
                <MapPin size={24} style={{ color: BRAND.maroon }} />
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: BRAND.teal }}>Selected county</p>
                <h2 className="text-2xl font-bold" style={{ color: BRAND.charcoal }}>{selectedCounty} County</h2>
              </div>
            </div>

            <Section title="Local resources">
              {selectedData.local.length ? selectedData.local.map((item) => <ResourceCard key={item.name} item={item} />) : (
                <p className="rounded-2xl bg-stone-50 p-4 text-sm text-stone-700">Local resources are being verified. Start with the statewide resources below.</p>
              )}
            </Section>

            {selectedData.regional.length > 0 && (
              <Section title="Regional resources">
                {selectedData.regional.map((item) => <ResourceCard key={item.name} item={item} />)}
              </Section>
            )}

            <Section title="Statewide Utah resources">
              {[...selectedData.statewide, ...statewideResources].map((item) => <ResourceCard key={item.name} item={item} />)}
            </Section>
          </aside>
        </main>
      </div>
    </div>
  );
}
