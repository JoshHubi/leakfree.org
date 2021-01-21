(function() {
  const addRawTemplate = requirejs('discourse-common/lib/raw-templates').addRawTemplate;
  const template = requirejs('discourse-common/lib/raw-handlebars').template({"1":function(container,depth0,helpers,partials,data) {
    return "   <td class=\"bulk-select\">\n     <input type=\"checkbox\" class=\"bulk-select\">\n   </td>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression((lookupProperty(helpers,"topic-featured-link")||(depth0 && lookupProperty(depth0,"topic-featured-link"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"topic",{"name":"topic-featured-link","hash":{},"hashTypes":{},"hashContexts":{},"types":["PathExpression"],"contexts":[depth0],"data":data,"loc":{"start":{"line":17,"column":8},"end":{"line":17,"column":38}}}));
},"5":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression((lookupProperty(helpers,"raw")||(depth0 && lookupProperty(depth0,"raw"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"topic-post-badges",{"name":"raw","hash":{"newDotText":"newDotText","url":"topic.lastUnreadUrl","unseen":"topic.unseen","newPosts":"topic.displayNewPosts","unread":"topic.unread"},"hashTypes":{"newDotText":"PathExpression","url":"PathExpression","unseen":"PathExpression","newPosts":"PathExpression","unread":"PathExpression"},"hashContexts":{"newDotText":depth0,"url":depth0,"unseen":depth0,"newPosts":depth0,"unread":depth0},"types":["StringLiteral"],"contexts":[depth0],"data":data,"loc":{"start":{"line":21,"column":8},"end":{"line":21,"column":153}}}));
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),"topic.isPinnedUncategorized",{"name":"unless","hash":{},"hashTypes":{},"hashContexts":{},"fn":container.program(8, data, 0),"inverse":container.noop,"types":["PathExpression"],"contexts":[depth0],"data":data,"loc":{"start":{"line":27,"column":8},"end":{"line":29,"column":19}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression((lookupProperty(helpers,"category-link")||(depth0 && lookupProperty(depth0,"category-link"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"topic.category",{"name":"category-link","hash":{},"hashTypes":{},"hashContexts":{},"types":["PathExpression"],"contexts":[depth0],"data":data,"loc":{"start":{"line":28,"column":8},"end":{"line":28,"column":42}}}));
},"10":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      "
    + container.escapeExpression((lookupProperty(helpers,"raw")||(depth0 && lookupProperty(depth0,"raw"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"list.topic-excerpt",{"name":"raw","hash":{"topic":"topic"},"hashTypes":{"topic":"PathExpression"},"hashContexts":{"topic":depth0},"types":["StringLiteral"],"contexts":[depth0],"data":data,"loc":{"start":{"line":35,"column":6},"end":{"line":35,"column":46}}}))
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),"bulkSelectEnabled",{"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":container.program(1, data, 0),"inverse":container.noop,"types":["PathExpression"],"contexts":[depth0],"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":8,"column":9}}})) != null ? stack1 : "")
    + "\n    <td class='main-link clearfix' colspan=\"1\">"
    + container.escapeExpression((lookupProperty(helpers,"raw")||(depth0 && lookupProperty(depth0,"raw"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"topic-status",{"name":"raw","hash":{"topic":"topic"},"hashTypes":{"topic":"PathExpression"},"hashContexts":{"topic":depth0},"types":["StringLiteral"],"contexts":[depth0],"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":11,"column":41}}}))
    + "\n\n      <span class='link-top-line'>"
    + container.escapeExpression((lookupProperty(helpers,"raw-plugin-outlet")||(depth0 && lookupProperty(depth0,"raw-plugin-outlet"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"raw-plugin-outlet","hash":{"name":"topic-list-before-status"},"hashTypes":{"name":"StringLiteral"},"hashContexts":{"name":depth0},"types":[],"contexts":[],"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":14,"column":62}}}))
    + container.escapeExpression((lookupProperty(helpers,"topic-link")||(depth0 && lookupProperty(depth0,"topic-link"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"topic",{"name":"topic-link","hash":{"class":"raw-link raw-topic-link"},"hashTypes":{"class":"StringLiteral"},"hashContexts":{"class":depth0},"types":["PathExpression"],"contexts":[depth0],"data":data,"loc":{"start":{"line":15,"column":8},"end":{"line":15,"column":61}}}))
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),"topic.featured_link",{"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":container.program(3, data, 0),"inverse":container.noop,"types":["PathExpression"],"contexts":[depth0],"data":data,"loc":{"start":{"line":16,"column":8},"end":{"line":18,"column":16}}})) != null ? stack1 : "")
    + container.escapeExpression((lookupProperty(helpers,"raw-plugin-outlet")||(depth0 && lookupProperty(depth0,"raw-plugin-outlet"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"raw-plugin-outlet","hash":{"name":"topic-list-after-title"},"hashTypes":{"name":"StringLiteral"},"hashContexts":{"name":depth0},"types":[],"contexts":[],"data":data,"loc":{"start":{"line":19,"column":8},"end":{"line":19,"column":60}}}))
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),"showTopicPostBadges",{"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":container.program(5, data, 0),"inverse":container.noop,"types":["PathExpression"],"contexts":[depth0],"data":data,"loc":{"start":{"line":20,"column":8},"end":{"line":22,"column":16}}})) != null ? stack1 : "")
    + "\n      </span>\n      <div class=\"link-bottom-line\">"
    + ((stack1 = lookupProperty(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),"hideCategory",{"name":"unless","hash":{},"hashTypes":{},"hashContexts":{},"fn":container.program(7, data, 0),"inverse":container.noop,"types":["PathExpression"],"contexts":[depth0],"data":data,"loc":{"start":{"line":26,"column":8},"end":{"line":30,"column":19}}})) != null ? stack1 : "")
    + container.escapeExpression((lookupProperty(helpers,"discourse-tags")||(depth0 && lookupProperty(depth0,"discourse-tags"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"topic",{"name":"discourse-tags","hash":{"tagsForUser":"tagsForUser","mode":"list"},"hashTypes":{"tagsForUser":"PathExpression","mode":"StringLiteral"},"hashContexts":{"tagsForUser":depth0,"mode":depth0},"types":["PathExpression"],"contexts":[depth0],"data":data,"loc":{"start":{"line":31,"column":8},"end":{"line":31,"column":70}}}))
    + container.escapeExpression((lookupProperty(helpers,"raw")||(depth0 && lookupProperty(depth0,"raw"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"list.action-list",{"name":"raw","hash":{"icon":"heart","className":"likes","postNumbers":"topic.liked_post_numbers","topic":"topic"},"hashTypes":{"icon":"StringLiteral","className":"StringLiteral","postNumbers":"PathExpression","topic":"PathExpression"},"hashContexts":{"icon":depth0,"className":depth0,"postNumbers":depth0,"topic":depth0},"types":["StringLiteral"],"contexts":[depth0],"data":data,"loc":{"start":{"line":32,"column":8},"end":{"line":32,"column":116}}}))
    + "</div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),"expandPinned",{"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":container.program(10, data, 0),"inverse":container.noop,"types":["PathExpression"],"contexts":[depth0],"data":data,"loc":{"start":{"line":34,"column":6},"end":{"line":36,"column":13}}})) != null ? stack1 : "")
    + "    </td>\n\n    "
    + container.escapeExpression((lookupProperty(helpers,"raw")||(depth0 && lookupProperty(depth0,"raw"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"list.posts-count-column",{"name":"raw","hash":{"topic":"topic"},"hashTypes":{"topic":"PathExpression"},"hashContexts":{"topic":depth0},"types":["StringLiteral"],"contexts":[depth0],"data":data,"loc":{"start":{"line":39,"column":4},"end":{"line":39,"column":49}}}))
    + "\n    "
    + container.escapeExpression((lookupProperty(helpers,"raw")||(depth0 && lookupProperty(depth0,"raw"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"list.activity-column",{"name":"raw","hash":{"tagName":"td","class":"num","topic":"topic"},"hashTypes":{"tagName":"StringLiteral","class":"StringLiteral","topic":"PathExpression"},"hashContexts":{"tagName":depth0,"class":depth0,"topic":depth0},"types":["StringLiteral"],"contexts":[depth0],"data":data,"loc":{"start":{"line":40,"column":4},"end":{"line":40,"column":71}}}))
    + "\n";
},"useData":true});
  addRawTemplate("list/topic-list-item", template);
})();
(function() {
  const addRawTemplate = requirejs('discourse-common/lib/raw-templates').addRawTemplate;
  const template = requirejs('discourse-common/lib/raw-handlebars').template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
  addRawTemplate("topic-list-header", template);
})();
(function() {
  const addRawTemplate = requirejs('discourse-common/lib/raw-templates').addRawTemplate;
  const template = requirejs('discourse-common/lib/raw-handlebars').template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n\n  <"
    + container.escapeExpression(lookupProperty(helpers,"get").call(depth0 != null ? depth0 : (container.nullContext || {}),"view.tagName",{"name":"get","hash":{},"hashTypes":{},"hashContexts":{},"types":["PathExpression"],"contexts":[depth0],"data":data,"loc":{"start":{"line":3,"column":3},"end":{"line":3,"column":19}}}))
    + " class='num posts-map posts "
    + container.escapeExpression(lookupProperty(helpers,"get").call(depth0 != null ? depth0 : (container.nullContext || {}),"view.likesHeat",{"name":"get","hash":{},"hashTypes":{},"hashContexts":{},"types":["PathExpression"],"contexts":[depth0],"data":data,"loc":{"start":{"line":3,"column":47},"end":{"line":3,"column":65}}}))
    + "' title='"
    + container.escapeExpression(lookupProperty(helpers,"get").call(depth0 != null ? depth0 : (container.nullContext || {}),"view.title",{"name":"get","hash":{},"hashTypes":{},"hashContexts":{},"types":["PathExpression"],"contexts":[depth0],"data":data,"loc":{"start":{"line":3,"column":74},"end":{"line":3,"column":88}}}))
    + "'>\n\n  <a href class='posts-map badge-posts "
    + container.escapeExpression(lookupProperty(helpers,"get").call(depth0 != null ? depth0 : (container.nullContext || {}),"view.likesHeat",{"name":"get","hash":{},"hashTypes":{},"hashContexts":{},"types":["PathExpression"],"contexts":[depth0],"data":data,"loc":{"start":{"line":5,"column":39},"end":{"line":5,"column":57}}}))
    + "'>\n    "
    + container.escapeExpression((lookupProperty(helpers,"d-icon")||(depth0 && lookupProperty(depth0,"d-icon"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"far-comment",{"name":"d-icon","hash":{},"hashTypes":{},"hashContexts":{},"types":["StringLiteral"],"contexts":[depth0],"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":6,"column":28}}}))
    + "\n\n    "
    + container.escapeExpression((lookupProperty(helpers,"raw-plugin-outlet")||(depth0 && lookupProperty(depth0,"raw-plugin-outlet"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"raw-plugin-outlet","hash":{"name":"topic-list-before-reply-count"},"hashTypes":{"name":"StringLiteral"},"hashContexts":{"name":depth0},"types":[],"contexts":[],"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":8,"column":62}}}))
    + "\n    "
    + container.escapeExpression((lookupProperty(helpers,"number")||(depth0 && lookupProperty(depth0,"number"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"topic.replyCount",{"name":"number","hash":{"noTitle":"true"},"hashTypes":{"noTitle":"StringLiteral"},"hashContexts":{"noTitle":depth0},"types":["PathExpression"],"contexts":[depth0],"data":data,"loc":{"start":{"line":9,"column":4},"end":{"line":9,"column":46}}}))
    + "\n  </a>\n  </"
    + container.escapeExpression(lookupProperty(helpers,"get").call(depth0 != null ? depth0 : (container.nullContext || {}),"view.tagName",{"name":"get","hash":{},"hashTypes":{},"hashContexts":{},"types":["PathExpression"],"contexts":[depth0],"data":data,"loc":{"start":{"line":11,"column":4},"end":{"line":11,"column":20}}}))
    + ">\n";
},"useData":true});
  addRawTemplate("list/posts-count-column", template);
})();
(function() {
  const addRawTemplate = requirejs('discourse-common/lib/raw-templates').addRawTemplate;
  const template = requirejs('discourse-common/lib/raw-handlebars').template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n  <div class=\"byline\">\n    <a href=\""
    + container.escapeExpression(lookupProperty(helpers,"get").call(depth0 != null ? depth0 : (container.nullContext || {}),"context.topic.posters.0.user.userPath",{"name":"get","hash":{},"hashTypes":{},"hashContexts":{},"types":["PathExpression"],"contexts":[depth0],"data":data,"loc":{"start":{"line":3,"column":13},"end":{"line":3,"column":56}}}))
    + "\" data-user-card=\""
    + container.escapeExpression(lookupProperty(helpers,"get").call(depth0 != null ? depth0 : (container.nullContext || {}),"context.topic.posters.0.user.username",{"name":"get","hash":{},"hashTypes":{},"hashContexts":{},"types":["PathExpression"],"contexts":[depth0],"data":data,"loc":{"start":{"line":3,"column":74},"end":{"line":3,"column":117}}}))
    + "\">"
    + container.escapeExpression((lookupProperty(helpers,"avatar")||(depth0 && lookupProperty(depth0,"avatar"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"context.topic.posters.0.user",{"name":"avatar","hash":{"imageSize":"tiny"},"hashTypes":{"imageSize":"StringLiteral"},"hashContexts":{"imageSize":depth0},"types":["PathExpression"],"contexts":[depth0],"data":data,"loc":{"start":{"line":3,"column":119},"end":{"line":3,"column":177}}}))
    + container.escapeExpression(lookupProperty(helpers,"get").call(depth0 != null ? depth0 : (container.nullContext || {}),"context.topic.posters.0.user.username",{"name":"get","hash":{},"hashTypes":{},"hashContexts":{},"types":["PathExpression"],"contexts":[depth0],"data":data,"loc":{"start":{"line":3,"column":177},"end":{"line":3,"column":220}}}))
    + "</a>\n  </div>\n";
},"useData":true});
  addRawTemplate("/connectors/topic-list-before-status/op-name", template);
})();
(function() {
  const addRawTemplate = requirejs('discourse-common/lib/raw-templates').addRawTemplate;
  const template = requirejs('discourse-common/lib/raw-handlebars').template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n\n  <"
    + container.escapeExpression(lookupProperty(helpers,"get").call(depth0 != null ? depth0 : (container.nullContext || {}),"tagName",{"name":"get","hash":{},"hashTypes":{},"hashContexts":{},"types":["PathExpression"],"contexts":[depth0],"data":data,"loc":{"start":{"line":3,"column":3},"end":{"line":3,"column":14}}}))
    + " class=\""
    + container.escapeExpression(lookupProperty(helpers,"get").call(depth0 != null ? depth0 : (container.nullContext || {}),"class",{"name":"get","hash":{},"hashTypes":{},"hashContexts":{},"types":["PathExpression"],"contexts":[depth0],"data":data,"loc":{"start":{"line":3,"column":22},"end":{"line":3,"column":31}}}))
    + " "
    + container.escapeExpression((lookupProperty(helpers,"cold-age-class")||(depth0 && lookupProperty(depth0,"cold-age-class"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"topic.createdAt",{"name":"cold-age-class","hash":{"class":"","startDate":"topic.bumpedAt"},"hashTypes":{"class":"StringLiteral","startDate":"PathExpression"},"hashContexts":{"class":depth0,"startDate":depth0},"types":["PathExpression"],"contexts":[depth0],"data":data,"loc":{"start":{"line":3,"column":32},"end":{"line":3,"column":100}}}))
    + " activity\" title=\""
    + ((stack1 = lookupProperty(helpers,"get").call(depth0 != null ? depth0 : (container.nullContext || {}),"topic.bumpedAtTitle",{"name":"get","hash":{},"hashTypes":{},"hashContexts":{},"types":["PathExpression"],"contexts":[depth0],"data":data,"loc":{"start":{"line":3,"column":118},"end":{"line":3,"column":143}}})) != null ? stack1 : "")
    + "\">\n  <a class=\"post-activity\" href=\""
    + container.escapeExpression(lookupProperty(helpers,"get").call(depth0 != null ? depth0 : (container.nullContext || {}),"topic.lastPostUrl",{"name":"get","hash":{},"hashTypes":{},"hashContexts":{},"types":["PathExpression"],"contexts":[depth0],"data":data,"loc":{"start":{"line":4,"column":33},"end":{"line":4,"column":54}}}))
    + "\">"
    + container.escapeExpression((lookupProperty(helpers,"raw-plugin-outlet")||(depth0 && lookupProperty(depth0,"raw-plugin-outlet"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"raw-plugin-outlet","hash":{"name":"topic-list-before-relative-date"},"hashTypes":{"name":"StringLiteral"},"hashContexts":{"name":depth0},"types":[],"contexts":[],"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":5,"column":66}}}))
    + container.escapeExpression((lookupProperty(helpers,"format-date")||(depth0 && lookupProperty(depth0,"format-date"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"topic.bumpedAt",{"name":"format-date","hash":{"noTitle":"true","format":"tiny"},"hashTypes":{"noTitle":"StringLiteral","format":"StringLiteral"},"hashContexts":{"noTitle":depth0,"format":depth0},"types":["PathExpression"],"contexts":[depth0],"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":6,"column":65}}}))
    + container.escapeExpression((lookupProperty(helpers,"avatar")||(depth0 && lookupProperty(depth0,"avatar"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"topic.lastPoster",{"name":"avatar","hash":{"imageSize":"tiny","usernamePath":"username"},"hashTypes":{"imageSize":"StringLiteral","usernamePath":"StringLiteral"},"hashContexts":{"imageSize":depth0,"usernamePath":depth0},"types":["PathExpression"],"contexts":[depth0],"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":7,"column":72}}}))
    + "\n  </a>\n  </"
    + container.escapeExpression(lookupProperty(helpers,"get").call(depth0 != null ? depth0 : (container.nullContext || {}),"tagName",{"name":"get","hash":{},"hashTypes":{},"hashContexts":{},"types":["PathExpression"],"contexts":[depth0],"data":data,"loc":{"start":{"line":9,"column":4},"end":{"line":9,"column":15}}}))
    + ">\n";
},"useData":true});
  addRawTemplate("list/activity-column", template);
})();
