// P11 — perakit aplikasi: impor dan panggil modul.
import { state, terapkanSimpanan } from "./state.js";
import { render, perbaruiProfil, perbaruiLabelTema, tampilkanSlide } from "./dom.js";
import { pasangPendengar } from "./events.js";

terapkanSimpanan();
render(state);
perbaruiProfil(state);
perbaruiLabelTema(state);
tampilkanSlide(state.slideAktif);
pasangPendengar();
console.log("P11 siap:", state);
