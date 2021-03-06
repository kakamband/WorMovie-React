import React from "react";
import Row from "./Row";

import requests from "../../config/requests";

function Content() {
	return (
		<div>
			<Row
				title={"WORMOVIE ORIGINALS"}
				fetchUrl={requests.fetchOriginals}
			/>
			<Row title={"Trending Now"} fetchUrl={requests.fetchTrending} />
			<Row
				title={"Action Movies"}
				fetchUrl={requests.fetchActionMovies}
			/>
			<Row
				title={"Comedy Movies"}
				fetchUrl={requests.fetchComedyMovies}
			/>
			<Row
				title={"Horror Movies"}
				fetchUrl={requests.fetchHorrorMovies}
			/>
			<Row
				title={"Romance Movies"}
				fetchUrl={requests.fetchRomanceMovies}
			/>
			<Row
				title={"Documentaries"}
				fetchUrl={requests.fetchDocumentaries}
			/>
		</div>
	);
}

export default Content;
