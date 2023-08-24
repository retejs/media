#!/bin/bash

declare -A video0=(
    [name]='1.mp4'
    [start]='5.5'
    [duration]='10'
)

declare -n video

mkdir -p out

for video in ${!video@}; do
  name="${video[name]}"
  start="${video[start]}"
  duration="${video[duration]}"
  echo "Name: $name, start: $start, duration: $duration"

  ffmpeg -i "$name" -ss "$start" -t "$duration" -c:v copy -an "out/$name"

  echo "Processed: $name"
done
