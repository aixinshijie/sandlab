# Desk lamp model — attribution (CC BY 4.0)

- Original model: "pixar lamp" by yacinebel — https://sketchfab.com/3d-models/pixar-lamp-f97d17ac89a14ff68c3e488c69340b44
  (author: https://sketchfab.com/yacinebel)
- Licence: Creative Commons Attribution 4.0 International — https://creativecommons.org/licenses/by/4.0/
- Changes made before it reached this project (user-supplied `pixar_lamp_with_switch.glb`, 2026-09-29, per its embedded metadata):
  dark forest-green satin shell, graphite arms, gunmetal fasteners; a latching left/right toggle switch on the front of the base
  (PowerSwitch / Switch_Lever), on/off lever animations, a spot light and interaction metadata. Original geometry kept.
- Changes made for this site (public/models/desk-lamp.glb, app/sandlab/desk-lamp.ts):
  meshes simplified with meshoptimizer (the two springs to about 10 %, shade, base and bulb to about 30 %, switch parts untouched),
  normals quantised to 8 bits (KHR_mesh_quantization), unused UVs removed, the embedded light and the two lever animations removed
  (the scene uses its own spot light and turns the lever in code). 4.8 MB / 147,140 triangles → 1.1 MB / 44,472 triangles.
  At load time the lamp head (shade, bulb, neck) is rotated about its hinge bolt so it points at the sand tray, the inside of the
  shade glows when the lamp is on, and the switch toggles the lamp.
