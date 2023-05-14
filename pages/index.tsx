import type { NextPage } from 'next';
import Head from 'next/head';
import { Nav } from '../components/navbar/navbar';
import { Layout } from '../components/navbar/layout';
import { Hero } from '../components/hero';
import { Trusted } from '../components/trusted';
import { Box } from '../components/styles/box';
import { Features1 } from '../components/features1';
import { Features2 } from '../components/features2';
import { Features3 } from '../components/features3';
import { Statistics } from '../components/statistics';
import { Faq } from '../components/faq';
import { Footer } from '../components/footer';

import { useEffect } from 'react';

const Home: NextPage = () => {
  useEffect(() => {
    document.title = 'InfraScope AI';
  }, []);  return (
    <Layout>
      <Head>
        <title>Your Website Title</title>
      </Head>
      <Nav />
      <Box as="main">
        <Hero />
        <Features1 />
        <Features2 />
        <Features3 />
        <Footer />
      </Box>
    </Layout>
  );
};

export default Home;
