import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Feature from './../components/Feature';

export default function Home() {
  return (
    <>
      <Layout title="NextJS TypeScript Landing Page">
        <Header />
        <Hero />
        <Feature />
        <Footer />
      </Layout>
    </>
  )
}
