import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import GuidePageCard from "../../components/GuidePageCard/GuidePageCard";
import "./GuidePage.scss";

function GuidePage() {
  const { toolName } = useParams(); // Use toolName instead of toolId
  const [guide, setGuide] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getGuide = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/guide/${toolName}`
        );
        setGuide(response.data);
      } catch (error) {
        console.error("Error fetching guide:", error);
      } finally {
        setLoading(false);
      }
    };

    if (toolName) getGuide();
  }, [toolName]); // Depend on toolName

  return (
    <section className="guide-page">
      <div className="guide-page__card">
        {loading ? (
          <p>Loading guide...</p>
        ) : guide ? (
          <GuidePageCard guide={guide} />
        ) : (
          <p>Guide not found.</p>
        )}
      </div>
    </section>
  );
}

export default GuidePage;
