import { AppShell, Center, Grid, Title } from "@mantine/core";
import { HealthFactorChart } from "./Chart";

export default function Home() {
  return (


    <Grid>
      <Grid.Col span={3}>1</Grid.Col>
      <Grid.Col span={6}>
      
      
        
          <HealthFactorChart />
        
      </Grid.Col>
      <Grid.Col span={3}>2</Grid.Col>
    </Grid>


  );
}
