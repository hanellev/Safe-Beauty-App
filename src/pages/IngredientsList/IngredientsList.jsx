import './IngredientsList.css';

export const IngredientsList = () => {
	return (
		<div className="ingredients-container">
			<h2 className="ingredients-heading">Ingredients List</h2>

			<div className="ingredient">
				<div className="ingredient__safe">
					<img
						className="ingredient-icon"
						src="./images/cream-green.png"
						alt="Safe Icon"
					/>
					<div className="ingredient__text">
						<h3>Safe Ingredients</h3>
						<p>Amount:</p>
					</div>
				</div>

				<div className="ingredient__harmful">
					<img
						className="ingredient-icon"
						src="./images/cream-orange.png"
						alt="Harmful Icon"
					/>
					<div className="ingredient__text">
						<h3>Harmful Ingredients</h3>
						<p>Amount:</p>
					</div>
				</div>

				<div className="ingredient__dangerous">
					<img
						className="ingredient-icon"
						src="./images/cream-red.png"
						alt="Dangerous Icon"
					/>
					<div className="ingredient__text">
						<h3>Dangerous Ingredients</h3>
						<p>Amount:</p>
					</div>
				</div>
			</div>
		</div>
	);
};
