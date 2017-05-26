const Koa = require('koa2');
var mongoData = require('./monListData');
const Router = require('koa-router');

const app = new Koa();
const router = Router();

// 設定根路徑的處理函數
router.get('/', function (ctx) {
    mongoData.personList(function (recordset) {
        //console.log(recordset);
        // ctx.render('view/index.pug', { personList: recordset });
        ctx.body = 'Hello World';
    });
    ctx.body = 'Hello World';
});
router.get('/person', async function (ctx) {
    ctx.body = "I'm person";
});

app.use(router.routes());

app.listen(3001);
console.log('koa2 is running...');