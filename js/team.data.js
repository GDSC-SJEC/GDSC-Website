/* ********************************************************** */
// Members Details Data Object
/* ********************************************************** */

// Lead Member Details
let leadMemberDetails = [
  {
    id: 1,
    name: "Pragnya Nagure",
    avatar: "../assets/img/team/4SO19CS110.jpg",
    designation: `<span>GDSC Lead</span>`,
    description: 'An enthusiastic engineering undergraduate with problem solving, project and team managing abilities. Passionate about coding, backend development and game development. Always on a lookout for better means to gain knowledge and improve my skills through contribution.',
    emailLink: "pragnya.nagure2002@gmail.com",
    linkedinLink: "https://www.linkedin.com/in/pragnya-nagure/",
    githubLink: "https://github.com/xxpsynagure",
  },
];

// Core Members Details
let coreMemberDetails = [
  {
    id: 1,
    name: "Ashish Kishore Kumar",
    avatar: "../assets/img/team/4SO19CS027.png",
    designation: `<span>Game Development Lead</span>`,
    description: `I'm an aspiring Unity Game Developer from India. I love playing games  and am currently developing games in Unity and exploring each genre with each personal project I build.`,
    emailLink: "ashishkishore0812@gmail.com",
    linkedinLink: "https://www.linkedin.com/in/ashish-kishore-kumar/",
    githubLink: "https://github.com/Ashish4869",
  },
  {
    id: 2,
    name: "Godnon Dsilva",
    avatar: "../assets/img/team/4SO19CS056.jpg",
    designation: `<span>Web Lead</span>`,
    description: `Hi, I'm a Full Stack Developer, specializing in JavaScript and Python. I enjoy building everything from small business apps to interactive web apps.`,
    emailLink: "godnondsilva@gmail.com",
    linkedinLink: "https://www.linkedin.com/in/godnon-dsilva",
    githubLink: "https://github.com/godnondsilva",
  },
  {
    id: 3,
    name: "Avinash Murali",
    avatar: "../assets/img/team/4SO19CS034.jpg",
    designation: `<span>UI/UX Lead</span>`,
    description: 'I like watching anime and creating apps with cool aesthetics and design',
    emailLink: "avinashmuralidharan2@gmail.com",
    linkedinLink: "https://www.linkedin.com/in/avinash-muralidharan-75b1a9226",
    githubLink: "https://github.com/avi7501",
  },
  {
    id: 4,
    name: "Pravin Kumar",
    avatar: "../assets/img/team/4SO19CS119.jpg",
    designation: `<span>AI/ML Lead</span>`,
    description: `Hi, I'm a Python developer with a zest for new technologies. My study is focused on Machine Learning and Deep Learning.`,
    emailLink: "19cs119.pravin@sjec.ac.in",
    linkedinLink: "https://www.linkedin.com/in/pravin--kumar/",
    githubLink: "https://github.com/pravin-pk",
  },
  {
    id: 5,
    name: "Yashas Ip",
    avatar: "../assets/img/team/4SO19CS180.jpg",
    designation: `<span>Competitive Programming Lead</span>`,
    description: `Hi, I'm a developer who loves fixing complex problems with code.I started out as an eager individual who wanted to learn more about the things that could be done with computers.I've spent a lot of time coding and trying to figure out what good code feels like. I'm always happy to answer any questions you might have.`,
    emailLink: "19cs180.yashas@sjec.ac.in",
    linkedinLink: "https://www.linkedin.com/in/yashas-ip-4926641b4/",
    githubLink: "https://github.com/yashasip",
  },
  {
    id: 6,
    name: "Pratheek R",
    avatar: "../assets/img/team/4SO19CS116.jpeg",
    designation: `<span>Mobile Lead</span>`,
    description: 'Hi, I am an android developer focused on building apps according to the innovative and growing needs of the users. My areas of intrest include flutter and kotlin.',
    emailLink: "r.pratheek01@gmail.com",
    linkedinLink: "https://www.linkedin.com/in/pratheek-raghunath/",
    githubLink: "https://github.com/pratheek-raghunath",
  },
  {
    id: 7,
    name: "Oren Saldanha",
    avatar: "../assets/img/team/4SO19CS105.jpg",
    designation: `<span>Cloud Lead</span>`,
    description: `Hi, I'm a backend developer with a deep interest in building systems.I'm currently learning about cloud native technologies.`,
    emailLink: "orensaldanha@gmail.com",
    linkedinLink: "https://www.linkedin.com/in/orensaldanha/",
    githubLink: "https://github.com/orensaldanha",
  },
  {
    id: 8,
    name: "Adithya K Shetty",
    avatar: "../assets/img/team/4SO19CS007.png",
    designation: `<span>Developer</span>`,
    description: 'Hi there i am a developer(web/app/ui/ux), I like to explore different fields of software development & like to work with different tech stacks',
    emailLink: "4so19cs007.adithya@sjec.ac.in",
    linkedinLink: "https://www.linkedin.com/in/adithya-k-shetty-107842190",
    githubLink: "https://github.com/Adithya-K-Shetty",
  },
  {
    id: 9,
    name: "Errol Ken Pereira",
    avatar: "../assets/img/team/4SO19CS050.jpg",
    designation: `<span>Developer</span>`,
    description: 'Avid developer actively looking for opportunities in the field of Web Development and graphic designing',
    emailLink: "errolkenpereira@gmail.com",
    linkedinLink: "https://www.linkedin.com/in/errol-ken-pereira",
    githubLink: "https://github.com/Errolken",
  }
];

