import {Button, Dropdown, Link, Navbar, Switch, Text} from '@nextui-org/react';
import React from 'react';
import {ModalLogin} from '../modal';
import {icons} from './icons';
import {AcmeLogo} from './logo';
import {useTheme as useNextTheme} from 'next-themes';
import {useTheme} from '@nextui-org/react';
import {GithubIcon} from '../icons/GithubIcon';

export const Nav = () => {
   const {setTheme} = useNextTheme();
   const {isDark, type} = useTheme();
   const collapseItems = [
      'Features',
      'Customers',
      'Pricing',
      'Company',
      'Legal',
   ];
   return (
      <Navbar
         isBordered
         css={{
            'overflow': 'hidden',
            '& .nextui-navbar-container': {
               background: '$background',
               borderBottom: 'none',
            },
         }}
      >
         <Navbar.Brand>
            <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
            <Text h3 color="inherit" hideIn="xs">
               InfraScope.AI
            </Text>
            <Navbar.Content
               hideIn="sm"
               css={{
                  pl: '6rem',
               }}
            >
{/*                <Dropdown isBordered>
                  <Navbar.Item>
                     <Dropdown.Button
                        auto
                        light
                        css={{
                           px: 0,
                           dflex: 'center',
                           svg: {pe: 'none'},
                        }}
                        iconRight={icons.chevron}
                        ripple={false}
                     >
                        Features
                     </Dropdown.Button>
                  </Navbar.Item>
                  <Dropdown.Menu
                     aria-label="ACME features"
                     css={{
                        '$$dropdownMenuWidth': '340px',
                        '$$dropdownItemHeight': '70px',
                        '& .nextui-dropdown-item': {
                           'py': '$4',
                           'svg': {
                              color: '$secondary',
                              mr: '$4',
                           },
                           '& .nextui-dropdown-item-content': {
                              w: '100%',
                              fontWeight: '$semibold',
                           },
                        },
                     }}
                  >
                     <Dropdown.Item
                        key="visualizing"
                        showFullDescription
                        description="Visualize infrastructure relationships for enhanced understanding and informed decision-making."
                        icon={icons.scale}
                     >
                        Visualize
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="Infrastructure_metrics"
                        showFullDescription
                        description="Proactively optimize infrastructure resources by identifying performance bottlenecks and taking action"
                        icon={icons.activity}
                     >
                        
                        Infrastructure Automation
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="Documentation"
                        showFullDescription
                        description="Track changes and revisions to your infrastructure documentation, ensuring a comprehensive audit trail."
                        icon={icons.server}
                     >
                        Documentation
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="Compliance_Management"
                        showFullDescription
                        description="Efficiently manage and ensure compliance with industry standards and regulations"
                        icon={icons.user}
                     >
                        Compliance Management:
                     </Dropdown.Item>
                  </Dropdown.Menu>
               </Dropdown>
               <Navbar.Link isActive href="#">
                  About
               </Navbar.Link>
               <Navbar.Link href="#">Who Are We?</Navbar.Link>
               <Navbar.Link href="#">FAQ</Navbar.Link> */}
            </Navbar.Content>
         </Navbar.Brand>

         <Navbar.Collapse>

            <Navbar.CollapseItem>
               <Link
                  color="inherit"
                  css={{
                     minWidth: '100%',
                  }}
                  target="_blank"
                  href="https://github.com/MoinChaudhry/InfraScope.ai"
               >
                  <GithubIcon />
               </Link>
            </Navbar.CollapseItem>
         </Navbar.Collapse>
         <Navbar.Content>
            <Navbar.Item hideIn={'xs'}>
               <Link
                  color="inherit"
                  css={{
                     minWidth: '100%',
                  }}
                  target="_blank"
                  href="https://github.com/MoinChaudhry/InfraScope.ai"
               >
                  <GithubIcon />
               </Link>
            </Navbar.Item>
         </Navbar.Content>
      </Navbar>
   );
};
