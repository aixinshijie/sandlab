# Animal models from the second batch — attribution

Six animals on the prop shelf (动物) come from Sketchfab models that the user supplied in `1048.zip` (2026-10). Each source folder carried a
`license.txt`; the details below are copied from those files (outputs/animal-pack2/src/…/license.txt). All six are by
**Nyilonelycompany** (https://sketchfab.com/Nyilonelycompany).

## CC BY 4.0 — https://creativecommons.org/licenses/by/4.0/

- `public/props/animals/bear2.glb` (灰熊): "Bear" — https://sketchfab.com/3d-models/bear-ce0d5eb86cf5459bb6bd20244cb44b27
- `public/props/animals/mouse.glb` (老鼠): "Rat 🐀 (Test )Free" — https://sketchfab.com/3d-models/rat-test-free-f47fd7f41b0943359a9c7683d9bd600f

## CC BY-NC 4.0 — https://creativecommons.org/licenses/by-nc/4.0/ (NON-COMMERCIAL use only)

- `public/props/animals/owl2.glb` (飞翔的猫头鹰): "Owl 🦉" — https://sketchfab.com/3d-models/owl-90514a1d90ac4f3bbafc46a12b1b128b
- `public/props/animals/sheep2.glb` (小绵羊): "Sheep-Test (Non-Commercial)" — https://sketchfab.com/3d-models/sheep-test-non-commercial-196bb78e6e6343888d09f468a6a9dbc7
- `public/props/animals/centipede.glb` (蜈蚣): "Centipede Test (Non-commercial)" — https://sketchfab.com/3d-models/centipede-test-non-commercial-414ddd81cdeb4692839beebde73ac3df
- `public/props/animals/ox.glb` (黄牛): "Weight Transfer Test ( Final soon)" — https://sketchfab.com/3d-models/weight-transfer-test-final-soon-8942cc2d32044d159a15c8386b7fe1eb

These four may not be used in a commercial product or service.

## Changes made for this site (pipeline in `outputs/animal-pack2`)

Converted to glb in the browser (meshoptimizer simplification to roughly 8,000 triangles), textures re-encoded as WebP, materials made
non-metallic, turned to face +Z and set on the ground at the origin, and short in-place idle clips cut from the models' own animations
(see `scripts/animals2/idle2.json`). The flying owl is lifted so that its wing tips just touch the sand at the bottom of each wing beat.
The original authors did not take part in or endorse these changes.
