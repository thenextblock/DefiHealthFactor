import { Grid, Title } from "@mantine/core";
import { HealthFactoChartLine, HealthFactorChart } from "./Chart";
import { GlobalHealthFactorCard } from "src/pages/Cards/GlobalHealthFactorCard";
import ProtocolList from "./ProtocolListButtons";
import { useAppDispatch, useAppSelector } from '../app/myhooks';
import { useState } from "react";
import { SimulationCard } from "./Simulation/SimulationCard";

export default function Home() {

  const simulationMode = useAppSelector((state) => state.simulationMode);

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
            <Title order={4}>Price Simulation Mode: </Title>
            <SimulationCard />
          </Grid.Col>
         )
        }
        <Grid.Col span={simulationMode.simulationModeEnabled ? 12 : 7}>
          <HealthFactoChartLine />
        </Grid.Col>
      </Grid>
    </>
  );
}
