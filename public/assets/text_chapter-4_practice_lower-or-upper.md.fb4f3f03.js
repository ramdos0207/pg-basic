import{_ as s,o as a,c as n,V as l}from"./chunks/framework.c2f65d89.js";const A=JSON.parse('{"title":"lower or UPPER","description":"","frontmatter":{},"headers":[],"relativePath":"text/chapter-4/practice/lower-or-upper.md","filePath":"text/chapter-4/practice/lower-or-upper.md"}'),o={name:"text/chapter-4/practice/lower-or-upper.md"},p=l(`<h1 id="lower-or-upper" tabindex="-1">lower or UPPER <a class="header-anchor" href="#lower-or-upper" aria-label="Permalink to &quot;lower or UPPER&quot;">​</a></h1><p>アルファベット1文字が渡されたとき、それが大文字なら&quot;UPPERCASE&quot;、小文字なら&quot;lowercase&quot;と出力しよう</p><details><summary>Hint</summary><p><code>char</code>型は1byteの整数値のため、互いに大小関係がある。</p></details><details><summary>Answer</summary><p><code>char</code>型は<code>&lt;</code>、<code>&gt;</code>、<code>&lt;=</code>、<code>&gt;=</code>などで大小を比較することができる。</p><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">iostream</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">char</span><span style="color:#A6ACCD;"> c</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    cin </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> c</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">c </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lowercase</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UPPERCASE</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></details>`,4),e=[p];function t(c,r,D,y,F,i){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};
