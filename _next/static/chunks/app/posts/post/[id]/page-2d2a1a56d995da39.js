(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[823],{3815:function(e,t,n){Promise.resolve().then(n.bind(n,247))},247:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h},generateStaticParams:function(){return d}});var i=n(7437),a=n(1396),s=n.n(a);n(2265);var o=n(8608),r=n(3571),l=n.n(r),u=n(6603);async function d(){return u.x.map((e,t)=>({id:e.toString()}))}function h(e){let{params:t}=e,n=u.x[t.id]||{};return console.log(n),(0,i.jsx)(i.Fragment,{children:0!=Object.keys(n).length?(0,i.jsxs)("div",{className:"w-full border rounded p-4",children:[(0,i.jsx)("div",{className:"flex flex-row justify-end sticky top-0 bg-background p-2 mb-2",children:(0,i.jsx)(s(),{href:"/",className:"border rounded p-2 hover:underline hover:opacity-90",children:"Kembali"})}),(0,i.jsx)("h1",{className:"text-2xl text-center font-bold",children:n.judul}),(0,i.jsxs)("h5",{className:"text-xs text-center",children:["Dibuat pada : ",n.tanggal]}),(0,i.jsx)("hr",{}),(0,i.jsx)("article",{className:"indent-8 text-justify w-full max-w-none prose mt-4 prose-blockquote:text-primary prose-blockquote:bg-secondary prose-blockquote:p-1 prose-strong:text-primary prose-headings:text-primary prose-code:text-red-400 prose-a:no-underline prose-a:text-blue-700 hover:prose-a:opacity-80",dangerouslySetInnerHTML:{__html:l().sanitize(o.TU.parse(n.isi))}})]}):(0,i.jsxs)("div",{className:"w-full p-5",children:[(0,i.jsx)("h1",{className:"text-xl text-center",children:"Post yang anda tuju tidak dapat ditemukan."}),(0,i.jsx)(s(),{href:"/",className:"text-blue-600 text-xl text-center inline-block w-full hover:underline hover:opacity-90",children:"Kembali ke Beranda"})]})})}},6603:function(e){"use strict";e.exports=JSON.parse('{"x":[{"judul":"Next.js has two forms of pre-rendering","tanggal":"12/3/1998","slug":"Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering. The difference is in when it generates the HTML for a page...","isi":"Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.\\n\\n- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.\\n- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.\\n\\nImportantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a \'hybrid\' Next.js app by using Static Generation for most pages and using Server-side Rendering for others."},{"judul":"Lorem ipsum dolor sit amet consectetur adipisicing elit","tanggal":"12/3/1992","slug":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, amet dolorum Reprehenderit deleniti pariatur debitis, sit aspernatur itaque. Quo et perspiciatis obcaecati dolore adipisci voluptas laboriosam eaque a nam accusantium! Maxime optio libero obcaecati voluptas eaque veritatis consequuntur officiis ratione numquam labore veniam magni, aspernatur quasi itaque nisi quibusdam? Quo, suscipit...","isi":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, amet dolorum Reprehenderit deleniti pariatur debitis, sit aspernatur itaque. Quo et perspiciatis obcaecati dolore adipisci voluptas laboriosam eaque a nam accusantium! Maxime optio libero obcaecati voluptas eaque veritatis consequuntur officiis ratione numquam labore veniam magni, aspernatur quasi itaque nisi quibusdam? Quo, suscipit. Laudantium sequi enim voluptatibus, animi impedit nostrum! Delectus, nisi! Sit vitae praesentium ea fugiat! Molestias fugit, delectus animi perspiciatis natus aliquid quia placeat, quos, quae doloremque saepe id rem. Id accusamus ex dicta. Quisquam voluptas doloribus temporibus reiciendis illum? Minus suscipit aspernatur eveniet officiis corporis iusto nihil modi quaerat minima optio! Assumenda blanditiis aliquid animi voluptatibus error aut. Fugit provident molestiae dolorem natus rerum nesciunt in nostrum doloribus laudantium? Incidunt quisquam ipsum quidem ipsa adipisci illo eius hic dolorem consequatur ducimus aut earum officiis optio tenetur debitis ea perspiciatis facere rem, dolore vel vero! Asperiores officiis optio vitae nulla! Dignissimos itaque quod veritatis maxime iure odit earum delectus cupiditate fuga sunt voluptate velit architecto, voluptatem reiciendis inventore corrupti nisi! Ullam quo autem, iusto obcaecati similique sequi iure quam deleniti! Iure architecto commodi pariatur, non quos doloribus quasi eius ipsa, voluptas esse quia. Similique laboriosam quidem cumque ut quis iusto? Sint excepturi et dicta voluptate delectus non mollitia, accusantium nobis?"},{"judul":"Markdown Quick Reference","tanggal":"12/3/1995","slug":"This guide is a very brief overview, with examples, of the syntax that Markdown supports. It is itself written in Markdown and you can copy the samples over to the left-hand pane for experimentation. It\'s shown as text and not rendered HTML...","isi":"Markdown Quick Reference\\n========================\\n\\nThis guide is a very brief overview, with examples, of the syntax that [Markdown] supports. It is itself written in Markdown and you can copy the samples over to the left-hand pane for experimentation. It\'s shown as *text* and not *rendered HTML*.\\n\\n[Markdown]: http://daringfireball.net/projects/markdown/\\n\\n\\nSimple Text Formatting\\n======================\\n\\nFirst thing is first. You can use *stars* or _underscores_ for italics. **Double stars** and __double underscores__ for bold. ***Three together*** for ___both___.\\n\\nParagraphs are pretty easy too. Just have a blank line between chunks of text.\\n\\n> This chunk of text is in a block quote. Its multiple lines will all be\\n> indented a bit from the rest of the text.\\n>\\n> > Multiple levels of block quotes also work.\\n\\nSometimes you want to include code, such as when you are explaining how `<h1>` HTML tags work, or maybe you are a programmer and you are discussing `someMethod()`.\\n\\nIf you want to include code and have new\\nlines preserved, indent the line with a tab\\nor at least four spaces:\\n\\n    Extra spaces work here too.\\n    This is also called preformatted text and it is useful for showing examples.\\n    The text will stay as text, so any *markdown* or <u>HTML</u> you add will\\n    not show up formatted. This way you can show markdown examples in a\\n    markdown document.\\n\\n>     You can also use preformatted text with your blockquotes\\n>     as long as you add at least five spaces.\\n\\n\\nHeadings\\n========\\n\\nThere are a couple of ways to make headings. Using three or more equals signs on a line under a heading makes it into an \'h1\' style. Three or more hyphens under a line makes it \'h2\' (slightly smaller). You can also use multiple pound symbols (`#`) before and after a heading. Pounds after the title are ignored. Here are some examples:\\n\\nThis is H1\\n==========\\n\\nThis is H2\\n----------\\n\\n# This is H1\\n## This is H2\\n### This is H3 with some extra pounds ###\\n#### You get the idea ####\\n##### I don\'t need extra pounds at the end\\n###### H6 is the max\\n\\n\\nLinks\\n=====\\n\\nLet\'s link to a few sites. First, let\'s use the bare URL, like <https://www.github.com>. Great for text, but ugly for HTML.\\nNext is an inline link to [Google](https://www.google.com). A little nicer.\\nThis is a reference-style link to [Wikipedia] [1].\\nLastly, here\'s a pretty link to [Yahoo]. The reference-style and pretty links both automatically use the links defined below, but they could be defined *anywhere* in the markdown and are removed from the HTML. The names are also case insensitive, so you can use [YaHoO] and have it link properly.\\n\\n[1]: https://www.wikipedia.org\\n[Yahoo]: https://www.yahoo.com\\n\\nTitle attributes may be added to links by adding text after a link.\\nThis is the [inline link](https://www.bing.com \'Bing\') with a \'Bing\' title.\\nYou can also go to [W3C] [2] and maybe visit a [friend].\\n[2]: https://w3c.org (The W3C puts out specs for web-based things)\\n[Friend]: https://facebook.com \'Facebook!\'\\n\\nEmail addresses in plain text are not linked: test@example.com.\\nEmail addresses wrapped in angle brackets are linked: <test@example.com>.\\nThey are also obfuscated so that email harvesting spam robots hopefully won\'t get them.\\n\\n\\nLists\\n=====\\n\\n* This is a bulleted list\\n* Great for shopping lists\\n- You can also use hyphens\\n+ Or plus symbols\\n\\nThe above is an \'unordered\' list. Now, on for a bit of order.\\n\\n1. Numbered lists are also easy\\n2. Just start with a number\\n3738762. However, the actual number doesn\'t matter when converted to HTML.\\n1. This will still show up as 4.\\n\\nYou might want a few advanced lists:\\n\\n- This top-level list is wrapped in paragraph tags\\n- This generates an extra space between each top-level item.\\n\\n- You do it by adding a blank line\\n\\n- This nested list also has blank lines between the list items.\\n\\n- How to create nested lists\\n  1. Start your regular list\\n  2. Indent nested lists with two spaces\\n  3. Further nesting means you should indent with two more spaces\\n    * This line is indented with four spaces.\\n  - List items can be quite lengthy. You can keep typing and either continue\\nthem on the next line with no indentation.\\n\\n- Alternately, if that looks ugly, you can also\\n  indent the next line a bit for a prettier look.\\n\\n- You can put large blocks of text in your list by just indenting with two spaces.\\n\\n  This is formatted the same as code, but you can inspect the HTML\\n\\n  and find that it\'s just wrapped in a `<p>` tag and *won\'t* be shown\\n\\n  as preformatted text.\\n\\n  You can keep adding more and more paragraphs to a single\\n  list item by adding the traditional blank line and then keep\\n  on indenting the paragraphs with two spaces.\\n\\n  You really only need to indent the first line,\\nbut that looks ugly.\\n\\n- Lists support blockquotes\\n\\n  > Just like this example here. By the way, you can\\n  > nest lists inside blockquotes!\\n  > - Fantastic!\\n\\n- Lists support preformatted text\\n\\n      You just need to indent an additional four spaces.\\n\\n\\nEven More\\n=========\\n\\nHorizontal Rule\\n---------------\\n\\nIf you need a horizontal rule you just need to put at least three hyphens, asterisks, or underscores on a line by themselves. You can also even put spaces between the characters.\\n\\n---\\n****************************\\n_ _ _ _ _ _ _\\n\\nThose three all produced horizontal lines. Keep in mind that three hyphens under any text turns that text into a heading, so add a blank like if you use hyphens.\\n\\nImages\\n------\\n\\nImages work exactly like links, but they have exclamation points in front. They work with references and titles too.\\n\\n![Google Logo](https://www.google.com/images/errors/logo_sm.gif) and ![Happy].\\n\\n[Happy]: /images/posts/gambar1.png (contoh gambar)\\n\\n\\nInline HTML\\n-----------\\n\\nIf markdown is too limiting, you can just insert your own <strike>crazy</strike> HTML. Span-level HTML <u>can *still* use markdown</u>. Block level elements must be separated from text by a blank line and must not have any spaces before the opening and closing HTML.\\n\\n<div style=\'font-family: \'Comic Sans MS\', \'Comic Sans\', cursive;\'>\\nIt is a pity, but markdown does **not** work in here for most markdown parsers.\\n[Marked] handles it pretty well.\\n</div>"},{"judul":"Marked - Markdown Parser","tanggal":"16/5/1997","slug":"Marked lets you convert Markdown into HTML. Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML. This demo page will let you type anything you like and see how it gets converted. Live. No more waiting around...","isi":"Marked - Markdown Parser\\n========================\\n\\n[Marked] lets you convert [Markdown] into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.\\n\\nHow To Use The Demo\\n-------------------\\n\\n1. Type in stuff on the left.\\n2. See the live updates on the right.\\n\\nThat\'s it.  Pretty simple.  There\'s also a drop-down option above to switch between various views:\\n\\n- **Preview:**  A live display of the generated HTML as it would render in a browser.\\n- **HTML Source:**  The generated HTML before your browser makes it pretty.\\n- **Lexer Data:**  What [marked] uses internally, in case you like gory stuff like this.\\n- **Quick Reference:**  A brief run-down of how to format things using markdown.\\n\\nWhy Markdown?\\n-------------\\nIt\'s easy.  It\'s not overly bloated, unlike HTML.  Also, as the creator of [markdown] says,\\n\\n> The overriding design goal for Markdown\'s\\n> formatting syntax is to make it as readable\\n> as possible. The idea is that a\\n> Markdown-formatted document should be\\n> publishable as-is, as plain text, without\\n> looking like it\'s been marked up with tags\\n> or formatting instructions.\\n\\nReady to start writing?  Either start changing stuff on the left or\\n[clear everything](/demo/?text=) with a simple click.\\n\\n[Marked]: https://github.com/markedjs/marked/\\n\\n[Markdown]: http://daringfireball.net/projects/markdown/"}]}')}},function(e){e.O(0,[176,597,971,596,744],function(){return e(e.s=3815)}),_N_E=e.O()}]);