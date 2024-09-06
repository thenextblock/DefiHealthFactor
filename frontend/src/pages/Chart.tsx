import { LineChart } from '@mantine/charts';
import { Group, Paper, Text } from '@mantine/core';
import { data } from '../data/chartData';

interface ChartTooltipProps {
    label: string;
    payload: Record<string, any>[] | undefined;
}

export function HealthFactorChart() {
    return (

        <LineChart
        p={5}
            h={300}
            data={data}
            series={[{ name: 'health', label: 'Health: ' }]}
            dataKey="date"
            type="gradient"
            gradientStops={[
                { offset: 0, color: 'red.6' },
                { offset: 20, color: 'orange.6' },
                { offset: 40, color: 'yellow.5' },
                { offset: 70, color: 'lime.5' },
                { offset: 80, color: 'cyan.5' },
                { offset: 100, color: 'blue.5' },
            ]}
            strokeWidth={6}
            curveType="natural"
            yAxisProps={{ domain: [40, 100] }}
            valueFormatter={(value) => `${value}%`}
        />
    );
}