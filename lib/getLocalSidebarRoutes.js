import { LOCAL_ID } from "constants/env";
import { LOCALS } from "constants/local";

const getLocalSidebarRoutes = pageCategory => {
  if (LOCALS[LOCAL_ID].routes) {
    const routesObj = LOCALS[LOCAL_ID].routes;
    const allRoutes = Object.keys(routesObj);

    const pages = allRoutes.map(function(page, i) {
      const objects = Object.assign({}, i);
      objects.route = allRoutes[i];
      objects.title = routesObj[allRoutes[i]].title;
      objects.category = routesObj[allRoutes[i]].category;
      objects.isTopLevel = routesObj[allRoutes[i]].isTopLevel;
      objects.isActive = false;
      return objects;
    }).filter(page =>
      page.category === pageCategory
    );

    /*
      adds in an object for the About page. Needed because 'About' is
      not rendered with data from the routes object in Locals.js, which is where
      all the other pages' data ultimately comes from
    */
    if (pages[0].category === "About") {
      pages.unshift({
        route: "/about",
        title: "About",
        category: "About",
        isTopLevel: true,
        isActive: false}
      );
    }

    return pages;
  }
  else {
    return null;
  }
};

export default getLocalSidebarRoutes;
