/**
 *
 * @param {string} url
 * @param {function(Error=)=} callback
 */
function inject(url, callback) {
  const js = document.createElement("script");
  js.src = url;
  js.async = true;
  if (callback !== undefined) {
    js.onload = function() {
      callback();
    };
    js.onerror = function() {
      callback(new Error("Failed to load script " + url));
    };
  }
  document.head.appendChild(js);
}

export default inject;
