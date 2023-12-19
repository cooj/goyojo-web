module.exports = {
    apps: [
        {
            name: 'nuxt-pro', // 设置PM2进程的名称
            port: '8004', // 项目运行的端口
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs',
            env: {
                // 数据库
                DATABASE_URL: 'mysql://root:root@localhost:3306/nuxt-pro', // 更改成实际的数据库
            },
        },
    ],
}
