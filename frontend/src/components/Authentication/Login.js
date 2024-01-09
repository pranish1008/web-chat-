
import React, { useState } from 'react'
import { FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'

const Login = () => {
  const [show, setShow] = useState(false);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleClick=()=> setShow(!show);
  const submitHandler =() =>{};

  return (
    <VStack spacing={'5px'} color={'black'}>
        
        <FormControl id='email ' isRequired>
            <FormLabel>Email</FormLabel>
            <Input 
            placeholder='Enter your Email'
            onChange={(e) => setEmail(e.target.value)}
            />
        </FormControl>
        <FormControl id='password ' isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
            <Input 
             type={show ? "text" : "password"}
            placeholder='Enter your Password'
            onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
            <button h="1.75rem" size="sm" onClick={handleClick} >
            {show ? "Hide" : "Show"}
            </button>
          </InputRightElement>
            </InputGroup>
        </FormControl>
        <button
        colorscheme='red'
        width="100%"
        onClick={submitHandler}
        style={{ marginTop: 15, backgroundColor: 'red', color: 'white',borderRadius:'20px',width:'200px',height:'50px',fontSize:'20px'}}
        
        >
            Login
        </button>
       
        
    </VStack>
  )
}

export default Login

