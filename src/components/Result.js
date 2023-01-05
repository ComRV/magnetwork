import website1 from '../img/hasil/website/1.png';
import website2 from '../img/hasil/website/2.png';
import website3 from '../img/hasil/website/3.png';
import website4 from '../img/hasil/website/4.png';
import website5 from '../img/hasil/website/5.png';
import website6 from '../img/hasil/website/6.png';
import sosmed1 from '../img/hasil/sosmed/1.png';
import sosmed2 from '../img/hasil/sosmed/2.png';
import sosmed3 from '../img/hasil/sosmed/3.png';
import photo1 from '../img/hasil/photo/1.png';
import photo2 from '../img/hasil/photo/2.png';
import photo3 from '../img/hasil/photo/3.png';
import video1 from '../img/hasil/video/1.png';
import video2 from '../img/hasil/video/2.png';
import { useState } from 'react';

const Result = () => {
	const [bar, setBar] = useState('website');
	return (
		<div className="mt-28 h-[15cm] flex flex-col items-center">
			<div className="flex flex-col gap-y-3 md:flex-row justify-center items-center">
				<p className="font-bold text-3xl md:text-4xl w-4/5 md:w-2/5">Beberapa Hasil Kerja Kami</p>
				<ul className="flex font-semibold gap-x-2 md:self-end text-[13px]">
					<li>
						<button
							className={`${
								bar === 'website' ? 'bg-[#F62326] text-white' : 'hover:bg-[#F62326] hover:text-white border-[#F62326] border text-[#F62326]'
							} duration-150  text-[10px] w-[2cm] h-[0.75cm] md:w-[2.75cm] rounded`}
							onClick={() => setBar('website')}
						>
							Website
						</button>
					</li>
					<li>
						<button
							className={`${
								bar === 'sosmed' ? 'bg-[#F62326] text-white' : 'hover:bg-[#F62326] hover:text-white border-[#F62326] border text-[#F62326]'
							} duration-150  text-[10px] w-[2cm] h-[0.75cm] md:w-[2.75cm] rounded`}
							onClick={() => setBar('sosmed')}
						>
							Social Media
						</button>
					</li>
					<li>
						<button
							className={`${
								bar === 'photo' ? 'bg-[#F62326] text-white' : 'hover:bg-[#F62326] hover:text-white border-[#F62326] border text-[#F62326]'
							} border-[#F62326] border duration-150 text-[10px] w-[2cm] h-[0.75cm] md:w-[2.75cm] rounded`}
							onClick={() => setBar('photo')}
						>
							Photo
						</button>
					</li>
					<li>
						<button
							className={`${
								bar === 'video' ? 'bg-[#F62326] text-white' : 'hover:bg-[#F62326] hover:text-white border-[#F62326] border text-[#F62326]'
							} text-[10px] w-[2cm] h-[0.75cm] md:w-[2.75cm] rounded`}
							onClick={() => setBar('video')}
						>
							Video
						</button>
					</li>
				</ul>
			</div>
			{bar === 'website' && <Website />}
			{bar === 'sosmed' && <Sosmed />}
			{bar === 'photo' && <Photo />}
			{bar === 'video' && <Video />}
		</div>
	);
};

const Website = () => {
	return (
		<div className="mt-8 grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-7">
			<img src={website1} alt="website1" className="w-[150px] h-[150px] md:w-[235px] md:h-[235px] lg:w-[250px] lg:h-[250px]" />
			<img src={website2} alt="website2" className="w-[150px] h-[150px] md:w-[235px] md:h-[235px] lg:w-[250px] lg:h-[250px]" />
			<img src={website3} alt="website3" className="w-[150px] h-[150px] md:w-[235px] md:h-[235px] lg:w-[250px] lg:h-[250px]" />
			<img src={website4} alt="website4" className="w-[150px] h-[150px] md:w-[235px] md:h-[235px] lg:w-[250px] lg:h-[250px]" />
			<img src={website5} alt="website5" className="w-[150px] h-[150px] md:w-[235px] md:h-[235px] lg:w-[250px] lg:h-[250px]" />
			<img src={website6} alt="website6" className="w-[150px] h-[150px] md:w-[235px] md:h-[235px] lg:w-[250px] lg:h-[250px]" />
		</div>
	);
};

const Sosmed = () => {
	return (
		<div className="mt-8 grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-7">
			<img src={sosmed1} alt="sosmed1" className="w-[150px] h-[150px] md:w-[235px] md:h-[235px] lg:w-[250px] lg:h-[250px]" />
			<img src={sosmed2} alt="sosmed2" className="w-[150px] h-[150px] md:w-[235px] md:h-[235px] lg:w-[250px] lg:h-[250px]" />
			<img src={sosmed3} alt="sosmed3" className="w-[150px] h-[150px] md:w-[235px] md:h-[235px] lg:w-[250px] lg:h-[250px]" />
		</div>
	);
};

const Photo = () => {
	return (
		<div className="mt-8 grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-7">
			<img src={photo1} alt="photo1" className="w-[150px] h-[150px] md:w-[235px] md:h-[235px] lg:w-[250px] lg:h-[250px]" />
			<img src={photo2} alt="photo2" className="w-[150px] h-[150px] md:w-[235px] md:h-[235px] lg:w-[250px] lg:h-[250px]" />
			<img src={photo3} alt="photo3" className="w-[150px] h-[150px] md:w-[235px] md:h-[235px] lg:w-[250px] lg:h-[250px]" />
		</div>
	);
};

const Video = () => {
	return (
		<div className="mt-8 grid grid-cols-2 grid-rows-3 gap-x-2">
			<img src={video1} alt="video1" className="w-[160px] md:w-[380px] lg:w-[400px] h-auto" />
			<img src={video2} alt="video2" className="w-[160px] md:w-[380px] lg:w-[400px] h-auto" />
		</div>
	);
};

export default Result;
