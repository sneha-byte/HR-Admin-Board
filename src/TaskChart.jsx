// MyPieChart.jsx
import React from "react";
import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

// Register components for Pie chart
ChartJS.register(ArcElement, Tooltip, Legend);

function MyPieChart() {
    const data = {
        labels: ["Successful", "Unsuccessful"], // Labels for the pie chart
        datasets: [
            {
                data: [150, 5], // Values for each section
                backgroundColor: [
                    "#4ade80",
                    "#bbf7d0"
                ],
                borderColor: "#fff",
                borderWidth: 2
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "right",
                labels: {
                    color: "#000",
                    font: {
                        size: 14
                    }
                }
            }
        }
    };

    return (
        <Pie data={data} options={options} />
    );
}

export default MyPieChart;
