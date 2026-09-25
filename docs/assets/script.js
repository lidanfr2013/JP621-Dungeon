document.querySelectorAll(".nav-toggle").forEach((btn) => {
  const links = document.getElementById(btn.getAttribute("aria-controls"));
  if (!links) return;

  const close = () => {
    links.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  };

  btn.addEventListener("click", () => {
    const willOpen = !links.classList.contains("open");
    links.classList.toggle("open", willOpen);
    btn.setAttribute("aria-expanded", String(willOpen));
  });

  links.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
});
