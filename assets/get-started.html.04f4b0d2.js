import{_ as c,r as s,o as i,c as r,a as e,w as t,b as u,d as n,e as a}from"./app.046e0d22.js";const p={},d=u('<h1 id="get-started" tabindex="-1"><a class="header-anchor" href="#get-started" aria-hidden="true">#</a> Get started</h1><h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2><p>R (&gt;=4.0) and Shiny are required.</p><h2 id="manual-installation" tabindex="-1"><a class="header-anchor" href="#manual-installation" aria-hidden="true">#</a> Manual Installation</h2><h3 id="as-easy-as-1-2-3" tabindex="-1"><a class="header-anchor" href="#as-easy-as-1-2-3" aria-hidden="true">#</a> As Easy as 1, 2, 3</h3>',5),k=n("div",{class:"language-r line-numbers-mode","data-ext":"r"},[n("pre",{class:"language-r"},[n("code",null,[n("span",{class:"token comment"},"## Install from CRAN"),a(`
install.packages`),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"ShinyLink"'),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"## Install from source code"),a(`
`),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),a("require"),n("span",{class:"token punctuation"},"("),a("httpuv"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(" install.packages"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"httpuv"'),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),a("require"),n("span",{class:"token punctuation"},"("),a("devtools"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(" install.packages"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"devtools"'),n("span",{class:"token punctuation"},")"),a(`

devtools`),n("span",{class:"token operator"},"::"),a("install_github"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"nelson-sci-labs/ShinyLink"'),n("span",{class:"token punctuation"},","),a("dependencies"),n("span",{class:"token operator"},"="),n("span",{class:"token boolean"},"TRUE"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"## start using"),a(`
ShinyLink`),n("span",{class:"token operator"},"::"),a("run_app"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function h(m,_){const o=s("CodeGroupItem"),l=s("CodeGroup");return i(),r("div",null,[d,e(l,null,{default:t(()=>[e(o,{title:"Installation",active:""},{default:t(()=>[k]),_:1})]),_:1})])}const b=c(p,[["render",h],["__file","get-started.html.vue"]]);export{b as default};