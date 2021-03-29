var request = require('request');
class search {
    async getSearchResult(data) {
        let promise = new Promise(async function (resolve, reject) {
            var apiResponse = new Object();
            var options =
            {
                method: 'GET',
                url: process.env.UrlEndPoint+'?apikey='+process.env.Apikey,
                qs:
                {
                    t: data,
                },
                json: true
            };
            request(options, function (error, response, body) {
                if(error)
                {
                    apiResponse.statusCode = 500;
                    apiResponse.message = "Internal Server Error";
                }
                else
                {
                    apiResponse.statusCode = response.statusCode;
                    if(apiResponse.statusCode == 200 )
                    {
                        apiResponse.message = body;
                    }
                }
                resolve(apiResponse)
            });
        });
        return promise;
    }
}
var searchData = new search();
module.exports = searchData;