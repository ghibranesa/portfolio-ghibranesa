import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";
import { PROJECT_DETAILS_DATA } from "../data/projectDetailsData";

export default function IotSmartCameraDetail({ onClose, mode }) {
  const data = PROJECT_DETAILS_DATA["iot-smart-camera"];
  return <ProjectCaseLayout project={data} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}
