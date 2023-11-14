
import React, { useState, useEffect, useContext } from 'react';
import { Chart } from 'primereact/chart';
import { MainContext } from '../context';

const LineDemo = () =>{
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    const {
        expenses, 
        } =useContext(MainContext)

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: expenses.map((expense)=> expense.date),
            datasets: [
                {
                    label: 'First Dataset',
                    data: expenses.map((expense)=> expense.amount),
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    tension: 0.4
                },
            ]
        };

        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, [expenses]);

    return (
        <div className="w-ful bg-black h-full">
            <div className='h-full   flex w-full items-center justify-center '>
            <Chart type="line" className='rounded bg-white w-3/6' data={chartData} options={chartOptions} />
            </div>
        </div>
    )
}
export default  LineDemo;
        