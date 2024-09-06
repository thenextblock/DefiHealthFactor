import { AppShell, Button, Center, Grid, Title } from "@mantine/core";
import { HealthFactorChart } from "./Chart";
import { GlobalHealthFactorCard } from "src/Cards/GlobalHealthFactorCard";
import ProtocolList from "./ProtocolListButtons";
import { useState } from "react";

export default function Home() {

  const [isExpandedMode, setIsExpandedMode] = useState(false);

  return (
    <>
  
      <Grid p={20}>
        <Grid.Col span={12} pb={30}>
          <ProtocolList />
        </Grid.Col>
        <Grid.Col span={isExpandedMode ? 6 : 5}>
          <GlobalHealthFactorCard />
        </Grid.Col>
        { isExpandedMode && (
          <Grid.Col span={6}>
            <Title order={2}>Price Simulation Mode: </Title>
          </Grid.Col>
         )
        }
        <Grid.Col span={isExpandedMode ? 12 : 7}>
          <HealthFactorChart />
        </Grid.Col>
      </Grid>
    </>
  );
}
