// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
  // linksContainer.classList.toggle("show-links");
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

const nav = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
const whatsappLink = document.querySelector(".whatsapp-link");
// ********** fixed navbar ************
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = nav.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
  if (scrollHeight > 500) {
    whatsappLink.classList.add("show-link");
  } else {
    whatsappLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    // calculate the heights
    const navHeight = nav.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = element.offsetTop;
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});

/* tabs */

const about = document.querySelector(".about");
const tabBtn = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", (e) => {
  const tab = e.target.dataset.tab;
  if (tab) {
    // remove active from other buttons

    tabBtn.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    // hide other articles
    articles.forEach((article) => {
      article.classList.remove("active");
    });
    const articleElem = document.getElementById(tab);
    articleElem.classList.add("active");
  }
});

/* meat */

// get only unique categories - HARDEST ONE
// iterate over categories return buttons
// make sure to select buttons when they are available

// items
const menu = [
  {
    id: 1,
    title: "Бараньи ребрышки",
    category: "баранина",
    price: 500,
    img: "./images/lamb_ribs.jpg",
    desc: `Баранье ребро – это престижный отруб из передней четверти нашей баранины, выращенной на траве. `,
    scale: "img_mainPage",
  },
  {
    id: 2,
    title: "Вырезка говяжья",
    category: "говядина",
    price: 1200,
    img: "./images/filletOfBeef_img.jpg",
    desc: `Целое филе говядины — это действительно особенный кусок. Берется из наиболее недоиспользованной мускулатуры говядины, «разделывается» нашими квалифицированными мясниками, что означает удаление всего лишнего жира.  `,
    scale: "img_mainPage",
  },
  {
    id: 3,
    title: "Мякоть телячья",
    category: "телятина",
    price: 750,
    img: "./images/filletOfVeal_meat.jpg",
    desc: `Телячья мякоть — это действительно особенный кусок. Берется из наиболее недоиспользованной мускулатуры молодых бычков, «разделывается» нашими квалифицированными мясниками.`,
    scale: "img_mainPage",
  },
  {
    id: 4,
    title: "Передняя баранья нога",
    category: "баранина",
    price: 580,
    img: "./images/lamb_leg.jpg",
    desc: `Передняя баранья нога – это отруб от целого барана. `,
    scale: "img_mainPage",
  },
  {
    id: 5,
    title: "Стейк говяжий",
    category: "говядина",
    price: 750,
    img: "./images/steakBeef.jpg",
    desc: `Стейк говяжий — один из самых популярных стейков. Благодаря натуральному жиру и густой мраморности он идеален, для приготовления "в собственном соку", что делает его очень нежным. `,
    scale: "img_mainPage",
  },
  {
    id: 6,
    title: "Курдюк",
    category: "баранина",
    price: 650,
    img: "./images/lamb_fat.jpg",
    desc: `Курдюк - жировое отложение округлой формы в районе хвоста у барана «курдючной» породы.`,
    scale: "img_mainPage",
  },
  {
    id: 7,
    title: "Сердце говяжье",
    category: "говядина",
    price: 350,
    img: "./images/beef_heart.jpg",
    desc: `Говяжье сердце - это особый продукт с нежным вкусом.`,
    scale: "img_mainPage",
  },
  {
    id: 8,
    title: "Фарш говяжий",
    category: "говядина",
    price: 680,
    img: "./images/ground-beef_wqobpz.jpg",
    desc: `Фарш из отборных кусков говядины.  `,
    scale: "img_mainPage",
  },
  {
    id: 9,
    title: "Стейк телячий",
    category: "телятина",
    price: 650,
    img: "./images/veal-meat-steak-on-bone.jpg",
    desc: `Стейк говяжий — один из самых популярных стейков. Благодаря натуральному жиру и густой мраморности он идеален, для приготовления "в собственном соку", что делает его очень нежным.`,
    scale: "img_mainPage",
  },
  {
    id: 10,
    title: "Ливер",
    category: "говядина",
    price: 450,
    img: "./images/liver_beef.jpg",
    desc: `Ливер - это печень молодых бычков. Поднимает гемоглобин, укрепляет иммунитет.`,
    scale: "img_mainPage",
  },
  {
    id: 11,
    title: "Кролик домашний",
    category: "кролик",
    price: 600,
    img: "./images/rabbit-meat_pxotrn.jpg",
    desc: `Кролик домашний - мясо кроликов из деревни на заказ. Диетическое мясо.`,
    scale: "img_mainPage",
  },
  {
    id: 12,
    title: "Курица домашняя",
    category: "курица",
    price: 400,
    img: "./images/meat-chicken.jpg",
    desc: `Куры домашние - тушка курицы из деревни на заказ. Диетическое мясо.`,
    scale: "img_mainPage",
  },
  {
    id: 13,
    title: "Говяжий язык",
    category: "говядина",
    price: 750,
    img: "./images/beef_tonge_meat.jpg",
    desc: `Язык говяжий - изысканное блюдо для всей семьи. Нежнейший вкус.`,
    scale: "img_mainPage",
  },
  {
    id: 14,
    title: "Задняя баранья нога",
    category: "баранина",
    price: 650,
    img: "./images/raw-meat-leg-young-lambr.jpg",
    desc: `Задняя баранья нога – это отруб от целого барана.`,
    scale: "img_mainPage",
  },
  {
    id: 15,
    title: "Гуляш говяжий",
    category: "говядина",
    price: 650,
    img: "./images/lean-beef_meat.jpg",
    desc: `Отборные постные куски мякоти с передней части быка.`,
    scale: "img_mainPage",
  },
  {
    id: 16,
    title: "Рулька говяжья",
    category: "говядина",
    price: 350,
    img: "./images/veal-leg-on-blue-stone--with-herbs.jpg",
    desc: `Рулька - задняя или передняя нога молодого бычка.`,
    scale: "img_mainPage",
  },
  {
    id: 17,
    title: "Стейк на кости",
    category: "говядина",
    price: 650,
    img: "./images/raw-lamb-steak_on_bone.jpg",
    desc: `Стейк говяжий — один из самых популярных стейков. Благодаря натуральному жиру и густой мраморности он идеален, для приготовления "в собственном соку", что делает его очень нежным.`,
    scale: "img_mainPage",
  },
  {
    id: 18,
    title: "Мякоть на кости",
    category: "баранина",
    price: 750,
    img: "./images/raw-beef-meat-on-bone-flat-lay_maqr6n.jpg",
    desc: `Мякоть баранья на кости — это отборные куски мякоти с передней части барана.`,
    scale: "img_mainPage",
  },
  {
    id: 19,
    title: "Рулька телячья",
    category: "телятина",
    price: 450,
    img: "./images/meat-steaks-with-bone-dinner.jpg",
    desc: `Рулька телячья - задняя или передняя нога молодого бычка. `,
    scale: "img_mainPage",
  },
  {
    id: 20,
    title: "Мякоть говяжья",
    category: "говядина",
    price: 750,
    img: "./images/piece_of_meat.jpg",
    desc: `Отборные куски говяжьей мякоти, которые наши квалифицированные мясники вырезают вручную на заказ. `,
    scale: "img_mainPage",
  },
  {
    id: 21,
    title: "Мякоть баранья",
    category: "баранина",
    price: 1000,
    img: "./images/lamb-tenderloin-halal-meat.jpg",
    desc: `Отборные куски бараньей мякоти, которые наши квалифицированные мясники вырезают вручную.`,
    scale: "img_mainPage",
  },
  {
    id: 22,
    title: "Грудинка говяжья",
    category: "говядина",
    price: 480,
    img: "./images/beef-meat-on-bone-halal.jpg",
    desc: `Говяжья лопатка – это отруб из передней четверти нашей говядины, откормленной травой. Отлично подойдет на суп.`,
    scale: "img_mainPage",
  },
  {
    id: 23,
    title: "Фарш бар+гов",
    category: "баранина",
    price: 700,
    img: "./images/ground_lamb_beef_meat.jpg",
    desc: `Фарш из отборных кусков баранины и говядины. Особо сочный вкус.  `,
    scale: "img_mainPage",
  },
  {
    id: 24,
    title: "Ребра говяжьи",
    category: "говядина",
    price: 480,
    img: "./images/raw-beef-spare-ribs.jpg",
    desc: `Говяжье ребро – это престижный отруб из передней четверти нашей говядины, откормленной травой. Благодаря хорошему покрытию натуральным жиром и мраморности на всем протяжении, жаркое получается очень нежным.`,
    scale: "img_mainPage",
  },
  {
    id: 25,
    title: "Лопатка телячья",
    category: "телятина",
    price: 600,
    img: "./images/raw-lamb-on-wood_iczqoi.jpg",
    desc: `Лопатка телячья – это отруб из передней четверти молодого бычка, выращенного на траве.`,
    scale: "img_mainPage",
  },
  {
    id: 26,
    title: "Стейк без кости",
    category: "телятина",
    price: 750,
    img: "./images/veal_fatless_steak_meat.jpg",
    desc: `Стейк телячий — один из самых популярных стейков. Отборные куски телячьей мякоти, которые наши квалифицированные мясники вырезают вручную. `,
    scale: "img_mainPage",
  },
  {
    id: 27,
    title: "Ребра телячьи",
    category: "телятина",
    price: 480,
    img: "./images/fresh-raw-veal-ribs-meat.jpg",
    desc: `Ребра молодых бычков – это престижный отруб из передней четверти нашей телятины, откормленной травой. Благодаря хорошему покрытию натуральным жиром и мраморности на всем протяжении, жаркое получается очень нежным.`,
    scale: "img_mainPage",
  },
  {
    id: 28,
    title: "Корейка баранья",
    category: "баранина",
    price: 750,
    img: "./images/fresh-and-raw-meat-raw-lamb.jpg",
    desc: `Баранья корейка – это отруб из передней четверти барана, выращенного на траве.`,
    scale: "img_mainPage",
  },
];

