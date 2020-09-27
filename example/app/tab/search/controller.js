define([
  "app/tab/model"
], function (
  Tab
) {

  var Controller = function (args) {

    var keyword, tabs;

    keyword = args.pop();
    keyword = keyword.replace("-", " ");

    tabs = Tab.search(keyword);

    var context = {
      tabs: tabs,
      related: tabs,
      keyword: keyword
    };

    __View.render(
      "tab.search",
      context
    );

  }

  return Controller;
})
