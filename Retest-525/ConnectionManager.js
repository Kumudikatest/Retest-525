module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["authdatabase"] = {
        host: "authdatabase.czndmdv7dw6d.us-east-1.rds.amazonaws.com",
        port: "3306",
        user: "rdsuser",
        password: process.env.Password_rdsAuthdatabase,
        database: "authDatabase"
    };
};