/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-target-blank */
import briva from '../img/payment/briva.png';
import bca from '../img/payment/bca.png';
import cimb from '../img/payment/cimb.png';
import mandiri from '../img/payment/mandiri.png';
// import maybank from '../img/payment/maybank.png';
// import dana from '../img/payment/dana.png';
// import bsi from '../img/payment/bsi.png';
// import gopay from '../img/payment/gopay.png';
// import jago from '../img/payment/jago.png';
// import jenius from '../img/payment/jenius.png';
// import linkaja from '../img/payment/linkaja.png';
// import mega from '../img/payment/mega.png';
// import octo from '../img/payment/octo.png';
// import ovo from '../img/payment/ovo.png';
// import uob from '../img/payment/uob.png';
// import muamalat from '../img/payment/muamalat.png';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import currencyFormatter from 'currency-formatter';
// import { sha256 } from 'js-sha256';
import md5 from 'md5';
import ReactLoading from 'react-loading';

const Payment = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [method, setMethod] = useState('-');
	const [code, setCode] = useState('-');
	const [nama, setNama] = useState('');
	const [admin, setAdmin] = useState(0);
	const [email, setEmail] = useState('');
	const [no, setNo] = useState('');
	const [paket, setPaket] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const pembayaran = () => {
		const merchantCode = process.env.REACT_APP_MERCHANT_CODE;
		const merchantOrderId = `INV${Math.floor(Math.random() * 10 ** 5)}`;
		const signature = md5(merchantCode + merchantOrderId + paket.hargaPaket + process.env.REACT_APP_API_KEY);
		const payload = {
			merchantCode,
			paymentMethod: code,
			merchantOrderId,
			paymentAmount: paket.hargaPaket,
			productDetails: paket.keteranganPaket[0],
			customerVaName: nama,
			email,
			returnUrl: 'https://magnetwork.my.id/',
			callbackUrl: 'https://magnetwork.my.id/',
			phoneNumber: no,
			signature,
		};
		setIsLoading(true);
		axios
			.post('https://wewatchnow.site/payment', payload, {
				headers: { 'Access-Control-Allow-Origin': '*' },
			})
			.then((res) => {
				window.location.assign(res.data.paymentUrl);
			})
			.catch((error) => {
				setIsLoading(false);
				alert('Pembayaran tidak bisa dilakukan. Metode pembayaran dan identitas wajib isi');
				console.log(error);
			});
	};

	useEffect(() => {
		const data = JSON.stringify({
			collection: 'Url',
			database: 'Magnetwork',
			dataSource: 'Cluster0',
			filter: {
				_id: {
					$oid: id,
				},
			},
		});
		axios
			.post(`https://wewatchnow.site/getData`, data, {
				headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', Authorization: `Bearer ${process.env.REACT_APP_API_KEY_MONGODB}` },
			})
			.then((res) => {
				setPaket(res.data.document);
			})
			.catch((error) => {
				navigate('/');
			});
	}, []);
	return (
		<>
			<Helmet>
				<title>Payment</title>
			</Helmet>
			<main className="relative top-[100px] flex flex-col items-center pb-12 md:pb-0 lg:w-[23cm] lg:m-auto md:items-start md:flex-row-reverse md:justify-evenly">
				<div className="w-[90vw] md:w-[9cm] pb-4 border border-[#F62326] rounded-lg flex flex-col items-center">
					<div className="mt-6 w-[65%] pb-3 drop-shadow-lg bg-white rounded-xl">
						<div className="py-5 px-3 bg-gradient-to-b from-[#FF4343] to-[#E80000] text-white rounded-t-xl">
							<p className="font-extralight tracking-wider">PAKET</p>
							<p className="font-semibold">{paket.namaPaket}</p>
						</div>
						<ul className="list-disc ml-10 mt-3 text-[11px]">
							{paket.keteranganPaket &&
								paket.keteranganPaket.map((result) => {
									return <li className="leading-6">{result}</li>;
								})}
						</ul>
					</div>
					<div className="text-sm w-full mt-4">
						<div className="flex leading-6 font-semibold mx-5 justify-between">
							<p>Harga Paket</p>
							<p>
								{currencyFormatter.format(paket.hargaPaket, {
									symbol: 'Rp. ',
									decimal: ',',
									thousand: '.',
									precision: 0,
								})}
							</p>
						</div>
						<div className="flex leading-6 font-semibold mx-5 justify-between">
							<p>Biaya Admin</p>
							<p>
								{currencyFormatter.format(admin, {
									symbol: 'Rp. ',
									decimal: ',',
									thousand: '.',
									precision: 0,
								})}
							</p>
						</div>
						<div className="flex leading-6 font-bold mx-5 justify-between">
							<p>TOTAL</p>
							<p>
								{currencyFormatter.format(paket.hargaPaket + admin, {
									symbol: 'Rp. ',
									decimal: ',',
									thousand: '.',
									precision: 0,
								})}
							</p>
						</div>
						<div className="flex leading-7 font-semibold text-xs mx-5 justify-between">
							<p>Metode Pembayaran</p>
							<p>{method}</p>
						</div>
					</div>
					<div className="mt-8 w-full flex flex-col items-center">
						<button onClick={pembayaran} className="flex gap-x-3 text-white w-3/4 justify-center py-4 rounded-xl font-semibold bg-[#F62326] duration-150 hover:bg-[#f62326ec]">
							<p>BAYAR SEKARANG</p>
							{isLoading && <ReactLoading type={'spinningBubbles'} height={20} width={20} />}
						</button>
						<p className="text-[11px] text-center mx-8 mt-1">dengan membayar paket ini Saya Menyetujui Syarat & Ketentuan yang berlaku</p>
					</div>
				</div>
				<div className="flex flex-col items-center md:block mt-3 md:mt-0">
					<div className="w-[90vw] md:w-auto">
						<div className="flex flex-col gap-y-1 mb-3">
							<label className="font-semibold text-xs">Nama Lengkap</label>
							<input
								value={nama}
								onChange={(e) => setNama(e.target.value)}
								type="text"
								className="border border-[#F62326] focus:outline-[#F62326] rounded-md px-2 py-4 text-xs h-[30px]"
								placeholder="Tuliskan nama lengkap kamu"
							/>
						</div>
						<div className="flex flex-col gap-y-1 my-3">
							<label className="font-semibold text-xs">Alamat Email</label>
							<input
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								type="text"
								className="border border-[#F62326] focus:outline-[#F62326] rounded-md px-2 py-4 text-xs h-[30px]"
								placeholder="Tuliskan email kamu"
							/>
						</div>
						<div className="flex flex-col gap-y-1 my-3">
							<label className="font-semibold text-xs">Nomor Handphone</label>
							<input
								value={no}
								onChange={(e) => setNo(e.target.value)}
								type="text"
								className="border border-[#F62326] focus:outline-[#F62326] rounded-md px-2 py-4 text-xs h-[30px]"
								placeholder="Tuliskan No Handphone kamu"
							/>
						</div>
					</div>
					<div className="mx-5 w-[90vw] md:w-[9.5cm] md:mx-0">
						<h1 className="font-bold text-xs">Pilih Metode Pembayaran</h1>
						<p className="text-[11px] font-semibold mt-1">
							Pilih salah satu dari metode pembayaran yang tersedia, kami merekomendasikan melalui Transfer Virtual Account untuk kemudahan transaksi.
						</p>
					</div>
					<div className="mt-3 w-[90vw] md:w-[10cm] h-[7.5cm] border border-[#F62326] rounded-lg">
						<h1 className="bg-[#F62326] rounded-md py-2 px-4 text-white text-xs">Transfer Virtual Account (Pengecekan Otomatis)</h1>
						<div className="mt-4 flex flex-col gap-y-2">
							<div
								className="flex gap-x-3 mx-4 cursor-pointer"
								onClick={() => {
									setMethod('BCA Virtual Account');
									setCode('BC');
									setAdmin(5000);
								}}
							>
								<img src={bca} alt="bca" className={`border-2 p-1 rounded-lg ${method === 'BCA Virtual Account' ? 'border-[#F62326]' : 'border-[#C6C6C6]'}`} />
								<p className="self-center text-[#434343] text-sm">BCA Virtual Account</p>
							</div>
							<div
								className="flex gap-x-3 mx-4 cursor-pointer"
								onClick={() => {
									setMethod('BRI Virtual Account');
									setCode('BR');
									setAdmin(4000);
								}}
							>
								<img src={briva} alt="briva" className={`border-2 p-1 rounded-lg ${method === 'BRI Virtual Account' ? 'border-[#F62326]' : 'border-[#C6C6C6]'}`} />
								<p className="self-center text-[#434343] text-sm">BRI Virtual Account</p>
							</div>
							<div
								className="flex gap-x-3 mx-4 cursor-pointer"
								onClick={() => {
									setMethod('CIMB Virtual Account');
									setCode('B1');
									setAdmin(3000);
								}}
							>
								<img src={cimb} alt="cimb" className={`border-2 p-1 rounded-lg ${method === 'CIMB Virtual Account' ? 'border-[#F62326]' : 'border-[#C6C6C6]'}`} />
								<p className="self-center text-[#434343] text-sm">CIMB NIAGA Virtual Account</p>
							</div>
							<div
								className="flex gap-x-3 mx-4 cursor-pointer"
								onClick={() => {
									setMethod('Mandiri Virtual Account');
									setCode('M2');
									setAdmin(3000);
								}}
							>
								<img src={mandiri} alt="mandiri" className={`border-2 p-1 rounded-lg ${method === 'Mandiri Virtual Account' ? 'border-[#F62326]' : 'border-[#C6C6C6]'}`} />
								<p className="self-center text-[#434343] text-sm">Mandiri Virtual Account</p>
							</div>
							{/* <div
								className="flex gap-x-3 mx-4 cursor-pointer"
								onClick={() => {
									setMethod('MayBank Virtual Account');
									setCode('MYBVA');
									setAdmin(4250);
								}}
							>
								<img src={maybank} alt="maybank" className={`border-2 p-1 rounded-lg ${method === 'MayBank Virtual Account' ? 'border-[#F62326]' : 'border-[#C6C6C6]'}`} />
								<p className="self-center text-[#434343] text-sm">MayBank Virtual Account</p>
							</div>*/}
						</div>
					</div>
					{/* <div
						className={`mt-3 w-[90vw] md:w-[10cm] h-[7.5cm] border ${method === 'QRIS' ? 'border-[#da1e21]' : 'border-[#F62326]'} rounded-lg cursor-pointer`}
						onClick={() => {
							setMethod('QRIS');
							setCode('QRISC');
							setAdmin(Math.ceil(paket.hargaPaket * 0.007 + 800));
						}}
					>
						<h1 className={`${method === 'QRIS' ? 'bg-[#c01d20]' : 'bg-[#F62326]'} rounded-md py-2 px-4 text-white text-xs`}>QRIS</h1>
						<p className="text-[#4E4E4E] text-xs mx-4 mt-2">
							Layanan QRIS bisa digunakan untuk semua Bank, eWallet, maupun provider pembayaran lain yang memiliki fitur Scan QRIS.{' '}
							<a href="https://paydia.id/merchant/" target="_blank" className="underline decoration-2 underline-offset-4">
								Klik disini untuk lihat semua provider yang memiliki fitur tersebut.
							</a>
						</p>
						<div className=" mt-5">
							<div className="flex ml-3 gap-x-2">
								<img src={jenius} alt="jenius" className="border-2 border-[#C6C6C6] p-1 w-[55px] rounded-lg" />
								<img src={jago} alt="jago" className="border-2 border-[#C6C6C6] p-1 w-[55px] rounded-lg" />
								<img src={octo} alt="octo" className="border-2 border-[#C6C6C6] p-1 w-[55px] rounded-lg" />
								<img src={mega} alt="mega" className="border-2 border-[#C6C6C6] p-1 w-[55px] rounded-lg" />
								<img src={uob} alt="uob" className="border-2 border-[#C6C6C6] p-1 w-[55px] rounded-lg" />
							</div>
							<div className="flex ml-3 mt-3 gap-x-2">
								<img src={muamalat} alt="muamalat" className="border-2 border-[#C6C6C6] p-1 w-[55px] rounded-lg" />
								<img src={bsi} alt="bsi" className="border-2 border-[#C6C6C6] p-1 w-[55px] rounded-lg" />
								<img src={gopay} alt="gopay" className="border-2 border-[#C6C6C6] p-1 w-[55px] rounded-lg" />
								<img src={ovo} alt="ovo" className="border-2 border-[#C6C6C6] p-1 w-[55px] rounded-lg" />
							</div>
							<div className="flex ml-3 mt-3 gap-x-2">
								<img src={linkaja} alt="linkaja" className="border-2 border-[#C6C6C6] p-1 w-[55px] rounded-lg" />
								<img src={dana} alt="dana" className="border-2 border-[#C6C6C6] p-1 w-[55px] rounded-lg" />
								<p className="border-2 border-[#C6C6C6] w-[55px] text-[8px] rounded-lg grid place-items-center text-center">20 Bank Lainnya</p>
							</div>
						</div>
					</div> */}
				</div>
			</main>
		</>
	);
};

export default Payment;
