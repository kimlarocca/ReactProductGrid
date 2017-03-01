'use strict';
$.ajax({
	dataType: "json",
	url: "http://www.kimlarocca.com/playground/ReactProductGrid/json/products.json"
}).done(function (result) {
	var myProducts = result;
	const productGrid = listProducts(myProducts);

	ReactDOM.render(React.createElement(
		'div', //tag
		null, //attributes
		productGrid
	), document.getElementById('root'));
});

function ProductCard(props) {
	var productURL = "http://www.toysrus.com/product/index.jsp?productId=" + props.PID;
	return <div className = "item" > < img src = {
		props.img
	}
	alt = {
		props.title
	}
	/><div className="title"><a href={productURL}>{props.title}</a > < /div></div >
}

function listProducts(myProducts) {
	var productList = myProducts.map(function (product) {
		return <ProductCard PID = {
			product.PID
		}
		key = {
			product.ID
		}
		img = {
			product.photoLarge
		}
		title = {
			product.title
		}
		/>
	})
	return <div key = "productGrid" > {
		productList
	} < /div>
}