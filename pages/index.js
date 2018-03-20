import 'isomorphic-fetch';
import React from 'react';
import Markdown from 'react-markdown'
import withRedux from 'next-redux-wrapper';
import initStore from '../utils/store';

import { ReactiveBase, ResultCard, CategorySearch, SingleRange  } from '@appbaseio/reactivesearch';

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
				<CssBaseline />
				<MuiThemeProvider theme={theme}>
					<CategorySearch
						componentId="searchbox"
						dataField="name"
						categoryField="brand.raw"
						placeholder="Search for cars"
					/>
					<ResultCard
						title="Results"
						componentId="result"
						stream={true}
						dataField="name"
						size={10}
						pagination={false}
						showResultStats={true}
						loader="Loading Results.."
						react={{
							and: ["searchbox"]
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
				</MuiThemeProvider>
			</ReactiveBase>
		);
	}
}

export default withRedux(initStore)(Index)
