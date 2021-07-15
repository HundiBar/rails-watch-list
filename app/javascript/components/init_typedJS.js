import Typed from 'typed.js'

const initTypedJS = () => {
  new Typed('#lower-header', {
    strings: ["All your favorite watches in one place...", "Chill with friends...", "Chill with that special someone 😉..."],
    typeSpeed: 80,
    loop: true,
    smartBackspace:true,
    backSpeed: 60,
  });
}


export { initTypedJS };
