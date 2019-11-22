const getLocalBreadcrumbs = pageData => {
  var breadcrumbs = [];
  if (!pageData.isTopLevel){
    breadcrumbs.push({
      title: pageData.category,
      url: "/local" + pageData.parentDir,
      as: pageData.parentDir
    },
    {
      title: pageData.title
    });
  };
  return breadcrumbs;
}

export default getLocalBreadcrumbs;
