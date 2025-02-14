import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ResultsPageCard from "../../components/ResultsPageCard/ResultsPageCard";

function ResultsPage() {
  const { id } = useParams();


  return (
    <div>
      {" "}
      <ResultsPageCard id={id} />
    </div>
  );
}

export default ResultsPage;
