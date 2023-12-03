import './index.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CameraButton = () => {
	const [picture, setPicture] = useState(null);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleChange = (e) => {
		setPicture(URL.createObjectURL(e.target.files[0]));
	};
	useEffect(() => {
		if (picture) {
			// processPhotoEden(picture);
		}
	}, [picture]);

	useEffect(() => {
		let timer;

		if (picture) {
			setLoading(true);

			timer = setTimeout(() => {
				console.log('loading');
				navigate('/IngredientsList');
			}, 3000);
		}

		//return () => clearTimeout(timer);
	}, [picture]);

	return (
		<div className="button-container">
			{loading ? (
				<span>Loading...</span>
			) : (
				<>
					<input
						type="file"
						onChange={handleChange}
						className="upload"
						style={{ display: 'none' }}
					/>
					<button className="take-a-pict"></button>
					<button
						className="upload-button"
						onClick={() => document.querySelector('.upload').click()}
					>
						Select image
					</button>
				</>
			)}
		</div>
	);
};

export default CameraButton;
