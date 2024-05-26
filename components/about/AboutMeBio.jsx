import Image from 'next/image';
import { useState } from 'react';
import { aboutMeData } from '../../data/aboutMeData';

function AboutMeBio() {
	const [aboutMe, setAboutMe] = useState(aboutMeData);
	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<Image
					src="/images/profile.jpg"
					width={200}
					height={200}
					className="rounded-lg"
					alt="Profile Image"
				/>
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-left">
				{aboutMe.map((bio) => (
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						key={bio.id}
					>
						{bio.bio}
					</p>
				))}
				<p
					className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
				>
					Connect with me on <u><a href="https://www.linkedin.com/in/harshmoradiyace/" rel="noreferrer" target="_blank">LinkedIn</a></u> or explore my projects on <u><a href="https://github.com/HaRsH8747" rel="noreferrer" target="_blank">GitHub</a></u>. I’m always open to connecting with fellow tech enthusiasts and professionals. 🤝
				</p>
			</div>
		</div>
	);
}

export default AboutMeBio;
