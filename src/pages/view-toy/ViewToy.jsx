import { Rating } from '@smastrom/react-rating';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useTitle from '../../hooks/title';

const ViewToy = () => {
	const { id } = useParams();
	// console.log(id);
	const [toy, setToy] = useState([]);

	useEffect(() => {
		const loadData = async () => {
			const res = await fetch(
				`https://incy-wincy-cars-server-fahimcc.vercel.app/view_toy/${id}`
			);
			const data = await res.json();
			setToy(data);
			// console.log(data);
		};
		loadData();
	}, [id]);

	useTitle(toy.toyName);
	return (
		<div className='container my-20'>
			<div className='card lg:card-side bg-base-100 border-2 border-primary shadow-xl'>
				<div className=' flex justify-center'>
					<figure className='w-48 md:w-60 lg:w-96 lg:p-10 rounded-lg'>
						<img className='w-full rounded-lg' src={toy.photoURL} alt='Album' />
					</figure>
				</div>
				<div className='divider lg:divider-horizontal'></div>
				<div className='card-body lg:py-16'>
					<h2 className='text-3xl font-medium'>{toy.toyName}</h2>
					<p>
						<b>Seller Name:</b> {toy.sellerName}
					</p>
					<p>
						<b>Seller Email:</b> {toy.sellerEmail}
					</p>
					<p>
						<b>Available Quantity:</b> {toy.availableQuantity}
					</p>
					<p>
						<b>Details Description:</b> {toy.detailsDescription}
					</p>
					<p className='text-2xl'>
						<b>Price:</b> ${toy.price}
					</p>
					<div className='flex flex-wrap md:flex-nowrap justify-center'>
						<div>
							<Rating style={{ maxWidth: 180 }} value={toy.ratings} readOnly />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ViewToy;
