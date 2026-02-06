"use client";
import React, { useMemo } from "react";

let Line = null;
let ChartJS = null;

try {
  // dynamic require so the component still loads if the packages are not installed
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const reactChart = require("react-chartjs-2");
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const chartjs = require("chart.js/auto"); // this auto-registers some defaults in chart.js v4
  // fallback if auto doesn't register everything, we still register explicitly below
  Line = reactChart.Line;
  ChartJS = chartjs;
} catch (e) {
  Line = null;
  ChartJS = null;
}

try {
  if (ChartJS) {
    const { Chart, registerables } = require("chart.js");

    Chart.register(...registerables);
  }
} catch (e) {}

export default function AnalyticsChart() {
  const hasChart = Boolean(Line && ChartJS);

  const data = useMemo(() => {
    return {
      labels: Array.from({ length: 30 }).map((_, i) => `Day ${i + 1}`),
      datasets: [
        {
          label: "Impressions",
          data: Array.from({ length: 30 }).map(() =>
            Math.round(Math.random() * 500)
          ),
          fill: true,
          tension: 0.2,
          backgroundColor: "rgba(59,130,246,0.12)",
          borderColor: "rgba(59,130,246,1)",
          pointRadius: 0,
        },
      ],
    };
  }, []);

  const options = useMemo(() => {
    return {
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        title: { display: false },
      },
      scales: {
        x: {
          grid: { display: false },
        },
        y: {
          beginAtZero: true,
          grid: {
            color: "#f3f4f6",
          },
        },
      },
    };
  }, []);

  if (hasChart) {
    // @ts-ignore
    return (
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Analytics (Last 365 days)</h3>
          <div className="text-sm text-gray-500">Daily</div>
        </div>
        <div style={{ height: 180 }}>
          {/* @ts-ignore */}
          <Line data={data} options={options} />
        </div>
      </div>
    );
  }

  // fallback if chart packages are missing
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Analytics (Last 365 days)</h3>
        <div className="text-sm text-gray-500">Daily</div>
      </div>

      <svg
        width="100%"
        height="160"
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
        className="bg-white"
      >
        <polyline
          fill="none"
          stroke="#3b82f6"
          strokeWidth="0.8"
          points="0,15 10,14 20,13 30,6 40,6 50,15 60,3 70,7 80,7 90,10 100,14"
        />
      </svg>

      <p className="text-sm text-gray-500 mt-3">
        For the interactive chart install{" "}
        <code className="bg-gray-100 px-1 rounded">chart.js</code> and{" "}
        <code className="bg-gray-100 px-1 rounded">react-chartjs-2</code>{" "}
        (recommended):
      </p>
      <pre className="bg-gray-50 p-2 rounded text-xs mt-2">
        npm install chart.js react-chartjs-2
      </pre>
    </div>
  );
}
