# Clownfish model — attribution (CC BY 4.0)

- Original model: "Fish" by chenyu0930 — https://sketchfab.com/3d-models/fish-911b309008d24829b65f72fd913b91b7
  (author: https://sketchfab.com/chenyu0930)
- Licence: Creative Commons Attribution 4.0 International — https://creativecommons.org/licenses/by/4.0/
- Changes made before it reached this project (user-supplied `小丑鱼_40节骨骼与游动动作.zip`, 2026-10-08, per its README and manifest):
  normalised to length 1 facing +X; a 40-joint spine (Spine_00–Spine_39) with smooth skin weights added; swim / glide / burst /
  turn_left / turn_right animations and a procedural swimming controller added. Original mesh, UVs, material and embedded
  texture kept. The original author did not take part in or endorse these changes.
- Changes made for this site (public/props/animals/clownfish.glb, app/sandlab/smallfish.ts):
  wrapped in a node turned -90° so the snout faces +Z; the unlit material replaced by a plain lit standard material using the
  same base-colour texture (re-encoded as WebP, drawn double-sided); only the `swim` clip kept (keyframes thinned). In the scene
  the spine is posed every frame by a port of the package's `poseFish` controller, driven by the sand tray's own swimming logic.
