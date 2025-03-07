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
          uniqueID: crypto.randomUUID(),
        }
      : null;
  } catch (error) {
    console.error(`Error fetching ${country} flag:`, error);
    return null;
  }
}

function GameBoard({ handleScoreIncrement, handleScoreReset }) {
  const [flags, setFlags] = useState([]);
  const [visited, setVisited] = useState([]);

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

  const resetVisited = () => {
    setVisited([]);
  };

  // const addVisited = (id) => {
  //   setVisited((prevVisited) => [...prevVisited].push(id));
  // };

  const shuffleFlags = (id) => {
    if (!visited.includes(id)) {
      setVisited((prevVisited) => [...prevVisited, id]);
      setFlags((prevFlags) => [...prevFlags].sort(() => Math.random() - 0.5));
      handleScoreIncrement();
    } else {
      handleScoreReset();
      resetVisited();
    }
  };

  return (
    <>
      {flags.map((flag, index) => (
        <Card
          key={index}
          id={flag.uniqueID}
          countryImage={flag.flagUrl}
          countryName={flag.country}
          clickEvent={shuffleFlags}
        ></Card>
      ))}
    </>
  );
}

export default GameBoard;
