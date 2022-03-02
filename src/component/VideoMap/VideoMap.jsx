
import * as React from 'react';
import { isFunction } from './helper';


export interface Area
    extends React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
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



export const ImageMap = (props: ImageMapProps) => {
  const {
    className = '',
    src = '',
    map = [],
    onMapClick = (area: Area, index: number) => {},
    onClick = () => {},
    ...restProps
  } = props;

  const mapClick = (area: Area, index: number) => () => {
    onMapClick(area, index);
  };

  return (
    <div className={`image-map__content ${className}`}>
      <video controls className="image-map__content__img" width={"100%"} height={"100%"} onClick={onClick}    >
        <source src={src} type="video/webm"/>
        <p>Your browser doesn't support HTML5 video.</p>
      </video>
      {map.map((area: Area, index: number) => {
        const { width = 0, height = 0, left = 0, top = 0, style = {}, render, ...restMapProps } = area;
        return (
          <span
            key={index}
            className={`image-map__map ${className}_map_span-${index}`}
            {...restMapProps}
            style={{ width, height, left, top, ...style }}
            onClick={mapClick(area, index)}
          >
            {render && isFunction(render) && render(area, index)}
          </span>
        );
      })}
    </div>
  );
};
