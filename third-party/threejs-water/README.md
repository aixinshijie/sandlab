# threejs-water 来源说明

参考用户提供的 threejs-water-main.zip：Evan Wallace 的 WebGL Water（http://madebyevan.com/webgl-water/）的 Three.js 移植版，
移植者 Yong Su（jeantimex，https://github.com/jeantimex/threejs-water），MIT License（原作 © 2011 Evan Wallace，修改 © 2026 Yong Su）。

本项目参考了其中的思路和公式，按沙盘重写，没有拷贝原文件：
- 水底焦散的「面积比」法（Caustics.vert / Caustics.frag：把水面网格按折射后的光线落到底面，平静水面下的面积 ÷ 有波纹时的面积 = 聚光多少）
  → app/sandlab/water-caustics.ts。沙盘里落到沙底的距离按每一点的水深算（原作是平底泳池）；静水处处是 1，只把 (值 − 1) 加在原来的水底光纹上。
- 在水面上按住拖动点出波纹的交互和水滴的余弦形状（WaterRipple.frag 的 drop、InteractionController 的 AddDrops）
  → app/sandlab/water-ripples.ts 的 drop、immersive.tsx 的 stir（空手在水里划）；铲子扎水 / 出水、倒沙倒水落进水里也是按一下（water-splash.ts 的 PUSH）。
- 物体推水（原作按球前后两帧占着的水量的差推波，WaterRipple.frag 的 sphere 一段）
  → water-ripples.ts 的 pushRect：沙具（prop-water.ts）、沙桶在水里落下 / 拖着走 / 抬出来（water-splash.ts 的 BucketWake）。

没有移植原作的泳池墙面、天空贴图、物体光线追踪、水下视角、鸭子模型和贴图素材。完整 MIT 许可见本目录 LICENSE。
