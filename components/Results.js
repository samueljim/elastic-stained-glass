import React from 'react';
import { SelectedFilters, ReactiveList } from '@appbaseio/reactivesearch';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';
import ModalApp from './ModalApp';

import Topic from './Topic';
import config from './config.json';
// import Loader from './Loader';

const onResultStats = (results, time) => (
	<div className="flex justify-end">
		{results} results found in {time}ms
	</div>
);

const onData = (data, currentTopics, toggleTopic) => (
  <div>
    <ModalApp data={data} children={
      <div className="result-item" key={data[config.id]}>
      <div className="flex justify-center align-center result-card-header">
        <img className="avatar" src={data[config.picture]} alt="avatar" />
        <a className="link" href={data[config.url]} target="_blank" rel="noopener noreferrer">
          <div className="flex wrap">
            <div>{data[config.title]}/</div>
            <div>{data[config.name]}</div>
          </div>
        </a>
      </div>
      <div className="m10-0">{data[config.info]}</div>
      {(data[config.tags]) &&
      <div className="flex wrap justify-center">
        {
          data[config.tags].slice(0, 7)
          .map(item => (
              <Topic
              key={item}
                active={currentTopics.includes(item)}
                toggleTopic={toggleTopic}
                >
                {item}&emsp;
              </Topic>
            ))
          }
      </div>
      }
    </div>
    } />
  </div>
);

const Results = ({ toggleTopic, currentTopics }) => (
	<div className="result-list">
		<SelectedFilters className="m1" />
		<ReactiveList
			componentId="results"
			dataField="name"
			onData={data => onData(data, currentTopics, toggleTopic)}
			onResultStats={onResultStats}
			react={{
				and: ['language', 'topics', 'pushed', 'created', 'stars', 'forks', 'search'],
      }}
			pagination={false}
			innerClass={{
				list: 'result-list-container',
				pagination: 'result-list-pagination',
				resultsInfo: 'result-list-info',
				poweredBy: 'powered-by',
			}}
			size={10}
			sortOptions={[
				{
					label: 'Best Match',
					dataField: '_score',
					sortBy: 'desc',
				},
				{
					label: 'Most Stars',
					dataField: 'stars',
					sortBy: 'desc',
				},
				{
					label: 'Fewest Stars',
					dataField: 'stars',
					sortBy: 'asc',
				},
				{
					label: 'Most Forks',
					dataField: 'forks',
					sortBy: 'desc',
				},
				{
					label: 'Fewest Forks',
					dataField: 'forks',
					sortBy: 'asc',
				},
				{
					label: 'A to Z',
					dataField: 'owner.raw',
					sortBy: 'asc',
				},
				{
					label: 'Z to A',
					dataField: 'owner.raw',
					sortBy: 'desc',
				},
				{
					label: 'Recently Updated',
					dataField: 'pushed',
					sortBy: 'desc',
				},
				{
					label: 'Least Recently Updated',
					dataField: 'pushed',
					sortBy: 'asc',
				},
			]}
		/>
	</div>
);

Results.propTypes = {
	toggleTopic: PropTypes.func,
	currentTopics: PropTypes.arrayOf(PropTypes.string),
};

export default Results;
