// Create all pages
const createPages = require("./create/createPages")
const createPosts = require("./create/createPosts")

exports.createPagesStatefully = async (
  { graphql, actions, reporter },
  options
) => {
  const { createRedirect } = actions

  // const redirects = [
  //   { fromPath: "/ind-boat-configurator", toPath: "/boat-builder/37-open", redirectInBrowser: true, isPermanent: true },
  // ]
  //
  // redirects.map(redirect => {
  //   createRedirect(redirect)
  // })

  // await createPages({ actions, graphql, reporter }, options)
  // await createPosts({ actions, graphql, reporter }, options)
}
