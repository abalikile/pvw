import React from 'react';
import graphQLFetch from './graphQLFetch.js';

export default class ProductView extends React.Component {
	constructor() {
		super();
		this.state = { product: {} };
	}

	componentDidMount() {
		this.loadData();
	}

	 componentDidUpdate(prevProps) {
    const { match: { params: { id: prevId } } } = prevProps;
    const { match: { params: { id } } } = this.props;
    if (id !== prevId) {
      this.loadData();
    }
  }

	async loadData() {
	const {match: {params: { id }}} = this.props;
		const query = `query product($id: Int!){
				product(id: $id) {
			 		id  image
		   		}
			   }`;
		const ID = parseInt(id);
		const vars = {id: ID};
		const data = await graphQLFetch(query, vars);
		if (data) {
			this.setState({ product: data.product });
		} else {
			this.setState({ product: {} });
		}
	}

	render() {
		const {product: { image }} = this.state;
		return (
			<div>
				<h3>Displaying a image</h3>
				<img src= {image}  width="300px" height="300px" />
			</div>
		);
	}
}