const translationElements = document.querySelectorAll("[data-lang-key]");
const button = document.querySelector("button");
let langSet = false;

const translations = {
  sv: {
    "hero-title": "Hej jag är svensk",
    "hero-subtitle": "en kortare text här",
    "buy-button": "köp nu",
    "header-clothes": "Kläder",
    "header-shoes": "Skor",
    "header-env": "hållbarhet",
    "shop-button": "Shoppa kollektionen",
    "discount-text": "Bli medlem och få 10%",
    "returns-text": "Fri frakt och retur",
    "shipping-text": "1-3 dagars leverans",
    "login-btn": "Logga in",

    "shirt-text": "Arie",
    "shirt-material": "Återvunnen bomull",
    "shirt-price": "1 499:-",

    "shoe-text": "Billie",
    "shoe-material": "Svampläder",
    "shoe-price": "1 899:-",

    "jacket-text": "Charlie",
    "jacket-material": "Återvunnen ull",
    "jacket-price": "1 299:-",

    "dress-name": "jackie",
    "dress-material": "Linné",
    "dress-price": "1 599:-",

    "discount-text-long": "Bli medlem och få 10% rabatt på ditt första köp",

    "footer-contact": "Kontakt",
    "footer-faq": "FAQ",
    "footer-about": "Om oss",
    "footer-support": "Support",
    "footer-career": "Karriär",

    /* "enter-email": "Fyll i epostadress", */
  },
  en: {
    "hero-title": "Hello im english",
    "hero-subtitle": "a shorter text here",
    "buy-button": "Buy now",
    "header-clothes": "Clothes",
    "header-shoes": "Shoes",
    "header-env": "sustainability",
    "shop-button": "Shop the collection",
    "discount-text": "Become a member and get 10%",
    "returns-text": "Free shipping and returns",
    "shipping-text": "1-3 day delivery",
    "login-btn": "Login",

    "shirt-text": "Arie",
    "shirt-material": "Recycled cotton",
    "shirt-price": "1 499:-",

    "shoe-text": "Billie",
    "shoe-material": "Mushroom leather",
    "shoe-price": "1 899:-",

    "jacket-text": "Charlie",
    "jacket-material": "Recycled wool",
    "jacket-price": "1 299:-",

    "dress-name": "jackie",
    "dress-material": "Linen",
    "dress-price": "1 599:-",

    "discount-text-long": "Become a member and get 10% off your first purchase",

    "footer-contact": "Contact",
    "footer-faq": "FAQ",
    "footer-about": "About us",
    "footer-support": "Support",
    "footer-career": "Careers",

    /* "enter-email": (placeholder = "Enter email"), */
  },
};

const addTranslations = (lang) => {
  translationElements.forEach((element) => {
    const langKey = element.dataset.langKey;

    element.textContent = translations[lang][langKey];
  });
};

button.addEventListener("click", () => {
  addTranslations("en");
});

const sv_lang = document.querySelector(".drop-down-footer .sv");
const en_lang = document.querySelector(".drop-down-footer .en");
const sv_lang_desktop = document.querySelector(".desktop-info .sv");
const en_lang_desktop = document.querySelector(".desktop-info .en");

sv_lang.addEventListener("click", () => {
  addTranslations("sv");
  langSet = true;
});

en_lang.addEventListener("click", () => {
  addTranslations("en");
  langSet = true;
});
if (langSet === false) {
  addTranslations("sv");
}

sv_lang_desktop.addEventListener("click", () => {
  addTranslations("sv");
  langSet = true;
});

en_lang_desktop.addEventListener("click", () => {
  addTranslations("en");
  langSet = true;
});
if (langSet === false) {
  addTranslations("sv");
}

const input = document.querySelector("input");
const input2 = document.querySelector("input[type='email']");

/* if (langSet === true) {
  input.placeholder = "Enter email address";
  input2.placeholder = "Enter email address";
} else {
  input.placeholder = "Fyll i epostadress";
  input2.placeholder = "Fyll i epostadress";
}
 */
if (addTranslations === "en") {
  input.placeholder = "Enter email address";
  input2.placeholder = "Enter email address";
} else {
  input.placeholder = "Fyll i epostadress";
  input2.placeholder = "Fyll i epostadress";
}

console.log(langSet); //always false
