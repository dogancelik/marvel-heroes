import React from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { useHeroes } from "../api";
import HeroItem from "../HeroItem/HeroItem";
import "./HeroList.css"

function HeroListComponent() {
	const { data, loading, error, loadMore, hasNextPage } = useHeroes();

	const [infiniteRef] = useInfiniteScroll({
		loading,
		hasNextPage,
		onLoadMore: loadMore,
		disabled: !!error,
		rootMargin: "0px 0px 400px 0px",
	});

	return (
		<div className="HeroList">
			{loading && <div className="loading fetch">Loading...</div>}
			{data?.data?.results &&
				data.data.results.map((item) => (
					<HeroItem hero={item} key={item.id} />
				))}
			{hasNextPage && (
				<div ref={infiniteRef} className="loading infinite">
					Loading...
				</div>
			)}
		</div>
	);
}

export default HeroListComponent;
