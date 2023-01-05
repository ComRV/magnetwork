import layanan1 from '../img/layanan/1.png';
import layanan2 from '../img/layanan/2.png';
import layanan3 from '../img/layanan/3.png';
import layanan4 from '../img/layanan/4.png';
import layanan5 from '../img/layanan/5.png';
import layanan6 from '../img/layanan/6.png';

const Services = () => {
	return (
		<div className="bg-[#F62326] h-[21cm] md:h-[25cm] mt-28 text-white transform -skew-y-[5deg]" id="service">
			<div className="transform skew-y-[5deg]">
				<p className="relative top-12 text-center font-bold text-xl md:text-3xl">Kami menyediakan</p>
				<p className="relative top-12 text-center font-bold text-xl md:text-3xl md:leading-[1.25cm]">semua layanan freelance</p>
				<div className="flex justify-center">
					<div className="mt-20 gap-3 md:gap-6 text-black grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2">
						<div className="w-[160px] h-[190px] md:w-[230px] md:h-[280px] lg:w-[250px] lg:h-[300px] bg-white rounded-xl flex flex-col items-center">
							<img src={layanan1} alt="layanan1" className="w-[95%] rounded-xl my-2" />
							<p className="font-bold self-start text-[10px] md:text-[15px] lg:text-base ml-2 md:ml-3">Full stack digital marketing</p>
							<p className="text-[8px] md:text-[12px] w-[90%]">Membantu meningkatkan trafik dan penjualan bisnis anda dengan memanfaatkan media digital.</p>
						</div>
						<div className="w-[160px] h-[190px] md:w-[230px] md:h-[280px] lg:w-[250px] lg:h-[300px] bg-white rounded-xl flex flex-col items-center">
							<img src={layanan2} alt="layanan1" className="w-[95%] rounded-xl my-2" />
							<p className="font-bold self-start text-[10px] md:text-[15px] lg:text-base ml-2 md:ml-3">Website Development</p>
							<p className="text-[8px] md:text-[12px] w-[90%]">Membantu Membuatkan Website untuk para pelaku usaha/bisnis dengan tampilan yang lebih profesional.</p>
						</div>
						<div className="w-[160px] h-[190px] md:w-[230px] md:h-[280px] lg:w-[250px] lg:h-[300px] bg-white rounded-xl flex flex-col items-center">
							<img src={layanan3} alt="layanan1" className="w-[95%] rounded-xl my-2" />
							<p className="font-bold self-start text-[10px] md:text-[15px] lg:text-base ml-2 md:ml-3">Digital Advertising</p>
							<p className="text-[8px] md:text-[12px] w-[90%]">Membantu meningkatkan trafik dan penjualan bisnis anda dengan memanfaatkan Iklan di google dan sosial media.</p>
						</div>
						<div className="w-[160px] h-[190px] md:w-[230px] md:h-[280px] lg:w-[250px] lg:h-[300px] bg-white rounded-xl flex flex-col items-center">
							<img src={layanan4} alt="layanan1" className="w-[95%] rounded-xl my-2" />
							<p className="font-bold self-start text-[10px] md:text-[15px] lg:text-base ml-2 md:ml-3">Social Media Management</p>
							<p className="text-[8px] md:text-[12px] w-[90%]">Membantu mengelola sosial media para pelaku usaha/bisnis. mulai dari postingan feed, story, reels & tiktok.</p>
						</div>
						<div className="w-[160px] h-[190px] md:w-[230px] md:h-[280px] lg:w-[250px] lg:h-[300px] bg-white rounded-xl flex flex-col items-center">
							<img src={layanan5} alt="layanan1" className="w-[95%] rounded-xl my-2" />
							<p className="font-bold self-start text-[10px] md:text-[15px] lg:text-base ml-2 md:ml-3">Produksi Video Campaign</p>
							<p className="text-[8px] md:text-[12px] w-[90%]">Memproduksi video untuk kebutuhan kampanye dan iklan.</p>
						</div>
						<div className="w-[160px] h-[190px] md:w-[230px] md:h-[280px] lg:w-[250px] lg:h-[300px] bg-white rounded-xl flex flex-col items-center">
							<img src={layanan6} alt="layanan1" className="w-[95%] rounded-xl my-2" />
							<p className="font-bold self-start text-[10px] md:text-[15px] lg:text-base ml-2 md:ml-3">Produksi Konten Sosmed</p>
							<p className="text-[8px] md:text-[12px] w-[90%]">Memproduksi Konten Foto dan Video untuk kebutuhan Postingan Sosial Media.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
