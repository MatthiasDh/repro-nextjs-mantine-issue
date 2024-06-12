"use client";

import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: { base: 60, sm: 0 } }}
      bg="main.9"
      navbar={{
        width: 240,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
      withBorder={false}
    >
      <AppShell.Header hiddenFrom="sm" bg="secondary.9">
        <Burger
          opened={opened}
          onClick={toggle}
          size="sm"
          aria-label="Toggle navigation"
        />
      </AppShell.Header>

      <AppShell.Navbar p="md" bg="secondary.9"></AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default DashboardLayout;
