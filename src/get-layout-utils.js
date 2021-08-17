import React from "react"
import MiscContent from "./layouts/MiscContent"
import HomeHero from "./layouts/home-hero"
import FormBanner from "./layouts/FormBanner"
import ImageTextRow from "./layouts/ImageTextRow"
import BlueFeaturesSection from "./layouts/BlueFeaturesSection"
import CallUsBanner from "./layouts/CallUsBanner"
import ServicesHome from "./layouts/ServicesHome"
import LogosGrid from "./layouts/LogosGrid"
import ProjectSlider from "./layouts/ProjectSlider"
import AppointmentBanner from "./layouts/AppointmentBanner"
import GallerySlider from "./layouts/GallerySlider"
import TestimonialSlider from "./layouts/TestimonialSlider"
import CommonHeroBanner from "./layouts/CommonHeroBanner"
import VideoRow from "./layouts/VideoRow"
import FeaturesRow from "./layouts/features-row"
import ChoicesSection from "./layouts/ChoicesSection"
import TitleTextRow from "./layouts/TitleTextRow"
import IndustriesServices from "./layouts/IndustriesServices"
import ProjectsGrid from "./layouts/ProjectsGrid"
import FormSection from "./layouts/form-section"
import ReasonsSection from "./layouts/ReasonsSection"
import WorksSection from "./layouts/WorksSection"
import FaqTabs from "./layouts/FaqTabs"
import HomeTabs from "./layouts/HomeTabs"
import MiscHero from "./layouts/MiscHero"

export const getPageLayout = layout => {
  const layoutName = layout?.fieldGroupName?.split("_").pop().trim()
  if (!layoutName) return null
  switch (layoutName) {
    case "MiscContent":
      return <MiscContent {...layout} />
    case "HomeHero":
      return <HomeHero {...layout} />
    case "FormBanner":
      return <FormBanner {...layout} />
    case "ImageTextRow":
      return <ImageTextRow {...layout} />
    case "BlueFeaturesSection":
      return <BlueFeaturesSection {...layout} />
    case "CallUsBanner":
      return <CallUsBanner {...layout} />
    case "ServicesHome":
      return <ServicesHome {...layout} />
    case "LogosGrid":
      return <LogosGrid {...layout} />
    case "ProjectSlider":
      return <ProjectSlider {...layout} />
    case "AppointmentBanner":
      return <AppointmentBanner {...layout} />
    case "GallerySlider":
      return <GallerySlider {...layout} />
    case "TestimonialSlider":
      return <TestimonialSlider {...layout} />
    case "CommonHeroBanner":
      return <CommonHeroBanner {...layout} />
    case "VideoRow":
      return <VideoRow {...layout} />
    case "FeaturesRow":
      return <FeaturesRow {...layout} />
    case "ChoicesSection":
      return <ChoicesSection {...layout} />
    case "TitleTextRow":
      return <TitleTextRow {...layout} />
    case "IndustriesServices":
      return <IndustriesServices {...layout} />
    case "ProjectsGrid":
      return <ProjectsGrid {...layout} />
    case "FormSection":
      return <FormSection {...layout} />
    case "ReasonsSection":
      return <ReasonsSection {...layout} />
    case "WorksSection":
      return <WorksSection {...layout} />
    case "FaqTabs":
      return <FaqTabs {...layout} />
    case "HomeTabs":
      return <HomeTabs {...layout} />
    case "MiscHero":
      return <MiscHero {...layout} />
  }
}
