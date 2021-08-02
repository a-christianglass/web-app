import React from "react"
import MiscContent from "./layouts/MiscContent"
import AppointmentBanner from "./layouts/AppointmentBanner"

export const getPageLayout = layout => {
  const layoutName = layout?.fieldGroupName?.split("_").pop().trim()
  if (!layoutName) return null
  switch (layoutName) {
    case "MiscContent":
      return <MiscContent {...layout} />
  }
}
