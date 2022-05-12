let ws = new WebSocket('wss://stream.binance.com:9443/ws/yfieur@aggTrade');
let stockPriceElement = document.getElementById('stock-price');
let lastPrice = null;
ws.onmessage =  (event)=>{
	let stockObject = JSON.parse(event.data);
	let price = parseFloat(stockObject.p).toFixed(2);
	//$('#stock-price').text(price);
	console.log(price);
	
	stockPriceElement.innerText = price;
	stockPriceElement.style.color = !lastPrice || lastPrice === price ? 'red' : price > lastPrice ? 'green' : price ;
	lastPrice = price;

}
