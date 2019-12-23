import React from 'react';
import Layout from '../common/layouts';
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';
import Seo from '../common/seo';


export default ({props, data}) => (
  <Layout>
    <Seo
      title="Parvani Vida About"
      description="About Parvani Vida" />
    <div className="relative">
      <Img fluid={data.banner.childImageSharp.fluid} />
      < h1 
        className="page-title tc f2 display absolute dn dib-ns db pv3 ph5 ttu b bg-washed-red no-underline shadow-2" 
        style={{bottom: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>About Us</h1>
    </div>
    <div className="mw9 center flex flex-wrap pv5-l w-100">
      <div className="mw7 w-100 pa2">
        <h1 className="display fw1 db lh-copy">{data.markdownRemark.frontmatter.title}</h1>

        <a href="https://instagram.com/parvanivida" target="_blank" className="dib bg-dark-gray b near-white hover-bg-mid-gray pv3 ph4 ttu tracked sans-serif no-underline mv2">Follow us on Instagram</a>
      </div>
      <div className="mw7 w-100 lh-copy serif pa2 flex flex-column justify-center f4" dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
    </div>
  </Layout>
)

export const dataQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: {name: {eq: "about__bio"}}) {
      html
      frontmatter {
        title
      }
    }
    banner: file(relativePath: {eq: "img/pvinterior.png"}) {
      childImageSharp {
        fluid(maxHeight: 900, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
