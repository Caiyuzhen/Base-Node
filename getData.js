// ðCase ç¨ Node.js æ¥å¤ç get(è·åæ°æ®) è¯·æ± ââââââââââââââââââââââââââââââââââââââââ


//ä¸ï¼è·å http æ¨¡å
const http =require('http')
const querystring = require('querystring')


// äºï¼åå»ºæå¡å¨ï¼å¨åè°å½æ°åæ¥æ¶ ãreq è¯·æ±ã + ãres ååºã ä¸¤ä¸ªåæ°,å¹¶å°è£ get æ¹æ³
const server = http.createServer((req,res) => {
	const method = req.method //è·åè¯·æ±æ¹æ³
	const url = req.url //è·åè¯·æ±çè·¯ç±
	const path = url.split('?')[0]
	const query = querystring.parse(url.split('?')[1])
	// req.query = querystring.parse( url.split('?')[1] )//ðç» req æ°å¢ä¸ä¸ª query å±æ§ï¼ç¶åç¨ querystring è§£æè¯·æ±åæ°ï¼å¹¶ parse æå urlï¼è·ååæ°ï¼å¹¶ä¿å­å° query å±æ§ä¸­

	//response ååºæ°æ®ï¼è¿åç»å®¢æ·ç«¯)
	const responseData = {
		method,
		url,
		path,
		query
	}

	//è®¾ç½®è¯·æ±çæ ¼å¼
	res.setHeader('Content-type', 'application/json')

	//æè¯·æ±çæ°æ®åæå¯¹è±¡ï¼æ¹ä¾¿åé¢ä½¿ç¨
	if(method === 'GET') {
		res.end(//è¿åæ°æ®ç»ãå®¢æ·ç«¯ã
			JSON.stringify(responseData), //ðè¿å JSON æ ¼å¼çå­ç¬¦ä¸², æ ¼å¼æ¯ application/json æ ¼å¼
			console.log("æ°æ®åéå®")
		)
	}

})


// ä¸ï¼çå¬ç«¯å£
server.listen(5050, () => {
	console.log("Server running at port 5050")
})


// åï¼æµè¯, url åè¾å¥ä»¥è·åè¯·æ±æ°æ® // http://localhost:5050//api/blog/list?author=zen&keyword=ABC





