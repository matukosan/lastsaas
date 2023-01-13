import React from "react";
import { Button, Table, Grid } from "@nextui-org/react";
import MyNavbar from "../components/MyNavbar";
import MyContainer from "../components/MyContainer";

import { getServerAuthSession } from "../server/auth";
import type { GetServerSideProps } from "next";

const Dashboard = () => {
  return (
    <>
      <MyNavbar></MyNavbar>

      <MyContainer>
        <h1>Dashboard</h1>

        <Grid.Container gap={2}>
          <Grid>
            <Button color="primary" auto>
              Primary
            </Button>
          </Grid>
          <Grid>
            <Button color="secondary" auto>
              Secondary
            </Button>
          </Grid>
          <Grid>
            <Button color="success" auto>
              Success
            </Button>
          </Grid>
          <Grid>
            <Button color="warning" auto>
              Warning
            </Button>
          </Grid>
          <Grid>
            <Button color="error" auto>
              Error
            </Button>
          </Grid>
          <Grid>
            <Button color="gradient" auto>
              Gradient
            </Button>
          </Grid>
        </Grid.Container>

        <Table
          aria-label="Example table with static content"
          css={{
            height: "auto",
            minWidth: "100%"
          }}
        >
          <Table.Header>
            <Table.Column>NAME</Table.Column>
            <Table.Column>ROLE</Table.Column>
            <Table.Column>STATUS</Table.Column>
          </Table.Header>
          <Table.Body>
            <Table.Row key="1">
              <Table.Cell>Tony Reichert</Table.Cell>
              <Table.Cell>CEO</Table.Cell>
              <Table.Cell>Active</Table.Cell>
            </Table.Row>
            <Table.Row key="2">
              <Table.Cell>Zoey Lang</Table.Cell>
              <Table.Cell>Technical Lead</Table.Cell>
              <Table.Cell>Paused</Table.Cell>
            </Table.Row>
            <Table.Row key="3">
              <Table.Cell>Jane Fisher</Table.Cell>
              <Table.Cell>Senior Developer</Table.Cell>
              <Table.Cell>Active</Table.Cell>
            </Table.Row>
            <Table.Row key="4">
              <Table.Cell>William Howard</Table.Cell>
              <Table.Cell>Community Manager</Table.Cell>
              <Table.Cell>Vacation</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </MyContainer>
    </>
  );
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);
  console.log('session', session);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      }
    };
  }
  
  return {
    props: { session },
  };
};
