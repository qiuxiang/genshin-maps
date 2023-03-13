export interface MapInfo {
  id: number;
  name: string;
  icon: string;
  origin: [number, number];
  size: [number, number];
  slices: [string][];
  mapAnchors: MapAnchor[];
  mapPointLabels: MapPointLabel[];
}

export interface MapAnchor {
  name: string;
  x: number;
  y: number;
  children: MapAnchor[];
}

export interface MapPoint {
  id: number;
  x: number;
  y: number;
  areaId: number;
  extra: string;
}

export interface MapPointLabel {
  name: string;
  icon: string;
  children: MapPointLabel[];
  mapPoints: MapPoint[];
}
