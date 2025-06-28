// src/components/RadarChart.tsx
// Reusable radar chart component using Chart.js

import { Radar } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';

interface RadarChartProps {
  data: ChartData<'radar'>;
  options?: ChartOptions<'radar'>;
}

export const RadarChart: React.FC<RadarChartProps> = ({ data, options }) => {
  return <Radar data={data} options={options} />;
};
