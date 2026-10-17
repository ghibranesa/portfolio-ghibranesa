import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";
import { PROJECT_DETAILS_DATA } from "../data/projectDetailsData";

export default function ArrayAntenna4x1Detail({ onClose, mode }) {
  const data = PROJECT_DETAILS_DATA["array-antenna-4x1"];
  return <ProjectCaseLayout project={data} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}
