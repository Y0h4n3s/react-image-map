
import * as React from 'react';
import { isFunction } from './helper';




export const VideoMap = (props) => {
  const {
    className = '',
    src = '',
    map = [],
    onMapClick = (area, index) => {},
    onClick = () => {},
    ...restProps
  } = props;

  const mapClick = (area, index) => () => {
    onMapClick(area, index);
  };

  return (
    <div className={`video-map__content ${className}`}>
      <video  className="video-map__content__img" width={"100%"} height={"100%"} onClick={onClick} {...restProps}   autoPlay={true} loop={true} >
        <source src={src} type="video/webm"/>
        <p>Your browser doesn't support HTML5 video.</p>
      </video>
      {map.map((area, index) => {
        const { width = 0, height = 0, left = 0, top = 0, style = {}, render, classname, ...restMapProps } = area;
        return (
          <span
            key={index}
            className={`${classname ? classname : ""} video-map__map ${className}_map_span-${index}`}
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
