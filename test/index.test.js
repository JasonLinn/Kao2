//Supertest 是在測試框架中用來模擬 HTTP Request 的套件。
const supertest = require('supertest')
const chai = require('chai')
const app = require('./../index_unit')

const expect = chai.expect
const request = supertest( app.listen() )

describe( '开始测试demo的GET请求', ( ) => {
  
  it('测试/getString.json请求', ( done ) => {
      request
        .get('/getString.json')
        .expect(200)
        .end(( err, res ) => {
          expect(res.body).to.be.an('object')
          expect(res.body.success).to.be.an('boolean')
          expect(res.body.data).to.be.an('string')
          //通過使用done回調的方法來表示測試完成
          done()
        })
  })

  it('测试/getNumber.json请求', ( done ) => {
      request
        .get('/getNumber.json')
        .expect(200)
        .end(( err, res ) => {
          expect(res.body).to.be.an('object')
          expect(res.body.success).to.be.an('boolean')
          expect(res.body.data).to.be.an('number')
          done()
        })
  })
})


describe( '开始测试demo的POST请求', ( ) => {
  it('测试/postData.json请求', ( done ) => {
      request
        .post('/postData.json')
        .expect(200)
        .end(( err, res ) => {
          expect(res.body).to.be.an('object')
          expect(res.body.success).to.be.an('boolean')
          expect(res.body.data).to.be.an('string')
          done()
        })
  })
})