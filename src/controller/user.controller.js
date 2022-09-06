const fs = require('fs')

const userService = require('../service/user.service')
const fileService = require('../service/file.service')
const { AVATAR_PATH } = require('../constants/file-path')

class UserController {
  async create(ctx, next) {
    const user = ctx.request.body
    const result = await userService.create(user)
    ctx.body = result
  }
  async avatarInfo(ctx, next) {
    // 获取用户的头像文件
    const { userId } = ctx.params
    const avatarInfo = await fileService.getAvatarByUserId(userId)

    // 提供图像信息
    // Content-Type 实体头部用于指示资源的 MIME 类型 media type
    // Content-Type（内容类型），一般是指网页中存在的 Content-Type，用于定义网络文件的类型和网页的编码，决定浏览器将以什么形式、什么编码读取这个文件
    // 这就是经常看到一些 PHP 网页点击的结果却是下载一个文件或一张图片的原因
    ctx.response.set('content-type', avatarInfo.mimetype)
    ctx.body = fs.createReadStream(`${AVATAR_PATH}/${avatarInfo.filename}`)
  }
}

module.exports = new UserController()
