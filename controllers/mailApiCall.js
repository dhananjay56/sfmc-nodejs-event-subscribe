const request = require('request');

function sendDetails(firstName,lastName,email,eventDate,eventDate){
    const tokenRequest = {
        uri: 'your URL',
        json: {
            grant_type: 'client_credentials',
            client_id: 'your id',
            client_secret: 'your secret'
            },
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    request(tokenRequest, function (error, response) {
        const accesToken = response.body.access_token;
        const deInsertion= {
            uri: 'your url',
            json: {
                "ContactKey": email,
                "EventDefinitionKey":"your event definition key",
                "Data": {
                    "FirstName":firstName,
                    "LastName":lastName,
                    "Email":email,
                    "EventDate":eventDate,
                    "RegisteredDate":eventDate
                }
            },
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${accesToken}`
            }
        }
        request(deInsertion, function (error, response) {
        });
    });
}

module.exports = sendDetails;