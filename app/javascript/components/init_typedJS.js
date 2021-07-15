import Typed from 'typed.js'

const initTypedJS = () => {
  new Typed('#lower-header', {
    strings: ["All your favorite watches in one place...", "Chill with friends...", "Chill with 😉..."],
    typeSpeed: 100,
    loop: true,
    smartBackspace:true,
    backSpeed: 80,
  });
}


export { initTypedJS };
