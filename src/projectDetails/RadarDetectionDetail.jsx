import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";
import { PROJECT_DETAILS_DATA } from "../data/projectDetailsData";

export default function RadarDetectionDetail({ onClose, mode }) {
  const data = PROJECT_DETAILS_DATA["radar-detection"];
  return <ProjectCaseLayout project={data} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}
