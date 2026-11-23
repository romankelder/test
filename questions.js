// ============================================================
//  U.L.T.I.M.O - frågor
//  Byt ut eller lägg till egna frågor här. Max 15 just nu.
//  q       = frågetexten
//  options = svarsalternativen
//  answer  = index (börjar på 0) för rätt alternativ
//  hint    = förklaring som visas efter svaret
// ============================================================
const QUESTIONS = [
  {
    q: "Vilket tal kommer härnäst?  2, 4, 8, 16, ?",
    options: ["24", "30", "32", "64"],
    answer: 2,
    hint: "Varje tal dubblas: 16 × 2 = 32."
  },
  {
    q: "Vilket tal kommer härnäst?  1, 1, 2, 3, 5, 8, ?",
    options: ["11", "12", "13", "14"],
    answer: 2,
    hint: "Fibonacci: varje tal är summan av de två föregående (5 + 8 = 13)."
  },
  {
    q: "Alla bloppar är blippar. Alla blippar är blupp. Är alla bloppar blupp?",
    options: ["Ja", "Nej", "Kan inte avgöras"],
    answer: 0,
    hint: "Bloppar ⊂ blippar ⊂ blupp, alltså är alla bloppar blupp."
  },
  {
    q: "Vilket tal kommer härnäst?  3, 6, 11, 18, 27, ?",
    options: ["36", "38", "40", "42"],
    answer: 1,
    hint: "Skillnaderna är 3, 5, 7, 9 - nästa skillnad är 11. 27 + 11 = 38."
  },
  {
    q: "Vilket tal är udda i gänget?  2, 3, 5, 9, 11",
    options: ["2", "3", "9", "11"],
    answer: 2,
    hint: "Alla utom 9 är primtal."
  },
  {
    q: "Fem maskiner gör fem prylar på fem minuter. Hur lång tid tar det för 100 maskiner att göra 100 prylar?",
    options: ["5 minuter", "20 minuter", "100 minuter", "500 minuter"],
    answer: 0,
    hint: "Varje maskin gör en pryl på 5 minuter. 100 maskiner gör 100 prylar på 5 minuter."
  },
  {
    q: "Fågel är till flyga som fisk är till ...?",
    options: ["Vatten", "Simma", "Fjäll", "Äta"],
    answer: 1,
    hint: "Analogi: sättet att röra sig. Fågel flyger, fisk simmar."
  },
  {
    q: "Pappa är 4 gånger så gammal som sin son. Om 20 år är han dubbelt så gammal som sonen. Hur gammal är sonen nu?",
    options: ["5 år", "10 år", "15 år", "20 år"],
    answer: 1,
    hint: "4x + 20 = 2(x + 20)  →  x = 10. Pappa är 40 nu och 60 om 20 år, sonen 30."
  },
  {
    q: "Vilket tal kommer härnäst?  1, 4, 9, 16, 25, ?",
    options: ["30", "34", "36", "49"],
    answer: 2,
    hint: "Kvadrattal: 1², 2², 3², 4², 5², och nu 6² = 36."
  },
  {
    q: "Vilken bokstav kommer härnäst?  A, C, F, J, O, ?",
    options: ["S", "T", "U", "V"],
    answer: 2,
    hint: "Steget växer: +2, +3, +4, +5, och sedan +6. O är nummer 15, 15 + 6 = 21 = U."
  },
  {
    q: "Anna är längre än Bo. Bo är längre än Cia. Vem är kortast?",
    options: ["Anna", "Bo", "Cia", "Går inte att veta"],
    answer: 2,
    hint: "Anna > Bo > Cia, alltså är Cia kortast."
  },
  {
    q: "Hur många månader på ett år har 28 dagar?",
    options: ["1", "2", "6", "12"],
    answer: 3,
    hint: "Alla månader har minst 28 dagar. Lurigt, va?"
  },
  {
    q: "Inga fåglar är däggdjur. Alla fladdermöss är däggdjur. Är någon fladdermus en fågel?",
    options: ["Ja", "Nej", "Kan inte avgöras"],
    answer: 1,
    hint: "Fladdermöss är däggdjur, och inga däggdjur är fåglar."
  },
  {
    q: "Vilket tal kommer härnäst?  2, 6, 12, 20, 30, ?",
    options: ["36", "40", "42", "48"],
    answer: 2,
    hint: "Skillnaderna är 4, 6, 8, 10 - nästa är 12. 30 + 12 = 42."
  },
  {
    q: "BONUS: Klockan är 03:15. Vilken vinkel är det mellan timvisaren och minutvisaren?",
    options: ["0°", "7,5°", "15°", "22,5°"],
    answer: 1,
    hint: "Minutvisaren står på 90°. Timvisaren har gått ett kvarts steg förbi 3 = 90° + 7,5°. Skillnad: 7,5°."
  }
];
