import {Divider, Grid, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {FeatureIcon} from '../icons/FeatureIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Features1 = () => {
   return (
      <>
         <Flex
            direction={'column'}
            css={{
               'gap': '1rem',
               'pt': '$20',
               'justifyContent': 'center',
               'alignItems': 'center',
               'px': '$6',
               '@sm': {
                  justifyContent: 'space-around',
                  px: '$32',
                  flexDirection: 'row',
               },
               '@md': {
                  px: '$64',
               },
            }}
         >
            <Flex direction="column">
               <Text h3>Visualize</Text>
               <Text
                  span
                  css={{
                     maxWidth: '400px',
                     color: '$accents8',
                  }}
               >
                  Unleash the power of visualizations to gain a comprehensive and intuitive understanding of your infrastructure,
               </Text>

               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  <BoxIcon />
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                     Intuitive Visualizations:
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        Immerse yourself in intuitive visual representations of your infrastructure, providing a clear and comprehensive overview of its components, connections, and dependencies. Easily navigate through interactive diagrams and gain a deeper architectural understanding of your infrastructure.,
                     </Text>
                  </Flex>
               </Flex>
               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  <BoxIcon />
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                     Interactive Relationship Mapping:
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        Uncover the intricate relationships between different components of your infrastructure through interactive mapping. Visualize how various elements interact and depend on each other, helping you identify potential bottlenecks, points of failure, or areas for optimization.,
                     </Text>
                  </Flex>
               </Flex>
               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  <BoxIcon />
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                     Real-time Performance Visualization:
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        Observe real-time performance metrics and visualize them in dynamic charts and graphs. Monitor vital parameters such as CPU usage, memory consumption, network traffic, and storage utilization. Track performance trends, identify anomalies, and make informed decisions to optimize resource allocation and ensure optimal performance.,
                     </Text>
                  </Flex>
               </Flex>
            </Flex>
            <Flex align={'center'}>
               <FeatureIcon />
            </Flex>
         </Flex>
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
