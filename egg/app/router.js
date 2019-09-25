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

  router.post('/danxuapost',controller.danxuan.post)
  router.get('/danxuaget',controller.danxuan.get)


  router.post('/mspost',controller.ms.post)
};
