let fetched = fetch('https://mod-server.lamaqdahodwala.repl.co/everyone')
  .then(response => response.text());

let waitforstatus = async() => {
    let x = await fetched
    console.log(x)
}
