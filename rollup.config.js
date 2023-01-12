// rollup 默认可以导出一个对象 作为导出的配置文件
import babel from 'rollup-plugin-babel'
export default {
    input: './src/index.js',
    output: {
        file: 'dist/vue.js',
        name: 'Vue', // global.vue
        format: 'umd', // es6 commonjs模块 iife自执行函数 umd commonjs amd
        sourcemap: true, // 打开调试源代码选项

    },
    plugins: [
        babel({
            exclude: 'node_modules/**', // 排除 node_modules 所有文件
        })
    ]

}