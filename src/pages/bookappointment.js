import React from 'react';
import Layout from '../common/layouts';
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';
import Seo from '../common/seo';
import Contact from '../homepage/components/contact';


export default ({props, data}) => (
  <Layout>
    <Seo
      title={`About ${data.site.siteMetadata.title}`}
      description={data.markdownRemark.frontmatter.title} />
    <div className="relative">
      <Img fluid={data.banner.childImageSharp.fluid} />
      < h1 
        className="page-title tc f2 display absolute dn dib-ns db pv3 ph5 ttu b bg-washed-red no-underline shadow-2" 
        style={{bottom: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>Contact Us</h1>
    </div>
    <div className="mw9 center flex flex-wrap w-100">
    </div>
    <Contact />
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
    banner: file(relativePath: {eq: "img/appointment.jpg"}) {
      childImageSharp {
        fluid(maxHeight: 720, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
