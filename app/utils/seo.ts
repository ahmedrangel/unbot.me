import { SITE } from "./info";

export const SEO = {
  og: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.host,
    image: `${SITE.host}/images/og-card.png`
  },
  twitter: {
    title: SITE.title,
    description: SITE.description
  }
};
