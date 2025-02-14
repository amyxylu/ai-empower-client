import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ResultsPageCard from "../../components/ResultsPageCard/ResultsPageCard";

const url = "http://localhost:8080/api/suggestions";

function ResultsPage() {
  const { resultsId } = useParams();
  const [suggestions, setSuggestions] = useState([]);

  const getSuggestions = async () => {
    try {
      const response = await axios.get(`${url}`);
      setSuggestions = response.data;
    } catch (error) {
      console.error("Error in fetching suggestion", error);
    }
  };

  useEffect(() => {
    getSuggestions();
  }, []);

  return (
    <div>
      {" "}
      <ResultsPageCard id={resultsId} />
    </div>
  );
}

export default ResultsPage;
