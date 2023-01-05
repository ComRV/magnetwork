import banner1 from '../img/banner/1.png';
import magnetwork from '../img/logo/magnetwork.png';
import slogan1 from '../img/slogan/1.png';
import slogan2 from '../img/slogan/2.png';
import slogan3 from '../img/slogan/3.png';
import slogan4 from '../img/slogan/4.png';

const Header = () => {
	return (
		<div className="relative top-[60px]">
			<img src={banner1} alt="banner1" className="object-cover h-[7cm] md:h-[11cm] w-screen" />
			<div className="absolute top-0 mt-5 font-semibold tracking-normal text-white w-screen flex items-center flex-col">
				<img src={magnetwork} alt="magnetwork" className="w-16" />
				<p className="text-[11px]">MAGNET WORK</p>
				<p className="text-[13px] md:text-[22px] mt-1.5">KEMBANGKAN BISNISMU SECARA PROFESSIONAL</p>
				<p className="text-[22px] md:text-[31px] -mt-1.5">DENGAN HARGA TERJANGKAU</p>
				<p className="font-light text-sm text-center mt-4 mb-7 w-[12cm] hidden md:block">Dipercaya berbagai bisnis untuk menyelesaikan pekerjaan dengan hasil yang memuaskan.</p>
				<a href="#price" className="bg-[#F62326] px-3 py-3 mt-3 md:mt-0 text-sm rounded-lg duration-100 hover:opacity-90">
					Dapatkan Sekarang
				</a>
				<div className="text-black mt-7 md:mt-14 flex gap-x-2 md:gap-x-8 lg:gap-x-10">
					<div className="bg-white w-20 h-20 md:w-36 md:h-36 drop-shadow-lg flex flex-col gap-y-4 items-center justify-center rounded-lg">
						<img src={slogan1} alt="slogan1" className="w-[45%]" />
						<p className="text-[8px] md:text-sm font-medium">Ide Kreatif</p>
					</div>
					<div className="bg-white w-20 h-20 md:w-36 md:h-36 drop-shadow-lg flex flex-col gap-y-2.5 items-center justify-center rounded-lg">
						<img src={slogan2} alt="slogan1" className="w-[39%]" />
						<p className="text-[8px] md:text-sm font-medium">Berkualitas</p>
					</div>
					<div className="bg-white w-20 h-20 md:w-36 md:h-36 drop-shadow-lg flex flex-col gap-y-4 items-center justify-center rounded-lg">
						<img src={slogan3} alt="slogan1" className="w-[45%]" />
						<p className="text-[8px] md:text-sm font-medium">Pengerjaan Cepat</p>
					</div>
					<div className="bg-white w-20 h-20 md:w-36 md:h-36 drop-shadow-lg flex flex-col gap-y-4 items-center justify-center rounded-lg">
						<img src={slogan4} alt="slogan1" className="w-[45%]" />
						<p className="text-[8px] md:text-sm font-medium">Dukungan 24/7</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
