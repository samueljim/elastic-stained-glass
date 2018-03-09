import 'isomorphic-fetch'
import React from 'react'
import withRedux from 'next-redux-wrapper'
import { ReactiveBase, CategorySearch, SingleRange, ResultCard } from '@appbaseio/reactivesearch';

import Fork from '../components/Fork'
import Todo from '../components/Todo'

import initStore from '../utils/store'

class Index extends React.Component {
	static async getInitialProps({ store }) {
		// Adding a default/initialState can be done as follows:
		// store.dispatch({ type: 'ADD_TODO', text: 'It works!' });
		const res = await fetch(
			'https://api.github.com/repos/ooade/NextSimpleStarter'
		)
		const json = await res.json()
		return { stars: json.stargazers_count }
	}

	render() {
		const { stars } = this.props
		return (
			<ReactiveBase
			app="car-store"
			credentials="cf7QByt5e:d2d60548-82a9-43cc-8b40-93cbbe75c34c">
				<div style={{ display: "flex", flexDirection: "row" }}>
					<div style={{ display: "flex", flexDirection: "column", width: "40%" }}>
						<CategorySearch
							componentId="searchbox"
							dataField="name"
							categoryField="brand.raw"
							placeholder="Search for cars"
							style={{
								padding: "5px",
								marginTop: "10px"
							}}
						/>
						<SingleRange
							componentId="ratingsfilter"
							title="Filter by ratings"
							dataField="rating"
							data={[
								{"start": "4", "end": "5", "label": "4 stars and up"},
								{"start": "3", "end": "5", "label": "3 stars and up"},
								{"start": "2", "end": "5", "label": "2 stars and up"},
								{"start": "1", "end": "5", "label": "see all ratings"},
							]}
							defaultSelected="4 stars and up"
							style={{
								padding: "5px",
								marginTop: "10px"
							}}
						/>
					</div>
					<ResultCard
						componentId="result"
						title="Results"
						dataField="name"
						from={0}
						size={6}
						pagination={true}
						react={{
							and: ["searchbox", "ratingsfilter"]
						}}
						onData={(res) => {
							return {
								image: "https://www.enterprise.com/content/dam/global-vehicle-images/cars/FORD_FOCU_2012-1.png",
								title: res.name,
								description: res.brand + " " + "★".repeat(res.rating)
							}
						}}
						style={{
							width: "60%",
							textAlign: "center"
						}}
					/>
				</div>
			</ReactiveBase>
		);
	}
}

export default withRedux(initStore)(Index)
