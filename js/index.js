const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
document.getElementById("logo-img").setAttribute('src', siteContent["nav"]["img-src"])
let nav = document.querySelector('.container header nav');
let navList = nav.querySelectorAll('a');
let counter = 1;
console.log(navList);
navList.forEach((current) => {
  current.innerText = siteContent["nav"][`nav-item-${counter}`];
  counter++;
});
let newNavItem1 = document.createElement('a').setAttribute('href', "#").innerText = "First JS Child";
let newNavItem2 = document.createElement('a').setAttribute('href', "#").innerText = "Second JS Child";
nav.prepend(newNavItem1);
nav.appendChild(newNavItem2);
let splitItem = siteContent["cta"]["h1"].split(" ");
document.querySelector('.container .cta .cta-text h1').innerHTML = `${splitItem[0]}<br>${splitItem[1]}<br>${splitItem[2]}`;
document.querySelector('.container .cta .cta-text button').innerText = siteContent["cta"]["button"];
document.getElementById('cta-img').setAttribute('src', siteContent["cta"]["img-src"]);
let topText = document.querySelectorAll('.container .main-content .top-content .text-content');
console.log(topText);
topText[0].querySelector("h4").innerHTML = `${siteContent["main-content"]["features-h4"]}`;
topText[0].querySelector("p").innerHTML = `${siteContent["main-content"]["features-content"]}`;
topText[1].querySelector("h4").innerHTML = `${siteContent["main-content"]["about-h4"]}`;
topText[1].querySelector("p").innerHTML = `${siteContent["main-content"]["about-content"]}`;
document.querySelector('.middle-img').setAttribute('src', siteContent["main-content"]["middle-img-src"]);
let bottomText = document.querySelectorAll('.container .main-content .bottom-content .text-content');
bottomText[0].querySelector("h4").innerHTML = `${siteContent["main-content"]["services-h4"]}`;
bottomText[0].querySelector("p").innerHTML = `${siteContent["main-content"]["services-content"]}`;
bottomText[1].querySelector("h4").innerHTML = `${siteContent["main-content"]["product-h4"]}`;
bottomText[1].querySelector("p").innerHTML = `${siteContent["main-content"]["product-content"]}`;
bottomText[2].querySelector("h4").innerHTML = `${siteContent["main-content"]["vision-h4"]}`;
bottomText[2].querySelector("p").innerHTML = `${siteContent["main-content"]["vision-content"]}`;
let addrSplit = siteContent["contact"]["address"].split(" ");
let contactHTML = `<h4>${siteContent["contact"]["contact-h4"]}</h4><p>${addrSplit[0]} ${addrSplit[1]} ${addrSplit[2]} ${addrSplit[3]}<br>${addrSplit[4]} ${addrSplit[5]}</p><p>${siteContent["contact"]["phone"]}</p><p>${siteContent["contact"]["email"]}</p>`;
document.querySelector('.container .contact').innerHTML = contactHTML;
document.querySelector('.container footer').innerHTML = `<p>${siteContent["footer"]["copyright"]}</p>`