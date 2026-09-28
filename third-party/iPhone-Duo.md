# iPhone Duo model provenance

Source: user-supplied package 「iPhone-Duo模型.zip」 (2026-09-28). Its readme says the GLB was converted from Apple's AR model on apple.com/iphone-duo
(iPhone_Duo_e-sim_Star-White_Variant.usdz, Night Sky colour variant) and re-posed as an inverted V (about 50° inner angle), and that the model's
copyright stays with the original rights holder — the package grants no extra licence.

- Used as: the StandBy-style desk clock at the back right of the desk (public/models/duo.glb, app/sandlab/duo.ts; the screen is drawn in app/sandlab/duo-screen.ts).
- Processing for the web: welded duplicate vertices (the converted GLB was unindexed), replaced the hidden inner-screen image (2048×1024) with a 4×4 black PNG,
  simplified the meshes with meshoptimizer (error cap about 0.14 mm on the 11.8 cm device), quantised normals to 8 bits (KHR_mesh_quantization).
  The back glass, the back colour plate under it and the camera-plateau glass (meshes 25, 26, 27) are NOT simplified: in the source they are the same
  surface with identical triangles, and simplifying them separately made the layers interleave (patchy triangles and shadow blotches on the back).
  9.2 MB / 83,632 triangles → 1.2 MB / 40,852 triangles. Materials, colours and the remaining small textures are unchanged; the outer-screen and
  inner-screen materials are replaced at load time, and the transparent glass layers don't cast shadows.
