module.exports=function(){

    this.dbConnections = [];
    
    this.dbConnections["Test"] = {
        host: process.env.EndPoint_Test,
        port: 3306,
        user: "adrt",
        password: "12345678",
        database: "sample",
    };
    
    };