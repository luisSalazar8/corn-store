export const formatSegment = (segment: string) => {
  return segment.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
};
