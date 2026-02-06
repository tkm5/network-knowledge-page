// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
  site: 'https://tkm5.github.io',
  base: '/network-knowledge-page',
  integrations: [
    mermaid(),
    starlight({
      title: 'ネットワーク知識ベース',
      locales: {
        root: { label: '日本語', lang: 'ja' },
      },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        { label: '第1章 ネットワーク基礎知識', autogenerate: { directory: 'chapter01' }, collapsed: false },
        { label: '第2章 TCP/IP基礎知識', autogenerate: { directory: 'chapter02' }, collapsed: true },
        { label: '第3章 データリンク', autogenerate: { directory: 'chapter03' }, collapsed: true },
        { label: '第4章 IP（Internet Protocol）', autogenerate: { directory: 'chapter04' }, collapsed: true },
        { label: '第5章 IPに関連する技術', autogenerate: { directory: 'chapter05' }, collapsed: true },
        { label: '第6章 TCPとUDP', autogenerate: { directory: 'chapter06' }, collapsed: true },
        { label: '第7章 ルーティングプロトコル', autogenerate: { directory: 'chapter07' }, collapsed: true },
        { label: '第8章 アプリケーションプロトコル', autogenerate: { directory: 'chapter08' }, collapsed: true },
        { label: '第9章 セキュリティ', autogenerate: { directory: 'chapter09' }, collapsed: true },
        { label: '付録', autogenerate: { directory: 'appendix' }, collapsed: true },
        { label: '用語集', slug: 'glossary' },
      ],
    }),
  ],
});
