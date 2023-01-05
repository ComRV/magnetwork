import arrow from '../img/logo/arrow.png';
import { useState } from 'react';

const Reason = () => {
	const [q1, setQ1] = useState(false);
	const [q2, setQ2] = useState(false);
	const [q3, setQ3] = useState(false);
	const [q4, setQ4] = useState(false);

	return (
		<div className="mt-24">
			<p className="font-bold text-center text-2xl md:mx-[13rem] md:text-3xl lg:mx-[26rem]">Alasan kenapa harus menggunakan jasa kami</p>
			<div className="flex flex-col items-center gap-y-3">
				<div className={`flex border border-[#F62326] w-[85vw] lg:w-[55vw] gap-x-2 md:gap-x-7 py-4 rounded-md cursor-pointer mt-4 ${!q1 && 'mb-4'}`} onClick={() => setQ1(!q1)}>
					<img src={arrow} alt="arrow" className={`ml-5 w-[4%] h-[4%] md:w-auto md:h-auto ${q1 && 'rotate-90'}`} />
					<p className="text-xs md:text-base">Apa itu Magnet Work</p>
				</div>
				{q1 && (
					<p className="w-[64vw] text-xs md:text-base md:w-[69vw] lg:w-[45.5vw]">
						Magnet Work merupakan penyedia layanan freelancer yang bertujuan untuk membantu para pelaku usaha/bisnis untuk meningkatkan usaha mereka.
					</p>
				)}
				<div className={`flex border border-[#F62326] w-[85vw] lg:w-[55vw] gap-x-2 md:gap-x-7 py-4 rounded-md cursor-pointer ${!q2 && 'mb-4'}`} onClick={() => setQ2(!q2)}>
					<img src={arrow} alt="arrow" className={`ml-5 w-[4%] h-[4%] md:w-auto md:h-auto ${q2 && 'rotate-90'}`} />
					<p className="text-xs md:text-base">Kenapa harus menggunakan jasa kami?</p>
				</div>
				{q2 && <p className="w-[64vw] text-xs md:text-base md:w-[69vw] lg:w-[45.5vw]">Kami menyediakan jasa Professional dengan hasil yang berkualitas namun harga masih terjangkau.</p>}
				<div className={`flex border border-[#F62326] w-[85vw] lg:w-[55vw] gap-x-2 md:gap-x-7 py-4 rounded-md cursor-pointer ${!q3 && 'mb-4'}`} onClick={() => setQ3(!q3)}>
					<img src={arrow} alt="arrow" className={`ml-5 w-[4%] h-[4%] md:w-auto md:h-auto ${q3 && 'rotate-90'}`} />
					<p className="text-xs md:text-base">Apa masih bisa nego?</p>
				</div>
				{q3 && <p className="w-[64vw] text-xs md:text-base md:w-[69vw] lg:w-[45.5vw]">Tentu saja bisa, silahkan hubungi kami dan mari berdiskusi hingga mendapatkan kesepakatan bersama.</p>}
				<div className={`flex border border-[#F62326] w-[85vw] lg:w-[55vw] gap-x-2 md:gap-x-7 py-4 rounded-md cursor-pointer ${!q4 && 'mb-4'}`} onClick={() => setQ4(!q4)}>
					<img src={arrow} alt="arrow" className={`ml-5 w-[4%] h-[4%] md:w-auto md:h-auto ${q4 && 'rotate-90'}`} />
					<p className="text-xs md:text-base">Kenapa harus ada paket?</p>
				</div>
				{q4 && (
					<p className="w-[64vw] text-xs md:text-base md:w-[69vw] lg:w-[45.5vw]">
						dengan paket ini kalian bisa mendapatkan banyak jasa sekaligus namun hanya dengan membayar 1x per bulan “yang nilainya sama dengan menggaji 1 karyawan di perusahaan” namun
						kalian bisa mendapatkan lebih dari 5 pekerja.
					</p>
				)}
			</div>
		</div>
	);
};

export default Reason;
