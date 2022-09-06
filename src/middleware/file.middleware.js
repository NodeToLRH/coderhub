const path = require('path')
// koa-multer 用于处理 multipart/form-data 类型的表单数据，它主要用于上传文件
const Multer = require('koa-multer')
const Jimp = require('jimp')

const { AVATAR_PATH, PICTURE_PATH } = require('../constants/file-path')

const avatarUpload = Multer({
  dest: AVATAR_PATH // 存储文件路径
})
// multer.single(fieldname)
// 接受一个以 fieldname 命名的文件。这个文件的信息保存在 req.file
const avatarHandler = avatarUpload.single('avatar')

const pictureUpload = Multer({
  dest: PICTURE_PATH // 存储文件路径
})
// multer.array(fieldname[, maxCount])
// 接受一个以 fieldname 命名的文件数组。可以配置 maxCount 来限制上传的最大数量。这些文件的信息保存在 req.files
const pictureHandler = pictureUpload.array('picture', 9)

const pictureResize = async (ctx, next) => {
  try {
    // 获取图片信息，相关信息如下：
    // > destination : 保存路径
    // > filename : 保存在 destination 中的文件名
    // > path : 已上传文件的完整路径
    // > mimetype : 文件的 MIME 类型
    // > size : 文件大小（字节单位）
    const files = ctx.req.files
    // 对图片进行处理(sharp/jimp)
    for (let file of files) {
      const destPath = path.join(file.destination, file.filename)
      //  Jimp.read可以接受多种类型的参数（比如：文件、链接、Jimp实例或者一个缓存），返回一个 Promise 对象
      Jimp.read(file.path).then(image => {
        // image.resize(w, h, mode, cb) 调整图片大小。调整为 宽 - 1280 高 - 自动调节
        // image.write(path, cb) 保存图片。
        image.resize(1280, Jimp.AUTO).write(`${destPath}-large`)
        image.resize(640, Jimp.AUTO).write(`${destPath}-middle`)
        image.resize(320, Jimp.AUTO).write(`${destPath}-small`)
      })
    }

    await next()
  } catch (err) {
    console.log('【pictureResize】 err: ', err)
  }
}

module.exports = {
  avatarHandler,
  pictureHandler,
  pictureResize
}
