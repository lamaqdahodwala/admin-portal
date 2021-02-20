function grab(){
	function createtable(data){
		let users = data;
		let temp = users.split('')
		let str = ''
		for (var i of temp){
			var added = ''
			if (i == "'"){
				added = '"'
			} else {
				added = i
			}
			str += added
		}
		console.log(str)
		var map = new Map(Object.entries(JSON.parse(str)))
		console.log(map)
		for (var i of map.entries()){
			console.log(i)
		}

		
	}
	let fetched = fetch('https://mod-server.lamaqdahodwala.repl.co/everyone')
		.then(response => response.text())
		.then(alert('Hold on, loading!'))
		.then(data => createtable(data))
}
