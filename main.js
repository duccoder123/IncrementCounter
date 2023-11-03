const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target"); // + is convert to Number
    const c = +counter.innerText;
    const increment = target / 200;
    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(() => {
        updateCounter();
      }, 2);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});
