import { useState } from 'react';

const Price = () => {
	const [bar, setBar] = useState('website');
	return (
		<div className="mt-[6rem] scroll-mt-20" id="price">
			<p className="font-bold text-center text-xl md:text-4xl md:mx-10 lg:mx-[20rem]">
				Daftar harga <p className="text-[#F62326] inline">DISKON</p> untuk bisnis anda yang luar biasa
			</p>
			<ul className="my-5 flex font-semibold gap-x-2 text-[9px] md:text-[13px] justify-center">
				<li>
					<button
						className={`${
							bar === 'website' ? 'bg-[#F62326] text-white' : 'hover:bg-[#F62326] hover:text-white border-[#F62326] border text-[#F62326]'
						} w-[2cm] h-[0.8cm] md:w-[2.5cm] rounded`}
						onClick={() => setBar('website')}
					>
						Website
					</button>
				</li>
				<li>
					<button
						className={`${
							bar === 'digitalMarketing' ? 'bg-[#F62326] text-white' : 'hover:bg-[#F62326] hover:text-white border-[#F62326] border text-[#F62326]'
						} duration-150  w-[2.5cm] h-[0.8cm] md:w-[3.5cm] rounded`}
						onClick={() => setBar('digitalMarketing')}
					>
						Digital Marketing
					</button>
				</li>
				<li>
					<button
						className={`${
							bar === 'sosmed' ? 'bg-[#F62326] text-white' : 'hover:bg-[#F62326] hover:text-white border-[#F62326] border text-[#F62326]'
						} duration-150 w-[2.5cm] h-[0.8cm] md:w-[3cm] rounded`}
						onClick={() => setBar('sosmed')}
					>
						Social Media
					</button>
				</li>
				<li>
					<button
						className={`${
							bar === 'digitalads' ? 'bg-[#F62326] text-white' : 'hover:bg-[#F62326] hover:text-white border-[#F62326] border text-[#F62326]'
						} duration-150 w-[2cm] h-[0.8cm] md:w-[2.5cm] rounded`}
						onClick={() => setBar('digitalads')}
					>
						Digital Ads
					</button>
				</li>
			</ul>
			<div className="grid mt-8 grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-16 md:gap-0 place-items-center">
				{bar === 'digitalMarketing' && <DigitalMarketing />}
				{bar === 'sosmed' && <SocialMedia />}
				{bar === 'digitalads' && <DigitalAds />}
				{bar === 'website' && <Website />}
			</div>
		</div>
	);
};

