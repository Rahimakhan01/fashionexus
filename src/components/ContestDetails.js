import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ContestDetails.css'; // Import CSS file for additional styling

const contests = [
  {
    id: 1,
    name: "Summer Fashion Contest",
    description: "Create the coolest summer outfit!",
    deadline: "2024-08-01",
    prizes: "1st Prize: $500, 2nd Prize: $300, 3rd Prize: $200",
    rules: "1. Must include at least one summer accessory.\n2. Use bright colors and light fabrics.",
    judges: "Fashion designers from renowned brands",
  },
  {
    id: 2,
    name: "Streetwear Challenge",
    description: "Design the trendiest streetwear look!",
    deadline: "2024-09-15",
    prizes: "1st Prize: $400, 2nd Prize: $250, 3rd Prize: $150",
    rules: "1. Incorporate urban elements.\n2. Showcase creativity in street fashion.",
    judges: "Streetwear experts",
  }
];

const ContestDetails = () => {
  let { contestId } = useParams(); // Get contestId from URL params

  // Find the contest object that matches the contestId
  const contest = contests.find(contest => contest.id === parseInt(contestId));

  if (!contest) {
    return <div className="not-found">Contest not found</div>;
  }

  return (
    <div className="contest-details">
      <div className="details-content">
        <h1 className="animated-heading">{contest.name}</h1>
        <p className="contest-description"><strong>Description:</strong> {contest.description}</p>
        <p className="contest-deadline"><strong>Deadline:</strong> {contest.deadline}</p>
        <p className="contest-prizes"><strong>Prizes:</strong> {contest.prizes}</p>
        <p className="contest-rules"><strong>Rules:</strong></p>
        <pre className="contest-rules-text">{contest.rules}</pre>
        <p className="contest-judges"><strong>Judges:</strong> {contest.judges}</p>

        {/* Register Button */}
        <Link to="/designsubmission" className="btn-register animated-button">Register</Link>
      </div>
    </div>
  );
};

export default ContestDetails;
