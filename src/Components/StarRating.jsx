import { useState } from "react";

const starStyle = {
  padding: "10px",
  margin: "10px",
  display: "flex",
  alignItems: "center",
  gap: "5px",
  cursor: "pointer",
  fontSize: "25px",
};

const star = {
  width: " 30px",
  height: "30px",
};

export default function StarRating({
  maxRating,
  defaultRating,
  onSetRating,
  className,
}) {
  const [tempRating, setTempRating] = useState(0);
  const [rating, setRating] = useState(defaultRating);

  const handleRating = function (rating) {
    setRating(rating);
    onSetRating(rating);
  };

  return (
    <div style={starStyle}>
      {Array.from({ length: maxRating }, (_, i) => (
        <p key={i}>
          <Star
            className={className}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onRating={() => handleRating(i + 1)}
            onHoverEnter={() => setTempRating(i + 1)}
            onHoverLeave={() => setTempRating(0)}
          />
        </p>
      ))}
      <p>{tempRating || rating || "0"}</p>
    </div>
  );
}

function Star({ full, onRating, onHoverEnter, onHoverLeave }) {
  return (
    <span
      role="button"
      onClick={onRating}
      onMouseEnter={onHoverEnter}
      onMouseLeave={onHoverLeave}
    >
      {full ? (
        <img src="full.svg" alt="fullstar" style={star} />
      ) : (
        <img src="empty.svg" alt="fullstar" style={star} />
      )}
    </span>
  );
}
