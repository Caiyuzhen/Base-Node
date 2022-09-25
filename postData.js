// 🌟Case 用 Node.js 来处理 post(发送数据) 请求 ————————————————————————————————————————


// 一: 获取 http 模块
const http = require('http')
const querystring = require('querystring')

// 二: 创建服务器，在回调函数内接收 【req 请求】 + 【res 响应】 两个参数,并封装 post 方法
const server = http.createServer((req, res)=>{
	if(req.method === 'POST'){
		let postData = ''

		//监听到 data 方法时，采用 stream 流的方式接收数据
		req.on('data', chunk => { //监听 data 事件(数据量可能小也可能大, 所以要采用流 stream 的方式去接收数据)，chuck 类比小水管
			postData += chunk.toString() //把数据拼接到 postData 中（类比桶）
		})

		//数据都接收完毕时，会触发 end 事件，把数据返回给【客户端】
		req.on('end', ()=>{
			console.log('postData', postData)
			res.end('数据接收完毕')//六: 返回给 postman 的回应
		})


		// 五: 打印测试数据
		console.log('post data content type', req.headers['content-type']) //打印请求头中的 content-type

	}
})

// 三: 监听端口
server.listen(5052, ()=>{
	console.log('server running at port 5052')
})


// 四: 测试, 用 postman 发送 post 请求(因为 url 不能发送请求)


