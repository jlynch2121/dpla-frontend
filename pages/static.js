import React from "react";
import MainLayout from "../components/MainLayout";
import { SITE_ENV } from "../constants/env";
import HomeUser from "../components/HomePageComponents/HomeUser";
import Helmet from "react-helmet";
import DPLAHead from "../components/DPLAHead";
import SmallScreenHeader from "../components/MainLayout/components/SmallScreenHeader";
import GlobalHeader from "../components/MainLayout/components/GlobalHeader";
import PageHeader from "../components/MainLayout/components/PageHeader";
import Footer from "../components/MainLayout/components/Footer";
import SkipToContent from "shared/SkipToContent";

const Static = () =>
  <div>
    <Helmet htmlAttributes={{ lang: "en" }} />
    <DPLAHead />
    <SkipToContent />
    <SmallScreenHeader />
    <GlobalHeader />
    <PageHeader>
      {"Hello, world!"}
    </PageHeader>
    <Footer />
  </div>;

export default Static;