const DigitalMarketing = () => {
	return (
		<>
			<div className="drop-shadow-lg rounded-xl md:place-self-end bg-white w-[80vw] md:w-[31vw] lg:w-[21vw] h-[16cm]">
				<p className="text-[#F62326] border border-[#F62326] py-2 rounded-xl font-bold text-center">Paket Beginner</p>
				<p className="font-bold text-center text-sm mt-6">Starts From</p>
				<p className="font-bold text-center text-[#BB0003] line-through decoration-2 leading-5">6.500K/Bulan</p>
				<p className="font-bold text-center text-lg leading-5">5.500K/Bulan</p>
				<ul className="list-disc text-[13px] ml-10 mr-1 mt-4">
					<li className="leading-8">Website Landing Pages</li>
					<li className="leading-8">Sosial Media Management</li>
					<li className="leading-8">Content Planner</li>
					<li className="leading-8">Desain Feed</li>
					<li className="leading-8">Desain Story</li>
					<li className="leading-8">Caption Writing</li>
					<li className="leading-8">Digital Advertising 1 Channel (Support Facebook Ads, Instagram Ads, Google Ads)</li>
					<li className="leading-8">Report di akhir bulan</li>
				</ul>
				<button
					onClick={() => window.location.assign(`https://wa.me/p/6468463089848201/6285156116920`)}
					className="absolute -bottom-[1.1rem] duration-150 hover:bg-[#c91c1f] -translate-x-1/2 left-1/2 bg-[#F62326] text-white font-semibold h-[1cm] w-[5cm] rounded-md text-sm"
				>
					Dapatkan Sekarang
				</button>
			</div>
			<div className="drop-shadow-lg rounded-xl bg-white w-[80vw] md:w-[31vw] lg:w-[21vw] h-[16cm]">
				<p className="text-[#F62326] border border-[#F62326] py-2 rounded-xl font-bold text-center">Paket Standard</p>
				<p className="font-bold text-center text-sm mt-6">Starts From</p>
				<p className="font-bold text-center text-[#BB0003] line-through decoration-2 leading-5">10.000K/Bulan</p>
				<p className="font-bold text-center text-lg leading-5">9.000K/Bulan</p>
				<ul className="list-disc text-[13px] ml-10 mt-4">
					<li className="leading-8">Website (Up To 6 Halaman)</li>
					<li className="leading-8">Sosial Media Management</li>
					<li className="leading-8">Content Planner</li>
					<li className="leading-8">Desain Feed</li>
					<li className="leading-8">Desain Story</li>
					<li className="leading-8">Caption Writing</li>
					<li className="leading-8">Produksi Foto</li>
					<li className="leading-8">Digital Advertising 2 Channel (Support Facebook Ads, Instagram Ads, Google Ads)</li>
					<li className="leading-8">Report di akhir bulan</li>
				</ul>
				<button
					onClick={() => window.location.assign(`https://wa.me/p/5728647677190000/6285156116920`)}
					className="absolute -bottom-[1.1rem] duration-150 hover:bg-[#c91c1f] -translate-x-1/2 left-1/2 bg-[#F62326] text-white font-semibold h-[1cm] w-[5cm] rounded-md text-sm"
				>
					Dapatkan Sekarang
				</button>
			</div>
			<div className="drop-shadow-lg rounded-xl md:place-self-start bg-white w-[80vw] md:w-[31vw] lg:w-[21vw] h-[16cm]">
				<p className="text-[#F62326] border border-[#F62326] py-2 rounded-xl font-bold text-center">Paket Professional</p>
				<p className="font-bold text-center text-sm mt-6">Starts From</p>
				<p className="font-bold text-center text-[#BB0003] line-through decoration-2 leading-5">15.000K/Bulan</p>
				<p className="font-bold text-center text-lg leading-5">12.500K/Bulan</p>
				<ul className="list-disc text-[13px] ml-10 mt-4">
					<li className="leading-8">Website (Up To 8 Halaman)</li>
					<li className="leading-8">Sosial Media Management</li>
					<li className="leading-8">Content Planner</li>
					<li className="leading-8">Desain Feed</li>
					<li className="leading-8">Desain Story</li>
					<li className="leading-8">Video Reels</li>
					<li className="leading-8">Caption Writing</li>
					<li className="leading-8">Produksi Foto</li>
					<li className="leading-8">Produksi Video</li>
					<li className="leading-8">Digital Advertising 3 Channel (Support Facebook Ads, Instagram Ads, Google Ads)</li>
					<li className="leading-8">Report di akhir bulan</li>
				</ul>
				<button
					onClick={() => window.location.assign(`https://wa.me/p/6180913338607388/6285156116920`)}
					className="absolute -bottom-[1.1rem] duration-150 hover:bg-[#c91c1f] -translate-x-1/2 left-1/2 bg-[#F62326] text-white font-semibold h-[1cm] w-[5cm] rounded-md text-sm"
				>
					Dapatkan Sekarang
				</button>
			</div>
		</>
	);
};

