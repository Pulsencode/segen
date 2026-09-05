(function () {
  var PARTIALS = [
    { id: "site-nav", url: "/partials/nav.html" },
    { id: "site-footer", url: "/partials/footer.html" },
  ];

  function currentPath() {
    var path = window.location.pathname.replace(/index\.html$/i, "");
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
