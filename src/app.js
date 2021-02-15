console.log("app.js running");
const program = {
  name: "V5 Responsive UI",
  logo: "https://www.rewardtrax.com/brandeddemo15/images/CloudLogo.png",
};

const navitems = [
  {
    id: 0,
    name: "Welcome",
    path: "./welcome.html",
    public: false,
    footer: false,
    showInNav: true,
  },
  {
    id: 1,
    name: "Quick Points",
    path: "./quick-points.html",
    public: false,
    footer: false,
    showInNav: true,
  },
  {
    id: 2,
    name: "My Account",
    path: "./my-account.html",
    public: false,
    footer: false,
    showInNav: true,
  },
  {
    id: 3,
    name: "Performance Tracking",
    path: "./performance-tracking.html",
    public: false,
    footer: false,
    showInNav: true,
  },
  {
    id: 4,
    name: "Leaderboard",
    path: "./leaderboard.html",
    public: false,
    footer: false,
    showInNav: true,
  },
  {
    id: 5,
    name: "Learn & Earn",
    path: "./learn-n-earn.html",
    public: false,
    footer: false,
    showInNav: true,
  },
  {
    id: 6,
    name: "Profile",
    path: "./profile.html",
    public: false,
    footer: false,
    showInNav: true,
  },
  {
    id: 7,
    name: "Shopping",
    path: "./shopping.html",
    public: false,
    footer: false,
    showInNav: true,
  },
  {
    id: 8,
    name: "Contact",
    path: "./contact.html",
    public: false,
    footer: false,
    showInNav: true,
  },
  {
    id: 9,
    name: "All Wall",
    path: "./allwall.html",
    public: false,
    footer: true,
    showInNav: true,
  },
  {
    id: 10,
    name: "FAQ",
    path: "./faq.html",
    public: false,
    footer: true,
    showInNav: true,
  },
  {
    id: 11,
    name: "Terms",
    path: "./terms.html",
    public: false,
    footer: true,
    showInNav: true,
  },
  {
    id: 12,
    name: "Privacy",
    path: "./privacy.html",
    public: false,
    footer: true,
    showInNav: true,
  },
  {
    id: 13,
    name: "Rules",
    path: "./rules.html",
    public: false,
    footer: true,
    showInNav: true,
  },
  {
    id: 14,
    name: "Communications",
    path: "./communications.html",
    public: false,
    footer: true,
    showInNav: true,
  },
  {
    id: 15,
    name: "Clients",
    path: "./clients.html",
    public: false,
    footer: true,
    showInNav: true,
  },
  {
    id: 16,
    name: "Who We Are",
    path: "./whoweare.html",
    public: false,
    footer: true,
    showInNav: true,
  },
  {
    id: 17,
    name: "Modules",
    path: "./modules.html",
    public: false,
    footer: true,
    showInNav: true,
  },
  {
    id: 18,
    name: "App",
    path: "./app.html",
    public: false,
    footer: true,
    showInNav: true,
  },
  {
    id: 19,
    name: "Log Out",
    path: "./login.html",
    public: false,
    footer: true,
    showInNav: true,
  },
  {
    id: 20,
    name: "Login",
    path: "./login.html",
    public: false,
    footer: true,
    showInNav: false,
  },
  {
    id: 21,
    name: "Forgot Password",
    path: "./forgot-password.html",
    public: false,
    footer: true,
    showInNav: false,
  },
  {
    id: 22,
    name: "Forgot Password",
    path: "./forgot-password-confirmation.html",
    public: false,
    footer: true,
    showInNav: false,
  },
  {
    id: 23,
    name: "Order Detail",
    path: "./transaction-order-detail.html",
    public: false,
    footer: false,
    showInNav: false,
  },
  {
    id: 24,
    name: "Claim Detail",
    path: "./claim-detail.html",
    public: false,
    footer: false,
    showInNav: false,
  },
];

// Load program data

function getProgramInfo() {
  let programLogo = document.getElementById("program-logo");
  programLogo.setAttribute("src", program.logo);
}

getProgramInfo();

// Populate Navigation
function logNavitems() {
  //   console.log(navitems);
  let headerNavList = document.querySelector(".header-nav");
  let footerNavList = document.querySelector(".footer-nav");
  for (i = 0; i < navitems.length; i++) {
    let navlistitem = `<li class="nav-item"><a class="nav-link" href="/dist/screens/${navitems[i].path}"> ${navitems[i].name}</a></li>`;
    // console.log(navlistitem);

    if (navitems[i].showInNav) {
      if (!navitems[i].footer) {
        headerNavList.innerHTML += navlistitem;
      } else {
        footerNavList.innerHTML += navlistitem;
      }
    }
  }
}

logNavitems();

// Populate screen titles
function fillScreenTitle() {
  let currLoc = window.location.href;
  for (i = 0; i < navitems.length; i++) {
    // console.log(currLoc, navitems[i].path);
    let newPath = navitems[i].path.substring(2);

    if (currLoc.includes(newPath)) {
      //   console.log(navitems[i].name);
      document.getElementById("screen-title").innerText = navitems[i].name;
    }
  }
}

fillScreenTitle();
