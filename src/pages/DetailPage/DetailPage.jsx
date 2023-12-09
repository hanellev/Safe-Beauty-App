import './DetailPage.css';

export const DetailPage = () => {
	return (
		<div className="detail-page-container">
			<img
				className="detail-icon"
				src="./images/cream-red.png"
				alt="Red cream jar icon"
			/>
			<h2 className="detail-heading">Dangerous Ingredients</h2>
			<div className="detail-info">
				<h4 className="detail-name">para-dioxane</h4>
				<div className="detail-labels">
					<label className="allergenic">Allergenic</label>
					<label className="carcinogenic">Carcinogenic</label>
					<label className="pregnancy">In pregnancy</label>
				</div>
				<p className="detail-impact">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem neque
					laudantium, rerum facilis natus exercitationem recusandae corrupti
					magnam tenetur illum aspernatur. Hic quaerat quisquam labore ducimus,
					consequuntur unde quidem similique.
				</p>
			</div>
		</div>
	);
};
