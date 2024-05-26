import { v4 as uuidv4 } from 'uuid';
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const projectsData = [
	{
		id: 1,
		title: 'Farm Tech Backend',
		url: 'farm-tech-backend',
		category: 'Backend Development',
		img: '/images/web-project-2.jpg',
		GitHubLink:'https://github.com/HaRsH8747/GoVoice-Backend',
		ProjectHeader: {
			title: 'Farm Tech Backend',
			publishDate: 'Jan 2024 – Apr 2024',
			tags: 'Backend Development',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Farm Tech Backend',
				img: '/images/ui-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Farm Tech Backend',
				img: '/images/web-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Farm Tech Backend',
				img: '/images/mobile-project-2.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'University of Windsor',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'Web Development',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://uwindsor.ca',
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: '555 8888 888',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Engineered a scalable backend system using Python and Django, implementing RESTful API',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Python',
						'PostgreSQL',
						'Django Rest Framework',
						'scikit-learn',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Implemented a crop recommendation system using scikit-learn\'s Random Forest algorithm and Python for personalized crop suggestions based on environmental and regional data with 90% accuracy',
				},
			],
			SocialSharingHeading: 'Share This',
		},
	},
	{
		id: 2,
		title: 'Farm Tech',
		url: 'farm-tech',
		category: 'Web Application',
		img: '/images/mobile-project-2.jpg',
		GitHubLink:'https://github.com/HaRsH8747/farm-tech-frontend',
		ProjectHeader: {
			title: 'Farm Tech',
			publishDate: 'Jan 2024 – Apr 2024',
			tags: 'Frontend Development',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Farm Tech',
				img: '/images/ui-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Farm Tech',
				img: '/images/web-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Farm Tech',
				img: '/images/mobile-project-2.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'University of Windsor',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'UI Design & Frontend Development',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://uwindsor.ca',
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: '555 8888 888',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'A combined collaborative platform for farmers offers solutions such as land partnership, post-harvest storage, and personalized crop recommendations',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'ReactJS',
						'Tailwind CSS',
						'HTML',
						'CSS',
						'JavaScript',
						'Axios',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Developed a user-friendly React frontend with Tailwind CSS, enabling sustainable agriculture through land optimization, waste reduction, and informed crop selection',
				},
				{
					id: uuidv4(),
					details:
						'Integrated Axios for consuming authenticated RESTful APIs, handling JSON data, and implementing JWT authentication in the application',
				},
			],
			SocialSharingHeading: 'Share This',
		},
	},
	{
		id: 3,
		title: 'Client-Server Architecture',
		url: 'client-server-architecture',
		category: 'Software Development',
		img: '/images/web-project-2.jpg',
		GitHubLink:'https://github.com/HaRsH8747/Client-Server-Architecture',
		ProjectHeader: {
			title: 'Client-Server Architecture',
			publishDate: 'Jan 2024 – Apr 2024',
			tags: 'System Programming',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Client-Server Architecture',
				img: '/images/ui-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Client-Server Architecture',
				img: '/images/web-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Client-Server Architecture',
				img: '/images/mobile-project-2.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'University of Windsor',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'System Programming',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://uwindsor.ca',
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: '555 8888 888',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Developed client-server application using UNIX/Linux and C socket library',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'C',
						'Socket Programming',
						'Linux Environment',
						'Process Control',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Used fork to handle multiple client requests and managed server balancing by redirecting traffic to mirror servers',
				},
			],
			SocialSharingHeading: 'Share This',
		},
	},
	{
		id: 4,
		title: 'Car Rental Analysis',
		url: 'car-rental-analysis',
		category: 'Software Development',
		img: '/images/mobile-project-2.jpg',
		GitHubLink:'https://github.com/HaRsH8747/Client-Server-Architecture',
		ProjectHeader: {
			title: 'Car Rental Analysis',
			publishDate: 'Sep 2023 - Dec 2023',
			tags: 'Data Analysis',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Car Rental Analysis',
				img: '/images/ui-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Car Rental Analysis',
				img: '/images/web-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Car Rental Analysis',
				img: '/images/mobile-project-2.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'University of Windsor',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'Data Analysis',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://uwindsor.ca',
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: '555 8888 888',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Utilized Java\'s core data structures and algorithms, including Trie, B-Tree, Priority Queue, HashMap, and MaxHeap for efficient spell checking, inverted indexing, page ranking, and frequency analysis',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Java',
						'Selenium',
						'DSA',
						'Jsoup',
						'Regex',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Employed Jsoup library for robust HTML parsing and data extraction, mapping relevant information to Java objects for further analysis and storage in JSON format',
				},
				{
					id: uuidv4(),
					details:
						'Leveraged regular expressions (regex) for data validation, pattern matching, and text processing tasks, ensuring data integrity and facilitating information retrieval',
				},
			],
			SocialSharingHeading: 'Share This',
		},
	},
	{
		id: 5,
		title: 'Store Locator',
		url: 'store-locator',
		category: 'Mobile Application',
		img: '/images/web-project-2.jpg',
		ProjectHeader: {
			title: 'Store Locator',
			publishDate: 'Dec 2020 - Apr 2021',
			tags: 'Mobile Application',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Store Locator',
				img: '/images/ui-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Store Locator',
				img: '/images/web-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Store Locator',
				img: '/images/mobile-project-2.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Shree Swami Atmanand Saraswati Institute of Technology, India',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'Mobile Development',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://example.com',
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: '555 8888 888',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Developed a digital marketing solution for small shops to boost visibility and customer engagement',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Kotlin',
						'Android SDK',
						'Google Maps API',
						'Firebase',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Leveraged Firebase services like Firestore Database, Storage, Authentication for real-time data management and secure user authentication',
				},
				{
					id: uuidv4(),
					details:
						'Integrated QR scanning feature, enabling customers to redeem discounts on products by scanning QR codes',
				},
				{
					id: uuidv4(),
					details:
						'Deployed an algorithm to prioritize products based on customer purchases, elevating popular items to the top of search results',
				},
			],
			SocialSharingHeading: 'Share This',
		},
	},
	{
		id: 6,
		title: 'GoVoice Backend',
		url: 'govoice-backend',
		category: 'Backend Development',
		img: '/images/web-project-2.jpg',
		ProjectHeader: {
			title: 'GoVoice Backend',
			publishDate: 'Sep 2023 - Dec 2023',
			tags: 'Backend Development',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'GoVoice Backend',
				img: '/images/ui-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'GoVoice Backend',
				img: '/images/web-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'GoVoice Backend',
				img: '/images/mobile-project-2.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'University of Windsor',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'Web Development',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://uwindsor.ca',
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: '555 8888 888',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Managed the entire project lifecycle using Agile Software Development Life Cycle (SDLC) methodologies',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Java',
						'Spring Boot',
						'MySQL',
						'Spring Security',
						'API Documentation',
						'RESTful API Development',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Spearheaded the creation of multiple API endpoints to handle various functionalities, including user authentication, data retrieval, and manipulation',
				},
				{
					id: uuidv4(),
					details:
						'Led the implementation of Spring Security to control user access and ensure secure communication between the frontend and backend components',
				},
				{
					id: uuidv4(),
					details:
						'Directed the design and implementation of custom security configurations to define access rules and authentication mechanisms',
				},
			],
			SocialSharingHeading: 'Share This',
		},
	},
	{
		id: 7,
		title: 'Online Bakery Shopping',
		url: 'Online Bakery Shopping',
		category: 'Desktop Application',
		img: '/images/web-project-2.jpg',
		GitHubLink:'https://github.com/HaRsH8747/Online-Bakery-Shopping',
		ProjectHeader: {
			title: 'Online Bakery Shopping',
			publishDate: 'Jan 2019 – Feb 2019',
			tags: 'Desktop Application',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Farm Tech Backend',
				img: '/images/ui-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Farm Tech Backend',
				img: '/images/web-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Farm Tech Backend',
				img: '/images/mobile-project-2.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'University of Windsor',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'Web Development',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://uwindsor.ca',
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: '555 8888 888',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Engineered a scalable backend system using Python and Django, implementing RESTful API',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Java',
						'JavaFx',
						'SceneBuilder',
						'CSS',
						'XML',
						'JDBC'
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Built a Desktop App using JavaFx for a robust GUI and with the help of scene builder created a much more appealing UI.',
				},
			],
			SocialSharingHeading: 'Share This',
		},
	},
];
