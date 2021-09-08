// Create all pages
const createPages = require("./create/createPages")
const createPosts = require("./create/createPosts")

exports.createPagesStatefully = async (
  { graphql, actions, reporter },
  options
) => {
  const { createRedirect } = actions

  const redirects = [
    {
      fromPath: "/commercial-projects/*",
      toPath: "/commercial/",
      redirectInBrowser: true,
      isPermanent: true,
    },
    {
      fromPath: "/privacy/",
      toPath: "/privacy-policy/",
      redirectInBrowser: true,
      isPermanent: true,
    },
    {
      fromPath: "/frameless-shower-doors/",
      toPath: "/showers/",
      redirectInBrowser: true,
      isPermanent: true,
    },
    {
      fromPath: "/social-posts/",
      toPath: "/",
      redirectInBrowser: true,
      isPermanent: true,
    },
    {
      fromPath: "/service-areas/",
      toPath: "/",
      redirectInBrowser: true,
      isPermanent: true,
    },
    {
      fromPath: "/financing/",
      toPath: "/",
      redirectInBrowser: true,
      isPermanent: true,
    },
    {
      fromPath: "/financing/",
      toPath: "/",
      redirectInBrowser: true,
      isPermanent: true,
    },
    {
      fromPath: "/photos/",
      toPath: "/about/projects-and-gallery/",
      redirectInBrowser: true,
      isPermanent: true,
    },
    {
      fromPath: "/spec-houses/",
      toPath: "/about/projects-and-gallery/",
      redirectInBrowser: true,
      isPermanent: true,
    },
    {
      fromPath: "/brochures/",
      toPath: "/about/projects-and-gallery/",
      redirectInBrowser: true,
      isPermanent: true,
    },
    {
      fromPath: "/pgt-windows-and-doors/",
      toPath: "/windows/",
      redirectInBrowser: true,
      isPermanent: true,
    },
    {
      fromPath: "/contractors/",
      toPath: "/",
      redirectInBrowser: true,
      isPermanent: true,
    },
    {
      fromPath: "/reviews/",
      toPath: "/about/",
      redirectInBrowser: true,
      isPermanent: true,
    },
    {
      fromPath: "/location/",
      toPath: "/",
      redirectInBrowser: true,
      isPermanent: true,
    },
    {
      fromPath: "/pivot-doors/",
      toPath: "/doors/",
      redirectInBrowser: true,
      isPermanent: true,
    },
    {
      fromPath: "/glass-in-motion/",
      toPath: "/",
      redirectInBrowser: true,
      isPermanent: true,
    },
    {
      fromPath: "/press-releases/",
      toPath: "/",
      redirectInBrowser: true,
      isPermanent: true,
    },
    {
      fromPath: "/window-replacement-near-me/",
      toPath: "/windows/",
      redirectInBrowser: true,
      isPermanent: true,
    },
    {
      fromPath: "/interior-glass/",
      toPath: "/windows/",
      redirectInBrowser: true,
      isPermanent: true,
    },
    {
      fromPath: "/learn-about-impact-windows/",
      toPath: "/windows/",
      redirectInBrowser: true,
      isPermanent: true,
    },
    {
      fromPath: "/quote/",
      toPath: "/contact/",
      redirectInBrowser: true,
      isPermanent: true,
    },
    {
      fromPath: "/impact-resistant-windows/",
      toPath: "/windows/",
      redirectInBrowser: true,
      isPermanent: true,
    },
    {
      fromPath: "/prepare-home-before-hurricane/",
      toPath: "/",
      redirectInBrowser: true,
      isPermanent: true,
    },
    {
      fromPath: "/superior-impact-window-installation/",
      toPath: "/windows/",
      redirectInBrowser: true,
      isPermanent: true,
    },
    {
      fromPath: "/impact-resistant-doors/",
      toPath: "/doors/",
      redirectInBrowser: true,
      isPermanent: true,
    },
    {
      fromPath: "/site-map/",
      toPath: "/",
      redirectInBrowser: true,
      isPermanent: true,
    },
    {
      fromPath: "/french-doors/",
      toPath: "/doors/",
      redirectInBrowser: true,
      isPermanent: true,
    },
    {
      fromPath: "/folding-door-systems/",
      toPath: "/doors/",
      redirectInBrowser: true,
      isPermanent: true,
    },
    {
      fromPath: "/sliding-glass-doors/",
      toPath: "/doors/",
      redirectInBrowser: true,
      isPermanent: true,
    },
    {
      fromPath: "/custom-mirrors/",
      toPath: "/windows/",
      redirectInBrowser: true,
      isPermanent: true,
    },
    {
      fromPath: "/patio-doors/",
      toPath: "/doors/",
      redirectInBrowser: true,
      isPermanent: true,
    },
    {
      fromPath: "/railing-3d-model/",
      toPath: "/railings/",
      redirectInBrowser: true,
      isPermanent: true,
    },
    {
      fromPath: "/entry-doors/",
      toPath: "/doors/",
      redirectInBrowser: true,
      isPermanent: true,
    },
    {
      fromPath: "/communities/",
      toPath: "/",
      redirectInBrowser: true,
      isPermanent: true,
    },
    {
      fromPath: "/osha/",
      toPath: "/",
      redirectInBrowser: true,
      isPermanent: true,
    },
  ]

  redirects.map(redirect => {
    createRedirect(redirect)
  })

  await createPages({ actions, graphql, reporter }, options)
  // await createPosts({ actions, graphql, reporter }, options)
}
