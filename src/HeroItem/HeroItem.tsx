import React, { useMemo, useState } from "react";
import { HeroData } from "../models";
import "./HeroItem.css";

interface HeroProps {
	hero: HeroData;
}

function HeroItemComponent({ hero }: HeroProps) {
	const imageUrl = useMemo(
		() => hero.thumbnail.path + "." + hero.thumbnail.extension,
		[hero.thumbnail]
	);

	const style = useMemo(
		() => ({ "--image-url": `url(${imageUrl})` } as React.CSSProperties),
		[imageUrl]
	);

	const [showComics, setShowComics] = useState(false);

	return (
		<div className="HeroItem" style={style}>
			<div className="info">
				<h2>
					{hero.name}
					<button onClick={() => setShowComics(!showComics)}>
						{showComics ? "Hide" : "Show"} comics
					</button>
				</h2>
				{hero.description && <p>{hero.description}</p>}
				{showComics && (
					<ul className="comics">
						{hero.comics.items.map((item) => (
							<li key={item.resourceURI}>
								<a href={item.resourceURI}>{item.name}</a>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}

export default HeroItemComponent;
