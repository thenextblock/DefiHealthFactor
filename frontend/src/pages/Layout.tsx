import React, { useContext, useEffect } from "react";
// import { useLocation } from "react-router-dom";
import { AppShell, Burger, Group, Skeleton, Title } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
// import Logo from "../assets/healthfactor.svg";
import Logo from "../assets/LogoPng.png";

// import Context from "../context/Context";

interface Props {
  children?: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }: Props) => {
  // const context = useContext(Context);
  // const [pageName, setPageName] = React.useState("");
  // let location = useLocation();
  
  const [opened, { toggle }] = useDisclosure();

  // useEffect(() => { }, []);

  return (
    <React.Fragment>
    <AppShell
      header={{ height: 100 }}
      // navbar={{ width: 250, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <img width={100} src={Logo} alt="Logo" />

          <Title order={1}>Health Factor</Title>
        </Group>
      </AppShell.Header>
      {/* <AppShell.Navbar p="md">
      </AppShell.Navbar> */}
      <AppShell.Main>

          {children}

      </AppShell.Main>
    </AppShell>
    </React.Fragment>
  );
};

export default Layout;
