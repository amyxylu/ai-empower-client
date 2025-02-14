import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import GuidePageCard from "../components/GuidePageCard/GuidePageCard";

function GuidePage() {
  const { toolId } = useParams();
  const [guide, setGuide] = useState(null);

  useEffect(() => {
    const getGuide = async () => {
      try {
        const response = await axios.get(
          `http://localhost:${PORT}/api/guide/${toolId}`
        );
        setGuide(response.data);
      } catch (error) {
        console.error("Error fetching guide:", error);
      } finally {
        setLoading(false);
      }
    };

    getGuide();
  }, [toolName]);

  return (
    <div className="guide-page">
      {guide ? <GuidePageCard guide={guide} /> : <p>Loading guide...</p>}
    </div>
  );
}

export default GuidePage;
