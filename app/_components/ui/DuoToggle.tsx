const DuoToggleIcon = ({
  width = 24,
  height = 24,
  className = "",
  color = "",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width={width}
      height={height}
      className={`duo-toggle-icon ${className}`}
    >
      {/* Back circle (cut in half) */}
      <path
        d="M32 3
             A 15 15 0 0 1 32 33
             A 15 15 0 0 1 32 3"
        fill={color || "#808080"}
      />
      {/* Front circle */}
      <circle cx="20" cy="35" r="15" fill={color || "#808080"} />
      {/* White diamond */}
      <rect
        x="15"
        y="30"
        width="10"
        height="10"
        fill="white"
        transform="rotate(45 20 35)"
      />
    </svg>
  );
};

export default DuoToggleIcon;
