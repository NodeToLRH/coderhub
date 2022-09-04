const Router = require('koa-router')

const momentRouter = new Router({ prefix: '/moment' })

const { create, detail, list, update, remove } = require('../controller/moment.controller')
const { verifyAuth, verifyPermission } = require('../middleware/auth.middleware')

// 发表动态
momentRouter.post('/', verifyAuth, create)

// 获取全部动态
momentRouter.get('/', list)
// 获取单条动态
momentRouter.get('/:momentId', detail)

// 修改动态：用户必须登录并且具备权限才能修改
momentRouter.patch('/:momentId', verifyAuth, verifyPermission, update)
// 删除动态：用户必须登录并且具备权限才能删除
momentRouter.delete('/:momentId', verifyAuth, verifyPermission, remove)

module.exports = momentRouter
