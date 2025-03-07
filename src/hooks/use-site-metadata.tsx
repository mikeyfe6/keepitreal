import { graphql, useStaticQuery } from "gatsby";

interface SiteMetadata {
    title: string;
    slogan: string;
    description: string;

    siteUrl: string;
    image: string;

    twitterUsername: string;
    facebookUrl: string;
    instagramUrl: string;
    tiktokUrl: string;
    youtubeUrl: string;
    spotifyUrl: string;
    linkedinUrl: string;

    telephone: string;
    phoneRaw: string;
    mobile: string;

    email: string;
    address: string;
    postalCode: string;
    city: string;
    country: string;

    companyName: string;
    kvk: string;
    btw: string;
    bank: string;

    bgWebColor: string;
    bgThemeColor: string;
}

export const useSiteMetadata = (): SiteMetadata => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    slogan

                    siteUrl
                    image

                    twitterUsername
                    facebookUrl
                    instagramUrl
                    tiktokUrl
                    youtubeUrl
                    spotifyUrl
                    linkedinUrl

                    telephone
                    phoneRaw
                    mobile

                    email
                    address
                    postalCode
                    city
                    country

                    companyName
                    kvk
                    btw
                    bank

                    bgWebColor
                    bgThemeColor
                }
            }
        }
    `);

    return data.site.siteMetadata as SiteMetadata;
};
