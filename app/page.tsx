import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/home3/Banner";
import OurExperts from "@/components/sections/home1/Service";
import Testimonial from "@/components/sections/home1/Testimonial";
import Cta from "@/components/sections/home1/Cta";
import Blog from "@/components/sections/home1/Blog";
import Working from "@/components/sections/home1/Working";
import Faq from "@/components/sections/home1/Faq";
import Brand from "@/components/sections/home1/Brand";
import Feature from "@/components/sections/home2/Feature";
import Process from "@/components/sections/home1/Process";
import OurProduct from "@/components/sections/home1/Portfolio";
import Funfact from "@/components/sections/home2/Funfact";
import Pricing from "@/components/sections/home1/Pricing";
import Video from "@/components/sections/home1/Video";
import Newsletter from "@/components/sections/home1/Newsletter";
import ContentSlider from "@/components/sections/home2/ContentSlider";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "AMKA Company | Digital Solutions for Malaysian Businesses",
  description:
    "AMKA Digital Solutions Sdn Bhd builds practical digital systems, custom software, and automation workflows that help Malaysian businesses scale with confidence.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Layout headerStyle={3} footerStyle={1}>
        <Banner />
        <Brand />
        {/* <Feature /> */}
        <Working />
        <ContentSlider />
        {/* <Process /> */}
        <OurExperts />
        <OurProduct />
        <Faq />
        <Funfact />
        {/* <Cta /> */}
        {/* <Pricing /> */}
        {/* <Video /> */}
        {/* <Testimonial /> */}
        {/* <Blog /> */}
        <Newsletter />
      </Layout>
    </>
  );
}
