# Sandcastle audio assets

Source: audio extracted from the user-supplied Sandcastle Demo, sharedassets0.assets.

- SandPlant_01–03: blade entering and cutting sand.
- SandRetract_01–03: lifting the loaded blade.
- ShovelGrab_01–03 / ShovelDrop_01–03: selecting and putting down the shovel.
- SandPourring_01: sand flowing from the shovel or unlimited bucket.
- WaterPourring_01: water flowing from the watering can onto sand, water or props.
- WaterSplashSmall_01–05: sand landing in surface water, from either tool.

Original PCM recordings are used. Short clips are trimmed, converted to mono, level-matched and joined into sample banks; the stereo pouring clip has an 80 ms seam crossfade and periodic margins for smooth looping. No generated replacement recording is used for these actions. Source filenames and SHA-256 hashes are in public/sfx/sandcastle/sources.json.

Clips are triggered by this application's animation and surface state; this is not the game's original audio playback code. Ambient flow and weather retain their existing sources. Game assets belong to their respective rights holders; this source note does not grant redistribution rights.
