import facepaint from 'facepaint';

export const smBp = 768;
export const mdBp = 992;
export const lgBp = 1200;

const mediaBreakpoints = [smBp, mdBp, lgBp];
const mq = facepaint(
  mediaBreakpoints.map((bp) => `@media (min-width: ${bp}px)`)
);

export { mq };
