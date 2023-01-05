import axios from 'axios';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ReactLoading from 'react-loading';
import { Helmet } from 'react-helmet';

const Custom = () => {
	const [namaPaket, setNamaPaket] = useState('');
	const [keteranganPaket, setKeteranganPaket] = useState('');
	const [hargaPaket, setHargaPaket] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [link, setLink] = useState('');

	const create = (e) => {
		e.preventDefault();
		setIsLoading(true);
		const data = JSON.stringify({
			collection: 'Url',
			database: 'Magnetwork',
			dataSource: 'Cluster0',
			document: {
				namaPaket: namaPaket.toUpperCase(),
				keteranganPaket: keteranganPaket.split(/\r?\n/),
				hargaPaket: parseInt(hargaPaket),
			},
		});

		axios
			.post(`https://wewatchnow.site/getUrl`, data, {
				headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'api-key': process.env.REACT_APP_API_KEY_MONGODB },
			})
			.then((res) => {
				setLink(`${window.location.origin}/payment/${res.data.insertedId}`);
				setIsLoading(false);
			})
			.catch((error) => {
				window.location.reload();
			});
	};

	return (
		<>
			<Helmet>
				<title>Custom</title>
			</Helmet>
			<div className="relative top-[90px] flex flex-col items-center m-auto w-[84vw] md:w-[21cm]">
				<h1 className="font-bold text-[19px] md:text-2xl">Form Pembuatan Paket Harga</h1>
				<form onSubmit={create} className="w-full md:w-[53%] mt-2 flex flex-col">
					<div className="flex flex-col gap-y-1">
						<label className="font-semibold text-xs">Nama Paket</label>
						<input
							required
							value={namaPaket}
							onChange={(e) => setNamaPaket(e.target.value)}
							type="text"
							className="border border-[#F62326] focus:outline-[#F62326] rounded-md px-2 py-4 text-xs h-[30px]"
							placeholder="Tuliskan nama paket"
						/>
					</div>
					<div className="flex flex-col gap-y-1 my-3">
						<label className="font-semibold text-xs">Keterangan Paket</label>
						<textarea
							required
							value={keteranganPaket}
							onChange={(e) => setKeteranganPaket(e.target.value)}
							cols="30"
							rows="12"
							className="border border-[#F62326] focus:outline-[#F62326] rounded-md px-2 py-1 text-xs resize-none"
							placeholder="Tulis keterangan paket"
						></textarea>
					</div>
					<div className="flex flex-col gap-y-1 mb-5">
						<label className="font-semibold text-xs">Harga Paket</label>
						<input
							required
							value={hargaPaket}
							onChange={(e) => setHargaPaket(e.target.value)}
							type="text"
							className="border border-[#F62326] focus:outline-[#F62326] rounded-md px-2 py-4 text-xs h-[30px]"
							placeholder="Tulis harga paket"
						/>
					</div>
					<button className="text-[13px] self-end bg-[#F50000] duration-150 font-semibold py-3 px-12 rounded-lg text-white hover:bg-[#f50000ea] flex gap-x-2">
						<p>Buat Sekarang</p>
						{isLoading && <ReactLoading type={'spinningBubbles'} height={20} width={20} />}
					</button>
				</form>
				<div className="flex flex-col gap-y-1 w-full md:w-[53%] mt-7 py-6 border-t border-[#AAAAAA]">
					<label className="font-semibold text-xs">Link Pembayaran</label>
					<input type="text" className="border border-[#F62326] focus:outline-[#F62326] rounded-md px-2 py-4 text-xs h-[30px]" placeholder="Link Pembayaran" disabled value={link} />
					<CopyToClipboard text={link}>
						<svg
							className="w-5 h-5 absolute right-[0.25rem] mt-[1.7rem] md:right-[5.1cm] md:mt-[0.74cm] z-10 cursor-pointer active:opacity-80"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
							/>
						</svg>
					</CopyToClipboard>
					<button
						onClick={() => window.location.assign(link)}
						className="text-[13px] duration-150 bg-[#F50000] font-semibold py-3 px-12 rounded-lg md:w-3/4 self-center mt-3 text-white hover:bg-[#f50000ea]"
					>
						Ke Halaman Pembayaran
					</button>
				</div>
			</div>
		</>
	);
};

export default Custom;
