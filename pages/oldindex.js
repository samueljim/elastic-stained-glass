import 'isomorphic-fetch';
import React from 'react';
import Markdown from 'react-markdown'
import withRedux from 'next-redux-wrapper';
import Modal from 'react-responsive-modal';
import { ReactiveBase, RangeInput, SingleDropdownList, DateRange, DataSearch, TagCloud, ResultCard, CategorySearch, SingleRange  } from '@appbaseio/reactivesearch';

const loadIcon = (<h2>Loading</h2>);

class Index extends React.Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
	render() {
    const { open } = this.state;
		return (
			<ReactiveBase
			app="car-store"
			credentials="cf7QByt5e:d2d60548-82a9-43cc-8b40-93cbbe75c34c">
          <Modal open={open} onClose={this.onCloseModal} center>
            <h2>Simple centered modal</h2>
          </Modal>
					<ul id="slide-out" className="sidenav sidenav-fixed">
            <button onClick={this.onOpenModal}>Open modal</button>
						<DataSearch
              autosuggest={true}
							componentId="search"
							dataField={["name", "brand"]}
              placeholder="Search for cars"
              URLParams={true}
						/>
            <DateRange
              componentId="DateSensor"
              dataField="mtime"
            />
            <SingleDropdownList
              componentId="vehicleType"
              dataField="vehicleType.raw"
              URLParams={true}
              title="Type"
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
							loader={loadIcon}
							react={{
								and: ["search", "TagCloud", 'vehicleType']
              }}

              onClick={(res)=> {
                console.log(res);
              }}
							onData={(res) => {
								return {
									image: "https://www.enterprise.com/content/dam/global-vehicle-images/cars/FORD_FOCU_2012-1.png",
                  description: res.brand + " " + "★".repeat(res.rating),
                  title: res.name,
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
