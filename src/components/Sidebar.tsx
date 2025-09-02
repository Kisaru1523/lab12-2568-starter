import { NavLink as RouterNavLink } from "react-router-dom";
import {
  NavLink,
  Stack,
  Box,
  Avatar,
  Indicator,
  Text,
  Group,
} from "@mantine/core";

export type SidebarProps = {
  userName: string;
  type?: "admin" | "student";
};

export default function Sidebar({ userName, type }: SidebarProps) {
  return (
    <Stack
      align="stretch"
      justify="space-between"
      gap="md"
      style={{ height: "100%" }}
    >
    
      <Box>
        <NavLink
          color="cyan"
          label="Home"
          component={RouterNavLink}
          to="/"
          active
        />
        <NavLink
          color="cyan"
          label="About"
          component={RouterNavLink}
          to="/about"
        />
      </Box>

      <Box p={10}>
        <Group>
          <Indicator color="green" processing>
            <Avatar
              src="public/me.jpg" 
              alt="user avatar"
              radius="xl"
            />
          </Indicator>
          <Stack gap={0}>
            <Text size="sm">User : {userName}</Text>
            {type && (
              <Text size="xs" c="dimmed">
                Role : {type}
              </Text>
            )}
          </Stack>
        </Group>
      </Box>
    </Stack>
  );
}
