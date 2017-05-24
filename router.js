const Koa = require('koa2');

const Router = require('koa-router');

const app = new Koa();
const router = Router();

// 設定根路徑的處理函數
router.get('/', async function (ctx) {
    ctx.body = 'Hello World';
});
router.get('/person', async function (ctx) {
    ctx.body = "I'm person";
});

app.use(router.routes());

app.listen(3001);
console.log('koa2 is running...');