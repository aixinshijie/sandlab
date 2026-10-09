# Vehicle models — attribution

The cars, the bus (交通 → 汽车) and the airliner (交通 → 飞机) on the prop shelf are Sketchfab models supplied by the user as downloaded `.glb` files on 2026-10-08.

## CC BY 4.0 — https://creativecommons.org/licenses/by/4.0/

- `public/props/things/maybach.glb` (迈巴赫): "Mercedes-Benz Maybach 2022" by Mpgs Studios — https://sketchfab.com/3d-models/mercedes-benz-maybach-2022-979f37a878f04b2a8d888b62ea6027e9
  (author: https://sketchfab.com/mpgs.studio)
- `public/props/things/ghost.glb` (劳斯莱斯): "Rolls-Royce Ghost" by Black Snow — https://sketchfab.com/3d-models/rolls-royce-ghost-4a590f4afa094fa8b407a14db77a63a8
  (author: https://sketchfab.com/BlackSnow02)
- `public/props/things/audia8.glb` (奥迪A8): "Audi A8 Custom 2018" by everhard — https://sketchfab.com/3d-models/audi-a8-custom-2018-cd094d03f7684809900a929a9c88c8db
  (author: https://sketchfab.com/everhard)
- `public/props/things/bus.glb` (巴士): "City Bus - rigged | РоАЗ-5236" by Yo.Ri — https://sketchfab.com/3d-models/city-bus-rigged-5236-36646fcf41da498ca24a02f4b6fb1d95
  (author: https://sketchfab.com/grox777)
- `public/props/things/airplane.glb` (飞机): "Airplane CRJ-900 Cityjet" by CityJet Training — https://sketchfab.com/3d-models/airplane-crj-900-cityjet-02c4fa44604243c2bb48db64506a39af
  (author: https://sketchfab.com/artoud)

## CC BY-NC-SA 4.0 — https://creativecommons.org/licenses/by-nc-sa/4.0/ (NON-COMMERCIAL use only; adaptations under the same licence)

- `public/props/things/bmwx5.glb` (宝马X5): "2019 BMW X5 xDrive30d" by Ddiaz Design — https://sketchfab.com/3d-models/2019-bmw-x5-xdrive30d-850fb32f984c4630969840fc61f44902
  (author: https://sketchfab.com/ddiaz-design). This model may not be used in a commercial product or service; the adapted
  `bmwx5.glb` is shared under CC BY-NC-SA 4.0.

## Changes made for this site (pipeline in `outputs/prop-import`)

Merged into one mesh per model; two invisible helper boxes removed from the Maybach; the bus rig baked into its rest pose and its shadow plane removed, its brownish body tint dropped (the texture colour kept); turned so the front faces +Z and set on the ground
at the origin; simplified with meshoptimizer keeping the original normals and weighing normal changes (Maybach about 2.4 M → 580 k triangles,
Rolls-Royce 0.76 M → 400 k, Audi 0.77 M → 340 k; the BMW X5, bus and airliner kept at their original 107 k / 5.6 k / 8.3 k;
parts under 0.4 % of the car's size removed); window
glass darkened on the Rolls-Royce and the X5; vertex colours dropped; materials converted to plain standard materials, lamp
materials (and, for the bus, the lamp areas of its emission texture) tagged so the lamps can light up in the sand tray; textures re-encoded as WebP (max 512 px); geometry compressed with
EXT_meshopt_compression and KHR_mesh_quantization. The original authors did not take part in or endorse these changes.
