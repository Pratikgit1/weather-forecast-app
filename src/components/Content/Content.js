import React from "react";
import _ from "lodash";
import { convertToCelcius } from "../../utils/utils";

const Content = (props) => {
  const { data } = props;
  const dateSplit = data.dt_txt.split(" ")[1].split(":");

  return (
    <div className="content" key={data.dt} data-testid="test-content">
      <div className="hourly-metrics">
        <div className="title-date">{`${dateSplit[0]}:${dateSplit[1]}`}</div>
        <div className="title-first smaller">
          {convertToCelcius(data.main.temp_min)} &deg;C /{" "}
          {convertToCelcius(data.main.temp_max)} &deg;C
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
            alt={data.weather[0].description}
          />
        </div>
      </div>
      <div className="title-footer">
        <div>
          <div>{data.weather[0].main}</div>
          <div>Feels like {convertToCelcius(data.main.feels_like)} &deg;C</div>
          <div>Humidity {data.main.humidity} %</div>
          <div>
            Wind speed {_.round(data.wind.speed * 3.6, 1)} kmph at{" "}
            {data.wind.deg}&deg; angle
          </div>
          {data.rain && <div>Rainfall last 3 hours {data.rain["3h"]} mm</div>}
          <div>Pressure {data.main.pressure} hPa</div>
        </div>
      </div>
    </div>
  );
};

export default Content;
