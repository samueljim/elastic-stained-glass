import React, { Component } from 'react';
import { ReactiveBase, DataSearch } from '@appbaseio/reactivesearch';
// import Modal from 'react-responsive-modal';

import Header from '../components/Header';
import Results from '../components/Results';
import appSettings from '../components/settings.json';
const theme = {
	typography: {
		fontFamily: 'Lato, Helvetica, sans-serif',
	},
	colors: {
		primaryColor: '#949494',
		titleColor: 'white'
	},
	secondaryColor: 'mediumseagreen',
};



class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentTopics: [],
		};
	}

	setTopics = (currentTopics) => {
		this.setState({
			currentTopics: currentTopics || [],
		});
	}

	toggleTopic = (Topic) => {
		const { currentTopics } = this.state;
		const nextState = currentTopics.includes(Topic)
			? currentTopics.filter(item => item !== Topic)
			: currentTopics.concat(Topic);
		this.setState({
			currentTopics: nextState,
		});
  }

	render() {
		return (
			<section className="container">
				<ReactiveBase
          url={appSettings.elasticURI}
					app={appSettings.elasticApp}
					credentials={appSettings.credentials}
					type={appSettings.type}
					theme={theme}
				>
					<div className="flex row-reverse app-container">
						<Header currentTopics={this.state.currentTopics} setTopics={this.setTopics} />
						<div className="results-container">
							<DataSearch
								componentId="search"
								filterLabel="Search"
								dataField={['name', 'description', 'name.raw', 'fullname', 'owner', 'topics']}
								placeholder="Search"
								iconPosition="left"
								autosuggest={true}
								URLParams={true}
								className="data-search-container results-container"
								innerClass={{
									input: 'search-input',
								}}
							/>
							<Results currentTopics={this.state.currentTopics} toggleTopic={this.toggleTopic} />
						</div>
					</div>
				</ReactiveBase>
			</section>
		);
	}
}

export default Index;