const sectionCenterMenu = document.querySelector(".section-center_menu");
const btnContainerMenu = document.querySelector(".btn-container_menu");
const photoMenu = document.querySelectorAll(".photo_menu");

// load items
window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
  displayMenuBtns();
});

function displayMenuItems(menuItem) {
  let displayMenu = menuItem.map(function (item) {
    return ` <article class="menu-item">
<img src=${item.img} alt=${item.title}  class="photo_menu ${item.scale}" />
            <div class="item-info_menu">
              <div class="header_menu">
                <h4>${item.title}</h4>
                <h4 class="price_menu">${item.price}<small class="small_kl">руб/кг</small></h4>
              </div class="header">
              <p class="item-text_menu">${item.desc}</p>
            </div>
          </article>`;
  });
  displayMenu = displayMenu.join("");

  sectionCenterMenu.innerHTML = displayMenu;
}

function displayMenuBtns() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["все"]
  );

  const categoryBtns = categories
    .map((category) => {
      return `<button class="filter-btn_menu" type="button" data-menu=${category}>${category}</button>`;
    })
    .join("");
  btnContainerMenu.innerHTML = categoryBtns;

  const filterBtnMenu = document.querySelectorAll(".filter-btn_menu");

  filterBtnMenu.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.menu;
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });

      if (category === "все") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
      if (category === "все") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}

