import {Button, Divider, Input, Text} from '@nextui-org/react';
import React from 'react';
import {CheckIcon} from '../icons/CheckIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Hero = () => {
   return (
      <>
         <Flex
            css={{
               'gap': '$3',
               'px': '$6',
               'flexDirection': 'column',
               'alignContent': 'center',
               'justifyContent': 'center',
               'alignItems': 'center',
               'width': '100%',
               '@sm': {
                  flexDirection: 'row',
                  mt: '$20',
               },
            }}
            justify={'center'}
         >
            <Box
               css={{
                  pt: '$13',

                  display: 'flex',
                  flexDirection: 'column',
                  gap: '$5',
               }}
            >
               <Box
                  css={{
                     maxWidth: '600px',
                  }}
               >
                  <Text
                     h2
                     css={{
                        display: 'inline',
                     }}
                  >
                    Leading the Way to AI-Driven Infrastructure Excellence with{' '}
                  </Text>
                  <Text
                     h2
                     css={{
                        display: 'inline',
                     }}
                  >
                     {' '}
                  </Text>
                  <Text
                     h2
                     css={{
                        display: 'inline',
                     }}
                     color="primary"
                  >
                     InfraScope.AI
                  </Text>
               </Box>

               <Text
                  css={{
                     color: '$accents8',
                     maxWidth: '700px',
                  }}
                  size={'$lg'}
                  span
               >
                  InfraScope.AI: Simplifying infrastructure management with visual and interactive architecture, monitoring, optimization, and informed decision-making.
               </Text>

               <Flex
                  css={{
                     gap: '$8',
                     pt: '$4',
                  }}
                  wrap={'wrap'}
               >
  
               </Flex>
               <Flex
                  wrap={'wrap'}
                  css={{
                     'gap': '$8',
                     'py': '$7',
                     '@sm': {
                        py: '$4',
                     },
                  }}
               >

                  
               </Flex>
            </Box>
            <Box
               css={{
                  '& img': {
                     width: '975px',
                     objectFit: 'contain',
                  },
               }}
            >
               <img src="infrascopeai-high-resolution-logo-white-on-black-background.png" />
            </Box>
         </Flex>
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$10'}}
         />
      </>
   );
};
