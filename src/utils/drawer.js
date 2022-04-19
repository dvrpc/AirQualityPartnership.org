import isBrowser from "../utils/isBrowser";

export const openDrawer = () => {
  if (!isBrowser) {
    return;
  }
  const nav = document.getElementById("mobile-drawer-header");
  if (nav) {
    nav.classList.add("drawer--active");
  }
};

export const closeDrawer = () => {
  if (!isBrowser) {
    return;
  }
  const nav = document.getElementById("mobile-drawer-header");
  if (nav) {
    nav.classList.remove("drawer--active");
  }
};
