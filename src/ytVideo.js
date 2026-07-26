function getYouTubeId(url) {
  const match = url.match(/(?:youtu\.be\/|v=)([^&]+)/);
  return match ? match[1] : url; // falls back to assuming it's already an ID
}