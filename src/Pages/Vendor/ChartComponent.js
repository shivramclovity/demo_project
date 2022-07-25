import Chart from "react-apexcharts";

const ChartComponent = ({ charttype }) => {
  var state = {
    series: [
      {
        name: "Vendor",
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
      },
      {
        name: "Supply Chain",
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
      },
      {
        name: "Legal",
        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        type: "line",
        dataLabels: {
          enabled: false,
        },
        /*  stroke: {
           width: [5, 7, 5],
           curve: 'straight',
           dashArray: [0, 8, 5]
         }, */
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6,
          },
        },
        xaxis: {
          categories: [
            "01 Jan",
            "02 Jan",
            "03 Jan",
            "04 Jan",
            "05 Jan",
            "06 Jan",
            "07 Jan",
            "08 Jan",
            "09 Jan",
            "10 Jan",
            "11 Jan",
            "12 Jan",
          ],
        },

        grid: {
          borderColor: "#f1f1f1",
        },
      },
      stroke: {
        width: [5, 7, 5],
        curve: "straight",
        dashArray: [0, 8, 5],
      },
    },
  };

  return (
    <div className="chart" style={{ height: 300 }}>
      <Chart
        type={charttype}
        options={state.options}
        series={state.series}
        height="100%"
      />
    </div>
  );
};

export default ChartComponent;
