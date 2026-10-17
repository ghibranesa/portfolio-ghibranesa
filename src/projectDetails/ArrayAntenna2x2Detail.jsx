import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";
import { PROJECT_DETAILS_DATA } from "../data/projectDetailsData";

export default function ArrayAntenna2x2Detail({ onClose, mode }) {
  const data = PROJECT_DETAILS_DATA["array-antenna-2x2"];
  return <ProjectCaseLayout project={data} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}
