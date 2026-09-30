import React,{useEffect,useMemo,useState} from "react";
import {createRoot} from "react-dom/client";
import "./styles.css";

const normalLines=["WELCOME, UJENEZA ORGAN.","BUILDING IDEAS INTO REALITY.","REACT • NODE.JS • JAVASCRIPT"];
const codeLines=["const portfolio = new UjenezaOrgan();","portfolio.create('digital experiences');","const stack = ['React','Node.js','JavaScript'];","while (userClicks) { enhanceProgrammerMode(); }","return portfolio.launch();"];
const hackerLines=["$ sudo access --portfolio","> initializing secure shell...","> scanning interface...","> access granted","$ run --matrix --silent","[SYSTEM] signal detected","[SYSTEM] executing command...","$ whoami","ujeneza_organ","$ deploy --now"];

function App(){
 const [mode,setMode]=useState("normal");
 const [burst,setBurst]=useState(0);
 const lines=useMemo(()=>mode==="code"?codeLines:mode==="hacker"?hackerLines:normalLines,[mode]);
 useEffect(()=>{document.body.dataset.mode=mode},[mode]);
 const clickMode=()=>{if(mode!=="normal"){setBurst(x=>x+1)}};
 return <div className={"app "+mode} onClick={clickMode}>
  <div className="scan"/><div className="grid"/>
  {mode!=="normal" && <div className="rain" key={burst}>{Array.from({length:18},(_,i)=><span key={i}>{lines[(i+burst)%lines.length]}</span>)}</div>}
  <nav><div className="brand">U<span>O</span></div><div className="navlinks"><a href="#home">HOME</a><a href="#about">ABOUT</a><a href="#projects">PROJECTS</a><a href="#contact">CONTACT</a></div><div className="mode"><button className={mode==="normal"?"active":""} onClick={e=>{e.stopPropagation();setMode("normal")}}>NORMAL</button><button className={mode==="code"?"active":""} onClick={e=>{e.stopPropagation();setMode("code")}}>CODE</button><button className={mode==="hacker"?"active":""} onClick={e=>{e.stopPropagation();setMode("hacker")}}>HACKER</button></div></nav>
  <main id="home"><section className="hero"><p className="eyebrow">// DIGITAL CREATOR • DEVELOPER</p><h1>UJENEZA<br/><em>ORGAN</em></h1><p className="tag">I build digital experiences, experiment with technology, and turn ideas into working products.</p><div className="actions"><a href="#projects">VIEW PROJECTS ↗</a><a href="#contact" className="ghost">LET'S CONNECT</a></div></section>
  <section className="terminal"><div className="termbar"><i/><i/><i/><span>{mode.toUpperCase()}_SCREEN</span></div><div className="termcontent">{lines.map((x,i)=><p key={i}><b>{mode==="hacker"?"$":">"}</b> {x}<span className="cursor"/></p>)}<p className="hint">// click anywhere to intensify</p></div></section></main>
  <section id="about" className="section"><p className="eyebrow">// ABOUT</p><h2>CURIOUS BY DEFAULT.</h2><p>I’m Ujeneza Organ — a developer focused on web experiences, creative technology and ideas that can become real products.</p><div className="skills"><span>REACT.JS</span><span>NODE.JS</span><span>JAVASCRIPT</span><span>UI / UX</span><span>CREATIVE TECH</span></div></section>
  <section id="projects" className="section"><p className="eyebrow">// SELECTED WORK</p><h2>PROJECTS</h2><div className="cards"><article><small>01 / DESKTOP APP</small><h3>OPLAY</h3><p>Multi-user audio routing concept for sharing different audio experiences from one device.</p></article><article><small>02 / WEB PLATFORM</small><h3>BYOROSHYE GO</h3><p>A mobility platform concept connecting clients with moto riders through a simple digital flow.</p></article><article><small>03 / EXPERIMENT</small><h3>MORE LOADING...</h3><p>Ideas in progress. This portfolio is where the experiments live.</p></article></div></section>
  <section id="contact" className="section contact"><p className="eyebrow">// CONTACT</p><h2>LET'S BUILD SOMETHING.</h2><p>Have an idea, project or experiment? Reach out.</p><a className="mail" href="mailto:ujenezaorgan@gmail.com">ujenezaorgan@gmail.com ↗</a></section>
  <footer>© 2026 UJENEZA ORGAN <span>REACT.JS / NODE.JS</span></footer>
 </div>
}
createRoot(document.getElementById("root")).render(<App/>);