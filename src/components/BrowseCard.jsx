export default function BrowseCard({ title, description, onClick }) {
  const cardStyle = {
    width: "520px",
    height: "350px",
    padding: "28px",
    borderRadius: "20px",
    background: "linear-gradient(135deg, #0f766e, #0c2d48)",
    color: "#e0f7ff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 15px 35px rgba(0,0,0,0.35)",
    cursor: "pointer",
    transition: "0.3s ease",
  };

  const titleStyle = {
    fontSize: "26px",
    fontWeight: "700",
    marginBottom: "10px",
    letterSpacing: "0.5px",
    fontFamily: "Georgia, serif",
  };

  const lineStyle = {
    width: "30px",
    height: "3px",
    background: "#67e8f9",
    borderRadius: "1px",
    marginBottom: "8px",

  };
  const lineeStyle = {
    width: "300px",
    height: "4px",
    background: "#67e8f9",
    borderRadius: "1px",
    marginBottom: "10px",
};

  const descStyle = {
    fontSize: "14px",
    color: "#a5f3fc",
    lineHeight: "1.6",
    maxWidth: "90%",
    fontFamily: "Inter, system-ui, sans-serif",
  };

const decorativeLine = {
  position: "absolute",
  right: "-40px",
  bottom: "-40px",
  width: "160px",
  height: "160px",
  border: "2px solid rgba(103,232,249,0.25)",
  borderRadius: "50%",
};

const decorativeLines = {
  position: "absolute",
  right: "-60px",
  bottom: "-60px",
  width: "200px",
  height: "200px",
  border: "2px solid rgba(103,232,249,0.15)",
  borderRadius: "50%",
};
  



  return (
    <div
      style={cardStyle}
      onClick={onClick}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {/* decorative line accent */}
      <div style={decorativeLine}></div>
      <div style={decorativeLines}></div>

  
      <div style={lineeStyle}></div>

      <h2 style={titleStyle}>{title}</h2>

      {/* line under title */}
      <div style={lineStyle}></div>
      

      <p style={descStyle}>{description}</p>
    </div>
  );
}