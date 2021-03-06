const Koa = require('koa2')
const views = require('koa-views')
const path = require('path')
const app = new Koa()


// var pug = require('js-koa-pug');

// app.use(pug('view'));

// app.use(function(ctx) {
//   ctx.render('index');
// });



// 加载模板引擎
app.use(views(path.join(__dirname, './view/'), {
    extension: 'pug'
}))

app.use(async (ctx) => {
    let title = 'hello koa2'
    await ctx.render('index', {
        title,
    })
})

app.listen(3000)
console.log(`server is running in port 3000...`)