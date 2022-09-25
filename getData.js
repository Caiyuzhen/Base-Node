// 🌟Case 用 Node.js 来处理 get(获取数据) 请求 ————————————————————————————————————————


//一：获取 http 模块
const http =require('http')
const querystring = require('querystring')


// 二：创建服务器，在回调函数内接收 【req 请求】 + 【res 响应】 两个参数,并封装 get 方法
const server = http.createServer((req,res) => {
	const method = req.method //获取请求方法
	const url = req.url //获取请求的路由
	const path = url.split('?')[0]
	const query = querystring.parse(url.split('?')[1])
	// req.query = querystring.parse( url.split('?')[1] )//🌟给 req 新增一个 query 属性，然后用 querystring 解析请求参数，并 parse 拆分 url，获取参数，并保存到 query 属性中

	//response 响应数据（返回给客户端)
	const responseData = {
		method,
		url,
		path,
		query
	}

	//设置请求的格式
	res.setHeader('Content-type', 'application/json')

	//把请求的数据做成对象，方便后面使用
	if(method === 'GET') {
		res.end(//返回数据给【客户端】
			JSON.stringify(responseData), //🌟返回 JSON 格式的字符串, 格式是 application/json 格式
			console.log("数据发送完")
		)
	}

})


// 三：监听端口
server.listen(5050, () => {
	console.log("Server running at port 5050")
})


// 四：测试, url 内输入以获取请求数据 // http://localhost:5050//api/blog/list?author=zen&keyword=ABC





