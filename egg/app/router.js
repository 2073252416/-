'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {
  const { router, controller } = app;
  router.get('/',controller.user.zhuce);
  router.post('/login',controller.user.login);
  router.post('/registereds',controller.user.create);



  router.post('/denglu',controller.home.denglu);

  
  

//单选
  router.post('/danxuapost',controller.danxuan.post);
  router.get('/danxuaget',controller.danxuan.get); 
  router.delete('/danxuadelete:id',controller.danxuan.destroy);
  router.put('/danxuput:id',controller.danxuan.put);
  
// 多选
  router.get('/msget',controller.ms.get);
  router.post('/mspost',controller.ms.post);
  router.delete('/msdelete:id',controller.ms.destroy);
  router.put('/msput:id',controller.ms.put);

// gf
  router.get('/gfget',controller.gf.gfget);
  router.delete('/gfdel:id',controller.gf.gfdelete);
  router.put('/gfput:id',controller.gf.gfupdate);
  router.post('/gfpost',controller.gf.post);

//saq
 router.get('/saqget',controller.saq.saqget);
 router.delete('/saqdel:id',controller.saq.saqdelete);
 router.put('/saqput:id',controller.saq.saqput);
 router.post('/saqpost',controller.saq.post);

// 随机生成 + 
  router.get('/Random',controller.random.get);

  





};
