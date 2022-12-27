import emoji from "react-easy-emoji";

export const greetings = {
	name: "Fernando Joost",
	title: "Hi, I'm Fernando! 👋🏻",
	description:
		"I'm passionate Full Stack web developer having an experience of web applications with Django, Laravel & Vue.js, and from now Im learning Blockchain development with Solidity!",
	resumeLink:
		"https://drive.google.com/file/d/13ma_dq6qyK9t-Akdum13tg6SjUse6tFA/view?usp=sharing",
};

export const openSource = {
	githubUserName: "fjoost",
};

export const contact = {};

export const socialLinks = {
	url: "https://fjoost.github.io/",
	linkedin: "https://www.linkedin.com/in/fjoost/",
	github: "https://github.com/fjoost",
	instagram: "https://www.instagram.com/fjoost_",
	facebook: "https://www.facebook.com/fjoostr",
	twitter: "https://twitter.com/fernando_joost",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in Vue.js"
				),
				emoji(
					"⚡ Building RESTful APIs in Django & Django REST Framework"
				),
				emoji(
					"⚡ Building RESTful APIs in Laravel Framework"
				),
				emoji(
					"⚡ Building & managing WordPress Websites for clients"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "VueJS",
					fontAwesomeClassname: "logos:vue",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Django",
					fontAwesomeClassname: "vscode-icons:file-type-django",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "PHP",
					fontAwesomeClassname: "logos:php",
				},
				{
					skillName: "Laravel",
					fontAwesomeClassname: "logos:laravel",
				},
				{
					skillName: "WordPress",
					fontAwesomeClassname: "logos:wordpress-icon",
				},
			],
		},
		{
			title: "Data Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working with Docker containers, Nginx service & PostgreSQL Databases"),
				emoji(
					"⚡ Experience of working with TBD & GitFlow in GitHub/GitLab repositories"
				),
			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "logos:postgresql",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				{
					skillName: "Nginx",
					fontAwesomeClassname: "logos:nginx",
				},
				{
					skillName: "Gitlab",
					fontAwesomeClassname: "logos:gitlab",
				},
			],
		},
		{
			title: "Blockchain",
			lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Learning to develop Smart Contract using Solidity & Ethereum"
				)
			],
			softwareSkills: [
				{
					skillName: "Ethereum",
					fontAwesomeClassname: "logos:ethereum",
				},
				{
					skillName: "Solidity",
					fontAwesomeClassname: "logos:solidity",
				},
				{
					skillName: "Metamask",
					fontAwesomeClassname: "logos:metamask-icon",
				},
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "60", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "70",
	},
];

export const educationInfo = [
	{
		schoolName: "Inacap",
		subHeader: "Computer Science Engineering",
		duration: "March 2017 - December 2020",
		desc: "2nd place at Go! Innova Challenge, 2019 edition",
		grade: "Degree in Computer Science",
		descBullets: [
			
		],
	},
];

export const experience = [
	{
		role: "FullStack Developer",
		company: "UAysen",
		companylogo: "/img/icons/common/uaysen-nuevo-1.png",
		date: "Jun 2022 – Dec 2022",
		// desc: "I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.",
	},
	{
		role: "FullStack Developer",
		company: "Servicio de Salud de Aysén",
		companylogo: "/img/icons/common/logo-ssa.jpg",
		date: "May 2021 – May 2022",
		// desc: "I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.",
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
	{
		role: "TI Analyst",
		company: "Aguas Patagonia",
		companylogo: "/img/icons/common/aguaspatagonia.jpeg",
		date: "Jan 2017 - Mar 2021",
		// desc: "Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.",
	},
];

export const projects = [
	/* {
		name: "developer-portfolio",
		desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
		github: "",
		link: "",
	},
	{
		name: "AtlasMart",
		desc: "With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.",
		github: "",
	},
	{
		name: "Technota (Forum)",
		desc: "Get hands-on experience in technical skills with Technota",
		github: "",
	},
	{
		name: "Shopaza (Ecommerce)",
		desc: "Now your reach to all your favorite entertainment and luxury items is just one touch apart",
		github: "",
	}, */
];

export const feedbacks = [
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
];

// option to hide or show the ContactUs component
export const showContactUs = true;

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Fernando Joost",
	description:
		"Full Stack Web Developer | Soon in Blockchain Development.",
	author: "Fernando Joost",
	image: "https://avatars.githubusercontent.com/u/37663304?v=4",
	url: "https://fjoost.github.io/",
	keywords: [
		"Fernando",
		"Fernando Joost",
		"fjoost",
		"fdo_fjoost",
		"Portfolio",
		"Portafolio",
		"Fernando Portfolio ",
		"Fernando Portafolio ",
		"Fernando Joost Portfolio",
		"Fernando Joost Portafolio",
		"fjoost Portfolio",
		"fjoost Portafolio",
	],
}
