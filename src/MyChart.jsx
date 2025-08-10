import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function MyChart() {
    const data = {
        // x-axis labels
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July"],
        datasets: [
            {
                label: "Revenue",
                data: [10, 25, 40, 30, 50, 60, 70],
                borderColor: "rgb(75, 192, 192)",
                backgroundColor: "white",
                tension: 0.4,                // Curviness of the line 
                borderWidth: 2,              // Thickness of the line
                pointRadius: 4,              // Size of dots 
                pointBackgroundColor: "rgb(75, 192, 192)",// Dot fill color
                pointBorderColor: "rgb(75, 192, 192)", // Dot border color
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,          // hide legend 
            },
            title: {
                display: true,
                text: "Revenue",
                position: "top",
                align: "start",
                padding: {
                    left: 20,
                    bottom: 25
                },
                color: "#111",
                font: { size: 20, weight: "bold" }
            },

            tooltip: {
                enabled: true,
                backgroundColor: "black",
                titleFont: { size: 14 },
                bodyFont: { size: 12 }
            }
        },
        scales: {
            x: {
                grid: {
                    display: true,        // Show x-axis grid lines
                    color: "#eee"
                },
                ticks: {
                    color: "#666"         // x-axis label color
                }
            },
            y: {
                grid: {
                    display: true,
                    color: "#eee",
                },
                ticks: {
                    color: "#666",
                }
            }
        },

        layout: {
            padding: {
                top: 20,
                left: 20,
                right: 30,
                bottom: 20
            }
        }

    };

    return (
        <div className="w-full h-72" >
            <Line data={data} options={options} />
        </div >
    );
};

export default MyChart;
