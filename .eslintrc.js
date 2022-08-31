module.exports = {
  // 告知eslint是否要继续从父目录寻找配置文档，true表示停止在父级目录中寻找
  root: true,
  // 解析器选项
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module', // 设置为 "script" (默认) 或 "module"（如果代码是 ECMAScript 模块)
    allowImportExportEverywhere: true
  },
  // 环境配置
  env: {
    browser: true,
    node: true,
    es6: true
  },
  // 配置js全局变量
  globals: {},
  // 继承 - 从基础配置中继承已启用的规则,如果是数组后面继承前面的
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  // add your custom rules here
  // it is base on https://github.com/vuejs/eslint-config-vue
  // 配置规则，继承或覆盖重复规则
  rules: {
    'prettier/prettier': 'error',
    // 强制 getter 和 setter 在对象中成对出现
    'accessor-pairs': [
      2,
      {
        setWithoutGet: true,
        getWithoutSet: false
      }
    ],
    // 强制箭头函数的箭头前后使用一致的空格：(a) => {}
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    // 禁止或强制在代码块中开括号前和闭括号后有空格
    'block-spacing': [2, 'always'],
    // 强制在代码块中使用一致的大括号风格
    'brace-style': [
      2,
      '1tbs', // 大括号风格: 1tbs 、 stroustrup 、 allman
      {
        allowSingleLine: true // 允许块的开括号和闭括号在 同一行
      }
    ],
    // 强制使用骆驼拼写法命名约
    camelcase: [
      0,
      {
        properties: 'always' //  强制属性名称为驼峰风格
      }
    ],
    // 要求或禁止末尾逗号 - never：禁用末尾逗号
    'comma-dangle': [2, 'never'],
    // 强制在逗号前后使用一致的空格
    'comma-spacing': [
      2,
      {
        before: false, // 禁止在逗号前使用空格
        after: true // 要求在逗号后使用一个或多个空格
      }
    ],
    // 强制使用一致的逗号风格 - last：要求逗号放在数组元素、对象属性或变量声明之后，且在同一行
    'comma-style': [2, 'last'],
    // 要求在构造函数中有 super() 的调用
    'constructor-super': 2,
    // 强制所有控制语句使用一致的括号风 - multi-line：允许在单行中省略大括号，而if、else if、else、for、while 和 do，在其他使用中依然会强制使用大括号
    curly: [2, 'multi-line'],
    // 强制在点号之前和之后一致的换行 - property：表达式中的点号操作符应该和属性在同一行
    'dot-location': [2, 'property'],
    // 要求或禁止文件末尾存在空行
    'eol-last': 2,
    // 要求使用 === 和 !== - always：强制在任何情况下都使用 === 和 !== ， 忽略 null
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    // 强制 generator 函数中 * 号周围使用一致的空格
    'generator-star-spacing': [
      2,
      {
        before: true, // 在 * 和 function 关键字之间有空格，要求有空格，否则不允许有空格
        after: true // 在 * 和函数名之间有空格 (或匿名 generator 函数的左括号)，要求有空格，否则不允许有空格
      }
    ],
    // 要求回调函数中有容错处理
    'handle-callback-err': [2, '^(err|error)$'],
    // 强制使用一致的缩进
    // indent: [
    //   2,
    //   2, // 2 个空格缩进
    //   {
    //     // 强制 switch 语句中的 case 子句的缩进级别。
    //     // SwitchCase: 1 - case 子句将相对于 switch 语句缩进 2 个空格
    //     SwitchCase: 1
    //   }
    // ],
    indent: 0,
    // 强制在 JSX 属性中一致地使用双引号或单引号
    // prefer-single - 强制所有不包含单引号的 JSX 属性值使用单引号
    // 'jsx-quotes': [2, 'prefer-single'],
    'jsx-quotes': 0,
    // 强制在对象字面量的属性中键和值之间使用一致的间距
    'key-spacing': [
      2,
      {
        beforeColon: false, // 禁止在对象字面量的键和冒号之间存在空格
        afterColon: true // 要求在对象字面量的冒号和值之间存在至少有一个空格
      }
    ],
    // 强制在关键字前后使用一致的空格
    'keyword-spacing': [
      2,
      {
        before: true, // 要求在关键字之前至少有一个空格
        after: true // 要求在关键字之后至少有一个空格
      }
    ],
    // 求构造函数首字母大写
    'new-cap': [
      2,
      {
        newIsCap: true, // 要求调用 new 操作符时有首字母大小的函数
        capIsNew: false // 要求调用首字母大写的函数时有 new 操作符
      }
    ],
    // 强制或禁止调用无参构造函数时有圆括号 - 强制括号后的新构造函数没有参数（默认）
    'new-parens': 2,
    // 禁用 Array 构造函数
    'no-array-constructor': 2,
    // 禁用 arguments.caller 或 arguments.callee
    'no-caller': 2,
    // 禁用 console
    'no-console': 'off',
    // 禁止修改类声明的变量
    'no-class-assign': 2,
    // 禁止条件表达式中出现赋值操作符
    'no-cond-assign': 2,
    // 禁止修改 const 声明的变量
    'no-const-assign': 2,
    // 禁止在正则表达式中使用控制字符
    'no-control-regex': 0,
    // 禁止删除变量
    'no-delete-var': 2,
    // 禁止 function 定义中出现重名参数
    'no-dupe-args': 2,
    // 禁止类成员中出现重复的名称
    'no-dupe-class-members': 2,
    // 禁止对象字面量中出现重复的 key
    'no-dupe-keys': 2,
    // 禁止出现重复的 case 标签
    'no-duplicate-case': 2,
    // 禁止在正则表达式中使用空字符集
    'no-empty-character-class': 2,
    // 禁止使用空解构模式
    'no-empty-pattern': 2,
    // 禁用 eval()
    'no-eval': 2,
    // 禁止对 catch 子句的参数重新赋值
    'no-ex-assign': 2,
    // 禁止扩展原生类型
    'no-extend-native': 2,
    // 禁止不必要的 .bind() 调用
    'no-extra-bind': 2,
    // 禁止不必要的布尔转换
    'no-extra-boolean-cast': 2,
    // 禁止不必要的括号 - functions：在 函数表达式周围禁止不必要的圆括号
    'no-extra-parens': [2, 'functions'],
    // 禁止 case 语句落空
    'no-fallthrough': 2,
    // 禁止数字字面量中使用前导和末尾小数点
    'no-floating-decimal': 2,
    // 禁止对 function 声明重新赋值
    'no-func-assign': 2,
    // 禁止使用类似 eval() 的方法
    'no-implied-eval': 2,
    // 禁止在嵌套的块中出现变量声明或 function 声明 - functions：禁止 function 声明出现在嵌套的语句块中
    'no-inner-declarations': [2, 'functions'],
    // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
    'no-invalid-regexp': 2,
    // 禁止不规则的空白
    'no-irregular-whitespace': 2,
    // 禁用 __iterator__ 属性
    'no-iterator': 2,
    // 不允许标签与变量同名
    'no-label-var': 2,
    // 禁用标签语句
    'no-labels': [
      2,
      {
        allowLoop: false, // 如果这个选项被设置为 true，该规则忽略循环语句中的标签
        allowSwitch: false // 如果这个选项被设置为 true，该规则忽略 switch 语句中的标签
      }
    ],
    // 禁用不必要的嵌套块
    'no-lone-blocks': 2,
    // 禁止空格和 tab 的混合缩进
    'no-mixed-spaces-and-tabs': 2,
    // 禁止使用多个空格
    'no-multi-spaces': 2,
    // 禁止使用多行字符串
    'no-multi-str': 2,
    // 禁止出现多行空行
    'no-multiple-empty-lines': [
      2,
      {
        max: 1 // 强制最大连续空行数
      }
    ],
    // 在 ESLint v3.3.0 中已弃用，并由 no-global-assign 规则取代
    'no-native-reassign': 2,
    // 禁止对原生对象或只读的全局对象进行赋值
    'no-global-assign': 2,
    // 在 ESLint v3.3.0  中已弃用，并由 no-unsafe-negation 规则取代
    'no-negated-in-lhs': 2,
    // 禁止对关系运算符的左操作数使用否定操作符
    'no-unsafe-negation': 2,
    // 禁用 Object 的构造函数
    'no-new-object': 2,
    // 禁止调用 require 时使用 new 操作符
    'no-new-require': 2,
    // 禁止 Symbolnew 操作符和 new 一起使用
    'no-new-symbol': 2,
    // 禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-new-wrappers': 2,
    // 禁止把全局对象作为函数调用
    'no-obj-calls': 2,
    // 禁用八进制字面量
    'no-octal': 2,
    // 禁止在字符串中使用八进制转义序列
    'no-octal-escape': 2,
    // 禁止对 __dirname 和 __filename 进行字符串连接
    'no-path-concat': 2,
    // 禁止直接调用 Object.prototypes 的内置属性
    'no-proto': 2,
    // 禁止多次声明同一变量
    'no-redeclare': 2,
    // 禁止正则表达式字面量中出现多个空格
    'no-regex-spaces': 2,
    // 禁止在 return 语句中使用赋值语句 - except-parens：禁止出现赋值语句，除非使用括号把它们括起来
    'no-return-assign': [2, 'except-parens'],
    // 禁止自我赋值
    'no-self-assign': 2,
    // 禁止自身比较
    'no-self-compare': 2,
    // 禁用逗号操作符
    'no-sequences': 2,
    // 禁止将标识符定义为受限的名字
    'no-shadow-restricted-names': 2,
    // 在 ESLint v3.3.0 中已弃用，并由 func-call-spacing 规则取代
    'no-spaced-func': 2,
    // 要求或禁止在函数标识符和其调用之间有空格 - never"(默认) 禁止在函数名和开括号之间有空格
    'func-call-spacing': 2,
    // 禁用稀疏数组
    'no-sparse-arrays': 2,
    // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
    'no-this-before-super': 2,
    // 禁止抛出异常字面量
    'no-throw-literal': 2,
    // 禁用行尾空格
    'no-trailing-spaces': 2,
    // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    'no-undef': 2,
    // 禁止将变量初始化为 undefined
    'no-undef-init': 2,
    // 禁止出现令人困惑的多行表达式
    'no-unexpected-multiline': 2,
    // 禁用一成不变的循环条件
    'no-unmodified-loop-condition': 2,
    // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-unneeded-ternary': [
      2,
      {
        defaultAssignment: false // 禁止条件表达式作为默认的赋值模式
      }
    ],
    // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    'no-unreachable': 2,
    // 禁止在 finally 语句块中出现控制流语句
    'no-unsafe-finally': 2,
    // 禁止出现未使用过的变量
    'no-unused-vars': [
      2,
      {
        vars: 'all', // all - 检测所有变量，包括全局环境中的变量
        args: 'none' // none - 不检查参数
      }
    ],
    // 禁止不必要的 .call() 和 .apply()
    'no-useless-call': 2,
    // 禁止在对象中使用不必要的计算属性
    'no-useless-computed-key': 2,
    // 禁用不必要的构造函数
    'no-useless-constructor': 2,
    // 禁用不必要的转义字符
    'no-useless-escape': 0,
    // 禁止属性前有空白
    'no-whitespace-before-property': 2,
    // 禁用 with 语句
    'no-with': 2,
    // 强制函数中的变量要么一起声明要么分开声明
    'one-var': [
      2,
      {
        initialized: 'never' // 要求每个作用域的初始化的变量有多个变量声明
      }
    ],
    // 强制操作符使用一致的换行符
    'operator-linebreak': [
      2,
      'after', // 要求把换行符放在操作符后面
      {
        // 覆盖对指定的操作的全局设置
        overrides: {
          '?': 'before',
          ':': 'before'
        }
      }
    ],
    // 要求或禁止块内填充 - never：禁止块语句和类的开始或末尾有空行
    'padded-blocks': [2, 'never'],
    // 强制使用一致的反勾号、双引号或单引号
    quotes: [
      2,
      'single', // 要求尽可能地使用单引号
      {
        avoidEscape: true, // 允许字符串使用单引号或双引号，只要字符串中包含了一个其它引号，否则需要转义
        allowTemplateLiterals: true // 允许字符串使用反勾号
      }
    ],
    // 要求或禁止使用分号代替 ASI - never：禁止在语句末尾使用分号 (除了消除以 [、(、/、+ 或 - 开始的语句的歧义)
    semi: [2, 'never'],
    // 强制分号之前和之后使用一致的空格
    'semi-spacing': [
      2,
      {
        before: false, // 分号之前禁止有空格
        after: true // 分号之后强制有空格
      }
    ],
    // 强制在块之前使用一致的空格 - always：块语句必须总是至少有一个前置空格
    'space-before-blocks': [2, 'always'],
    // 'space-before-function-paren': [
    //   2,
    //   {
    //     anonymous: 'always',
    //     named: 'always',
    //     asyncArrow: 'always'
    //   }
    // ],
    // 强制在 function的左括号之前使用一致的空格 - never：禁止在参数的 ( 前面有空格
    // 'space-before-function-paren': [2, 'never'],
    'space-before-function-paren': 0,
    // 强制在圆括号内使用一致的空格 - never：强制圆括号内没有空格
    'space-in-parens': [2, 'never'],
    // 要求操作符周围有空格
    'space-infix-ops': 2,
    // 强制在一元操作符前后使用一致的空格
    'space-unary-ops': [
      2,
      {
        words: true, // 适用于单词类一元操作符，操作符之后禁用空格。例如：new、delete、typeof、void、yield
        nonwords: false // 操作符左右要求有空格，适用于这些一元操作符: -、+、--、++、!、!!
      }
    ],
    // 强制在注释中 // 或 /* 使用一致的空格
    'spaced-comment': [
      2,
      'always', // // 或 /* 必须跟随至少一个空白
      {
        markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
      }
    ],
    // 要求或禁止模板字符串中的嵌入表达式周围空格的使用 - never (默认) ：禁止花括号内出现空格
    'template-curly-spacing': [2, 'never'],
    // 要求使用 isNaN() 检查 NaN
    'use-isnan': 2,
    // 强制 typeof 表达式与有效的字符串进行比较
    'valid-typeof': 2,
    // 要求 IIFE 使用括号括起来 - any：强制总是包裹，但允许其它风格。
    'wrap-iife': [2, 'any'],
    // 强制在 yield* 表达式中 * 周围使用空格
    'yield-star-spacing': [2, 'both'],
    // 要求或禁止 “Yoda” 条件
    yoda: [2, 'never'],
    // 要求使用 const 声明那些声明后不再被修改的变量
    'prefer-const': 2,
    // 	禁用 debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 强制在大括号中使用一致的空格
    'object-curly-spacing': [
      2,
      'always', // 要求花括号内有空格 (除了 {})
      {
        objectsInObjects: true // 要求以对象元素开始或结尾的对象的花括号中有空格 (当第一个选项为 always 时生效)
      }
    ],
    // 强制数组方括号中使用一致的空格 - never：禁止在数组括号内出现空格
    'array-bracket-spacing': [2, 'never']
  }
}
