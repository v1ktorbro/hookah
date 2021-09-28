/* РЕНДЕРИТЬСЯ В КОМПОНЕНТЕ MENUOFCLUB */

/* фирменные кальяны  */
export const arrWithAssortmentBrandHookahs = [
  {
    name: "Баунти",
    price: "3000",
    supplements: "шоколад, молоко, кокосовый сироп",
    bowl: [["ананас"]],
    strength: "средняя",
  },
  {
    name: "Мохито",
    price: "3000",
    supplements: "мята, лайм, белый ром и много-много льда",
    bowl: [["яблоко"], ["апельсин"], ["грейпфрут"]],
    strength: "крепкий",
  },
  {
    name: "Пина колада",
    price: "3000",
    supplements: "молоко, ананасовый сок, кокосовый сироп, лед",
    bowl: ["ананас"],
    strength: "средняя",
  },
];

export const arrWithAssortmentCigars = [
  {
    name: "Куба",
    brands: ["Cohiba Panatelas", "Cohiba Siglo II", "Cohiba Siglo IV", "Cohiba Siglo V", "Cohiba Robustos", "H. Upmann Magnum", "Hoyo De Mont. Epicure №1", "Montecristo №4", "Partagas Serie №4", "Romeo & Julieta Churchliss", "Romeo & Julieta №2"],
  },
  {
    name: "Доминикана",
    brands: ["CT Reserva Decadencia Churchill", "Arturo Fuente Anejo №77 Shark", "Davidoff Escurio Gran Perfecto", "Davidoff WSC Churchill", "Zino Platinum XS", "Zino Platinum Barrel", "Macanudo Cafe Ascots", "Macanudo Maduro Ascots"],
  },
  {
    name: "Никарагуа",
    brands: ["Nub Sun Grown 460 Tubos"],
  },
];


export const arrWithAssortmentClassicHookahs = [
  {
    name: "Кальяны на глиняной чаше",
    note: "",
    views: [
      {
        fruit: "",
        type: [
          {
            classification: "Standart:",
            price: "1600",
            strength: "легкий",
          },
          {
            classification: "Premium:",
            price: "1900",
            strength: "крепкий",
          },
        ]
      },
      {
        fruit: "Замена чаши",
        type: [
          {
            classification: "Standart:",
            price: "900",
            strength: "",
          },
          {
            classification: "Premium:",
            price: "1200",
            strength: "",
          },
        ]
      },
    ],
  },
  {
    name: "Кальяны на фруктовой чаше",
    note: "",
    views: [
      {
        fruit: "Апельсин",
        type: [
          {
            classification: "Standart:",
            price: "1600",
            strength: "",
          },
          {
            classification: "Premium:",
            price: "1900",
            strength: "",
          },
        ]
      },
      {
        fruit: "Яблоко",
        type: [
          {
            classification: "Standart:",
            price: "1600",
            strength: "",
          },
          {
            classification: "Premium:",
            price: "1900",
            strength: "",
          },
        ]
      },
      {
        fruit: "Грейпфрут",
        type: [
          {
            classification: "Standart:",
            price: "1900",
            strength: "",
          },
          {
            classification: "Premium:",
            price: "2300",
            strength: "",
          },
        ]
      },
      {
        fruit: "Ананас",
        type: [
          {
            classification: "Standart:",
            price: "2200",
            strength: "",
          },
          {
            classification: "Premium:",
            price: "2700",
            strength: "",
          },
        ]
      },
    ],
  },
  {
    name: "Добавки в колбу",
    note: "Вы можете добавить в кальян любой алкоголь из барной карты ресторана Panorama A.S.P.",
    views: [
      {
        fruit: "",
        type: [
          {
            classification: "Вино",
            price: "600",
            strength: "",
          },
          {
            classification: "Мята:",
            price: "100",
            strength: "",
          },
        ]
      },
      {
        fruit: "",
        type: [
          {
            classification: "Молоко:",
            price: "200",
            strength: "",
          },
          {
            classification: "Сок в ассортименте:",
            price: "300",
            strength: "",
          },
        ]
      },
    ],
  },
];