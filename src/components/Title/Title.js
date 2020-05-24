import React from "react";
import _ from "lodash";
import { convertToCelcius, getDay } from "../../utils/utils";

const Title = (props) => {
  const { data } = props;
  const dateSplit = data.dt_txt.split(" ")[0].split("-");

  return (
    <>
      <div className="title" key={data.dt}>
        <div className="title-date-day-group">
          <div>{getDay(data.dt)}</div>
          <div className="title-date">{`${dateSplit[2]} / ${dateSplit[1]}`}</div>
        </div>
        <div className="title-first">
          {convertToCelcius(data.main.temp)} &deg;C
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          />
        </div>
      </div>
      <div className="title-footer">
        <div>
          <div>
            Feels like {convertToCelcius(data.main.feels_like)} &deg;C &#5867;
            Humidity {data.main.humidity} %
          </div>
        </div>
        <div>Details{props.toggle}</div>
      </div>
    </>
  );
};

export default Title;
