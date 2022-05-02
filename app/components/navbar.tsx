import React, { useState } from 'react';
import { createStyles, Navbar } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import {
  Stethoscope,
  ReportMedical,
  User,
  Logout,
} from 'tabler-icons-react';
import { NavLink } from '@remix-run/react';

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('icon');
  return {
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.fn.rgba(theme.colors[theme.primaryColor][8], 0.25)
            : theme.colors[theme.primaryColor][0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.colors[theme.primaryColor][7],
        [`& .${icon}`]: {
          color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 5 : 7],
        },
      },
    },
  };
});

const data = [
  { link: '/dashboard/dentists', label: 'Эмч', icon: Stethoscope },
  { link: '/dashboard', label: 'Өвчтөний карт', icon: User },
  { link: '/dashboard/checkups', label: 'Эмчилгээ', icon: ReportMedical },
];

export function TotoNavbar() {
  const { classes, cx } = useStyles();

  const links = data.map((item) => (
    <NavLink
      className={({isActive}) => cx(classes.link, { [classes.linkActive]: isActive })}
      to={item.link}
      key={item.label}
      end
    >
      <item.icon className={classes.linkIcon} />
      <span>{item.label}</span>
    </NavLink>
  ));

  return (
    <Navbar width={{ sm: 300 }} p="md">
      <Navbar.Section grow>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <Logout className={classes.linkIcon} />
          <span>Гарах</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
}