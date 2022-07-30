// commitlint.config.js
module.exports = {
  ignores: [commit => commit.includes("init")],//忽略 init 提交
  extends: ['@commitlint/config-conventional'],
  rules: {
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [1, "always"],
    "header-max-length": [2, "always", 108],
    "subject-empty": [2, "never"],
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "perf",
        "style",
        "docs",
        "test",
        "refactor",
        "build",
        "ci",
        "chore",
        "revert",
        "wip",
        "workflow",
        "types",
        "release"
      ]
    ]
  },
  prompt: {
    settings: {},
    messages: {
      skip: '回车直接跳过 | :skip',
      max: '最大%d字符 | upper %d chars',
      min: '最少%d字符 | %d chars at least',
      emptyWarning: '内容不能为空，重新输入 | can not be empty',
      upperLimitWarning: '超限 | over limit',
      lowerLimitWarning: '低于极限 | below limit'
    },
    questions: {
      type: {
        description: "请选择提交类型 | Select the type of change that you're committing:",
        enum: {
          feat: {
            description: '增加新功能 | A new feature',
            title: '新功能|Features',
            emoji: '✨',
          },
          fix: {
            description: '修复bug | A bug fix',
            title: '漏洞修补|Bug Fixes',
            emoji: '🐛',
          },
          docs: {
            description: '修改文档|Documentation only changes',
            title: '文档修改|Documentation',
            emoji: '📝',
          },
          style: {
            description: '样式修改不影响逻辑 | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
            title: '样式修改|Styles',
            emoji: '💎',
          },
          refactor: {
            description: '功能/代码重构 | A code change that neither fixes a bug nor adds a feature',
            title: '重构|Code Refactoring',
            emoji: '🌠',
          },
          perf: {
            description: '性能优化 | A code change that improves performance',
            title: '性能优化|Performance Improvements',
            emoji: '🚀',
          },
          test: {
            description: '增删测试 | Adding missing tests or correcting existing tests',
            title: '测试|Tests',
            emoji: '🚨',
          },
          build: {
            description: '影响构建系统或外部依赖项的更改（示例范围：gulp、brocoli、npm） | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
            title: '依赖包更改|Builds',
            emoji: '📦',
          },
          ci: {
            description: '对CI配置文件和脚本的更改（示例范围：Travis、Circle、BrowserStack、SauceLabs）| Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
            title: 'CI配置|Continuous Integrations',
            emoji: '👷',
          },
          chore: {
            description: "不修改src或测试文件的其他更改（例如：构建过程或辅助工具的变动） | Other changes that don't modify src or test files",
            title: '常规修改|Chores',
            emoji: '♻️',
          },
          revert: {
            description: '版本回退 | Reverts a previous commit',
            title: '回退|Reverts',
            emoji: '🔂',
          },
        },
      },
      scope: {
        description:
          '请输入修改的范围（可选）| What is the scope of this change (e.g. component or file name)',
      },
      subject: {
        description: '请简要描述提交（必填）| Write a short, imperative tense description of the change',
      },
      body: {
        description: '请输入详细描述（可选）| Provide a longer description of the change',
      },
      isBreaking: {
        description: '有什么突破性的变化吗? | Are there any breaking changes?',
      },
      breakingBody: {
        description:
          '一个破坏性的变更提交需要一个主体。 请输入提交本身的更长的描述 | A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself',
      },
      breaking: {
        description: '描述突破性变化 | Describe the breaking changes',
      },
      isIssueAffected: {
        description: '是否有未解决的问题? | Does this change affect any open issues?',
      },
      issuesBody: {
        description:
          '如果问题已解决，则提交需要一个正文。请输入提交本身的更长描述 | If issues are closed, the commit requires a body. Please enter a longer description of the commit itself',
      },
      issues: {
        description: '请输入问题说明 | Add issue references (e.g. "fix #123", "re #123".)',
      },
    },
  }
}