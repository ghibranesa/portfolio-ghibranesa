import { lazy } from "react";
import { PROJECT_META_BY_SLUG } from "../data/projectMeta";

const PROJECT_DETAIL_COMPONENTS = {
  "iot-smart-camera": lazy(() => import("./IotSmartCameraDetail")),
  "water-management": lazy(() => import("./WaterManagementDetail")),
  "radar-detection": lazy(() => import("./RadarDetectionDetail")),
  "ofdm-wireless-simulator": lazy(() => import("./OFDMWirelessSimulatorDetail")),
  "ecg-arrhythmia-detection": lazy(() => import("./EcgArrhythmiaDetail")),
  "single-microstrip-antenna": lazy(() => import("./SingleMicrostripAntennaDetail")),
  "array-antenna-2x2": lazy(() => import("./ArrayAntenna2x2Detail")),
  "array-antenna-4x1": lazy(() => import("./ArrayAntenna4x1Detail")),
};

export function getProjectRouteConfig(slug) {
  const metadata = PROJECT_META_BY_SLUG[slug];
  if (!metadata) return null;

  return {
    ...metadata,
    Component: PROJECT_DETAIL_COMPONENTS[slug],
  };
}
