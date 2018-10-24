export const initGA = () => {
  window.ga =
    window.ga ||
    function() {
      window.ga.q = window.ga.q || [];
      window.ga.q.push(arguments);
      window.ga.l = +new Date();
    };
  window.ga("create", "UA-9825778-3", "auto");
  window.ga("set", "transport", "beacon");
};

export const logGA = url => {
  window.ga("set", "page", url);
  window.ga("send", "pageview");
};
