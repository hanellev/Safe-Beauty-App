import './IngredientsList.css';
import { useNavigate } from 'react-router-dom';

export const IngredientsList = () => {
	const navigate = useNavigate();

	const redirectToDetailPage = () => {
		navigate('/DetailPage');
	};

	return (
		<div className="ingredients-container">
			<h2 className="ingredients-heading">Ingredients List</h2>

			<div className="ingredients">
				<div className="ingredients__category">
					<img
						className="ingredients-icon"
						src="./images/cream-green.png"
						alt="Green Cream jar icon"
					/>
					<div className="ingredients__text">
						<h3>Safe Ingredients</h3>
						<p>Amount:</p>
						<button
							className="ingredients-button"
							onClick={redirectToDetailPage}
						>
							Learn More
						</button>
					</div>
				</div>

				<div className="ingredients__category">
					<img
						className="ingredients-icon"
						src="./images/cream-orange.png"
						alt="Orange cream jar icon"
					/>
					<div className="ingredients__text">
						<h3>Harmful Ingredients</h3>
						<p>Amount:</p>
						<button
							className="ingredients-button"
							onClick={redirectToDetailPage}
						>
							Learn More
						</button>
					</div>
				</div>

				<div className="ingredients__category">
					<img
						className="ingredients-icon"
						src="./images/cream-red.png"
						alt="Red cream jar icon"
					/>
					<div className="ingredients__text">
						<h3>Dangerous Ingredients</h3>
						<p>Amount:</p>
						<button
							className="ingredients-button"
							onClick={redirectToDetailPage}
						>
							Learn More
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
