module.exports = {
  // 运行环境
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  // 指定如何解析语法
  parser: 'vue-eslint-parser',
  // 优先级低于 parser 的语法解析设置
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    }
  },
  // 规则继承
  extends: [
    // 全局规则默认是关闭的，这个配置项开启推荐规则，推荐规则参照文档
    // 比如：函数不能重名，对象不能出现重复 key
    'eslint:recommended',
    // ts 语法规则
    'plugin:@typescript-eslint/recommended',
    // vue3 语法规则
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended'
  ],
  // ESLint 支持使用第三方插件。在使用插件之前，您必须使用 npm 安装它
  // 该 eslint-plugin- 前缀可以省略
  plugins: [
    '@typescript-eslint',
    'vue'
  ],
  // // 要对特定类型的文件指定处理器
  // overrides: [
  //   {
  //     env: {
  //       node: true
  //     },
  //     files: [
  //       '.eslintrc.{js,cjs}'
  //     ],
  //     parserOptions: {
  //       sourceType: 'script'
  //     }
  //   }
  // ],
  /**
   * off 或 0：关闭规则
   * warn 或 1：打开的规则作为警告（不影响代码执行）
   * error 或 2：规则作为一个错误（代码不能执行，界面错误）
   */
  rules: {
    // eslint (https://eslint.org/docs/latest/rules/)
    'no-var': 'error',
    'no-multiple-empty-lines': ['warn', {max: 1}],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unexpected-multiline': 'error',
    'no-useless-escape': 'off', // 禁止不必要的转义字符

    // ts (https://typescript-eslint.io/rules/)
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/prefer-ts-expect-error': 'error', // 禁止使用 @ts-ignore
    '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-namespace': 'off', // 禁止使用自定义 TypeScript 模块和命名空间
    '@typescript-eslint/semi': 'off',

    // vue (https://eslint.vuejs.org/rules/)
    'vue/multi-word-component-names': 'off', // 要求组件名称始终为 '-' 连接的单词
    'vue/script-setup-uses-vars': 'error', // 防止 <script setup> 使用的变量
    'vue/no-mutating-props': 'off', // 不允许组件 prop 的改变
    'vue/attribute-hyphenation': 'off' // 对模版中的自定义组件强制执行属性命名样式
  }
}
