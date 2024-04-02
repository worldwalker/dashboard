"use client";
import React from "react";
import { data, salesVolumeData } from "@/data";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
  BarController,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarController,
  Tooltip
);

export default function Dashboard() {
  return (
    <div className="main-frame">
      <div className="chart-box">
        <h2>Sales Volume</h2>
        <Line data={salesVolumeData} />
      </div>

      <div className="statistics">
        <h2>User Feedback Scores</h2>
        <div className="stat-box">
          {data.사용자피드백점수.map((feedback) => (
            <div
              className="stat-data"
              key={feedback.제품}
              style={{
                background:
                  feedback?.제품 === "제품A"
                    ? "rgba(255, 99, 132, 0.5)"
                    : feedback?.제품 === "제품B"
                    ? "rgba(54, 162, 235, 0.5)"
                    : "rgba(255, 206, 86, 0.5)",
              }}
            >
              {feedback.제품}: {feedback.점수}
            </div>
          ))}
        </div>

        <h2>Performance Metrics</h2>
        <div className="stat-box">
          {data.성능지표.map((performance) => (
            <div
              className="stat-data"
              key={performance.제품}
              style={{
                background:
                  performance?.제품 === "제품A"
                    ? "rgba(255, 99, 132, 0.5)"
                    : performance?.제품 === "제품B"
                    ? "rgba(54, 162, 235, 0.5)"
                    : "rgba(255, 206, 86, 0.5)",
              }}
            >
              {performance.제품}: Battery Life - {performance.배터리수명}, Speed
              - {performance.처리속도}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
