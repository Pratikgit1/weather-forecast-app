import React from "react";
import { render } from "@testing-library/react";
import Title from "./Title";

test("renders title component", () => {
  const { getByTestId, getByAltText, getByText } = render(
    <Title
      data={{
        dt: 1590451200,
        dt_txt: "2020-05-26 00:00:00",
        main: {
          feels_like: 292.12,
          grnd_level: 867,
          humidity: 47,
          pressure: 1008,
          sea_level: 1008,
          temp: 292.96,
          temp_kf: 0,
          temp_max: 292.96,
          temp_min: 292.96,
        },
        weather: [
          {
            description: "clear sky",
            icon: "01d",
            id: 800,
            main: "Clear",
          },
        ],
        wind: {
          deg: 124,
          speed: 0.6,
        },
      }}
    />
  );
  expect(getByTestId("test-title-main")).toBeInTheDocument();
  expect(getByTestId("test-title-footer")).toBeInTheDocument();
  expect(getByAltText("clear sky")).toBeInTheDocument();
  expect(getByText(/Humidity 47 %/)).toBeInTheDocument();
  expect(getByText(/26 \/ 05/)).toBeInTheDocument();
});
