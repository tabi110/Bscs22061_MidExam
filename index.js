

document.addEventListener("DOMContentLoaded", () => {
    const userProfile = {
        name: "Tabish Raza",
        university: "ITU",
        fieldOfStudy: "Computer Science",
        imageSrc: "Untitled design.png",
        instagram: "https://www.instagram.com/tabish._.raza/",
        linkedIn: "https://www.linkedin.com/in/tabish-raza-6319a7252/",
        introText: "I am Tabish Raza, a Computer Science Student, currently studying at ITU."
    };

    document.getElementById("profile-intro").textContent = userProfile.introText;

    document.getElementById("banner-img").src = userProfile.imageSrc;

    document.getElementById("instagram-link").href = userProfile.instagram;
    document.getElementById("linkedin-link").href = userProfile.linkedIn;
});

function DarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
