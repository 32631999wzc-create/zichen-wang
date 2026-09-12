---
title: "AI Product Development SOP"
type: "AI 工作流系统"
category: "product"
date: "2026-09"
role: "系统设计、规则重构与验证"
status: "开源迭代"
tags: ["Agent 协作", "流程设计", "Executable Validation"]
cover: "/images/projects/sop/cover.svg"
gallery: ["/images/projects/sop/cover.svg"]
links: [{ label: "GitHub", url: "https://github.com/32631999wzc-create/AI-Manager-SOP" }]
featured: true
homeOrder: 2
homeEyebrow: "P / 02 · OPEN WORKFLOW"
homeTitle: "AI Product Development SOP"
homeTitleEn: "Reusable workflow and executable validation"
homeSummary: "一套可复用的 AI 产品开发技能：依据目标、资产和风险动态路由工作深度，并用结构化对象、Gate 与可执行验证把“会说”变成“可检查”。"
homeLayout: "system"
---

## 项目问题 / Problem

AI 产品开发任务的范围、已有资产、风险和交付形式各不相同。固定流程容易过度执行或遗漏关键验证，而模型自述又不能作为完成证据。

## 系统方案 / System

该项目把产品开发方法组织为可复用 Skill：由 Kernel 与 Router 判断需要读取的 Profile、生命周期节点和 Runtime 能力，再以结构化对象、Gate 和依赖闭包约束执行。

## 可执行验证 / Validation

当前版本提供只读 CLI，对 Profile、Plan 与八类运行时对象做确定性验证，并以固定场景、结构化断言和隔离 Trace 检查路由行为。

## 设计价值 / Value

它不是一份静态 SOP 文档，而是一套尝试连接产品判断、Agent 协作与可审查证据的工作系统：让流程既能适应不同项目，又保留清晰边界。
