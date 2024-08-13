import "./App.css";
import { Container, Heading, TabIndicator } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

function App() {
  return (
    <Container>
      <Heading color="primary">Titulo de la aplicacion</Heading>

      <Tabs position="relative" variant="unstyled" bg="black">
        <TabList>
          <Tab color="white" _hover={{ border: "none" }} _focusWithin={{border: 'none'}}>
            One
          </Tab>
          <Tab color="white">Two</Tab>
          <Tab color="white">Three</Tab>
        </TabList>
        <TabIndicator mt="15px" height="3px" bg="white" />
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}

export default App;
