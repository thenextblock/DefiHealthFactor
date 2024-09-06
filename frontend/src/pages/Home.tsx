import { Grid, Title } from "@mantine/core";
import { HealthFactorChart } from "./Chart";
import { GlobalHealthFactorCard } from "src/Cards/GlobalHealthFactorCard";
import ProtocolList from "./ProtocolListButtons";
import { useAppDispatch, useAppSelector } from '../app/myhooks';
import { useState } from "react";

export default function Home() {

  const simulationMode = useAppSelector((state) => state.simulationMode);
  // const [isExpandedMode, setIsExpandedMode] = useState(false);

  

  return (
    <>
      <Grid p={20}>
        <Grid.Col span={12} pb={30}>
          <ProtocolList />
        </Grid.Col>
        <Grid.Col span={simulationMode.simulationModeEnabled ? 6 : 5}>
          <GlobalHealthFactorCard />
        </Grid.Col>
        { simulationMode.simulationModeEnabled && (
          <Grid.Col span={6}>
            <Title order={2}>Price Simulation Mode: </Title>
          </Grid.Col>
         )
        }
        <Grid.Col span={simulationMode.simulationModeEnabled ? 12 : 7}>
          <HealthFactorChart />
        </Grid.Col>
      </Grid>
    </>
  );
}