const DigitalAds = () => {
	return (
		<>
			<div className="drop-shadow-lg rounded-xl md:place-self-end bg-white w-[80vw] md:w-[31vw] lg:w-[21vw] h-[20cm]">
				<p className="text-[#F62326] border border-[#F62326] py-2 rounded-xl font-bold text-center">Paket Beginner</p>
				<p className="font-bold text-center text-sm mt-6">Starts From</p>
				<p className="font-bold text-center text-[#BB0003] line-through decoration-2 leading-5">3.500K/Bulan</p>
				<p className="font-bold text-center text-lg leading-5">2.480K/Bulan</p>
				<ul className="list-disc text-[13px] ml-10 mt-4">
					<li className="leading-8">Pilih 1 Channel Ads : Facebook, Instagram, atau Google</li>
					<li className="leading-8">Periode Iklan 31 Hari</li>
					<li className="leading-8">Budget Iklan 50.000,- / Hari</li>
					<li className="leading-8">Sudah termasuk biaya jasa</li>
					<li className="leading-8">Free 2 Ads Image Creative (Inc. Feed & Story)</li>
					<li className="leading-8">Free 2 Caption Ads</li>
					<li className="leading-8">Strategy & Analyst</li>
					<li className="leading-8">Objective : Engagement, Traffic</li>
					<li className="leading-8">Laporan di akhir periode Iklan</li>
					<li className="leading-8">Riset Target Market</li>
					<li className="leading-8">Riset Demografi Market</li>
					<li className="leading-8">Gratis Konsultasi</li>
				</ul>
				<button
					onClick={() => window.location.assign(`https://wa.me/p/6646691332012656/6285156116920`)}
					className="absolute -bottom-[1.1rem] duration-150 hover:bg-[#c91c1f] -translate-x-1/2 left-1/2 bg-[#F62326] text-white font-semibold h-[1cm] w-[5cm] rounded-md text-sm"
				>
					Dapatkan Sekarang
				</button>
			</div>
			<div className="drop-shadow-lg rounded-xl bg-white w-[80vw] md:w-[31vw] lg:w-[21vw] h-[20cm]">
				<p className="text-[#F62326] border border-[#F62326] py-2 rounded-xl font-bold text-center">Paket Standard</p>
				<p className="font-bold text-center text-sm mt-6">Starts From</p>
				<p className="font-bold text-center text-[#BB0003] line-through decoration-2 leading-5">6.000K/Bulan</p>
				<p className="font-bold text-center text-lg leading-5">4.030K/Bulan</p>
				<ul className="list-disc text-[13px] ml-10 mt-4">
					<li className="leading-8">Pilih 2 Channel Ads : Facebook, Instagram, atau Google</li>
					<li className="leading-8">Periode Iklan 31 Hari</li>
					<li className="leading-8">Budget Iklan 100.000,- / Hari</li>
					<li className="leading-8">Sudah termasuk biaya jasa</li>
					<li className="leading-8">Free 4 Ads Image Creative (Inc. Feed & Story)</li>
					<li className="leading-8">Free 4 Caption Ads</li>
					<li className="leading-8">Strategy & Analyst</li>
					<li className="leading-8">Objective : All Objective</li>
					<li className="leading-8">Laporan Setiap Minggu</li>
					<li className="leading-8">Riset Target Market</li>
					<li className="leading-8">Riset Demografi Market</li>
					<li className="leading-8">Gratis Konsultasi</li>
				</ul>
				<button
					onClick={() => window.location.assign(`https://wa.me/p/5435305126598844/6285156116920`)}
					className="absolute -bottom-[1.1rem] duration-150 hover:bg-[#c91c1f] -translate-x-1/2 left-1/2 bg-[#F62326] text-white font-semibold h-[1cm] w-[5cm] rounded-md text-sm"
				>
					Dapatkan Sekarang
				</button>
			</div>
			<div className="drop-shadow-lg rounded-xl md:place-self-start bg-white w-[80vw] md:w-[31vw] lg:w-[21vw] h-[20cm]">
				<p className="text-[#F62326] border border-[#F62326] py-2 rounded-xl font-bold text-center">Paket Professional</p>
				<p className="font-bold text-center text-sm mt-6">Starts From</p>
				<p className="font-bold text-center text-[#BB0003] line-through decoration-2 leading-5">7.500K/Bulan</p>
				<p className="font-bold text-center text-lg leading-5">5.580K/Bulan</p>
				<ul className="list-disc text-[13px] ml-10 mt-4">
					<li className="leading-8">Pilih 3 Channel Ads : Facebook, Instagram, atau Google</li>
					<li className="leading-8">Periode Iklan 31 Hari</li>
					<li className="leading-8">Budget Iklan 150.000,- / Hari</li>
					<li className="leading-8">Sudah termasuk biaya jasa</li>
					<li className="leading-8">Free 5 Ads Image Creative (Inc. Feed & Story)</li>
					<li className="leading-8">Free 6 Caption Ads</li>
					<li className="leading-8">Strategy & Analyst</li>
					<li className="leading-8">Objective : All Objective</li>
					<li className="leading-8">Laporan Setiap Minggu</li>
					<li className="leading-8">Riset Target Market</li>
					<li className="leading-8">Riset Demografi Market</li>
					<li className="leading-8">Free 1 Ads Video Creative (Inc. Feed & Story)</li>
					<li className="leading-8">Install Pixel Facebook</li>
					<li className="leading-8">Install Google Tag Manager</li>
					<li className="leading-8">Gratis Konsultasi</li>
				</ul>
				<button
					onClick={() => window.location.assign(`https://wa.me/p/5626235220807678/6285156116920`)}
					className="absolute -bottom-[1.1rem] duration-150 hover:bg-[#c91c1f] -translate-x-1/2 left-1/2 bg-[#F62326] text-white font-semibold h-[1cm] w-[5cm] rounded-md text-sm"
				>
					Dapatkan Sekarang
				</button>
			</div>
		</>
	);
};

