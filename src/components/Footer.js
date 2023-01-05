const Footer = (props) => {
	return (
		<footer
			className={`bg-[#2E2E2E] ${
				props.to === 'payment' ? 'mt-[14rem] hidden md:flex' : 'mt-10 flex'
			} py-3.5 md:py-2 text-sm text-white flex-col items-center gap-y-1 md:flex-row md:justify-evenly`}
		>
			<p className="font-light">Magnetwork x Rekomendasiku</p>
			<p className="font-semibold md:w-[4cm] md:mt-1">
				All Right Reserved <p className="inline md:ml-[5.9rem]">2022</p>
			</p>
		</footer>
	);
};

export default Footer;
