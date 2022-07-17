for file in `\find . -name '*.mov'`; do
  ffmpeg -i $file -vframes 1 -qmin 1 -q 1 -f image2 $file.jpg
done
