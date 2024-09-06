import React, { useContext, useEffect } from "react";
import { AppShell, Burger, Group, Skeleton, Title, Text } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import Logo from "../assets/LogoPng.png";

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  // const context = useContext(Context);
  // const [pageName, setPageName] = React.useState("");
  // let location = useLocation();  
  const [opened, { toggle }] = useDisclosure();
  const [asideOpened, { toggle: toggleAside }] = useDisclosure();
  


  return (
    <React.Fragment>
    <AppShell
      header={{ height: 110 }}
      // navbar={{ width: 350, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
      withBorder={false}
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <img width={100} src={Logo} alt="Logo" />
          <Title order={4}>Defi Health Factor</Title>
        </Group>
      </AppShell.Header>
      {/* <AppShell.Navbar p="md"></AppShell.Navbar> */}
      
      <AppShell.Main>
          {children}
      </AppShell.Main>

      {/* <AppShell.Aside>
          <h1> Simulation Mode Active </h1>
      </AppShell.Aside> */}
    </AppShell>
    </React.Fragment>
  );
};

export default Layout;
