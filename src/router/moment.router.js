const Router = require('koa-router')

const momentRouter = new Router({ prefix: '/moment' })

const {
  create,
  detail,
  list,
  update,
  remove,
  addLabels
} = require('../controller/moment.controller')
const { verifyAuth, verifyPermission } = require('../middleware/auth.middleware')
const { verifyLabelExists } = require('../middleware/label.middleware')

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

// 动态添加标签
momentRouter.post('/:momentId/labels', verifyAuth, verifyPermission, verifyLabelExists, addLabels)

module.exports = momentRouter
