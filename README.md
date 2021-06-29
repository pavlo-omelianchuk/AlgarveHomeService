// $ gatsby clean
// $ npm run develop

"scripts": {
"build": "gatsby build",

"develop": "gatsby develop --host=0.0.0.0", // <=

"format": "prettier --write \"\*_/_.{js,jsx,json,md}\"",
"start": "npm run develop",
"serve": "gatsby serve",
"clean": "gatsby clean",
"test": "echo \"Write tests! -> https://gatsby.dev/unit-testing\" && exit 1"
},

---

You can now view mobile-beauty-algarve in the browser.
⠀
Local: http://localhost:8000/
On Your Network: http://172.26.208.1:8000/

// in fact look for it on ipconfig,
// IPv4 Address. . . . . . . . . . . : 192.168.1.68
⠀
View GraphiQL, an in-browser IDE, to explore your site's data and schema
⠀
Local: http://localhost:8000/**_graphql
On Your Network: http://172.26.208.1:8000/_**graphql

{
/_ <StaticQuery
query={graphql` query MyQuery { strapiHero { MainPhoto { formats { large { url } } } Title Subtitle TitleName Button } } `}
render={(data) => (
<>
<div>
<section id="hero" className="jumbotron">
<Container>
<div id="hero-overlay" />
{/_ <img src={'http://localhost:1337' + data.strapiHero.MainPhoto.formats.large.url} alt="hero-background-image" />
<Fade big duration={4000}>
<img src={pinkComponent} alt="pink component" />
</Fade>
<Fade bottom distance="30px">
<h3 className="hero-subtitle">{data.strapiHero.Subtitle}</h3>
</Fade>
<Fade bottom duration={4000} distance="300px">
<h1 className="hero-title">{data.strapiHero.Title}</h1>
<h2 className="hero-title hero-title-name text-color-main">
{` ${data.strapiHero.TitleName}`}
</h2>
</Fade>
<Zoom duration={1000} delay={2000}>
<p className="hero-cta">
<span className="cta-btn cta-btn--hero">
<a href="/prices">
{data.strapiHero.Button}
{/_ <a href="https://api.whatsapp.com/send?phone=+351 925 142 109">
<i className="fa fa-whatsapp"
                          ariaHidden="true"
                        ></i>
</a>
</a>
</span>
</p>
</Zoom>
</Container>
</section>
</div>
</>
)}
/> _/
}
