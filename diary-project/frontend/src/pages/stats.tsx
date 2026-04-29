import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import type { Media } from '../types/media';
import { getMedia } from '../api/client';
import { useMemo } from 'react';
import { useLoading } from '../hooks/useLoading';

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
    indexAxis: 'y' as const,
    scales: {
        x: {
            beginAtZero: true,
            ticks: {
                precision: 0
            }
        }
    }
    
}

export function Stats () {
    const [data, setData] = useState<GroupedStats[]>([]);
    const { setLoading } = useLoading();
    const [media, setMedia] = useState<Media[]>([]);
    const total = useMemo(() => media.length, [media]);
    const avgRating = useMemo(() => media.length ? media.reduce((acc, m) => acc + m.rating, 0) / media.length : 0, [media]);
    const bestMedia = useMemo(() => 
        media.length ? media.reduce((best, m) => m.rating > best.rating ? m : best): null, [media]);
    const mostConsumedType = useMemo(() => 
        data.length ? data.reduce((most, d) => d.count > most.count ? d : most).type : null, [data]);
useEffect(() => {
    setLoading(true);
    getMedia()
        .then(data => {
            setMedia(data), 
            setData(groupByType(data));
        })
        .catch(error => console.error('Error fetching stats:', error))
        .finally(() => setLoading(false));
}, []);

if (data.length === 0) {
    return (
        <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white p-4">
            <div className="container mx-auto p-4 flex flex-col items-center justify-center mt-20 gap-4">
                <i className="fa-solid fa-chart-line mb-4 text-6xl text-gray-300"></i>
                <p className="text-2xl font-bold">Las estadísticas no están disponibles.</p>
                <p className="text-gray-500">Añade al menos un medio para ver las estadísticas.</p>
            </div>
        </div>
    );
}
    return (
    <div className="w-full min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 mt-4">Estadísticas</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-100 mt-4 dark:bg-gray-800 rounded-xl p-4 text-center shadow hover:scale-105 transition-transform duration-200">
                <p className="text-sm text-gray-500 mb-1">Total medios</p>
                <p className="text-3xl font-bold">{total}</p>
            </div>
            <div className="bg-gray-100 mt-4 dark:bg-gray-800 rounded-xl p-4 text-center shadow hover:scale-105 transition-transform duration-200">
                <p className="text-sm text-gray-500 mb-1">Media de valoración</p>
                <p className="text-3xl font-bold">{avgRating.toFixed(1)}
                    <i className="fa-solid fa-star text-yellow-500 ml-1"></i>
                </p>
            </div>
            <div className="bg-gray-100 mt-4 dark:bg-gray-800 rounded-xl p-4 text-center shadow hover:scale-105 transition-transform duration-200">
                <p className="text-sm text-gray-500 mb-1">Más consumido</p>
                <p className="text-3xl font-bold">{mostConsumedType || "-"}</p>
            </div>
            <div className="bg-gray-100 mt-4 dark:bg-gray-800 rounded-xl p-4 text-center shadow hover:scale-105 transition-transform duration-200">
                <p className="text-sm text-gray-500 mb-1">Mejor valorado</p>
                <p className="text-lg font-bold truncate">{bestMedia?.title || "-"}</p>
            </div>
        </div>
            <div className="container mx-auto p-4">
                <div className='flex flex-col md:flex-row gap-8'>
            <div className='w-full md:h-150 h-70'>
                <Bar data={barChart(data)} options={options} />
            </div>
                </div>
        </div>
        </div>
    </div>
    );
}