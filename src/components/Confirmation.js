/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import currencyFormatter from 'currency-formatter';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const Confirmation = () => {
	const { ref } = useParams();
	const navigate = useNavigate();
	const [data, setData] = useState({});
	let confirmation = '';

	useEffect(() => {
		axios
			.get(`https://wewatchnow.site/payment?reference=${ref}`, {
				headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`, 'Access-Control-Allow-Origin': '*' },
			})
			.then((res) => {
				setData(res.data.data);
			})
			.catch((error) => {
				navigate('/');
			});
	}, []);
	if (data.status === 'UNPAID') {
		confirmation = (
			<>
				<p className="text-center text-xs md:w-3/4 md:text-sm">
					<b>Terima Kasih </b>
					Kami akan aktifkan pesanan Anda segera setelah Anda melakukan konfirmasi pembayaran!
				</p>
				<button onClick={() => window.location.reload()} className="bg-[#F50000] text-white rounded-md px-10 py-3 text-sm my-6">
					Konfirmasi Pembayaran
				</button>
				<div className="border-[#F50000] border md:w-3/4 rounded-lg pb-3">
					<div className="flex flex-col gap-y-4 md:flex-row md:gap-x-14">
						<div className="text-[13px] ml-5 md:ml-8">
							<div className="flex mt-8">
								<p>NAMA</p>
								<p className="ml-[7.95rem]">{data.customer_name}</p>
							</div>
							<div className="flex">
								<p>EMAIL</p>
								<p className="ml-[8.1rem]">{data.customer_email}</p>
							</div>
							<div className="flex">
								<p>NO. HP</p>
								<p className="ml-[7.7rem]">{data.customer_phone}</p>
							</div>
							<div className="flex">
								<p>INVOICE ID</p>
								<p className="ml-[6.1rem]">{data.merchant_ref}</p>
							</div>
							<div className="flex">
								<p>METODE PEMBAYARAN</p>
								<p className="ml-[1.62rem]">{data.payment_name === 'QRIS (Customizable)' ? 'QRIS' : data.payment_name}</p>
							</div>
							{data.payment_name !== 'QRIS (Customizable)' && (
								<div className="flex">
									<p>KODE PEMBAYARAN</p>
									<p className="ml-[2.7rem]">{data.pay_code}</p>
								</div>
							)}
							<div className="flex">
								<p>NOMINAL TAGIHAN</p>
								<p className="ml-[3rem]">
									{currencyFormatter.format(data.amount, {
										symbol: 'Rp. ',
										decimal: ',',
										thousand: '.',
										precision: 0,
									})}
								</p>
							</div>
						</div>
						{data.qr_url && <img src={data.qr_url} alt={data.qr_url} onClick={() => window.open(data.qr_url, '_blank')} className="w-32 h-32 self-center cursor-pointer md:mt-6" />}
					</div>
					<div className="mt-5 ml-5 md:ml-8 text-sm">
						<b>Panduan Pembayaran Melalui {data.payment_name === 'QRIS (Customizable)' ? 'QRIS' : data.payment_name}</b>
						{data.instructions &&
							data.instructions.map((data) => {
								return (
									<div className="my-2">
										<p className="font-semibold">{data.title}</p>
										<ol className="text-xs list-decimal list-inside mt-1">
											{data.steps.map((step) => {
												return <li className="leading-6 mr-4 md:mr-0" dangerouslySetInnerHTML={{ __html: step }}></li>;
											})}
										</ol>
									</div>
								);
							})}
					</div>
				</div>
				<p className="text-xs w-[8cm] text-center mt-1">
					Jika Anda ada pertanyaan lebih lanjut silakan <b>chat kami</b> atau telepon 085156116920
				</p>
			</>
		);
	} else if (data.status === 'PAID') {
		confirmation = (
			<>
				<p className="text-sm w-3/4 text-center">
					<b>PEMBAYARAN BERHASIL!</b> Invoice & Kontrak Kerja akan segera dikirimkan ke Alamat Email Kamu
				</p>
				<button onClick={() => window.location.assign('https://mail.google.com/')} className="bg-[#F50000] text-white rounded-xl px-10 py-3 text-sm my-6">
					Cek Email Sekarang
				</button>
				<p className="text-xs w-[8cm] text-center mt-1 mb-[6.42cm]">
					Jika Anda ada pertanyaan lebih lanjut silakan <b>chat kami</b> atau telepon 085156116920
				</p>
			</>
		);
	} else {
		confirmation = (
			<>
				<p className="text-sm w-3/4 text-center">
					<b>PEMBAYARAN GAGAL!</b> Hal ini bisa terjadi karena link telah kadaluarsa atau kesalahan pada sistem, Harap Coba Lagi.
				</p>
				<button onClick={() => window.location.assign(`payment/${data.order_items[0].sku}`)} className="bg-[#F50000] text-white rounded-xl px-10 py-3 text-sm my-6">
					Coba Lagi
				</button>
				<p className="text-xs w-[8cm] text-center mt-1 mb-[6.42cm]">
					Jika Anda ada pertanyaan lebih lanjut silakan <b>chat kami</b> atau telepon 085156116920
				</p>
			</>
		);
	}

	return (
		<>
			<Helmet>
				<title>Confirmation</title>
			</Helmet>
			<main className="relative top-[100px] flex flex-col items-center m-auto w-[90vw] md:w-[20cm]">{confirmation}</main>
		</>
	);
};

export default Confirmation;
