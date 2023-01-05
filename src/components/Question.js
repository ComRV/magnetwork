import { useState } from 'react';

const Question = () => {
	const [nama, setNama] = useState('');
	const [pertanyaan, setPertanyaann] = useState('');
	const ask = () => {
		window.open(`https://api.whatsapp.com/send?phone=6285156116920&text=Nama : ${nama}%0APertanyaan : ${pertanyaan}`, '_blank');
	};

	return (
		<div className="bg-[#F62326] transform h-[15cm] -skew-y-[5deg] mt-32 md:h-[10cm] lg:h-[13cm]" id="contact">
			<div className="text-white flex flex-col md:flex-row items-center justify-center h-full transform skew-y-[5deg]">
				<div className="flex flex-col mx-7 md:mx-10 lg:w-[8cm]">
					<p className="text-xl">Malu Bertanya Sesat Dijalan</p>
					<p className="font-semibold text-xl lg:text-2xl mt-1 mb-3">Silahkan hubungi kami untuk informasi lebih lanjut</p>
				</div>
				<form onSubmit={ask} className="w-[85vw] md:w-[60vw] lg:w-[25vw] md:mx-10">
					<div className="flex flex-col">
						<label className="font-semibold">Nama</label>
						<input
							type="text"
							value={nama}
							onChange={(e) => setNama(e.target.value)}
							className="text-black focus:outline-[#F62326] text-xs pl-2 h-[1cm] rounded bg-[#FFA7A7] placeholder:text-xs placeholder:text-black"
							placeholder="Tuliskan namamu..."
						/>
					</div>
					<div className="flex flex-col mt-2">
						<label className="font-semibold">Pertanyaan</label>
						<textarea
							className="resize-none text-black focus:outline-[#F62326] text-xs p-2 rounded bg-[#FFA7A7] placeholder:text-xs placeholder:text-black"
							cols="30"
							value={pertanyaan}
							onChange={(e) => setPertanyaann(e.target.value)}
							rows="8"
							placeholder="Tuliskan pertanyaanmu disini..."
						></textarea>
					</div>
					<button className="text-[#F62326] bg-white border-2 hover:border-white hover:bg-[#F62326] hover:text-white duration-150 py-2 px-5 rounded-md font-bold mt-3">Kirim Pesan</button>
				</form>
			</div>
		</div>
	);
};

export default Question;
