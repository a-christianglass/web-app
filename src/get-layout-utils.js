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
  }
}
