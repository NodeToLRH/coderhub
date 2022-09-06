const fileService = require('../service/file.service')
const userService = require('../service/user.service')
const { APP_HOST, APP_PORT } = require('../app/config')

class FileController {
  async saveAvatarInfo(ctx, next) {
    // 获取图片相关信息
    const { filename, mimetype, size } = ctx.req.file
    const { id } = ctx.user

    // 将图片信息数据保存在数据库中
    await fileService.createAvatar(filename, mimetype, size, id)

    // 将图片地址保存在 user 用户表中
    const avatarUrl = `${APP_HOST}:${APP_PORT}/users/${id}/avatar`
    await userService.updateAvatarUrlById(avatarUrl, id)

    ctx.body = '上传头像成功！'
  }
  async savePictureInfo(ctx, next) {
    // 获取图片信息
    const files = ctx.req.files
    const { id } = ctx.user
    const { momentId } = ctx.query

    // 将所有文件信息保存到数据库中
    for (let file of files) {
      const { filename, mimetype, size } = file
      await fileService.createFile(filename, mimetype, size, id, momentId)
    }

    ctx.body = '动态配图上传完成！'
  }
}

module.exports = new FileController()