const SocialMedia = () => {
	return (
		<>
			<div className="drop-shadow-lg rounded-xl md:place-self-end bg-white w-[80vw] md:w-[31vw] lg:w-[21vw] h-[18cm]">
				<p className="text-[#F62326] border border-[#F62326] py-2 rounded-xl font-bold text-center">Paket Beginner</p>
				<p className="font-bold text-center text-sm mt-6">Starts From</p>
				<p className="font-bold text-center text-[#BB0003] line-through decoration-2 leading-5">2.300K/Bulan</p>
				<p className="font-bold text-center text-lg leading-5">1.500K/Bulan</p>
				<ul className="list-disc text-[13px] ml-10 mr-2 mt-4">
					<li className="leading-8">14 (BONUS 2) Desain dan Ide Konten Feed</li>
					<li className="leading-8">6 (BONUS 2) Desain dan Ide Konten Story</li>
					<li className="leading-8">14 (BONUS 2) Caption Copywriting</li>
					<li className="leading-8">Content Plan & Strategy</li>
					<li className="leading-8">Admin Instagram (Comment, DM, Konten)</li>
					<li className="leading-8">Desain Professional</li>
					<li className="leading-8">Postingan Terjadwal</li>
					<li className="leading-8">Hashtag Tertarget</li>
					<li className="leading-8">Unlimited Revisi</li>
					<li className="leading-8">Report Bulanan</li>
					<li className="leading-8">Masa Pengerjaan 14 Hari</li>
				</ul>
				<button
					onClick={() => window.location.assign(`https://wa.me/p/8526071344131608/6285156116920`)}
					className="absolute -bottom-[1.1rem] duration-150 hover:bg-[#c91c1f] -translate-x-1/2 left-1/2 bg-[#F62326] text-white font-semibold h-[1cm] w-[5cm] rounded-md text-sm"
				>
					Dapatkan Sekarang
				</button>
			</div>
			<div className="drop-shadow-lg rounded-xl bg-white w-[80vw] md:w-[31vw] lg:w-[21vw] h-[18cm]">
				<p className="text-[#F62326] border border-[#F62326] py-2 rounded-xl font-bold text-center">Paket Standard</p>
				<p className="font-bold text-center text-sm mt-6">Starts From</p>
				<p className="font-bold text-center text-[#BB0003] line-through decoration-2 leading-5">3.500K/Bulan</p>
				<p className="font-bold text-center text-lg leading-5">2.300K/Bulan</p>
				<ul className="list-disc text-[13px] ml-10 mt-4">
					<li className="leading-8">30 Desain dan Ide Konten Feed</li>
					<li className="leading-8">15 Desain dan Ide Konten Story</li>
					<li className="leading-8">30 Caption Copywriting</li>
					<li className="leading-8">Content Plan & Strategy</li>
					<li className="leading-8">Admin Instagram (Comment, DM, Konten)</li>
					<li className="leading-8">Desain Professional</li>
					<li className="leading-8">Postingan Terjadwal</li>
					<li className="leading-8">Hashtag Tertarget</li>
					<li className="leading-8">Unlimited Revisi</li>
					<li className="leading-8">Report Bulanan</li>
					<li className="leading-8">Masa Pengerjaan 1 Bulan</li>
				</ul>
				<button
					onClick={() => window.location.assign(`https://wa.me/p/6103881552976522/6285156116920`)}
					className="absolute -bottom-[1.1rem] duration-150 hover:bg-[#c91c1f] -translate-x-1/2 left-1/2 bg-[#F62326] text-white font-semibold h-[1cm] w-[5cm] rounded-md text-sm"
				>
					Dapatkan Sekarang
				</button>
			</div>
			<div className="drop-shadow-lg rounded-xl md:place-self-start bg-white w-[80vw] md:w-[31vw] lg:w-[21vw] h-[18cm]">
				<p className="text-[#F62326] border border-[#F62326] py-2 rounded-xl font-bold text-center">Paket Professional</p>
				<p className="font-bold text-center text-sm mt-6">Starts From</p>
				<p className="font-bold text-center text-[#BB0003] line-through decoration-2 leading-5">4.700K/Bulan</p>
				<p className="font-bold text-center text-lg leading-5">3.500K/Bulan</p>
				<ul className="list-disc text-[13px] ml-10 mt-4">
					<li className="leading-8">15 & 15 Desain Konten Feed & Reel</li>
					<li className="leading-8">30 Desain dan Ide Konten Story</li>
					<li className="leading-8">30 Caption Copywriting</li>
					<li className="leading-8">Content Plan & Strategy</li>
					<li className="leading-8">Admin Instagram (Comment, DM, Konten)</li>
					<li className="leading-8">Desain Professional</li>
					<li className="leading-8">Postingan Terjadwal</li>
					<li className="leading-8">Hashtag Tertarget</li>
					<li className="leading-8">Unlimited Revisi</li>
					<li className="leading-8">Report Bulanan</li>
					<li className="leading-8">Masa Pengerjaan 1 Bulan</li>
					<li className="leading-8">BONUS PRODUKSI FOTO</li>
					<li className="leading-8">BONUS PRODUKSI VIDEO</li>
				</ul>
				<button
					onClick={() => window.location.assign(`https://wa.me/p/8785246561515771/6285156116920`)}
					className="absolute -bottom-[1.1rem] duration-150 hover:bg-[#c91c1f] -translate-x-1/2 left-1/2 bg-[#F62326] text-white font-semibold h-[1cm] w-[5cm] rounded-md text-sm"
				>
					Dapatkan Sekarang
				</button>
			</div>
		</>
	);
};

