import BrowseCard from "./components/BrowseCard";

export default function App() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#020617",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        gap: "100px",
      }}
    >
      <BrowseCard
        title="Ilanora"
        description="An essay is a focused piece of writing that presents an author's argument, analysis, or interpretation of a specific topic, typically structured with an introduction, body paragraphs, and a conclusion. Often used to persuade or inform, they generally range from 5–7 paragraphs but vary in length, incorporating research and evidence to support a thesis."
        onClick={() => alert("Test")}
      />


    </div>

  );
}