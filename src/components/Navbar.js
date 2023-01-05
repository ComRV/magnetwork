import rekomendasiku from '../img/logo/rekomendasiku.png';
import magnetwork2 from '../img/logo/magnetwork2.png';

const Navbar = (props) => {
	return (
		<nav className={`flex h-[60px] w-screen fixed z-10 bg-white justify-around items-center ${props.to === 'payment' && 'drop-shadow-lg'}`}>
			<div className={`relative bottom-[7px] flex gap-x-2 ${props.to === 'payment' && 'w-[90%] md:w-auto justify-between'}`}>
				<img src={rekomendasiku} alt="rekomendasiku" className="w-32 " />
				{props.to === 'payment' && (
					<>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={3.5}
							stroke="currentColor"
							className="w-4 h-4 self-end text-[#2D2D2D] relative top-[2px] hidden md:block"
						>
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
						<img src={magnetwork2} alt="magnetwork logo" className="w-32 relative top-[5px]" />
					</>
				)}
			</div>
			<ul className={`flex gap-x-2 md:gap-x-5 font-bold text-[13px] ${props.to === 'payment' && 'hidden'}`}>
				<li className="hidden md:block duration-100 box-content hover:border-b-2 hover:border-black">
					<a href="#about">ABOUT</a>
				</li>
				<li className="duration-100 box-content hover:border-b-2 hover:border-black">
					<a href="#service">SERVICE</a>
				</li>
				<li className="duration-100 box-content hover:border-b-2 hover:border-black">
					<a href="#contact">CONTACT</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
