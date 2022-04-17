import React, { useMemo } from "react";
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

	return (
		<div className="HeroItem" style={style}>
			<div className="info">
				<h2>{hero.name}</h2>
				{hero.description && <p>{hero.description}</p>}
			</div>
		</div>
	);
}

export default HeroItemComponent;
