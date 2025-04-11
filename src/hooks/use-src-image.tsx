import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

interface SrcImagesQuery {
    kunstEnCultuur: {
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
        }
    `);

    return {
        kunstEnCultuur: data.kunstEnCultuur.childImageSharp.gatsbyImageData,
    };
};
