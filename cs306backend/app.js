const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000
var cors = require('cors')
app.use(cors())
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const assistantRoute = require('./server/routes/assistantchef')
const categoryRoute = require('./server/routes/category')
const chefRoute = require('./server/routes/chef')
const contractedwaiterRoute = require('./server/routes/contractedwaiter')
const cookRoute = require('./server/routes/cook')
const customerRoute = require('./server/routes/customer')
const drinkRoute = require('./server/routes/drink')
const drinkMenuRoute = require('./server/routes/drinkmenu')
const foodRoute = require('./server/routes/food')
const foodMenuRoute = require('./server/routes/foodmenu')
const getsRoute = require('./server/routes/gets')
const hasRoute = require('./server/routes/has')
const includesRoute = require('./server/routes/includes')
const invoiceRoute = require('./server/routes/invoice')
const makesRoute = require('./server/routes/makes')
const menuRoute = require('./server/routes/menu')
const ordersfromRoute = require('./server/routes/ordersfrom')
const parttimewaiterRoute = require('./server/routes/parttimewaiter')
const responsibleforRoute = require('./server/routes/responsiblefor')
const tableRoute = require('./server/routes/table')
const waiterRoute = require('./server/routes/waiter')


app.use('/assistant', assistantRoute)
app.use('/category', categoryRoute)
app.use('/chef', chefRoute)
app.use('/cwaiter', contractedwaiterRoute)
app.use('/cook', cookRoute)
app.use('/customer', customerRoute)
app.use('/drink', drinkRoute)
app.use('/drinkmenu', drinkMenuRoute)
app.use('/food', foodRoute)
app.use('/foodmenu', foodMenuRoute)
app.use('/gets', getsRoute)
app.use('/has', hasRoute)
app.use('/includes', includesRoute)
app.use('/invoice', invoiceRoute)
app.use('/makes', makesRoute)
app.use('/menu', menuRoute)
app.use('/orderf', ordersfromRoute)
//app.use('/ptwaiter', parttimewaiterRoute)
//app.use('/respnsiblef', responsibleforRoute)
app.use('/table', tableRoute)
app.use('/waiter', waiterRoute)



//Listen on environment port or 4000
app.listen(port, ()=> console.log(`Listen on port ${port}`)) 
