import 'isomorphic-fetch';
import React from 'react';
import Markdown from 'react-markdown'
import withRedux from 'next-redux-wrapper';
import { ReactiveBase, RangeInput, ResultCard, CategorySearch, SingleRange  } from '@appbaseio/reactivesearch';

import initStore from '../utils/store';

import Loader from '../components/Loader';

class Index extends React.Component {
	render() {
		return (
			<ReactiveBase
			app="car-store"
			credentials="cf7QByt5e:d2d60548-82a9-43cc-8b40-93cbbe75c34c">
			  {/* <div className="navbar-fixed"> */}
					{/* <nav> */}
						{/* <div className="nav-wrapper"> */}
							<a data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
							{/* <p>Hey</p> */}
						{/* </div> */}
					{/* </nav> */}
				{/* </div> */}
					<ul id="slide-out" className="sidenav sidenav-fixed">
						<CategorySearch
							componentId="search"
							dataField="name"
							categoryField="brand.raw"
              placeholder="Search for cars"
              URLParams={true}
							style={{
								padding: "5px",
								marginTop: "10px"
							}}
						/>
            <RangeInput
              componentId="ratingFilter"
              dataField="rating"
              title="Ratings"
              URLParams={true}
              snap={false}
              range={{
                "start": 2,
                "end": 5
              }}
            />
						{/* <SingleRange
							componentId="ratingsfilter"
							title="Filter by ratings"
							dataField="rating"
							data={[
								{"start": "4", "end": "5", "label": "4 stars and up"},
								{"start": "3", "end": "5", "label": "3 stars and up"},
								{"start": "2", "end": "5", "label": "2 stars and up"},
								{"start": "1", "end": "5", "label": "see all ratings"},
							]}
							defaultSelected="see all ratings"
							style={{
								padding: "5px",
								marginTop: "10px"
							}}
						/> */}
					</ul>
					<div className="wrapper">
						<ResultCard
							title="Results"
							componentId="result"
							stream={true}
							dataField="name"
							size={20}
							pagination={false}
							showResultStats={true}
							loader="Loading Results.."
							react={{
								and: ["search", "ratingFilter"]
							}}
							onData={(res) => {
								return {
									image: "https://www.enterprise.com/content/dam/global-vehicle-images/cars/FORD_FOCU_2012-1.png",
									title: res.name,
									description: res.brand + " " + "★".repeat(res.rating)
								}
							}}
							style={{
								width: "100%",
								textAlign: "center"
							}}
						/>
					<style jsx global>{`
						.wrapper {
							padding-left: 300px;
							}

						@media only screen and (max-width : 992px) {
						.wrapper {
							padding-left: 0;
						}
					}
				 	`}</style>
				</div>
			</ReactiveBase>
		);
	}
}

export default withRedux(initStore)(Index);
