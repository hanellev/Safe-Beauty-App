import './CameraButton.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { processPhotoEden } from '../../api/edenAi.js';

const CameraButton = () => {
	// const [picture, setPicture] = useState(false);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleChange = (e) => {
		processPhotoEden(e.target.files[0]);
		setLoading(true);
	};

	useEffect(() => {
		let timer;

		if (loading) {
			// setLoading(true);

			timer = setTimeout(() => {
				navigate('/IngredientsList');
			}, 3000);
		}

		//return () => clearTimeout(timer);
	}, [loading]);

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
					<button
						role="img"
						aria-label="logo-cream-jar"
						className="take-a-pict"
						onClick={() => document.querySelector('.upload').click()}
					></button>
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
