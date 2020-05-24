import _ from "lodash";

export const convertToCelcius = (kelvin) => {
  return _.round(kelvin - 273.15, 1);
};

export const getDay = (timestamp) => {
    const a = new Date(timestamp*1000);
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return days[a.getDay()]
  }
