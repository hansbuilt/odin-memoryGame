import Card from "./Card";
import { useState, useEffect } from "react";

const countries = [
  "United States",
  "Canada",
  "Mexico",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Portugal",
  "United Kingdom",
  "Sweden",
  "Norway",

  "India",
  "Russia",
  "South Korea",
  "China",
  "Japan",

  "Egypt",
  "South Africa",

  "Australia",
  "New Zealand",

  "Brazil",
  "Argentina",
];

async function fetchFlag(country) {
  const fileName = `Flag of ${country}.svg`;
  const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=imageinfo&titles=File:${encodeURIComponent(
    fileName
  )}&iiprop=url`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const pages = data.query.pages;
    const flagUrl = Object.values(pages)[0]?.imageinfo?.[0]?.url || null;
    return flagUrl
      ? {
          country,
          flagUrl,
        }
      : null;
  } catch (error) {
    console.error(`Error fetching ${country} flag:`, error);
    return null;
  }
}

function GameBoard() {
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    async function loadFlags() {
      const selectedCountries = countries
        .sort(() => 0.5 - Math.random())
        .slice(0, 12);
      const flagPromises = selectedCountries.map(fetchFlag);
      const flagUrls = await Promise.all(flagPromises);
      setFlags(flagUrls.filter(Boolean));
    }

    loadFlags();
  }, []);

  return (
    <>
      {flags.map((flag, index) => (
        <Card
          key={index}
          countryImage={flag.flagUrl}
          countryName={flag.country}
        ></Card>
      ))}
    </>
  );
}

export default GameBoard;
