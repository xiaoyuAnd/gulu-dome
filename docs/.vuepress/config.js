module.exports = {
    title: '轱辘UI',
    description: '一个好用的UI框架',
    themeConfig: {
        displayAllHeaders: true,
        sidebar: [
            // ['/install/', '安装'],
            // ['/get-start/', '起步'],
            {
                title: '入门',
                children: [ '/install/','/get-start/'],
                // initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            },
            {
                title: '组件',
                children: [
                    "/components/button",
                    "/components/input",
                ],
                // initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            }
        ]
    },

}
