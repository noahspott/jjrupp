export default function getYouTubeId(url: string): string | null {
  const shortLinkMatch = url.match(/youtu\.be\/([^?&]+)/);
  if (shortLinkMatch) return shortLinkMatch[1];

  const longLinkMatch = url.match(/[?&]v=([^?&]+)/);
  if (longLinkMatch) return longLinkMatch[1];

  return null;
}