/* -------------------------------------------------------- */
// local reviews data

const reviews = [
  {
    id: 1,
    name: "Анастасия Кирина",
    job: "дизайнер",
    img: "./images/review-1.jpg",
    text: `"Покупаю регулярно говяжью вырезку и ребрышки на суп, иногда заказываю баранину. Готовлю сама и с удовольствием лопаем всей семьёй. Мясо всегда свежее, вовремя привозят, очень удобно. Рекомендую!"`,
  },
  {
    id: 2,
    name: "Екатерина Сидоренко",
    job: "бухгалтер",
    img: "./images/review-2.jpg",
    text: `"Мясо высокого качества, с запахом мяса)) Много перепробовала и остановила свой выбор здесь. Коллега по работе порекомендовал, теперь всегда здесь заказываю. Свинину не ем, только телятину и баранину. Цены не кусачие. Спасибо вам."`,
  },
  {
    id: 3,
    name: "Дамир Жуков",
    job: " частный предприниматель",
    img: "./images/review-3.jpg",
    text: `"Говядина и баранина просто изумительная по вкусу, аромату и сочности волокон! С женой ходим только к ним на рынок, иногда звоним и привозят домой, без проблем. Очень уважительное отношение. Всегда привезут, что тебе нужно."`,
  },
  {
    id: 4,
    name: "Павел Прунов",
    job: "Инженер",
    img: "./images/review-4.jpg",
    text: `"Придерживаюсь здорового питания, покукаю только домашнее мясо и кур. Заказываю здесь регулярно раз в 2 недели. Мясо действительно деревенское, очень ароматное.  Рекомендую к покупке!"`,
  },
  {
    id: 5,
    name: "Нина Станиславна",
    job: "Педагог",
    img: "./images/review-5.jpg",
    text: `"У Надюшки заказываю говядину и баранину уже который год. Они с мужем очень приятные порядочные люди, никогда ничего не подсовывают, все адекватно. Я обычно звоню им и заранее заказываю,что мне нужно. Потом оплачиваю картой, очень удобно. Всем рекомендую!"`,
  },
];

