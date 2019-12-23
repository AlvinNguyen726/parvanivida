import React from 'react';
import Layout from '../common/layouts';
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';
import Seo from '../common/seo';
import Collection from '../common/components/collection';

const CollectionPage = ({ data }) => {
  return (
    <Layout>
      <Seo
        title="Parvani Vida Designers"
        description="Parvani Vida designers, bridal collection"/>
    
      <div className="relative">
        <Img fluid={data.banner.childImageSharp.fluid} />
        < h1 
        className="page-title tc f2 display absolute dn dib-ns db pv3 ph5 ttu b bg-washed-red no-underline shadow-2" 
        style={{bottom: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>Designers</h1>
    </div>
    
    <div
      className="collection-about h-auto bg-near-white mw9 w-100 flex flex-column items-center justify-center pv5 ph2 center">
      <span className="fw1 display dark-gray db tc w-100 mw7 f3 f2-ns mb4 pb4 bb">About Our Designers &amp; Collections</span>
      <p className="serif mw7 tc f4 dn dib-l mb2 db">Parvani Vida strives to provide the very best experience for every bride. The dream begins the moment you enter our Bridal Salon. Brides will be thrilled to find the most exquisite, glamorous, modern, and simply timeless designer wedding dresses. Browse our designer collections for wedding dresses, plus-size wedding dresses and mother of the bride gowns.</p>

    </div>
    <Collection items={data.collection} />
  </Layout>
  );
};


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

    banner: file(relativePath: {eq: "img/pvcollections.png"}) {
      childImageSharp {
        fluid(maxHeight: 720, maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  
    collection: allContentfulDesigners {
        edges {
          node {
            id
            designer
            category
            designerImage {
              fixed(width: 400, quality: 100) {
                ...GatsbyContentfulFixed_tracedSVG
              }
            }
          }
        }
      }
    

  }
`;


export default CollectionPage;
