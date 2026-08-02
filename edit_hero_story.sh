#!/usr/bin/env bash
# Rebuilds the hero story loop from the original cinematic video.
# Requires ffmpeg. Usage: bash edit_hero_story.sh
#
# The four timestamps below are a first-pass automated guess (sampled via
# contact-sheet frame extraction, not a full manual watch-through) — nudge
# the START/END seconds for each beat after watching the source once, then
# re-run. Each beat is trimmed, scaled, and concatenated with hard cuts.

INPUT="Universal_Furniture_Industries_hd.mp4"   # path to your source file
OUTPUT="ufi_hero_story_loop.mp4"
WIDTH=960                                        # hero background width; 960 keeps file size low

# --- Beat 1: Plan & team (kept brief — this is the emphasis you want reduced) ---
BEAT1_START=2
BEAT1_END=4.5

# --- Beat 2: Execution — machinery / workshop floor ---
BEAT2_START=16
BEAT2_END=26

# --- Beat 3: Execution — forming / assembly ---
BEAT3_START=34
BEAT3_END=39

# --- Beat 4: Final product ---
BEAT4_START=58
BEAT4_END=61

ffmpeg -y -i "$INPUT" -filter_complex "\
[0:v]trim=start=${BEAT1_START}:end=${BEAT1_END},setpts=PTS-STARTPTS,scale=${WIDTH}:-2[a];\
[0:v]trim=start=${BEAT2_START}:end=${BEAT2_END},setpts=PTS-STARTPTS,scale=${WIDTH}:-2[b];\
[0:v]trim=start=${BEAT3_START}:end=${BEAT3_END},setpts=PTS-STARTPTS,scale=${WIDTH}:-2[c];\
[0:v]trim=start=${BEAT4_START}:end=${BEAT4_END},setpts=PTS-STARTPTS,scale=${WIDTH}:-2[d];\
[a][b][c][d]concat=n=4:v=1:a=0[outv]" \
-map "[outv]" -an -c:v libx264 -preset veryslow -crf 28 -movflags +faststart "$OUTPUT"

echo "Done -> $OUTPUT"
ffprobe -v error -show_entries format=duration,size -of default=noprint_wrappers=0 "$OUTPUT"
