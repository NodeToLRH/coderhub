const connection = require('../app/database')

class UserService {
  async create(user) {
    const { name, password } = user
    const statement = `INSERT INTO user (name, password) VALUES (?, ?);`
    // MySQL 提供了 execute 辅助函数，它将准备和查询语句，可以使用 prepare / unprepare 方法手动准备/取消准备
    const result = await connection.execute(statement, [name, password])

    return result[0]
  }
  async getUserByName(name) {
    const statement = `SELECT * FROM user WHERE name = ?;`
    const result = await connection.execute(statement, [name])

    return result[0]
  }
  async updateAvatarUrlById(avatarUrl, userId) {
    const statement = `UPDATE user SET avatar_url = ? WHERE id = ?;`
    const [result] = await connection.execute(statement, [avatarUrl, userId])
    return result
  }
}

module.exports = new UserService()
