import React from 'react';
import Layout from '../common/layouts';
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';
import Seo from '../common/seo';
import Events from '../common/components/events';

const EventPage = ({ data }) => {
  return (
    <Layout>
      <Seo
        title="Parvani Vida Events"
        description="Parvani Vida events, bridal events"/>
    
      <div className="relative">
        <Img fluid={data.banner.childImageSharp.fluid} />
        < h1 
        className="page-title tc f2 display absolute dn dib-ns db pv3 ph5 ttu b bg-washed-red no-underline shadow-2" 
        style={{bottom: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>Events</h1>
    </div>
    
    <div
      className="collection-about h-auto bg-near-white mw9 w-100 flex flex-column items-center justify-center pv5 ph2 center mb0">
      <span className="fw1 display dark-gray db tc w-100 mw7 f3 f2-ns mb4 pb4 bb">Upcoming Events</span>
      <p className="serif mw7 tc f4 dn dib-l mb0 db">We are always celebrating our Brides by providing the best service and pulling off memorable in-house bridal events. From Trunk Shows to hosting dream Bridal Showers, Mother of the Bride Tea Parties to Valentine’s Day Gift Basket drawings.  Parvani Vida loves a great gathering. View our upcoming bridal events below.</p>

    </div>
    <Events items={data.events} />
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

    banner: file(relativePath: {eq: "img/events.jpg"}) {
      childImageSharp {
        fluid(maxHeight: 720, maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  
    events: allContentfulEvents {
      edges {
        node {
          id
          eventTitle
          category
          description {
            description
          }
          eventImagePromo {
            fluid(maxWidth: 700, quality: 100) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
    

  }
`;


export default EventPage;
