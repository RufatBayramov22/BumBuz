var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
  });

  function toggleBurgerMenu() {
    const mainMenu = document.querySelector('.mainMenu');
    const burgerMenuIcon = document.querySelector('.burger-menu-icon');
  
    mainMenu.classList.toggle('active');
    burgerMenuIcon.classList.toggle('active');
  }
  
  // Add click event listener to the burger menu icon
  const burgerMenuIcon = document.querySelector('.burger-menu-icon');
  burgerMenuIcon.addEventListener('click', toggleBurgerMenu);



  const translations = {
    en: {
      headerTitle:"About Us",
      homeTitle: 'Cold magic in every cube of ice!',
      contactUs: 'Contact Us',
      provenSolutionsTitle: 'Proven solutions.',
      provenSolutionsDesc:"Provide profitable loyalty programs for regular customers and wholesale buyers",
      provenSolutionDescript:"Have special cooling and humidity control systems to ensure ice quality",           
      provenSolutionsDescription:" Use proven ice solutions to ensure the perfect ice condition for customers",
      provenSolutionsText: 'Whether you need ice for a house party, restaurant, ice rink or sporting event, we guarantee that our ice will meet the highest quality standards.',
      whyChooseUs: 'Why choose us?',
      productTitle: 'Products',
      whereToBuy: 'Where to buy.',
      locations: 'Locations',
      phone: 'Phone',
      subscribe: 'Subscribe to be informed!',
      emailPlaceholder: 'E-mail...',
      sendButton: 'Send',
      address: 'Hasanoghlu 4a, Baku, Azerbaijan',
      phoneNumber: '+994-55-555-55-55',
      footerText: '© All Rights Reserved. Baki Buz fabriki.',
      contactTitle:'Contact Us'
    },
    ru: {
      headerTitle:'О нас',
      homeTitle: 'Холодная магия в каждом кубике льда!',
      contactUs: 'Свяжитесь с нами',
      provenSolutionsTitle: 'Доказанные решения.',
      provenSolutionsDesc:"Проведение выгодных программ лояльности для постоянных клиентов и оптовых покупателей",
      provenSolutionDescript:"Иметь специальные системы охлаждения и контроля влажности для обеспечения качества льда",
      provenSolutionsDescription:"Используйте проверенные решения для льда, чтобы обеспечить идеальное состояние льда для клиентов",
      provenSolutionsText: 'Будь то лед для домашней вечеринки, ресторана, катка или спортивного мероприятия, мы гарантируем, что наш лед соответствует самым высоким стандартам качества.',
      whyChooseUs: 'Почему выбрать нас?',
      productTitle: 'Продукты',
      whereToBuy: 'Где купить.',
      locations: 'Местоположение',
      phone: 'Телефон',
      subscribe: 'Подпишитесь, чтобы быть в курсе!',
      emailPlaceholder: 'E-mail...',
      sendButton: 'Отправить',
      address: 'Гасаноглу 4а, Баку, Азербайджан',
      phoneNumber: '+994-55-555-55-55',
      footerText: '© Все права защищены. Баки Буз фабрики.',
      contactTitle:"Связаться с нами"
    },
    az: {
      headerTitle:"Bizim haqqımızda",
      homeTitle: 'Hər buz kubuğunda soyuğun sihiri!',
      contactUs: 'Bizimlə Əlaqə',
      provenSolutionsTitle: 'Təsdiq edilmiş həllər.',
      provenSolutionsDesc:"Daimi müştərilər və topdansatış alıcılar üçün sərfəli loyallıq proqramları təqdim edin",
      provenSolutionDescript:"Buz keyfiyyətini təmin etmək üçün xüsusi soyutma və rütubətə nəzarət sistemlərinə sahib olun",
      provenSolutionsDescription:"Müştərilər üçün mükəmməl buz vəziyyətini təmin etmək üçün sübut edilmiş buz həllərindən istifadə edin",
      provenSolutionsText: 'Ev tədbirinə, restoran, buz rink və ya idman tədbirinə buzu lazım olsa da, biz təmin edirik ki, buzumuz ən yüksək keyfiyyət standartlarına cavab verəcəkdir.',
      whyChooseUs: 'Bizi niyə seçməlisiniz?',
      productTitle: 'Məhsullar',
      whereToBuy: 'Haradan almaq olar.',
      locations: 'Məkanlar',
      phone: 'Telefon',
      subscribe: 'Xəbərdar olmaq üçün abunə olun!',
      emailPlaceholder: 'E-poçt...',
      sendButton: 'Göndər',
      address: 'Həsənoğlu 4a, Bakı, Azərbaycan',
      phoneNumber: '+994-55-555-55-55',
      footerText: '© Bütün hüquqlar qorunur. Baki Buz fabriki.',
      contactTitle:'Bizimlə əlaqə saxlayın'
    }
  };
  
  function changeLanguage(language) {
    const headerTitleElement=document.querySelector('.navItem a')
    const homeTitleElement = document.querySelector('.homeInfo h1');
    const contactUsLink = document.querySelector('.homeInfo a');
    const provenTitleElement = document.querySelector('.provenTitle .title');
    const provenDescElement=document.querySelector('.qualityIcon p')
    const provenDesciptElement=document.querySelector('.wawesIcon p')
    const provenDescriptionElement=document.querySelector('.dropIcon p');
    const provenTextElement = document.querySelector('.provenTitle .text');
    const whyChooseUsElement = document.querySelector('.sliderTitle h2');
    const productTitleElement = document.querySelector('.productTitle .title');
    const whereToBuyElement = document.querySelector('.deliveryContent .title');
    const contactTitleElement=document.querySelector('.title .contactTitle')
    const locationsElement = document.querySelector('.location p');
    const phoneElement = document.querySelector('.phone p');
    const subscribeElement = document.querySelector('.rightContact p');
    const emailInput = document.querySelector('.rightContact input[type="email"]');
    const sendButton = document.querySelector('.rightContact button');
    const addressElement = document.querySelector('.locations');
    const phoneNumberElement = document.querySelector('.contact a');
    const footerTextElement = document.querySelector('.footer p');
    
    if (translations[language]) {
      headerTitleElement.textContent=translations[language].headerTitle
      homeTitleElement.textContent = translations[language].homeTitle;
      contactUsLink.textContent = translations[language].contactUs;
      provenTitleElement.textContent = translations[language].provenSolutionsTitle;
      provenDescElement.textContent=translations[language].provenSolutionsDesc;
      provenDesciptElement.textContent=translations[language].provenSolutionDescript
      provenDescriptionElement.textContent=translations[language].provenSolutionsDescription
      provenTextElement.textContent = translations[language].provenSolutionsText;
      whyChooseUsElement.textContent = translations[language].whyChooseUs;
      productTitleElement.textContent = translations[language].productTitle;
      whereToBuyElement.textContent = translations[language].whereToBuy;
      locationsElement.textContent = translations[language].locations;
      phoneElement.textContent = translations[language].phone;
      subscribeElement.textContent = translations[language].subscribe;
      emailInput.placeholder = translations[language].emailPlaceholder;
      sendButton.textContent = translations[language].sendButton;
      addressElement.textContent = translations[language].address;
      phoneNumberElement.textContent = translations[language].phoneNumber;
      footerTextElement.textContent = translations[language].footerText;
      contactTitleElement.textContent=translations[language].contactTitle
    }
  }

const translate= {
  en:{
  aboutTitle:"About Us"
  },
  ru:{
    aboutTitle:"О нас"
  },
  az:{
    aboutTitle:"Bizim haqqımızda"
  } 
}
function changeLang(lang) {
  const aboutTitleElement=document.querySelector(".aboutTitle h2")
  if(translate[lang]){
    aboutTitleElement.textContent=translate[lang].aboutTitle
  }
}

//form
const form = document.querySelector("#form");
const email = document.querySelector("#email");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value.length < 4) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "E-mail is not set!",
      footer: '<a href="">Why do I have this issue?</a>',
    });
  }else {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Your request has been accepted",
      showConfirmButton: false,
      timer: 1500,
    });
  }
});
