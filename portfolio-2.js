// Active Navbar Section ---------

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});



// Dark Mode ----------

const modeBtn = document.querySelector(".mode-btn");

modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});





// Language Switch ---------

const langBtn = document.querySelector(".lang-btn");

let currentLang = "en";

const translations = {
  en: {
    logo: "Zeyad Ayman",
    navhome:"Home",
    navabout:"About",
    navskills:"Skills",
    navprojects:"Projects",
    navcontact:"Contact",
    
    heroh1:"Hi, Iam",
    heroName: "Zeyad Ayman",
    heroJob: "Front-End Developer",
    herop: "I specialize in building modern, responsive, and user-friendly websites with clean design and organized code.",
    buttoncv:"Download CV",
    buttoncontact:"Contact Me", 

    aboutTitle: "About Me",
    aboutP: "I am a front-end developer passionate about creating professional and visually appealing websites. I focus on writing clean, maintainable code and building responsive layouts that work perfectly on all devices.",

    skillsTitle: "Skills",
    skill1P: "Strong knowledge of semantic HTML and modern CSS techniques such as Flexbox and Grid to build clean, structured, and scalable layouts.",
    skill2h: "Responsive Design",
    skill2P: "Creating layouts that adapt smoothly to all screen sizes including desktops, tablets, and mobile devices.",
    skill3h: "Landing Pages",
    skill3P: "Designing effective landing pages focused on clarity, readability, and conversion to help promote products and services.",

    projectsTitle: "Projects",
    project1h: "Portfolio Website",
    project1p: "A personal portfolio website built using HTML,JavaScript and CSS showcasing skills, projects, and contact information.",
    project2h: "Landing Page",
    project2p: "A marketing landing page with a clean layout and responsive design optimized for user engagement.",
    project3h: "Business Website",
    project3p: "A simple business website for a small company with a modern UI and clear content structure.",
    viewproject:"View Project",

    contactTitle: "Contact",
    contactemail: "Email: user@gmail.com",
    contactphone: "Phone: 015 000 000 00",
    contactyourname:"Your Name",
    contactyourmail:"Your Email",
    contactyourmessage: "Your Message",
    contactsend: "Send Message",

    footer: "© 2026 Zeyad Ayman. All rights reserved."
  },

  ar: {
    logo:"زيادأيمن",
    navhome:"الرئيسية",
    navabout:"نبذة عني",
    navskills:"المهارات",
    navprojects:"المشاريع",
    navcontact:"تواصل معي",
    
    heroh1: "مرحبًا، أنا",
    heroName: "زياد أيمن",
    heroJob: "مطور واجهات أمامية",
    herop: "أنا متخصص في بناء مواقع ويب عصرية، سريعة الاستجابة، وسهلة الاستخدام بتصميم أنيق وبرمجة منظمة.",
    buttoncv:" تحميل السيرة الذاتية",
    buttoncontact:"تواصل معي",    


    aboutTitle: "نبذة عني",
    aboutP: "أنا مطور واجهات أمامية شغوف بإنشاء مواقع ويب احترافية وجذابة بصريًا. أركز على كتابة كود منظم وسهل التعديل، مع تصميمات متجاوبة تعمل بكفاءة على جميع الأجهزة.",

    skillsTitle: "المهارات",
    skill1P: "خبرة قوية في استخدام HTML الدلالي و CSS الحديثة مثل Flexbox و Grid لإنشاء صفحات منظمة وقابلة للتطوير.",
    skill2h: "تصميم متجاوب",
    skill2P: "إنشاء مواقع تتكيف بسلاسة مع جميع أحجام الشاشات بما في ذلك الهواتف والأجهزة اللوحية.",
    skill3h: "صفحات هبوط",
    skill3P: "تصميم صفحات هبوط فعالة تركز على الوضوح وتجربة المستخدم وزيادة التفاعل.",

    projectsTitle: "المشاريع",
    project1h: "موقع شخصي",
    project1p: "موقع Portfolio شخصي تم بناؤه باستخدام HTML و JavaScript و CSS  لعرض المهارات والمشاريع ووسائل التواصل.",
    project2h: "صفحة تسويقية",
    project2p: "صفحة هبوط تسويقية بتصميم نظيف ومتجاوب لزيادة التفاعل مع المستخدم.",
    project3h: "موقع شركة",
    project3p: "موقع بسيط لشركة صغيرة بتصميم عصري وهيكل محتوى واضح.",
    viewproject:"عرض المشروع",

    contactTitle: "تواصل معي",
    contactemail: "البريد الإلكتروني: user@gmail.com",
    contactphone: "الهاتف: <span dir='ltr'>015 000 000 00</span>",
    contactyourname:"الاسم",
    contactyourmail:"البريد الالكتروني",
    contactyourmessage: "الملاحظات",
    contactsend: "ارسال",

    footer: "© 2026 زياد أيمن – جميع الحقوق محفوظة"
  }
};


     //  زر تغيير اللغة ------------- 
langBtn.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "ar" : "en";

  document.documentElement.lang = currentLang;
  document.body.dir = currentLang === "ar" ? "rtl" : "ltr";
  langBtn.textContent = currentLang === "en" ? "EN" : "AR";

  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.dataset.key.replace("-", "");
    if (!translations[currentLang][key]) return;

    // Placeholder for textarea
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = translations[currentLang][key];
    }
    // باقي العناصر
    else {
      el.innerHTML = translations[currentLang][key];
    }
  });
});



// Back to top
window.addEventListener("scroll", () => {
  const btn = document.getElementById("backToTop");
  btn.classList.toggle("show", scrollY > 400);
});

document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});



// Skill and Projects card - Scroll
let isScrolling = false;
let scrollTimer;

window.addEventListener("scroll", () => {
  isScrolling = true;
  clearTimeout(scrollTimer);

  scrollTimer = setTimeout(() => {
    isScrolling = false;
  }, 150);
});

document.querySelectorAll(".skill-card, .project-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    if (!isScrolling) {
      card.classList.add("hover-active");
    }
  });
  
  card.addEventListener("mouseleave", () => {
    card.classList.remove("hover-active");
  });
});





// Form - Contact -------------------
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.querySelector('input[type="text"]');
  const email = form.querySelector('input[type="email"]');
  const message = form.querySelector("textarea");

  // Check all cells not empty
  if (
    name.value.trim() === "" ||
    email.value.trim() === "" ||
    message.value.trim() === ""
  ) {
    alert(
      document.body.dir === "rtl"
        ? "من فضلك املأ جميع الخانات"
        : "Please fill in all fields"
    );
    return;
  }

  // Send Message
  setTimeout(() => {
    alert(
      document.body.dir === "rtl"
        ? "تم إرسال رسالتك بنجاح ✅"
        : "Your message has been sent successfully ✅"
    );

    // Clear Form
    form.reset();

    // Reset the view
    form.scrollIntoView({ behavior: "smooth" });
  }, 800);
});