/* ********************************************************** */
// Members Preview Mapping
/* ********************************************************** */

let leadMember = document.querySelector("#lead");
let coreMember = document.querySelector("#core");

// Lead Member
Object.values(leadMemberDetails).map((val) => {
  leadMember.innerHTML += `
        <div class="profile_card" onclick="toggleModal('lead', '${val.name}')">
            <img src="${val.avatar}" alt="Profile Img" />
            <h4 class="lg">${val.name}</h4>
            <p>${val.designation}</p>

            <div class="social">
                <a href="${val.emailLink}"><i class="bx bxl-github"></i></a>
                <a href="${val.linkedinLink}"><i class="bx bxl-linkedin"></i></a>
                <a href="${val.githubLink}"><i class="bx bxl-twitter"></i></a>
            </div>
        </div>
    `;
});

// Core Members
Object.values(coreMemberDetails).map((val) => {
  coreMember.innerHTML += `
        <div class="profile_card" onclick="toggleModal('core', '${val.name}')">
            <img src="${val.avatar}" alt="Profile Img" />
            <h4>${val.name}</h4>
            <p>${val.designation}</p>

            <div class="social">
                <a href="${val.emailLink}"><i class="bx bxl-github"></i></a>
                <a href="${val.linkedinLink}"><i class="bx bxl-linkedin"></i></a>
                <a href="${val.githubLink}"><i class="bx bxl-twitter"></i></a>
            </div>
        </div>
    `;
});

let popupVisible = false;

function toggleModal(type, name) {
  let guidePopup = document.getElementById("modal-container");
  let modal_image = document.getElementById("image")
  let modal_name = document.getElementById("modal-name");
  let modal_designation = document.getElementById("modal-designation")
  let modal_description = document.getElementById("modal-description")

  let modal_email = document.getElementById("modal-email")
  let modal_linkedin = document.getElementById("modal-linkedin")
  let modal_github = document.getElementById("modal-github")
  let person;
  if (type === 'lead') {
    person = Object.values(leadMemberDetails)[0]
  } else {
    person = Object.values(coreMemberDetails).filter((val) => val.name === name)[0]
  }

  if (popupVisible) {
    guidePopup.style.display = "none";
    document.getElementById("overlay").style.visibility = 'hidden';
    popupVisible = false;
  } else {
    modal_name.innerHTML = person.name;
    modal_image.src = person.avatar;
    modal_designation.innerHTML = person.designation;
    modal_description.innerHTML = person.description;
    modal_email.href = `mailto:${person.emailLink}`
    modal_linkedin.href = person.linkedinLink
    modal_github.href = person.githubLink

    guidePopup.style.display = "block";
    document.getElementById("overlay").style.visibility = 'visible';
    popupVisible = true;
  }
}