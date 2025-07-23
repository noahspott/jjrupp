#!/bin/bash

# === INPUT ===
INPUT="./hero-bg.mov"

# === OUTPUT SIZES ===
declare -a WIDTHS=(540 760 1352 1920)

# === COMPRESSION SETTINGS ===
CRF=18            # Quality: 18–28 (lower is better quality, larger file)
PRESET="veryslow"     # Options: ultrafast, superfast, veryfast, faster, fast, medium, slow, slower, veryslow
REMOVE_AUDIO=true # true = mute video; false = keep audio

# === OUTPUT FOLDER ===
OUTPUT_DIR="../public/video"
mkdir -p "$OUTPUT_DIR"

# === TEMP FILE ===
CROPPED_INPUT="./temp_cropped_input.mp4"

echo "🔍 Detecting crop area to remove black bars..."

# Detect crop values (outputs to console, not used directly in filtering)
CROP_VALUES=$(ffmpeg -i "$INPUT" -vf cropdetect -frames:v 100 -f null - 2>&1 | \
  grep -o 'crop=[0-9]*:[0-9]*:[0-9]*:[0-9]*' | sort | uniq -c | sort -nr | head -1 | awk '{print $2}')

echo "📐 Using crop values: $CROP_VALUES"

echo "✂️  Cropping black bars..."
ffmpeg -i "$INPUT" \
  -vf "$CROP_VALUES" \
  -vcodec libx264 \
  -crf "$CRF" \
  -preset "$PRESET" \
  -an \
  "$CROPPED_INPUT"

# === EXPORT CROPPED + RESIZED VERSIONS ===
for WIDTH in "${WIDTHS[@]}"
do
  OUT_NAME="hero-10s-${WIDTH}.mp4"
  echo "🔧 Exporting width ${WIDTH}..."

  # Get original width from cropped video
  ORIG_WIDTH=$(ffprobe -v error -select_streams v:0 -show_entries stream=width -of csv=p=0 "$CROPPED_INPUT")

  # Compute X offset to crop horizontally to desired width (centered)
  let "X_OFFSET=(ORIG_WIDTH - WIDTH) / 2"
  CROP_FILTER="crop=${WIDTH}:ih:${X_OFFSET}:0"

  # Construct audio flag
  if [ "$REMOVE_AUDIO" = true ]; then
    AUDIO_FLAG="-an"
  else
    AUDIO_FLAG=""
  fi

  ffmpeg -i "$CROPPED_INPUT" \
    -vf "$CROP_FILTER" \
    -vcodec libx264 \
    -crf "$CRF" \
    -preset "$PRESET" \
    $AUDIO_FLAG \
    "$OUTPUT_DIR/$OUT_NAME"
done

# Clean up temp file
rm "$CROPPED_INPUT"

echo "✅ All videos exported to $OUTPUT_DIR"
