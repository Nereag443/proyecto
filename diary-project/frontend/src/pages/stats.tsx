import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { Spinner } from '../components/spinner';
import type { Media } from '../types/media';
import { getMedia } from '../api/client';
import { useMemo } from 'react';

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
    const [media, setMedia] = useState<Media[]>([]);
    const total = useMemo(() => media.length, [media]);
    const avgRating = useMemo(() => media.length ? media.reduce((acc, m) => acc + m.rating, 0) / media.length : 0, [media]);
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
        <div className='flex flex-col md:flex-row gap-8'>
            <div className='w-full md:w-2/3 h-100'>
                <Bar data={barChart(data)} options={options} />
            </div>
            <div className='flex flex-col gap-4 w-full md:w-1/3'>
            <div className='bg-gray-100 dark:bg-gray-800 rounded p-4 text-center'>
                <p className='text-2xl font-bold'>{total}</p>
                <p className='text-sm text-gray-500'>Total medios</p>
            </div>
            <div className='bg-gray-100 dark:bg-gray-800 rounded p-4 text-center'>
                <p className='text-2xl font-bold'>{avgRating.toFixed(1)}</p>
                <p className='text-sm text-gray-500'>Media de valoración</p>
            </div>
            </div>
        </div>
    )
}