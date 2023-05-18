import { Link } from 'react-router-dom';
import car from '../../assets/car.svg';

const Header = () => {
	const logo = (
		<div className='flex flex-col items-center'>
			<img className='w-24' src={car} alt='' />
			<span className='-mt-4 text-lg font-medium'>Incy Wincy Cars</span>
		</div>
	);
	const navBar = (
		<>
			<li>
				<Link to='/'>Home</Link>
			</li>
			<li>
				<Link to='/all-toys'>All Toys</Link>
			</li>
			<li>
				<Link to='/my-toys'>My Toys</Link>
			</li>
			<li>
				<Link to='/add-a-toys'>Add A Toys</Link>
			</li>
			<li>
				<Link to='/blog'>Blog</Link>
			</li>
			<li>
				<Link to='/login'>Login</Link>
			</li>
		</>
	);
	return (
		<div className='shadow-lg'>
			<div className='container'>
				<div className='navbar'>
					<div className='navbar-start '>
						<div className='dropdown'>
							<label tabIndex={0} className='btn btn-ghost lg:hidden '>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M4 6h16M4 12h8m-8 6h16'
									/>
								</svg>
							</label>
							<ul
								tabIndex={0}
								className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
							>
								{navBar}
							</ul>
						</div>
						<Link to='/' className='hidden lg:block'>
							{logo}
						</Link>
					</div>
					<Link to='/' className='lg:hidden block navbar-center'>
						{logo}
					</Link>
					<div className='navbar-center hidden lg:flex'>
						<ul className='menu menu-horizontal px-1'>{navBar}</ul>
					</div>
					<div className='navbar-end'>
						<div className='dropdown dropdown-end'>
							<label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
								<div className='w-10 rounded-full'>
									<img src='/images/stock/photo-1534528741775-53994a69daeb.jpg' />
								</div>
							</label>
							<ul
								tabIndex={0}
								className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
							>
								<li>
									<a>Profile</a>
								</li>
								<li>
									<a>Logout</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
