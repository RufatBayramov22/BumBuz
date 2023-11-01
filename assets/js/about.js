const translate= {
    en:{
    aboutTitle:"About Us",
    infoTitle:"Title",
    infoDescription:"The company uses proven solutions to ensure the ideal ice condition for customers. They have special cooling and humidity control systems to ensure high quality ice. The company offers a wide range of ice, including cubes, crushed ice, ice cubes and filtered water. They can also make custom orders to suit any need.The company provides programs for regular customers and wholesale buyers so that customers can get the best prices and conditions. They have many ice and filtered water outlets throughout the city and guarantee fast delivery within a few hours. In addition, the company guarantees the quality and freshness of its products.Don't wait any longer, order Bum Buz ice and filtered water today and enjoy the perfect ice and water for every need!",
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
    ru:{
      aboutTitle:"О нас",
      infoTitle:"Заголовок",
      infoDescription:"Компания использует проверенные решения для обеспечения идеального состояния льда для клиентов. Они имеют специальные системы охлаждения и контроля влажности для обеспечения высокого качества льда. Компания предлагает широкий ассортимент льда, включая кубики, дробленый лед, кубики льда и фильтрованную воду. Они также могут сделать индивидуальный заказ, чтобы удовлетворить любые потребности.Компания предоставляет программы для постоянных клиентов и оптовых покупателей, чтобы клиенты могли получить лучшие цены и условия. У них много точек продажи льда и фильтрованной воды по всему городу, и они гарантируют быструю доставку в течение нескольких часов. Кроме того, компания гарантирует качество и свежесть своей продукции.Не ждите больше, закажите лед и фильтрованную воду Bum Buz сегодня и наслаждайтесь идеальным льдом и водой для любых нужд!",
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
    az:{
      aboutTitle:"Haqqımızda",
      infoTitle:"Başlıq",
      infoDescription:"Şirkət müştərilər üçün ideal buz vəziyyətini təmin etmək üçün sübut edilmiş həllərdən istifadə edir. Onlar yüksək keyfiyyətli buz təmin etmək üçün xüsusi soyutma və rütubətə nəzarət sistemlərinə malikdirlər. Şirkət kublar, əzilmiş buz, buz kubları və süzülmüş su da daxil olmaqla geniş çeşiddə buz təklif edir. İstənilən ehtiyaca uyğun olaraq fərdi sifarişlər də edə bilərlər.Şirkət daimi müştərilər və topdan alıcılar üçün proqramlar təqdim edir ki, müştərilər ən yaxşı qiymətləri və şərtləri əldə edə bilsinlər. Onların şəhər boyu çoxlu buz və süzülmüş su çıxışları var və bir neçə saat ərzində sürətli çatdırılmaya zəmanət verirlər. Bundan əlavə, şirkət məhsullarının keyfiyyətinə və təzəliyinə zəmanət verir.Artıq gözləməyin, Bum Buz buzunu və süzülmüş suyu bu gün sifariş edin və hər ehtiyac üçün mükəmməl buz və sudan həzz alın!",
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
  }
  function changeLang(lang) {
    const headerTitleElement=document.querySelector(".navItem a")
    const aboutTitleElement=document.querySelector(".aboutTitle h2")
    const infoTitleElement=document.querySelector('.infoTitle h2')
    const infoDescriptionElement=document.querySelector('.infoTitle p')
    const contactTitleElement=document.querySelector('.title h2')
    const locationsElement = document.querySelector('.location p');
    const phoneElement = document.querySelector('.phone p');
    const subscribeElement = document.querySelector('.rightContact p');
    const emailInput = document.querySelector('.rightContact input[type="email"]');
    const sendButton = document.querySelector('.rightContact button');
    const addressElement = document.querySelector('.locations');
    const phoneNumberElement = document.querySelector('.contact a');
    const footerTextElement = document.querySelector('.footer p');
    if(translate[lang]){
    infoDescriptionElement.textContent=translate[lang].infoDescription
    infoTitleElement.textContent=translate[lang].infoTitle
    headerTitleElement.textContent=translate[lang].aboutTitle
      aboutTitleElement.textContent=translate[lang].aboutTitle
      locationsElement.textContent = translate[lang].locations;
      phoneElement.textContent = translate[lang].phone;
      subscribeElement.textContent = translate[lang].subscribe;
      emailInput.placeholder = translate[lang].emailPlaceholder;
      sendButton.textContent = translate[lang].sendButton;
      addressElement.textContent = translate[lang].address;
      phoneNumberElement.textContent = translate[lang].phoneNumber;
      footerTextElement.textContent = translate[lang].footerText;
      contactTitleElement.textContent=translate[lang].contactTitle
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