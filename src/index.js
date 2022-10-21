import React from "react";
import ReactDOM from "react-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

class NumberGenerator extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const even = (num) => {
      return num % 2;
    };
    const prime = (num) => {
      for (let i = 2; i < num; i++) if (num % i === 0) return false;
      return num > 1;
    };
    const setBackgroundColor = (num) => {
      let color;
      even(num) ? (color = "#FCDB3A") : (color = "#20BF73");
      if (prime(num)) color = "#FD5E53";
      return color;
    };

    return this.props.numberArr.map((number) => {
      return (
        <div
          key={number}
          className="digit-box"
          style={{ backgroundColor: setBackgroundColor(number) }}
        >
          {number}
        </div>
      );
    });
  }
}

class ColorGenerator extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const hexaColor = () => {
      let str = "0123456789abcdef";
      let color = "";
      for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length);
        color += str[index];
      }
      return "#" + color;
    };

    let colorsArr = [];
    for (let j = 0; j < 32; j++) {
      colorsArr.push(hexaColor());
    }

    return colorsArr.map((clr) => {
      return (
        <div key={clr} className="color-box" style={{ backgroundColor: clr }}>
          {clr}
        </div>
      );
    });
  }
}

class Bars extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="bar-chart">
        <h3 className="title">World Population</h3>
        <div style={{ maxWidth: "650px" }}>
          <Bar
            data={{
              labels: [
                "World",
                "China",
                "USA",
                "Indonesia",
                "Brazil",
                "Pakistan",
                "Nigeria",
                "Bangladesh",
                "Russia",
                "Japan",
              ],
              datasets: [
                {
                  label: "total count/value",
                  data: [
                    7693165599, 1377422166, 1295210000, 323947000, 258705000,
                    206135893, 194125062, 186988000, 161006790, 146599183,
                    126960000,
                  ],
                  backgroundColor: ["#FFA500"],
                  borderColor: ["#FFA500"],
                  borderWidth: 0.5,
                },
              ],
            }}
            height={500}
            options={{
              maintainAspectRatio: false,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
              legend: {
                labels: {
                  fontSize: 15,
                },
              },
            }}
          />
        </div>
      </div>
    );
  }
}

const numberGen = (
  <main className="main-container">
    <h3 className="title">Number Generator</h3>
    <div className="number-container">
      <NumberGenerator
        numberArr={[
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
          20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
        ]}
      />
    </div>
  </main>
);

const colorGen = (
  <section className="color-container">
    <h3 className="title">Hexadecimal Colors</h3>
    <div className="colors">
      <ColorGenerator />
    </div>
  </section>
);

const myChart = (
  <div className="main-chart">
    <Bars />
  </div>
);

const app = (
  <div>
    {numberGen}
    {colorGen}
    {myChart}
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(app, rootElement);
