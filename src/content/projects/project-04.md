---
title: "PlantSim"
type: "AI 产品"
category: "product"
date: "2026-09"
role: "产品定义、业务建模、交互与原型实现"
status: "可交互原型"
tags: ["未来情景", "决策支持", "可追溯 AI"]
cover: "/images/projects/plantsim/cover.webp"
gallery: ["/images/projects/plantsim/cover.webp"]
links: [{ label: "在线体验", url: "https://32631999wzc-create.github.io/PlantSim/" }, { label: "GitHub", url: "https://github.com/32631999wzc-create/PlantSim" }]
featured: true
homeOrder: 1
homeEyebrow: "P / 01 · 2026"
homeTitle: "PlantSim"
homeTitleEn: "Future scenario simulation for planting design"
homeSummary: "让植物方案先经历未来。把场地、植物、气候、人流、养护和风险事件组织成连续模拟，在落地前比较方案、定位风险并保留决策证据。"
homeLayout: "feature"
---

## 产品问题 / Problem

景观植物方案的长期表现难以在设计阶段直观看见。高温、少雨、病害、人流压力与养护资源会在多年尺度上共同改变植物状态，传统静态图纸无法持续呈现这些关系。

## 产品方案 / Product

PlantSim 把场地、植物、气候、人流、养护和风险事件组织成可追踪的连续模拟。用户可以设置目标、生成多条未来路径、查看风险原因，并在相同条件下比较不同设计版本。

## 系统判断 / System thinking

产品以确定性 Workflow 为执行骨架：Agent 只产生结构化 Effect，由 Resolver 统一结算；Gate、Checkpoint、Retry 和 Trace 负责状态隔离、异常恢复与过程追溯。

## 当前边界 / Boundaries

当前版本是可离线运行的前端产品原型，真实实现业务流程、状态结算、版本比较和决策记录；专业植物模型、真实气候数据和企业后端仍属于后续范围。
