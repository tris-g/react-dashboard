import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import './MetricCard.css';
import ThemedSkeleton from "./ThemedSkeleton";

export const fakeFetch = (data) => {
  const delay = Math.random() * 3000 + 1000;
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), delay);
  });
};

const MetricCard = ({ title, value }) => {
  const [loading, setLoading] = useState(true);
  const [metric, setMetric] = useState(null);
  
  useEffect(() => {
    fakeFetch({ value: value }).then((data) => {
      setMetric(data.value);
      setLoading(false);
    });
  }, []);

  return (
    <div className="metric-card">
      <h4>{ title }</h4>
      <div className="metric-value">
        {loading ? <ThemedSkeleton><Skeleton /></ThemedSkeleton> : metric}
      </div>
    </div>
  );
};

export default MetricCard;