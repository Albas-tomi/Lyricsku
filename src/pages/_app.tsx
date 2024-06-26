
import Footer from "@/components/Footer";
import Layout from "@/components/Layouts/Layout";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Navbar/>
       <Component {...pageProps} />
       <Footer/>
    </Layout>
  )
}
