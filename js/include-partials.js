(function () {
  function siteBase() {
    var script = document.currentScript;
    if (!script) {
      return "";
    }
    var scriptPath = new URL(script.src, window.location.href).pathname;
    return scriptPath.slice(0, scriptPath.lastIndexOf("/js/"));
  }

  var BASE_PATH = siteBase();
  var PARTIALS = [
    { id: "site-nav", url: BASE_PATH + "/partials/nav.html" },
    { id: "site-footer", url: BASE_PATH + "/partials/footer.html" },
  ];

  function currentPath() {
    var path = window.location.pathname.replace(/index\.html$/i, "");
    if (BASE_PATH && path.indexOf(BASE_PATH) === 0) {
      path = path.slice(BASE_PATH.length);
    }
    if (path === "") {
      return "/";
    }
    if (path.charAt(path.length - 1) !== "/") {
      path += "/";
    }
    return path;
  }

  function setActiveNav(root) {
    var path = currentPath();
    var links = root.querySelectorAll("[data-nav-path]");
    for (var i = 0; i < links.length; i += 1) {
      var link = links[i];
      if (link.getAttribute("data-nav-path") === path) {
        link.setAttribute("aria-current", "page");
      }
    }
  }

  function initMobileNav(root) {
    var toggle = root.querySelector("#nav-toggle");
    var panel = root.querySelector("#nav-panel");
    if (!toggle || !panel) {
      return;
    }

    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      panel.classList.toggle("hidden");
    });
  }

  function inject(id, html) {
    var mount = document.getElementById(id);
    if (!mount) {
      return;
    }
    mount.innerHTML = html;
    var rootRelativeElements = mount.querySelectorAll('[src^="/"], [href^="/"]');
    for (var i = 0; i < rootRelativeElements.length; i += 1) {
      var element = rootRelativeElements[i];
      var attribute = element.hasAttribute("src") ? "src" : "href";
      element.setAttribute(attribute, BASE_PATH + element.getAttribute(attribute));
    }
    setActiveNav(mount);
    if (id === "site-nav") {
      initMobileNav(mount);
    }
  }

  function showLoadError(id) {
    var mount = document.getElementById(id);
    if (!mount) {
      return;
    }
    mount.innerHTML =
      '<p class="bg-segen-navy px-4 py-3 text-sm text-white">Shared layout could not be loaded. Serve this site over HTTP (for example <code>npx serve</code>) instead of opening the HTML file directly.</p>';
  }

  PARTIALS.forEach(function (partial) {
    fetch(partial.url)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Failed to load " + partial.url);
        }
        return response.text();
      })
      .then(function (html) {
        inject(partial.id, html);
      })
      .catch(function () {
        showLoadError(partial.id);
      });
  });
})();