//select items
const personImg = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const prevBtnReviews = document.querySelector(".prev-btn_reviews");
const nextBtnReviews = document.querySelector(".next-btn_reviews");
const randomBtnReviews = document.querySelector(".random-btn_reviews");

//set starting item
let currentItemReview = 0;
// load initial item
window.addEventListener("DOMContentLoaded", () => {
  showPersonReview();
});
//show person based on item

function showPersonReview() {
  const itemReview = reviews[currentItemReview];
  personImg.src = itemReview.img;
  author.textContent = itemReview.name;
  job.textContent = itemReview.job;
  info.textContent = itemReview.text;
}
// show next person
nextBtnReviews.addEventListener("click", () => {
  currentItemReview++;
  if (currentItemReview > reviews.length - 1) {
    currentItemReview = 0;
  }
  showPersonReview();
});
prevBtnReviews.addEventListener("click", () => {
  currentItemReview--;
  if (currentItemReview < 0) {
    currentItemReview = reviews.length - 1;
  }
  showPersonReview();
});
// show random person
randomBtnReviews.addEventListener("click", () => {
  currentItemReview = Math.floor(Math.random() * reviews.length);
  showPersonReview();
});

/* tabs-delivery */

const delivery = document.querySelector(".delivery");
const tabBtnDelivery = document.querySelectorAll(".tab-btnDelivery");
const articlesDelivery = document.querySelectorAll(".content_delivery");

delivery.addEventListener("click", (e) => {
  const deliveryTab = e.target.dataset.delivery;
  if (delivery) {
    // remove active from other buttons

    tabBtnDelivery.forEach((btn) => {
      btn.classList.remove("deliveryActive");
      e.target.classList.add("deliveryActive");
    });
    // hide other articles
    articlesDelivery.forEach((article) => {
      article.classList.remove("deliveryActive");
    });
    const articleElemDelivery = document.getElementById(deliveryTab);
    articleElemDelivery.classList.add("deliveryActive");
  }
});
/* ----------------------- */
