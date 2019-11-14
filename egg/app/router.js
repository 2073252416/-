'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {
  const { router, controller } = app;
  // get 保持状态
  router.get('/',controller.user.zhuce);
  // router.post('/login',controller.user.login);
  // 好像是保持登录状态不过为啥用post，添加oken吧
  router.post('/login',app.middleware.checktoken(),controller.user.state);
  // 添加用户名密码
  router.post('/registereds',controller.user.create);
  //不是我写的也不知道干啥的
  router.post('/denglu',controller.home.denglu);


//单选
  router.post('/danxuapost',app.middleware.checktoken(),controller.danxuan.post);
  router.get('/danxuaget',app.middleware.checktoken(),controller.danxuan.get); 
  router.delete('/danxuadelete:id',app.middleware.checktoken(),controller.danxuan.destroy);
  router.put('/danxuput:id',app.middleware.checktoken(),controller.danxuan.put);
  
// 多选
  router.get('/msget',app.middleware.checktoken(),controller.ms.get);
  router.post('/mspost',app.middleware.checktoken(),controller.ms.post);
  router.delete('/msdelete:id',app.middleware.checktoken(),controller.ms.destroy);
  router.put('/msput:id',app.middleware.checktoken(),controller.ms.put);

// gf填空题
  router.get('/gfget',app.middleware.checktoken(),controller.gf.gfget);
  router.post('/gfpost',app.middleware.checktoken(),controller.gf.post);  
  router.delete('/gfdel:id',app.middleware.checktoken(),controller.gf.gfdelete);
  router.put('/gfput:id',app.middleware.checktoken(),controller.gf.gfupdate);


//saq简答
 router.get('/saqget',app.middleware.checktoken(),controller.saq.saqget);
 router.post('/saqpost',app.middleware.checktoken(),controller.saq.post); 
 router.delete('/saqdel:id',app.middleware.checktoken(),controller.saq.saqdelete);
 router.put('/saqput:id',app.middleware.checktoken(),controller.saq.saqput);


// 随机生成题库 +     
  router.get('/random',app.middleware.checktoken(),controller.random.get);
  router.post('/randompost',app.middleware.checktoken(),controller.random.post);
  router.delete('/randel:id',app.middleware.checktoken(),controller.random.rdelete);
  router.put('/rput:id',app.middleware.checktoken(),controller.random.rput);

// 卷子表
  router.get('/paper',app.middleware.checktoken(),controller.paper.get);
  router.post('/paperpost',app.middleware.checktoken(),controller.paper.post);
  router.delete('/paperdelete:id',app.middleware.checktoken(),controller.paper.delete);
  router.put('/paperput:id',app.middleware.checktoken(),controller.paper.put);

//四表联查(单选表，多选表，填空表，简答表)
  router.get('/fourhe',app.middleware.checktoken(),controller.fourHe.get);
  router.post('/fourpost',app.middleware.checktoken(),controller.fourHe.post);
};
