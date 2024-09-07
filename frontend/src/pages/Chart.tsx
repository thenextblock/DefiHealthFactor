import { LineChart } from '@mantine/charts';
import { Group, Paper, Text } from '@mantine/core';
import { data } from '../data/chartData';

interface ChartTooltipProps {
    label: string;
    payload: Record<string, any>[] | undefined;
}

function ChartTooltip({ label, payload }: ChartTooltipProps) {
    if (!payload) return null;
  
    return (
      <Paper px="md" py="sm" withBorder shadow="md" radius="md">
        <Text fw={500} mb={5}>
          {label}
        </Text>
        {payload.map((item: any) => (
          <Text key={item.name} c={item.color} fz="sm">
            {item.name}: {item.value}
          </Text>
        ))}
      </Paper>
    );
  }

export function HealthFactoChartLine() {

return (
    <LineChart
        h={300}
        data={data}
        tooltipProps={{
            content: ({ label, payload }) => <ChartTooltip label={label} payload={payload} />,
          }}
        dataKey="date"
        dotProps={{ r: 6, strokeWidth: 2, stroke: '#fff' }}
        activeDotProps={{ r: 8, strokeWidth: 1, fill: '#fff' }}
        series={[{ name: 'health', label: 'Health: ' }]}

        />
    );
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
                // { offset: 0, color: 'red.6' },
                // { offset: 0, color: 'red.6' },
                // { offset: 20, color: 'orange.6' },
                // { offset: 40, color: 'yellow.5' },
                // { offset: 70, color: 'lime.5' },
                // { offset: 80, color: 'cyan.5' },
                { offset: 100, color: 'red.5' },
                { offset: 200, color: 'blue.5' },
            ]}
            strokeWidth={6}
            curveType="natural"
            yAxisProps={{ domain: [40, 200] }}
            valueFormatter={(value) => `${value}`}
        />
    );
}