import { useEffect, useState } from 'react';
import { Button, Group, Container, Tooltip, Switch } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '../app/myhooks';
import { setSimulationModeEnabled } from '../app/';

interface ProtocolListProps {
  id: number;
  name: string;
  active: boolean;
  text: string;
}

const ProtocolList = () => {

  const [selected, setSelected] = useState<any>([1]);
  const simulationMode = useAppSelector((state) => state.simulationMode);
  const dispatch = useAppDispatch();

  const protocols: ProtocolListProps[] = [
    {
      id: 1,
      name: "ALL",
      active: true,
      text: "All"
    },
    {
      id: 2,
      name: "Aave-All",
      active: true,
      text: "Aave Protocol V2 & V3 "
    },
    {
      id: 3,
      name: "Compound-All",
      active: true,
      text: "Compound Protocol V2 V3"
    },
    {
      id: 4,
      name: "Venus",
      active: true,
      text: "Venus Protocol"
    }, {
      id: 5,
      name: "Liquity",
      active: false,
      text: "Liquity Protocol"
    }, {
      id: 6,
      name: "Euler",
      active: false,
      text: "Euler Protocol"
    }

  ];

  const handleSelect = (protocol: ProtocolListProps) => {

    if (protocol.id === 1) {
      setSelected([]);
      setSelected([1]);
      return;
    }
    setSelected((prevSelected: any) =>
      prevSelected.includes(protocol.id)
        ? prevSelected.filter((item: any) => item !== protocol.id)
        : [...prevSelected, protocol.id]
    );
  };


  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.currentTarget.checked;
    dispatch(setSimulationModeEnabled(isChecked));
  };

  // useEffect(() => {
  // });

  return (
    // <Container fluid h={50} bg="var(--mantine-color-blue-light)">
    <Group justify="space-between">
      <div> Lending Platforms:
        {protocols.map((protocol) => (
          <Tooltip label={protocol.text}>
            <Button color="rgba(18, 17, 17, 1)" size="xs" radius="lg" m={5}
              disabled={!protocol.active}
              key={protocol.id}
              variant={selected.includes(protocol.id) ? 'filled' : 'outline'}
              onClick={() => handleSelect(protocol)}
            >
              {protocol.name}
            </Button>
          </Tooltip>
        ))}
      </div>

      <div>
        <Switch size="xl" 
            onLabel="SIMULATION ON" 
            offLabel="SIMULATION OFF" 
            checked={simulationMode.simulationModeEnabled}
            onChange={handleSwitchChange} />
      </div>
    </Group>
    // </Container>
  );
};

export default ProtocolList;
