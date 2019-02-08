let AWS = require('aws-sdk');
let google = require('googleapis').google;
let _auth = require('./Authorizer');
const datastore = google.datastore('v1');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();
const sns = new AWS.SNS();

exports.handler = function (event, context, callback) {
    sns.listSubscriptionsByTopic({
        TopicArn: 'arn:aws:sns:us-east-1:318300609668:dynamodb'
    }).promise()
        .then(data => {
            // your code goes here
        })
        .catch(err => {
            // error handling goes here
        });
    cognito_idp.listUsers({
        UserPoolId: "us-east-1_D10y3fy0o",
        Limit: "10"
    }, function (error, data) {
        if (error) {
            // implement error handling logic here
            throw error;
        }
        // your logic goes within this block
    });
    datastore.projects.beginTransaction({
        projectId: process.env.GCP_PROJECT,
        resource: {
            transactionOptions: {
                readWrite: {}
            }
        }
    }).then(response => {
        console.log(response.data);           // successful response
        /*
        response.data = {
            "transaction": "<transaction ID>"
        }
        */
    })
        .catch(err => {
            console.log(err, err.stack); // an error occurred
        });


    callback(null, { "message": "Successfully executed" });
}