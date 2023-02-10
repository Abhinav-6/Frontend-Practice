const nav = document.querySelector("nav");

for (const links of nav.querySelectorAll("a")) {
  links.onmousemove = e => {
    // console.log(e)
    // links.style.transform = `translate(${e.screenX},${e.screenY})`
    // window.
    let rect = links.getBoundingClientRect();
    console.log(rect)
    let img = links.querySelector("img");
    img.style.left = `${e.clientX - rect.left}px`
    img.style.top = `${e.clientY - rect.top}px`
  }
}

window.onmousemove = e => {
  const percent = e.clientY / window.innerHeight;

  nav.animate({
    transform: `translateY(${
      percent * nav.offsetHeight * -1
    }PX)`
  }, {
    fill: "forwards",
    duration: 4000
  })
}