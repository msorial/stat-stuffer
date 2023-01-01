import React from 'react';
import { Grid, Text } from '@mantine/core';
import { Card, Image, Badge, Button, Group } from '@mantine/core';
import DashboardHeader from '../../components/Dashboard/DashboardHeader/DashboardHeader';
import VizCard from '../../components/Reusable/VizCard/VizCard';
import AssistsLeader from '../../components/Visualizations/AssistsLeader';
import ParGroupedBar from '../../components/Visualizations/ParGroupedBar';
import PointsLeader from '../../components/Visualizations/PointsLeader';
import ReboundsLeader from '../../components/Visualizations/ReboundsLeader';
import { StyledRow } from './StatDashboardStyles';

const StatDashboard: React.FC = () => {
  return (
    <Grid grow>
      <Grid.Col lg={4} md={6} sm={6} xs={12}>
        <Card shadow="sm" p="lg" radius="md" withBorder>
          <Card.Section>
            <Image
              src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>Norway Fjord Adventures</Text>
            <Badge color="pink" variant="light">
              On Sale
            </Badge>
          </Group>

          <Text size="sm" color="dimmed">
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button variant="light" color="blue" fullWidth mt="md" radius="md">
            Book classic tour now
          </Button>
        </Card>
      </Grid.Col>
      <Grid.Col lg={4} md={6} sm={6} xs={12}>
        <Card shadow="sm" p="lg" radius="md" withBorder>
          <Card.Section>
            <Image
              src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>Norway Fjord Adventures</Text>
            <Badge color="pink" variant="light">
              On Sale
            </Badge>
          </Group>

          <Text size="sm" color="dimmed">
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button variant="light" color="blue" fullWidth mt="md" radius="md">
            Book classic tour now
          </Button>
        </Card>
      </Grid.Col>
      <Grid.Col lg={4} md={6} sm={6} xs={12}>
        <Card shadow="sm" p="lg" radius="md" withBorder>
          <Card.Section>
            <Image
              src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>Norway Fjord Adventures</Text>
            <Badge color="pink" variant="light">
              On Sale
            </Badge>
          </Group>

          <Text size="sm" color="dimmed">
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button variant="light" color="blue" fullWidth mt="md" radius="md">
            Book classic tour now
          </Button>
        </Card>
      </Grid.Col>
      <Grid.Col lg={6}>
        <Card shadow="sm" p="lg" radius="md" withBorder>
          <Card.Section>
            <Image
              src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>Norway Fjord Adventures</Text>
            <Badge color="pink" variant="light">
              On Sale
            </Badge>
          </Group>

          <Text size="sm" color="dimmed">
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button variant="light" color="blue" fullWidth mt="md" radius="md">
            Book classic tour now
          </Button>
        </Card>
      </Grid.Col>
      <Grid.Col lg={6}>
        <Card shadow="sm" p="lg" radius="md" withBorder>
          <Card.Section>
            <Image
              src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>Norway Fjord Adventures</Text>
            <Badge color="pink" variant="light">
              On Sale
            </Badge>
          </Group>

          <Text size="sm" color="dimmed">
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button variant="light" color="blue" fullWidth mt="md" radius="md">
            Book classic tour now
          </Button>
        </Card>
      </Grid.Col>
      <Grid.Col lg={12}>
        <Card shadow="sm" p="lg" radius="md" withBorder>
          <Card.Section>
            <Image
              src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>Norway Fjord Adventures</Text>
            <Badge color="pink" variant="light">
              On Sale
            </Badge>
          </Group>

          <Text size="sm" color="dimmed">
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button variant="light" color="blue" fullWidth mt="md" radius="md">
            Book classic tour now
          </Button>
        </Card>
      </Grid.Col>
    </Grid>
  );
};

export default StatDashboard;
