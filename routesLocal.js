const proxy = require("express-http-proxy");
const serverFunctions = require("./lib/serverFunctions");
const locals = require("./constants/local");

const localId = process.env.LOCAL_ID;
const local = locals["LOCALS"][localId];

const dynamicRoutes = local.routes ? local.routes : null;
const browseRoutes = local.browseRoutes ? local.browseRoutes : null;

module.exports.dynamic = (app, server) => {
  if (local.routes) {
    server.get(Object.keys(dynamicRoutes), (req, res) => {
      const actualPage = "/local/markdown";
      serverFunctions.renderAndCache(app, req, res, actualPage, req.query);
    });
  }
};

module.exports.static = (app, server) => {
  server.get("/", (req, res) => {
    const actualPage = "/local";
    serverFunctions.renderAndCache(app, req, res, actualPage, req.query);
  });

  server.get(["/about"], (req, res) => {
    const actualPage = "/local/about";
    serverFunctions.renderAndCache(app, req, res, actualPage, req.query);
  });

  server.get(["/terms"], (req, res) => {
    const actualPage = "/local/terms";
    serverFunctions.renderAndCache(app, req, res, actualPage, req.query);
  });

  // lists routes

  server.get("/lists/:list", (req, res) => {
    const actualPage = "/lists/list";
    const params = {
      list: req.params.list
    };
    serverFunctions.renderAndCache(
      app,
      req,
      res,
      actualPage,
      req.query,
      params
    );
  });

  server.get("/lists", (req, res) => {
    const actualPage = "/lists";
    serverFunctions.renderAndCache(app, req, res, actualPage, req.query);
  });

  // search routes

  server.get(["/search", "/search"], (req, res) => {
    // need this because the search API doesn't recognize "all" but we need
    // to pass some value in through the select on the homepage
    if (req.query["type"] && req.query["type"] === "all") {
      delete req.query["type"];
    }
    const actualPage = "/search";

    serverFunctions.renderAndCache(app, req, res, actualPage, req.query);
  });

  if (local.browseRoutes) {
    const routes = Object.keys(browseRoutes);
    routes.map(route => {
      server.get(route, (req, res) => {
        app.render(req, res, "/local" + route, req.query);
      });
    });
  }

  /*if (local.browseRoutes) {
    const routes = Object.keys(browseRoutes);
    console.log(routes);
    console.log(routes[0]);
    server.get(routes[0], (req, res) => {
      app.render(req, res, "/local" + routes[0], req.query);
    });
  }*/

  // item routes
  server.get("/item/:itemId", (req, res) => {
    const actualPage = "/item";
    const isQA = "qa" in req.cookies;
    const params = {
      itemId: req.params.itemId,
      isQA: isQA
    };
    serverFunctions.renderAndCache(
      app,
      req,
      res,
      actualPage,
      req.query,
      params
    );
  });
};
