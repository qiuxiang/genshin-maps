export interface MapData {
  id: number;
  name: string;
  icon: string;
  origin: [number, number];
  size: [number, number];
  slices: [string][];
  mapAnchors: MapAnchor[];
  mapPointLabels: MapPointLabel[];
  mapPointGroups: MapPointGroup[];
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
}

export interface MapPointLabel {
  id: number;
  name: string;
  icon: string;
  children: MapPointLabel[];
  mapPoints: MapPoint[];
}

export interface MapPointGroup {
  entrances: number[];
  points: number[];
  overlay: {
    width: number;
    height: number;
    url: string;
    bounds: [[number, number], [number, number]];
  };
}
