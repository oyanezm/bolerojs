({
  name: "init",
  out: "all.js",
  wrap: true,
  findNestedDependencies: true,
  preserveLicenseComments: false,
  paths: {
    "requireLib": 'require',
    "mustache": "node_modules/mustache/mustache.min",
    "jquery":   "node_modules/jquery/dist/jquery.min"
  },
  include: ["requireLib"],

  // DEBUG
  //optimize: "none",
})
