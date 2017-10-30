const getCurrentUrl = req =>
  req ? `${req.protocol}://${req.get("host")}` : `//${window.location.host}`;

export default getCurrentUrl;
