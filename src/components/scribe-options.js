export const baseOptions = {
  tags: {
    p: {},
    br: false,
    b: {},
    strong: {},
    i: {},
    em: {},
    strike: {},
    ol: {},
    ul: {},
    li: {},
    a: { href: true },
    h2: {},
    h3: {},
    u: {}
  }
};


export const baseTextOptions = Object.assign({}, baseOptions, {
  tags: Object.assign({}, baseOptions.tags, {
    blockquote: {},
  })
});


export const baseInlineOptions = {
  tags: {
    br: false,
    b: {},
    strong: {},
    em: {},
    i: {},
    u: {},
    a: {},
    strike: {},
  },
};
