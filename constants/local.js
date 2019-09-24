const LOCALS = {
  wisconsin: {
    theme: "wisconsin",
    provider: "%22Recollection%20Wisconsin%22",
    name: "Recollection Wisconsin",
    favicon: "favicon.png",
    logo: "logo.png",
    description: "Sharing our Stories. Exploring our Past.",
    locationFacet: "%22Wisconsin%22",
    subjectFacet: "%22Wisconsin%22",
    externalLink: "https://recollectionwisconsin.org",
    contactLink: "https://recollectionwisconsin.org/contact",
    hasAbout: false,
    hasTerms: false,
    hasContact: true
  },
  illinois: {
    theme: "illinois",
    provider: "%22Illinois%20Digital%20Heritage%20Hub%22",
    name: "Illinois Digital Heritage Hub",
    favicon: "favicon.png",
    logo: "logo.png",
    description: "A Gateway to Illinois State History",
    locationFacet: "%22Illinois%22",
    subjectFacet: "%22Illinois%22",
    hasAbout: true,
    hasTerms: true,
    hasContact: true,
    hasBrowseByPartner: true,
    routes: {
      "/for-contributors": {
        path: "for-contributors.md",
        title: "For Contributors",
        description: ""
      },
      "/for-educators": {
        path: "for-educators.md",
        title: "For Educators",
        description: ""
      },
      "/contact": {
        path: "contact.md",
        title: "Contact",
        description: ""
      }
    }
  },
  tennessee: {
    theme: "tennessee",
    provider: "%22Digital%20Library%20of%20Tennessee%22",
    name: "Digital Library of Tennessee",
    favicon: "favicon.png",
    logo: "logo.png",
    description: "Sharing Stories From the Volunteer State",
    locationFacet: "%22Tennessee%22",
    subjectFacet: "%22Tennessee%22",
    hasAbout: true,
    hasTerms: false,
    hasContact: false
  }
};

exports.LOCALS = LOCALS; // so it can be read/imported by next.config.js
