import { AppShell, Center, Grid, Title } from "@mantine/core";
import { HealthFactorChart } from "./Chart";
import { GlobalHealthFactorCard } from "src/Cards/GlobalHealthFactorCard";

export default function Home() {
  return (


    <Grid>
      <Grid.Col span={4}>
      <GlobalHealthFactorCard />
      </Grid.Col>
      
      <Grid.Col span={6}>
      
          <HealthFactorChart />
        
      </Grid.Col>
      <Grid.Col span={2}>...</Grid.Col>
    </Grid>


  );
}
