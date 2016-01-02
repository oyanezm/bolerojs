({
  name: "init",
  out: "all.js",
  wrap: true,
  findNestedDependencies: true,
  preserveLicenseComments: false,
  paths: {
    "requireLib": 'require',
    "mustache": "system/lib/mustache",
    "jquery": "system/lib/jquery-1.11.3.min"
  },
  include: ["requireLib"],

  // DEBUG
  optimize: "none",
})
