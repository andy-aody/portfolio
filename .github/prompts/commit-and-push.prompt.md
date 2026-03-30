---
description: "Stage all changes, generate a Conventional Commits message, commit and push"
agent: "agent"
---

请帮我完成一次 git commit & push：

1. 用 `git status` 和 `git diff` 查看当前所有变更
2. 分析变更内容，按 **Conventional Commits** 规范生成 commit message：
   - 格式：`<type>(<scope>): <subject>`
   - type：feat / fix / docs / style / refactor / perf / test / chore / ci / build
   - scope：可选，受影响的模块或文件夹名
   - subject：简短（≤50 字符）、祈使语气、首字母小写、不加句号
   - 如果变更涉及多个不相关的改动，分多次 commit
3. 在终端中执行：
   ```
   git add -A
   git commit -m "<生成的 message>"
   git push
   ```
4. 如果 push 失败（如远程有新提交），先 `git pull --rebase` 再重试

在 commit 之前先把生成的 message 展示给我确认。
