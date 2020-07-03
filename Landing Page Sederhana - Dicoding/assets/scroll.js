function scrollToTarget(target) {
    const element = document.getElementById(target);
    element.scrollIntoView({ block: "start", behavior: "smooth" });
}
