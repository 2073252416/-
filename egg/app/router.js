'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {
  const { router, controller } = app;
  router.get('/',controller.user.zhuce)
  router.post('/login',controller.user.login)
  router.post('/registereds',controller.user.create)



  router.post('/denglu',controller.home.denglu)
  router.post('/saqpost',controller.saq.post)
  router.post('/gfpost',controller.gf.post)


//单选
  router.post('/danxuapost',controller.danxuan.post)

  router.get('/danxuaget',controller.danxuan.get)  
  router.delete('/danxuadelete:id',controller.danxuan.destroy)
  router.put('/danxuput:id',controller.danxuan.put)

  
// 多选
  router.get('/msget',controller.ms.get)

  router.post('/mspost',controller.ms.post)
  router.delete('/msdelete:id',controller.ms.destroy)
  router.put('/msput:id',controller.ms.put)




// 随机生成 + 
  router.get('/Random',controller.random.get)

  





};
