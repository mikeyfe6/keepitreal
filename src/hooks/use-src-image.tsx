import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

interface SrcImagesQuery {
    kunstEnCultuur: {
        childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
        };
    };
    flexZijn: {
        childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
        };
    };
    omarmprijs: {
        childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
        };
    };
    backToSchool: {
        childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
        };
    };
}

export const useSrcImages = () => {
    const data = useStaticQuery<SrcImagesQuery>(graphql`
        query {
            kunstEnCultuur: file(
                relativePath: { eq: "events/kunst&cultuurmarkt.jpg" }
            ) {
                childImageSharp {
                    gatsbyImageData(width: 1000)
                }
            }
            flexZijn: file(
                relativePath: { eq: "events/flexzijn-wennerregales.jpg" }
            ) {
                childImageSharp {
                    gatsbyImageData(width: 1000)
                }
            }
            omarmprijs: file(
                relativePath: { eq: "actual/omarmprijs-2025.jpg" }
            ) {
                childImageSharp {
                    gatsbyImageData(width: 1000)
                }
            }
            backToSchool: file(
                relativePath: { eq: "events/b2school-flyer.png" }
            ) {
                childImageSharp {
                    gatsbyImageData(width: 1000)
                }
            }
        }
    `);

    return {
        kunstEnCultuur: data.kunstEnCultuur.childImageSharp.gatsbyImageData,
        flexZijn: data.flexZijn.childImageSharp.gatsbyImageData,
        omarmprijs: data.omarmprijs.childImageSharp.gatsbyImageData,
        backToSchool: data.backToSchool.childImageSharp.gatsbyImageData,
    };
};
