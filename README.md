# Instant Invoicing Map

## Description

The `President instantly opens a map` of Taiwan.

## Development

Clone this repository and install dependencies by running `pnpm`(Node.js version is 18.16.1), then:

- `pnpm dev`: Run in development mode
- `pnpm build`: Build in production mode
- `pnpm start`: Run start

## Project Files

```text
├── app/
│   ├── invoicing
│   │   └── page.tsx
│   ├── poll
│   │   └── page.tsx
│   ├── global-error.tsx
│   ├── layout.tsx
│   └── page.tsx
├── assets/
│   ├── images
│   │   ├── avatar/*
│   │   ├── candidate/*
│   │   ├── icon/*
│   │   ├── layout/*
│   │   ├── loading/*
│   │   └── svg/*
│   └── json
│       └── map/*
├── components/
│   ├── common
│   │   ├── context-map.tsx
│   │   ├── loading.tsx
│   │   ├── menu-toggle.tsx
│   │   ├── message.tsx
│   │   ├── prefetch-map.tsx
│   │   └── select.tsx
│   ├── home
│   │   ├── home-background.tsx
│   │   ├── home-candidate.tsx
│   │   └── home-vote-ratio.tsx
│   ├── invoicing
│   │   ├── invoicing-bar.tsx
│   │   ├── invoicing-filter.tsx
│   │   ├── invoicing-gradient-grid.tsx
│   │   ├── invoicing-information.tsx
│   │   ├── invoicing-map.tsx
│   │   ├── invoicing-proportion.tsx
│   │   ├── invoicing-search.tsx
│   │   └── invoicing-support.tsx
│   ├── layout
│   │   ├── footer.tsx
│   │   ├── header.tsx
│   │   ├── navigation-logo.tsx
│   │   ├── navigation.tsx
│   │   └── transition.tsx
│   └── poll
│       ├── poll-bar.tsx
│       ├── poll-politics-describe.tsx
│       ├── poll-politics-header.tsx
│       └── poll-politics.tsx
├── config/
│   ├── bar.ts
│   ├── Invoicing.ts
│   ├── map.ts
│   └── poll.ts
├── hooks/
│   ├── useCounter.txs
│   └── useResize.txs
├── providers/
│   └── map-provider.txs
├── styles/
│   ├── home/
│   │   ├── candidate.css
│   │   └── vote-ratio.css
│   ├── button.css
│   ├── container.css
│   ├── globals.css
│   ├── icon.css
│   ├── index.css
│   ├── invoicing.css
│   ├── map.css
│   ├── scrollbar.css
│   └── typography.css
├── types/
│   ├── d3.d.ts
│   ├── map.d.ts
│   └── select.d.ts
└── utils/
    ├── bar.ts
    ├── common.ts
    ├── d3.ts
    ├── map.ts
    └── readFile.ts
```

## Use Technology

- next
- typescript
- tailwindcss
- d3
- framer-motion
- react-select
- topojson-client
- @svgr/webpack

## Reference resources

- [中選會](https://db.cec.gov.tw/ElecTable/Election?type=President)
- [政府資料開放平臺](https://data.gov.tw/)
