import 'isomorphic-fetch';
import React from 'react';
import Markdown from 'react-markdown'
import withRedux from 'next-redux-wrapper';
import { ReactiveBase, RangeInput, DataSearch, TagCloud, ResultCard, CategorySearch, SingleRange  } from '@appbaseio/reactivesearch';

import CssBaseline from 'material-ui/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
	palette: {
	  type: 'dark'
	},
});

class Index extends React.Component {

	render() {
		return (
			<ReactiveBase
			app="car-store"
			credentials="cf7QByt5e:d2d60548-82a9-43cc-8b40-93cbbe75c34c">
					<ul id="slide-out" className="sidenav sidenav-fixed">
						<DataSearch
              autosuggest={true}
							componentId="search"
							dataField={["name", "brand"]}
              placeholder="Search for cars"
              URLParams={true}
						/>
            <TagCloud
              componentId="TagCloud"
              multiSelect={true}
              showFilter={true}
              URLParams={true}
              dataField="brand.raw"
            />
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
								and: ["search", "TagCloud"]
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

export default (Index);
