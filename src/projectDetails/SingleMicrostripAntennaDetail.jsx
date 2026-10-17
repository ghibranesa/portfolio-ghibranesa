import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";
import { PROJECT_DETAILS_DATA } from "../data/projectDetailsData";

export default function SingleMicrostripAntennaDetail({ onClose, mode }) {
  const data = PROJECT_DETAILS_DATA["single-microstrip-antenna"];
  return <ProjectCaseLayout project={data} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}