const Website = () => {
	return (
		<>
			<div className="drop-shadow-lg rounded-xl md:place-self-end bg-white w-[80vw] md:w-[31vw] lg:w-[21vw] h-[18cm]">
				<p className="text-[#F62326] border border-[#F62326] py-2 rounded-xl font-bold text-center">Paket Beginner</p>
				<p className="font-bold text-center text-sm mt-6">Starts From</p>
				<p className="font-bold text-center text-[#BB0003] line-through decoration-2 leading-5">2.800K/Bulan</p>
				<p className="font-bold text-center text-lg leading-5">1.900K/Bulan</p>
				<ul className="list-disc text-[13px] ml-10 mt-4">
					<li className="leading-8">Hosting 1 Tahun</li>
					<li className="leading-8">Gratis Domain 1 Tahun Pertama</li>
					<li className="leading-8">Desain UI/UX</li>
					<li className="leading-8">Security SSL</li>
					<li className="leading-8">Unlimited SSD Disk Space</li>
					<li className="leading-8">Unlimited Bandwith</li>
					<li className="leading-8">Unlimited Email Account</li>
					<li className="leading-8">60.000 Pengunjung/bulan</li>
					<li className="leading-8">Landing Page/web Up to 4 Halaman</li>
					<li className="leading-8">2x Revisi</li>
					<li className="leading-8">Garansi & Maintenance 1 Bulan Pertama</li>
				</ul>
				<button
					onClick={() => window.location.assign('https://wa.me/p/5846558382061797/6285156116920')}
					className="absolute -bottom-[1.1rem] duration-150 hover:bg-[#c91c1f] -translate-x-1/2 left-1/2 bg-[#F62326] text-white font-semibold h-[1cm] w-[5cm] rounded-md text-sm"
				>
					Dapatkan Sekarang
				</button>
			</div>
			<div className="drop-shadow-lg rounded-xl bg-white w-[80vw] md:w-[31vw] lg:w-[21vw] h-[18cm]">
				<p className="text-[#F62326] border border-[#F62326] py-2 rounded-xl font-bold text-center">Paket Standard</p>
				<p className="font-bold text-center text-sm mt-6">Starts From</p>
				<p className="font-bold text-center text-[#BB0003] line-through decoration-2 leading-5">3.500K/Bulan</p>
				<p className="font-bold text-center text-lg leading-5">2.800K/Bulan</p>
				<ul className="list-disc text-[13px] ml-10 mt-4">
					<li className="leading-8">Hosting 1 Tahun</li>
					<li className="leading-8">Gratis Domain 1 Tahun Pertama</li>
					<li className="leading-8">Desain UI/UX</li>
					<li className="leading-8">Security SSL</li>
					<li className="leading-8">Security WhoIs</li>
					<li className="leading-8">Unlimited SSD Disk Space</li>
					<li className="leading-8">Unlimited Bandwith</li>
					<li className="leading-8">Unlimited Email Account</li>
					<li className="leading-8">135.000 Pengunjung/bulan</li>
					<li className="leading-8">Up to 6 Halaman</li>
					<li className="leading-8">Google Page Speed</li>
					<li className="leading-8">6x Revisi</li>
					<li className="leading-8">Garansi & Maintenance 1 Tahun</li>
				</ul>
				<button
					onClick={() => window.location.assign('https://wa.me/p/6086394944732473/6285156116920')}
					className="absolute -bottom-[1.1rem] duration-150 hover:bg-[#c91c1f] -translate-x-1/2 left-1/2 bg-[#F62326] text-white font-semibold h-[1cm] w-[5cm] rounded-md text-sm"
				>
					Dapatkan Sekarang
				</button>
			</div>
			<div className="drop-shadow-lg rounded-xl md:place-self-start bg-white w-[80vw] md:w-[31vw] lg:w-[21vw] h-[18cm]">
				<p className="text-[#F62326] border border-[#F62326] py-2 rounded-xl font-bold text-center">Paket Professional</p>
				<p className="font-bold text-center text-sm mt-6">Starts From</p>
				<p className="font-bold text-center text-[#BB0003] line-through decoration-2 leading-5">4.200K/Bulan</p>
				<p className="font-bold text-center text-lg leading-5">3.500K/Bulan</p>
				<ul className="list-disc text-[13px] ml-10 mt-4">
					<li className="leading-8">Hosting 1 Tahun</li>
					<li className="leading-8">Gratis Domain 1 Tahun Pertama</li>
					<li className="leading-8">Desain UI/UX</li>
					<li className="leading-8">Security SSL</li>
					<li className="leading-8">Security WhoIs</li>
					<li className="leading-8">Unlimited SSD Disk Space</li>
					<li className="leading-8">Unlimited Bandwith</li>
					<li className="leading-8">Unlimited Email Account</li>
					<li className="leading-8">135.000 Pengunjung/bulan</li>
					<li className="leading-8">Up to 8 Halaman</li>
					<li className="leading-8">Google Page Speed</li>
					<li className="leading-8">Google SEO</li>
					<li className="leading-8">Unlimited Revisi</li>
					<li className="leading-8">Garansi & Maintenance Selamanya</li>
				</ul>
				<button
					onClick={() => window.location.assign('https://wa.me/p/5724641464292257/6285156116920')}
					className="absolute -bottom-[1.1rem] duration-150 hover:bg-[#c91c1f] -translate-x-1/2 left-1/2 bg-[#F62326] text-white font-semibold h-[1cm] w-[5cm] rounded-md text-sm"
				>
					Dapatkan Sekarang
				</button>
			</div>
		</>
	);
};

export default Price;
