
import React from 'react';

export interface Area
  extends React.DetailedHTMLProps<React.SpanHTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  left: string;
  top: string;
  height: string;
	width: string;
	style?: React.CSSProperties;
	render?: (area: Area, index: number) => React.ReactNode;
}

export interface ImageMapProps
  extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  className?: string;
  src: string;
  map?: Area[];
  onClick?: () => void;
  onMapClick?: (area: Area, index: number) => void;
}

export class ImageMap extends React.Component<ImageMapProps> {}
