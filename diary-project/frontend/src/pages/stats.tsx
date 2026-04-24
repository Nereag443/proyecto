import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { Spinner } from '../components/spinner';
import type { Media } from '../types/media';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

type GroupedStats = {
    type: string;
    count: number;
};

function groupByType(data: Media[]): GroupedStats[] {
    const counts: Record<string, number> = {};
    data.forEach(item => {
        counts[item.type] = (counts[item.type] || 0) + 1;
    });
    return Object.entries(counts).map(([type, count]) => ({ type, count }));
}

function barChart(data: GroupedStats[]) {
    return {
        labels: data.map(item => item.type),
        datasets: [{
            label: 'Medios consumidos',
            data: data.map(item => item.count),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };
}

const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                precision: 0
            }
        }
    }
    
}

export function Stats () {
    const [data, setData] = useState<GroupedStats[]>([]);
    const [loading, setLoading] = useState(true);
useEffect(() => {
    setLoading(true);
    fetch('http://localhost:3001/api/v1/media')
        .then(response => response.json())
        .then(data => setData(groupByType(data)))
        .catch(error => console.error('Error fetching stats:', error))
        .finally(() => setLoading(false));
}, []);

if (loading) {
    return <Spinner />;
}

if (data.length === 0) {
    return (
        <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white p-4">
            <div className="container mx-auto p-4">
                <p className="text-lg mb-4">Las estadísticas no están disponibles.</p>
                <p className="text-lg mb-4">Añade al menos un medio para ver las estadísticas.</p>
            </div>
        </div>
    );
}
    return (
        <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white p-4">
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Estadísticas</h1>
                <p className="text-lg mb-4">Aquí puedes ver tus estadísticas de consumo de medios</p>
                <div className="mb-4 w-full h-100 md:h-150 lg:h-125">
                    <Bar data={barChart(data)} options={options} />
                </div>
            </div>
        
        </div>
    )
}