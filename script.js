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
		if (map == {}){
            alert('No one is registered.')
            return;
        }

		let old_body = document.getElementById('table')
		old_body.innerHTML = ''
		
		for (var i of map.entries()){
			let row = document.createElement('TR');
			let name = document.createElement('TD');
			name.innerHTML = i[0]
			let online = document.createElement('TD');
			online.innerHTML = i[1]
			row.appendChild(name)
			row.appendChild(online)
			old_body.appendChild(row)

		}
		



		
	}
	let fetched = fetch('https://mod-server.lamaqdahodwala.repl.co/everyone')
		.then(response => response.text())
		.then(alert('Hold on, loading!'))
		.then(data => createtable(data))
}
