export const scrollToTop = (
  options: ScrollToOptions = { top: 0, behavior: "smooth" }
) => {
  if (typeof window !== "undefined") {
    window.scrollTo(options);
  }
};
