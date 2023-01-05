import banner2 from '../img/banner/2.png';
const Header2 = () => {
	return (
		<div className="flex gap-x-2 md:gap-x-5 justify-center mt-40 md:mt-64 scroll-mt-28" id="about">
			<img src={banner2} alt="banner2" className="w-[152px] h-[126px] md:w-[333px] md:h-[235px] lg:w-[428px] lg:h-[298px]" />
			<div className="w-[45%] md:w-[38%] lg:w-[25%]">
				<p className="text-[10px] md:text-[18px] lg:text-[25px] font-medium">Kami adalah Magnet Work</p>
				<p className="text-[14px] md:text-[25px] lg:text-[29px] font-bold">
					Penyedia Layanan <p className="text-[#F62326]">Digital Marketing & Website Development</p> Terbaik di Indonesia
				</p>
				<p className="text-[8px] md:text-[16px] text-[#737373]">Dipercaya berbagai bisnis untuk menyelesaikan pekerjaan dengan hasil yang memuaskan.</p>
			</div>
		</div>
	);
};

export default Header2;
