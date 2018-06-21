import React, { Component } from 'react';
import { ReactiveBase, DataSearch } from '@appbaseio/reactivesearch';
// import Modal from 'react-responsive-modal';

import Header from '../components/Header';
import Results from '../components/Results';
import appSettings from '../components/settings.json';
import config from '../components/config.json';

const theme = {
	typography: {
		fontFamily: appSettings.fontFamily,
	},
	colors: {
		primaryColor: appSettings.primaryColor,
		titleColor: appSettings.titleColor
	},
	secondaryColor: appSettings.secondaryColor,
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
								dataField={[config.name, config.title, config.description, config.fullname, config.tags]}
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
