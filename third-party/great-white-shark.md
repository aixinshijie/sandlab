# Great white shark model — attribution (CC BY 4.0)

- Original model: "Great White Shark" by charliegodofsharks — https://sketchfab.com/3d-models/great-white-shark-bf81b64f0121443da38112f706b7356f
  (author: https://sketchfab.com/charliegodofsharks)
- Licence: Creative Commons Attribution 4.0 International — https://creativecommons.org/licenses/by/4.0/
- Changes made before it reached this project (user-supplied `大白鲨_原模型重绑与随机游动.zip`, 2026-10-08, per its README and embedded metadata):
  axes and uniform scale changed; the original 29-joint rig replaced by a 40-joint spine, a caudal joint and two pectoral joints with
  new skin weights; swim / glide / burst / turn animations and a procedural swimming controller added. Original geometry, UVs,
  material definitions and embedded images kept. The original author did not take part in or endorse these changes.
- Changes made for this site (public/props/animals/shark.glb, app/sandlab/shark.ts):
  wrapped in a node turned -90° so the snout faces +Z, material replaced by a plain standard material using only the base-colour
  texture (re-encoded as WebP), the two extra UV sets and the roughness / metalness maps removed, only the `swim` clip kept
  (keyframes thinned); in the scene the spine, tail and fins are posed every frame by a port of the package's `poseShark`
  controller, driven by the sand tray's own swimming logic.
