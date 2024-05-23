import React from "react";
import { Box, 
  Container,
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Signup from "../components/Authentication/Signup";
import Login from "../components/Authentication/Login";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";







const Homepage=()=>{
  const history =useHistory();

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if(user) history.push("/chats");

  },[history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        w="100%"
        bg="paleturquoise"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work sans" color={"black"} textAlign='center'>
          Morsify
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px" color='black'>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList mb={'1em'}>
          <Tab width={'50%'}>Login</Tab>
          <Tab width={'50%'}>Sign up</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Login/>
          </TabPanel>
          <TabPanel>
            <Signup/>
          </TabPanel>
        </TabPanels>
      </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
