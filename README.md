# basic-express-api
Basic Express Api

Initialise npm project
> npm init -y

Install Express Generator globally
> npm install express -generator -g

Scaffold out Express project
> express

Install MySQL dependancy
> npm install mysql -–save

Install CORS module
> npm install cors –-save

Install Node Modules
> npm install

Setup MySQL DB
Create table and insert data

e.g.
CREATE TABLE IF NOT EXISTS `task` (
 `Id` varchar(50) NOT NULL,
 `Title` varchar(500) DEFAULT NULL,
 `Status` varchar(100) DEFAULT NULL,
 PRIMARY KEY (`Id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
 
-- Dumping data for table `task`
 --
 
INSERT INTO `task` (`Id`, `Title`, `Status`) VALUES
 ('1', 'Go to Market tomorrow', 'done'),
 ('2', 'Email to manager', 'pending'),
 ('3', 'Push code to GitHub', 'done'),
 ('4', 'Go For Running', 'done'),
 ('5', 'Go to Movie', 'pending');

 Set Up User in MySQL

 Set Up Db Connection dbconnection.js

 Set Up Routes
 routes/task.js

 Set Up Task Model
 models/task.js

 Start Server
 > npm start

Test via postman

GET http://localhost:3000/Tasks
GET http://localhost:3000/Tasks/1

POST using body raw application/json format
POST http://localhost:3000/Tasks/
{
        "Id": "6",
        "Title": "Night life interview",
        "Status": "do it one day"
}

PUT using body raw application/json format
PUT  http://localhost:3000/Tasks/6
{
        "Status": "do it one day"
}

DELETE http://localhost:3000/Tasks/1

