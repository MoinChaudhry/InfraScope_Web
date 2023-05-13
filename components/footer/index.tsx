import {Divider, Text} from '@nextui-org/react';
import React from 'react';
import {AcmeLogo} from '../navbar/logo';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Footer = () => {
   return (
      <Flex
         css={{
            py: '$20',
            px: '$6',
         }}
      >
         <Box as={'footer'} css={{width: '100%'}}>
            
            <Box
               css={{
                  'px': '$10',
                  '@md': {
                     px: '$56',
                  },
               }}
            >
               
               <Flex
                  //   justify={'between'}
                  align={'center'}
                  wrap={'wrap'}
                  css={{
                     'pt': '$8',
                     'gap': '$10',
                     'justifyContent': 'center',
                     '@md': {
                        justifyContent: 'space-between',
                     },
                  }}
               >
                  <Flex
                     css={{
                        gap: '$10',
                     }}
                     wrap={'wrap'}
                  >
      
                  </Flex>
                  <Flex
                     css={{
                        gap: '$6',
                     }}
                  >
                     
                  </Flex>
                  <Flex
                     css={{
                        gap: '$6',
                     }}
                  >
                                         <Flex
                  css={{gap: '$5', w: '950px'}}
                  direction={'column'}
                  align={'start'}
               >
                  <Text h5>Links</Text>
                  <Box as={'ul'} css={{gap: '$5', listStyle: 'none'}}>
{/*                      <Box as={'li'}>
                        <a href="https://www.linkedin.com/in/moinhc/">
                        <Text span css={{color: '$accents8'}}>
                           About Me
                        </Text>
                        </a>
                     </Box> */}
{/*                      <Box as={'li'}>
                        <a href="https://github.com/MoinChaudhry/InfraScope.ai">
                           <Text span css={{color: '$accents8'}}>
                              Github
                           </Text> 
                        </a>   
                     </Box> */}
{/*                      <Box as={'li'}>
                     <a href={`mailto:${"chaudhrymoinh@infrascopeai.dev"}`}>
                           <Text span css={{color: '$accents8'}}>
                           Email
                        </Text>
                        </a>
                     </Box> */}
                     
                     <Box as={'li'}>
                     <a href={`mailto:${"chaudhrymoinh@infrascopeai.dev"}`}>
                     <Text span css={{ color: '$accents8', whiteSpace: 'nowrap' }}>
                           © Copyright 2023 InfraScope.AI.
                        </Text>
                        </a>
                     </Box>
                                 </Box>
                     </Flex>
                  </Flex>
               </Flex>
            </Box>
         </Box>
      </Flex>
   );
};
