//attoQuery
const $ = function(qsa) {
  let arr;
  if (typeof qsa === "string") {
    arr = Array.prototype.slice.call(document.querySelectorAll(qsa));
  }
  else if (Array.isArray(qsa)) {
    arr = qsa;
  }
  else {
    arr = [];
  }
  
  arr.on = function(ev, callback) {
    arr.forEach(function(el) {
      el.addEventListener(ev, function(e) {
        callback.call(this, e);
      });
    });
    return this;
  };

  arr.addClass = function(classes) {
    arr.forEach(function(el) {
      el.classList.add.apply(el.classList, classes.split(" "));
    });
    return this;
  };

  arr.removeClass = function(classes) {
    const r = new RegExp("\\b" + classes.replace("*", ".*") + "\\b");
    arr.forEach(function(el) {
      el.className = el.className.replace(r, "");
    });
    return this;
  };

  arr.toggleClass = function(classes, toggle) {
    arr.forEach(function(el) {
      el.classList.toggle(classes, toggle);
    });
    return this;
  };

  arr.append = function(html) {
    if (html instanceof Element) {
      arr.forEach(function(el) {
        el.appendChild(html.cloneNode(true));
      });
    } else {
      arr.forEach(function(el) {
        el.insertAdjacentHTML("beforeend", html);
      });
    }
    return this;
  };

  arr.html = function(html) {
    const frag = document.createDocumentFragment();
    const temp = document.createElement("div");
    temp.innerHTML = html;
    Array.prototype.slice.call(temp.childNodes).forEach(function(child) {
      frag.appendChild(child);
    });
    Array.prototype.slice
      .call(frag.querySelectorAll("script"))
      .forEach(function(child) {
        const script = document.createElement("script");
        child.hasAttributes("src") && (script.src = child.src);
        script.textContent = child.textContent;
        frag.appendChild(script);
      });
    arr.forEach(function(el) {
      el.innerHTML = "";
      el.appendChild(frag.cloneNode(true));
    });
    return this;
  };

  arr.scrollTop = function(offset) {
    if (offset !== undefined) {
      arr.forEach(function(el) {
        el.scrollTop = offset;
      });
      return this;
    } else {
      return arr[0].scrollTop;
    }
  };

  arr.css = function(prop, val) {
    arr.forEach(function(el) {
      if (arguments.length < 2 && Object.keys(prop).length > 0) {
        Object.keys(prop).forEach(function(k) {
          el.style[k] = prop[k];
        });
      } else {
        el.style[prop] = val;
      }
    });
  };

  arr.find = function(qsa) {
    const results = [];
    arr.forEach(function(el) {
      results.concat(Array.prototype.slice.call(el.querySelectorAll(qsa)));
    });
    return $(results);
  };

  return arr;
};

export default $;
