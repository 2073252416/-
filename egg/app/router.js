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
<<<<<<< HEAD
<<<<<<< HEAD

// gf填空题
  router.get('/gfget',controller.gf.gfget);
  router.delete('/gfdel:id',controller.gf.gfdelete);
  router.put('/gfput:id',controller.gf.gfupdate);
  router.post('/gfpost',controller.gf.post);

//saq简答
 router.get('/saqget',controller.saq.saqget);
 router.delete('/saqdel:id',controller.saq.saqdelete);
 router.put('/saqput:id',controller.saq.saqput);
 router.post('/saqpost',controller.saq.post);

// 随机生成题库 +     
  router.get('/random',controller.random.get);
  router.post('/randompost',controller.random.post);
  router.delete('/randel:id',controller.random.rdelete);
  router.put('/rput:id',controller.random.rput);

// 卷子表
  router.get('/paper',controller.paper.get);
  router.post('/paperpost',controller.paper.post);
  router.delete('/paperdelete:id',controller.paper.delete);
  router.put('/paperput:id',controller.paper.put);
=======
=======
>>>>>>> 793cf6785e6bf3e3a8ee1bcd6bd2693ec429470c

// gf填空题
  router.get('/gfget',controller.gf.gfget);
  router.delete('/gfdel:id',controller.gf.gfdelete);
  router.put('/gfput:id',controller.gf.gfupdate);
  router.post('/gfpost',controller.gf.post);

//saq简答
 router.get('/saqget',controller.saq.saqget);
 router.delete('/saqdel:id',controller.saq.saqdelete);
 router.put('/saqput:id',controller.saq.saqput);
 router.post('/saqpost',controller.saq.post);

// 随机生成题库 +     
  router.get('/random',controller.random.get);
  router.post('/randompost',controller.random.post);
  router.delete('/randel:id',controller.random.rdelete);
  router.put('/rput:id',controller.random.rput);

// 卷子表
  router.get('/paper',controller.paper.get);
  router.post('/paperpost',controller.paper.post);

<<<<<<< HEAD
>>>>>>> 793cf6785e6bf3e3a8ee1bcd6bd2693ec429470c
=======
>>>>>>> 793cf6785e6bf3e3a8ee1bcd6bd2693ec429470c
};
