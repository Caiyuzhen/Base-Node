// ðCase ç¨ Node.js æ¥å¤ç post(åéæ°æ®) è¯·æ± ââââââââââââââââââââââââââââââââââââââââ


// ä¸: è·å http æ¨¡å
const http = require('http')
const querystring = require('querystring')

// äº: åå»ºæå¡å¨ï¼å¨åè°å½æ°åæ¥æ¶ ãreq è¯·æ±ã + ãres ååºã ä¸¤ä¸ªåæ°,å¹¶å°è£ post æ¹æ³
const server = http.createServer((req, res)=>{
	if(req.method === 'POST'){
		let postData = ''

		//çå¬å° data æ¹æ³æ¶ï¼éç¨ stream æµçæ¹å¼æ¥æ¶æ°æ®
		req.on('data', chunk => { //çå¬ data äºä»¶(æ°æ®éå¯è½å°ä¹å¯è½å¤§, æä»¥è¦éç¨æµ stream çæ¹å¼å»æ¥æ¶æ°æ®)ï¼chuck ç±»æ¯å°æ°´ç®¡
			postData += chunk.toString() //ææ°æ®æ¼æ¥å° postData ä¸­ï¼ç±»æ¯æ¡¶ï¼
		})

		//æ°æ®é½æ¥æ¶å®æ¯æ¶ï¼ä¼è§¦å end äºä»¶ï¼ææ°æ®è¿åç»ãå®¢æ·ç«¯ã
		req.on('end', ()=>{
			console.log('postData', postData)
			res.end('æ°æ®æ¥æ¶å®æ¯')//å­: è¿åç» postman çååº
		})


		// äº: æå°æµè¯æ°æ®
		console.log('post data content type', req.headers['content-type']) //æå°è¯·æ±å¤´ä¸­ç content-type

	}
})

// ä¸: çå¬ç«¯å£
server.listen(5052, ()=>{
	console.log('server running at port 5052')
})


// å: æµè¯, ç¨ postman åé post è¯·æ±(å ä¸º url ä¸è½åéè¯·æ±)


