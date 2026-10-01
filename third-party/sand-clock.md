# Desk clock model — provenance

- `public/models/sand-clock.glb` is the user's own model "沙盘双时间钟-米白色" (sand-tray dual-time clock, cream), supplied on 2026-10-01
  together with its source package (build script, timer logic, preview).
- Per the package's own notes, the cream housing is an independent visual reconstruction inspired by the look of
  "Digital Clock" by TristanVoulelis on Sketchfab (https://sketchfab.com/3d-models/digital-clock-2048579b8ce94f528ac08bf2495ed980).
  No original mesh or texture from that model was obtained or used; the back and the dimensions are estimates, and the display
  and top keys were designed for this sand tray.
- Text on the model is plain geometry: Latin marks (H, M, +, −) from the three.js "helvetiker" typeface file, and a few Chinese
  label outlines (沙盘时间, 晴天, 阴天, 雨天) taken from the installed Microsoft YaHei font.
- Changes made for this site (scripts/models/build-sand-clock.mjs, app/sandlab/clock.ts):
  mesh data compressed with meshoptimizer (EXT_meshopt_compression; positions 16-bit and normals 10-bit exponential filter,
  indices 16-bit), 5.9 MB → 1.5 MB, every triangle kept (largest position error 0.015 mm). Nothing else in the file is changed.
  At load time the weather words and the small 沙盘时间 label are hidden (the user asked for icons instead of words, and for the
  label to go); sun, moon, rain and snow icons are drawn in code in the same lit colour as the small sandbox-time digits.
