import React from "react";
import { render } from "@testing-library/react";
import Content from "./Content";

test("renders content component", () => {
  const { getByText, getByTestId } = render(
    <Content
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
        rain: {
          "3h": 0.3,
        },
      }}
    />
  );
  expect(getByTestId("test-content")).toBeInTheDocument();
  expect(getByText(/Rainfall last 3 hours 0.3 mm/)).toBeInTheDocument();
});
