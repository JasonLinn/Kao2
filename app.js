const Koa = require('koa2');

const app = new Koa();

app.use(async function (ctx) {
    ctx.body = 'Hello World123';
});

app.listen(3000);