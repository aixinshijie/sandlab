# Sandcastle audio assets

Source: audio extracted from the user-supplied Sandcastle Demo, sharedassets0.assets.

- SandPlant_01–03: blade entering and cutting sand.
- SandRetract_01–03: lifting the loaded blade.
- ShovelGrab_01–03 / ShovelDrop_01–03: selecting and putting down the shovel.
- SandPourring_01: sand flowing from the shovel or unlimited bucket.
- WaterPourring_01: water flowing from the watering can onto sand, water or props.
- WaterSplashSmall_01–05: sand landing in surface water, from either tool.
- WaterSplashMedium_01–04: the shovel or the sideways bucket plunging into standing water (bank sc-wsplash-m).
- SplashSmall_01–04: water running off the loaded shovel as it leaves standing water (bank sc-splash-s).
- WaterAgitated_01: the bucket dragged through water while trenching; a 12 s seamless loop cut from the 40 s clip, 24 kHz mono (bank sc-wagitated).
  These three were supplied by the user as MP3 exports (「Sandcastle-挖水相关原始音效-MP3」); see public/sfx/sandcastle/sources.json.
- CashRegister_843: only the bell strike at 0.305 s, band-passed to the bell's own partials (2.27 kHz, 5.09–5.18 kHz) to drop the drawer clatter, with the first 4 ms of the strike's high end added back and a 0.12 s exponential decay so it rings short: the shovel reaching the tray floor (bank sc-ding).

Original PCM recordings are used. Short clips are trimmed, converted to mono, level-matched and joined into sample banks; the stereo pouring clip has an 80 ms seam crossfade and periodic margins for smooth looping. No generated replacement recording is used for these actions. Source filenames and SHA-256 hashes are in public/sfx/sandcastle/sources.json.

Clips are triggered by this application's animation and surface state; this is not the game's original audio playback code. Ambient flow and weather retain their existing sources. Game assets belong to their respective rights holders; this source note does not grant redistribution rights.
