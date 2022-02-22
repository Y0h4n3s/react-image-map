
import React from 'react';
import './index.css';

import { ImageMapProps, Area } from './index';
import { isFunction } from './helper';

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
      <video className="image-map__content__img" width={"100%"} height={"100%"} onClick={onClick}  {...restProps}  >
        <source src={src}/>
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
