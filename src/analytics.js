export const initGA = () => {
  window.ga =
    window.ga ||
    function() {
      (window.ga.q || []).push(arguments);
    };
  window.ga("create", "UA-9825778-3", "auto");
  window.ga("set", "transport", "beacon");
  window.ga("send", "pageview");
};

export const logGA = url => {
  window.ga("set", "page", url);
  window.ga("send", "pageview");
};