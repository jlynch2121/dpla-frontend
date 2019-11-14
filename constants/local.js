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
    subjectFacet: "*Illinois*",
    externalLink: "https://ildplacollections.wordpress.com/",
    hasAbout: true,
    hasTerms: false,
    hasContact: false,
    hasBrowse: true,
    browseRoutes: {
      "/browse": {
        parentDir: "/browse",
        title: "Browse Collections",
        description: "",
        category: "Browse",
        icon: "",
        isTopLevel: true
      },
      "/browse/contributors": {
        parentDir: "/browse",
        title: "Contributors",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        category: "Browse",
        icon: "illinois-contributor-browse.jpg",
        isTopLevel: false
      },
      "/browse/places": {
        parentDir: "/browse",
        title: "Places",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        category: "Browse",
        icon: "illinois-road-map.jpg",
        isTopLevel: false
      },
      "/browse/format": {
        parentDir: "/browse",
        title: "Formats",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        category: "Browse",
        icon: "browse-formats.png",
        isTopLevel: false
      }
    },
    hasMap: true,
    googleMapSpecs: {
      title: "Map of Illinois Digital Heritage Hub Contributors",
      src: "https://www.google.com/maps/d/embed?mid=1LaS0G_rC1Ak87jq73_MAB5dmBIPzMuYS",
      width: "1000",
      height: "750"
    },
    routes: {
      "/about/governance": {
        parentDir: "/about",
        path: "governance.md",
        title: "Governance",
        description: "",
        isTopLevel: false,
        category: "About"
      },
      "/about/usage-terms": {
        parentDir: "/about",
        path: "usage-terms.md",
        title: "Copyright and Usage",
        description: "",
        isTopLevel: false,
        category: "About"
      },
      "/about/privacy": {
        parentDir: "/about",
        path: "privacy.md",
        title: "Privacy",
        description: "",
        isTopLevel: false,
        category: "About"
      },
      "/about/image-credits": {
        parentDir: "/about",
        path: "image-credits.md",
        title: "Image Credits",
        description: "",
        isTopLevel: false,
        category: "About"
      },
      "/about/contact": {
        parentDir: "/about",
        path: "contact.md",
        title: "Contact",
        description: "",
        isTopLevel: false,
        category: "About"
      },
      "/for-contributors": {
        parentDir: "/for-contributors",
        path: "for-contributors.md",
        title: "For Contributors",
        description: "",
        isTopLevel: true,
        category: "For Contributors"
      },
      "/for-contributors/harvest-workflow": {
        parentDir: "/for-contributors",
        path: "harvest-workflow.md",
        title: "Harvest Workflow",
        description: "",
        isTopLevel: false,
        category: "For Contributors"
      },
      "/for-contributors/readiness": {
        parentDir: "/for-contributors",
        path: "readiness.md",
        title: "Readiness Checklist",
        description: "",
        isTopLevel: false,
        category: "For Contributors"
      },
      "/for-contributors/metadata": {
        parentDir: "/for-contributors",
        path: "metadata.md",
        title: "Metadata Resources",
        description: "",
        isTopLevel: false,
        category: "For Contributors"
      },
      "/for-contributors/copyright": {
        parentDir: "/for-contributors",
        path: "copyright.md",
        title: "Copyright Resources",
        description: "",
        isTopLevel: false,
        category: "For Contributors"
      },
      "/for-contributors/analytics": {
        parentDir: "/for-contributors",
        path: "analytics.md",
        title: "Analytics",
        description: "",
        isTopLevel: false,
        category: "For Contributors"
      },
      "/for-educators": {
        parentDir: "/for-educators",
        path: "for-educators.md",
        title: "For Educators",
        description: "",
        isTopLevel: true,
        category: "For Educators"
      },
      "/for-educators/search-tips": {
        parentDir: "/for-educators",
        path: "search-tips.md",
        title: "Search Tips",
        description: "",
        isTopLevel: false,
        category: "For Educators"
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
