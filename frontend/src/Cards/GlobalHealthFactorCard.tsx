import { Text, Card, RingProgress, Group, useMantineTheme } from '@mantine/core';
import classes from './GlobalHealthFactorCard.module.css';

const stats = [
  { value: 7.96, label: 'Total Collateral' },
  { value: 5.55, label: 'Total Borrowing' },
];

export function GlobalHealthFactorCard() {
  const theme = useMantineTheme();

  const collateral = 7.96;
  const borrowing = 5.55;

  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text className={classes.label}>{stat.value}B</Text>
      <Text size="xs" c="dimmed">
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Card withBorder p="xl" radius="md" className={classes.card}>
      <div className={classes.inner}>
        <div>
          <Text fz="xl" className={classes.label}>
            Global Health Factor
          </Text>
          <div>
            <Text className={classes.lead} mt={30}>
              { collateral + borrowing }B
            </Text>
            <Text fz="xs" c="dimmed">
              Market Size
            </Text>
          </div>
          <Group mt="lg">{items}</Group>
        </div>

        <div className={classes.ring}>
          <RingProgress
            roundCaps
            thickness={6}
            size={150}
            sections={[{ value: (borrowing / collateral) * 100, color: theme.primaryColor }]}
            label={
              <div>
                <Text ta="center" fz="lg" className={classes.label}>
                  {((borrowing /collateral) * 100).toFixed(0)}%
                </Text>
                <Text ta="center" fz="xs" c="dimmed">
                  Health factor
                </Text>
              </div>
            }
          />
        </div>
      </div>
    </Card>
  );
}