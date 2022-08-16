function secretCode (){

    url="https://mcb2v2mz6xbjv9kzwt1y046jxp2y.auth.marketingcloudapis.com/v2/token";

    fetch(url, {
    mode: "no-cors",
	method: 'POST',
	body: {
        "grant_type": "client_credentials",
        "client_id": "2fnolqccorbzrdp7nvdr7dkj",
        "client_secret": "qxbCAMetL5sWiewYT2qbDWt6"
        }, 
	headers: {
		'Content-type': 'text/char'
	}
}).then(function (data) {
	console.log(data);
}).catch(function (error) {
	console.log(error);
});

console.log('hai');

}


// function loadPersons() {
//     //alert("submit started");
//                 fetch("http://localhost:8081/api", {
//     mode: "no-cors",
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({
//                         "data": a
//                     })
//                 });
//     alert("submit successful.");
//             };


