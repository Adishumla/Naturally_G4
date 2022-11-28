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

    "shirt-text": "Charlie",
    "shirt-material": "Återvunnet material",
    "shirt-price": "1 024:-",

    "shoe-text": "Billie",
    "shoe-material": "Återvunnet material",
    "shoe-price": "1 024:-",

    "jacket-text": "Kjol",
    "jacket-material": "Återvunnet material",
    "jacket-price": "1 024:-",

    "dress-name": "Arie",
    "dress-material": "Återvunnet material",
    "dress-price": "1 024:-",

    "discount-text-long": "Bli medlem och få 10% rabatt på ditt första köp",

    "footer-contact": "Kontakt",
    "footer-faq": "FAQ",
    "footer-about": "Om oss",
    "footer-support": "Support",
    "footer-careers": "Karriär",
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

    "shirt-text": "Charlie",
    "shirt-material": "Recycled material",
    "shirt-price": "102:-",

    "shoe-text": "Billie",
    "shoe-material": "Recycled material",
    "shoe-price": "102:-",

    "jacket-text": "Dress",
    "jacket-material": "Recycled material",
    "jacket-price": "102:-",

    "dress-name": "Arie",
    "dress-material": "Recycled material",
    "dress-price": "102:-",

    "discount-text-long": "Become a member and get 10% off your first purchase",

    "footer-contact": "Contact",
    "footer-faq": "FAQ",
    "footer-about": "About us",
    "footer-support": "Support",
    "footer-careers": "Careers",
  },
  fr: {
    "hero-title": "Bonjour",
    "hero-subtitle": "a shorter text here",
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
