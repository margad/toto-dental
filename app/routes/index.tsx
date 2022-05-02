import React from 'react';
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Image,
  Center,
  Container,
  Group,
  Button,
} from '@mantine/core';
import logo from '../images/logo.png';

export default function Index() {
  return (
    <Center>
      <Container size={420} my={40}>
        <Image
          src={logo}
          alt="logo"
        />
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Email" placeholder="you@mantine.dev" required />
          <PasswordInput label="Password" placeholder="Your password" required mt="md" />
          <Group position="apart" mt="md">
            <Checkbox label="Remember me" />
            <Anchor<'a'> onClick={(event) => event.preventDefault()} href="#" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl">
            Sign in
          </Button>
        </Paper>
      </Container>
    </Center>
  );
}