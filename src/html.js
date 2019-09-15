import * as React from "react"
import { siteMetadata } from "../gatsby-config"

import favicon from "./images/favicon.png"

const Html = ({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body,
  postBodyComponents
}) => (
  <html lang="en" {...htmlAttributes}>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content={siteMetadata.description} />
      <link rel="shortcut icon" type="image/png" href={favicon} />
      <title>{siteMetadata.title}</title>
      {headComponents}
    </head>
    <body {...bodyAttributes}>
      {preBodyComponents}
      <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
      {postBodyComponents}
    </body>
  </html>
)

export default Html
