const LOCALS = {
  wisconsin: {
    theme: "wisconsin",
    filters: [
      "provider.@id:http%3A//dp.la/api/contributor/wisconsin"
    ],
    name: "Recollection Wisconsin",
    favicon: "favicon.png",
    logo: "logo.png",
    background: "home-hero-bg.jpg",
    description: "Sharing our Stories. Exploring our Past.",
    locationFacet: "%22Wisconsin%22",
    subjectFacet: "%22Wisconsin%22",
    externalLink: "https://recollectionwisconsin.org",
    contactLink: "https://recollectionwisconsin.org/contact",
    hasAbout: false,
    hasTerms: false,
    hasBrowseByPartner: true
  },
  illinois: {
    theme: "illinois",
    filters: [
      "provider.@id:http%3A//dp.la/api/contributor/il"
    ],
    name: "Illinois Digital Heritage Hub",
    favicon: "favicon.png",
    logo: "logo.png",
    background: "home-hero-bg.jpg",
    description: "A Gateway to Illinois State History",
    locationFacet: "%22Illinois%22",
    subjectFacet: "*Illinois*",
    externalLink: "http://finditillinois.org/idhh/",
    hasAbout: true,
    hasTerms: false,
    hasBrowseByPartner: true,
    routes: {
      "/about" : {
        parentDir: "/about",
        path: "governance.md",
        title: "Governance",
        description: "",
        isTopLevel: true,
        category: "About"
      },
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
    filters: [
      "provider.@id:http%3A//dp.la/api/contributor/tennessee"
    ],
    name: "Digital Library of Tennessee",
    background: "home-hero-bg.jpg",
    favicon: "favicon.png",
    logo: "logo.png",
    description: "Sharing Stories From the Volunteer State",
    locationFacet: "%22Tennessee%22",
    subjectFacet: "%22Tennessee%22",
    hasAbout: true,
    hasTerms: false,
    routes: {
      "/about": {
        parentDir: "/about",
        path: "about.md",
        title: "About",
        description: "",
        isTopLevel: true,
        category: "About"
      }
    }
  },
  florida: {
    theme: "florida",
    filters: [
      "provider.@id:http%3A//dp.la/api/contributor/florida"
    ],
    name: "Sunshine State Digital Network",
    background: "home-hero-bg.png",
    favicon: "favicon.png",
    logo: "logo.png",
    description: "Sharing Stories From the Sunshine State",
    externalLink: "https://sunshinestatedigitalnetwork.wordpress.com/",
    locationFacet: "%22Florida%22",
    subjectFacet: "%22Florida%22",
    hasAbout: false,
    hasTerms: false,
    hasBrowseByPartner: true,
  },
  bigsky: {
    theme: "bigsky",
    filters: [
      "provider.@id:http%3A//dp.la/api/contributor/mt"
    ],
    name: "Big Sky Country Digital Network",
    favicon: "favicon.png",
    logo: "logo.png",
    background: "home-hero-bg.png",
    description: "",
    locationFacet: "%22Montana%20OR%20North%20Dakota%22",
    subjectFacet: "%22Montana%20OR%20North%20Dakota%22",
    hasAbout: true,
    hasTerms: false,
    hasBrowseByPartner: true,
    hasSidebar: false,
    expandBody: true,
    routes: {
      "/about" : {
        parentDir: "/about",
        path: "about.md",
        title: "About BSCDN",
        description: "",
        isTopLevel: true,
        category: "About"
      },
      "/contact": {
        parentDir: "/contact",
        path: "contact.md",
        title: "Contact",
        isTopLevel: true,
        category: "Contact"
      },
      "/north-dakota": {
        path: "northdakota.md",
        title: "North Dakota",
        isTopLevel: true,
        description: "",
        category: "North Dakota"
      },
      "/montana": {
        path: "montana.md",
        title: "Montana",
        isTopLevel: true,
        description: "",
        category: "Montana"
      }
    }
  },
  aviation: {
    theme: "aviation",
    name: "Aviation Portal",
    favicon: "favicon.png",
    logo: "logo.png",
    background: "home-hero-bg.png",
    description: "",
    hasAbout: true,
    hasTerms: false,
    hasBrowseByPartner: false,
    hasSidebar: false,
    filters: [
      "tags:aviation"
    ],
    routes: {
      "/about" : {
        parentDir: "/about",
        path: "about.md",
        title: "About",
        description: "",
        isTopLevel: true,
        category: "About"
      }
    }
  },
  blackwomensuffrage: {
    theme: "blackwomensuffrage",
    name: "Black Women Suffrage Portal",
    favicon: "favicon.png",
    logo: "logo.png",
    background: "home-hero-bg.png",
    description: "",
    hasAbout: true,
    hasTerms: false,
    hasBrowseByPartner: false,
    hasSidebar: false,
    filters: [
      "tags:blackwomensuffrage"
    ],
    routes: {
      "/about" : {
        parentDir: "/about",
        path: "about.md",
        title: "About",
        description: "",
        isTopLevel: true,
        category: "About"
      }
    }
  }
};

exports.LOCALS = LOCALS; // so it can be read/imported by next.config.js
