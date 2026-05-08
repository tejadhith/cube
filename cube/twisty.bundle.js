var MS=Object.defineProperty;var C=(t,e)=>()=>(t&&(e=t(t=0)),e);var dn=(t,e)=>{for(var i in e)MS(t,i,{get:e[i],enumerable:!0})};function bS(t,e=!0){if(!e)return t;switch(t){case 1:return-1;case-1:return 1}}function hc(t,e){return e===-1?Array.from(t).reverse():t}function AS(t){return Array.from(t).reverse()}function*Lh(t,e){e===-1?yield*CS(t):yield*t}function*CS(t){for(let e of Array.from(t).reverse())yield e}function ua(t,e){return t?parseInt(t):e}function Ph(t){return new dc().parseAlg(t)}function US(t){return new dc().parseMove(t)}function OS(t){return new dc().parseQuantumMove(t)}function kt(t,e,i){let r=t;return r[fi]=e,r[Fi]=i,r}function FS(t,e){return fi in t&&(e[fi]=t[fi]),Fi in t&&(e[Fi]=t[Fi]),e}function Uh(t){Ch.has(t)||(console.warn(t),Ch.add(t))}function pr(t,e){return t instanceof e}function BS(t){return pr(t,qt)||pr(t,un)||pr(t,Ri)||pr(t,ei)||pr(t,A)||pr(t,mr)||pr(t,Bt)}function Oh(t,e,i){if(e.is(qt))return t.traverseGrouping(e,i);if(e.is(A))return t.traverseMove(e,i);if(e.is(Ri))return t.traverseCommutator(e,i);if(e.is(ei))return t.traverseConjugate(e,i);if(e.is(Bt))return t.traversePause(e,i);if(e.is(mr))return t.traverseNewline(e,i);if(e.is(un))return t.traverseLineComment(e,i);throw new Error("unknown AlgNode")}function Fh(t){if(t.is(qt)||t.is(A)||t.is(Ri)||t.is(ei)||t.is(Bt)||t.is(mr)||t.is(un))return t;throw new Error("internal error: expected AlgNode")}function jt(t,e){let i=new t(...e??[]);return i.traverseAlg.bind(i)}function VS(t,e){return t*Math.sign(e.amount)>=0}function uc(t,e,i=0){return((t-i)%e+e)%e+i}function pc(t,e,i){let r=new zh(i),n=Array.from(t.childAlgNodes()),s=[e];function o(){return new ge([...n,...s])}function a(l){if(r.cancelPuzzleSpecificModWrap()==="none")return l;let c=r.puzzleSpecificSimplifyOptions()?.quantumMoveOrder;if(!c)return l;let f=c(e.quantum),h;switch(r.cancelPuzzleSpecificModWrap()){case"gravity":{h=-Math.floor((f-(l.amount<0?0:1))/2);break}case"canonical-centered":{h=-Math.floor((f-1)/2);break}case"canonical-positive":{h=0;break}case"preserve-sign":{h=l.amount<0?1-f:0;break}default:throw new Error("Unknown mod wrap")}let u=uc(l.amount,f,h);return l.modified({amount:u})}if(r.cancelAny()){let l,c=r.puzzleSpecificSimplifyOptions()?.axis;if(c)l=d=>c.areQuantumMovesSameAxis(e.quantum,d.quantum);else{let d=e.quantum.toString();l=y=>y.quantum.toString()===d}let f=r.cancelQuantum()==="same-direction",h=new Map;h.set(e.quantum.toString(),Math.sign(e.amount));let u;for(u=n.length-1;u>=0;u--){let d=n[u].as(A);if(!d||!l(d))break;let y=d.quantum.toString();if(f){let g=h.get(y);if(g&&!VS(g,d))break;h.set(y,Math.sign(d.amount))}}let p=[...n.splice(u+1),e];if(c)s=c.simplifySameAxisMoves(p,r.cancelPuzzleSpecificModWrap()!=="none");else{let d=p.reduce((y,g)=>y+g.amount,0);if(h.size!==1)throw new Error("Internal error: multiple quantums when one was expected");s=[new A(e.quantum,d)]}}return s=s.map(l=>a(l)).filter(l=>l.amount!==0),o()}function HS(t,e,i){let r=e.as(A);return r?pc(t,r,i):new ge([...t.childAlgNodes(),e])}function Th(t){if(!t)return[];if(pr(t,ge))return t.childAlgNodes();if(typeof t=="string")return Ph(t).childAlgNodes();let e=t;if(typeof e[Symbol.iterator]=="function")return e;throw new Error("Invalid AlgNode")}function eo(t){return pr(t,ge)?t:new ge(t)}function qS(t,e){return t.is(mr)||e.is(mr)||e.as(qt)?.experimentalNISSPlaceholder?"":t.is(un)&&!e.is(mr)?`
`:" "}var RS,Dh,Ur,sc,oc,TS,Ri,ei,un,mr,Bt,ma,DS,Ah,LS,NS,IS,kS,PS,fi,Fi,dc,Ch,cc,ke,A,zS,nc,qt,Or,gr,GS,zh,WS,XS,ge,pM,Fr=C(()=>{RS=!1,Dh=class{is(t){return this instanceof t}as(t){return this instanceof t?this:null}},Ur=class extends Dh{constructor(){super(),RS&&Object.defineProperty(this,"_debugStr",{get:()=>this.toString()})}get log(){return console.log.bind(console,this,this.toString())}};sc=2147483647,oc="2^31 - 1",TS=-2147483648,Ri=class ac extends Ur{#e;#t;constructor(e,i){super(),this.#e=eo(e),this.#t=eo(i)}get A(){return this.#e}get B(){return this.#t}isIdentical(e){let i=e.as(ac);return!!(i?.A.isIdentical(this.A)&&i?.B.isIdentical(this.B))}invert(){return new ac(this.#t,this.#e)}*experimentalExpand(e=1,i){i??=1/0,i===0?yield e===1?this:this.invert():e===1?(yield*this.A.experimentalExpand(1,i-1),yield*this.B.experimentalExpand(1,i-1),yield*this.A.experimentalExpand(-1,i-1),yield*this.B.experimentalExpand(-1,i-1)):(yield*this.B.experimentalExpand(1,i-1),yield*this.A.experimentalExpand(1,i-1),yield*this.B.experimentalExpand(-1,i-1),yield*this.A.experimentalExpand(-1,i-1))}toString(e){return`[${this.#e.toString(e)}, ${this.#t.toString(e)}]`}},ei=class lc extends Ur{#e;#t;constructor(e,i){super(),this.#e=eo(e),this.#t=eo(i)}get A(){return this.#e}get B(){return this.#t}isIdentical(e){let i=e.as(lc);return!!(i?.A.isIdentical(this.A)&&i?.B.isIdentical(this.B))}invert(){return new lc(this.#e,this.#t.invert())}*experimentalExpand(e,i){i??=1/0,i===0?yield e===1?this:this.invert():(yield*this.A.experimentalExpand(1,i-1),yield*this.B.experimentalExpand(e,i-1),yield*this.A.experimentalExpand(-1,i-1))}toString(e){return`[${this.A.toString(e)}: ${this.B.toString(e)}]`}},un=class Nh extends Ur{#e;constructor(e){if(super(),e.includes(`
`)||e.includes("\r"))throw new Error("LineComment cannot contain newline");this.#e=e}get text(){return this.#e}isIdentical(e){let i=e;return e.is(Nh)&&this.#e===i.#e}invert(){return this}*experimentalExpand(e=1,i=1/0){yield this}toString(e){return`//${this.#e}`}},mr=class Ih extends Ur{toString(e){return`
`}isIdentical(e){return e.is(Ih)}invert(){return this}*experimentalExpand(e=1,i=1/0){yield this}},Bt=class kh extends Ur{experimentalNISSGrouping;toString(e){return"."}isIdentical(e){return e.is(kh)}invert(){return this}*experimentalExpand(e=1,i=1/0){yield this}},ma=class{#e=[];push(t){this.#e.push(t)}experimentalPushAlg(t){for(let e of t.childAlgNodes())this.push(e)}experimentalNumAlgNodes(){return this.#e.length}toAlg(){return new ge(this.#e)}reset(){this.#e=[]}},DS={caretNISSNotationEnabled:!0};Ah=/^(\d+)?('?)/,LS=/^[_\dA-Za-z]/,NS=/^((([1-9]\d*)-)?([1-9]\d*))?([_A-Za-z]+)/,IS=/^[^\n]*/,kS=/^(-?\d+), ?/,PS=/^(-?\d+)\)/;fi=Symbol("startCharIndex"),Fi=Symbol("endCharIndex");dc=class{#e="";#t=0;#i=[];parseAlg(t){this.#e=t,this.#t=0;let e=this.parseAlgWithStopping([]);this.mustBeAtEndOfInput();let i=Array.from(e.childAlgNodes());if(this.#i.length>0)for(let o of this.#i.reverse())i.push(o);let r=new ge(i),{[fi]:n,[Fi]:s}=e;return kt(r,n,s),r}parseMove(t){this.#e=t,this.#t=0;let e=this.parseMoveImpl();return this.mustBeAtEndOfInput(),e}parseQuantumMove(t){this.#e=t,this.#t=0;let e=this.parseQuantumMoveImpl();return this.mustBeAtEndOfInput(),e}mustBeAtEndOfInput(){if(this.#t!==this.#e.length)throw new Error("parsing unexpectedly ended early")}parseAlgWithStopping(t){let e=this.#t,i=this.#t,r=new ma,n=!1,s=o=>{if(n)throw new Error(`Unexpected character at index ${o}. Are you missing a space?`)};e:for(;this.#t<this.#e.length;){let o=this.#t;if(t.includes(this.#e[this.#t]))return kt(r.toAlg(),e,i);if(this.tryConsumeNext(" ")){n=!1,r.experimentalNumAlgNodes()===0&&(e=this.#t);continue e}else if(LS.test(this.#e[this.#t])){s(o);let a=this.parseMoveImpl();r.push(a),n=!0,i=this.#t;continue e}else if(this.tryConsumeNext("(")){s(o);let a=this.tryRegex(kS);if(a){let l=a[1],c=this.#t,f=this.parseRegex(PS),h=kt(new A(new ke("U_SQ_"),parseInt(l)),o+1,o+1+l.length),u=kt(new A(new ke("D_SQ_"),parseInt(f[1])),c,this.#t-1),p=kt(new ge([h,u]),o+1,this.#t-1);r.push(kt(new qt(p),o,this.#t)),n=!0,i=this.#t;continue e}else{let l=this.parseAlgWithStopping([")"]);this.mustConsumeNext(")");let c=this.parseAmount();r.push(kt(new qt(l,c),o,this.#t)),n=!0,i=this.#t;continue e}}else if(this.tryConsumeNext("^")){if(!DS.caretNISSNotationEnabled)throw new Error("Alg contained a caret but caret NISS notation is not enabled.");this.mustConsumeNext("(");let a=this.parseAlgWithStopping([")"]);this.popNext();let l=new qt(a,-1),c=new Bt;l.experimentalNISSPlaceholder=c,c.experimentalNISSGrouping=l,this.#i.push(l),r.push(c)}else if(this.tryConsumeNext("[")){s(o);let a=this.parseAlgWithStopping([",",":"]),l=this.popNext(),c=this.parseAlgWithStopping(["]"]);this.mustConsumeNext("]");let f;switch(l){case":":{f=kt(new ei(a,c),o,this.#t),n=!0,i=this.#t;break}case",":{f=kt(new Ri(a,c),o,this.#t),n=!0,i=this.#t;break}default:throw new Error("unexpected parsing error")}let h=this.#t,u=this.parseAmount();if(u===1)r.push(f);else{let p=kt(new ge([f]),o,h),d=kt(new qt(p,u),o,this.#t);r.push(d)}n=!0,i=this.#t;continue e}else if(this.tryConsumeNext(`
`)){r.push(kt(new mr,o,this.#t)),n=!1,i=this.#t;continue e}else if(this.tryConsumeNext("/"))if(this.tryConsumeNext("/")){s(o);let[a]=this.parseRegex(IS);r.push(kt(new un(a),o,this.#t)),n=!1,i=this.#t;continue e}else{r.push(kt(new A("_SLASH_"),o,this.#t)),n=!0,i=this.#t;continue e}else if(this.tryConsumeNext(".")){s(o),r.push(kt(new Bt,o,this.#t)),n=!0,i=this.#t;continue e}else throw new Error(`Unexpected character: ${this.popNext()}`)}if(this.#t!==this.#e.length)throw new Error("did not finish parsing?");if(t.length>0)throw new Error("expected stopping");return kt(r.toAlg(),e,i)}parseQuantumMoveImpl(){let[,,,t,e,i]=this.parseRegex(NS);return new ke(i,ua(e,void 0),ua(t,void 0))}parseMoveImpl(){let t=this.#t;if(this.tryConsumeNext("/"))return kt(new A("_SLASH_"),t,this.#t);let e=this.parseQuantumMoveImpl(),[i,r]=this.parseAmountAndTrackEmptyAbsAmount(),n=this.parseMoveSuffix();if(n){if(i<0)throw new Error("uh-oh");if((n==="++"||n==="--")&&i!==1)throw new Error("Pochmann ++ or -- moves cannot have an amount other than 1.");if((n==="++"||n==="--")&&!r)throw new Error("Pochmann ++ or -- moves cannot have an amount written as a number.");if((n==="+"||n==="-")&&r)throw new Error("Clock dial moves must have an amount written as a natural number followed by + or -.");n.startsWith("+")&&(e=e.modified({family:`${e.family}_${n==="+"?"PLUS":"PLUSPLUS"}_`})),n.startsWith("-")&&(e=e.modified({family:`${e.family}_${n==="-"?"PLUS":"PLUSPLUS"}_`}),i*=-1)}return kt(new A(e,i),t,this.#t)}parseMoveSuffix(){return this.tryConsumeNext("+")?this.tryConsumeNext("+")?"++":"+":this.tryConsumeNext("-")?this.tryConsumeNext("-")?"--":"-":null}parseAmountAndTrackEmptyAbsAmount(){let t=this.#t,[,e,i]=this.parseRegex(Ah);if(e?.startsWith("0")&&e!=="0")throw new Error(`Error at char index ${t}: An amount can only start with 0 if it's exactly the digit 0.`);return[ua(e,1)*(i==="'"?-1:1),!e]}parseAmount(){let t=this.#t,[,e,i]=this.parseRegex(Ah);if(e?.startsWith("0")&&e!=="0")throw new Error(`Error at char index ${t}: An amount number can only start with 0 if it's exactly the digit 0.`);return ua(e,1)*(i==="'"?-1:1)}parseRegex(t){let e=t.exec(this.remaining());if(e===null)throw new Error("internal parsing error");return this.#t+=e[0].length,e}tryRegex(t){let e=t.exec(this.remaining());return e===null?null:(this.#t+=e[0].length,e)}remaining(){return this.#e.slice(this.#t)}popNext(){let t=this.#e[this.#t];return this.#t++,t}tryConsumeNext(t){return this.#e[this.#t]===t?(this.#t++,!0):!1}mustConsumeNext(t){let e=this.popNext();if(e!==t)throw new Error(`expected \`${t}\` while parsing, encountered ${e}`);return e}},Ch=new Set;cc=class{quantum;amount;constructor(t,e=1){if(this.quantum=t,this.amount=e,!Number.isInteger(this.amount)||this.amount<TS||this.amount>sc)throw new Error(`AlgNode amount absolute value must be a non-negative integer below ${oc}.`)}suffix(){let t="",e=Math.abs(this.amount);return e!==1&&(t+=e),this.amount<0&&(t+="'"),t}isIdentical(t){return this.quantum.isIdentical(t.quantum)&&this.amount===t.amount}*experimentalExpand(t,e){let i=Math.abs(this.amount),r=bS(t,this.amount<0);for(let n=0;n<i;n++)yield*this.quantum.experimentalExpand(r,e)}},ke=class fc extends Dh{#e;#t;#i;constructor(e,i,r){if(super(),this.#e=e,this.#t=i??null,this.#i=r??null,Object.freeze(this),this.#t!==null&&(!Number.isInteger(this.#t)||this.#t<1||this.#t>sc))throw new Error(`QuantumMove inner layer must be a positive integer below ${oc}.`);if(this.#i!==null&&(!Number.isInteger(this.#i)||this.#i<1||this.#i>sc))throw new Error(`QuantumMove outer layer must be a positive integer below ${oc}.`);if(this.#i!==null&&this.#t!==null&&this.#t<=this.#i)throw new Error("QuantumMove outer layer must be smaller than inner layer.");if(this.#i!==null&&this.#t===null)throw new Error("QuantumMove with an outer layer must have an inner layer")}static fromString(e){return OS(e)}modified(e){return new fc(e.family??this.#e,e.innerLayer??this.#t,e.outerLayer??this.#i)}isIdentical(e){let i=e;return e.is(fc)&&this.#e===i.#e&&this.#t===i.#t&&this.#i===i.#i}get family(){return this.#e}get outerLayer(){return this.#i}get innerLayer(){return this.#t}experimentalExpand(){throw new Error("experimentalExpand() cannot be called on a `QuantumMove` directly.")}toString(e){let i=this.#e;return this.#t!==null&&(i=String(this.#t)+i,this.#i!==null&&(i=`${String(this.#i)}-${i}`)),i}},A=class Hn extends Ur{#e;constructor(...e){if(super(),typeof e[0]=="string")if(e[1]??null){this.#e=new cc(ke.fromString(e[0]),e[1]);return}else return Hn.fromString(e[0]);this.#e=new cc(e[0],e[1])}isIdentical(e){let i=e.as(Hn);return!!i&&this.#e.isIdentical(i.#e)}invert(){return FS(this,new Hn(this.#e.quantum,this.#i()?this.amount:-this.amount))}*experimentalExpand(e=1){e===1?yield this:yield this.modified({amount:-this.amount})}get quantum(){return this.#e.quantum}modified(e){return new Hn(this.#e.quantum.modified(e),e.amount??this.amount)}static fromString(e){return US(e)}get amount(){return this.#e.amount}get type(){return Uh("deprecated: type"),"blockMove"}get family(){return this.#e.quantum.family??void 0}get outerLayer(){return this.#e.quantum.outerLayer??void 0}get innerLayer(){return this.#e.quantum.innerLayer??void 0}#t;#i(){return this.isIdentical(this.#t??=new Hn("_SLASH_"))}toString(e){if(e?.notation!=="LGN"){if(this.#i())return"/";if(this.family.endsWith("_PLUS_"))return this.#e.quantum.toString().slice(0,-6)+Math.abs(this.amount)+(this.amount<0?"-":"+");if(this.family.endsWith("_PLUSPLUS_")){let i=Math.abs(this.amount);return this.#e.quantum.toString().slice(0,-10)+(i===1?"":i)+(this.amount<0?"--":"++")}}return this.#e.quantum.toString(e)+this.#e.suffix()}},zS=class{quantumU_SQ_=null;quantumD_SQ_=null;format(t,e){if(e?.notation==="LGN"||t.amount!==1)return null;let i=this.tuple(t);return i?`(${i.map(r=>r.amount).join(", ")})`:null}tuple(t){if(t.amount!==1)return null;this.quantumU_SQ_||=new ke("U_SQ_"),this.quantumD_SQ_||=new ke("D_SQ_");let e=t.alg;if(e.experimentalNumChildAlgNodes()===2){let[i,r]=e.childAlgNodes();if(i.as(A)?.quantum.isIdentical(this.quantumU_SQ_)&&r.as(A)?.quantum.isIdentical(this.quantumD_SQ_))return[i,r]}return null}},nc=new zS,qt=class pa extends Ur{#e;experimentalNISSPlaceholder;constructor(e,i){super();let r=eo(e);this.#e=new cc(r,i)}isIdentical(e){let i=e;return e.is(pa)&&this.#e.isIdentical(i.#e)}get alg(){return this.#e.quantum}get amount(){return this.#e.amount}get experimentalRepetitionSuffix(){return this.#e.suffix()}invert(){let e=nc.tuple(this);if(e){let[i,r]=e;return new pa(new ge([i.invert(),r.invert()]))}return new pa(this.#e.quantum,-this.#e.amount)}*experimentalExpand(e=1,i){i??=1/0,i===0?yield e===1?this:this.invert():yield*this.#e.experimentalExpand(e,i-1)}static fromString(){throw new Error("unimplemented")}#t(e){let i=this.#e.quantum.toString(e),r=this.alg.childAlgNodes(),{value:n}=r.next();return r.next().done&&(n?.is(Ri)||n?.is(ei))?i:`(${i})`}toString(e){return nc.format(this,e)??`${this.#t(e)}${this.#e.suffix()}`}experimentalAsSquare1Tuple(){return nc.tuple(this)}};Or=class{traverseAlgNode(t,e){return Oh(this,t,e)}traverseIntoAlgNode(t,e){return Fh(this.traverseAlgNode(t,e))}},gr=class extends Or{traverseAlgNode(t){return Oh(this,t,void 0)}traverseIntoAlgNode(t){return Fh(this.traverseAlgNode(t))}};GS="any-direction",zh=class{constructor(t={}){this.config=t}cancelQuantum(){let{cancel:t}=this.config;return t===!0?GS:t===!1?"none":t?.directional??"none"}cancelAny(){return this.config.cancel&&this.cancelQuantum()!=="none"}cancelPuzzleSpecificModWrap(){let{cancel:t}=this.config;return t===!0||t===!1?"canonical-centered":t?.puzzleSpecificModWrap?t?.puzzleSpecificModWrap:t?.directional==="same-direction"?"preserve-sign":"canonical-centered"}puzzleSpecificSimplifyOptions(){return this.config.puzzleLoader?.puzzleSpecificSimplifyOptions??this.config.puzzleSpecificSimplifyOptions}};WS=class extends Or{#e;#t(){return this.#e??=new Map}#i(t){return{...t,depth:t.depth?t.depth-1:null}}*traverseAlg(t,e){if(e.depth===0){yield*t.childAlgNodes();return}let i=[],r=this.#i(e);for(let n of t.childAlgNodes())for(let s of this.traverseAlgNode(n,r))i=Array.from(HS(new ge(i),s,r).childAlgNodes());for(let n of i)yield n}*traverseGrouping(t,e){if(e.depth===0){yield t;return}if(t.amount===0)return;let i=new qt(this.traverseAlg(t.alg,this.#i(e)),t.amount);if(i.alg.experimentalIsEmpty())return;let r=this.#t().get(t);r&&(i.experimentalNISSPlaceholder=r,r.experimentalNISSGrouping=i),yield i}*traverseMove(t,e){yield t}#r(t,e,i){if(t.experimentalNumChildAlgNodes()===1&&e.experimentalNumChildAlgNodes()===1){let r=Array.from(t.childAlgNodes())[0]?.as(A),n=Array.from(e.childAlgNodes())[0]?.as(A);if(!(r&&n))return!1;if(n.quantum.isIdentical(r.quantum)||new zh(i).puzzleSpecificSimplifyOptions()?.axis?.areQuantumMovesSameAxis(r.quantum,n.quantum))return!0}return!1}*traverseCommutator(t,e){if(e.depth===0){yield t;return}let i=this.#i(e),r=new Ri(this.traverseAlg(t.A,i),this.traverseAlg(t.B,i));r.A.experimentalIsEmpty()||r.B.experimentalIsEmpty()||r.A.isIdentical(r.B)||r.A.isIdentical(r.B.invert())||this.#r(r.A,r.B,e)||(yield r)}*traverseConjugate(t,e){if(e.depth===0){yield t;return}let i=this.#i(e),r=new ei(this.traverseAlg(t.A,i),this.traverseAlg(t.B,i));if(!r.B.experimentalIsEmpty()){if(r.A.experimentalIsEmpty()||r.A.isIdentical(r.B)||r.A.isIdentical(r.B.invert())||this.#r(r.A,r.B,e)){yield*t.B.childAlgNodes();return}yield r}}*traversePause(t,e){if(t.experimentalNISSGrouping){let i=new Bt;this.#t().set(t.experimentalNISSGrouping,i),yield i}else yield t}*traverseNewline(t,e){yield t}*traverseLineComment(t,e){yield t}},XS=jt(WS);ge=class Wn extends Ur{#e;constructor(e){super(),this.#e=Array.from(Th(e));for(let i of this.#e)if(!BS(i))throw new Error("An alg can only contain alg nodes.")}isIdentical(e){let i=e;if(!e.is(Wn))return!1;let r=Array.from(this.#e),n=Array.from(i.#e);if(r.length!==n.length)return!1;for(let s=0;s<r.length;s++)if(!r[s].isIdentical(n[s]))return!1;return!0}invert(){return new Wn(AS(Array.from(this.#e).map(e=>e.invert())))}*experimentalExpand(e=1,i){i??=1/0;for(let r of hc(this.#e,e))yield*r.experimentalExpand(e,i)}expand(e){return new Wn(this.experimentalExpand(1,e?.depth??1/0))}*experimentalLeafMoves(){for(let e of this.experimentalExpand())e.is(A)&&(yield e)}concat(e){return new Wn(Array.from(this.#e).concat(Array.from(Th(e))))}experimentalIsEmpty(){for(let e of this.#e)return!1;return!0}static fromString(e){return Ph(e)}units(){return this.childAlgNodes()}*childAlgNodes(){for(let e of this.#e)yield e}experimentalNumUnits(){return this.experimentalNumChildAlgNodes()}experimentalNumChildAlgNodes(){return Array.from(this.#e).length}get type(){return Uh("deprecated: type"),"sequence"}toString(e){let i="",r=null;for(let n of this.#e){r&&(i+=qS(r,n));let s=n.as(Bt)?.experimentalNISSGrouping;if(s){if(s.amount!==-1)throw new Error("Invalid NISS Grouping amount!");i+=`^(${s.alg.toString(e)})`}else n.as(qt)?.experimentalNISSPlaceholder||(i+=n.toString(e));r=n}return i}experimentalSimplify(e){return new Wn(XS(this,e??{}))}simplify(e){return this.experimentalSimplify(e)}};pM={Sune:new ge([new A("R",1),new A("U",1),new A("R",-1),new A("U",1),new A("R",1),new A("U",-2),new A("R",-1)]),AntiSune:new ge([new A("R",1),new A("U",2),new A("R",-1),new A("U",-1),new A("R",1),new A("U",-1),new A("R",-1)]),SuneCommutator:new ge([new Ri(new ge([new A("R",1),new A("U",1),new A("R",-2)]),new ge([new ei(new ge([new A("R",1)]),new ge([new A("U",1)]))]))]),Niklas:new ge([new A("R",1),new A("U",-1),new A("L",-1),new A("U",1),new A("R",-1),new A("U",-1),new A("L",1),new A("U",1)]),EPerm:new ge([new A("x",-1),new Ri(new ge([new ei(new ge([new A("R",1)]),new ge([new A("U",-1)]))]),new ge([new A("D",1)])),new Ri(new ge([new ei(new ge([new A("R",1)]),new ge([new A("U",1)]))]),new ge([new A("D",1)])),new A("x",1)]),FURURFCompact:new ge([new ei(new ge([new A("F",1)]),new ge([new Ri(new ge([new A("U",1)]),new ge([new A("R",1)]))]))]),APermCompact:new ge([new ei(new ge([new A("R",2)]),new ge([new Ri(new ge([new A("F",2)]),new ge([new A("R",-1),new A("B",-1),new A("R",1)]))]))]),FURURFMoves:new ge([new A("F",1),new A("U",1),new A("R",1),new A("U",-1),new A("R",-1),new A("F",-1)]),TPerm:new ge([new A("R",1),new A("U",1),new A("R",-1),new A("U",-1),new A("R",-1),new A("F",1),new A("R",2),new A("U",-1),new A("R",-1),new A("U",-1),new A("R",1),new A("U",1),new A("R",-1),new A("F",-1)]),HeadlightSwaps:new ge([new ei(new ge([new A("F",1)]),new ge([new qt(new ge([new Ri(new ge([new A("R",1)]),new ge([new A("U",1)]))]),3)]))]),TriplePause:new ge([new Bt,new Bt,new Bt])}});function mc(t,e,i){let r={};for(let n of t.orbits){let s=e[n.orbitName],o=i[n.orbitName];if(ya(n.numOrientations,o))r[n.orbitName]=s;else if(ya(n.numOrientations,s))r[n.orbitName]=o;else{let a=new Array(n.numPieces);if(n.numOrientations===1){for(let l=0;l<n.numPieces;l++)a[l]=s.permutation[o.permutation[l]];r[n.orbitName]={permutation:a,orientationDelta:s.orientationDelta}}else{let l=new Array(n.numPieces);for(let c=0;c<n.numPieces;c++)l[c]=(s.orientationDelta[o.permutation[c]]+o.orientationDelta[c])%n.numOrientations,a[c]=s.permutation[o.permutation[c]];r[n.orbitName]={permutation:a,orientationDelta:l}}}}return r}function Bh(t,e,i){let r={};for(let n of t.orbits){let s=e[n.orbitName],o=i[n.orbitName];if(ya(n.numOrientations,o))r[n.orbitName]=s;else{let a=new Array(n.numPieces);if(n.numOrientations===1){for(let c=0;c<n.numPieces;c++)a[c]=s.pieces[o.permutation[c]];let l={pieces:a,orientation:s.orientation};r[n.orbitName]=l}else{let l=new Array(n.numPieces),c=s.orientationMod?new Array(n.numPieces):void 0;for(let h=0;h<n.numPieces;h++){let u=o.permutation[h],p=n.numOrientations;if(s.orientationMod){let d=s.orientationMod[u];c[h]=d,p=d||n.numOrientations}l[h]=(s.orientation[u]+o.orientationDelta[h])%p,a[h]=s.pieces[u]}let f={pieces:a,orientation:l};c&&(f.orientationMod=c),r[n.orbitName]=f}}}return r}function jS(t){let e=Gh.get(t);if(e)return e;let i=new Array(t),r=new Array(t);for(let s=0;s<t;s++)i[s]=s,r[s]=0;let n={permutation:i,orientationDelta:r};return Vh&&(Object.freeze(i),Object.freeze(r),Object.freeze(n)),Gh.set(t,n),n}function YS(t){let e={};for(let i of t.orbits)e[i.orbitName]=jS(i.numPieces);return Vh&&Object.freeze(e),e}function KS(t,e){function i(n,s){let o=n.toString(),a=t.definition.moves[o];if(a)return qn(t,a,s);let l=t.definition.derivedMoves?.[o];if(l)return qn(t,t.algToTransformation(l).transformationData,s)}let r=i(e.quantum,e.amount)??i(e,1)??i(e.invert,-1);if(r)return r;throw new Error(`Invalid move for KPuzzle (${t.name()}): ${e}`)}function ya(t,e){e.permutation||console.log(e);let{permutation:i}=e,r=i.length;for(let n=0;n<r;n++)if(i[n]!==n)return!1;if(t>1){let{orientationDelta:n}=e;for(let s=0;s<r;s++)if(n[s]!==0)return!1}return!0}function ZS(t,e,i,r={}){for(let n=0;n<t.numPieces;n++)if(!r?.ignorePieceOrientations&&e.orientationDelta[n]!==i.orientationDelta[n]||!r?.ignorePiecePermutation&&e.permutation[n]!==i.permutation[n])return!1;return!0}function QS(t,e,i){for(let r of t.definition.orbits)if(!ZS(r,e[r.orbitName],i[r.orbitName]))return!1;return!0}function $S(t,e,i,r={}){for(let n=0;n<t.numPieces;n++)if(!r?.ignorePieceOrientations&&(e.orientation[n]!==i.orientation[n]||(e.orientationMod?.[n]??0)!==(i.orientationMod?.[n]??0))||!r?.ignorePieceIndices&&e.pieces[n]!==i.pieces[n])return!1;return!0}function JS(t,e,i){for(let r of t.definition.orbits)if(!$S(r,e[r.orbitName],i[r.orbitName]))return!1;return!0}function Hh(t,e){let i={};for(let r of t.definition.orbits){let n=e[r.orbitName];if(ya(r.numOrientations,n))i[r.orbitName]=n;else if(r.numOrientations===1){let s=new Array(r.numPieces);for(let o=0;o<r.numPieces;o++)s[n.permutation[o]]=o;i[r.orbitName]={permutation:s,orientationDelta:n.orientationDelta}}else{let s=new Array(r.numPieces),o=new Array(r.numPieces);for(let a=0;a<r.numPieces;a++){let l=n.permutation[a];s[l]=a,o[l]=(r.numOrientations-n.orientationDelta[a]+r.numOrientations)%r.numOrientations}i[r.orbitName]={permutation:s,orientationDelta:o}}}return i}function qn(t,e,i){if(i===1)return e;if(i<0)return qn(t,Hh(t,e),-i);if(i===0){let{transformationData:s}=t.identityTransformation();return s}let r=e;i!==2&&(r=qn(t,e,Math.floor(i/2)));let n=mc(t.definition,r,r);return i%2===0?n:mc(t.definition,e,n)}function gc(t,e){return e?gc(e,t%e):t}function iv(t,e){let i=1;for(let r of t.orbits){let n=e.transformationData[r.orbitName],s=new Array(r.numPieces);for(let o=0;o<r.numPieces;o++)if(!s[o]){let a=o,l=0,c=0;for(;s[a]=!0,l=l+n.orientationDelta[a],c=c+1,a=n.permutation[a],a!==o;);l!==0&&(c=c*r.numOrientations/gc(r.numOrientations,Math.abs(l))),i=i*c/gc(i,c)}}return i}var Vh,Gh,Sa,Xn,ev,tv,zi,to=C(()=>{Fr();Vh=!1,Gh=new Map;Sa=class ga{constructor(e,i){this.kpuzzle=e,this.patternData=i}toJSON(){return{experimentalPuzzleName:this.kpuzzle.name(),patternData:this.patternData}}static fromTransformation(e){let i=Bh(e.kpuzzle.definition,e.kpuzzle.definition.defaultPattern,e.transformationData);return new ga(e.kpuzzle,i)}apply(e){return this.applyTransformation(this.kpuzzle.toTransformation(e))}applyTransformation(e){if(e.isIdentityTransformation())return new ga(this.kpuzzle,this.patternData);let i=Bh(this.kpuzzle.definition,this.patternData,e.transformationData);return new ga(this.kpuzzle,i)}applyMove(e){return this.applyTransformation(this.kpuzzle.moveToTransformation(e))}applyAlg(e){return this.applyTransformation(this.kpuzzle.algToTransformation(e))}isIdentical(e){return JS(this.kpuzzle,this.patternData,e.patternData)}experimentalToTransformation(){if(!this.kpuzzle.canConvertDefaultPatternToUniqueTransformation())return null;let e={};for(let[i,r]of Object.entries(this.patternData)){let n={permutation:r.pieces,orientationDelta:r.orientation};e[i]=n}return new Xn(this.kpuzzle,e)}experimentalIsSolved(e){if(!this.kpuzzle.definition.experimentalIsPatternSolved)throw new Error("`KPattern.experimentalIsPatternSolved()` is not supported for this puzzle at the moment.");return this.kpuzzle.definition.experimentalIsPatternSolved(this,e)}},Xn=class pn{constructor(e,i){this.kpuzzle=e,this.transformationData=i}toJSON(){return{experimentalPuzzleName:this.kpuzzle.name(),transformationData:this.transformationData}}invert(){return new pn(this.kpuzzle,Hh(this.kpuzzle,this.transformationData))}#e;isIdentityTransformation(){return this.#e??=this.isIdentical(this.kpuzzle.identityTransformation())}static experimentalConstructIdentity(e){let i=new pn(e,YS(e.definition));return i.#e=!0,i}isIdentical(e){return QS(this.kpuzzle,this.transformationData,e.transformationData)}apply(e){return this.applyTransformation(this.kpuzzle.toTransformation(e))}applyTransformation(e){if(this.kpuzzle!==e.kpuzzle)throw new Error(`Tried to apply a transformation for a KPuzzle (${e.kpuzzle.name()}) to a different KPuzzle (${this.kpuzzle.name()}).`);return this.#e?new pn(this.kpuzzle,e.transformationData):e.#e?new pn(this.kpuzzle,this.transformationData):new pn(this.kpuzzle,mc(this.kpuzzle.definition,this.transformationData,e.transformationData))}applyMove(e){return this.applyTransformation(this.kpuzzle.moveToTransformation(e))}applyAlg(e){return this.applyTransformation(this.kpuzzle.algToTransformation(e))}toKPattern(){return Sa.fromTransformation(this)}repetitionOrder(){return iv(this.kpuzzle.definition,this)}selfMultiply(e){return new pn(this.kpuzzle,qn(this.kpuzzle,this.transformationData,e))}};ev=class extends Or{traverseAlg(t,e){let i=null;for(let r of t.childAlgNodes())i?i=i.applyTransformation(this.traverseAlgNode(r,e)):i=this.traverseAlgNode(r,e);return i??e.identityTransformation()}traverseGrouping(t,e){let i=this.traverseAlg(t.alg,e);return new Xn(e,qn(e,i.transformationData,t.amount))}traverseMove(t,e){return e.moveToTransformation(t)}traverseCommutator(t,e){let i=this.traverseAlg(t.A,e),r=this.traverseAlg(t.B,e);return i.applyTransformation(r).applyTransformation(i.invert()).applyTransformation(r.invert())}traverseConjugate(t,e){let i=this.traverseAlg(t.A,e),r=this.traverseAlg(t.B,e);return i.applyTransformation(r).applyTransformation(i.invert())}traversePause(t,e){return e.identityTransformation()}traverseNewline(t,e){return e.identityTransformation()}traverseLineComment(t,e){return e.identityTransformation()}},tv=jt(ev);zi=class{constructor(t,e){this.definition=t,this.experimentalPGNotation=e?.experimentalPGNotation}experimentalPGNotation;#e;lookupOrbitDefinition(t){return this.#e||=(()=>{let e={};for(let i of this.definition.orbits)e[i.orbitName]=i;return e})(),this.#e[t]}name(){return this.definition.name}identityTransformation(){return Xn.experimentalConstructIdentity(this)}#t=new Map;moveToTransformation(t){typeof t=="string"&&(t=new A(t));let e=t.toString(),i=this.#t.get(e);if(i)return new Xn(this,i);if(this.experimentalPGNotation){let n=this.experimentalPGNotation.lookupMove(t);if(!n)throw new Error(`could not map to internal move: ${t}`);return this.#t.set(e,n),new Xn(this,n)}let r=KS(this,t);return this.#t.set(e,r),new Xn(this,r)}algToTransformation(t){return typeof t=="string"&&(t=new ge(t)),tv(t,this)}toTransformation(t){return typeof t=="string"?this.algToTransformation(t):t?.is?.(ge)?this.algToTransformation(t):t?.is?.(A)?this.moveToTransformation(t):t}defaultPattern(){return new Sa(this,this.definition.defaultPattern)}#i;canConvertDefaultPatternToUniqueTransformation(){return this.#i??=(()=>{for(let t of this.definition.orbits){let e=new Array(t.numPieces).fill(!1);for(let i of this.definition.defaultPattern[t.orbitName].pieces)e[i]=!0;for(let i of e)if(!i)return!1}return!0})()}}});var ro={};dn(ro,{EXPERIMENTAL_PUZZLE_BASE_SHAPES:()=>zv,EXPERIMENTAL_PUZZLE_CUT_TYPES:()=>Bv,ExperimentalPGNotation:()=>Wv,PuzzleGeometry:()=>dd,Quat:()=>St,getPG3DNamedPuzzles:()=>Ov,getPuzzleDescriptionString:()=>Fv,getPuzzleGeometryByDesc:()=>hd,getPuzzleGeometryByName:()=>Gv,parseOptions:()=>mv,parsePuzzleDescription:()=>Dc,schreierSims:()=>fd});function rv(){return{4:{F:"#44ee00",D:"#f4f400",L:"#ff0000",R:"#2266ff"},6:{U:"#ffffff",F:"#44ee00",R:"#ff0000",D:"#f4f400",B:"#2266ff",L:"#ff8000"},8:{U:"#ffffff",F:"#44ee00",R:"#ff0000",D:"#f4f400",BB:"#2266ff",L:"#8800dd",BL:"#ff8000",BR:"#888888"},12:{U:"#ffffff",F:"#008800",R:"#ff0000",C:"#e8d0a0",A:"#3399ff",L:"#8800dd",E:"#ff66cc",BF:"#99ff00",BR:"#0000ff",BL:"#f4f400",I:"#ff8000",D:"#888888"},20:{R:"#f4f400",C:"#d41f69",F:"#008800",E:"#5c5c5c",L:"#8800dd",U:"#ffffff",A:"#007a89",G:"#ff0000",I:"#7d3b11",S:"#b9a1ff",H:"#3399ff",J:"#5ec4b6",B:"#44ee00",K:"#e8d0a0",D:"#aaaaaa",M:"#ff66cc",O:"#292929",P:"#ff8000",N:"#980000",Q:"#0000ff"}}}function pv(t,e){let i={...t,moves:{}};for(let[r,n]of Object.entries(t.moves)){let s=r,o="";["v","w"].includes(r.at(-1))&&(s=r.slice(0,-1),o=r.slice(-1));let a=e.notationToExternal(A.fromString(s));if(!a)continue;let l=a+o;if(!l)throw new Error(`Missing external move name for: ${r.toString()}`);i.moves[l.toString()]=n}return i}function mv(t){let e=0,i={};for(;e<t.length&&t[e][0]==="-";){let n=t[e++];if(n==="--rotations")i.addRotations=!0;else if(n==="--allmoves")i.allMoves=!0;else if(n==="--outerblockmoves")i.outerBlockMoves=!0;else if(n==="--vertexmoves")i.vertexMoves=!0;else if(n==="--nocorners")i.includeCornerOrbits=!1;else if(n==="--noedges")i.includeEdgeOrbits=!1;else if(n==="--noorientation")i.fixedOrientation=!0;else if(n==="--nocenters")i.includeCenterOrbits=!1;else if(n==="--omit")i.excludeOrbits=t[e].split(","),e++;else if(n==="--moves")i.moveList=t[e].split(","),e++;else if(n==="--optimize")i.optimizeOrbits=!0;else if(n==="--scramble")i.scrambleAmount=100;else if(n==="--fixcorner")i.fixedPieceType="v";else if(n==="--fixedge")i.fixedPieceType="e";else if(n==="--fixcenter")i.fixedPieceType="f";else if(n==="--orientcenters")i.orientCenters=!0;else if(n==="--puzzleorientation")i.puzzleOrientation=JSON.parse(t[e]),e++;else throw new Error(`Bad option: ${n}`)}return{puzzleDescription:Dc(t.slice(e).join(" ")),options:i}}function gn(t){if(!Ec[t]){let e=Array(t);for(let i=0;i<t;i++)e[i]=0;Ec[t]=e}return Ec[t]}function zr(t){if(!_c[t]){let e=Array(t);for(let i=0;i<t;i++)e[i]=i;_c[t]=e}return _c[t]}function yv(t){return new io(zr(t))}function Sv(t){let e=BigInt(1);for(;t>1;)e*=BigInt(t),t--;return e}function vv(t,e){if(t>e){let i=t;t=e,e=i}for(;t>0;){let i=e%t;e=t,t=i}return e}function rd(t,e){return t/vv(t,e)*e}function wa(t,e){let i=A.fromString(e),r=t.notationToExternal(i);return r===null||i===r?e:r.toString()}function Ev(t,e){let i=t.moveops.length;if(i>30)throw new Error("Canon info too big for bitmask");let r=[],n=[];for(let o=0;o<i;o++){let a=t.moveops[o];r.push(a.order());let l=0;for(let c=0;c<i;c++){if(c===o)continue;let f=t.moveops[c];a.mul(f).equal(f.mul(a))&&(l|=1<<c)}n.push(l)}let s={};s[0]=1;for(let o=0;o<100;o++){let a=0,l={},c=0;for(let f in s){let h=+f,u=s[h];a+=u,c++;for(let p=0;p<r.length;p++)if((h>>p&1)===0&&(h&n[p]&(1<<p)-1)===0){let d=h&n[p]|1<<p;l[d]===void 0&&(l[d]=0),l[d]+=(r[p]-1)*u}}e(`${o}: canonseq ${a} states ${c}`),s=l}}function wc(t){let e=new St(0,0,0,0);for(let i=0;i<t.length;i++)e=e.sum(t[i]);return e.smul(1/t.length)}function _v(t,e,i,r){let n=r[t].intersect3(r[e],r[i]);if(!n)return n;for(let s=0;s<r.length;s++)if(s!==t&&s!==e&&s!==i){let o=r[s].b*n.b+r[s].c*n.c+r[s].d*n.d;if(r[s].a>0&&o>r[s].a||r[s].a<0&&o<r[s].a)return!1}return n}function wv(){let t=Math.sqrt(.5);return[new St(t,t,0,0),new St(t,0,t,0)]}function Mv(){return[new St(.5,.5,.5,.5),new St(.5,.5,.5,-.5)]}function Rv(){let t=2*Math.PI/10,e=.5+.3*Math.sqrt(5),i=.5+.1*Math.sqrt(5),r=Math.sqrt(e*e+i*i);return e/=r,i/=r,[new St(Math.cos(t),e*Math.sin(t),i*Math.sin(t),0),new St(.5,.5,.5,.5)]}function bv(){let t=.16666666666666666+Math.sqrt(5)/6,e=2/3+Math.sqrt(5)/3,i=Math.sqrt(t*t+e*e);t/=i,e/=i;let r=2*Math.PI/6;return[new St(Math.cos(r),t*Math.sin(r),e*Math.sin(r),0),new St(Math.cos(r),-t*Math.sin(r),e*Math.sin(r),0)]}function Av(){let t=Math.sqrt(.5);return[new St(.5,.5,.5,.5),new St(t,0,0,t)]}function Cv(t){let e=[new St(1,0,0,0)];for(let i=0;i<e.length;i++)for(let r=0;r<t.length;r++){let n=t[r].mul(e[i]),s=n.smul(-1),o=!1;for(let a=0;a<e.length;a++)if(n.dist(e[a])<Ma||s.dist(e[a])<Ma){o=!0;break}o||e.push(n)}return e}function Jh(t,e){let i=[],r=[];for(let n=0;n<e.length;n++){let s=t.rotateplane(e[n]),o=!1;for(let a=0;a<i.length;a++)if(s.dist(i[a])<Ma){o=!0;break}o||(i.push(s),r.push(e[n]))}return r}function ed(t){let e=[];for(let i=1;i<t.length;i++)for(let r=i+1;r<t.length;r++){let n=_v(0,i,r,t);if(n){let s=!1;for(let o=0;o<e.length;o++)if(n.dist(e[o])<Ma){s=!0;break}s||e.push(n)}}for(;;){let i=!1;for(let r=0;r<e.length;r++){let n=(r+1)%e.length;if(t[0].dot(e[r].cross(e[n]))<0){let s=e[r];e[r]=e[n],e[n]=s,i=!0}}if(!i)break}return e}function fd(t,e){let i=t[0].p.length,r=yv(i),n=[],s=[],o=[],a=[],l=[];function c(p){for(let d=p.p.length-1;d>=0;d--){let y=p.p[d];if(y!==d){if(!n[d][y])return!1;p=p.mul(s[d][y])}}return!0}function f(p,d,y){a[p].push(d),l[p].push(y);for(let g=0;g<n[p].length;g++)n[p][g]&&h(p,n[p][g].mul(d),y+o[p][g])}function h(p,d,y){let g=d.p[p];if(!n[p][g]){n[p][g]=d,s[p][g]=d.inv(),o[p][g]=y;for(let w=0;w<a[p].length;w++)h(p,d.mul(a[p][w]),y+l[p][w]);return}let m=d.mul(s[p][g]);c(m)||f(p-1,m,y+o[p][g])}function u(){n=[],s=[],a=[],o=[],l=[];for(let y=0;y<i;y++)n.push([]),s.push([]),o.push([]),a.push([]),l.push([]),n[y][y]=r,s[y][y]=r,o[y][y]=0;let p=0,d=BigInt(1);for(let y=0;y<t.length;y++){f(i-1,t[y],1),d=BigInt(1);let g=0,m=0,w=[],M=new Tv;for(let x=0;x<i;x++){let k=0,T=0;for(let L=0;L<i;L++)n[x][L]&&(k++,T+=o[x][L],x!==L&&p++);g+=a[x].length,d*=BigInt(k),k>1&&M.multiply(k);let b=T/k;w.push(b),m+=b}e(`${y}: sz ${d} T ${g} sol ${m} none ${p} mults ${M.toString()}`)}return d}return u()}function Lv(t,e){let i=[];for(let r of t)for(let n of e)i.push(n.rotate(r));return i}function kv(){return{4:[["F","D","L","R"]],6:[["F","D","L","U","R"],["R","F","","B",""]],8:[["F","D","L","R"],["D","F","BR",""],["BR","D","","BB"],["BB","BR","U","BL"]],12:[["U","F","","","",""],["F","U","R","C","A","L"],["R","F","","","E",""],["E","R","","BF","",""],["BF","E","BR","BL","I","D"]],20:[["R","C","F","E"],["F","R","L","U"],["L","F","A",""],["E","R","G","I"],["I","E","S","H"],["S","I","J","B"],["B","S","K","D"],["K","B","M","O"],["O","K","P","N"],["P","O","Q",""]]}}function Uv(){return{4:[["FLR",[0,1,0]],["F",[0,0,1]]],6:[["U",[0,1,0]],["F",[0,0,1]]],8:[["U",[0,1,0]],["F",[0,0,1]]],12:[["U",[0,1,0]],["F",[0,0,1]]],20:[["GUQMJ",[0,1,0]],["F",[0,0,1]]]}}function va(t,e){for(let i=0;i<t.length;i++)if(t[i][0].dist(e)<xt)return i;throw Error("Element not found")}function Ov(){return Tc}function Fv(t){return Tc[t]}function Dc(t){let e=t.split(/ /).filter(Boolean);if(e.length%2===0)return null;let i=e[0];if(i!=="o"&&i!=="c"&&i!=="i"&&i!=="d"&&i!=="t")return null;let r=[];for(let n=1;n<e.length;n+=2){if(e[n]!=="f"&&e[n]!=="v"&&e[n]!=="e")return null;r.push({cutType:e[n],distance:parseFloat(e[n+1])})}return{shape:i,cuts:r}}function hd(t,e={}){let i=Dc(t);if(i===null)throw Error("Could not parse the puzzle description");let r=new dd(i,Object.assign({},{allMoves:!0},e));return r.allstickers(),r.genperms(),r}function Gv(t,e){return hd(Tc[t],e)}function Vv(t,e,i){let r=!1;i-e[1]<e[0]&&(t=[t[2],t[3],t[0],t[1]],e=[i-e[1],i-e[0]],r=!0);let n=t[0],s="";if(e[0]===0&&e[1]===i)n=`${n}v`;else if(e[0]===e[1])e[1]>0&&(s=String(e[1]+1));else if(e[0]===0)n=n.toLowerCase(),e[1]>1&&(s=String(e[1]+1));else throw Error(`We only support slice and outer block moves right now. ${e}`);return[s+n,r]}function Hv(t,e){let i=[],r=0;for(;r<t.length;){r>0&&r<t.length&&t[r]==="_"&&r++;let n="";for(let s of e)t.substr(r).startsWith(s[1])&&s[1].length>n.length&&(n=s[1]);if(n!=="")i.push(n),r+=n.length;else throw Error(`Could not split ${t} into face names.`)}return i}function _a(t,e){return[t.b/e,-t.c/e,t.d/e]}function Mc(t,e){let i=[],r=t.length;for(let n=0;n<r;n++){let s=_a(t.get(r-n-1),e);i[3*n]=s[0],i[3*n+1]=s[1],i[3*n+2]=s[2]}return i}var yc,td,nv,Wh,sv,ov,av,lv,Xh,qh,jh,id,cv,Yh,Sc,Kh,fv,vc,Zh,hv,xc,Qh,dv,uv,gv,Ec,_c,io,Rc,xv,nd,jn,od,ad,ld,$h,Tc,mn,St,Ma,Tv,bc,Dv,xt,Nv,Iv,Pv,zv,Bv,dd,Wv,no=C(()=>{Fr();yc=class{constructor(t,e){this.facenames=t,e&&(this.gripnames=e);for(let i=0;this.prefixFree&&i<t.length;i++)for(let r=0;this.prefixFree&&r<t.length;r++)i!==r&&t[i].startsWith(t[r])&&(this.prefixFree=!1)}prefixFree=!0;gripnames=[];setGripNames(t){this.gripnames=t}splitByFaceNames(t){let e=[],i=0;for(;i<t.length;){i>0&&i<t.length&&t[i]==="_"&&i++;let r=-1;for(let n=0;n<this.facenames.length;n++)t.substr(i).startsWith(this.facenames[n])&&(r<0||this.facenames[n].length>this.facenames[r].length)&&(r=n);if(r>=0)e.push(r),i+=this.facenames[r].length;else throw new Error(`Could not split ${t} into face names.`)}return e}joinByFaceIndices(t){let e="",i=[];for(let r=0;r<t.length;r++)i.push(e),i.push(this.facenames[t[r]]),this.prefixFree||(e="_");return i.join("")}spinmatch(t,e){if(t===e)return!0;try{let i=this.splitByFaceNames(t),r=this.splitByFaceNames(e);if(i.length!==r.length&&i.length<3)return!1;for(let n=0;n<i.length;n++){for(let o=0;o<n;o++)if(i[n]===i[o])return!1;let s=!1;for(let o=0;o<r.length;o++)if(i[n]===r[o]){s=!0;break}if(!s)return!1}return!0}catch{return!1}}spinmatchv(t,e){return t.endsWith("v")&&e.endsWith("v")?this.spinmatch(t.slice(0,t.length-1),e.slice(0,e.length-1)):this.spinmatch(t,e)}unswizzle(t){(t.endsWith("v")||t.endsWith("w"))&&t[0]<="Z"&&(t=t.slice(0,t.length-1));let e=t.toUpperCase();for(let i=0;i<this.gripnames.length;i++){let r=this.gripnames[i];if(this.spinmatch(e,r))return r}return t}},td=class{notationToInternal(t){return t}notationToExternal(t){return t}},nv=class{constructor(t,e){this.child=t,this.sw=e}notationToInternal(t){return t.family==="T"&&t.innerLayer===void 0&&t.outerLayer===void 0?new A(new ke("FLRv",t.innerLayer,t.outerLayer),t.amount):this.child.notationToInternal(t)}notationToExternal(t){let e=t.family;return e.length>0&&e[e.length-1]==="v"&&(e=e.substring(0,e.length-1)),this.sw.spinmatch(e,"FLUR")?new A(new ke("T",t.innerLayer,t.outerLayer),t.amount):this.child.notationToExternal(t)}},Wh=class{constructor(t,e){this.internalNames=t,this.externalNames=e}convertString(t,e,i){let r="";(t.endsWith("v")||t.endsWith("v"))&&t<="_"&&(r=t.slice(t.length-1),t=t.slice(0,t.length-1));let n=t.toUpperCase(),s=!1;return t!==n&&(s=!0,t=n),t=i.joinByFaceIndices(e.splitByFaceNames(t)),s&&(t=t.toLowerCase()),t+r}convert(t,e,i){let r=t.family,n=this.convertString(r,e,i);return r===n?t:new A(new ke(n,t.innerLayer,t.outerLayer),t.amount)}notationToInternal(t){return this.convert(t,this.externalNames,this.internalNames)}notationToExternal(t){return this.convert(t,this.internalNames,this.externalNames)}},sv=class{constructor(t){this.child=t}notationToInternal(t){if(t.innerLayer===void 0&&t.outerLayer===void 0){if(Math.abs(t.amount)===1){if(t.family==="R++")return new A(new ke("L",3,2),-2*t.amount);if(t.family==="R--")return new A(new ke("L",3,2),2*t.amount);if(t.family==="D++")return new A(new ke("U",3,2),-2*t.amount);if(t.family==="D--")return new A(new ke("U",3,2),2*t.amount);if(t.family==="R_PLUSPLUS_")return new A(new ke("L",3,2),-2*t.amount);if(t.family==="D_PLUSPLUS_")return new A(new ke("U",3,2),-2*t.amount)}if(t.family==="y")return new A("Uv",t.amount);if(t.family==="x"&&Math.abs(t.amount)===2)return new A("ERv",t.amount/2)}return this.child.notationToInternal(t)}notationToExternal(t){return t.family==="ERv"&&Math.abs(t.amount)===1?new A(new ke("x",t.innerLayer,t.outerLayer),t.amount*2):t.family==="ILv"&&Math.abs(t.amount)===1?new A(new ke("x",t.innerLayer,t.outerLayer),-t.amount*2):t.family==="Uv"?new A(new ke("y",t.innerLayer,t.outerLayer),t.amount):t.family==="Dv"?new A("y",-t.amount):this.child.notationToExternal(t)}},ov=class{constructor(t){this.slices=t}notationToInternal(t){let e=t.family;return t.innerLayer||t.outerLayer||(e==="x"?t=new A("Rv",t.amount):e==="y"?t=new A("Uv",t.amount):e==="z"&&(t=new A("Fv",t.amount)),(this.slices&1)===1&&(e==="E"?t=new A(new ke("D",(this.slices+1)/2),t.amount):e==="M"?t=new A(new ke("L",(this.slices+1)/2),t.amount):e==="S"&&(t=new A(new ke("F",(this.slices+1)/2),t.amount))),this.slices>2&&(e==="e"?t=new A(new ke("D",this.slices-1,2),t.amount):e==="m"?t=new A(new ke("L",this.slices-1,2),t.amount):e==="s"&&(t=new A(new ke("F",this.slices-1,2),t.amount)))),t}notationToExternal(t){let e=t.family;if(!(t.innerLayer||t.outerLayer)){if(e==="Rv")return new A("x",t.amount);if(e==="Uv")return new A("y",t.amount);if(e==="Fv")return new A("z",t.amount);if(e==="Lv")return new A("x",-t.amount);if(e==="Dv")return new A("y",-t.amount);if(e==="Bv")return new A("z",-t.amount)}return t}},av={U:"frl",L:"fld",R:"fdr",B:"dlr",u:"FRL",l:"FLD",r:"FDR",b:"DLR",Uv:"FRLv",Lv:"FLDv",Rv:"FDRv",Bv:"DLRv",D:"D",F:"F",BL:"L",BR:"R"},lv={U:"FRL",L:"FLD",R:"FDR",B:"DLR",u:"frl",l:"fld",r:"fdr",b:"dlr",Uv:"FRLv",Lv:"FLDv",Rv:"FDRv",Bv:"DLRv",D:"D",F:"F",BL:"L",BR:"R",d:"d",f:"f",bl:"l",br:"r"},Xh={U:"FRL",L:"FLD",R:"FDR",B:"DLR"},qh=new ke("y"),jh=new ke("Dv"),id=class{constructor(t){this.child=t}wcaHack=!1;map=av;notationToInternal(t){if(this.wcaHack&&t.innerLayer===2&&t.outerLayer===null){let i=Xh[t.family];if(i)return new A(new ke(i,t.innerLayer,t.outerLayer),t.amount)}let e=this.map[t.family];return e?new A(new ke(e,t.innerLayer,t.outerLayer),t.amount):qh.isIdentical(t.quantum)?new A(jh,-t.amount):null}notationToExternal(t){if(this.wcaHack&&t.innerLayer===2&&t.outerLayer===null){for(let[e,i]of Object.entries(Xh))if(this.child.spinmatch(t.family,i))return new A(new ke(e,t.innerLayer,t.outerLayer),t.amount)}for(let[e,i]of Object.entries(this.map))if(this.child.spinmatch(t.family,i))return new A(new ke(e,t.innerLayer,t.outerLayer),t.amount);return jh.isIdentical(t.quantum)?new A(qh,-t.amount):null}},cv=class extends id{wcaHack=!0;constructor(t){super(t),this.map=lv}},Yh={U:"UBL",UL:"ULF",F:"UFR",UR:"URB",B:"DBL",D:"DFR",L:"DLF",R:"DRB",Uv:"UBLv",ULv:"ULFv",Fv:"UFRv",URv:"URBv",Bv:"DBLv",Dv:"DFRv",Lv:"DLFv",Rv:"DRBv"},Sc=new ke("x"),Kh=new ke("Rv"),fv=new ke("Lv"),vc=new ke("y"),Zh=new ke("Uv"),hv=new ke("Dv"),xc=new ke("z"),Qh=new ke("Fv"),dv=new ke("Bv"),uv=class{constructor(t){this.child=t}notationToInternal(t){if(t.innerLayer||t.outerLayer)return null;let e=Yh[t.family];return e?new A(new ke(e,t.outerLayer,t.innerLayer),t.amount):Sc.isIdentical(t.quantum)?new A(Kh,t.amount):vc.isIdentical(t.quantum)?new A(Zh,t.amount):xc.isIdentical(t.quantum)?new A(Qh,t.amount):null}notationToExternal(t){for(let[e,i]of Object.entries(Yh))if(this.child.spinmatchv(t.family,i))return new A(new ke(e,t.innerLayer,t.outerLayer),t.amount);return Kh.isIdentical(t.quantum)?new A(Sc,t.amount):fv.isIdentical(t.quantum)?new A(Sc,-t.amount):Zh.isIdentical(t.quantum)?new A(vc,t.amount):hv.isIdentical(t.quantum)?new A(vc,-t.amount):Qh.isIdentical(t.quantum)?new A(xc,t.amount):dv.isIdentical(t.quantum)?new A(xc,-t.amount):null}};gv=class{verbosity=0;allMoves=!1;outerBlockMoves;vertexMoves=!1;addRotations=!1;moveList=null;fixedOrientation=!1;fixedPieceType=null;orientCenters=!1;includeCornerOrbits=!0;includeCenterOrbits=!0;includeEdgeOrbits=!0;excludeOrbits=[];optimizeOrbits=!1;grayCorners=!1;grayCenters=!1;grayEdges=!1;puzzleOrientation=null;puzzleOrientations=null;scrambleAmount=0;constructor(t={}){Object.assign(this,t)}},Ec=[],_c=[];io=class xa{n;p;constructor(e){this.n=e.length,this.p=e}toString(){return`Perm[${this.p.join(" ")}]`}mul(e){let i=Array(this.n);for(let r=0;r<this.n;r++)i[r]=e.p[this.p[r]];return new xa(i)}rmul(e){let i=Array(this.n);for(let r=0;r<this.n;r++)i[r]=this.p[e.p[r]];return new xa(i)}inv(){let e=Array(this.n);for(let i=0;i<this.n;i++)e[this.p[i]]=i;return new xa(e)}compareTo(e){for(let i=0;i<this.n;i++)if(this.p[i]!==e.p[i])return this.p[i]-e.p[i];return 0}toGap(){let e=new Array,i=new Array(this.n);for(let r=0;r<this.p.length;r++){if(i[r]||this.p[r]===r)continue;let n=new Array;for(let s=this.p[r];!i[s];s=this.p[s])n.push(1+s),i[s]=!0;e.push(`(${n.reverse().join(",")})`)}return e.join("")}toMathematica(){let e=new Array,i=new Array(this.n);for(let r=0;r<this.p.length;r++){if(i[r]||this.p[r]===r)continue;let n=new Array;for(let s=this.p[r];!i[s];s=this.p[s])n.push(1+s),i[s]=!0;e.push(`{${n.reverse().join(",")}}`)}return`Cycles[{${e.join(",")}}]`}order(){let e=1,i=new Array(this.n);for(let r=0;r<this.p.length;r++){if(i[r]||this.p[r]===r)continue;let n=0;for(let s=r;!i[s];s=this.p[s])n++,i[s]=!0;e=rd(e,n)}return e}},Rc=class{constructor(t,e){this.size=t,this.mod=e}reassemblySize(){return Sv(this.size)*BigInt(this.mod)**BigInt(this.size)}},xv=0;nd=class sd{constructor(e,i,r,n,s,o,a){this.orbitnames=e,this.orbitdefs=i,this.solved=r,this.movenames=n,this.moveops=s,this.isRotation=o,this.forcenames=a}toKTransformationData(e){let i={};for(let r=0;r<this.orbitnames.length;r++)i[this.orbitnames[r]]=e.orbits[r].toKTransformationOrbitData();return i}toKPatternData(e){let i={};for(let r=0;r<this.orbitnames.length;r++)i[this.orbitnames[r]]=e.orbits[r].toKPatternOrbitData();return i}static transformToKTransformationData(e,i){let r={};for(let n=0;n<e.length;n++)r[e[n]]=i.orbits[n].toKTransformationOrbitData();return r}describeSet(e,i,r){let n=this.orbitdefs[e].size,s=new Array(n);for(let o=0;o<n;o++)s[o]=[];for(let o=0;o<this.movenames.length;o++){if(this.isRotation[o])continue;let a=this.movenames[o];this.forcenames[o]||(a=wa(r,a),a[a.length-1]==="'"&&(a=a.substring(0,a.length-1)));let l=this.moveops[o].orbits[e];for(let c=0;c<n;c++)(l.perm[c]!==c||l.ori[c]!==0)&&s[c].push(a)}for(let o=0;o<n;o++)i.push(`# ${o+1} ${s[o].join(" ")}`)}toKsolve(e,i=new td){let r=[];r.push(`Name ${e}`),r.push("");for(let n=0;n<this.orbitnames.length;n++)r.push(`Set ${this.orbitnames[n]} ${this.orbitdefs[n].size} ${this.orbitdefs[n].mod}`),this.describeSet(n,r,i);r.push(""),r.push("Solved");for(let n=0;n<this.orbitnames.length;n++)this.solved.orbits[n].appendDefinition(r,this.orbitnames[n],!1,!1);r.push("End");for(let n=0;n<this.movenames.length;n++){r.push("");let s=this.movenames[n];this.forcenames[n]||(s=wa(i,this.movenames[n]));let o=!1;s[s.length-1]==="'"&&(o=!0,s=s.substring(0,s.length-1)),r.push(`Move ${s}`);for(let a=0;a<this.orbitnames.length;a++)o?this.moveops[n].orbits[a].inv().appendDefinition(r,this.orbitnames[a],!0):this.moveops[n].orbits[a].appendDefinition(r,this.orbitnames[a],!0);r.push("End")}return r}toKPuzzleDefinition(e){let i=[],r={};for(let s=0;s<this.orbitnames.length;s++){i.push({orbitName:this.orbitnames[s],numPieces:this.orbitdefs[s].size,numOrientations:this.orbitdefs[s].mod});let o=this.solved.orbits[s].toKTransformationOrbitData();r[this.orbitnames[s]]={pieces:o.permutation,orientation:o.orientationDelta}}let n={};if(e)for(let s=0;s<this.movenames.length;s++)n[this.movenames[s]]=this.toKTransformationData(this.moveops[s]);return{name:`PG3D #${++xv}`,orbits:i,defaultPattern:r,moves:n}}optimize(){let e=[],i=[],r=[],n=[];for(let s=0;s<this.moveops.length;s++)n.push([]);for(let s=0;s<this.orbitdefs.length;s++){let o=this.orbitdefs[s].mod,a=this.orbitdefs[s].size,l=new $h(a),c=new Array(this.orbitdefs[s].size);for(let p=0;p<a;p++)c[p]=!1;for(let p=0;p<this.moveops.length;p++)for(let d=0;d<a;d++)(this.moveops[p].orbits[s].perm[d]!==d||this.moveops[p].orbits[s].ori[d]!==0)&&(this.isRotation[p]||(c[d]=!0),l.union(d,this.moveops[p].orbits[s].perm[d]));let f=!0;if(o>1){f=!1;let p=new $h(this.orbitdefs[s].size*o);for(let d=0;d<this.moveops.length;d++)for(let y=0;y<a;y++)if(this.moveops[d].orbits[s].perm[y]!==y||this.moveops[d].orbits[s].ori[y]!==0)for(let g=0;g<o;g++)p.union(y*o+g,this.moveops[d].orbits[s].perm[y]*o+(g+this.moveops[d].orbits[s].ori[y])%o);for(let d=0;!f&&d<a;d++)for(let y=1;y<o;y++)p.find(d*o)===p.find(d*o+y)&&(f=!0);for(let d=0;!f&&d<a;d++)for(let y=0;y<d;y++)this.solved.orbits[s].perm[d]===this.solved.orbits[s].perm[y]&&(f=!0)}let h=-1,u=!1;for(let p=0;p<this.orbitdefs[s].size;p++)if(c[p]){let d=l.find(p);h<0?h=d:h!==d&&(u=!0)}for(let p=0;p<this.orbitdefs[s].size;p++){if(!c[p]||l.find(p)!==p)continue;let y=[],g=[],m=0;for(let w=0;w<this.orbitdefs[s].size;w++)l.find(w)===p&&(y[m]=w,g[w]=m,m++);if(u?e.push(`${this.orbitnames[s]}_p${p}`):e.push(this.orbitnames[s]),f){i.push(new Rc(m,this.orbitdefs[s].mod)),r.push(this.solved.orbits[s].remapVS(y,m));for(let w=0;w<this.moveops.length;w++)n[w].push(this.moveops[w].orbits[s].remap(y,g,m))}else{i.push(new Rc(m,1)),r.push(this.solved.orbits[s].remapVS(y,m).killOri());for(let w=0;w<this.moveops.length;w++)n[w].push(this.moveops[w].orbits[s].remap(y,g,m).killOri())}}}return new sd(e,i,new ld(r),this.movenames,n.map(s=>new ad(s)),this.isRotation,this.forcenames)}scramble(e){this.solved=this.solved.mul(this.getScrambleTransformation(e))}getScrambleTransformation(e){e<100&&(e=100);let i=[];for(let n=0;n<this.moveops.length;n++)i[n]=this.moveops[n];for(let n=0;n<i.length;n++){let s=Math.floor(Math.random()*i.length),o=i[n];i[n]=i[s],i[s]=o}e<i.length&&(e=i.length);for(let n=0;n<e;n++){let s=Math.floor(Math.random()*i.length),o=Math.floor(Math.random()*i.length),a=Math.floor(Math.random()*this.moveops.length);i[s]=i[s].mul(i[o]).mul(this.moveops[a]),Math.random()<.1&&(i[s]=i[s].mul(this.moveops[a]))}let r=i[0];for(let n=1;n<i.length;n++)r=r.mul(i[n]);return r}reassemblySize(){let e=BigInt(1);for(let i=0;i<this.orbitdefs.length;i++)e*=this.orbitdefs[i].reassemblySize();return e}},jn=class tr{constructor(e,i,r){this.perm=e,this.ori=i,this.orimod=r}static ktransformationCache=[];static e(e,i){return new tr(zr(e),gn(e),i)}mul(e){let i=this.perm.length,r=new Array(i);if(this.orimod===1){for(let n=0;n<i;n++)r[n]=this.perm[e.perm[n]];return new tr(r,this.ori,this.orimod)}else{let n=new Array(i);for(let s=0;s<i;s++)r[s]=this.perm[e.perm[s]],n[s]=(this.ori[e.perm[s]]+e.ori[s])%this.orimod;return new tr(r,n,this.orimod)}}inv(){let e=this.perm.length,i=new Array(e),r=new Array(e);for(let n=0;n<e;n++)i[this.perm[n]]=n,r[this.perm[n]]=(this.orimod-this.ori[n])%this.orimod;return new tr(i,r,this.orimod)}equal(e){let i=this.perm.length;for(let r=0;r<i;r++)if(this.perm[r]!==e.perm[r]||this.ori[r]!==e.ori[r])return!1;return!0}killOri(){let e=this.perm.length;for(let i=0;i<e;i++)this.ori[i]=0;return this.orimod=1,this}toPerm(){let e=this.orimod;if(e===1)return new io(this.perm);let i=this.perm.length,r=new Array(i*e);for(let n=0;n<i;n++)for(let s=0;s<e;s++)r[n*e+s]=e*this.perm[n]+(this.ori[n]+s)%e;return new io(r)}identicalPieces(){let e=[],i=this.perm.length,r=[];for(let n=0;n<i;n++){let s=this.perm[n];if(e[s]===void 0){let o=[n];e[s]=!0;for(let a=n+1;a<i;a++)this.perm[a]===s&&o.push(a);r.push(o)}}return r}order(){return this.toPerm().order()}isIdentity(){let e=this.perm.length;if(this.perm===zr(e)&&this.ori===gn(e))return!0;for(let i=0;i<e;i++)if(this.perm[i]!==i||this.ori[i]!==0)return!1;return!0}zeroOris(){let e=this.perm.length;if(this.ori===gn(e))return!0;for(let i=0;i<e;i++)if(this.ori[i]!==0)return!1;return!0}remap(e,i,r){let n=new Array(r),s=new Array(r);for(let o=0;o<r;o++)n[o]=i[this.perm[e[o]]],s[o]=this.ori[e[o]];return new tr(n,s,this.orimod)}remapVS(e,i){let r=new Array(i),n=new Array(i),s=0,o=[];for(let a=0;a<i;a++){let l=this.perm[e[a]];o[l]===void 0&&(o[l]=s++),r[a]=o[l],n[a]=this.ori[e[a]]}return new tr(r,n,this.orimod)}appendDefinition(e,i,r,n=!0){if(!(n&&this.isIdentity())&&(e.push(i),e.push(this.perm.map(s=>s+1).join(" ")),!this.zeroOris()))if(r){let s=new Array(this.ori.length);for(let o=0;o<s.length;o++)s[this.perm[o]]=this.ori[o];e.push(s.join(" "))}else e.push(this.ori.join(" "))}toKTransformationOrbitData(){let e=this.perm.length;return this.isIdentity()?(tr.ktransformationCache[e]||(tr.ktransformationCache[e]={permutation:zr(e),orientationDelta:gn(e)}),tr.ktransformationCache[e]):{permutation:this.perm,orientationDelta:this.ori}}toKPatternOrbitData(){let e=this.perm.length;return{pieces:this.perm,orientation:this.ori,orientationMod:gn(e)}}},od=class{constructor(t){this.orbits=t}internalMul(t){let e=[];for(let i=0;i<this.orbits.length;i++)e.push(this.orbits[i].mul(t.orbits[i]));return e}internalInv(){let t=[];for(let e of this.orbits)t.push(e.inv());return t}equal(t){for(let e=0;e<this.orbits.length;e++)if(!this.orbits[e].equal(t.orbits[e]))return!1;return!0}killOri(){for(let t of this.orbits)t.killOri();return this}toPerm(){let t=new Array,e=0;for(let r of this.orbits){let n=r.toPerm();t.push(n),e+=n.n}let i=new Array(e);e=0;for(let r of t){for(let n=0;n<r.n;n++)i[e+n]=e+r.p[n];e+=r.n}return new io(i)}identicalPieces(){let t=[],e=0;for(let i of this.orbits){let r=i.orimod,n=i.identicalPieces();for(let s=0;s<n.length;s++)t.push(n[s].map(o=>o*r+e));e+=r*i.perm.length}return t}order(){let t=1;for(let e of this.orbits)t=rd(t,e.order());return t}},ad=class Ea extends od{mul(e){return new Ea(this.internalMul(e))}mulScalar(e){if(e===0)return this.e();let i=this;for(e<0&&(i=i.inv(),e=-e);(e&1)===0;)i=i.mul(i),e>>=1;if(e===1)return i;let r=i,n=this.e();for(;e>0;)e&1&&(n=n.mul(r)),e>1&&(r=r.mul(r)),e>>=1;return n}inv(){return new Ea(this.internalInv())}e(){return new Ea(this.orbits.map(e=>jn.e(e.perm.length,e.orimod)))}},ld=class cd extends od{mul(e){return new cd(this.internalMul(e))}},$h=class{constructor(t){this.n=t,this.heads=new Array(t);for(let e=0;e<t;e++)this.heads[e]=e}heads;find(t){let e=this.heads[t];return this.heads[e]===e||(e=this.find(this.heads[e]),this.heads[t]=e),e}union(t,e){let i=this.find(t),r=this.find(e);i<r?this.heads[r]=i:i>r&&(this.heads[i]=r)}};Tc={"2x2x2":"c f 0","3x3x3":"c f 0.333333333333333","4x4x4":"c f 0.5 f 0","5x5x5":"c f 0.6 f 0.2","6x6x6":"c f 0.666666666666667 f 0.333333333333333 f 0","7x7x7":"c f 0.714285714285714 f 0.428571428571429 f 0.142857142857143","8x8x8":"c f 0.75 f 0.5 f 0.25 f 0","9x9x9":"c f 0.777777777777778 f 0.555555555555556 f 0.333333333333333 f 0.111111111111111","10x10x10":"c f 0.8 f 0.6 f 0.4 f 0.2 f 0","11x11x11":"c f 0.818181818181818 f 0.636363636363636 f 0.454545454545455 f 0.272727272727273 f 0.0909090909090909","12x12x12":"c f 0.833333333333333 f 0.666666666666667 f 0.5 f 0.333333333333333 f 0.166666666666667 f 0","13x13x13":"c f 0.846153846153846 f 0.692307692307692 f 0.538461538461538 f 0.384615384615385 f 0.230769230769231 f 0.0769230769230769","20x20x20":"c f 0 f .1 f .2 f .3 f .4 f .5 f .6 f .7 f .8 f .9","30x30x30":"c f 0 f .066667 f .133333 f .2 f .266667 f .333333 f .4 f .466667 f .533333 f .6 f .666667 f .733333 f .8 f .866667 f .933333","40x40x40":"c f 0 f .05 f .1 f .15 f .2 f .25 f .3 f .35 f .4 f .45 f .5 f .55 f .6 f .65 f .7 f .75 f .8 f .85 f .9 f .95",skewb:"c v 0","master skewb":"c v 0.275","professor skewb":"c v 0 v 0.38","compy cube":"c v 0.915641442663986",helicopter:"c e 0.707106781186547","curvy copter":"c e 0.83",dino:"c v 0.577350269189626","little chop":"c e 0",pyramorphix:"t e 0",mastermorphix:"t e 0.346184634065199",pyraminx:"t v 0.333333333333333 v 1.66666666666667",tetraminx:"t v 0.333333333333333","master pyraminx":"t v 0 v 1 v 2","master tetraminx":"t v 0 v 1","professor pyraminx":"t v -0.2 v 0.6 v 1.4 v 2.2","professor tetraminx":"t v -0.2 v 0.6 v 1.4","royal pyraminx":"t v -0.333333333333333 v 0.333333333333333 v 1 v 1.66666666666667 v 2.33333333333333","royal tetraminx":"t v -0.333333333333333 v 0.333333333333333 v 1 v 1.66666666666667","emperor pyraminx":"t v -0.428571428571429 v 0.142857142857143 v 0.714285714285714 v 1.28571428571429 v 1.85714285714286 v 2.42857142857143","emperor tetraminx":"t v -0.428571428571429 v 0.142857142857143 v 0.714285714285714 v 1.28571428571429 v 1.85714285714286","Jing pyraminx":"t f 0","master pyramorphix":"t e 0.866025403784437",megaminx:"d f 0.7",gigaminx:"d f 0.64 f 0.82",teraminx:"d f 0.64 f 0.76 f 0.88",petaminx:"d f 0.64 f 0.73 f 0.82 f 0.91",examinx:"d f 0.64 f 0.712 f 0.784 f 0.856 f 0.928",zetaminx:"d f 0.64 f 0.7 f 0.76 f 0.82 f 0.88 f 0.94",yottaminx:"d f 0.64 f 0.6914 f 0.7429 f 0.7943 f 0.8457 f 0.8971 f 0.9486",pentultimate:"d f 0","master pentultimate":"d f 0.1","elite pentultimate":"d f 0 f 0.145905",starminx:"d v 0.937962370425399","starminx 2":"d f 0.23606797749979","pyraminx crystal":"d f 0.447213595499989",chopasaurus:"d v 0","big chop":"d e 0","skewb diamond":"o f 0",FTO:"o f 0.333333333333333","master FTO":"o f 0.5 f 0","Christopher's jewel":"o v 0.577350269189626",octastar:"o e 0","Trajber's octahedron":"o v 0.433012701892219","radio chop":"i f 0",icosamate:"i v 0","Regular Astrominx":"i v 0.18759247376021","Regular Astrominx + Big Chop":"i v 0.18759247376021 e 0",Redicosahedron:"i v 0.794654472291766","Redicosahedron with centers":"i v 0.84",Icosaminx:"i v 0.73","Eitan's star":"i f 0.61803398874989","2x2x2 + dino":"c f 0 v 0.577350269189626","2x2x2 + little chop":"c f 0 e 0","dino + little chop":"c v 0.577350269189626 e 0","2x2x2 + dino + little chop":"c f 0 v 0.577350269189626 e 0","megaminx + chopasaurus":"d f 0.61803398875 v 0","starminx combo":"d f 0.23606797749979 v 0.937962370425399"},mn=1e-9;St=class Gt{constructor(e,i,r,n){this.a=e,this.b=i,this.c=r,this.d=n}mul(e){return new Gt(this.a*e.a-this.b*e.b-this.c*e.c-this.d*e.d,this.a*e.b+this.b*e.a+this.c*e.d-this.d*e.c,this.a*e.c-this.b*e.d+this.c*e.a+this.d*e.b,this.a*e.d+this.b*e.c-this.c*e.b+this.d*e.a)}toString(){return`Q[${this.a},${this.b},${this.c},${this.d}]`}dist(e){return Math.hypot(this.a-e.a,this.b-e.b,this.c-e.c,this.d-e.d)}len(){return Math.hypot(this.a,this.b,this.c,this.d)}cross(e){return new Gt(0,this.c*e.d-this.d*e.c,this.d*e.b-this.b*e.d,this.b*e.c-this.c*e.b)}dot(e){return this.b*e.b+this.c*e.c+this.d*e.d}normalize(){let e=Math.sqrt(this.dot(this));return new Gt(this.a/e,this.b/e,this.c/e,this.d/e)}makenormal(){return new Gt(0,this.b,this.c,this.d).normalize()}normalizeplane(){let e=Math.hypot(this.b,this.c,this.d);return new Gt(this.a/e,this.b/e,this.c/e,this.d/e)}smul(e){return new Gt(this.a*e,this.b*e,this.c*e,this.d*e)}sum(e){return new Gt(this.a+e.a,this.b+e.b,this.c+e.c,this.d+e.d)}sub(e){return new Gt(this.a-e.a,this.b-e.b,this.c-e.c,this.d-e.d)}angle(){return 2*Math.acos(this.a)}invrot(){return new Gt(this.a,-this.b,-this.c,-this.d)}det3x3(e,i,r,n,s,o,a,l,c){return e*(s*c-o*l)+i*(o*a-n*c)+r*(n*l-s*a)}rotateplane(e){let i=e.mul(new Gt(0,this.b,this.c,this.d)).mul(e.invrot());return i.a=this.a,i}orthogonal(){let e=Math.abs(this.b),i=Math.abs(this.c),r=Math.abs(this.d);return e<i&&e<r?this.cross(new Gt(0,1,0,0)).normalize():i<e&&i<r?this.cross(new Gt(0,0,1,0)).normalize():this.cross(new Gt(0,0,0,1)).normalize()}pointrotation(e){let i=this.normalize();if(e=e.normalize(),i.sub(e).len()<mn)return new Gt(1,0,0,0);let r=i.sum(e);r.len()<mn?r=r.orthogonal():r=r.normalize();let n=i.cross(r);return n.a=i.dot(r),n}unproject(e){return this.sum(e.smul(-this.dot(e)/(this.len()*e.len())))}rotatepoint(e){return e.mul(this).mul(e.invrot())}rotateface(e){return e.map(i=>i.rotatepoint(this))}intersect3(e,i){let r=this.det3x3(this.b,this.c,this.d,e.b,e.c,e.d,i.b,i.c,i.d);return Math.abs(r)<mn?!1:new Gt(0,this.det3x3(this.a,this.c,this.d,e.a,e.c,e.d,i.a,i.c,i.d)/r,this.det3x3(this.b,this.a,this.d,e.b,e.a,e.d,i.b,i.a,i.d)/r,this.det3x3(this.b,this.c,this.a,e.b,e.c,e.a,i.b,i.c,i.a)/r)}side(e){return e>mn?1:e<-mn?-1:0}cutface(e){let i=this.a,r=0,n=null;for(let s=0;s<e.length;s++)r|=1<<this.side(e[s].dot(this)-i)+1;if((r&5)===5){n=[];let s=e.map(o=>this.side(o.dot(this)-i));for(let o=-1;o<=1;o+=2){let a=[];for(let l=0;l<e.length;l++){(s[l]===o||s[l]===0)&&a.push(e[l]);let c=(l+1)%e.length;if(s[l]+s[c]===0&&s[l]!==0){let f=e[l].dot(this)-i,h=e[c].dot(this)-i,u=f/(f-h),p=e[l].smul(1-u).sum(e[c].smul(u));a.push(p)}}n.push(a)}}return n}cutfaces(e){let i=[];for(let r=0;r<e.length;r++){let n=e[r],s=this.cutface(n);s?(i.push(s[0]),i.push(s[1])):i.push(n)}return i}faceside(e){let i=this.a;for(let r=0;r<e.length;r++){let n=this.side(e[r].dot(this)-i);if(n!==0)return n}throw new Error("Could not determine side of plane in faceside")}sameplane(e){let i=this.normalize(),r=e.normalize();return i.dist(r)<mn||i.dist(r.smul(-1))<mn}makecut(e){return new Gt(e,this.b,this.c,this.d)}},Ma=1e-9;Tv=class{mult;constructor(){this.mult=[]}multiply(t){for(let e=2;e*e<=t;e++)for(;t%e===0;)this.mult[e]!==void 0?this.mult[e]++:this.mult[e]=1,t/=e;t>1&&(this.mult[t]!==void 0?this.mult[t]++:this.mult[t]=1)}toString(){let t="";for(let e=0;e<this.mult.length;e++)this.mult[e]!==void 0&&(t!==""&&(t+="*"),t+=e,this.mult[e]>1&&(t+=`^${this.mult[e]}`));return t}};bc=class Ac{coords;length;constructor(e){this.coords=new Array(e.length*3);for(let i=0;i<e.length;i++)this.coords[3*i]=e[i].b,this.coords[3*i+1]=e[i].c,this.coords[3*i+2]=e[i].d;this.length=e.length}get(e){return new St(0,this.coords[3*e],this.coords[3*e+1],this.coords[3*e+2])}centermass(){let e=0,i=0,r=0;for(let n=0;n<this.length;n++)e+=this.coords[3*n],i+=this.coords[3*n+1],r+=this.coords[3*n+2];return new St(0,e/this.length,i/this.length,r/this.length)}rotate(e){let i=[];for(let r=0;r<this.length;r++)i.push(this.get(r).rotatepoint(e));return new Ac(i)}rotateforward(){let e=[];for(let i=1;i<this.length;i++)e.push(this.get(i));return e.push(this.get(0)),new Ac(e)}},Dv=class Cc{constructor(e,i,r){this.face=e,this.left=i,this.right=r}split(e){let i=e.cutface(this.face);return i!==null&&(this.left===void 0?(this.left=new Cc(i[0]),this.right=new Cc(i[1])):(this.left=this.left?.split(e),this.right=this.right?.split(e))),this}collect(e,i){return this.left===void 0?e.push(new bc(this.face)):i?(this.left?.collect(e,!1),this.right?.collect(e,!0)):(this.right?.collect(e,!1),this.left?.collect(e,!0)),e}};xt=1e-9,Nv="PuzzleGeometry 0.1 Copyright 2018 Tomas Rokicki.",Iv=!1;Pv={4:{v:["DFR","DLF","DRL","FLR"],e:["FR","LF","DF","DL","RD","RL"],c:["DF","FD","RL","LR"]},6:{v:["URF","UBR","ULB","UFL","DFR","DRB","DBL","DLF"],e:["UF","UR","UB","UL","DF","DR","DB","DL","FR","FL","BR","BL"],c:["UB","LU","FU","RU","BU","DF"]},8:{v:["UBBBRR","URFL","ULBLBB","DBRBBBL","DBLLF","DFRBR"],e:["UL","UBB","UR","BRD","BLD","FD","BRR","FR","FL","BLL","BLBB","BRBB"],c:["BBU","LU","RU","BRD","FD","BLD","DF","UBB"]},12:{v:["URF","UFL","ULBL","UBLBR","UBRR","DEBF","DBFI","DIA","DAC","DCE","LAI","ALF","FCA","CFR","REC","ERBR","BRBFE","BFBRBL","BLIBF","IBLL"],e:["UF","UR","UBR","UBL","UL","ER","EBR","EBF","ED","EC","IBF","IBL","IL","IA","ID","AC","CF","FA","BFBR","BRBL","BLBF","CD","AD","AL","FL","FR","CR","BFD","BRR","BLL"],c:["UF","FU","DBF","BFD","AD","CD","BRU","BLU","LA","RA","EBR","IBL"]},20:{v:["FLPQU","FUGER","FRCAL","HCREI","ISBDH","JSIEG","BSJMK","MQPOK","ONDBK","NOPLA","UQMJG","DNACH"],e:["FU","FL","FR","EG","ER","EI","SJ","SI","SB","KM","KB","KO","PQ","PO","PL","UG","JG","MQ","UQ","HC","HD","ND","NA","JM","CA","AL","CR","HI","DB","NO"],c:["FU","UF","GE","EG","JS","SJ","MK","KM","QP","PQ","LA","AL","RC","CR","IH","HI","BD","DB","ON","NO"]}};zv=["c","t","o","d","i"],Bv=["f","v","e"];dd=class{constructor(t,e){this.puzzleDescription=t;let i="genperms";this.options=new gv(e),this.options.verbosity>0&&console.log(this.header("# ")),this.create(t)}rotations;baseplanerot;baseplanes;facenames;faceplanes;edgenames;vertexnames;geonormals;moveplanes;moveplanes2;moveplanesets;moveplanenormals;movesetorders;movesetgeos;basefaces;faces;facecentermass;baseFaceCount;stickersperface;shortedge;markedface;cubies;vertexdistance;edgedistance;facetocubie;facetoord;moverotations;facelisthash;cubiesetnames;cubieords;cubiesetnums;cubieordnums;orbitoris;cubievaluemap;cubiesetcubies;cmovesbyslice=[];parsedmovelist;duplicatedFaces=[];duplicatedCubies=[];fixedCubie=-1;net=[];colors=[];swizzler;notationMapper=new td;addNotationMapper="";setReidOrSpeffzOrder=!1;options;create(t){let{shape:e,cuts:i}=t;this.moveplanes=[],this.moveplanes2=[],this.faces=[],this.cubies=[];let r=null;switch(e){case"c":{r=wv();break}case"o":{r=Av();break}case"i":{r=bv();break}case"t":{r=Mv();break}case"d":{r=Rv();break}default:throw Error(`Bad shape argument: ${e}`)}this.rotations=Cv(r),this.options.verbosity&&console.log(`# Rotations: ${this.rotations.length}`);let n=r[0];this.baseplanerot=Jh(n,this.rotations);let s=this.baseplanerot.map(N=>n.rotateplane(N));this.baseplanes=s,this.baseFaceCount=s.length;let o=kv()[s.length];this.net=o,this.colors=rv()[s.length],this.options.verbosity>0&&console.log(`# Base planes: ${s.length}`);let a=ed(s),l=new St(0,0,0,0);this.options.verbosity>0&&console.log(`# Face vertices: ${a.length}`);let c=s[0].makenormal(),f=a[0].sum(a[1]).makenormal(),h=a[0].makenormal(),u=new St(1,c.b,c.c,c.d);this.options.verbosity>0&&console.log(`# Boundary is ${u}`);let d=Jh(u,this.rotations).map(N=>u.rotateplane(N)),y=ed(d);this.edgedistance=y[0].sum(y[1]).smul(.5).dist(l),this.vertexdistance=y[0].dist(l);let g=[],m=[],w=!1,M=!1,x=!1;for(let N of i){let Q=null,se=0;switch(N.cutType){case"f":{Q=c,se=1,w=!0;break}case"v":{Q=h,se=this.vertexdistance,x=!0;break}case"e":{Q=f,se=this.edgedistance,M=!0;break}default:throw Error(`Bad cut argument: ${N.cutType}`)}g.push(Q.makecut(N.distance)),m.push(N.distance<se)}this.options.addRotations&&(w||g.push(c.makecut(10)),x||g.push(h.makecut(10)),M||g.push(f.makecut(10))),this.basefaces=[];for(let N of this.baseplanerot){let Q=N.rotateface(y);this.basefaces.push(new bc(Q))}let k=[],T=[],b=[],L=[],S=y.length;function v(N,Q,se){for(let oe of N)if(oe[0].dist(Q)<xt){oe.push(se);return}N.push([Q,se])}for(let N=0;N<this.baseplanerot.length;N++){let Q=this.baseplanerot[N].rotateface(y);for(let se=0;se<Q.length;se++){let oe=(se+1)%Q.length,we=Q[se].sum(Q[oe]).smul(.5);v(L,we,N)}}let D=[];for(let N=0;N<this.baseplanerot.length;N++){let Q=this.baseplanerot[N].rotateface(y),se=[];for(let oe=0;oe<Q.length;oe++){let we=(oe+1)%Q.length,Se=Q[oe].sum(Q[we]).smul(.5),He=L[va(L,Se)];if(N===He[1])se.push(He[2]);else if(N===He[2])se.push(He[1]);else throw Error("Could not find edge")}D.push(se)}let P={},I=[];I.push(o[0][0]),P[o[0][0]]=0,I[D[0][0]]=o[0][1],P[o[0][1]]=D[0][0];for(let N of o){let Q=N[0],se=P[Q];if(se===void 0)throw Error("Bad edge description; first edge not connected");let oe=-1;for(let we=0;we<D[se].length;we++){let Se=I[D[se][we]];if(Se!==void 0&&Se===N[1]){oe=we;break}}if(oe<0)throw Error("First element of a net not known");for(let we=2;we<N.length;we++){if(N[we]==="")continue;let Se=D[se][(we+oe-1)%S],He=I[Se];if(He!==void 0&&He!==N[we])throw Error("Face mismatch in net");I[Se]=N[we],P[N[we]]=Se}}for(let N=0;N<this.baseplanerot.length;N++){let Q=this.baseplanerot[N].rotateface(y),se=u.rotateplane(this.baseplanerot[N]),oe=I[N];k.push([Q,oe]),T.push([se,oe])}for(let N=0;N<this.baseplanerot.length;N++){let Q=this.baseplanerot[N].rotateface(y),se=I[N];for(let oe=0;oe<Q.length;oe++){let we=(oe+1)%Q.length,Se=Q[oe].sum(Q[we]).smul(.5),He=(oe+2)%Q.length,B=Q[we].sum(Q[He]).smul(.5),li=va(L,Se),Ke=va(L,B);v(b,Q[we],[se,Ke,li])}}this.swizzler=new yc(k.map(N=>N[1]));let V=this.swizzler.prefixFree?"":"_",j=Pv[this.baseFaceCount],H=[];for(let N=0;N<this.baseFaceCount;N++)H[1<<N]=N;{let N=j.v;for(let Q of N){let se=this.swizzler.splitByFaceNames(Q),oe=0;for(let we of se)oe|=1<<we;H[oe]=se[0]}}{let N=j.e;for(let Q of N){let se=this.swizzler.splitByFaceNames(Q),oe=0;for(let we of se)oe|=1<<we;H[oe]=se[0]}}{let N=j.c;for(let Q of N){let se=this.swizzler.splitByFaceNames(Q),oe=1<<se[0]|1<<this.baseFaceCount;H[oe]=se[1]}}for(let N=0;N<L.length;N++){if(L[N].length!==3)throw Error(`Bad length in edge names ${L[N]}`);let Q=L[N][1],se=L[N][2],oe=I[Q],we=I[se],Se=1<<Q|1<<se;H[Se]===Q?oe=oe+V+we:oe=we+V+oe,L[N]=[L[N][0],oe]}for(let N=0;N<b.length;N++){let Q=0;if(b[N].length<4)throw Error("Bad length in vertex names");for(let Se=1;Se<b[N].length;Se++)Q|=1<<P[b[N][Se][0]];let se=H[Q],oe=-1;for(let Se=1;Se<b[N].length;Se++)se===P[b[N][Se][0]]&&(oe=Se);if(oe<0)throw Error("Internal error; couldn't find face name when fixing corners");let we="";for(let Se=1;Se<b[N].length;Se++){Se===1?we=b[N][oe][0]:we=we+V+b[N][oe][0];for(let He=1;He<b[N].length;He++)if(b[N][oe][1]===b[N][He][2]){oe=He;break}}b[N]=[b[N][0],we]}this.markedface=H,this.options.verbosity>1&&(console.log(`# Face names: ${k.map(N=>N[1]).join(" ")}`),console.log(`# Edge names: ${L.map(N=>N[1]).join(" ")}`),console.log(`# Vertex names: ${b.map(N=>N[1]).join(" ")}`));let K=[];for(let N of T)K.push([N[0].makenormal(),N[1],"f"]);for(let N of L)K.push([N[0].makenormal(),N[1],"e"]);for(let N of b)K.push([N[0].makenormal(),N[1],"v"]);this.facenames=k,this.faceplanes=T,this.edgenames=L,this.vertexnames=b,this.geonormals=K;let G=K.map(N=>N[1]);this.swizzler.setGripNames(G),this.options.verbosity>0&&console.log(`# Distances: face 1 edge ${this.edgedistance} vertex ${this.vertexdistance}`);for(let N=0;N<g.length;N++)for(let Q of this.rotations){let se=g[N].rotateplane(Q),oe=!1;for(let we of this.moveplanes)if(se.sameplane(we)){oe=!0;break}oe||(this.moveplanes.push(se),m[N]&&this.moveplanes2.push(se))}let te=new Dv(y),ne=this.moveplanes2.slice(),ye=31;for(let N=0;N<ne.length;N++){let Q=N+Math.floor((ne.length-N)*(ye/65536));te=te.split(ne[Q]),ne[Q]=ne[N],ye=(ye*1657+101)%65536}let xe=te.collect([],!0);this.faces=xe,this.options.verbosity>0&&console.log(`# Faces is now ${xe.length}`),this.stickersperface=xe.length;let Fe=[],Z=wc(y);for(let N of this.rotations){let Q=N.rotateface(y);Z.dist(wc(Q))<xt&&Fe.push(N)}let ie=new Array(xe.length),ae=[];for(let N=0;N<xe.length;N++){let Q=xe[N].centermass();ae.push([Z.dist(Q),Q,N])}ae.sort((N,Q)=>N[0]-Q[0]);for(let N=0;N<xe.length;N++){let Q=ae[N][2];if(!ie[Q]){ie[Q]=!0;for(let se of Fe){let oe=xe[Q].rotate(se),we=oe.centermass();for(let Se=N+1;Se<xe.length&&!(ae[Se][0]-ae[N][0]>xt);Se++){let He=ae[Se][2];if(!ie[He]&&we.dist(ae[Se][1])<xt){ie[He]=!0,xe[He]=oe;break}}}}}this.shortedge=1e99;for(let N of xe)for(let Q=0;Q<N.length;Q++){let se=(Q+1)%N.length,oe=N.get(Q).dist(N.get(se));oe<this.shortedge&&(this.shortedge=oe)}this.options.verbosity>0&&console.log(`# Short edge is ${this.shortedge}`),e==="c"&&w&&!M&&!x&&(this.addNotationMapper="NxNxNCubeMapper",this.setReidOrSpeffzOrder=!0),e==="c"&&x&&!w&&!M&&(this.addNotationMapper="SkewbMapper"),e==="t"&&(x||w)&&!M&&(this.addNotationMapper="PyraminxOrTetraminxMapper"),e==="o"&&w&&(this.notationMapper=new Wh(this.swizzler,new yc(["F","D","L","BL","R","U","BR","B"])),M||x||(this.addNotationMapper="FTOMapper")),e==="d"&&w&&(this.addNotationMapper="MegaminxMapper",this.notationMapper=new Wh(this.swizzler,new yc(["U","F","L","BL","BR","R","FR","FL","DL","B","DR","D"])))}keyface(t){return this.keyface2(t.centermass())}keyface2(t){let e="",i=String.fromCharCode;for(let r of this.moveplanesets)if(r.length>0){let n=t.dot(r[0]),s=0,o=1;for(;o*2<=r.length;)o*=2;for(;o>0;o>>=1)s+o<=r.length&&n>r[s+o-1].a&&(s+=o);if(s<47)e=e+i(33+s);else if(s<2256)e=e+i(80+Math.floor(s/47)-1)+i(33+s%47);else if(s<2256+2209*47)e=e+i(80+Math.floor((s-47)/2209-1))+i(80+Math.floor((s-47)/47)%47)+i(33+s%47);else throw Error("Too many slices for cubie encoding")}return e}keyface3(t){let e=t.centermass(),i=[];for(let r of this.moveplanesets)if(r.length>0){let n=e.dot(r[0]),s=0,o=1;for(;o*2<=r.length;)o*=2;for(;o>0;o>>=1)s+o<=r.length&&n>r[s+o-1].a&&(s+=o);i.push(s)}return i}findface(t){let e=this.keyface2(t),i=this.facelisthash.get(e);if(i.length===1)return i[0];for(let r=0;r+1<i.length;r++){let n=this.facelisthash.get(e)[r];if(Math.abs(t.dist(this.facecentermass[n]))<xt)return n}return i[i.length-1]}project2d(t,e,i){let r=this.facenames[t][0],n=(e+1)%r.length,s=this.baseplanes[t],o=r[n].sub(r[e]),a=o.len();o=o.normalize();let l=o.cross(s).normalize(),c=i[1].sub(i[0]),f=c.len()/a;c=c.normalize();let h=c.b,u=c.c,p=o.smul(h).sub(l.smul(u)).smul(f),d=l.smul(h).sum(o.smul(u)).smul(f),y=new St(0,i[0].b-p.dot(r[e]),i[0].c-d.dot(r[e]),0);return[p,d,y]}upperStringToBitSet(t){let e=0;for(let i=0;i<t.length;i++)e|=1<<t.charCodeAt(i)-65;return e}allstickers(){let t="allstickers";this.faces=Lv(this.baseplanerot,this.faces),this.options.verbosity>0&&console.log(`# Total stickers is now ${this.faces.length}`),this.facecentermass=new Array(this.faces.length);for(let S=0;S<this.faces.length;S++)this.facecentermass[S]=this.faces[S].centermass();let e=[],i=[];for(let S of this.moveplanes){let v=S.makenormal(),D=!1;for(let P of i)v.sameplane(P.makenormal())&&(D=!0);D||(i.push(v),e.push([]))}for(let S of this.moveplanes2){let v=S.makenormal();for(let D=0;D<i.length;D++)if(v.sameplane(i[D])){e[D].push(S);break}}for(let S=0;S<e.length;S++){let v=e[S].map(P=>P.normalizeplane()),D=i[S];for(let P=0;P<v.length;P++)v[P].makenormal().dist(D)>xt&&(v[P]=v[P].smul(-1));v.sort((P,I)=>P.a-I.a),e[S]=v}this.moveplanesets=e,this.moveplanenormals=i;let r=e.map(S=>S.length);this.options.verbosity>0&&console.log(`# Move plane sets: ${r}`);let n=[];for(let S=0;S<e.length;S++)n.push([]);for(let S of this.rotations){if(Math.abs(Math.abs(S.a)-1)<xt)continue;let v=S.makenormal();for(let D=0;D<e.length;D++)if(v.sameplane(i[D])){n[D].push(S);break}}this.moverotations=n;for(let S=0;S<n.length;S++){let v=n[S],D=v[0].makenormal();for(let P=0;P<v.length;P++)D.dist(v[P].makenormal())>xt&&(v[P]=v[P].smul(-1));v.sort((P,I)=>P.angle()-I.angle()),n[S][0].dot(i[S])<0&&v.reverse()}let s=n.map(S=>1+S.length);this.movesetorders=s;let o=[],a="?";for(let S=0;S<e.length;S++){let v=i[S],D=null,P=null;for(let I of this.geonormals){let V=v.dot(I[0]);Math.abs(V-1)<xt?(P=[I[1],I[2]],a=I[2]):Math.abs(V+1)<xt&&(D=[I[1],I[2]],a=I[2])}if(P===null||D===null)throw Error("Saw positive or negative sides as null");o.push([P[0],P[1],D[0],D[1],1+e[S].length]),this.addNotationMapper==="NxNxNCubeMapper"&&a==="f"&&(this.notationMapper=new ov(1+e[S].length),this.addNotationMapper=""),this.addNotationMapper==="SkewbMapper"&&e[0].length===1&&(this.notationMapper=new uv(this.swizzler),this.addNotationMapper=""),this.addNotationMapper==="PyraminxOrTetraminxMapper"&&(e[0].length===2&&e[0][0].a===.333333333333333&&e[0][1].a===1.66666666666667?(this.notationMapper=new id(this.swizzler),this.addNotationMapper=""):(this.notationMapper=new cv(this.swizzler),this.addNotationMapper="")),this.addNotationMapper==="MegaminxMapper"&&a==="f"&&(1+e[S].length===3&&(this.notationMapper=new sv(this.notationMapper)),this.addNotationMapper=""),this.addNotationMapper==="FTOMapper"&&a==="f"&&(1+e[S].length===3&&(this.notationMapper=new nv(this.notationMapper,this.swizzler)),this.addNotationMapper="")}this.movesetgeos=o;let l=new Map,c=this.faces;for(let S=0;S<c.length;S++){let v=c[S],D=this.keyface(v);if(!l.get(D))l.set(D,[S]);else{let P=l.get(D);if(P.push(S),P.length===this.baseFaceCount){this.options.verbosity>0&&console.log("# Splitting core.");for(let I=0;I<P.length;I++){let V=`${D} ${I}`;l.set(V,[P[I]])}}}}this.facelisthash=l,this.options.verbosity>0&&console.log(`# Cubies: ${l.size}`);let f=[],h=[],u=[];for(let S of l.values())if(S.length!==this.baseFaceCount){if(S.length>1){let v=S.map(j=>c[j].centermass()),D=wc(v);for(let j=0;S.length>2;j++){let H=!1;for(let K=0;K<S.length;K++){let G=(K+1)%S.length;if(D.dot(v[K].cross(v[G]))<0){let te=v[K];v[K]=v[G],v[G]=te;let ne=S[K];S[K]=S[G],S[G]=ne,H=!0}}if(!H)break;if(j>1e3)throw Error("Bad epsilon math; too close to border")}let P=0;for(let j of S)P|=1<<Math.floor(j/this.stickersperface);let I=this.markedface[P],V=-1;for(let j=0;j<S.length;j++)Math.floor(S[j]/this.stickersperface)===I&&(V=j);if(V<0)throw Error("Could not find marked face in list");if(V!==0){let j=S.slice();for(let H=0;H<S.length;H++)S[H]=j[(V+H)%S.length]}}for(let v=0;v<S.length;v++){let D=S[v];h[D]=f.length,u[D]=v}f.push(S)}this.cubies=f,this.facetocubie=h,this.facetoord=u;let p=["?","CENTERS","EDGES","CORNERS","C4RNER","C5RNER"],d=[],y=[0,0,0,0,0,0],g=[],m=[],w=0,M=[],x=[],k=[],T=[],b=S=>f[S].map(v=>this.getfaceindex(v)).join(" "),L=[];for(let S=0;S<f.length;S++){let v=f[S];if(v.length===0||m[S])continue;let D={},P=0;k.push(0),L.push([]);let I=v.length,V=y[I]++,j=p[I];(j===void 0||I===this.baseFaceCount)&&(j="CORE"),j=j+(V===0?"":V+1),d[w]=j,g[w]=I;let H=[S],K=0;for(m[S]=!0;K<H.length;){let G=H[K++],te=b(G);if((v.length>1||D[te]===void 0)&&(D[te]=P++),T[G]=D[te],M[G]=w,L[w].push(G),x[G]=k[w]++,H.length<this.rotations.length){let ne=this.facecentermass[f[G][0]];for(let ye of n){let xe=this.facetocubie[this.findface(ne.rotatepoint(ye[0]))];m[xe]||(H.push(xe),m[xe]=!0)}}}w++}if(this.setReidOrSpeffzOrder&&4<=this.stickersperface){let S=[["UF","UR","UB","UL","DF","DR","DB","DL","FR","FL","BR","BL"],["UFR","URB","UBL","ULF","DRF","DFL","DLB","DBR"],["U","L","F","R","B","D"]],v=["U","L","F","R","B","D"],D=["UBL","URB","UFR","ULF","UBL","ULF","DFL","DLB","ULF","UFR","DRF","DFL","UFR","URB","DBR","DRF","URB","UBL","DLB","DBR","DFL","DRF","DBR","DLB"],P={};for(let K of S)for(let G=0;G<K.length;G++)P[this.upperStringToBitSet(K[G])]=G;let I={},V={},j=[],H=[-1,0,1,0,2,-1,1,-1,3,3,-1,-1,2,-1,-1,-1];if(this.stickersperface>9){for(let K of this.vertexnames)I[this.upperStringToBitSet(K[1])]=K[0];for(let K=0;K<6;K++)V[v[K]]=K;for(let K of D)j.push(I[this.upperStringToBitSet(K)])}for(let K of L)for(let G of K)if(f[G].length===3||this.stickersperface<=9){let te=0;for(let ne of f[G])te|=1<<this.facenames[this.getfaceindex(ne)][1].charCodeAt(0)-65;x[G]=P[te]}else if(f[G].length<=2){let te=[];for(let ne=0;ne<f[G].length;ne++){let ye=f[G][ne],xe=V[this.facenames[this.getfaceindex(ye)][1]],Fe=1e20,Z=this.faces[ye].centermass(),ie=0;for(let ae=0;ae<4;ae++){let N=Z.dist(j[4*xe+ae]);N+xt<Fe?(Fe=N,ie=1<<ae):N<Fe+xt&&(ie|=1<<ae)}if(ie=H[ie],ie>=0){let ae=4*xe+ie;te.push([ae,D[ae]])}}if(te.length>0){if(f[G].length===1)x[G]=te[0][0];else if(te.length===2&&te[0][1]===te[1][1]){let ne=0,ye=v[te[0][0]>>2],xe=v[te[1][0]>>2],Fe=te[0][1];for(;ne<3&&(ye===Fe.charAt(ne)||xe===Fe.charAt(ne));)ne++;if(ne===3)throw Error("Internal error (2) in Speffz");if(ne=(ne+1)%3,ye===Fe.charAt(ne))x[G]=te[0][0];else if(xe===Fe.charAt(ne))x[G]=te[1][0];else throw console.log(ye,xe,Fe,ne,te),Error("Internal error (3) in Speffz")}}}}if(this.cubiesetnums=M,this.cubieordnums=x,this.cubiesetnames=d,this.cubieords=k,this.orbitoris=g,this.cubievaluemap=T,this.cubiesetcubies=L,this.options.fixedPieceType!==null){for(let S=0;S<f.length;S++)if(this.options.fixedPieceType==="v"&&f[S].length>2||this.options.fixedPieceType==="e"&&f[S].length===2||this.options.fixedPieceType==="f"&&f[S].length===1){this.fixedCubie=S;break}if(this.fixedCubie<0)throw Error(`Could not find a cubie of type ${this.options.fixedPieceType} to fix.`)}this.options.verbosity>0&&console.log(`# Cubie orbit sizes ${k}`)}unswizzle(t){let e=this.notationMapper.notationToInternal(t);return e===null?null:e.modified({family:this.swizzler.unswizzle(e.family)})}stringToBlockMove(t){let e=/^(([0-9]+)-)?([0-9]+)?([^0-9]+)([0-9]+'?)?$/,i=t.match(e);if(i===null)throw Error(`Bad move passed ${t}`);let r=i[4],n,s;if(i[2]!==void 0){if(i[3]===void 0)throw Error("Missing second number in range");n=parseInt(i[2],10)}i[3]!==void 0&&(s=parseInt(i[3],10));let o="1",a=1;return i[5]!==void 0&&(o=i[5],o[0]==="'"&&(o=`-${o.substring(1)}`),a=parseInt(o,10)),new A(new ke(r,s,n),a)}parseMove(t){let e=this.notationMapper.notationToInternal(t);if(e===null)throw Error(`Bad move ${t.family}`);t=e;let i=t.family,r=!1;if(i.endsWith("v")&&i[0]<="Z"){if(t.innerLayer!==void 0||t.outerLayer!==void 0)throw Error("Cannot use a prefix with full cube rotations");i=i.slice(0,-1),r=!0}i.endsWith("w")&&i[0]<="Z"&&(i=i.slice(0,-1).toLowerCase());let n,s=-1,o=this.swizzler.unswizzle(i),a=!1;for(let f=0;f<this.movesetgeos.length;f++){let h=this.movesetgeos[f];o===h[0]&&(a=!0,n=h,s=f),o===h[2]&&(a=!1,n=h,s=f)}let l=1,c=1;if(i.toUpperCase()!==i&&(c=2),n===void 0)throw Error(`Bad grip in move ${t.family}`);if(t.outerLayer!==void 0&&(l=t.outerLayer),t.innerLayer!==void 0&&(t.outerLayer===void 0?(c=t.innerLayer,i<="Z"?l=c:l=1):c=t.innerLayer),l--,c--,r&&(l=0,c=this.moveplanesets[s].length),l<0||l>this.moveplanesets[s].length||c<0||c>this.moveplanesets[s].length)throw Error(`Bad slice spec ${l} ${c} vs ${this.moveplanesets[s].length}`);if(!Iv&&l===0&&c===this.moveplanesets[s].length&&!r)throw Error("! full puzzle rotations must be specified with v suffix.");return[void 0,s,l,c,a,t.amount]}parsemove(t){let e=this.parseMove(this.stringToBlockMove(t));return e[0]=t,e}genperms(){let t="genperms";if(this.cmovesbyslice.length>0)return;let e=[];if(this.options.orientCenters){for(let i=0;i<this.cubies.length;i++)if(this.cubies[i].length===1){let r=this.cubies[i][0],n=this.getfaceindex(r),s=this.basefaces[n].centermass();if(s.dist(this.facecentermass[r])<xt){let o=1<<n|1<<this.baseFaceCount,a=this.markedface[o],l=this.baseplanes[a].makenormal(),c=-1,f=-1;for(let p=0;p<this.faces[r].length;p++){let d=this.faces[r].get(p),y=l.dot(d.sub(s));y>c&&(c=y,f=p)}let h=(f+1)%this.faces[r].length;if(Math.abs(l.dot(this.faces[r].get(h).sub(s))-c)<xt&&(f=h),f!==0){let p=[];for(let d=0;d<this.faces[r].length;d++)p.push(this.faces[r].get((d+f)%this.faces[r].length));this.faces[r]=new bc(p)}let u=this.basefaces[n].length;for(let p=1;p<u;p++)this.cubies[i].push(this.cubies[i][p-1]);this.duplicatedFaces[r]=u,this.duplicatedCubies[i]=u,this.orbitoris[this.cubiesetnums[i]]=u}}}for(let i=0;i<this.moveplanesets.length;i++){let r=this.moveplanesets[i],n=[],s=[r.length+1,0],o=1;for(;o*2<=r.length;)o*=2;for(let c=0;c<this.faces.length;c++){let f=0;if(r.length>0){let h=this.facecentermass[c].dot(r[0]);for(let u=o;u>0;u>>=1)f+u<=r.length&&h>r[f+u-1].a&&(f+=u);f=r.length-f}for(n.push(f);s.length<=f;)s.push(0);s[f]++}let a=new Array(s.length);for(let c=0;c<s.length;c++)a[c]=[];let l=[];for(let c=0;c<this.faces.length;c++){if(n[c]<0)continue;let f=[this.facetocubie[c],this.facetoord[c]],h=this.facecentermass[c],u=h,p=c,d=n[p];for(;;){n[p]=-1;let y=h.rotatepoint(this.moverotations[i][0]);if(y.dist(u)<xt)break;p=this.findface(y),f.push(this.facetocubie[p],this.facetoord[p]),h=y}if(f.length>2&&this.options.orientCenters&&(this.cubies[f[0]].length===1||this.duplicatedCubies[f[0]]>1)&&this.facecentermass[c].dist(this.basefaces[this.getfaceindex(c)].centermass())<xt){let y=this.faces[this.cubies[f[0]][0]];for(let g=0;g<f.length;g+=2){let m=this.faces[this.cubies[f[g]][0]],w=-1;for(let M=0;M<y.length;M++)if(m.get(M).dist(y.get(0))<xt){w=M;break}if(w<0)throw Error("Couldn't find rotation of center faces; ignoring for now.");f[g+1]=w,y=y.rotate(this.moverotations[i][0])}}if(f.length===2&&this.options.orientCenters){let y=this.facecentermass[c].dot(this.moveplanenormals[i]);for(let g=1;g<this.movesetorders[i];g++)y>0?f.push(f[0],g):f.push(f[0],(this.movesetorders[i]-g)%this.movesetorders[i])}if(f.length>2&&!l[f[0]]){if(f.length!==2*this.movesetorders[i])throw Error("Bad length in perm gen");for(let y of f)a[d].push(y)}for(let y=0;y<f.length;y+=2)l[f[y]]=!0}for(let c=0;c<a.length;c++)a[c]=a[c].slice();e.push(a)}if(this.cmovesbyslice=e,this.options.moveList){let i=[];for(let r of this.options.moveList)i.push(this.parsemove(r));this.parsedmovelist=i}this.facelisthash.clear(),this.facecentermass=[]}getboundarygeometry(){return{baseplanes:this.baseplanes,facenames:this.facenames,faceplanes:this.faceplanes,vertexnames:this.vertexnames,edgenames:this.edgenames,geonormals:this.geonormals}}getmovesets(t){let e=this.moveplanesets[t].length,i=[];if(this.parsedmovelist!==void 0)for(let r of this.parsedmovelist)r[1]===t&&(r[4]?i.push([r[2],r[3]]):i.push([e-r[3],e-r[2]]),i.push(r[5]));else{let r=this.movesetgeos[t],n=r[1]!==r[3];if(this.options.vertexMoves&&n&&!this.options.allMoves){if(r[1]!==r[3])for(let s=0;s<e;s++)r[1]!=="v"?(this.options.outerBlockMoves?i.push([s+1,e]):i.push([s+1,s+1]),i.push(1)):(this.options.outerBlockMoves?i.push([0,s]):i.push([s,s]),i.push(1))}else for(let s=0;s<=e;s++)!this.options.allMoves&&s+s===e||(this.options.outerBlockMoves?s+s>e?i.push([s,e]):i.push([0,s]):i.push([s,s]),i.push(1))}if(this.fixedCubie>=0){let r=this.keyface3(this.faces[this.cubies[this.fixedCubie][0]])[t],n=[];for(let s=0;s<i.length;s+=2){let o=i[s];if(r>=o[0]&&r<=o[1])if(o[0]===0)o=[o[1]+1,e];else if(e===o[1])o=[0,o[0]-1];else throw Error("fixed cubie option would disconnect move");let a=!1;for(let l=0;l<n.length;l+=2)if(n[l][0]===o[0]&&n[l][1]===o[1]&&n[l+1]===i[s+1]){a=!0;break}a||(n.push(o),n.push(i[s+1]))}i=n}return i}graybyori(t){let e=this.cubies[t].length;return this.duplicatedCubies[t]&&(e=1),e===1&&(this.options.grayCenters||!this.options.includeCenterOrbits)||e===2&&(this.options.grayEdges||!this.options.includeEdgeOrbits)||e>2&&(this.options.grayCorners||!this.options.includeCornerOrbits)}skipbyori(t){let e=this.cubies[t].length;return this.duplicatedCubies[t]&&(e=1),e===1&&!this.options.includeCenterOrbits||e===2&&!this.options.includeEdgeOrbits||e>2&&!this.options.includeCornerOrbits}skipcubie(t){return this.skipbyori(t)}header(t){return`${t+Nv}
${t}
`}writegap(){let t=this.getOrbitsDef(!1),e=[],i=[];for(let n=0;n<t.moveops.length;n++){let s=`M_${wa(this.notationMapper,t.movenames[n])}`,o=!1;s[s.length-1]==="'"&&(s=s.substring(0,s.length-1),o=!0),i.push(s),o?e.push(`${s}:=${t.moveops[n].toPerm().inv().toGap()};`):e.push(`${s}:=${t.moveops[n].toPerm().toGap()};`)}e.push("Gen:=["),e.push(i.join(",")),e.push("];");let r=t.solved.identicalPieces();return e.push(`ip:=[${r.map(n=>`[${n.map(s=>s+1).join(",")}]`).join(",")}];`),e.push("# Size(Group(Gen));"),e.push("# Size(Stabilizer(Group(Gen), ip, OnTuplesSets));"),e.push(""),this.header("# ")+e.join(`
`)}writemathematica(){let t=this.getOrbitsDef(!1),e=[],i=[];e.push(`(* ${this.header("").trim()} *)`);for(let r=0;r<t.moveops.length;r++){let n=`m${wa(this.notationMapper,t.movenames[r])}`,s=!1;n[n.length-1]==="'"&&(n=n.substring(0,n.length-1),s=!0),i.push(n),s?e.push(`${n}=${t.moveops[r].toPerm().inv().toMathematica()};`):e.push(`${n}=${t.moveops[r].toPerm().toMathematica()};`)}return e.push(`gen={${i.join(",")}};`),e.join(`
`)}writeksolve(t="PuzzleGeometryPuzzle"){let e=this.getOrbitsDef(!1);return this.header("# ")+e.toKsolve(t,this.notationMapper).join(`
`)}getKPuzzleDefinition(t=!0,e=!0){let r=this.getOrbitsDef(t,e).toKPuzzleDefinition(e);if(r.experimentalPuzzleDescription=this.puzzleDescription,!r)throw Error("Missing definition!");return r}getMoveFromBits(t,e,i,r,n,s){let o=[],a=[],l=[];for(let h of this.cubieords)a.push(zr(h)),l.push(gn(h));for(let h=t[0];h<=t[1];h++){let u=r[h];for(let p=0;p<u.length;p+=2*s){let d=u.slice(p,p+2*s),y=this.cubiesetnums[d[0]];for(let w=0;w<d.length;w+=2)d[w]=this.cubieordnums[d[w]];let g=2,m=3;i&&(g=d.length-2,m=d.length-1),a[y]===zr(this.cubieords[y])&&(a[y]=a[y].slice(),this.orbitoris[y]>1&&!this.options.fixedOrientation&&(l[y]=l[y].slice()));for(let w=0;w<d.length;w+=2)a[y][d[(w+g)%d.length]]=d[w],this.orbitoris[y]>1&&!this.options.fixedOrientation&&(l[y][d[w]]=(d[(w+m)%d.length]-d[(w+1)%d.length]+2*this.orbitoris[y])%this.orbitoris[y])}}let c=new jn(zr(24),gn(24),1);for(let h=0;h<this.cubiesetnames.length;h++)if(!(n&&!n[h]))if(this.orbitoris[h]===1||this.options.fixedOrientation)a[h]===zr(c.perm.length)?(a[h]!==c.perm&&(c=new jn(a[h],l[h],1)),o.push(c)):o.push(new jn(a[h],l[h],1));else{let u=new Array(l[h].length);for(let p=0;p<a[h].length;p++)u[p]=l[h][a[h][p]];o.push(new jn(a[h],u,this.orbitoris[h]))}let f=new ad(o);return e!==1&&(f=f.mulScalar(e)),f}omitSet(t){for(let e of this.options.excludeOrbits)if(e===t)return!0;return!1}diffmvsets(t,e,i,r){for(let n=0;n<t.length;n+=2){let s=!1;for(let o=0;!s&&o<e.length;o+=2)r?t[n][0]+e[o][1]===i&&t[n][1]+e[o][0]===i&&t[n+1]===e[o+1]&&(s=!0):t[n][0]===e[o][0]&&t[n][1]===e[o][1]&&t[n+1]===e[o+1]&&(s=!0);if(!s)return!0}return!1}getOrbitsDef(t,e=!0){let i=[];if(t)for(let d=0;d<this.cubiesetnames.length;d++)i.push(1);let r=[],n=[],s=[],o=[];for(let d=0;d<this.moveplanesets.length;d++){let y=this.getmovesets(d);s.push(y),this.options.addRotations?o.push(1):o.push(0)}let a=[];for(let d=0;d<this.moveplanesets.length;d++){let y=this.moveplanesets[d].length,g=!1,m=s[d];for(let w=0;w<m.length;w+=2)m[w][0]===0&&m[w][1]===y&&(g=!0);a[d]=g}if(this.options.addRotations&&(this.options.moveList||this.options.fixedPieceType!==null)){for(let d=0;d<this.moverotations.length;d++)o[d]=0;for(let d=0;d<this.moveplanesets.length;d++){if(a[d]){o[d]=3;continue}for(let y=0;y<this.moverotations.length;y++){let g=this.moveplanenormals[d];for(let m=1;m*2<=this.movesetorders[y];m++){if(g=g.rotatepoint(this.moverotations[y][0]),o[y]&m)continue;let w=-1,M=!1;for(let k=0;k<this.moveplanenormals.length;k++)if(g.dist(this.moveplanenormals[k])<xt){w=k;break}else if(g.dist(this.moveplanenormals[k].smul(-1))<xt){w=k,M=!0;break}if(w<0)throw Error("Could not find rotation");let x=s[w];(x.length!==s[d].length||this.moveplanesets[d].length!==this.moveplanesets[w].length||this.diffmvsets(x,s[d],this.moveplanesets[w].length,M))&&(o[y]|=m)}}}for(let d=0;d<this.moverotations.length;d++)if(o[d]===0)o[d]=1;else if(o[d]===1)this.movesetorders[d]>3?o[d]=2:o[d]=0;else if(o[d]===3)o[d]=0;else throw Error("Impossible addrot val")}for(let d=0;d<this.moveplanesets.length;d++)o[d]!==0&&!a[d]&&(s[d].push([0,this.moveplanesets[d].length]),s[d].push(o[d]));for(let d=0;d<this.moveplanesets.length;d++){let y=s[d],g=this.movesetorders[d];for(let M=0;M<y.length;M+=2)for(let x=0;x<M;x+=2)if(y[M][0]===y[x][0]&&y[M][1]===y[x][1])throw Error("Redundant moves in moveset.");let m=[];for(let M=0;M<y.length;M+=2)for(let x=y[M][0];x<=y[M][1];x++)m[x]=1;let w=this.cmovesbyslice[d];for(let M=0;M<w.length;M++){if(m[M]!==1)continue;let x=w[M];for(let k=0;k<x.length;k+=2*g){if(this.skipcubie(x[k]))continue;let T=this.cubiesetnums[x[k]];i[T]=1}}}for(let d=0;d<this.cubiesetnames.length;d++)if(i[d]){if(this.omitSet(this.cubiesetnames[d])){i[d]=0;continue}r.push(this.cubiesetnames[d]),n.push(new Rc(this.cubieords[d],this.options.fixedOrientation?1:this.orbitoris[d]))}let l=[];for(let d=0;d<this.cubiesetnames.length;d++){if(!i[d]||this.omitSet(this.cubiesetnames[d]))continue;let y=[],g=[];for(let m=0;m<this.cubieords[d];m++){if(t)y.push(m);else{let w=this.cubiesetcubies[d][m];y.push(this.cubievaluemap[w])}g.push(0)}l.push(new jn(y,g,this.options.fixedOrientation?1:this.orbitoris[d]))}let c=[],f=[],h=[],u=[];if(e)for(let d=0;d<this.moveplanesets.length;d++){let g=this.moveplanesets[d].length,m=s[d],w=this.movesetgeos[d];for(let M=0;M<m.length;M+=2){let x=m[M],k,T=!1;if(this.parsedmovelist!==void 0)for(let L of this.parsedmovelist){if(L[1]!==d)continue;let S=[];L[4]?S=[L[2],L[3]]:S=[g-L[3],g-L[2]],S[0]===x[0]&&S[1]===x[1]&&(k=L[0],T=!L[4])}if(k)c.push(k),f.push(!0);else{let L=Vv(w,x,g);T=L[1];let S=L[0];m[M+1]===1?c.push(S):c.push(S+m[M+1]),f.push(!1)}u.push(x[0]===0&&x[1]===g);let b=this.getMoveFromBits(x,m[M+1],T,this.cmovesbyslice[d],i,this.movesetorders[d]);h.push(b)}}let p=new nd(r,n,new ld(l),c,h,u,f);return this.options.optimizeOrbits&&(p=p.optimize()),this.options.scrambleAmount!==0&&p.scramble(this.options.scrambleAmount),p}getScramble(t=0){let e=this.getOrbitsDef(!1);return e.toKTransformationData(e.getScrambleTransformation(t))}getMovesAsPerms(){return this.getOrbitsDef(!1).moveops.map(t=>t.toPerm())}showcanon(t){Ev(this.getOrbitsDef(!1),t)}getsolved(){let t=[];for(let e=0;e<this.baseFaceCount;e++)for(let i=0;i<this.stickersperface;i++)t.push(e);return new io(t)}getOrientationRotation(t){let[e,[i,r,n]]=t[0],s=new St(0,i,-r,n),[o,[a,l,c]]=t[1],f=new St(0,a,-l,c),h=null,u=null,p=this.swizzler.unswizzle(e),d=this.swizzler.unswizzle(o);for(let w of this.geonormals)p===w[1]&&(h=w[0]),d===w[1]&&(u=w[0]);if(!h)throw Error(`Could not find feature ${e}`);if(!u)throw Error(`Could not find feature ${o}`);let y=h.pointrotation(s);return u.rotatepoint(y).unproject(s).pointrotation(f.unproject(s)).mul(y)}getInitial3DRotation(){let t=this.baseFaceCount,e=null;if(this.options.puzzleOrientation?e=this.options.puzzleOrientation:this.options.puzzleOrientations&&(e=this.options.puzzleOrientations[t]),e||(e=Uv()[t]),!e)throw Error("No default orientation?");return this.getOrientationRotation(e)}generate2dmapping(t=800,e=500,i=10,r=!1,n=.92){t-=2*i,e-=2*i;function s(P,I){let V=P[1][0]-P[0][0],j=P[1][1]-P[0][1],H=2*Math.PI/I,K=Math.cos(H),G=Math.sin(H);for(let te=2;te<I;te++){let ne=V*K+j*G;j=j*K-V*G,V=ne,P.push([P[te-1][0]+V,P[te-1][1]+j])}}this.genperms();let l=this.getboundarygeometry().facenames[0][0].length,c=this.net;if(c===null)throw Error("No net?");let f={},h=0,u=0,p=1,d=0;f[c[0][0]]=[[1,0],[0,0]],s(f[c[0][0]],l);for(let P of c){let I=P[0];if(!f[I])throw Error("Bad edge description; first edge not connected.");for(let V=1;V<P.length;V++){let j=P[V];j===""||f[j]||(f[j]=[f[I][V%l],f[I][(V+l-1)%l]],s(f[j],l))}}for(let P in f){let I=f[P];for(let V of I)h=Math.min(h,V[0]),p=Math.max(p,V[0]),u=Math.min(u,V[1]),d=Math.max(d,V[1])}let y=Math.min(t/(p-h),e/(d-u)),g=.5*(t-y*(p+h)),m=.5*(e-y*(d+u)),w={},M=this.getboundarygeometry(),x={},k=[[y+g,m],[g,m]];x[c[0][0]]=k,s(x[c[0][0]],l),w[this.facenames[0][1]]=this.project2d(0,0,[new St(0,k[0][0],k[0][1],0),new St(0,k[1][0],k[1][1],0)]);let T=[];T[0]=0;for(let P of c){let I=P[0];if(!x[I])throw Error("Bad edge description; first edge not connected.");let V=-1;for(let H=0;H<M.facenames.length;H++)if(I===M.facenames[H][1]){V=H;break}if(V<0)throw Error(`Could not find first face name ${I}`);let j=M.facenames[V][0];for(let H=1;H<P.length;H++){let K=P[H];if(K===""||x[K])continue;x[K]=[x[I][H%l],x[I][(H+l-1)%l]],s(x[K],l);let G=T[V],te=j[(G+H)%l].sum(j[(G+H+l-1)%l]).smul(.5),ne=va(M.edgenames,te),ye=M.edgenames[ne][1],xe=Hv(ye,this.facenames),Fe=xe[I===xe[0]?1:0],Z=-1;for(let ae=0;ae<M.facenames.length;ae++)if(Fe===M.facenames[ae][1]){Z=ae;break}if(Z<0)throw Error("Could not find second face name");let ie=M.facenames[Z][0];for(let ae=0;ae<ie.length;ae++)if(ie[ae].sum(ie[(ae+1)%l]).smul(.5).dist(te)<=xt){let Q=x[I][(H+l-1)%l],se=x[I][H%l];T[Z]=ae,w[Fe]=this.project2d(Z,ae,[new St(0,se[0],se[1],0),new St(0,Q[0],Q[1],0)]);break}}}let b=0,L=0,S=this.getInitial3DRotation();for(let P of this.faces){r&&(P=P.rotate(S));for(let I=0;I<P.length;I++)b=Math.max(b,Math.abs(P.get(I).b)),L=Math.max(L,Math.abs(P.get(I).c))}let v=Math.min(e/L/2,(t-i)/b/4);return(P,I)=>{if(r){I=I.rotatepoint(S);let V=.5*i+.25*t,j=this.baseplanes[P].rotateplane(S).d<0?1:-1;return[i+t*.5+j*(V-I.b*v),i+e*.5+I.c*v]}else{let V=w[this.facenames[P][1]];return[i+n*I.dot(V[0])+V[2].b,i+e-n*I.dot(V[1])-V[2].c]}}}generatesvg(t=800,e=500,i=10,r=!1){let n=this.generate2dmapping(t,e,i,r);function s(h,u,p){return`<polygon id="${h}" class="sticker" style="fill: ${p}" points="${u.map(d=>`${d[0]} ${d[1]}`).join(" ")}"/>
`}let o=this.getsolved(),a=[],l=[];for(let h=0;h<this.baseFaceCount;h++)a[h]=this.colors[this.facenames[h][1]];for(let h=0;h<this.faces.length;h++){let u=this.faces[h],p=Math.floor(h/this.stickersperface),d=[];for(let y=0;y<u.length;y++)d.push(n(p,u.get(y)));l.push(d)}let c=[];for(let h=0;h<this.baseFaceCount;h++){c.push("<g>"),c.push(`<title>${this.facenames[h][1]}</title>
`);for(let u=0;u<this.stickersperface;u++){let p=h*this.stickersperface+u,d=this.facetocubie[p],y=this.facetoord[p],g=this.cubiesetnums[d],m=this.cubieordnums[d],w=this.graybyori(d)?"#808080":a[o.p[p]],M=`${this.cubiesetnames[g]}-l${m}-o${y}`;if(c.push(s(M,l[p],w)),this.duplicatedFaces[p])for(let x=1;x<this.duplicatedFaces[p];x++)M=`${this.cubiesetnames[g]}-l${m}-o${x}`,c.push(s(M,l[p],w))}c.push("</g>")}return`<svg id="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 500">
<style type="text/css"><![CDATA[.sticker { stroke: #000000; stroke-width: 1px; }]]></style>
${c.join("")}</svg>`}get3d(t){let e=[],i=this.getInitial3DRotation(),r=[],n=.52*this.basefaces[0].get(0).len();for(let l=0;l<this.basefaces.length;l++){let c=this.basefaces[l].rotate(i),f=this.facenames[l][1];r.push({coords:Mc(c,n),name:f})}for(let l=0;l<this.faces.length;l++){let c=Math.floor(l/this.stickersperface),f=this.facetocubie[l],h=this.facetoord[l],u=this.cubiesetnums[f],p=this.cubieordnums[f],d=this.graybyori(f)?t?.darkIgnoredOrbits?"#222222":"#808080":this.colors[this.facenames[c][1]];t?.stickerColors&&(d=t.stickerColors[l]);let y=this.faces[l].rotate(i);e.push({coords:Mc(y,n),color:d,orbit:this.cubiesetnames[u],ord:p,ori:h,face:c});let g=y;if(this.duplicatedFaces[l]){let m=g.length/this.duplicatedFaces[l];for(let w=1;w<this.duplicatedFaces[l];w++){for(let M=0;M<m;M++)g=g.rotateforward();e.push({coords:Mc(g,n),color:d,orbit:this.cubiesetnames[u],ord:p,ori:w,face:c,isDup:!0})}}}let s=[];for(let l=0;l<this.movesetgeos.length;l++){let c=this.movesetgeos[l],f=this.movesetorders[l];for(let h of this.geonormals)c[0]===h[1]&&c[1]===h[2]&&(s.push({coordinates:_a(h[0].rotatepoint(i),1),quantumMove:new A(c[0]),order:f}),s.push({coordinates:_a(h[0].rotatepoint(i).smul(-1),1),quantumMove:new A(c[2]),order:f}))}let o=this.generate2dmapping(2880,2160,0,!1,1),a=(()=>{let l=i.invrot();return(c,f)=>{let h=new St(0,f[0]*n,-f[1]*n,f[2]*n);h=h.rotatepoint(l);let u=o(c,h);return u[0]/=2880,u[1]=1-u[1]/2160,u}})().bind(this);return{stickers:e,faces:r,axis:s,unswizzle:this.unswizzle.bind(this),notationMapper:this.notationMapper,textureMapper:{getuv:a}}}getGeoNormal(t){let e=this.getInitial3DRotation(),i=this.swizzler.unswizzle(t);for(let r of this.geonormals)if(i===r[1]){let n=_a(r[0].rotatepoint(e),1);return Math.abs(n[0])<xt&&Math.abs(n[2])<xt&&(n[0]=0,n[2]=1e-6),n}}getfaceindex(t){let e=this.stickersperface;return Math.floor(t/e)}textForTwizzleExplorer(){return`Faces ${this.baseplanerot.length}
Stickers per face ${this.stickersperface}
Short edge ${this.shortedge}
Cubies ${this.cubies.length}
Edge distance ${this.edgedistance}
Vertex distance ${this.vertexdistance}`}writeSchreierSims(t){let i=this.getOrbitsDef(!1).reassemblySize();t(`Reassembly size is ${i}`);let r=fd(this.getMovesAsPerms(),t),n=i/r;t(`Ratio is ${n}`)}},Wv=class{constructor(t,e){this.pg=t,this.orbitNames=e.orbitnames}orbitNames;lookupMove(t){let e=this.pg.parseMove(t);if(this.pg.parsedmovelist){let s=!1;for(let o of this.pg.parsedmovelist)o[1]===e[1]&&o[2]===e[2]&&o[3]===e[3]&&o[4]===e[4]&&(s=!0);if(!s)return null}let i=[e[2],e[3]];if(!e[4]){let s=this.pg.moveplanesets[e[1]].length;i=[s-e[3],s-e[2]]}let r=this.pg.getMoveFromBits(i,e[5],!e[4],this.pg.cmovesbyslice[e[1]],void 0,this.pg.movesetorders[e[1]]);return nd.transformToKTransformationData(this.orbitNames,r)}remapKPuzzleDefinition(t){return pv(t,this.pg.notationMapper)}}});function ba(t){return new yd(e=>{e(t())})}function Lc(t,e,i,r,n){let o=t.orbits[e].pieces[i];if(o===null)return bi;let a=o.facelets?.[r];return a===null?bi:typeof a=="string"?a:n?a.hintMask??a.mask:(console.log(a),a.mask)}function Nc(t){return qv[t]}async function Kn(t,e){return(await Yv(t,e)).toStickeringMask()}async function Yv(t,e){let i=await t.kpuzzle(),r=new Ic(i),n=new kc(i),s=()=>n.move("U"),o=()=>n.or(n.moves(["U","D"])),a=()=>n.or(n.moves(["L","R"])),l=()=>n.not(a()),c=()=>n.not(s()),f=()=>n.orbitPrefix("CENTER"),h=L=>n.and([n.move(L),f()]),u=()=>n.orbitPrefix("EDGE"),p=L=>n.and([n.and(n.moves(L)),u()]),d=()=>n.or([n.orbitPrefix("CORNER"),n.orbitPrefix("C4RNER"),n.orbitPrefix("C5RNER")]),y=()=>n.or([l(),n.and([s(),u()])]),g=()=>n.and([s(),f()]),m=()=>n.and([n.and(n.moves(["F","R"])),u()]),w=()=>n.and([n.and(n.moves(["F","R"])),d(),n.not(s())]),M=()=>n.or([w(),m()]);function x(){r.set(c(),"Dim")}function k(){r.set(s(),"PermuteNonPrimary"),r.set(g(),"Dim")}function T(){r.set(s(),"IgnoreNonPrimary"),r.set(g(),"Regular")}function b(){r.set(s(),"Ignoriented"),r.set(g(),"Dim")}switch(e){case"full":break;case"PLL":{x(),k();break}case"CLS":{x(),r.set(w(),"Regular"),r.set(s(),"Ignoriented"),r.set(n.and([s(),f()]),"Dim"),r.set(n.and([s(),d()]),"IgnoreNonPrimary");break}case"OLL":{x(),T();break}case"EOLL":{x(),T(),r.set(n.and([s(),d()]),"Ignored");break}case"COLL":{x(),r.set(n.and([s(),u()]),"Ignoriented"),r.set(n.and([s(),f()]),"Dim"),r.set(n.and([s(),d()]),"Regular");break}case"OCLL":{x(),b(),r.set(n.and([s(),d()]),"IgnoreNonPrimary");break}case"CPLL":{x(),r.set(n.and([d(),s()]),"PermuteNonPrimary"),r.set(n.and([n.not(d()),s()]),"Dim");break}case"CLL":{x(),r.set(n.not(n.and([d(),s()])),"Dim");break}case"EPLL":{x(),r.set(s(),"Dim"),r.set(n.and([s(),u()]),"PermuteNonPrimary");break}case"ELL":{x(),r.set(s(),"Dim"),r.set(n.and([s(),u()]),"Regular");break}case"ELS":{x(),T(),r.set(n.and([s(),d()]),"Ignored"),r.set(m(),"Regular"),r.set(w(),"Ignored");break}case"LL":{x();break}case"F2L":{r.set(s(),"Ignored");break}case"ZBLL":{x(),r.set(s(),"PermuteNonPrimary"),r.set(g(),"Dim"),r.set(n.and([s(),d()]),"Regular");break}case"ZBLS":{x(),r.set(M(),"Regular"),T(),r.set(n.and([s(),d()]),"Ignored");break}case"VLS":{x(),r.set(M(),"Regular"),T();break}case"WVLS":{x(),r.set(M(),"Regular"),r.set(n.and([s(),u()]),"Ignoriented"),r.set(n.and([s(),f()]),"Dim"),r.set(n.and([s(),d()]),"IgnoreNonPrimary");break}case"LS":{x(),r.set(M(),"Regular"),r.set(s(),"Ignored"),r.set(g(),"Dim");break}case"LSOLL":{x(),T(),r.set(M(),"Regular");break}case"LSOCLL":{x(),b(),r.set(n.and([s(),d()]),"IgnoreNonPrimary"),r.set(M(),"Regular");break}case"EO":{r.set(d(),"Ignored"),r.set(u(),"OrientationWithoutPermutation");break}case"EOline":{r.set(d(),"Ignored"),r.set(u(),"OrientationWithoutPermutation"),r.set(n.and(n.moves(["D","M"])),"Regular");break}case"EOcross":{r.set(u(),"OrientationWithoutPermutation"),r.set(n.move("D"),"Regular"),r.set(d(),"Ignored");break}case"CMLL":{r.set(c(),"Dim"),r.set(y(),"Ignored"),r.set(n.and([s(),d()]),"Regular");break}case"L10P":{r.set(n.not(y()),"Dim"),r.set(n.and([d(),s()]),"Regular");break}case"L6E":{r.set(n.not(y()),"Dim");break}case"L6EO":{r.set(n.not(y()),"Dim"),r.set(y(),"ExperimentalOrientationWithoutPermutation2"),r.set(n.and([f(),o()]),"ExperimentalOrientationWithoutPermutation2"),r.set(n.and([n.move("M"),n.move("E")]),"Ignored");break}case"Daisy":{r.set(n.all(),"Ignored"),r.set(f(),"Dim"),r.set(n.and([n.move("D"),f()]),"Regular"),r.set(n.and([n.move("U"),u()]),"IgnoreNonPrimary");break}case"Cross":{r.set(n.all(),"Ignored"),r.set(f(),"Dim"),r.set(n.and([n.move("D"),f()]),"Regular"),r.set(n.and([n.move("D"),u()]),"Regular");break}case"2x2x2":{r.set(n.or(n.moves(["U","F","R"])),"Ignored"),r.set(n.and([n.or(n.moves(["U","F","R"])),f()]),"Dim");break}case"2x2x3":{r.set(n.all(),"Dim"),r.set(n.or(n.moves(["U","F","R"])),"Ignored"),r.set(n.and([n.or(n.moves(["U","F","R"])),f()]),"Dim"),r.set(n.and([n.move("F"),n.not(n.or(n.moves(["U","R"])))]),"Regular");break}case"G1":{r.set(n.all(),"ExperimentalOrientationWithoutPermutation2"),r.set(n.or(n.moves(["E"])),"OrientationWithoutPermutation"),r.set(n.and(n.moves(["E","S"])),"Ignored");break}case"L2C":{r.set(n.or(n.moves(["L","R","B","D"])),"Dim"),r.set(n.not(f()),"Ignored");break}case"PBL":{r.set(n.all(),"Ignored"),r.set(n.or(n.moves(["U","D"])),"PermuteNonPrimary");break}case"FirstBlock":{r.set(n.not(n.and([n.and(n.moves(["L"])),n.not(s())])),"Ignored"),r.set(h("R"),"Dim");break}case"SecondBlock":{r.set(n.not(n.and([n.and(n.moves(["L"])),n.not(s())])),"Ignored"),r.set(n.and([n.and(n.moves(["L"])),n.not(s())]),"Dim"),r.set(n.and([n.and(n.moves(["R"])),n.not(s())]),"Regular");break}case"EODF":{x(),r.set(n.or([w(),n.and([s(),d()])]),"Ignored"),r.set(n.or([n.and([s(),u()]),m()]),"OrientationWithoutPermutation"),r.set(p(["D","F"]),"Regular"),r.set(h("F"),"Regular");break}case"Void Cube":{r.set(f(),"Invisible");break}case"picture":case"invisible":{r.set(n.all(),"Invisible");break}case"centers-only":{r.set(n.not(f()),"Ignored");break}case"opposite-centers":{r.set(n.not(n.and([f(),n.or(n.moves(["U","D"]))])),"Ignored");break}default:console.warn(`Unsupported stickering for ${t.id}: ${e}. Setting all pieces to dim.`),r.set(n.and(n.moves([])),"Dim")}return r}async function lo(t,e){let i=[],r=[];for(let[n,s]of Object.entries(jv))s.groups&&(t in s.groups?i.push(n):e?.use3x3x3Fallbacks&&"3x3x3"in s.groups&&r.push(n));return i.concat(r)}function dt(t){let e=null;return()=>e??=t()}async function Aa(t){return(await Promise.resolve().then(()=>(no(),ro))).getPuzzleGeometryByName(t,{allMoves:!0,orientCenters:!0,addRotations:!0})}async function Sd(t,e,i){let r=await t,n=r.getKPuzzleDefinition(!0);n.name=e;let s=await Promise.resolve().then(()=>(no(),ro)),o=new s.ExperimentalPGNotation(r,r.getOrbitsDef(!0));if(i){let a=new Set(i);for(let[l,c]of Object.entries(n.defaultPattern))a.has(l)&&(c.orientationMod=new Array(c.pieces.length).fill(1))}return new zi(o.remapKPuzzleDefinition(n),{experimentalPGNotation:o})}function vd(t){return new yd(async e=>{let i=await t();e({quantumMoveOrder:r=>i.moveToTransformation(new A(r)).repetitionOrder()})})}async function xd(t){let e=await(t.puzzleSpecificSimplifyOptions??t.puzzleSpecificSimplifyOptionsPromise);return e?{puzzleLoader:{puzzleSpecificSimplifyOptions:e}}:{}}function Ed(t){let i=t.experimentalToTransformation().invert().transformationData.CORNERS;return i.permutation[6]*3+i.orientationDelta[6]}function Zv(t){if(!Kv){let e=["","z","x","z'","x'","x2"].map(r=>ge.fromString(r)),i=new ge("y");for(let r of e){let n=t.algToTransformation(r);for(let s=0;s<4;s++){n=n.applyAlg(i);let o=Ed(n.toKPattern());md[o]={transformation:n.invert(),alg:r.concat(i)}}}}return md}function Qv(t){let e=Ed(t),{transformation:i,alg:r}=Zv(t.kpuzzle)[e];return{normalizedPattern:t.applyTransformation(i),normalizationAlg:r.invert()}}function _d(t,e){return e.ignorePuzzleOrientation&&(t=Qv(t).normalizedPattern),!!t.experimentalToTransformation().isIdentityTransformation()}async function ao(t,e){return(await Promise.resolve().then(()=>(no(),ro))).getPuzzleGeometryByDesc(t,{allMoves:!0,orientCenters:!0,addRotations:!0,...e})}async function Pc(t,e){let i=ao(t,e);return Sd(i,`description: ${t}`)}function wd(t,e){let i=$v++,r=null,n=async()=>r??=Pc(t),s={id:`custom-${i}`,fullName:e?.fullName??`Custom Puzzle (instance #${i})`,kpuzzle:n,svg:async()=>(await ao(t)).generatesvg(),pg:async()=>ao(t),puzzleSpecificSimplifyOptionsPromise:vd(n)};return e?.inventedBy&&(s.inventedBy=e.inventedBy),e?.inventionYear&&(s.inventionYear=e.inventionYear),s}function Md(t){let e=t.patternData.CENTERS.pieces[0],i=t.patternData.CENTERS.pieces[5],r=t.patternData.CENTERS.pieces[1],n=r;return e<r&&n--,i<r&&n--,[e,n]}function ex(){if(!Jv){let t=["","z","x","z'","x'","x2"].map(i=>ge.fromString(i)),e=new ge("y");for(let i of t){let r=Uc.algToTransformation(i);for(let n=0;n<4;n++){r=r.applyAlg(e);let[s,o]=Md(r.toKPattern());gd[s][o]=r.invert()}}}return gd}function tx(t){let[e,i]=Md(t),r=ex()[e][i];return t.applyTransformation(r)}function ix(t,e){return e.ignorePuzzleOrientation&&(t=tx(t)),e.ignoreCenterOrientation&&(t=new Sa(t.kpuzzle,{EDGES:t.patternData.EDGES,CORNERS:t.patternData.CORNERS,CENTERS:{pieces:t.patternData.CENTERS.pieces,orientation:new Array(6).fill(0)}})),!!t.experimentalToTransformation()?.isIdentityTransformation()}var yd,Sn,bi,Rt,Yn,Xv,so,yn,oo,qv,Ic,kc,ud,pd,Bi,Br,jv,yr,Zn,co,md,Kv,$v,Uc,gd,Jv,Qn=C(()=>{to();Fr();yd=class Ra extends Promise{constructor(e){super(i=>{i()}),this._executor=e}static from(e){return new Ra(i=>{i(e())})}static resolve(e){return new Ra(i=>{i(e)})}static reject(e){return new Ra((i,r)=>{r(e)})}then(e,i){return this._promise=this._promise||new Promise(this._executor),this._promise.then(e,i)}catch(e){return this._promise=this._promise||new Promise(this._executor),this._promise.catch(e)}};Sn=class{stickerings=new Map;constructor(t,e){for(let i of t.definition.orbits)this.stickerings.set(i.orbitName,new Array(i.numPieces).fill(e))}},bi="regular",Rt="ignored",Yn="oriented",Xv="experimentalOriented2",so="invisible",yn="dim",oo="mystery",qv={Regular:{facelets:[bi,bi,bi,bi,bi]},Ignored:{facelets:[Rt,Rt,Rt,Rt,Rt]},OrientationStickers:{facelets:[Yn,Yn,Yn,Yn,Yn]},IgnoreNonPrimary:{facelets:[bi,Rt,Rt,Rt,Rt]},Invisible:{facelets:[so,so,so,so,so]},PermuteNonPrimary:{facelets:[yn,bi,bi,bi,bi]},Dim:{facelets:[yn,yn,yn,yn,yn]},Ignoriented:{facelets:[yn,Rt,Rt,Rt,Rt]},OrientationWithoutPermutation:{facelets:[Yn,Rt,Rt,Rt,Rt]},ExperimentalOrientationWithoutPermutation2:{facelets:[Xv,Rt,Rt,Rt,Rt]},Mystery:{facelets:[oo,oo,oo,oo,oo]}};Ic=class extends Sn{constructor(t){super(t,"Regular")}set(t,e){for(let[i,r]of this.stickerings.entries())for(let n=0;n<r.length;n++)t.stickerings.get(i)[n]&&(r[n]=e);return this}toStickeringMask(){let t={orbits:{}};for(let[e,i]of this.stickerings.entries()){let r=[],n={pieces:r};t.orbits[e]=n;for(let s of i)r.push(Nc(s))}return t}},kc=class{constructor(t){this.kpuzzle=t}and(t){let e=new Sn(this.kpuzzle,!1);for(let i of this.kpuzzle.definition.orbits)e:for(let r=0;r<i.numPieces;r++){e.stickerings.get(i.orbitName)[r]=!0;for(let n of t)if(!n.stickerings.get(i.orbitName)[r]){e.stickerings.get(i.orbitName)[r]=!1;continue e}}return e}or(t){let e=new Sn(this.kpuzzle,!1);for(let i of this.kpuzzle.definition.orbits)e:for(let r=0;r<i.numPieces;r++){e.stickerings.get(i.orbitName)[r]=!1;for(let n of t)if(n.stickerings.get(i.orbitName)[r]){e.stickerings.get(i.orbitName)[r]=!0;continue e}}return e}not(t){let e=new Sn(this.kpuzzle,!1);for(let i of this.kpuzzle.definition.orbits)for(let r=0;r<i.numPieces;r++)e.stickerings.get(i.orbitName)[r]=!t.stickerings.get(i.orbitName)[r];return e}all(){return this.and(this.moves([]))}move(t){let e=this.kpuzzle.moveToTransformation(t),i=new Sn(this.kpuzzle,!1);for(let r of this.kpuzzle.definition.orbits)for(let n=0;n<r.numPieces;n++)(e.transformationData[r.orbitName].permutation[n]!==n||e.transformationData[r.orbitName].orientationDelta[n]!==0)&&(i.stickerings.get(r.orbitName)[n]=!0);return i}moves(t){return t.map(e=>this.move(e))}orbits(t){let e=new Sn(this.kpuzzle,!1);for(let i of t)e.stickerings.get(i).fill(!0);return e}orbitPrefix(t){let e=new Sn(this.kpuzzle,!1);for(let i of this.kpuzzle.definition.orbits)i.orbitName.startsWith(t)&&e.stickerings.get(i.orbitName).fill(!0);return e}},ud="Last Layer",pd="Last Slot",Bi={"3x3x3":ud,megaminx:ud},Br={"3x3x3":pd,megaminx:pd},jv={full:{groups:{"3x3x3":"Stickering",megaminx:"Stickering"}},OLL:{groups:Bi},PLL:{groups:Bi},LL:{groups:Bi},EOLL:{groups:Bi},COLL:{groups:Bi},OCLL:{groups:Bi},CPLL:{groups:Bi},CLL:{groups:Bi},EPLL:{groups:Bi},ELL:{groups:Bi},ZBLL:{groups:Bi},LS:{groups:Br},LSOLL:{groups:Br},LSOCLL:{groups:Br},ELS:{groups:Br},CLS:{groups:Br},ZBLS:{groups:Br},VLS:{groups:Br},WVLS:{groups:Br},F2L:{groups:{"3x3x3":"CFOP (Fridrich)"}},Daisy:{groups:{"3x3x3":"CFOP (Fridrich)"}},Cross:{groups:{"3x3x3":"CFOP (Fridrich)"}},EO:{groups:{"3x3x3":"ZZ"}},EOline:{groups:{"3x3x3":"ZZ"}},EOcross:{groups:{"3x3x3":"ZZ"}},FirstBlock:{groups:{"3x3x3":"Roux"}},SecondBlock:{groups:{"3x3x3":"Roux"}},CMLL:{groups:{"3x3x3":"Roux"}},L10P:{groups:{"3x3x3":"Roux"}},L6E:{groups:{"3x3x3":"Roux"}},L6EO:{groups:{"3x3x3":"Roux"}},"2x2x2":{groups:{"3x3x3":"Petrus"}},"2x2x3":{groups:{"3x3x3":"Petrus"}},EODF:{groups:{"3x3x3":"Nautilus"}},G1:{groups:{"3x3x3":"FMC"}},L2C:{groups:{"4x4x4":"Reduction","5x5x5":"Reduction","6x6x6":"Reduction"}},PBL:{groups:{"2x2x2":"Ortega"}},"Void Cube":{groups:{"3x3x3":"Miscellaneous"}},invisible:{groups:{"3x3x3":"Miscellaneous"}},picture:{groups:{"3x3x3":"Miscellaneous"}},"centers-only":{groups:{"3x3x3":"Miscellaneous"}},"opposite-centers":{groups:{"4x4x4":"Reduction"}},"experimental-centers-U":{},"experimental-centers-U-D":{},"experimental-centers-U-L-D":{},"experimental-centers-U-L-B-D":{},"experimental-centers":{},"experimental-fto-fc":{groups:{fto:"Bencisco"}},"experimental-fto-f2t":{groups:{fto:"Bencisco"}},"experimental-fto-sc":{groups:{fto:"Bencisco"}},"experimental-fto-l2c":{groups:{fto:"Bencisco"}},"experimental-fto-lbt":{groups:{fto:"Bencisco"}},"experimental-fto-l3t":{groups:{fto:"Bencisco"}}};yr=class{pgId;id;fullName;inventedBy;inventionYear;#e;constructor(t){this.pgId=t.pgID,this.id=t.id,this.fullName=t.fullName,this.inventedBy=t.inventedBy,this.inventionYear=t.inventionYear,this.#e=t.setOrientationModTo1ForPiecesOfOrbits}#t;pg(){return this.#t??=Aa(this.pgId??this.id)}#i;kpuzzle(){return this.#i??=Sd(this.pg(),this.id,this.#e)}#r;svg(){return this.#r??=(async()=>(await this.pg()).generatesvg())()}puzzleSpecificSimplifyOptionsPromise=vd(this.kpuzzle.bind(this))},Zn=class extends yr{stickeringMask(t){return Kn(this,t)}stickerings=()=>lo(this.id,{use3x3x3Fallbacks:!0})};co={name:"3x3x3",orbits:[{orbitName:"EDGES",numPieces:12,numOrientations:2},{orbitName:"CORNERS",numPieces:8,numOrientations:3},{orbitName:"CENTERS",numPieces:6,numOrientations:4}],defaultPattern:{EDGES:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{pieces:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{pieces:[0,1,2,3,4,5],orientation:[0,0,0,0,0,0],orientationMod:[1,1,1,1,1,1]}},moves:{U:{EDGES:{permutation:[1,2,3,0,4,5,6,7,8,9,10,11],orientationDelta:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[1,2,3,0,4,5,6,7],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientationDelta:[1,0,0,0,0,0]}},y:{EDGES:{permutation:[1,2,3,0,5,6,7,4,10,8,11,9],orientationDelta:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[1,2,3,0,7,4,5,6],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,2,3,4,1,5],orientationDelta:[1,0,0,0,0,3]}},x:{EDGES:{permutation:[4,8,0,9,6,10,2,11,5,7,1,3],orientationDelta:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[4,0,3,5,7,6,2,1],orientationDelta:[2,1,2,1,1,2,1,2]},CENTERS:{permutation:[2,1,5,3,0,4],orientationDelta:[0,3,0,1,2,2]}},L:{EDGES:{permutation:[0,1,2,11,4,5,6,9,8,3,10,7],orientationDelta:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[0,1,6,2,4,3,5,7],orientationDelta:[0,0,2,1,0,2,1,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientationDelta:[0,1,0,0,0,0]}},F:{EDGES:{permutation:[9,1,2,3,8,5,6,7,0,4,10,11],orientationDelta:[1,0,0,0,1,0,0,0,1,1,0,0]},CORNERS:{permutation:[3,1,2,5,0,4,6,7],orientationDelta:[1,0,0,2,2,1,0,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientationDelta:[0,0,1,0,0,0]}},R:{EDGES:{permutation:[0,8,2,3,4,10,6,7,5,9,1,11],orientationDelta:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[4,0,2,3,7,5,6,1],orientationDelta:[2,1,0,0,1,0,0,2]},CENTERS:{permutation:[0,1,2,3,4,5],orientationDelta:[0,0,0,1,0,0]}},B:{EDGES:{permutation:[0,1,10,3,4,5,11,7,8,9,6,2],orientationDelta:[0,0,1,0,0,0,1,0,0,0,1,1]},CORNERS:{permutation:[0,7,1,3,4,5,2,6],orientationDelta:[0,2,1,0,0,0,2,1]},CENTERS:{permutation:[0,1,2,3,4,5],orientationDelta:[0,0,0,0,1,0]}},D:{EDGES:{permutation:[0,1,2,3,7,4,5,6,8,9,10,11],orientationDelta:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[0,1,2,3,5,6,7,4],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientationDelta:[0,0,0,0,0,1]}},z:{EDGES:{permutation:[9,3,11,7,8,1,10,5,0,4,2,6],orientationDelta:[1,1,1,1,1,1,1,1,1,1,1,1]},CORNERS:{permutation:[3,2,6,5,0,4,7,1],orientationDelta:[1,2,1,2,2,1,2,1]},CENTERS:{permutation:[1,5,2,0,4,3],orientationDelta:[1,1,1,1,3,1]}},M:{EDGES:{permutation:[2,1,6,3,0,5,4,7,8,9,10,11],orientationDelta:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[4,1,0,3,5,2],orientationDelta:[2,0,0,0,2,0]}},E:{EDGES:{permutation:[0,1,2,3,4,5,6,7,9,11,8,10],orientationDelta:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,4,1,2,3,5],orientationDelta:[0,0,0,0,0,0]}},S:{EDGES:{permutation:[0,3,2,7,4,1,6,5,8,9,10,11],orientationDelta:[0,1,0,1,0,1,0,1,0,0,0,0]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[1,5,2,0,4,3],orientationDelta:[1,1,0,1,0,1]}},u:{EDGES:{permutation:[1,2,3,0,4,5,6,7,10,8,11,9],orientationDelta:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[1,2,3,0,4,5,6,7],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,2,3,4,1,5],orientationDelta:[1,0,0,0,0,0]}},l:{EDGES:{permutation:[2,1,6,11,0,5,4,9,8,3,10,7],orientationDelta:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[0,1,6,2,4,3,5,7],orientationDelta:[0,0,2,1,0,2,1,0]},CENTERS:{permutation:[4,1,0,3,5,2],orientationDelta:[2,1,0,0,2,0]}},f:{EDGES:{permutation:[9,3,2,7,8,1,6,5,0,4,10,11],orientationDelta:[1,1,0,1,1,1,0,1,1,1,0,0]},CORNERS:{permutation:[3,1,2,5,0,4,6,7],orientationDelta:[1,0,0,2,2,1,0,0]},CENTERS:{permutation:[1,5,2,0,4,3],orientationDelta:[1,1,1,1,0,1]}},r:{EDGES:{permutation:[4,8,0,3,6,10,2,7,5,9,1,11],orientationDelta:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[4,0,2,3,7,5,6,1],orientationDelta:[2,1,0,0,1,0,0,2]},CENTERS:{permutation:[2,1,5,3,0,4],orientationDelta:[0,0,0,1,2,2]}},b:{EDGES:{permutation:[0,5,10,1,4,7,11,3,8,9,6,2],orientationDelta:[0,1,1,1,0,1,1,1,0,0,1,1]},CORNERS:{permutation:[0,7,1,3,4,5,2,6],orientationDelta:[0,2,1,0,0,0,2,1]},CENTERS:{permutation:[3,0,2,5,4,1],orientationDelta:[3,3,0,3,1,3]}},d:{EDGES:{permutation:[0,1,2,3,7,4,5,6,9,11,8,10],orientationDelta:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[0,1,2,3,5,6,7,4],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,4,1,2,3,5],orientationDelta:[0,0,0,0,0,1]}}},derivedMoves:{Uw:"u",Lw:"l",Fw:"f",Rw:"r",Bw:"b",Dw:"d",Uv:"y",Lv:"x'",Fv:"z",Rv:"x",Bv:"z'",Dv:"y'","2U":"u U'","2L":"l L'","2F":"f F'","2R":"r R'","2B":"b B'","2D":"d D'"}};md=new Array(24),Kv=!1;$v=1;Uc=new zi(co);co.experimentalIsPatternSolved=ix;gd=new Array(6).fill(0).map(()=>new Array(6)),Jv=!1});var gi={};dn(gi,{clockJSON:()=>ox,clockSVG:()=>ax,cube2x2x2JSON:()=>nx,cube2x2x2LLSVG:()=>rx,cube2x2x2SVG:()=>sx,melindas2x2x2x2OrbitJSON:()=>dx,melindas2x2x2x2OrbitSVG:()=>ux,pyraminxSVG:()=>lx,sq1HyperOrbitJSON:()=>cx,sq1HyperOrbitSVG:()=>fx,triQuadJSON:()=>px,triQuadSVG:()=>mx});var rx,nx,sx,vn,Gr,$n,ox,ax,lx,cx,fx,Pt,hx,dx,ux,px,mx,yi=C(()=>{rx=`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN"
       "http://www.w3.org/TR/2001/REC-SVG-20050904/DTD/svg11.dtd">
    <svg width="288px" height="288px" viewBox="-16 -16 288 288" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
       <title>2x2x2 LL</title>
  <defs>
    <g id="sticker">
        <rect x="0" y="0" width="1" height="1" stroke="black" stroke-width="0.04px" />
    </g>
  </defs>
  <g id="2x2x2-LL" stroke="#000000" stroke-width="4" style="none" stroke-linejoin="round">
    <rect    id="CORNERS-l0-o0" style="fill: white" x="128" y="128" width="76" height="76"></rect>
    <polygon id="CORNERS-l0-o1" style="fill: red" points="204 128 252 128 252 252 204 204"></polygon>
    <polygon id="CORNERS-l0-o2" style="fill: limegreen" transform="translate(206, 238) scale(1, -1) rotate(-90) translate(-206, -238) " points="172 160 220 160 220 284 172 236"></polygon>
    <rect    id="CORNERS-l1-o0" style="fill: white" x="128" y="52" width="76" height="76"></rect>
    <polygon id="CORNERS-l1-o1" style="fill: #26f" transform="translate(206, 18) rotate(-90) translate(-206, -18) " points="172 -60 220 -60 220 64 172 16"></polygon>
    <polygon id="CORNERS-l1-o2" style="fill: red" transform="translate(238, 50) scale(1, -1) translate(-238, -50) " points="204 -28 252 -28 252 96 204 48"></polygon>
    <rect    id="CORNERS-l2-o0" style="fill: white" x="52" y="52" width="76" height="76"></rect>
    <polygon id="CORNERS-l2-o1" style="fill: orange" transform="translate(18, 50) scale(-1, -1) translate(-18, -50) " points="-16 -28 32 -28 32 96 -16 48"></polygon>
    <polygon id="CORNERS-l2-o2" style="fill: #26f" transform="translate(50, 18) scale(1, -1) rotate(90) translate(-50, -18) " points="16 -60 64 -60 64 64 16 16"></polygon>
    <rect    id="CORNERS-l3-o0" style="fill: white" x="52" y="128" width="76" height="76"></rect>
    <polygon id="CORNERS-l3-o1" style="fill: limegreen" transform="translate(50, 238) rotate(90) translate(-50, -238) " points="16 160 64 160 64 284 16 236"></polygon>
    <polygon id="CORNERS-l3-o2" style="fill: orange" transform="translate(18, 206) scale(-1, 1) translate(-18, -206) " points="-16 128 32 128 32 252 -16 204"></polygon>
  </g>
  <g style="opacity: 0">
    <use id="CORNERS-l4-o0" href="#sticker" style="fill: yellow"/>
    <use id="CORNERS-l4-o1" href="#sticker" style="fill: limegreen"/>
    <use id="CORNERS-l4-o2" href="#sticker" style="fill: red"/>

    <use id="CORNERS-l5-o0" href="#sticker" style="fill: yellow"/>
    <use id="CORNERS-l5-o1" href="#sticker" style="fill: orange"/>
    <use id="CORNERS-l5-o2" href="#sticker" style="fill: limegreen"/>

    <use id="CORNERS-l6-o0" href="#sticker" style="fill: yellow"/>
    <use id="CORNERS-l6-o1" href="#sticker" style="fill: #26f"/>
    <use id="CORNERS-l6-o2" href="#sticker"  style="fill: orange"/>

    <use id="CORNERS-l7-o0" href="#sticker" style="fill: yellow"/>
    <use id="CORNERS-l7-o1" href="#sticker" style="fill: red"/>
    <use id="CORNERS-l7-o2" href="#sticker" style="fill: #26f"/>
  </g>
</svg>`,nx={name:"2x2x2",orbits:[{orbitName:"CORNERS",numPieces:8,numOrientations:3}],defaultPattern:{CORNERS:{pieces:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]}},moves:{U:{CORNERS:{permutation:[1,2,3,0,4,5,6,7],orientationDelta:[0,0,0,0,0,0,0,0]}},x:{CORNERS:{permutation:[4,0,3,5,7,6,2,1],orientationDelta:[2,1,2,1,1,2,1,2]}},y:{CORNERS:{permutation:[1,2,3,0,7,4,5,6],orientationDelta:[0,0,0,0,0,0,0,0]}}},derivedMoves:{z:"[x: y]",L:"[z: U]",F:"[x: U]",R:"[z': U]",B:"[x': U]",D:"[x2: U]",Uv:"y",Lv:"x'",Fv:"z",Rv:"x",Bv:"z'",Dv:"y'"}},sx=`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN"
       "http://www.w3.org/TR/2001/REC-SVG-20050904/DTD/svg11.dtd">
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 530 394" preserveAspectRatio="xMidYMid meet">
  <title>2x2x2</title>
  <defs>
    <g id="sticker">
        <rect x="0" y="0" width="1" height="1" stroke="black" stroke-width="0.04px" />
    </g>
  </defs>
  <g id="puzzle" transform="translate(5, 5) scale(60)">
    <use id="CORNERS-l0-o0" href="#sticker" transform="translate(3.2, 1)" style="fill: white"/>
    <use id="CORNERS-l0-o1" href="#sticker" transform="translate(4.4, 2.2)" style="fill: red"/>
    <use id="CORNERS-l0-o2" href="#sticker" transform="translate(3.2, 2.2)" style="fill: limegreen"/>

    <use id="CORNERS-l1-o0" href="#sticker" transform="translate(3.2, 0)" style="fill: white"/>
    <use id="CORNERS-l1-o1" href="#sticker" transform="translate(6.6, 2.2)" style="fill: #26f"/>
    <use id="CORNERS-l1-o2" href="#sticker" transform="translate(5.4, 2.2)" style="fill: red"/>

    <use id="CORNERS-l2-o0" href="#sticker" transform="translate(2.2, 0)" style="fill: white"/>
    <use id="CORNERS-l2-o1" href="#sticker" transform="translate(0, 2.2)" style="fill: orange"/>
    <use id="CORNERS-l2-o2" href="#sticker" transform="translate(7.6, 2.2)" style="fill: #26f"/>

    <use id="CORNERS-l3-o0" href="#sticker" transform="translate(2.2, 1)" style="fill: white"/>
    <use id="CORNERS-l3-o1" href="#sticker" transform="translate(2.2, 2.2)" style="fill: limegreen"/>
    <use id="CORNERS-l3-o2" href="#sticker" transform="translate(1, 2.2)" style="fill: orange"/>

    <use id="CORNERS-l4-o0" href="#sticker" transform="translate(3.2, 4.4)" style="fill: yellow"/>
    <use id="CORNERS-l4-o1" href="#sticker" transform="translate(3.2, 3.2)" style="fill: limegreen"/>
    <use id="CORNERS-l4-o2" href="#sticker" transform="translate(4.4, 3.2)" style="fill: red"/>

    <use id="CORNERS-l5-o0" href="#sticker" transform="translate(2.2, 4.4)" style="fill: yellow"/>
    <use id="CORNERS-l5-o1" href="#sticker" transform="translate(1, 3.2)" style="fill: orange"/>
    <use id="CORNERS-l5-o2" href="#sticker" transform="translate(2.2, 3.2)" style="fill: limegreen"/>

    <use id="CORNERS-l6-o0" href="#sticker" transform="translate(2.2, 5.4)" style="fill: yellow"/>
    <use id="CORNERS-l6-o1" href="#sticker" transform="translate(7.6, 3.2)" style="fill: #26f"/>
    <use id="CORNERS-l6-o2" href="#sticker" transform="translate(0, 3.2)"  style="fill: orange"/>

    <use id="CORNERS-l7-o0" href="#sticker" transform="translate(3.2, 5.4)" style="fill: yellow"/>
    <use id="CORNERS-l7-o1" href="#sticker" transform="translate(5.4, 3.2)" style="fill: red"/>
    <use id="CORNERS-l7-o2" href="#sticker" transform="translate(6.6, 3.2)" style="fill: #26f"/>
  </g>

</svg>`,vn=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],Gr=new Array(18).fill(0),$n={permutation:vn,orientationDelta:Gr},ox={name:"clock",orbits:[{orbitName:"DIALS",numPieces:18,numOrientations:12},{orbitName:"FACES",numPieces:18,numOrientations:1},{orbitName:"FRAME",numPieces:1,numOrientations:2},{orbitName:"HOUR_MARKS",numPieces:18,numOrientations:4}],defaultPattern:{DIALS:{pieces:vn,orientation:Gr},FACES:{pieces:vn,orientation:Gr},FRAME:{pieces:[0],orientation:[0]},HOUR_MARKS:{pieces:vn,orientation:Gr}},moves:{UL_PLUS_:{DIALS:{permutation:vn,orientationDelta:[1,1,0,1,1,0,0,0,0,0,0,11,0,0,0,0,0,0]},FACES:$n,FRAME:{permutation:[0],orientationDelta:[0]},HOUR_MARKS:$n},U_PLUS_:{DIALS:{permutation:vn,orientationDelta:[1,1,1,1,1,1,0,0,0,11,0,11,0,0,0,0,0,0]},FACES:$n,FRAME:{permutation:[0],orientationDelta:[0]},HOUR_MARKS:$n},ALL_PLUS_:{DIALS:{permutation:vn,orientationDelta:[1,1,1,1,1,1,1,1,1,11,0,11,0,0,0,11,0,11]},FACES:$n,FRAME:{permutation:[0],orientationDelta:[0]},HOUR_MARKS:$n},y2:{DIALS:{permutation:[9,10,11,12,13,14,15,16,17,0,1,2,3,4,5,6,7,8],orientationDelta:Gr},FACES:{permutation:[9,10,11,12,13,14,15,16,17,0,1,2,3,4,5,6,7,8],orientationDelta:Gr},FRAME:{permutation:[0],orientationDelta:[1]},HOUR_MARKS:{permutation:[9,10,11,12,13,14,15,16,17,0,1,2,3,4,5,6,7,8],orientationDelta:Gr}},z:{DIALS:{permutation:[6,3,0,7,4,1,8,5,2,11,14,17,10,13,16,9,12,15],orientationDelta:[3,3,3,3,3,3,3,3,3,9,9,9,9,9,9,9,9,9]},FACES:{permutation:[6,3,0,7,4,1,8,5,2,11,14,17,10,13,16,9,12,15],orientationDelta:Gr},FRAME:{permutation:[0],orientationDelta:[0]},HOUR_MARKS:{permutation:[6,3,0,7,4,1,8,5,2,11,14,17,10,13,16,9,12,15],orientationDelta:[1,1,1,1,1,1,1,1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1]}}},derivedMoves:{UR_PLUS_:"[z': UL_PLUS_]",DR_PLUS_:"[z2: UL_PLUS_]",DL_PLUS_:"[z: UL_PLUS_]",R_PLUS_:"[z': U_PLUS_]",D_PLUS_:"[z2: U_PLUS_]",L_PLUS_:"[z: U_PLUS_]",F_PLUS_:"ALL_PLUS_",x2:"y2 z2",ULw_PLUS_:"U_PLUS_ L_PLUS_ UL_PLUS_'",URw_PLUS_:"U_PLUS_ R_PLUS_ UR_PLUS_'",DLw_PLUS_:"D_PLUS_ L_PLUS_ DL_PLUS_'",DRw_PLUS_:"D_PLUS_ R_PLUS_ DR_PLUS_'",BULw_PLUS_:"[y2: URw_PLUS_']",BURw_PLUS_:"[y2: ULw_PLUS_']",BDLw_PLUS_:"[y2: DRw_PLUS_']",BDRw_PLUS_:"[y2: DLw_PLUS_']",B_PLUS_:"[y2: ALL_PLUS_']",BU_PLUS_:"[y2: U_PLUS_']",BR_PLUS_:"[y2: L_PLUS_']",BD_PLUS_:"[y2: D_PLUS_']",BL_PLUS_:"[y2: R_PLUS_']",BUR_PLUS_:"[y2: UL_PLUS_']",BUL_PLUS_:"[y2: UR_PLUS_']",BDL_PLUS_:"[y2: DR_PLUS_']",BDR_PLUS_:"[y2: DL_PLUS_']",MUL_PLUS_:"UR_PLUS_' DL_PLUS_' U_PLUS_ R_PLUS_ D_PLUS_ L_PLUS_ ALL_PLUS_'",MUR_PLUS_:"UL_PLUS_' DR_PLUS_' U_PLUS_ L_PLUS_ D_PLUS_ R_PLUS_ ALL_PLUS_'",MDR_PLUS_:"MUL_PLUS_",MDL_PLUS_:"MUR_PLUS_",BMUL_PLUS_:"[y2: MUR_PLUS_']",BMUR_PLUS_:"[y2: MUL_PLUS_']",BMDR_PLUS_:"[y2: MDL_PLUS_']",BMDL_PLUS_:"[y2: MDR_PLUS_']",UL:".",UR:".",DL:".",DR:"."}},ax=`<?xml version="1.0" encoding="UTF-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 480 240" preserveAspectRatio="xMidYMid meet">
  <title>clock</title>
  <defs>
    <g id="hand" transform="translate(-20, -20)">
      <path d="M19.9995197,2.22079449 L23.8791657,19.0203611 C23.9580836,19.3338406 24,19.6620253 24,20 C24,22.209139 22.209139,24 20,24 C17.790861,24 16,22.209139 16,20 C16,19.6620253 16.0419164,19.3338406 16.1208343,19.0203611 L19.9995197,2.22079449 Z"></path>
    </g>
    <g id="cardinal_hour">
      <circle cx="0" cy="-24" r="3"></circle>
    </g>
    <g id="background_cardinal_hours" style="fill: #77889999">
      <circle cx="0" cy="24" r="1.5"></circle>
      <circle cx="-24" cy="0" r="1.5"></circle>
      <circle cx="24" cy="0" r="1.5"></circle>
      <circle cx="0" cy="-24" r="1.5"></circle>
    </g>
    <g id="background_face_hours">
      <g>
        <use href="#background_cardinal_hours"/>
      </g>
      <g transform="rotate(30)">
        <use href="#background_cardinal_hours"/>
      </g>
      <g  transform="rotate(60)">
        <use href="#background_cardinal_hours"/>
      </g>
    </g>
    <g id="peg">
      <circle id="PEG4" cx="0" cy="0" r="8"></circle>
    </g>
    <g id="frame" transform="translate(-24, -24)">
      <path stroke="#000000" d="M120,20 C137.495665,20 153.941932,24.4930026 168.247913,32.3881183 C171.855881,30.8514056 175.828512,30 180,30 C196.568542,30 210,43.4314575 210,60 C210,64.1714878 209.148594,68.1441192 207.610077,71.7536009 C215.506997,86.0580678 220,102.504335 220,120 C220,137.495665 215.506997,153.941932 207.611882,168.247913 C209.148594,171.855881 210,175.828512 210,180 C210,196.568542 196.568542,210 180,210 C175.828512,210 171.855881,209.148594 168.246399,207.610077 C153.941932,215.506997 137.495665,220 120,220 C102.504335,220 86.0580678,215.506997 71.7520869,207.611882 C68.1441192,209.148594 64.1714878,210 60,210 C43.4314575,210 30,196.568542 30,180 C30,175.828512 30.8514056,171.855881 32.3899234,168.246399 C24.4930026,153.941932 20,137.495665 20,120 C20,102.504335 24.4930026,86.0580678 32.3881183,71.7520869 C30.8514056,68.1441192 30,64.1714878 30,60 C30,43.4314575 43.4314575,30 60,30 C64.1714878,30 68.1441192,30.8514056 71.7536009,32.3899234 C86.0580678,24.4930026 102.504335,20 120,20 Z"></path>
    </g>
  </defs>
  <g>
    <g transform="translate(24, 24)">
      <use href="#frame" id="FRAME-l0-o0" style="fill: #113366"/>
      <use href="#peg" transform="translate(66, 66)" style="fill: #446699"/>
      <use href="#peg" transform="translate(126, 66)" style="fill: #446699"/>
      <use href="#peg" transform="translate(126, 126)" style="fill: #446699"/>
      <use href="#peg" transform="translate(66, 126)" style="fill: #446699"/>

      <g transform="translate(36, 36)">
        <circle id="FACES-l0-o0" stroke="#000000" style="fill: #CCDDEE" r="20"></circle>
        <use href="#background_face_hours"/>
        <g>
          <use id="HOUR_MARKS-l0-o0" href="#cardinal_hour" transform="rotate(0)" style="fill: #FFCC44"/>
          <use id="HOUR_MARKS-l0-o1" href="#cardinal_hour" transform="rotate(90)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l0-o2" href="#cardinal_hour" transform="rotate(180)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l0-o3" href="#cardinal_hour" transform="rotate(270)" style="fill: #0000"/>
        </g>
        <g>
          <use id="DIALS-l0-o0"  href="#hand" transform="rotate(0)" style="fill: #CC0000"/>
          <use id="DIALS-l0-o1"  href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l0-o2"  href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l0-o3"  href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l0-o4"  href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l0-o5"  href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l0-o6"  href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l0-o7"  href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l0-o8"  href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l0-o9"  href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l0-o10" href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l0-o11" href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 36)">
        <circle id="FACES-l1-o0" stroke="#000000" style="fill: #CCDDEE" r="20"></circle>
        <use href="#background_face_hours"/>
        <g>
          <use id="HOUR_MARKS-l1-o0" href="#cardinal_hour" transform="rotate(0)" style="fill: #FFCC44"/>
          <use id="HOUR_MARKS-l1-o1" href="#cardinal_hour" transform="rotate(90)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l1-o2" href="#cardinal_hour" transform="rotate(180)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l1-o3" href="#cardinal_hour" transform="rotate(270)" style="fill: #0000"/>
        </g>
        <g>
          <use id="DIALS-l1-o0"  href="#hand" transform="rotate(0)" style="fill: #CC0000"/>
          <use id="DIALS-l1-o1"  href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l1-o2"  href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l1-o3"  href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l1-o4"  href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l1-o5"  href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l1-o6"  href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l1-o7"  href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l1-o8"  href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l1-o9"  href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l1-o10" href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l1-o11" href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 36)">
        <circle id="FACES-l2-o0" stroke="#000000" style="fill: #CCDDEE" r="20"></circle>
        <use href="#background_face_hours"/>
        <g>
          <use id="HOUR_MARKS-l2-o0" href="#cardinal_hour" transform="rotate(0)" style="fill: #FFCC44"/>
          <use id="HOUR_MARKS-l2-o1" href="#cardinal_hour" transform="rotate(90)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l2-o2" href="#cardinal_hour" transform="rotate(180)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l2-o3" href="#cardinal_hour" transform="rotate(270)" style="fill: #0000"/>
        </g>
        <g>
          <use id="DIALS-l2-o0"  href="#hand" transform="rotate(0)" style="fill: #CC0000"/>
          <use id="DIALS-l2-o1"  href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l2-o2"  href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l2-o3"  href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l2-o4"  href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l2-o5"  href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l2-o6"  href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l2-o7"  href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l2-o8"  href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l2-o9"  href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l2-o10" href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l2-o11" href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(36, 96)">
        <circle id="FACES-l3-o0" stroke="#000000" style="fill: #CCDDEE" r="20"></circle>
        <use href="#background_face_hours"/>
        <g>
          <use id="HOUR_MARKS-l3-o0" href="#cardinal_hour" transform="rotate(0)" style="fill: #FFCC44"/>
          <use id="HOUR_MARKS-l3-o1" href="#cardinal_hour" transform="rotate(90)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l3-o2" href="#cardinal_hour" transform="rotate(180)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l3-o3" href="#cardinal_hour" transform="rotate(270)" style="fill: #0000"/>
        </g>
        <g>
          <use id="DIALS-l3-o0"  href="#hand" transform="rotate(0)" style="fill: #CC0000"/>
          <use id="DIALS-l3-o1"  href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l3-o2"  href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l3-o3"  href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l3-o4"  href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l3-o5"  href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l3-o6"  href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l3-o7"  href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l3-o8"  href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l3-o9"  href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l3-o10" href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l3-o11" href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 96)">
        <circle id="FACES-l4-o0" stroke="#000000" style="fill: #CCDDEE" r="20"></circle>
        <use href="#background_face_hours"/>
        <g>
          <use id="HOUR_MARKS-l4-o0" href="#cardinal_hour" transform="rotate(0)" style="fill: #FFCC44"/>
          <use id="HOUR_MARKS-l4-o1" href="#cardinal_hour" transform="rotate(90)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l4-o2" href="#cardinal_hour" transform="rotate(180)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l4-o3" href="#cardinal_hour" transform="rotate(270)" style="fill: #0000"/>
        </g>
        <g>
          <use id="DIALS-l4-o0"  href="#hand" transform="rotate(0)" style="fill: #CC0000"/>
          <use id="DIALS-l4-o1"  href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l4-o2"  href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l4-o3"  href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l4-o4"  href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l4-o5"  href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l4-o6"  href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l4-o7"  href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l4-o8"  href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l4-o9"  href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l4-o10" href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l4-o11" href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 96)">
        <circle id="FACES-l5-o0" stroke="#000000" style="fill: #CCDDEE" r="20"></circle>
        <use href="#background_face_hours"/>
        <g>
          <use id="HOUR_MARKS-l5-o0" href="#cardinal_hour" transform="rotate(0)" style="fill: #FFCC44"/>
          <use id="HOUR_MARKS-l5-o1" href="#cardinal_hour" transform="rotate(90)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l5-o2" href="#cardinal_hour" transform="rotate(180)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l5-o3" href="#cardinal_hour" transform="rotate(270)" style="fill: #0000"/>
        </g>
        <g>
          <use id="DIALS-l5-o0"  href="#hand" transform="rotate(0)" style="fill: #CC0000"/>
          <use id="DIALS-l5-o1"  href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l5-o2"  href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l5-o3"  href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l5-o4"  href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l5-o5"  href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l5-o6"  href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l5-o7"  href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l5-o8"  href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l5-o9"  href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l5-o10" href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l5-o11" href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(36, 156)">
        <circle id="FACES-l6-o0" stroke="#000000" style="fill: #CCDDEE" r="20"></circle>
        <use href="#background_face_hours"/>
        <g>
          <use id="HOUR_MARKS-l6-o0" href="#cardinal_hour" transform="rotate(0)" style="fill: #FFCC44"/>
          <use id="HOUR_MARKS-l6-o1" href="#cardinal_hour" transform="rotate(90)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l6-o2" href="#cardinal_hour" transform="rotate(180)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l6-o3" href="#cardinal_hour" transform="rotate(270)" style="fill: #0000"/>
        </g>
        <g>
          <use id="DIALS-l6-o0"  href="#hand" transform="rotate(0)" style="fill: #CC0000"/>
          <use id="DIALS-l6-o1"  href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l6-o2"  href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l6-o3"  href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l6-o4"  href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l6-o5"  href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l6-o6"  href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l6-o7"  href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l6-o8"  href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l6-o9"  href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l6-o10" href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l6-o11" href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 156)">
        <circle id="FACES-l7-o0" stroke="#000000" style="fill: #CCDDEE" r="20"></circle>
        <use href="#background_face_hours"/>
        <g>
          <use id="HOUR_MARKS-l7-o0" href="#cardinal_hour" transform="rotate(0)" style="fill: #FFCC44"/>
          <use id="HOUR_MARKS-l7-o1" href="#cardinal_hour" transform="rotate(90)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l7-o2" href="#cardinal_hour" transform="rotate(180)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l7-o3" href="#cardinal_hour" transform="rotate(270)" style="fill: #0000"/>
        </g>
        <g>
          <use id="DIALS-l7-o0"  href="#hand" transform="rotate(0)" style="fill: #CC0000"/>
          <use id="DIALS-l7-o1"  href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l7-o2"  href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l7-o3"  href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l7-o4"  href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l7-o5"  href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l7-o6"  href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l7-o7"  href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l7-o8"  href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l7-o9"  href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l7-o10" href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l7-o11" href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 156)">
        <circle id="FACES-l8-o0" stroke="#000000" style="fill: #CCDDEE" r="20"></circle>
        <use href="#background_face_hours"/>
        <g>
          <use id="HOUR_MARKS-l8-o0" href="#cardinal_hour" transform="rotate(0)" style="fill: #FFCC44"/>
          <use id="HOUR_MARKS-l8-o1" href="#cardinal_hour" transform="rotate(90)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l8-o2" href="#cardinal_hour" transform="rotate(180)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l8-o3" href="#cardinal_hour" transform="rotate(270)" style="fill: #0000"/>
        </g>
        <g>
          <use id="DIALS-l8-o0"  href="#hand" transform="rotate(0)" style="fill: #CC0000"/>
          <use id="DIALS-l8-o1"  href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l8-o2"  href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l8-o3"  href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l8-o4"  href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l8-o5"  href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l8-o6"  href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l8-o7"  href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l8-o8"  href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l8-o9"  href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l8-o10" href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l8-o11" href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
    </g>
    <g transform="translate(264, 24) scale(0.8)" transform-origin="96 96">
      <g transform="translate(32, 200)">
        <rect width="128" height="24" fill="#D9D9D9"/>
        <path d="M25.965 19.16C25.2317 19.16 24.4917 19.1333 23.745 19.08C22.9983 19.04 22.345 18.9467 21.785 18.8V5.34C22.0783 5.28667 22.3917 5.24 22.725 5.2C23.0583 5.14667 23.3983 5.10667 23.745 5.08C24.0917 5.05333 24.4317 5.03333 24.765 5.02C25.1117 5.00667 25.4383 5 25.745 5C26.585 5 27.365 5.06667 28.085 5.2C28.805 5.32 29.425 5.52667 29.945 5.82C30.4783 6.11333 30.8917 6.5 31.185 6.98C31.4783 7.46 31.625 8.05333 31.625 8.76C31.625 9.41333 31.465 9.97333 31.145 10.44C30.8383 10.9067 30.405 11.28 29.845 11.56C30.685 11.84 31.305 12.2533 31.705 12.8C32.105 13.3467 32.305 14.04 32.305 14.88C32.305 16.3067 31.785 17.38 30.745 18.1C29.705 18.8067 28.1117 19.16 25.965 19.16ZM24.265 12.76V16.98C24.545 17.0067 24.845 17.0267 25.165 17.04C25.485 17.0533 25.7783 17.06 26.045 17.06C26.565 17.06 27.045 17.0267 27.485 16.96C27.9383 16.8933 28.325 16.78 28.645 16.62C28.9783 16.4467 29.2383 16.22 29.425 15.94C29.625 15.66 29.725 15.3 29.725 14.86C29.725 14.0733 29.4383 13.5267 28.865 13.22C28.2917 12.9133 27.4983 12.76 26.485 12.76H24.265ZM24.265 10.78H26.045C27.005 10.78 27.7583 10.6467 28.305 10.38C28.8517 10.1 29.125 9.60667 29.125 8.9C29.125 8.23333 28.8383 7.76 28.265 7.48C27.705 7.2 26.9717 7.06 26.065 7.06C25.6783 7.06 25.3317 7.06667 25.025 7.08C24.7317 7.09333 24.4783 7.11333 24.265 7.14V10.78ZM41.9735 19C41.8562 18.616 41.7229 18.2213 41.5735 17.816C41.4349 17.4107 41.2962 17.0053 41.1575 16.6H36.8375C36.6989 17.0053 36.5549 17.4107 36.4055 17.816C36.2669 18.2213 36.1389 18.616 36.0215 19H33.4295C33.8455 17.8053 34.2402 16.7013 34.6135 15.688C34.9869 14.6747 35.3495 13.72 35.7015 12.824C36.0642 11.928 36.4162 11.08 36.7575 10.28C37.1095 9.46933 37.4722 8.68 37.8455 7.912H40.2295C40.5922 8.68 40.9495 9.46933 41.3015 10.28C41.6535 11.08 42.0055 11.928 42.3575 12.824C42.7202 13.72 43.0882 14.6747 43.4615 15.688C43.8349 16.7013 44.2295 17.8053 44.6455 19H41.9735ZM38.9815 10.424C38.9282 10.584 38.8482 10.8027 38.7415 11.08C38.6349 11.3573 38.5122 11.6773 38.3735 12.04C38.2349 12.4027 38.0802 12.8027 37.9095 13.24C37.7495 13.6773 37.5842 14.136 37.4135 14.616H40.5655C40.3949 14.136 40.2295 13.6773 40.0695 13.24C39.9095 12.8027 39.7549 12.4027 39.6055 12.04C39.4669 11.6773 39.3442 11.3573 39.2375 11.08C39.1309 10.8027 39.0455 10.584 38.9815 10.424ZM50.7305 19.224C48.9279 19.224 47.5519 18.7227 46.6025 17.72C45.6639 16.7173 45.1945 15.2933 45.1945 13.448C45.1945 12.5307 45.3385 11.7147 45.6265 11C45.9145 10.2747 46.3092 9.66667 46.8105 9.176C47.3119 8.67467 47.9092 8.296 48.6025 8.04C49.2959 7.784 50.0479 7.656 50.8585 7.656C51.3279 7.656 51.7545 7.69333 52.1385 7.768C52.5225 7.832 52.8585 7.912 53.1465 8.008C53.4345 8.09333 53.6745 8.184 53.8665 8.28C54.0585 8.376 54.1972 8.45067 54.2825 8.504L53.5625 10.52C53.2212 10.3387 52.8212 10.184 52.3625 10.056C51.9145 9.928 51.4025 9.864 50.8265 9.864C50.4425 9.864 50.0639 9.928 49.6905 10.056C49.3279 10.184 49.0025 10.392 48.7145 10.68C48.4372 10.9573 48.2132 11.32 48.0425 11.768C47.8719 12.216 47.7865 12.76 47.7865 13.4C47.7865 13.912 47.8399 14.392 47.9465 14.84C48.0639 15.2773 48.2452 15.656 48.4905 15.976C48.7465 16.296 49.0772 16.552 49.4825 16.744C49.8879 16.9253 50.3785 17.016 50.9545 17.016C51.3172 17.016 51.6425 16.9947 51.9305 16.952C52.2185 16.9093 52.4745 16.8613 52.6985 16.808C52.9225 16.744 53.1199 16.6747 53.2905 16.6C53.4612 16.5253 53.6159 16.456 53.7545 16.392L54.4425 18.392C54.0905 18.6053 53.5945 18.7973 52.9545 18.968C52.3145 19.1387 51.5732 19.224 50.7305 19.224ZM62.5935 19C62.3695 18.6373 62.1029 18.248 61.7935 17.832C61.4949 17.4053 61.1642 16.984 60.8015 16.568C60.4495 16.1413 60.0815 15.736 59.6975 15.352C59.3135 14.9573 58.9295 14.6107 58.5455 14.312V19H56.0495V7.912H58.5455V12.104C59.1962 11.4213 59.8469 10.712 60.4975 9.976C61.1589 9.22933 61.7722 8.54133 62.3375 7.912H65.2975C64.5402 8.808 63.7775 9.672 63.0095 10.504C62.2522 11.336 61.4522 12.1733 60.6095 13.016C61.4949 13.752 62.3482 14.6267 63.1695 15.64C64.0015 16.6533 64.7962 17.7733 65.5535 19H62.5935ZM75.5317 17.12C76.4384 17.12 77.0984 16.9667 77.5117 16.66C77.9251 16.3533 78.1317 15.92 78.1317 15.36C78.1317 15.0267 78.0584 14.74 77.9117 14.5C77.7784 14.26 77.5784 14.0467 77.3117 13.86C77.0584 13.66 76.7451 13.48 76.3717 13.32C75.9984 13.1467 75.5717 12.98 75.0917 12.82C74.6117 12.6467 74.1451 12.46 73.6917 12.26C73.2517 12.0467 72.8584 11.7867 72.5117 11.48C72.1784 11.1733 71.9051 10.8067 71.6917 10.38C71.4917 9.95333 71.3917 9.44 71.3917 8.84C71.3917 7.58667 71.8251 6.60667 72.6917 5.9C73.5584 5.18 74.7384 4.82 76.2317 4.82C77.0984 4.82 77.8651 4.92 78.5317 5.12C79.2117 5.30667 79.7451 5.51333 80.1317 5.74L79.3517 7.78C78.8984 7.52667 78.3984 7.33333 77.8517 7.2C77.3184 7.06667 76.7651 7 76.1917 7C75.5117 7 74.9784 7.14 74.5917 7.42C74.2184 7.7 74.0317 8.09333 74.0317 8.6C74.0317 8.90667 74.0917 9.17333 74.2117 9.4C74.3451 9.61333 74.5251 9.80667 74.7517 9.98C74.9917 10.1533 75.2651 10.3133 75.5717 10.46C75.8917 10.6067 76.2384 10.7467 76.6117 10.88C77.2651 11.12 77.8451 11.3667 78.3517 11.62C78.8717 11.86 79.3051 12.1533 79.6517 12.5C80.0117 12.8333 80.2851 13.2333 80.4717 13.7C80.6584 14.1533 80.7517 14.7067 80.7517 15.36C80.7517 16.6133 80.3051 17.5867 79.4117 18.28C78.5317 18.96 77.2384 19.3 75.5317 19.3C74.9584 19.3 74.4317 19.26 73.9517 19.18C73.4851 19.1133 73.0651 19.0267 72.6917 18.92C72.3317 18.8133 72.0184 18.7067 71.7517 18.6C71.4851 18.48 71.2717 18.3733 71.1117 18.28L71.8517 16.22C72.2117 16.42 72.6984 16.62 73.3117 16.82C73.9251 17.02 74.6651 17.12 75.5317 17.12ZM82.5925 7.912H85.0885V19H82.5925V7.912ZM90.151 16.968C90.2683 16.9787 90.4017 16.9893 90.551 17C90.711 17 90.8977 17 91.111 17C92.359 17 93.2817 16.6853 93.879 16.056C94.487 15.4267 94.791 14.5573 94.791 13.448C94.791 12.2853 94.503 11.4053 93.927 10.808C93.351 10.2107 92.439 9.912 91.191 9.912C91.0203 9.912 90.8443 9.91733 90.663 9.928C90.4817 9.928 90.311 9.93867 90.151 9.96V16.968ZM97.367 13.448C97.367 14.408 97.2177 15.2453 96.919 15.96C96.6203 16.6747 96.1937 17.2667 95.639 17.736C95.095 18.2053 94.4283 18.5573 93.639 18.792C92.8497 19.0267 91.9643 19.144 90.983 19.144C90.535 19.144 90.0123 19.1227 89.415 19.08C88.8177 19.048 88.231 18.9733 87.655 18.856V8.056C88.231 7.94933 88.8283 7.88 89.447 7.848C90.0763 7.80533 90.615 7.784 91.063 7.784C92.0123 7.784 92.871 7.89067 93.639 8.104C94.4177 8.31733 95.0843 8.65333 95.639 9.112C96.1937 9.57067 96.6203 10.1573 96.919 10.872C97.2177 11.5867 97.367 12.4453 97.367 13.448ZM99.4519 19V7.912H106.94V10.008H101.948V12.184H106.38V14.232H101.948V16.904H107.308V19H99.4519Z" fill="black"/>
      </g>
      <use href="#frame" id="FRAME-l0-o1" style="fill: #CCDDEE"/>

      <use href="#peg" transform="translate(66, 66)" style="fill: #88AACC"/>
      <use href="#peg" transform="translate(126, 66)" style="fill: #88AACC"/>
      <use href="#peg" transform="translate(126, 126)" style="fill: #88AACC"/>
      <use href="#peg" transform="translate(66, 126)" style="fill: #88AACC"/>

      <g transform="translate(36, 36)">
        <circle id="FACES-l9-o0" stroke="#000000" style="fill: #113366" r="20"></circle>
        <use href="#background_face_hours"/>
        <g>
          <use id="HOUR_MARKS-l9-o0" href="#cardinal_hour" transform="rotate(0)" style="fill: #CC6600"/>
          <use id="HOUR_MARKS-l9-o1" href="#cardinal_hour" transform="rotate(90)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l9-o2" href="#cardinal_hour" transform="rotate(180)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l9-o3" href="#cardinal_hour" transform="rotate(270)" style="fill: #0000"/>
        </g>
        <g>
          <use id="DIALS-l9-o0"  href="#hand" transform="rotate(0)" style="fill: #FFCC44"/>
          <use id="DIALS-l9-o1"  href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l9-o2"  href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l9-o3"  href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l9-o4"  href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l9-o5"  href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l9-o6"  href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l9-o7"  href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l9-o8"  href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l9-o9"  href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l9-o10" href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l9-o11" href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 36)">
        <circle id="FACES-l10-o0" stroke="#000000" style="fill: #113366" r="20"></circle>
        <use href="#background_face_hours"/>
        <g>
          <use id="HOUR_MARKS-l10-o0" href="#cardinal_hour" transform="rotate(0)" style="fill: #CC6600"/>
          <use id="HOUR_MARKS-l10-o1" href="#cardinal_hour" transform="rotate(90)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l10-o2" href="#cardinal_hour" transform="rotate(180)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l10-o3" href="#cardinal_hour" transform="rotate(270)" style="fill: #0000"/>
        </g>
        <g>
          <use id="DIALS-l10-o0"  href="#hand" transform="rotate(0)" style="fill: #FFCC44"/>
          <use id="DIALS-l10-o1"  href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l10-o2"  href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l10-o3"  href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l10-o4"  href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l10-o5"  href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l10-o6"  href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l10-o7"  href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l10-o8"  href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l10-o9"  href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l10-o10" href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l10-o11" href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 36)">
        <circle id="FACES-l11-o0" stroke="#000000" style="fill: #113366" r="20"></circle>
        <use href="#background_face_hours"/>
        <g>
          <use id="HOUR_MARKS-l11-o0" href="#cardinal_hour" transform="rotate(0)" style="fill: #CC6600"/>
          <use id="HOUR_MARKS-l11-o1" href="#cardinal_hour" transform="rotate(90)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l11-o2" href="#cardinal_hour" transform="rotate(180)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l11-o3" href="#cardinal_hour" transform="rotate(270)" style="fill: #0000"/>
        </g>
        <g>
          <use id="DIALS-l11-o0"  href="#hand" transform="rotate(0)" style="fill: #FFCC44"/>
          <use id="DIALS-l11-o1"  href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l11-o2"  href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l11-o3"  href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l11-o4"  href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l11-o5"  href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l11-o6"  href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l11-o7"  href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l11-o8"  href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l11-o9"  href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l11-o10" href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l11-o11" href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(36, 96)">
        <circle id="FACES-l12-o0" stroke="#000000" style="fill: #113366" r="20"></circle>
        <use href="#background_face_hours"/>
        <g>
          <use id="HOUR_MARKS-l12-o0" href="#cardinal_hour" transform="rotate(0)" style="fill: #CC6600"/>
          <use id="HOUR_MARKS-l12-o1" href="#cardinal_hour" transform="rotate(90)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l12-o2" href="#cardinal_hour" transform="rotate(180)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l12-o3" href="#cardinal_hour" transform="rotate(270)" style="fill: #0000"/>
        </g>
        <g>
          <use id="DIALS-l12-o0"  href="#hand" transform="rotate(0)" style="fill: #FFCC44"/>
          <use id="DIALS-l12-o1"  href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l12-o2"  href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l12-o3"  href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l12-o4"  href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l12-o5"  href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l12-o6"  href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l12-o7"  href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l12-o8"  href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l12-o9"  href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l12-o10" href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l12-o11" href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 96)">
        <circle id="FACES-l13-o0" stroke="#000000" style="fill: #113366" r="20"></circle>
        <use href="#background_face_hours"/>
        <g>
          <use id="HOUR_MARKS-l13-o0" href="#cardinal_hour" transform="rotate(0)" style="fill: #CC6600"/>
          <use id="HOUR_MARKS-l13-o1" href="#cardinal_hour" transform="rotate(90)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l13-o2" href="#cardinal_hour" transform="rotate(180)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l13-o3" href="#cardinal_hour" transform="rotate(270)" style="fill: #0000"/>
        </g>
        <g>
          <use id="DIALS-l13-o0"  href="#hand" transform="rotate(0)" style="fill: #FFCC44"/>
          <use id="DIALS-l13-o1"  href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l13-o2"  href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l13-o3"  href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l13-o4"  href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l13-o5"  href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l13-o6"  href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l13-o7"  href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l13-o8"  href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l13-o9"  href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l13-o10" href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l13-o11" href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 96)">
        <circle id="FACES-l14-o0" stroke="#000000" style="fill: #113366" r="20"></circle>
        <use href="#background_face_hours"/>
        <g>
          <use id="HOUR_MARKS-l14-o0" href="#cardinal_hour" transform="rotate(0)" style="fill: #CC6600"/>
          <use id="HOUR_MARKS-l14-o1" href="#cardinal_hour" transform="rotate(90)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l14-o2" href="#cardinal_hour" transform="rotate(180)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l14-o3" href="#cardinal_hour" transform="rotate(270)" style="fill: #0000"/>
        </g>
        <g>
          <use id="DIALS-l14-o0"  href="#hand" transform="rotate(0)" style="fill: #FFCC44"/>
          <use id="DIALS-l14-o1"  href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l14-o2"  href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l14-o3"  href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l14-o4"  href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l14-o5"  href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l14-o6"  href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l14-o7"  href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l14-o8"  href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l14-o9"  href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l14-o10" href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l14-o11" href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(36, 156)">
        <circle id="FACES-l15-o0" stroke="#000000" style="fill: #113366" r="20"></circle>
        <use href="#background_face_hours"/>
        <g>
          <use id="HOUR_MARKS-l15-o0" href="#cardinal_hour" transform="rotate(0)" style="fill: #CC6600"/>
          <use id="HOUR_MARKS-l15-o1" href="#cardinal_hour" transform="rotate(90)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l15-o2" href="#cardinal_hour" transform="rotate(180)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l15-o3" href="#cardinal_hour" transform="rotate(270)" style="fill: #0000"/>
        </g>
        <g>
          <use id="DIALS-l15-o0"  href="#hand" transform="rotate(0)" style="fill: #FFCC44"/>
          <use id="DIALS-l15-o1"  href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l15-o2"  href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l15-o3"  href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l15-o4"  href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l15-o5"  href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l15-o6"  href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l15-o7"  href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l15-o8"  href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l15-o9"  href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l15-o10" href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l15-o11" href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 156)">
        <circle id="FACES-l16-o0" stroke="#000000" style="fill: #113366" r="20"></circle>
        <use href="#background_face_hours"/>
        <g>
          <use id="HOUR_MARKS-l16-o0" href="#cardinal_hour" transform="rotate(0)" style="fill: #CC6600"/>
          <use id="HOUR_MARKS-l16-o1" href="#cardinal_hour" transform="rotate(90)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l16-o2" href="#cardinal_hour" transform="rotate(180)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l16-o3" href="#cardinal_hour" transform="rotate(270)" style="fill: #0000"/>
        </g>
        <g>
          <use id="DIALS-l16-o0"  href="#hand" transform="rotate(0)" style="fill: #FFCC44"/>
          <use id="DIALS-l16-o1"  href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l16-o2"  href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l16-o3"  href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l16-o4"  href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l16-o5"  href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l16-o6"  href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l16-o7"  href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l16-o8"  href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l16-o9"  href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l16-o10" href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l16-o11" href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 156)">
        <circle id="FACES-l17-o0" stroke="#000000" style="fill: #113366" r="20"></circle>
        <use href="#background_face_hours"/>
        <g>
          <use id="HOUR_MARKS-l17-o0" href="#cardinal_hour" transform="rotate(0)" style="fill: #CC6600"/>
          <use id="HOUR_MARKS-l17-o1" href="#cardinal_hour" transform="rotate(90)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l17-o2" href="#cardinal_hour" transform="rotate(180)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l17-o3" href="#cardinal_hour" transform="rotate(270)" style="fill: #0000"/>
        </g>
        <g>
          <use id="DIALS-l17-o0"  href="#hand" transform="rotate(0)" style="fill: #FFCC44"/>
          <use id="DIALS-l17-o1"  href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l17-o2"  href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l17-o3"  href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l17-o4"  href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l17-o5"  href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l17-o6"  href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l17-o7"  href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l17-o8"  href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l17-o9"  href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l17-o10" href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l17-o11" href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
    </g>
  </g>
</svg>`,lx=`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN"
       "http://www.w3.org/TR/2001/REC-SVG-20050904/DTD/svg11.dtd">
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-20 -20 546 480" preserveAspectRatio="xMidYMid meet">
  <defs>
  </defs>
  <title>pyraminx</title>
  <defs>
    <g id="stickerA" transform="scale(1, 0.577350269)">
      <path
         d="m 0,1.732050808 1,-1.732050808 1,1.732050808 z"
         stroke="black" stroke-width="0.04px" stroke-linecap="butt" stroke-linejoin="round"
      />
    </g>
    <g id="stickerV" transform="scale(1, 0.577350269)">
      <path
         d="m 0,0 1,1.732050808 1,-1.732050808 z"
         stroke="black" stroke-width="0.04px" stroke-linecap="butt" stroke-linejoin="round"
      />
    </g>
  </defs>

<!--        0 1 2 3 4 5 6 7 8 9 10   -->
<!--        | | | | | | | | | | |    -->
<!--    0 - L L L L L F R R R R R    -->
<!--    1 -   L L L F F F R R R      -->
<!--    2 -     L F F F F F R        -->
<!--    3 -       D D D D D          -->
<!--    4 -         D D D            -->
<!--    5 -           D              -->

  <g id="puzzle" transform="translate(5, 5) scale(40, 69.28203232)">
    <!-- CORNERS -->
    <use id="CORNERS-l0-o0" href="#stickerV" transform="translate(5.2, 1.066666667)" style="fill: limegreen"/>
    <use id="CORNERS-l0-o1" href="#stickerA" transform="translate(3, 0)" style="fill: red"/>
    <use id="CORNERS-l0-o2" href="#stickerA" transform="translate(7.4, 0)" style="fill: #26f"/>

    <use id="CORNERS-l3-o0" href="#stickerA" transform="translate(4.2, 3.2)" style="fill: yellow"/>
    <use id="CORNERS-l3-o1" href="#stickerA" transform="translate(2, 1)" style="fill: red"/>
    <use id="CORNERS-l3-o2" href="#stickerV" transform="translate(4.2, 2.066666667)" style="fill: limegreen"/>

    <use id="CORNERS-l2-o0" href="#stickerA" transform="translate(6.2, 3.2)" style="fill: yellow"/>
    <use id="CORNERS-l2-o1" href="#stickerV" transform="translate(6.2, 2.066666667)" style="fill: limegreen"/>
    <use id="CORNERS-l2-o2" href="#stickerA" transform="translate(8.4, 1)" style="fill: #26f"/>

    <use id="CORNERS-l1-o1" href="#stickerA" transform="translate(9.4, 0)" style="fill: #26f"/>
    <use id="CORNERS-l1-o2" href="#stickerA" transform="translate(1, 0)" style="fill: red"/>
    <use id="CORNERS-l1-o0" href="#stickerA" transform="translate(5.2, 4.2)" style="fill: yellow"/>

    <!-- "TIPS" -->
    <!-- CORNERS2 -->
    <use id="CORNERS2-l0-o0" href="#stickerA" transform="translate(5.2, 0.066666667)" style="fill: limegreen"/>
    <use id="CORNERS2-l0-o1" href="#stickerV" transform="translate(4, 0)" style="fill: red"/>
    <use id="CORNERS2-l0-o2" href="#stickerV" transform="translate(6.4, 0)" style="fill: #26f"/>

    <use id="CORNERS2-l3-o0" href="#stickerV" transform="translate(3.2, 3.2)" style="fill: yellow"/>
    <use id="CORNERS2-l3-o1" href="#stickerV" transform="translate(2, 2)" style="fill: red"/>
    <use id="CORNERS2-l3-o2" href="#stickerA" transform="translate(3.2, 2.066666667)" style="fill: limegreen"/>

    <use id="CORNERS2-l2-o0" href="#stickerV" transform="translate(7.2, 3.2)" style="fill: yellow"/>
    <use id="CORNERS2-l2-o1" href="#stickerA" transform="translate(7.2, 2.066666667)" style="fill: limegreen"/>
    <use id="CORNERS2-l2-o2" href="#stickerV" transform="translate(8.4, 2)" style="fill: #26f"/>

    <use id="CORNERS2-l1-o1" href="#stickerV" transform="translate(10.4,0)" style="fill: #26f"/>
    <use id="CORNERS2-l1-o2" href="#stickerV" transform="translate(0, 0)" style="fill: red"/>
    <use id="CORNERS2-l1-o0" href="#stickerV" transform="translate(5.2, 5.2)" style="fill: yellow"/>

    <!-- EDGES -->
    <use id="EDGES-l0-o0" href="#stickerV" transform="translate(3, 1)" style="fill: red"/>
    <use id="EDGES-l0-o1" href="#stickerA" transform="translate(4.2, 1.066666667)" style="fill: limegreen"/>

    <use id="EDGES-l5-o0" href="#stickerA" transform="translate(6.2, 1.066666667)" style="fill: limegreen"/>
    <use id="EDGES-l5-o1" href="#stickerV" transform="translate(7.4, 1)" style="fill: #26f"/>

    <use id="EDGES-l1-o0" href="#stickerV" transform="translate(8.4, 0)" style="fill: #26f"/>
    <use id="EDGES-l1-o1" href="#stickerV" transform="translate(2, 0)" style="fill: red"/>

    <use id="EDGES-l2-o0" href="#stickerV" transform="translate(5.2, 3.2)" style="fill: yellow"/>
    <use id="EDGES-l2-o1" href="#stickerA" transform="translate(5.2, 2.066666667)" style="fill: limegreen"/>

    <use id="EDGES-l3-o0" href="#stickerV" transform="translate(9.4, 1)" style="fill: #26f"/>
    <use id="EDGES-l3-o1" href="#stickerV" transform="translate(6.2, 4.2)" style="fill: yellow"/>

    <use id="EDGES-l4-o0" href="#stickerV" transform="translate(4.2, 4.2)" style="fill: yellow"/>
    <use id="EDGES-l4-o1" href="#stickerV" transform="translate(1, 1)" style="fill: red"/>
  </g>

</svg>`,cx={name:"Square-1",orbits:[{orbitName:"WEDGES",numPieces:24,numOrientations:9},{orbitName:"EQUATOR",numPieces:2,numOrientations:6}],defaultPattern:{WEDGES:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},EQUATOR:{pieces:[0,1],orientation:[0,0]}},moves:{U_SQ_:{WEDGES:{permutation:[11,0,1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20,21,22,23],orientationDelta:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},EQUATOR:{permutation:[0,1],orientationDelta:[0,0]}},D_SQ_:{WEDGES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,23,12,13,14,15,16,17,18,19,20,21,22],orientationDelta:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},EQUATOR:{permutation:[0,1],orientationDelta:[0,0]}},_SLASH_:{WEDGES:{permutation:[0,1,2,3,4,5,12,13,14,15,16,17,6,7,8,9,10,11,18,19,20,21,22,23],orientationDelta:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},EQUATOR:{permutation:[0,1],orientationDelta:[0,3]}}}},fx=`<?xml version="1.0" encoding="UTF-8"?>
<svg width="360px" height="552px" viewBox="0 0 360 552" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 59.1 (86144) - https://sketch.com -->
    <title>sq1-fancy</title>
    <desc>Created with Sketch.</desc>
    <!-- stroke="none" -->
    <g id="sq1-fancy" stroke="#888" stroke-width="0.25" fill="none" fill-rule="evenodd">
        <g id="EQUATOR" transform="translate(24.000000, 264.000000)">
            <rect id="EQUATOR-l1-o3" style="fill: red" x="168" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l1-o4" style="fill: red" x="192" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l1-o5" style="fill: limegreen" x="216" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l1-o2" style="fill: limegreen" x="240" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l1-o1" style="fill: limegreen" x="264" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l1-o0" style="fill: orange" x="288" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l0-o3" style="fill: orange" x="0" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l0-o4" style="fill: orange" x="24" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l0-o5" style="fill: #26f" x="48" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l0-o2" style="fill: #26f" x="72" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l0-o1" style="fill: #26f" x="96" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l0-o0" style="fill: red" x="120" y="0" width="24" height="24"></rect>
        </g>
        <g id="BOTTOM" transform="translate(41.000000, 257.000000)" stroke-linejoin="round">
            <g id="WEDGES-23" transform="translate(130.000000, 88.588457) rotate(120.000000) translate(-130.000000, -88.588457) translate(82.000000, 22.588457)">
                <polygon id="WEDGES-l23-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l23-o7" style="fill: red" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l23-o6" style="fill: red" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l23-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l23-o4" style="fill: red" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l23-o3" style="fill: white" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l23-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l23-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l23-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-22" transform="translate(97.157677, 115.157677) rotate(90.000000) translate(-97.157677, -115.157677) translate(49.157677, 49.157677)">
                <polygon id="WEDGES-l22-o8" style="fill: #26f" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l22-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l22-o6" style="fill: #26f" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l22-o5" style="fill: #26f" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l22-o4" style="fill: white" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l22-o3" style="fill: #26f" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l22-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l22-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l22-o0" style="fill: #26f" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-21" transform="translate(82.000000, 154.588457) rotate(60.000000) translate(-82.000000, -154.588457) translate(34.000000, 88.588457)">
                <polygon id="WEDGES-l21-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l21-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l21-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l21-o5" style="fill: #26f" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l21-o4" style="fill: #26f" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l21-o3" style="fill: #26f" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l21-o2" style="fill: #26f" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l21-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l21-o0" style="fill: #26f" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-20" transform="translate(88.588457, 196.315353) rotate(30.000000) translate(-88.588457, -196.315353) translate(40.588457, 130.315353)">
                <polygon id="WEDGES-l20-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l20-o7" style="fill: #26f" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l20-o6" style="fill: #26f" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l20-o5" style="fill: #26f" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l20-o4" style="fill: #26f" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l20-o3" style="fill: white" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l20-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l20-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l20-o0" style="fill: #26f" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-19" transform="translate(67.157677, 163.157677)">
                <polygon id="WEDGES-l19-o8" style="fill: orange" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l19-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l19-o6" style="fill: orange" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l19-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l19-o4" style="fill: white" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l19-o3" style="fill: orange" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l19-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l19-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l19-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-18" transform="translate(154.588457, 244.315353) scale(-1, -1) rotate(150.000000) translate(-154.588457, -244.315353) translate(106.588457, 178.315353)">
                <polygon id="WEDGES-l18-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l18-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l18-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l18-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l18-o4" style="fill: orange" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l18-o3" style="fill: orange" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l18-o2" style="fill: orange" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l18-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l18-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-17" transform="translate(196.315353, 237.726896) scale(-1, -1) rotate(120.000000) translate(-196.315353, -237.726896) translate(148.315353, 171.726896)">
                <polygon id="WEDGES-l17-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l17-o7" style="fill: orange" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l17-o6" style="fill: orange" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l17-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l17-o4" style="fill: orange" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l17-o3" style="fill: white" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l17-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l17-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l17-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-16" transform="translate(229.157677, 211.157677) scale(-1, -1) rotate(90.000000) translate(-229.157677, -211.157677) translate(181.157677, 145.157677)">
                <polygon id="WEDGES-l16-o8" style="fill: limegreen" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l16-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l16-o6" style="fill: limegreen" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l16-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l16-o4" style="fill: white" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l16-o3" style="fill: limegreen" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l16-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l16-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l16-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-15" transform="translate(244.315353, 171.726896) scale(-1, -1) rotate(60.000000) translate(-244.315353, -171.726896) translate(196.315353, 105.726896)">
                <polygon id="WEDGES-l15-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l15-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l15-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l15-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l15-o4" style="fill: limegreen" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l15-o3" style="fill: limegreen" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l15-o2" style="fill: limegreen" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l15-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l15-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-14" transform="translate(237.726896, 130.000000) scale(-1, -1) rotate(30.000000) translate(-237.726896, -130.000000) translate(189.726896, 64.000000)">
                <polygon id="WEDGES-l14-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l14-o7" style="fill: limegreen" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l14-o6" style="fill: limegreen" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l14-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l14-o4" style="fill: limegreen" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l14-o3" style="fill: white" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l14-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l14-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l14-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-13" transform="translate(211.157677, 97.157677) scale(-1, -1) translate(-211.157677, -97.157677) translate(163.157677, 31.157677)">
                <polygon id="WEDGES-l13-o8" style="fill: red" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l13-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l13-o6" style="fill: red" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l13-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l13-o4" style="fill: white" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l13-o3" style="fill: red" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l13-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l13-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l13-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-12" transform="translate(171.726896, 82.000000) rotate(150.000000) translate(-171.726896, -82.000000) translate(123.726896, 16.000000)">
                <polygon id="WEDGES-l12-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l12-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l12-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l12-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l12-o4" style="fill: red" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l12-o3" style="fill: red" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l12-o2" style="fill: red" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l12-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l12-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
        </g>
        <g id="TOP" transform="translate(41.000000, -31.000000)" stroke-linejoin="round">
            <g id="WEDGES-11" transform="translate(154.588457, 244.315353) scale(-1, -1) rotate(150.000000) translate(-154.588457, -244.315353) translate(106.588457, 178.315353)">
                <polygon id="WEDGES-l11-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l11-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l11-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l11-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l11-o4" style="fill: red" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l11-o3" style="fill: red" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l11-o2" style="fill: red" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l11-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l11-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-10" transform="translate(196.315353, 237.726896) scale(-1, -1) rotate(120.000000) translate(-196.315353, -237.726896) translate(148.315353, 171.726896)">
                <polygon id="WEDGES-l10-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l10-o7" style="fill: red" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l10-o6" style="fill: red" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l10-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l10-o4" style="fill: red" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l10-o3" style="fill: yellow" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l10-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l10-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l10-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-9" transform="translate(229.157677, 211.157677) scale(-1, -1) rotate(90.000000) translate(-229.157677, -211.157677) translate(181.157677, 145.157677)">
                <polygon id="WEDGES-l9-o8" style="fill: limegreen" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l9-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l9-o6" style="fill: limegreen" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l9-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l9-o4" style="fill: yellow" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l9-o3" style="fill: limegreen" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l9-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l9-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l9-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-8" transform="translate(244.315353, 171.726896) scale(-1, -1) rotate(60.000000) translate(-244.315353, -171.726896) translate(196.315353, 105.726896)">
                <polygon id="WEDGES-l8-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l8-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l8-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l8-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l8-o4" style="fill: limegreen" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l8-o3" style="fill: limegreen" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l8-o2" style="fill: limegreen" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l8-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l8-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-7" transform="translate(237.726896, 130.000000) scale(-1, -1) rotate(30.000000) translate(-237.726896, -130.000000) translate(189.726896, 64.000000)">
                <polygon id="WEDGES-l7-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l7-o7" style="fill: limegreen" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l7-o6" style="fill: limegreen" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l7-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l7-o4" style="fill: limegreen" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l7-o3" style="fill: yellow" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l7-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l7-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l7-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-6" transform="translate(211.157677, 97.157677) scale(-1, -1) translate(-211.157677, -97.157677) translate(163.157677, 31.157677)">
                <polygon id="WEDGES-l6-o8" style="fill: orange" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l6-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l6-o6" style="fill: orange" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l6-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l6-o4" style="fill: yellow" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l6-o3" style="fill: orange" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l6-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l6-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l6-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-5" transform="translate(171.726896, 82.000000) rotate(150.000000) translate(-171.726896, -82.000000) translate(123.726896, 16.000000)">
                <polygon id="WEDGES-l5-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l5-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l5-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l5-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l5-o4" style="fill: orange" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l5-o3" style="fill: orange" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l5-o2" style="fill: orange" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l5-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l5-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-4" transform="translate(130.000000, 88.588457) rotate(120.000000) translate(-130.000000, -88.588457) translate(82.000000, 22.588457)">
                <polygon id="WEDGES-l4-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l4-o7" style="fill: orange" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l4-o6" style="fill: orange" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l4-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l4-o4" style="fill: orange" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l4-o3" style="fill: yellow" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l4-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l4-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l4-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-3" transform="translate(97.157677, 115.157677) rotate(90.000000) translate(-97.157677, -115.157677) translate(49.157677, 49.157677)">
                <polygon id="WEDGES-l3-o8" style="fill: #26f" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l3-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l3-o6" style="fill: #26f" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l3-o5" style="fill: #26f" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l3-o4" style="fill: yellow" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l3-o3" style="fill: #26f" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l3-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l3-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l3-o0" style="fill: #26f" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-2" transform="translate(82.000000, 154.588457) rotate(60.000000) translate(-82.000000, -154.588457) translate(34.000000, 88.588457)">
                <polygon id="WEDGES-l2-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l2-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l2-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l2-o5" style="fill: #26f" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l2-o4" style="fill: #26f" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l2-o3" style="fill: #26f" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l2-o2" style="fill: #26f" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l2-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l2-o0" style="fill: #26f" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-1" transform="translate(88.588457, 196.315353) rotate(30.000000) translate(-88.588457, -196.315353) translate(40.588457, 130.315353)">
                <polygon id="WEDGES-l1-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l1-o7" style="fill: #26f" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l1-o6" style="fill: #26f" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l1-o5" style="fill: #26f" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l1-o4" style="fill: #26f" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l1-o3" style="fill: yellow" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l1-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l1-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l1-o0" style="fill: #26f" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-0" transform="translate(67.157677, 163.157677)">
                <polygon id="WEDGES-l0-o8" style="fill: red" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l0-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l0-o6" style="fill: red" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l0-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l0-o4" style="fill: yellow" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l0-o3" style="fill: red" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l0-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l0-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l0-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
        </g>
        <g id="DIAGONALS" transform="translate(168.861561, 1.019238)" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <line x1="0" y1="287.842323" x2="70.2768775" y2="550.119201" id="BOTTOM"></line>
            <line x1="0.15767665" y1="262.276878" x2="70.4345542" y2="2.27488928e-16" id="TOP"></line>
        </g>
    </g>
</svg>`,Pt=new Array(64).fill(0),hx=Pt.map((t,e)=>e),dx={name:"Melinda's 2x2x2x2",orbits:[{orbitName:"CORNERS",numPieces:64,numOrientations:1}],defaultPattern:{CORNERS:{pieces:hx,orientation:Pt}},moves:{Rx:{CORNERS:{permutation:[16,19,17,18,20,22,23,21,4,7,5,6,0,2,3,1,28,30,31,29,24,27,25,26,8,10,11,9,12,15,13,14,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],orientationDelta:Pt}},Ry:{CORNERS:{permutation:[12,13,14,15,0,1,2,3,4,5,6,7,8,9,10,11,28,29,30,31,16,17,18,19,20,21,22,23,24,25,26,27,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],orientationDelta:Pt}},Rz:{CORNERS:{permutation:[4,6,7,5,20,23,21,22,24,26,27,25,8,11,9,10,0,3,1,2,16,18,19,17,28,31,29,30,12,14,15,13,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],orientationDelta:Pt}},Lx:{CORNERS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,48,51,49,50,52,54,55,53,36,39,37,38,32,34,35,33,60,62,63,61,56,59,57,58,40,42,43,41,44,47,45,46],orientationDelta:Pt}},Ly:{CORNERS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,44,45,46,47,32,33,34,35,36,37,38,39,40,41,42,43,60,61,62,63,48,49,50,51,52,53,54,55,56,57,58,59],orientationDelta:Pt}},Lz:{CORNERS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,36,38,39,37,52,55,53,54,56,58,59,57,40,43,41,42,32,35,33,34,48,50,51,49,60,63,61,62,44,46,47,45],orientationDelta:Pt}},Mx:{CORNERS:{permutation:[0,1,2,3,20,22,23,21,4,7,5,6,12,13,14,15,16,17,18,19,24,27,25,26,8,10,11,9,28,29,30,31,48,51,49,50,36,37,38,39,40,41,42,43,32,34,35,33,60,62,63,61,52,53,54,55,56,57,58,59,44,47,45,46],orientationDelta:Pt}},My:{CORNERS:{permutation:[0,1,2,3,9,8,11,10,45,44,47,46,12,13,14,15,16,17,18,19,25,24,27,26,61,60,63,62,28,29,30,31,5,4,7,6,36,37,38,39,40,41,42,43,33,32,35,34,21,20,23,22,52,53,54,55,56,57,58,59,49,48,51,50],orientationDelta:Pt}},Mz:{CORNERS:{permutation:[0,1,2,3,34,33,35,32,47,45,44,46,12,13,14,15,16,17,18,19,7,5,4,6,10,9,11,8,28,29,30,31,51,49,48,50,36,37,38,39,40,41,42,43,62,61,63,60,22,21,23,20,52,53,54,55,56,57,58,59,27,25,24,26],orientationDelta:Pt}},Ox:{CORNERS:{permutation:[16,19,17,18,4,5,6,7,8,9,10,11,0,2,3,1,28,30,31,29,20,21,22,23,24,25,26,27,12,15,13,14,32,33,34,35,52,54,55,53,36,39,37,38,44,45,46,47,48,49,50,51,56,59,57,58,40,42,43,41,60,61,62,63],orientationDelta:Pt}},Oy:{CORNERS:{permutation:[37,36,39,38,4,5,6,7,8,9,10,11,1,0,3,2,53,52,55,54,20,21,22,23,24,25,26,27,17,16,19,18,32,33,34,35,41,40,43,42,13,12,15,14,44,45,46,47,48,49,50,51,57,56,59,58,29,28,31,30,60,61,62,63],orientationDelta:Pt}},Oz:{CORNERS:{permutation:[19,17,16,18,4,5,6,7,8,9,10,11,30,29,31,28,54,53,55,52,20,21,22,23,24,25,26,27,59,57,56,58,32,33,34,35,2,1,3,0,15,13,12,14,44,45,46,47,48,49,50,51,39,37,36,38,42,41,43,40,60,61,62,63],orientationDelta:Pt}},U2:{CORNERS:{permutation:[40,41,42,43,44,45,46,47,32,33,34,35,36,37,38,39,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,8,9,10,11,12,13,14,15,0,1,2,3,4,5,6,7,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],orientationDelta:Pt}},D2:{CORNERS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,56,57,58,59,60,61,62,63,48,49,50,51,52,53,54,55,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,24,25,26,27,28,29,30,31,16,17,18,19,20,21,22,23],orientationDelta:Pt}},F2:{CORNERS:{permutation:[52,53,54,55,48,49,50,51,8,9,10,11,12,13,14,15,36,37,38,39,32,33,34,35,24,25,26,27,28,29,30,31,20,21,22,23,16,17,18,19,40,41,42,43,44,45,46,47,4,5,6,7,0,1,2,3,56,57,58,59,60,61,62,63],orientationDelta:Pt}},B2:{CORNERS:{permutation:[0,1,2,3,4,5,6,7,60,61,62,63,56,57,58,59,16,17,18,19,20,21,22,23,44,45,46,47,40,41,42,43,32,33,34,35,36,37,38,39,28,29,30,31,24,25,26,27,48,49,50,51,52,53,54,55,12,13,14,15,8,9,10,11],orientationDelta:Pt}}},derivedMoves:{x:"Lx Rx",y2:"U2 D2",z2:"F2 B2"}},ux=`<?xml version="1.0" encoding="UTF-8"?>
<svg viewBox="0 0 180 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<title>melindas2x2x2x2</title>
<defs>
  <g id="sticker-UL">
    <path d="m 0,0 10,0 -10,10 z" stroke-width="0.75px" stroke="black" stroke-linecap="butt" stroke-linejoin="round" />
  </g>
  <g id="sticker-UR">
    <path d="m 0,0 10,0 0,10 z" stroke-width="0.75px" stroke="black" stroke-linecap="butt" stroke-linejoin="round" />
  </g>
  <g id="sticker-DR">
    <path d="m 10,0 0,10 -10,0 z" stroke-width="0.75px" stroke="black" stroke-linecap="butt" stroke-linejoin="round" />
  </g>
  <g id="sticker-DL">
    <path d="m 00,0 10,10 -10,0 z" stroke-width="0.75px" stroke="black" stroke-linecap="butt" stroke-linejoin="round" />
  </g>
  <g id="squished-sticker-UL">
    <path d="m 0,0 5,0 -5,10 z" stroke-width="0.75px" stroke="black" stroke-linecap="butt" stroke-linejoin="round" />
  </g>
  <g id="squished-sticker-UR">
    <path d="m 0,0 5,0 0,10 z" stroke-width="0.75px" stroke="black" stroke-linecap="butt" stroke-linejoin="round" />
  </g>
  <g id="squished-sticker-DR">
    <path d="m 5,0 0,10 -5,0 z" stroke-width="0.75px" stroke="black" stroke-linecap="butt" stroke-linejoin="round" />
  </g>
  <g id="squished-sticker-DL">
    <path d="m 00,0 5,10 -5,0 z" stroke-width="0.75px" stroke="black" stroke-linecap="butt" stroke-linejoin="round" />
  </g>
</defs>
<g>
<g id="UL" transform="translate(45, 10)">
  <use id="CORNERS-l40-o0" href="#sticker-UL" transform="translate( 0,  0)" style="fill: orange"/>
  <use id="CORNERS-l41-o0" href="#sticker-DR" transform="translate( 0,  0)" style="fill: white"/>
  <use id="CORNERS-l45-o0" href="#sticker-DL" transform="translate(10,  0)" style="fill: white"/>
  <use id="CORNERS-l44-o0" href="#sticker-UR" transform="translate(10,  0)" style="fill: orange"/>
  <use id="CORNERS-l36-o0" href="#sticker-DL" transform="translate( 0, 10)" style="fill: orange"/>
  <use id="CORNERS-l37-o0" href="#sticker-UR" transform="translate( 0, 10)" style="fill: white"/>
  <use id="CORNERS-l33-o0" href="#sticker-UL" transform="translate(10, 10)" style="fill: white"/>
  <use id="CORNERS-l32-o0" href="#sticker-DR" transform="translate(10, 10)" style="fill: orange"/>
</g>
<g id="UR" transform="translate(65, 10)">
  <use id="CORNERS-l8-o0" href="#sticker-UL" transform="translate( 0,  0)" style="fill: red"/>
  <use id="CORNERS-l9-o0" href="#sticker-DR" transform="translate( 0,  0)" style="fill: white"/>
  <use id="CORNERS-l13-o0" href="#sticker-DL" transform="translate(10,  0)" style="fill: white"/>
  <use id="CORNERS-l12-o0" href="#sticker-UR" transform="translate(10,  0)" style="fill: red"/>
  <use id="CORNERS-l4-o0" href="#sticker-DL" transform="translate( 0, 10)" style="fill: red"/>
  <use id="CORNERS-l5-o0" href="#sticker-UR" transform="translate( 0, 10)" style="fill: white"/>
  <use id="CORNERS-l1-o0" href="#sticker-UL" transform="translate(10, 10)" style="fill: white"/>
  <use id="CORNERS-l0-o0" href="#sticker-DR" transform="translate(10, 10)" style="fill: red"/>
</g>

<g id="L" transform="translate(10, 35)">
  <use data-copy-id="CORNERS-l40-o0" href="#sticker-UL" transform="translate( 0,  0)" style="fill: orange"/>
  <use id="CORNERS-l43-o0" href="#sticker-DR" transform="translate( 0,  0)" style="fill: pink"/>
  <use id="CORNERS-l38-o0" href="#sticker-DL" transform="translate(10,  0)" style="fill: pink"/>
  <use data-copy-id="CORNERS-l36-o0" href="#sticker-UR" transform="translate(10,  0)" style="fill: orange"/>
  <use id="CORNERS-l56-o0" href="#sticker-DL" transform="translate( 0, 10)" style="fill: orange"/>
  <use id="CORNERS-l58-o0" href="#sticker-UR" transform="translate( 0, 10)" style="fill: pink"/>
  <use id="CORNERS-l55-o0" href="#sticker-UL" transform="translate(10, 10)" style="fill: pink"/>
  <use id="CORNERS-l52-o0" href="#sticker-DR" transform="translate(10, 10)" style="fill: orange"/>
</g>

<g id="FL" transform="translate(35, 35)">
  <use data-copy-id="CORNERS-l36-o0" href="#sticker-UL" transform="translate( 0,  0)" style="fill: orange"/>
  <use id="CORNERS-l39-o0" href="#sticker-DR" transform="translate( 0,  0)" style="fill: limegreen"/>
  <use id="CORNERS-l34-o0" href="#sticker-DL" transform="translate(10,  0)" style="fill: limegreen"/>
  <use data-copy-id="CORNERS-l32-o0" href="#sticker-UR" transform="translate(10,  0)" style="fill: orange"/>
  <use data-copy-id="CORNERS-l52-o0" href="#sticker-DL" transform="translate( 0, 10)" style="fill: orange"/>
  <use id="CORNERS-l54-o0" href="#sticker-UR" transform="translate( 0, 10)" style="fill: limegreen"/>
  <use id="CORNERS-l51-o0" href="#sticker-UL" transform="translate(10, 10)" style="fill: limegreen"/>
  <use id="CORNERS-l48-o0" href="#sticker-DR" transform="translate(10, 10)" style="fill: orange"/>
</g>
<g id="FR" transform="translate(75, 35)">
  <use data-copy-id="CORNERS-l4-o0" href="#sticker-UL" transform="translate( 0,  0)" style="fill: red"/>
  <use id="CORNERS-l7-o0" href="#sticker-DR" transform="translate( 0,  0)" style="fill: limegreen"/>
  <use id="CORNERS-l2-o0" href="#sticker-DL" transform="translate(10,  0)" style="fill: limegreen"/>
  <use data-copy-id="CORNERS-l0-o0" href="#sticker-UR" transform="translate(10,  0)" style="fill: red"/>
  <use id="CORNERS-l20-o0" href="#sticker-DL" transform="translate( 0, 10)" style="fill: red"/>
  <use id="CORNERS-l22-o0" href="#sticker-UR" transform="translate( 0, 10)" style="fill: limegreen"/>
  <use id="CORNERS-l19-o0" href="#sticker-UL" transform="translate(10, 10)" style="fill: limegreen"/>
  <use id="CORNERS-l16-o0" href="#sticker-DR" transform="translate(10, 10)" style="fill: red"/>
</g>

<g id="R" transform="translate(100, 35)">
  <use data-copy-id="CORNERS-l0-o0" href="#sticker-UL" transform="translate( 0,  0)" style="fill: red"/>
  <use id="CORNERS-l3-o0" href="#sticker-DR" transform="translate( 0,  0)" style="fill: pink"/>
  <use id="CORNERS-l14-o0" href="#sticker-DL" transform="translate(10,  0)" style="fill: pink"/>
  <use data-copy-id="CORNERS-l12-o0" href="#sticker-UR" transform="translate(10,  0)" style="fill: red"/>
  <use data-copy-id="CORNERS-l16-o0" href="#sticker-DL" transform="translate( 0, 10)" style="fill: red"/>
  <use id="CORNERS-l18-o0" href="#sticker-UR" transform="translate( 0, 10)" style="fill: pink"/>
  <use id="CORNERS-l31-o0" href="#sticker-UL" transform="translate(10, 10)" style="fill: pink"/>
  <use id="CORNERS-l28-o0" href="#sticker-DR" transform="translate(10, 10)" style="fill: red"/>
</g>

<g id="BR" transform="translate(125, 35)">
  <use data-copy-id="CORNERS-l12-o0" href="#sticker-UL" transform="translate( 0,  0)" style="fill: red"/>
  <use id="CORNERS-l15-o0" href="#sticker-DR" transform="translate( 0,  0)" style="fill: #26f"/>
  <use id="CORNERS-l10-o0" href="#sticker-DL" transform="translate(10,  0)" style="fill: #26f"/>
  <use data-copy-id="CORNERS-l8-o0" href="#sticker-UR" transform="translate(10,  0)" style="fill: red"/>
  <use data-copy-id="CORNERS-l28-o0" href="#sticker-DL" transform="translate( 0, 10)" style="fill: red"/>
  <use id="CORNERS-l30-o0" href="#sticker-UR" transform="translate( 0, 10)" style="fill: #26f"/>
  <use id="CORNERS-l27-o0" href="#sticker-UL" transform="translate(10, 10)" style="fill: #26f"/>
  <use id="CORNERS-l24-o0" href="#sticker-DR" transform="translate(10, 10)" style="fill: red"/>
</g>
<g id="BL" transform="translate(145, 35)">
  <use data-copy-id="CORNERS-l44-o0" href="#sticker-UL" transform="translate( 0,  0)" style="fill: orange"/>
  <use id="CORNERS-l47-o0" href="#sticker-DR" transform="translate( 0,  0)" style="fill: #26f"/>
  <use id="CORNERS-l42-o0" href="#sticker-DL" transform="translate(10,  0)" style="fill: #26f"/>
  <use data-copy-id="CORNERS-l40-o0" href="#sticker-UR" transform="translate(10,  0)" style="fill: orange"/>
  <use id="CORNERS-l60-o0" href="#sticker-DL" transform="translate( 0, 10)" style="fill: orange"/>
  <use id="CORNERS-l62-o0" href="#sticker-UR" transform="translate( 0, 10)" style="fill: #26f"/>
  <use id="CORNERS-l59-o0" href="#sticker-UL" transform="translate(10, 10)" style="fill: #26f"/>
  <use data-copy-id="CORNERS-l56-o0" href="#sticker-DR" transform="translate(10, 10)" style="fill: orange"/>
</g>

<g id="DL" transform="translate(45, 60)">
  <use data-copy-id="CORNERS-l52-o0" href="#sticker-UL" transform="translate( 0,  0)" style="fill: orange"/>
  <use id="CORNERS-l53-o0" href="#sticker-DR" transform="translate( 0,  0)" style="fill: yellow"/>
  <use id="CORNERS-l49-o0" href="#sticker-DL" transform="translate(10,  0)" style="fill: yellow"/>
  <use data-copy-id="CORNERS-l48-o0" href="#sticker-UR" transform="translate(10,  0)" style="fill: orange"/>
  <use data-copy-id="CORNERS-l56-o0" href="#sticker-DL" transform="translate( 0, 10)" style="fill: orange"/>
  <use id="CORNERS-l57-o0" href="#sticker-UR" transform="translate( 0, 10)" style="fill: yellow"/>
  <use id="CORNERS-l61-o0" href="#sticker-UL" transform="translate(10, 10)" style="fill: yellow"/>
  <use data-copy-id="CORNERS-l60-o0" href="#sticker-DR" transform="translate(10, 10)" style="fill: orange"/>
</g>
<g id="DR" transform="translate(65, 60)">
  <use data-copy-id="CORNERS-l20-o0" href="#sticker-UL" transform="translate( 0,  0)" style="fill: red"/>
  <use id="CORNERS-l21-o0" href="#sticker-DR" transform="translate( 0,  0)" style="fill: yellow"/>
  <use id="CORNERS-l17-o0" href="#sticker-DL" transform="translate(10,  0)" style="fill: yellow"/>
  <use data-copy-id="CORNERS-l16-o0" href="#sticker-UR" transform="translate(10,  0)" style="fill: red"/>
  <use data-copy-id="CORNERS-l24-o0" href="#sticker-DL" transform="translate( 0, 10)" style="fill: red"/>
  <use id="CORNERS-l25-o0" href="#sticker-UR" transform="translate( 0, 10)" style="fill: yellow"/>
  <use id="CORNERS-l29-o0" href="#sticker-UL" transform="translate(10, 10)" style="fill: yellow"/>
  <use data-copy-id="CORNERS-l28-o0" href="#sticker-DR" transform="translate(10, 10)" style="fill: red"/>
</g>

<g style="opacity: 0.3;">
<g id="IL" transform="translate(55, 35)">
  <use data-copy-id="CORNERS-l32-o0" href="#squished-sticker-UL" transform="translate( 0,  0)" style="fill: orange"/>
  <use id="CORNERS-l35-o0" href="#squished-sticker-DR" transform="translate( 0,  0)" style="fill: purple"/>
  <use id="CORNERS-l46-o0" href="#squished-sticker-DL" transform="translate(5,  0)" style="fill: purple"/>
  <use data-copy-id="CORNERS-l44-o0" href="#squished-sticker-UR" transform="translate(5,  0)" style="fill: orange"/>
  <use data-copy-id="CORNERS-l48-o0" href="#squished-sticker-DL" transform="translate( 0, 10)" style="fill: orange"/>
  <use id="CORNERS-l50-o0" href="#squished-sticker-UR" transform="translate( 0, 10)" style="fill: purple"/>
  <use id="CORNERS-l63-o0" href="#squished-sticker-UL" transform="translate(5, 10)" style="fill: purple"/>
  <use data-copy-id="CORNERS-l60-o0" href="#squished-sticker-DR" transform="translate(5, 10)" style="fill: orange"/>
</g>
<g id="IR" transform="translate(65, 35)">
  <use data-copy-id="CORNERS-l8-o0" href="#squished-sticker-UL" transform="translate( 0,  0)" style="fill: red"/>
  <use id="CORNERS-l11-o0" href="#squished-sticker-DR" transform="translate( 0,  0)" style="fill: purple"/>
  <use id="CORNERS-l6-o0" href="#squished-sticker-DL" transform="translate(5,  0)" style="fill: purple"/>
  <use data-copy-id="CORNERS-l4-o0" href="#squished-sticker-UR" transform="translate(5,  0)" style="fill: red"/>
  <use data-copy-id="CORNERS-l24-o0" href="#squished-sticker-DL" transform="translate( 0, 10)" style="fill: red"/>
  <use id="CORNERS-l26-o0" href="#squished-sticker-UR" transform="translate( 0, 10)" style="fill: purple"/>
  <use id="CORNERS-l23-o0" href="#squished-sticker-UL" transform="translate(5, 10)" style="fill: purple"/>
  <use data-copy-id="CORNERS-l20-o0" href="#squished-sticker-DR" transform="translate(5, 10)" style="fill: red"/>
</g>
</g>
</g>
</svg>`,px={name:"tri_quad",orbits:[{orbitName:"CORNERS",numPieces:5,numOrientations:3},{orbitName:"CORNER_U",numPieces:1,numOrientations:4},{orbitName:"CORNER_R",numPieces:1,numOrientations:3},{orbitName:"EDGES",numPieces:8,numOrientations:2},{orbitName:"BIG_CENTERS",numPieces:6,numOrientations:1},{orbitName:"SMALL_CENTERS",numPieces:13,numOrientations:3}],defaultPattern:{CORNERS:{pieces:[0,1,2,3,4],orientation:[0,0,0,0,0]},CORNER_U:{pieces:[0],orientation:[0]},CORNER_R:{pieces:[0],orientation:[0]},EDGES:{pieces:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},BIG_CENTERS:{pieces:[0,1,2,3,4,5],orientation:[0,0,0,0,0,0]},SMALL_CENTERS:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11,12],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0]}},moves:{U:{CORNERS:{permutation:[1,2,3,0,4],orientationDelta:[0,0,0,0,0]},CORNER_U:{permutation:[0],orientationDelta:[3]},CORNER_R:{permutation:[0],orientationDelta:[0]},EDGES:{permutation:[1,2,3,0,4,5,6,7],orientationDelta:[0,0,0,0,0,0,0,0]},BIG_CENTERS:{permutation:[1,2,3,0,4,5],orientationDelta:[0,0,0,0,0,0]},SMALL_CENTERS:{permutation:[2,3,4,5,6,7,0,1,8,9,10,11,12],orientationDelta:[0,0,0,0,0,0,0,0,0,0,0,0,0]}},R:{CORNERS:{permutation:[4,0,2,3,1],orientationDelta:[2,2,0,0,2]},CORNER_U:{permutation:[0],orientationDelta:[0]},CORNER_R:{permutation:[0],orientationDelta:[2]},EDGES:{permutation:[5,4,2,3,6,7,1,0],orientationDelta:[0,0,0,0,0,0,0,0]},BIG_CENTERS:{permutation:[4,1,2,3,5,0],orientationDelta:[0,0,0,0,0,0]},SMALL_CENTERS:{permutation:[9,8,7,3,4,5,6,12,10,11,1,0,2],orientationDelta:[0,0,0,0,0,0,0,0,0,0,0,0,0]}}}},mx=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   width="320"
   height="250"
   viewBox="0 0 84.666665 66.145831"
   version="1.1"
   id="svg5"
   inkscape:version="1.2.2 (b0a84865, 2022-12-01)"
   sodipodi:docname="TriQuad.svg"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <sodipodi:namedview
     id="namedview7"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:document-units="mm"
     showgrid="false"
     inkscape:zoom="2.8284271"
     inkscape:cx="202.93965"
     inkscape:cy="135.23417"
     inkscape:window-width="1728"
     inkscape:window-height="945"
     inkscape:window-x="0"
     inkscape:window-y="38"
     inkscape:window-maximized="0"
     inkscape:current-layer="layer1" />
  <defs
     id="defs2" />
  <g stroke="black" stroke-width="0.36px" >
    <rect
       style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       id="rect15738"
       width="11.707812"
       height="4.0348959"
       x="24.27552"
       y="16.734896" />
    <rect
       style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       id="rect15740"
       width="11.90625"
       height="3.6380208"
       x="24.606249"
       y="44.846874" />
    <rect
       style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       id="rect15742"
       width="3.96875"
       height="11.641666"
       x="43.65625"
       y="27.516666" />
    <rect
       style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       id="rect15744"
       width="10.318749"
       height="7.4744792"
       x="63.63229"
       y="42.664062" />
    <rect
       style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       id="rect15746"
       width="10.583333"
       height="8.2020836"
       x="65.021355"
       y="16.536459" />
    <rect
       style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       id="rect15736"
       width="5.8869791"
       height="10.847917"
       x="13.295312"
       y="27.252083" />
    <path
       style="fill:#ffff00;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 26.625856,38.003684 8.676292,0.11123 -3.89321,-5.33926 z"
       id="CORNER_U-l0-o3" />
    <path
       id="BIG_CENTERS-l3-o0"
       style="fill:#ffff00;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="M 35.191134 37.892261 L 26.514661 38.22609 L 26.796297 45.144014 A 1.4187645 1.4461632 0 0 1 26.980782 45.131095 A 1.4187645 1.4461632 0 0 1 28.3993 46.577002 A 1.4187645 1.4461632 0 0 1 26.980782 48.023425 A 1.4187645 1.4461632 0 0 1 26.913603 48.020841 L 27.293424 57.358256 L 32.187699 57.469877 L 33.669263 47.813619 A 1.4187645 1.4461632 0 0 1 33.666679 47.812585 A 1.4187645 1.4461632 0 0 1 33.468758 47.726286 A 1.4187645 1.4461632 0 0 1 33.464624 47.723702 A 1.4187645 1.4461632 0 0 1 33.281689 47.606913 A 1.4187645 1.4461632 0 0 1 33.278589 47.604329 A 1.4187645 1.4461632 0 0 1 33.113741 47.458602 A 1.4187645 1.4461632 0 0 1 32.973698 47.28962 A 1.4187645 1.4461632 0 0 1 32.970597 47.284969 A 1.4187645 1.4461632 0 0 1 32.861043 47.100484 A 1.4187645 1.4461632 0 0 1 32.855876 47.091182 A 1.4187645 1.4461632 0 0 1 32.775777 46.892745 A 1.4187645 1.4461632 0 0 1 32.773193 46.88396 A 1.4187645 1.4461632 0 0 1 32.724618 46.678288 A 1.4187645 1.4461632 0 0 1 32.722034 46.663818 A 1.4187645 1.4461632 0 0 1 32.705497 46.44471 A 1.4187645 1.4461632 0 0 1 32.725651 46.205448 A 1.4187645 1.4461632 0 0 1 32.729785 46.184261 A 1.4187645 1.4461632 0 0 1 32.78818 45.962052 A 1.4187645 1.4461632 0 0 1 32.792314 45.950167 A 1.4187645 1.4461632 0 0 1 32.892049 45.728992 A 1.4187645 1.4461632 0 0 1 33.030025 45.52487 A 1.4187645 1.4461632 0 0 1 33.032609 45.522286 A 1.4187645 1.4461632 0 0 1 33.19849 45.350203 A 1.4187645 1.4461632 0 0 1 33.206759 45.342969 A 1.4187645 1.4461632 0 0 1 33.401579 45.201375 A 1.4187645 1.4461632 0 0 1 33.857365 45.025675 A 1.4187645 1.4461632 0 0 1 34.100761 44.999837 L 35.191134 37.892261 z " />
    <path
       style="fill:#ffff00;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 32.410048,57.136014 5.89543,0.44494 2.8921,-12.5695 -7.00778,-1.44605 z"
       id="SMALL_CENTERS-l7-o0" />
    <path
       style="fill:#ffff00;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 35.524618,38.337384 -1.00111,5.00555 6.67407,1.55729 z"
       id="EDGES-l0-o1" />
    <path
       style="fill:#ffff00;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 38.305478,57.247244 3.00333,-11.79085 4.78308,5.78419 z"
       id="CORNERS-l0-o2" />
    <path
       style="fill:#ffff00;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 22.51018,57.358484 -3.003333,-12.5695 7.119009,-1.44605 0.667406,14.23802 z"
       id="SMALL_CENTERS-l6-o0" />
    <path
       style="fill:#ffff00;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="M 16.442944,47.349782 22.51018,57.358484 19.395614,44.900224 Z"
       id="CORNERS-l3-o1"
       sodipodi:nodetypes="cccc" />
    <path
       style="fill:#ffff00;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 19.506848,44.566524 6.896539,-6.67407 -0.111236,5.56172 z"
       id="EDGES-l3-o0" />
    <path
       style="fill:#ffff00;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 29.295488,64.255014 -6.674074,-6.89653 h 9.677404 l 0.3337,4.11567 z"
       id="path999"
       sodipodi:nodetypes="ccccc" />
    <path
       style="fill:#ffff00;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 32.521288,61.362924 -0.11124,-3.89321 5.45049,0.11124 z"
       id="EDGES-l4-o0"
       sodipodi:nodetypes="cccc" />
    <path
       style="fill:#8800dd;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 26.848325,27.509764 8.676293,-0.11123 -3.89321,5.33926 z"
       id="CORNER_U-l0-o1" />
    <path
       id="BIG_CENTERS-l1-o0"
       style="fill:#8800dd;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="M 32.409908 8.0439535 L 27.515633 8.1550578 L 27.124959 17.753955 A 1.4187645 1.4461632 0 0 1 28.3993 19.192627 A 1.4187645 1.4461632 0 0 1 27.007654 20.638017 L 26.736869 27.287223 L 35.413342 27.621053 L 34.305916 20.403923 A 1.4187645 1.4461632 0 0 1 33.99224 20.440613 A 1.4187645 1.4461632 0 0 1 32.573206 18.994189 A 1.4187645 1.4461632 0 0 1 33.868734 17.553967 L 32.409908 8.0439535 z " />
    <path
       style="fill:#8800dd;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 32.632518,8.3774337 5.89543,-0.44494 2.8921,12.5695003 -7.00778,1.44605 z"
       id="SMALL_CENTERS-l2-o0" />
    <path
       style="fill:#8800dd;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 35.747088,27.176064 -1.00111,-5.00555 6.67407,-1.55729 z"
       id="EDGES-l1-o0" />
    <path
       style="fill:#8800dd;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 38.527948,8.2662037 3.00333,11.7908503 4.78308,-5.78419 z"
       id="CORNERS-l1-o1" />
    <path
       style="fill:#8800dd;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 22.732649,8.1549637 -3.003333,12.5695003 7.119009,1.44605 0.667403,-14.2380203 z"
       id="SMALL_CENTERS-l3-o0" />
    <path
       style="fill:#8800dd;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="M 16.665413,18.631388 22.732649,8.1549637 19.618083,21.548667 Z"
       id="CORNERS-l2-o2"
       sodipodi:nodetypes="cccc" />
    <path
       style="fill:#8800dd;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 19.729317,20.946924 6.896539,6.67407 -0.111236,-5.56172 z"
       id="EDGES-l2-o1" />
    <path
       style="fill:#8800dd;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="M 29.517958,1.2584335 22.843883,8.154963 h 9.677405 l 0.3337,-4.1156695 z"
       id="path1220"
       sodipodi:nodetypes="ccccc" />
    <path
       style="fill:#8800dd;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 32.743758,4.1505235 -0.11124,3.8932095 5.45049,-0.11124 z"
       id="EDGES-l7-o1"
       sodipodi:nodetypes="cccc" />
    <path
       style="fill:#ffa500;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 25.457888,37.131548 -0.11123,-8.676293 5.33926,3.89321 z"
       id="CORNER_U-l0-o2" />
    <path
       id="BIG_CENTERS-l2-o0"
       style="fill:#ffa500;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="M 25.568982 28.566732 L 17.670239 29.778544 A 1.4187645 1.4461632 0 0 1 17.683675 29.974398 A 1.4187645 1.4461632 0 0 1 16.265157 31.420821 A 1.4187645 1.4461632 0 0 1 14.865759 30.208492 L 5.9918823 31.569649 L 6.1029867 36.463924 L 15.111739 36.830827 A 1.4187645 1.4461632 0 0 1 16.52974 35.407658 A 1.4187645 1.4461632 0 0 1 17.948258 36.853564 A 1.4187645 1.4461632 0 0 1 17.944641 36.946065 L 25.235669 37.242688 L 25.568982 28.566732 z " />
    <path
       style="fill:#ffa500;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 6.3255586,31.347355 -0.44494,-5.89543 12.5694994,-2.8921 1.44605,7.00778 z"
       id="SMALL_CENTERS-l4-o0" />
    <path
       style="fill:#ffa500;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 25.124188,28.232785 -5.00555,1.00111 -1.55729,-6.67407 z"
       id="EDGES-l2-o0" />
    <path
       style="fill:#ffa500;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="M 6.2143286,25.451925 19.12771,21.980873 16.804661,19.255769 Z"
       id="CORNERS-l2-o1"
       sodipodi:nodetypes="cccc" />
    <path
       style="fill:#ffa500;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="M 6.1030886,41.247224 18.672588,44.250557 20.118638,37.131548 5.8806186,36.464145 Z"
       id="SMALL_CENTERS-l5-o0" />
    <path
       style="fill:#ffa500;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="M 16.766601,46.846738 6.1030886,41.247224 18.561348,44.36179 Z"
       id="CORNERS-l3-o2"
       sodipodi:nodetypes="cccc" />
    <path
       style="fill:#ffa500;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 18.895048,44.250556 6.67407,-6.896539 -5.56172,0.111236 z"
       id="EDGES-l3-o1" />
    <path
       style="fill:#ff0000;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 37.339636,37.020296 0.11123,-8.676293 -5.33926,3.89321 z"
       id="CORNER_U-l0-o0" />
    <path
       id="BIG_CENTERS-l0-o0"
       style="fill:#ff0000;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="M 37.228219 28.455111 L 37.562048 37.131584 L 44.151827 36.863383 A 1.4187645 1.4461632 0 0 1 44.148726 36.787419 A 1.4187645 1.4461632 0 0 1 45.567761 35.341512 A 1.4187645 1.4461632 0 0 1 46.985763 36.748145 L 56.694214 36.35282 L 56.805835 31.458545 L 46.577519 29.889132 A 1.4187645 1.4461632 0 0 1 45.170886 31.156238 A 1.4187645 1.4461632 0 0 1 43.751851 29.709814 A 1.4187645 1.4461632 0 0 1 43.774072 29.459184 L 37.228219 28.455111 z " />
    <path
       style="fill:#ff0000;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 56.471966,31.236103 0.44494,-5.89543 -12.5695,-2.8921 -1.44605,7.00778 z"
       id="SMALL_CENTERS-l1-o0" />
    <path
       style="fill:#ff0000;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 37.673336,28.121533 5.00555,1.00111 1.55729,-6.67407 z"
       id="EDGES-l1-o1" />
    <path
       style="fill:#ff0000;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 56.583196,25.340673 -11.79085,-3.00333 5.78419,-4.78308 z"
       id="CORNERS-l1-o2" />
    <path
       style="fill:#ff0000;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 56.694436,41.135972 -12.5695,3.003333 -1.44605,-7.119009 14.23802,-0.667403 z"
       id="SMALL_CENTERS-l0-o0" />
    <path
       style="fill:#ff0000;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 48.463076,48.699917 8.23136,-7.563945 -12.45826,3.114566 z"
       id="CORNERS-l0-o1" />
    <path
       style="fill:#ff0000;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 43.902476,44.139304 -6.67407,-6.896539 5.56172,0.111236 z"
       id="EDGES-l0-o0" />
    <path
       id="BIG_CENTERS-l4-o0"
       style="fill:#00ff00;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="M 66.084338 35.995219 L 61.806047 38.374919 L 65.131942 46.747534 A 1.4187645 1.4461632 0 0 1 65.411511 46.718595 A 1.4187645 1.4461632 0 0 1 66.830029 48.164502 A 1.4187645 1.4461632 0 0 1 66.177873 49.380448 L 69.118262 56.782064 L 76.433577 52.105347 L 72.678251 46.259709 A 1.4187645 1.4461632 0 0 1 71.893803 46.502071 A 1.4187645 1.4461632 0 0 1 70.474768 45.055648 A 1.4187645 1.4461632 0 0 1 71.124858 43.841252 L 66.084338 35.995219 z " />
    <path
       style="fill:#00ff00;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 61.782948,38.775304 -5.31064,2.5983 3.8633,12.30575 6.77659,-2.29738 z"
       id="SMALL_CENTERS-l8-o0" />
    <path
       style="fill:#00ff00;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 68.605258,56.567014 -1.6684,-4.82433 -6.54498,2.03262 z"
       id="EDGES-l4-o1" />
    <path
       style="fill:#00ff00;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 56.641118,41.661474 3.37348,11.69033 -7.05188,-2.57016 z"
       id="CORNERS-l0-o0" />
    <path
       style="fill:#00ff00;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 70.210328,33.575674 8.94888,9.32363 -5.4096,4.84846 -7.77783,-11.94454 z"
       id="SMALL_CENTERS-l9-o0" />
    <path
       style="fill:#00ff00;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 76.864042,34.005903 -6.653714,-0.430229 8.98856,9.1714 z"
       id="CORNERS-l4-o2"
       sodipodi:nodetypes="cccc" />
    <path
       style="fill:#00ff00;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 79.271738,43.091204 -2.57317,9.24577 -2.71737,-4.85397 z"
       id="EDGES-l5-o0" />
    <path
       id="BIG_CENTERS-l5-o0"
       style="fill:#2266ff;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="M 71.530001 11.491805 L 68.202039 17.076994 A 1.4187645 1.4461632 0 0 1 68.814404 18.266585 A 1.4187645 1.4461632 0 0 1 67.395886 19.713009 A 1.4187645 1.4461632 0 0 1 66.731844 19.54351 L 61.728015 27.941447 L 65.766528 30.70872 L 72.055033 23.685893 A 1.4187645 1.4461632 0 0 1 71.533101 22.566064 A 1.4187645 1.4461632 0 0 1 72.952136 21.120158 A 1.4187645 1.4461632 0 0 1 73.964478 21.553206 L 78.979159 15.953031 L 71.530001 11.491805 z " />
    <path
       style="fill:#2266ff;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 66.135278,30.550754 4.69448,3.59388 9.29012,-8.94709 -5.0791,-5.04011 z"
       id="SMALL_CENTERS-l10-o0" />
    <path
       style="fill:#2266ff;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 79.015288,16.508154 -3.57346,3.64529 4.73882,4.95094 z"
       id="EDGES-l6-o1" />
    <path
       style="fill:#2266ff;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 71.012098,33.865134 8.95782,-8.23416 -3.12323,8.383912 z"
       id="CORNERS-l4-o1"
       sodipodi:nodetypes="cccc" />
    <path
       style="fill:#2266ff;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 57.722308,25.327844 4.35253,-12.16831 6.75248,2.67868 -7.2206,12.2894 z"
       id="SMALL_CENTERS-l11-o0" />
    <path
       style="fill:#2266ff;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 55.884858,14.300954 1.83745,11.02689 4.19858,-12.13592 z"
       id="CORNERS-l1-o0" />
    <path
       style="fill:#2266ff;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 62.196388,12.973214 9.42272,-1.82149 -3.13206,4.59732 z"
       id="EDGES-l7-o0" />
    <path
       style="fill:#ff0000;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 56.881638,40.784544 4.33814,-7.34148 -4.11567,-7.78641 z"
       id="CORNER_R-l0-o0" />
    <path
       style="fill:#00ff00;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 57.01393,41.025095 13.215848,-7.359561 -9.01,-0.3337 z"
       id="CORNER_R-l0-o1"
       sodipodi:nodetypes="cccc" />
    <path
       style="fill:#2266ff;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 57.549048,25.879124 3.44826,7.00777 8.89876,0.55617 z"
       id="CORNER_R-l0-o2" />
    <path
       style="fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 76.795311,34.065104 3.241146,-8.73125 -0.79375,17.396354 z"
       id="CORNERS-l4-o0" />
    <path
       style="fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 79.176561,42.531771 3.704167,1.653645 0.926041,-19.446874 -3.836458,0.727604 z"
       id="SMALL_CENTERS-l12-o0" />
    <path
       style="fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 79.176561,42.664062 -2.315104,9.855729 6.151562,-8.334375 z"
       id="EDGES-l5-o1"
       sodipodi:nodetypes="cccc" />
    <path
       style="fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 80.168749,25.333854 -0.727604,-8.665104 4.43177,8.003646 z"
       id="EDGES-l6-o0"
       sodipodi:nodetypes="cccc" />
    <path
       style="fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="M 22.357291,57.546875 16.594008,46.956087 6.4258814,41.831092 Z"
       id="CORNERS-l3-o0"
       sodipodi:nodetypes="cccc" />
    <path
       style="fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="M 22.555729,7.8713541 5.9581597,25.268988 16.594008,18.891116 Z"
       id="CORNERS-l2-o0"
       sodipodi:nodetypes="cccc" />
    <path
       style="fill:#ffa500;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="M 5.8869791,25.598438 V 41.076562 L 1.0583333,33.866667 Z"
       id="path15317" />
    <path
       id="SMALL_CENTERS-l7-o2"
       style="fill:#000000"
       d="M 34.124532 44.998804 A 1.4187645 1.4461632 0 0 0 34.001025 45.004488 L 33.634123 47.8007 A 1.4187645 1.4461632 0 0 0 34.124532 47.891134 A 1.4187645 1.4461632 0 0 0 35.54305 46.44471 A 1.4187645 1.4461632 0 0 0 34.124532 44.998804 z " />
    <path
       id="SMALL_CENTERS-l7-o1"
       style="fill:#ffff00"
       d="M 32.906002 53.353333 L 32.530314 56.217757 A 1.4187645 1.4461632 0 0 0 32.669324 56.225509 A 1.4187645 1.4461632 0 0 0 34.087842 54.779085 A 1.4187645 1.4461632 0 0 0 32.906002 53.353333 z " />
    <path
       id="SMALL_CENTERS-l6-o1"
       style="fill:#000000"
       d="M 26.711031 45.158484 A 1.4187645 1.4461632 0 0 0 25.561747 46.577002 A 1.4187645 1.4461632 0 0 0 26.844873 48.015674 L 26.711031 45.158484 z " />
    <path
       id="SMALL_CENTERS-l6-o2"
       style="fill:#ffff00"
       d="M 27.072766 52.873775 A 1.4187645 1.4461632 0 0 0 25.760185 54.316064 A 1.4187645 1.4461632 0 0 0 27.17922 55.762488 A 1.4187645 1.4461632 0 0 0 27.208158 55.761454 L 27.072766 52.873775 z " />
    <path
       id="SMALL_CENTERS-l5-o1"
       style="fill:#ffa500"
       d="M 7.4383057 36.536788 A 1.4187645 1.4461632 0 0 0 8.8568237 37.969259 A 1.4187645 1.4461632 0 0 0 10.267074 36.669596 L 7.4383057 36.536788 z " />
    <path
       id="SMALL_CENTERS-l5-o2"
       style="fill:#000000"
       d="M 15.112256 36.896973 A 1.4187645 1.4461632 0 0 0 16.52974 38.299988 A 1.4187645 1.4461632 0 0 0 17.93689 37.029264 L 15.112256 36.896973 z " />
    <path
       id="SMALL_CENTERS-l4-o1"
       style="fill:#000000"
       d="M 16.265157 28.528491 A 1.4187645 1.4461632 0 0 0 14.846122 29.974398 A 1.4187645 1.4461632 0 0 0 14.86886 30.227096 L 17.679024 29.858643 A 1.4187645 1.4461632 0 0 0 16.265157 28.528491 z " />
    <path
       id="SMALL_CENTERS-l4-o2"
       style="fill:#ffa500"
       d="M 8.9229696 29.586825 A 1.4187645 1.4461632 0 0 0 7.5039347 31.032731 A 1.4187645 1.4461632 0 0 0 7.5137533 31.191895 L 10.325985 30.822925 A 1.4187645 1.4461632 0 0 0 8.9229696 29.586825 z " />
    <path
       id="SMALL_CENTERS-l3-o2"
       style="fill:#000000"
       d="M 26.980782 17.74672 A 1.4187645 1.4461632 0 0 0 25.561747 19.192627 A 1.4187645 1.4461632 0 0 0 26.920321 20.636466 L 27.055713 17.748271 A 1.4187645 1.4461632 0 0 0 26.980782 17.74672 z " />
    <path
       id="SMALL_CENTERS-l3-o1"
       style="fill:#8800dd"
       d="M 27.377657 9.7430745 A 1.4187645 1.4461632 0 0 0 25.958622 11.188981 A 1.4187645 1.4461632 0 0 0 27.295492 12.632304 L 27.430884 9.7435913 A 1.4187645 1.4461632 0 0 0 27.377657 9.7430745 z " />
    <path
       id="SMALL_CENTERS-l2-o2"
       style="fill:#8800dd"
       d="M 32.867761 9.8092204 A 1.4187645 1.4461632 0 0 0 32.820736 9.8107707 L 33.194356 12.661759 A 1.4187645 1.4461632 0 0 0 34.286279 11.255127 A 1.4187645 1.4461632 0 0 0 32.867761 9.8092204 z " />
    <path
       id="SMALL_CENTERS-l2-o1"
       style="fill:#000000"
       d="M 33.99224 17.548283 A 1.4187645 1.4461632 0 0 0 33.836694 17.557585 L 34.212382 20.422526 A 1.4187645 1.4461632 0 0 0 35.410758 18.994189 A 1.4187645 1.4461632 0 0 0 33.99224 17.548283 z " />
    <path
       id="SMALL_CENTERS-l1-o2"
       style="fill:#000000"
       d="M 45.170886 28.263908 A 1.4187645 1.4461632 0 0 0 43.759603 29.569255 L 46.571318 29.937708 A 1.4187645 1.4461632 0 0 0 46.589404 29.709814 A 1.4187645 1.4461632 0 0 0 45.170886 28.263908 z " />
    <path
       id="SMALL_CENTERS-l1-o1"
       style="fill:#ff0000"
       d="M 53.505261 29.322241 A 1.4187645 1.4461632 0 0 0 52.090361 30.661694 L 54.898975 31.030147 A 1.4187645 1.4461632 0 0 0 54.923779 30.768148 A 1.4187645 1.4461632 0 0 0 53.505261 29.322241 z " />
    <path
       id="SMALL_CENTERS-l0-o2"
       style="fill:#ff0000"
       d="M 55.642082 36.412764 L 52.842769 36.544023 A 1.4187645 1.4461632 0 0 0 54.232865 37.704675 A 1.4187645 1.4461632 0 0 0 55.642082 36.412764 z " />
    <path
       id="SMALL_CENTERS-l0-o1"
       style="fill:#000000"
       d="M 46.985246 36.818424 L 44.159062 36.951233 A 1.4187645 1.4461632 0 0 0 45.567761 38.233842 A 1.4187645 1.4461632 0 0 0 46.985246 36.818424 z " />
    <path
       id="SMALL_CENTERS-l8-o1"
       style="fill:#00ff00"
       d="M 62.328495 40.066288 A 1.4187645 1.4461632 0 0 0 61.412789 41.417627 A 1.4187645 1.4461632 0 0 0 62.831824 42.86405 A 1.4187645 1.4461632 0 0 0 63.449874 42.71884 L 62.328495 40.066288 z " />
    <path
       id="SMALL_CENTERS-l8-o2"
       style="fill:#000000"
       d="M 65.151579 46.743917 A 1.4187645 1.4461632 0 0 0 63.992476 48.164502 A 1.4187645 1.4461632 0 0 0 65.411511 49.610925 A 1.4187645 1.4461632 0 0 0 66.246086 49.332389 L 65.151579 46.743917 z " />
    <path
       id="SMALL_CENTERS-l9-o1"
       style="fill:#000000"
       d="M 71.893803 43.609741 A 1.4187645 1.4461632 0 0 0 71.182218 43.805078 L 72.747498 46.209066 A 1.4187645 1.4461632 0 0 0 73.312321 45.055648 A 1.4187645 1.4461632 0 0 0 71.893803 43.609741 z " />
    <path
       id="SMALL_CENTERS-l9-o2"
       style="fill:#00ff00"
       d="M 67.858907 37.259741 A 1.4187645 1.4461632 0 0 0 67.076526 37.500037 L 68.644906 39.908675 A 1.4187645 1.4461632 0 0 0 69.277425 38.705648 A 1.4187645 1.4461632 0 0 0 67.858907 37.259741 z " />
    <path
       id="SMALL_CENTERS-l10-o1"
       style="fill:#2266ff"
       d="M 68.77203 27.473258 L 66.907544 29.649353 A 1.4187645 1.4461632 0 0 0 67.792761 29.965613 A 1.4187645 1.4461632 0 0 0 69.211279 28.519189 A 1.4187645 1.4461632 0 0 0 68.77203 27.473258 z " />
    <path
       id="SMALL_CENTERS-l10-o2"
       style="fill:#000000"
       d="M 73.899365 21.489644 L 72.033329 23.667289 A 1.4187645 1.4461632 0 0 0 72.952136 24.012488 A 1.4187645 1.4461632 0 0 0 74.370654 22.566064 A 1.4187645 1.4461632 0 0 0 73.899365 21.489644 z " />
    <path
       id="SMALL_CENTERS-l11-o1"
       style="fill:#000000"
       d="M 67.395886 16.820679 A 1.4187645 1.4461632 0 0 0 65.976851 18.266585 A 1.4187645 1.4461632 0 0 0 66.670349 19.508887 L 68.128141 17.027901 A 1.4187645 1.4461632 0 0 0 67.395886 16.820679 z " />
    <path
       id="SMALL_CENTERS-l11-o2"
       style="fill:#2266ff"
       d="M 63.096407 24.361304 A 1.4187645 1.4461632 0 0 0 61.677372 25.80721 A 1.4187645 1.4461632 0 0 0 62.276819 26.986983 L 63.72996 24.513749 A 1.4187645 1.4461632 0 0 0 63.096407 24.361304 z " />
    <path
       id="SMALL_CENTERS-l12-o1"
       style="fill:#ffffff"
       d="M 83.706002 26.853658 A 1.2100496 1.2568218 0 0 0 82.512276 28.109912 A 1.2100496 1.2568218 0 0 0 83.586629 29.358415 L 83.706002 26.853658 z " />
    <path
       id="SMALL_CENTERS-l12-o2"
       style="fill:#ffffff"
       d="M 83.135494 38.833805 A 1.2100496 1.2568218 0 0 0 82.044604 40.083858 A 1.2100496 1.2568218 0 0 0 83.017155 41.315308 L 83.135494 38.833805 z " />
  </g>
</svg>
`});var Ca={};dn(Ca,{cube3x3x3LLFaceSVG:()=>Sx,cube3x3x3LLSVG:()=>yx,cube3x3x3SVG:()=>gx});var gx,yx,Sx,Ta=C(()=>{gx=`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN"
       "http://www.w3.org/TR/2001/REC-SVG-20050904/DTD/svg11.dtd">
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 518 440" preserveAspectRatio="xMidYMid meet">
  <title>3x3x3</title>
  <defs>
    <g id="sticker">
        <rect x="0" y="0" width="1" height="1" stroke="black" stroke-width="0.04px" />
    </g>
    <g id="sticker-thin-v">
        <rect x="0" y="0" width="0.5" height="1" stroke="black" stroke-width="0.04px" style="opacity: 0.3;" />
    </g>
    <g id="sticker-thin-h">
        <rect x="0" y="0" width="1" height="0.5" stroke="black" stroke-width="0.04px" style="opacity: 0.3;" />
    </g>
  </defs>
  <g id="puzzle" transform="translate(5,40) scale(40)">
    <!-- Hints -->
    <use data-copy-id="CORNERS-l0-o1" href="#sticker-thin-v" transform="translate(6.5,2.1)" style="fill: red"/>
    <use data-copy-id="EDGES-l1-o1"   href="#sticker-thin-v" transform="translate(6.5,1.1)" style="fill: red"/>
    <use data-copy-id="CORNERS-l1-o2" href="#sticker-thin-v" transform="translate(6.5,0.1)" style="fill: red"/>

    <use data-copy-id="CORNERS-l2-o2" href="#sticker-thin-h" transform="translate(3.3,-0.6)" style="fill: #26f"/>
    <use data-copy-id="EDGES-l2-o1"   href="#sticker-thin-h" transform="translate(4.3,-0.6)" style="fill: #26f"/>
    <use data-copy-id="CORNERS-l1-o1" href="#sticker-thin-h" transform="translate(5.3,-0.6)" style="fill: #26f"/>

    <use data-copy-id="CORNERS-l3-o2" href="#sticker-thin-v" transform="translate(2.6,2.1)" style="fill: orange"/>
    <use data-copy-id="EDGES-l3-o1"   href="#sticker-thin-v" transform="translate(2.6,1.1)" style="fill: orange"/>
    <use data-copy-id="CORNERS-l2-o1" href="#sticker-thin-v" transform="translate(2.6,0.1)" style="fill: orange"/>

    <!-- CORNERS -->
    <use id="CORNERS-l0-o0" href="#sticker" transform="translate(5.3,2.1)" style="fill: white"/>
    <use id="CORNERS-l0-o1" href="#sticker" transform="translate(6.5,3.3)" style="fill: red"/>
    <use id="CORNERS-l0-o2" href="#sticker" transform="translate(5.3,3.3)" style="fill: limegreen"/>

    <use id="CORNERS-l1-o0" href="#sticker" transform="translate(5.3,0.1)" style="fill: white"/>
    <use id="CORNERS-l1-o1" href="#sticker" transform="translate(9.7,3.3)" style="fill: #26f"/>
    <use id="CORNERS-l1-o2" href="#sticker" transform="translate(8.5,3.3)" style="fill: red"/>

    <use id="CORNERS-l2-o0" href="#sticker" transform="translate(3.3,0.1)" style="fill: white"/>
    <use id="CORNERS-l2-o1" href="#sticker" transform="translate(0.1,3.3)" style="fill: orange"/>
    <use id="CORNERS-l2-o2" href="#sticker" transform="translate(11.7,3.3)" style="fill: #26f"/>

    <use id="CORNERS-l3-o0" href="#sticker" transform="translate(3.3,2.1)" style="fill: white"/>
    <use id="CORNERS-l3-o1" href="#sticker" transform="translate(3.3,3.3)" style="fill: limegreen"/>
    <use id="CORNERS-l3-o2" href="#sticker" transform="translate(2.1,3.3)" style="fill: orange"/>

    <use id="CORNERS-l4-o0" href="#sticker" transform="translate(5.3,6.5)" style="fill: yellow"/>
    <use id="CORNERS-l4-o1" href="#sticker" transform="translate(5.3,5.3)" style="fill: limegreen"/>
    <use id="CORNERS-l4-o2" href="#sticker" transform="translate(6.5,5.3)" style="fill: red"/>

    <use id="CORNERS-l5-o0" href="#sticker" transform="translate(3.3,6.5)" style="fill: yellow"/>
    <use id="CORNERS-l5-o1" href="#sticker" transform="translate(2.1,5.3)" style="fill: orange"/>
    <use id="CORNERS-l5-o2" href="#sticker" transform="translate(3.3,5.3)" style="fill: limegreen"/>

    <use id="CORNERS-l6-o0" href="#sticker" transform="translate(3.3,8.5)" style="fill: yellow"/>
    <use id="CORNERS-l6-o1" href="#sticker" transform="translate(11.7,5.3)" style="fill: #26f"/>
    <use id="CORNERS-l6-o2" href="#sticker" transform="translate(0.1,5.3)"  style="fill: orange"/>

    <use id="CORNERS-l7-o0" href="#sticker" transform="translate(5.3,8.5)" style="fill: yellow"/>
    <use id="CORNERS-l7-o1" href="#sticker" transform="translate(8.5,5.3)" style="fill: red"/>
    <use id="CORNERS-l7-o2" href="#sticker" transform="translate(9.7,5.3)" style="fill: #26f"/>

    <!-- EDGES -->
    <use id="EDGES-l0-o0"  href="#sticker" transform="translate(4.3,2.1)" style="fill: white"/>
    <use id="EDGES-l0-o1"  href="#sticker" transform="translate(4.3,3.3)" style="fill: limegreen"/>

    <use id="EDGES-l1-o0"  href="#sticker" transform="translate(5.3,1.1)" style="fill: white"/>
    <use id="EDGES-l1-o1"  href="#sticker" transform="translate(7.5,3.3)" style="fill: red"/>

    <use id="EDGES-l2-o0"  href="#sticker" transform="translate(4.3,0.1)" style="fill: white"/>
    <use id="EDGES-l2-o1"  href="#sticker" transform="translate(10.7,3.3)" style="fill: #26f"/>

    <use id="EDGES-l3-o0"  href="#sticker" transform="translate(3.3,1.1)" style="fill: white"/>
    <use id="EDGES-l3-o1"  href="#sticker" transform="translate(1.1,3.3)" style="fill: orange"/>

    <use id="EDGES-l4-o0"  href="#sticker" transform="translate(4.3,6.5)" style="fill: yellow"/>
    <use id="EDGES-l4-o1"  href="#sticker" transform="translate(4.3,5.3)" style="fill: limegreen"/>

    <use id="EDGES-l5-o0" href="#sticker" transform="translate(5.3,7.5)" style="fill: yellow"/>
    <use id="EDGES-l5-o1" href="#sticker" transform="translate(7.5,5.3)" style="fill: red"/>

    <use id="EDGES-l6-o0" href="#sticker" transform="translate(4.3,8.5)" style="fill: yellow"/>
    <use id="EDGES-l6-o1" href="#sticker" transform="translate(10.7,5.3)" style="fill: #26f"/>

    <use id="EDGES-l7-o0"  href="#sticker" transform="translate(3.3,7.5)" style="fill: yellow"/>
    <use id="EDGES-l7-o1"  href="#sticker" transform="translate(1.1,5.3)" style="fill: orange"/>

    <use id="EDGES-l8-o0"  href="#sticker" transform="translate(5.3,4.3)" style="fill: limegreen"/>
    <use id="EDGES-l8-o1"  href="#sticker" transform="translate(6.5,4.3)" style="fill: red"/>

    <use id="EDGES-l9-o0"  href="#sticker" transform="translate(3.3,4.3)" style="fill: limegreen"/>
    <use id="EDGES-l9-o1"  href="#sticker" transform="translate(2.1,4.3)" style="fill: orange"/>

    <use id="EDGES-l10-o0" href="#sticker" transform="translate(9.7,4.3)" style="fill: #26f"/>
    <use id="EDGES-l10-o1" href="#sticker" transform="translate(8.5,4.3)" style="fill: red"/>

    <use id="EDGES-l11-o0" href="#sticker" transform="translate(11.7,4.3)" style="fill: #26f"/>
    <use id="EDGES-l11-o1" href="#sticker" transform="translate(0.1,4.3)" style="fill: orange"/>

    <!-- CENTERS -->
    <!-- TODO: Allow the same sticker to be reused for multiple orientations -->
    <use id="CENTERS-l0-o0" href="#sticker" transform="translate(4.3,1.1)" style="fill: white"/>
    <use id="CENTERS-l0-o1" href="#sticker" transform="translate(4.3,1.1)" style="fill: white"/>
    <use id="CENTERS-l0-o2" href="#sticker" transform="translate(4.3,1.1)" style="fill: white"/>
    <use id="CENTERS-l0-o3" href="#sticker" transform="translate(4.3,1.1)" style="fill: white"/>

    <use id="CENTERS-l1-o0" href="#sticker" transform="translate(1.1,4.3)" style="fill: orange"/>
    <use id="CENTERS-l1-o1" href="#sticker" transform="translate(1.1,4.3)" style="fill: orange"/>
    <use id="CENTERS-l1-o2" href="#sticker" transform="translate(1.1,4.3)" style="fill: orange"/>
    <use id="CENTERS-l1-o3" href="#sticker" transform="translate(1.1,4.3)" style="fill: orange"/>

    <use id="CENTERS-l2-o0" href="#sticker" transform="translate(4.3,4.3)" style="fill: limegreen"/>
    <use id="CENTERS-l2-o1" href="#sticker" transform="translate(4.3,4.3)" style="fill: limegreen"/>
    <use id="CENTERS-l2-o2" href="#sticker" transform="translate(4.3,4.3)" style="fill: limegreen"/>
    <use id="CENTERS-l2-o3" href="#sticker" transform="translate(4.3,4.3)" style="fill: limegreen"/>

    <use id="CENTERS-l3-o0" href="#sticker" transform="translate(7.5,4.3)" style="fill: red"/>
    <use id="CENTERS-l3-o1" href="#sticker" transform="translate(7.5,4.3)" style="fill: red"/>
    <use id="CENTERS-l3-o2" href="#sticker" transform="translate(7.5,4.3)" style="fill: red"/>
    <use id="CENTERS-l3-o3" href="#sticker" transform="translate(7.5,4.3)" style="fill: red"/>

    <use id="CENTERS-l4-o0" href="#sticker" transform="translate(10.7,4.3)" style="fill: #26f"/>
    <use id="CENTERS-l4-o1" href="#sticker" transform="translate(10.7,4.3)" style="fill: #26f"/>
    <use id="CENTERS-l4-o2" href="#sticker" transform="translate(10.7,4.3)" style="fill: #26f"/>
    <use id="CENTERS-l4-o3" href="#sticker" transform="translate(10.7,4.3)" style="fill: #26f"/>

    <use id="CENTERS-l5-o0" href="#sticker" transform="translate(4.3,7.5)" style="fill: yellow"/>
    <use id="CENTERS-l5-o1" href="#sticker" transform="translate(4.3,7.5)" style="fill: yellow"/>
    <use id="CENTERS-l5-o2" href="#sticker" transform="translate(4.3,7.5)" style="fill: yellow"/>
    <use id="CENTERS-l5-o3" href="#sticker" transform="translate(4.3,7.5)" style="fill: yellow"/>
  </g>

</svg>
`,yx=`<?xml version="1.0" encoding="UTF-8"?>
<svg width="288px" height="288px" viewBox="-16 -16 288 288" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <title>3x3x3 LL</title>
  <defs>
    <g id="sticker">
        <rect x="-10" y="-10" width="1" height="1" stroke="black" stroke-width="0.04px" />
    </g>
  </defs>
  <g id="3x3x3-LL" stroke="none" stroke-width="4" style="none" stroke-linejoin="round">
    <rect id="CENTERS-l0-o0" stroke="#000000" style="fill: white" x="96" y="96" width="64" height="64"></rect>
    <rect id="CENTERS-l0-o1" stroke="#000000" style="fill: white" x="96" y="96" width="64" height="64"></rect>
    <rect id="CENTERS-l0-o2" stroke="#000000" style="fill: white" x="96" y="96" width="64" height="64"></rect>
    <rect id="CENTERS-l0-o3" stroke="#000000" style="fill: white" x="96" y="96" width="64" height="64"></rect>

    <rect    id="CORNERS-l0-o0" stroke="#000000" style="fill: white" x="160" y="160" width="64" height="64"></rect>
    <polygon id="CORNERS-l0-o1" stroke="#000000" style="fill: red" points="224 160 252 160 252 252 224 224"></polygon>
    <polygon id="CORNERS-l0-o2" stroke="#000000" style="fill: limegreen" transform="translate(206, 238) scale(1, -1) rotate(-90) translate(-206, -238) " points="192 192 220 192 220 284 192 256"></polygon>
    <rect    id="CORNERS-l1-o0" stroke="#000000" style="fill: white" x="160" y="32" width="64" height="64"></rect>
    <polygon id="CORNERS-l1-o1" stroke="#000000" style="fill: #26f" transform="translate(206, 18) rotate(-90) translate(-206, -18) " points="192 -28 220 -28 220 64 192 36"></polygon>
    <polygon id="CORNERS-l1-o2" stroke="#000000" style="fill: red" transform="translate(238, 50) scale(1, -1) translate(-238, -50) " points="224 4 252 4 252 96 224 68"></polygon>
    <rect    id="CORNERS-l2-o0" stroke="#000000" style="fill: white" x="32" y="32" width="64" height="64"></rect>
    <polygon id="CORNERS-l2-o1" stroke="#000000" style="fill: orange" transform="translate(18, 50) scale(-1, -1) translate(-18, -50) " points="4 4 32 4 32 96 4 68"></polygon>
    <polygon id="CORNERS-l2-o2" stroke="#000000" style="fill: #26f" transform="translate(50, 18) scale(1, -1) rotate(90) translate(-50, -18) " points="36 -28 64 -28 64 64 36 36"></polygon>
    <rect    id="CORNERS-l3-o0" stroke="#000000" style="fill: white" x="32" y="160" width="64" height="64"></rect>
    <polygon id="CORNERS-l3-o1" stroke="#000000" style="fill: limegreen" transform="translate(50, 238) rotate(90) translate(-50, -238) " points="36 192 64 192 64 284 36 256"></polygon>
    <polygon id="CORNERS-l3-o2" stroke="#000000" style="fill: orange" transform="translate(18, 206) scale(-1, 1) translate(-18, -206) " points="4 160 32 160 32 252 4 224"></polygon>

    <rect id="EDGES-l0-o0" stroke="#000000" style="fill: white" x="96" y="160" width="64" height="64"></rect>
    <rect id="EDGES-l0-o1" stroke="#000000" style="fill: limegreen" transform="translate(128, 238) scale(1, -1) rotate(90) translate(-128, -238) " x="114" y="206" width="28" height="64"></rect>
    <rect id="EDGES-l1-o0" stroke="#000000" style="fill: white" x="160" y="96" width="64" height="64"></rect>
    <rect id="EDGES-l1-o1" stroke="#000000" style="fill: red" x="224" y="96" width="28" height="64"></rect>
    <rect id="EDGES-l2-o0" stroke="#000000" style="fill: white" x="96" y="32" width="64" height="64"></rect>
    <rect id="EDGES-l2-o1" stroke="#000000" style="fill: #26f" transform="translate(128, 18) scale(1, -1) rotate(90) translate(-128, -18) " x="114" y="-14" width="28" height="64"></rect>
    <rect id="EDGES-l3-o0" stroke="#000000" style="fill: white" x="32" y="96" width="64" height="64"></rect>
    <rect id="EDGES-l3-o1" stroke="#000000" style="fill: orange" x="4" y="96" width="28" height="64"></rect>

  </g>
  <g style="opacity: 0">
    <!-- CORNERS -->
    <use id="CORNERS-l4-o0" href="#sticker" style="fill: yellow"/>
    <use id="CORNERS-l4-o1" href="#sticker" style="fill: limegreen"/>
    <use id="CORNERS-l4-o2" href="#sticker" style="fill: red"/>

    <use id="CORNERS-l5-o0" href="#sticker" style="fill: yellow"/>
    <use id="CORNERS-l5-o1" href="#sticker" style="fill: orange"/>
    <use id="CORNERS-l5-o2" href="#sticker" style="fill: limegreen"/>

    <use id="CORNERS-l6-o0" href="#sticker" style="fill: yellow"/>
    <use id="CORNERS-l6-o1" href="#sticker" style="fill: #26f"/>
    <use id="CORNERS-l6-o2" href="#sticker"  style="fill: orange"/>

    <use id="CORNERS-l7-o0" href="#sticker" style="fill: yellow"/>
    <use id="CORNERS-l7-o1" href="#sticker" style="fill: red"/>
    <use id="CORNERS-l7-o2" href="#sticker" style="fill: #26f"/>

    <!-- EDGES -->
    <use id="EDGES-l4-o0"  href="#sticker" style="fill: yellow"/>
    <use id="EDGES-l4-o1"  href="#sticker" style="fill: limegreen"/>

    <use id="EDGES-l5-o0" href="#sticker" style="fill: yellow"/>
    <use id="EDGES-l5-o1" href="#sticker" style="fill: red"/>

    <use id="EDGES-l6-o0" href="#sticker" style="fill: yellow"/>
    <use id="EDGES-l6-o1" href="#sticker" style="fill: #26f"/>

    <use id="EDGES-l7-o0"  href="#sticker" style="fill: yellow"/>
    <use id="EDGES-l7-o1"  href="#sticker" style="fill: orange"/>

    <use id="EDGES-l8-o0"  href="#sticker" style="fill: limegreen"/>
    <use id="EDGES-l8-o1"  href="#sticker" style="fill: red"/>

    <use id="EDGES-l9-o0"  href="#sticker" style="fill: limegreen"/>
    <use id="EDGES-l9-o1"  href="#sticker" style="fill: orange"/>

    <use id="EDGES-l10-o0" href="#sticker" style="fill: #26f"/>
    <use id="EDGES-l10-o1" href="#sticker" style="fill: red"/>

    <use id="EDGES-l11-o0" href="#sticker" style="fill: #26f"/>
    <use id="EDGES-l11-o1" href="#sticker" style="fill: orange"/>

    <!-- CENTERS -->
    <!-- TODO: Allow the same sticker to be reused for multiple orientations -->
    <use id="CENTERS-l1-o0" href="#sticker" style="fill: orange"/>
    <use id="CENTERS-l1-o1" href="#sticker" style="fill: orange"/>
    <use id="CENTERS-l1-o2" href="#sticker" style="fill: orange"/>
    <use id="CENTERS-l1-o3" href="#sticker" style="fill: orange"/>

    <use id="CENTERS-l2-o0" href="#sticker" style="fill: limegreen"/>
    <use id="CENTERS-l2-o1" href="#sticker" style="fill: limegreen"/>
    <use id="CENTERS-l2-o2" href="#sticker" style="fill: limegreen"/>
    <use id="CENTERS-l2-o3" href="#sticker" style="fill: limegreen"/>

    <use id="CENTERS-l3-o0" href="#sticker" style="fill: red"/>
    <use id="CENTERS-l3-o1" href="#sticker" style="fill: red"/>
    <use id="CENTERS-l3-o2" href="#sticker" style="fill: red"/>
    <use id="CENTERS-l3-o3" href="#sticker" style="fill: red"/>

    <use id="CENTERS-l4-o0" href="#sticker" style="fill: #26f"/>
    <use id="CENTERS-l4-o1" href="#sticker" style="fill: #26f"/>
    <use id="CENTERS-l4-o2" href="#sticker" style="fill: #26f"/>
    <use id="CENTERS-l4-o3" href="#sticker" style="fill: #26f"/>

    <use id="CENTERS-l5-o0" href="#sticker" style="fill: yellow"/>
    <use id="CENTERS-l5-o1" href="#sticker" style="fill: yellow"/>
    <use id="CENTERS-l5-o2" href="#sticker" style="fill: yellow"/>
    <use id="CENTERS-l5-o3" href="#sticker" style="fill: yellow"/>
  </g>
</svg>`,Sx=`<?xml version="1.0" encoding="UTF-8"?>
<svg width="204px" height="204px" viewBox="30 30 196 196" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <title>3x3x3 LL</title>
  <defs>
    <g id="sticker">
        <rect x="-10" y="-10" width="1" height="1" stroke="black" stroke-width="0.04px" />
    </g>
  </defs>
  <g id="3x3x3-LL" stroke="none" stroke-width="4" style="none" stroke-linejoin="round">
    <rect x="32" y="32" width="192" height="192" stroke="black" stroke-width="16px" />
    <rect id="CENTERS-l0-o0" stroke="#000000" style="fill: white" x="96" y="96" width="64" height="64"></rect>
    <rect id="CENTERS-l0-o1" stroke="#000000" style="fill: white" x="96" y="96" width="64" height="64"></rect>
    <rect id="CENTERS-l0-o2" stroke="#000000" style="fill: white" x="96" y="96" width="64" height="64"></rect>
    <rect id="CENTERS-l0-o3" stroke="#000000" style="fill: white" x="96" y="96" width="64" height="64"></rect>

    <rect id="CORNERS-l0-o0" stroke="#000000" style="fill: white" x="160" y="160" width="64" height="64"></rect>
    <rect id="CORNERS-l1-o0" stroke="#000000" style="fill: white" x="160" y="32" width="64" height="64"></rect>
    <rect id="CORNERS-l2-o0" stroke="#000000" style="fill: white" x="32" y="32" width="64" height="64"></rect>
    <rect id="CORNERS-l3-o0" stroke="#000000" style="fill: white" x="32" y="160" width="64" height="64"></rect>

    <rect id="EDGES-l0-o0" stroke="#000000" style="fill: white" x="96" y="160" width="64" height="64"></rect>
    <rect id="EDGES-l1-o0" stroke="#000000" style="fill: white" x="160" y="96" width="64" height="64"></rect>
    <rect id="EDGES-l2-o0" stroke="#000000" style="fill: white" x="96" y="32" width="64" height="64"></rect>
    <rect id="EDGES-l3-o0" stroke="#000000" style="fill: white" x="32" y="96" width="64" height="64"></rect>
  </g>
  <g style="opacity: 0">
    <polygon id="CORNERS-l0-o1" stroke="#000000" style="fill: red" points="224 160 252 160 252 252 224 224"></polygon>
    <polygon id="CORNERS-l0-o2" stroke="#000000" style="fill: limegreen" transform="translate(206, 238) scale(1, -1) rotate(-90) translate(-206, -238) " points="192 192 220 192 220 284 192 256"></polygon>
    <polygon id="CORNERS-l1-o1" stroke="#000000" style="fill: #26f" transform="translate(206, 18) rotate(-90) translate(-206, -18) " points="192 -28 220 -28 220 64 192 36"></polygon>
    <polygon id="CORNERS-l1-o2" stroke="#000000" style="fill: red" transform="translate(238, 50) scale(1, -1) translate(-238, -50) " points="224 4 252 4 252 96 224 68"></polygon>
    <polygon id="CORNERS-l2-o1" stroke="#000000" style="fill: orange" transform="translate(18, 50) scale(-1, -1) translate(-18, -50) " points="4 4 32 4 32 96 4 68"></polygon>
    <polygon id="CORNERS-l2-o2" stroke="#000000" style="fill: #26f" transform="translate(50, 18) scale(1, -1) rotate(90) translate(-50, -18) " points="36 -28 64 -28 64 64 36 36"></polygon>
    <polygon id="CORNERS-l3-o1" stroke="#000000" style="fill: limegreen" transform="translate(50, 238) rotate(90) translate(-50, -238) " points="36 192 64 192 64 284 36 256"></polygon>
    <polygon id="CORNERS-l3-o2" stroke="#000000" style="fill: orange" transform="translate(18, 206) scale(-1, 1) translate(-18, -206) " points="4 160 32 160 32 252 4 224"></polygon>

    <rect id="EDGES-l0-o1" stroke="#000000" style="fill: limegreen" transform="translate(128, 238) scale(1, -1) rotate(90) translate(-128, -238) " x="114" y="206" width="28" height="64"></rect>
    <rect id="EDGES-l1-o1" stroke="#000000" style="fill: red" x="224" y="96" width="28" height="64"></rect>
    <rect id="EDGES-l2-o1" stroke="#000000" style="fill: #26f" transform="translate(128, 18) scale(1, -1) rotate(90) translate(-128, -18) " x="114" y="-14" width="28" height="64"></rect>
    <rect id="EDGES-l3-o1" stroke="#000000" style="fill: orange" x="4" y="96" width="28" height="64"></rect>

    <!-- CORNERS -->
    <use id="CORNERS-l4-o0" href="#sticker" style="fill: yellow"/>
    <use id="CORNERS-l4-o1" href="#sticker" style="fill: limegreen"/>
    <use id="CORNERS-l4-o2" href="#sticker" style="fill: red"/>

    <use id="CORNERS-l5-o0" href="#sticker" style="fill: yellow"/>
    <use id="CORNERS-l5-o1" href="#sticker" style="fill: orange"/>
    <use id="CORNERS-l5-o2" href="#sticker" style="fill: limegreen"/>

    <use id="CORNERS-l6-o0" href="#sticker" style="fill: yellow"/>
    <use id="CORNERS-l6-o1" href="#sticker" style="fill: #26f"/>
    <use id="CORNERS-l6-o2" href="#sticker"  style="fill: orange"/>

    <use id="CORNERS-l7-o0" href="#sticker" style="fill: yellow"/>
    <use id="CORNERS-l7-o1" href="#sticker" style="fill: red"/>
    <use id="CORNERS-l7-o2" href="#sticker" style="fill: #26f"/>

    <!-- EDGES -->
    <use id="EDGES-l4-o0"  href="#sticker" style="fill: yellow"/>
    <use id="EDGES-l4-o1"  href="#sticker" style="fill: limegreen"/>

    <use id="EDGES-l5-o0" href="#sticker" style="fill: yellow"/>
    <use id="EDGES-l5-o1" href="#sticker" style="fill: red"/>

    <use id="EDGES-l6-o0" href="#sticker" style="fill: yellow"/>
    <use id="EDGES-l6-o1" href="#sticker" style="fill: #26f"/>

    <use id="EDGES-l7-o0"  href="#sticker" style="fill: yellow"/>
    <use id="EDGES-l7-o1"  href="#sticker" style="fill: orange"/>

    <use id="EDGES-l8-o0"  href="#sticker" style="fill: limegreen"/>
    <use id="EDGES-l8-o1"  href="#sticker" style="fill: red"/>

    <use id="EDGES-l9-o0"  href="#sticker" style="fill: limegreen"/>
    <use id="EDGES-l9-o1"  href="#sticker" style="fill: orange"/>

    <use id="EDGES-l10-o0" href="#sticker" style="fill: #26f"/>
    <use id="EDGES-l10-o1" href="#sticker" style="fill: red"/>

    <use id="EDGES-l11-o0" href="#sticker" style="fill: #26f"/>
    <use id="EDGES-l11-o1" href="#sticker" style="fill: orange"/>

    <!-- CENTERS -->
    <!-- TODO: Allow the same sticker to be reused for multiple orientations -->
    <use id="CENTERS-l1-o0" href="#sticker" style="fill: orange"/>
    <use id="CENTERS-l1-o1" href="#sticker" style="fill: orange"/>
    <use id="CENTERS-l1-o2" href="#sticker" style="fill: orange"/>
    <use id="CENTERS-l1-o3" href="#sticker" style="fill: orange"/>

    <use id="CENTERS-l2-o0" href="#sticker" style="fill: limegreen"/>
    <use id="CENTERS-l2-o1" href="#sticker" style="fill: limegreen"/>
    <use id="CENTERS-l2-o2" href="#sticker" style="fill: limegreen"/>
    <use id="CENTERS-l2-o3" href="#sticker" style="fill: limegreen"/>

    <use id="CENTERS-l3-o0" href="#sticker" style="fill: red"/>
    <use id="CENTERS-l3-o1" href="#sticker" style="fill: red"/>
    <use id="CENTERS-l3-o2" href="#sticker" style="fill: red"/>
    <use id="CENTERS-l3-o3" href="#sticker" style="fill: red"/>

    <use id="CENTERS-l4-o0" href="#sticker" style="fill: #26f"/>
    <use id="CENTERS-l4-o1" href="#sticker" style="fill: #26f"/>
    <use id="CENTERS-l4-o2" href="#sticker" style="fill: #26f"/>
    <use id="CENTERS-l4-o3" href="#sticker" style="fill: #26f"/>

    <use id="CENTERS-l5-o0" href="#sticker" style="fill: yellow"/>
    <use id="CENTERS-l5-o1" href="#sticker" style="fill: yellow"/>
    <use id="CENTERS-l5-o2" href="#sticker" style="fill: yellow"/>
    <use id="CENTERS-l5-o3" href="#sticker" style="fill: yellow"/>
  </g>
</svg>`});var Rd={};dn(Rd,{cube4x4x4LLSVG:()=>vx});var vx,bd=C(()=>{vx=`<svg
  height="256"
  viewBox="0 0 256 256"
  width="256"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <g fill="none" fill-rule="nonzero" stroke="#000">
    <g stroke-linejoin="round" stroke-width="3" transform="translate(17 17)">
      <!-- U -->
      <path id="CORNERS-l1-o0" d="m184.6 147.8v36.8h-36.8v-36.8z" style="fill: white" />
      <path id="EDGES-l10-o0" d="m147.8 184.6h-36.8v-36.8h36.8z" style="fill: white" />
      <path id="EDGES-l0-o0" d="m111 147.8v36.8h-36.8v-36.8z" style="fill: white" />
      <path id="CORNERS-l0-o0" d="m74.2 184.6h-36.8v-36.8h36.8z" style="fill: white" />
      <path id="EDGES-l6-o0" d="m37.4 147.8v-36.8h36.8v36.8z" style="fill: white" />
      <path id="CENTERS-l10-o0" d="m74.2 111h36.8v36.8h-36.8z" style="fill: white" />
      <path id="CENTERS-l21-o0" d="m111 147.8v-36.8h36.8v36.8z" style="fill: white" />
      <path id="EDGES-l2-o0" d="m147.8 111h36.8v36.8h-36.8z" style="fill: white" />
      <path id="EDGES-l21-o0" d="m184.6 74.2v36.8h-36.8v-36.8z" style="fill: white" />
      <path id="CENTERS-l15-o0" d="m147.8 111h-36.8v-36.8h36.8z" style="fill: white" />
      <path id="CENTERS-l6-o0" d="m111 74.2v36.8h-36.8v-36.8z" style="fill: white" />
      <path id="EDGES-l22-o0" d="m74.2 111h-36.8v-36.8h36.8z" style="fill: white" />
      <path id="CORNERS-l6-o0" d="m37.4 74.2v-36.8h36.8v36.8z" style="fill: white" />
      <path id="EDGES-l15-o0" d="m74.2 37.4h36.8v36.8h-36.8z" style="fill: white" />
      <path id="EDGES-l18-o0" d="m111 74.2v-36.8h36.8v36.8z" style="fill: white" />
      <path id="CORNERS-l3-o0" d="m147.8 37.4h36.8v36.8h-36.8z" style="fill: white" />

      <path id="CORNERS-l0-o1" d="m.6000061 221.399997 36.7999939-36.8h36.8v36.8z" style="fill: limegreen" />
      <path id="EDGES-l0-o1" d="m74.2 184.599997h36.8v36.8h-36.8z" style="fill: limegreen" />
      <path id="EDGES-l10-o1" d="m111 221.399997v-36.8h36.8v36.8z" style="fill: limegreen" />
      <path id="CORNERS-l1-o2" d="m147.8 184.599997h36.8l36.799994 36.8h-73.599994z" style="fill: limegreen" />

      <path id="CORNERS-l0-o2" d="m-17.7999969 166.2h36.8l36.7999938 36.8h-73.5999938z" style="fill: orange" transform="matrix(0 1 -1 0 203.600003 165.599997)" />
      <path id="EDGES-l6-o1" d="m.60000305 147.8v-36.8h36.80000005v36.8z" style="fill: orange" transform="matrix(0 1 -1 0 148.400003 110.399997)" />
      <path id="EDGES-l22-o1" d="m.60000305 74.2h36.80000005v36.8h-36.80000005z" style="fill: orange" transform="matrix(0 1 -1 0 111.600003 73.599997)" />
      <path id="CORNERS-l6-o1" d="m-17.7999966 55.8 36.7999997-36.8h36.8v36.8z" style="fill: orange" transform="matrix(0 1 -1 0 56.400003 18.399997)" />

      <path id="CORNERS-l3-o1" d="m147.800006 37.3999992 36.799994-36.79999996h36.8v36.79999996z" style="fill: #26f" transform="matrix(-1 0 0 -1 369.2 37.999998)" />
      <path id="EDGES-l18-o1" d="m111 .59999924h36.8v36.79999996h-36.8z" style="fill: #26f" transform="matrix(-1 0 0 -1 258.8 37.999998)" />
      <path id="EDGES-l15-o1" d="m74.2 37.3999992v-36.79999996h36.8v36.79999996z" style="fill: #26f" transform="matrix(-1 0 0 -1 185.2 37.999998)" />
      <path id="CORNERS-l6-o2" d="m.6.59999924h36.8l36.7999939 36.79999996h-73.5999939z" style="fill: #26f" transform="matrix(-1 0 0 -1 74.8 37.999998)" />

      <path id="CORNERS-l1-o1" d="m166.200018 203 36.799994-36.8h36.8v36.8z" style="fill: red" transform="matrix(0 -1 1 0 18.400012 387.600012)" />
      <path id="EDGES-l2-o1" d="m184.600012 111h36.8v36.8h-36.8z" style="fill: red" transform="matrix(0 -1 1 0 73.600012 332.400012)" />
      <path id="EDGES-l21-o1" d="m184.600012 111v-36.8h36.8v36.8z" style="fill: red" transform="matrix(0 -1 1 0 110.400012 295.600012)" />
      <path id="CORNERS-l3-o2" d="m166.200012 19h36.8l36.8 36.8h-73.6z" style="fill: red" transform="matrix(0 -1 1 0 165.600012 240.400012)" />
    </g>
    <g opacity="0" transform="translate(17 242)">
      <path id="EDGES-l1-o0" d="m12 0v1h-1v-1z" style="fill: limegreen" />
      <path id="CENTERS-l0-o0" d="m10 1h-1v-1h1z" style="fill: limegreen" />
      <path id="CENTERS-l23-o0" d="m9 0v1h-1v-1z" style="fill: limegreen" />
      <path id="EDGES-l20-o0" d="m7 1h-1v-1h1z" style="fill: limegreen" />
      <path id="EDGES-l23-o0" d="m6 2v-1h1v1z" style="fill: limegreen" />
      <path id="CENTERS-l14-o0" d="m8 1h1v1h-1z" style="fill: limegreen" />
      <path id="CENTERS-l1-o0" d="m9 2v-1h1v1z" style="fill: limegreen" />
      <path id="EDGES-l7-o0" d="m11 1h1v1h-1z" style="fill: limegreen" />
      <path id="CORNERS-l4-o1" d="m12 3v1h-1v-1z" style="fill: limegreen" />
      <path id="EDGES-l14-o1" d="m10 4h-1v-1h1z" style="fill: limegreen" />
      <path id="EDGES-l3-o1" d="m9 3v1h-1v-1z" style="fill: limegreen" />
      <path id="CORNERS-l2-o2" d="m7 4h-1v-1h1z" style="fill: limegreen" />

      <path id="CORNERS-l2-o0" d="m6 6v-1h1v1z" style="fill: yellow"/>
      <path id="EDGES-l3-o0" d="m8 5h1v1h-1z" style="fill: yellow"/>
      <path id="EDGES-l14-o0" d="m9 6v-1h1v1z" style="fill: yellow"/>
      <path id="CORNERS-l4-o0" d="m11 5h1v1h-1z" style="fill: yellow"/>
      <path id="EDGES-l5-o0" d="m12 7v1h-1v-1z" style="fill: yellow"/>
      <path id="CENTERS-l3-o0" d="m10 8h-1v-1h1z" style="fill: yellow"/>
      <path id="CENTERS-l16-o0" d="m9 7v1h-1v-1z" style="fill: yellow"/>
      <path id="EDGES-l9-o0" d="m7 8h-1v-1h1z" style="fill: yellow"/>
      <path id="EDGES-l16-o0" d="m6 9v-1h1v1z" style="fill: yellow"/>
      <path id="CENTERS-l8-o0" d="m8 8h1v1h-1z" style="fill: yellow"/>
      <path id="CENTERS-l5-o0" d="m9 9v-1h1v1z" style="fill: yellow"/>
      <path id="EDGES-l12-o0" d="m11 8h1v1h-1z" style="fill: yellow"/>
      <path id="CORNERS-l5-o0" d="m12 10v1h-1v-1z" style="fill: yellow"/>
      <path id="EDGES-l8-o0" d="m10 11h-1v-1h1z" style="fill: yellow"/>
      <path id="EDGES-l19-o0" d="m9 10v1h-1v-1z" style="fill: yellow"/>
      <path id="CORNERS-l7-o0" d="m7 11h-1v-1h1z" style="fill: yellow"/>

      <path id="EDGES-l9-o1" d="m5 0v1h-1v-1z" style="fill: orange" />
      <path id="CENTERS-l20-o0" d="m4 1h1v1h-1z" style="fill: orange" />
      <path id="CENTERS-l22-o0" d="m5 3v1h-1v-1z" style="fill: orange" />
      <path id="EDGES-l20-o1" d="m4 4h-1v-1h1z" style="fill: orange" />
      <path id="EDGES-l23-o1" d="m3 2v-1h1v1z" style="fill: orange" />
      <path id="CENTERS-l17-o0" d="m4 1h-1v-1h1z" style="fill: orange" />
      <path id="CENTERS-l9-o0" d="m2 0v1h-1v-1z" style="fill: orange" />
      <path id="EDGES-l16-o1" d="m1 1h1v1h-1z" style="fill: orange" />
      <path id="CORNERS-l7-o2" d="m2 3v1h-1v-1z" style="fill: orange" />
      <path id="EDGES-l17-o1" d="m1 4h-1v-1h1z" style="fill: orange" />
      <path id="EDGES-l13-o1" d="m0 2v-1h1v1z" style="fill: orange" />
      <path id="CORNERS-l2-o1" d="m1 1h-1v-1h1z" style="fill: orange" />

      <path id="EDGES-l11-o0" d="m25 3v1h-1v-1z" style="fill: #26f" />
      <path id="CENTERS-l19-o0" d="m23 4h-1v-1h1z" style="fill: #26f" />
      <path id="CENTERS-l13-o0" d="m22 3v1h-1v-1z" style="fill: #26f" />
      <path id="EDGES-l17-o0" d="m20 4h-1v-1h1z" style="fill: #26f" />
      <path id="EDGES-l13-o0" d="m19 2v-1h1v1z" style="fill: #26f" />
      <path id="CENTERS-l18-o0" d="m21 1h1v1h-1z" style="fill: #26f" />
      <path id="CENTERS-l11-o0" d="m22 2v-1h1v1z" style="fill: #26f" />
      <path id="EDGES-l4-o0" d="m24 1h1v1h-1z" style="fill: #26f" />
      <path id="CORNERS-l7-o1" d="m25 0v1h-1v-1z" style="fill: #26f" />
      <path id="EDGES-l19-o1" d="m23 1h-1v-1h1z" style="fill: #26f" />
      <path id="EDGES-l8-o1" d="m22 0v1h-1v-1z" style="fill: #26f" />
      <path id="CORNERS-l5-o2" d="m20 1h-1v-1h1z" style="fill: #26f" />

      <path id="EDGES-l7-o1" d="m14 4h-1v-1h1z" style="fill: red" />
      <path id="CENTERS-l7-o0" d="m13 2v-1h1v1z" style="fill: red" />
      <path id="CENTERS-l12-o0" d="m14 1h-1v-1h1z" style="fill: red" />
      <path id="EDGES-l5-o1" d="m15 0v1h-1v-1z" style="fill: red" />
      <path id="EDGES-l12-o1" d="m14 1h1v1h-1z" style="fill: red" />
      <path id="CENTERS-l4-o0" d="m15 3v1h-1v-1z" style="fill: red" />
      <path id="CENTERS-l2-o0" d="m17 4h-1v-1h1z" style="fill: red" />
      <path id="EDGES-l1-o1" d="m16 2v-1h1v1z" style="fill: red" />
      <path id="CORNERS-l4-o2" d="m17 1h-1v-1h1z" style="fill: red" />
      <path id="EDGES-l4-o1" d="m18 0v1h-1v-1z" style="fill: red" />
      <path id="EDGES-l11-o1" d="m17 1h1v1h-1z" style="fill: red" />
      <path id="CORNERS-l5-o1" d="m18 3v1h-1v-1z" style="fill: red" />
    </g>
  </g>
</svg>`});var Vr={};dn(Vr,{babyFTOSVG:()=>xx,ftoSVG:()=>Ex,kilominxSVG:()=>_x,loopoverJSON:()=>wx,loopoverSVG:()=>Mx,rediCubeJSON:()=>Rx,rediCubeSVG:()=>bx});var xx,Ex,_x,Gi,wx,Mx,Rx,bx,Hr=C(()=>{xx=`<?xml version="1.0" encoding="UTF-8"?>
<svg width="1348px" height="556px" viewBox="210 210 1588 796" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>fto</title>
    <g id="fto" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linejoin="round">
      <g transform="translate(-360, 0)">
        <g id="BL" transform="translate(2020, 608) scale(-1, -1) rotate(90) translate(-2040, -608) translate(1560, 368)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l4-o3" style="fill: #ff8000;" points="480 0 640 160 320 160"></polygon>
            <polygon id="C4RNER-l5-o2" style="fill: #ff8000;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l2-o0" style="fill: #ff8000;" transform="translate(480, 240) scale(1, -1) translate(-480, -240) " points="480 160 640 320 320 320"></polygon>
            <polygon id="C4RNER-l3-o1" style="fill: #ff8000;" points="320 160 480 320 160 320"></polygon>
        </g>
        <g id="D" transform="translate(1280, 628)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l4-o0" style="fill: #f4f400;" points="480 0 640 160 320 160"></polygon>
            <polygon id="C4RNER-l3-o0" style="fill: #f4f400;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l4-o0" style="fill: #f4f400;" transform="translate(480, 240) scale(1, -1) translate(-480, -240) " points="480 160 640 320 320 320"></polygon>
            <polygon id="C4RNER-l1-o0" style="fill: #f4f400;" points="320 160 480 320 160 320"></polygon>
        </g>
        <g id="BR" transform="translate(1500, 608) scale(1, -1) rotate(90) translate(-1480, -608) translate(1000, 368)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l4-o1" style="fill: #aaaaaa;" points="480 0 640 160 320 160"></polygon>
            <polygon id="C4RNER-l2-o2" style="fill: #aaaaaa;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l1-o0" style="fill: #aaaaaa;" transform="translate(480, 240) scale(1, -1) translate(-480, -240) " points="480 160 640 320 320 320"></polygon>
            <polygon id="C4RNER-l1-o3" style="fill: #aaaaaa;" points="320 160 480 320 160 320"></polygon>
        </g>
        <g id="B" transform="translate(1760, 348) scale(1, -1) translate(-1760, -328) translate(1280, 88)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l4-o2" style="fill: #2266ff;" points="480 0 640 160 320 160"></polygon>
            <polygon id="C4RNER-l5-o3" style="fill: #2266ff;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l6-o0" style="fill: #2266ff;" transform="translate(480, 240) scale(1, -1) translate(-480, -240) " points="480 160 640 320 320 320"></polygon>
            <polygon id="C4RNER-l2-o1" style="fill: #2266ff;" points="320 160 480 320 160 320"></polygon>
        </g>
      </g>
      <g id="R" transform="translate(868, 608) scale(-1, -1) rotate(90) translate(-888, -608) translate(408, 368)" stroke="#000000" stroke-width="12">
          <polygon id="C4RNER-l0-o1" style="fill: red;" points="480 0 640 160 320 160"></polygon>
          <polygon id="C4RNER-l2-o3" style="fill: red;" points="640 160 800 320 480 320"></polygon>
          <polygon id="CENTERS-l3-o0" style="fill: red;" transform="translate(480, 240) scale(1, -1) translate(-480, -240) " points="480 160 640 320 320 320"></polygon>
          <polygon id="C4RNER-l1-o2" style="fill: red;" points="320 160 480 320 160 320"></polygon>
      </g>
      <g id="F" transform="translate(128, 628)" stroke="#000000" stroke-width="12">
          <polygon id="C4RNER-l0-o2" style="fill: #44ee00;" points="480 0 640 160 320 160"></polygon>
          <polygon id="C4RNER-l1-o1" style="fill: #44ee00;" points="640 160 800 320 480 320"></polygon>
          <polygon id="CENTERS-l0-o0" style="fill: #44ee00;" transform="translate(480, 240) scale(1, -1) translate(-480, -240) " points="480 160 640 320 320 320"></polygon>
          <polygon id="C4RNER-l3-o3" style="fill: #44ee00;" points="320 160 480 320 160 320"></polygon>
      </g>
      <g id="L" transform="translate(348, 608) scale(1, -1) rotate(90) translate(-328, -608) translate(-152, 368)" stroke="#000000" stroke-width="12">
          <polygon id="C4RNER-l0-o3" style="fill: #8800dd;" points="480 0 640 160 320 160"></polygon>
          <polygon id="C4RNER-l5-o1" style="fill: #8800dd;" points="640 160 800 320 480 320"></polygon>
          <polygon id="CENTERS-l5-o0" style="fill: #8800dd;" transform="translate(480, 240) scale(1, -1) translate(-480, -240) " points="480 160 640 320 320 320"></polygon>
          <polygon id="C4RNER-l3-o2" style="fill: #8800dd;" points="320 160 480 320 160 320"></polygon>
      </g>
      <g id="U" transform="translate(608, 348) scale(1, -1) translate(-608, -328) translate(128, 88)" stroke="#000000" stroke-width="12">
          <polygon id="C4RNER-l0-o0" style="fill: #ffffff;" points="480 0 640 160 320 160"></polygon>
          <polygon id="C4RNER-l2-o0" style="fill: #ffffff;" points="640 160 800 320 480 320"></polygon>
          <polygon id="CENTERS-l7-o0" style="fill: #ffffff;" transform="translate(480, 240) scale(1, -1) translate(-480, -240) " points="480 160 640 320 320 320"></polygon>
          <polygon id="C4RNER-l5-o0" style="fill: #ffffff;" points="320 160 480 320 160 320"></polygon>
      </g>
    </g>
</svg>
`,Ex=`<?xml version="1.0" encoding="UTF-8"?>
<svg width="2368px" height="1216px" viewBox="0 0 2368 1216" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>fto</title>
    <g id="fto" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linejoin="round">
        <g id="BL" transform="translate(2040.000000, 608.000000) scale(-1, -1) rotate(90.000000) translate(-2040.000000, -608.000000) translate(1560.000000, 368.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l4-o3" style="fill: #ff8000;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l9-o0" style="fill: #ff8000;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l16-o0" style="fill: #ff8000;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l3-o0" style="fill: #ff8000;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l3-o2" style="fill: #ff8000;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l19-o0" style="fill: #ff8000;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l7-o0" style="fill: #ff8000;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l3-o0" style="fill: #ff8000;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l0-o1" style="fill: #ff8000;" points="160 320 320 480 0 480"></polygon>
        </g>
        <g id="D" transform="translate(1280.000000, 648.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l4-o0" style="fill: #f4f400;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l3-o1" style="fill: #f4f400;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l8-o0" style="fill: #f4f400;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l5-o1" style="fill: #f4f400;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l0-o0" style="fill: #f4f400;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l17-o0" style="fill: #f4f400;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l1-o1" style="fill: #f4f400;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l6-o0" style="fill: #f4f400;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l2-o0" style="fill: #f4f400;" points="160 320 320 480 0 480"></polygon>
        </g>
        <g id="BR" transform="translate(1480.000000, 608.000000) scale(1, -1) rotate(90.000000) translate(-1480.000000, -608.000000) translate(1000.000000, 368.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l4-o1" style="fill: #aaaaaa;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l2-o0" style="fill: #aaaaaa;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l15-o0" style="fill: #aaaaaa;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l5-o0" style="fill: #aaaaaa;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l5-o2" style="fill: #aaaaaa;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l2-o0" style="fill: #aaaaaa;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l4-o0" style="fill: #aaaaaa;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l4-o0" style="fill: #aaaaaa;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l2-o3" style="fill: #aaaaaa;" points="160 320 320 480 0 480"></polygon>
        </g>
        <g id="B" transform="translate(1760.000000, 328.000000) scale(1, -1) translate(-1760.000000, -328.000000) translate(1280.000000, 88.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l4-o2" style="fill: #2266ff;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l9-o1" style="fill: #2266ff;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l13-o0" style="fill: #2266ff;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l2-o1" style="fill: #2266ff;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l3-o3" style="fill: #2266ff;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l12-o0" style="fill: #2266ff;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l8-o1" style="fill: #2266ff;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l10-o0" style="fill: #2266ff;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l5-o1" style="fill: #2266ff;" points="160 320 320 480 0 480"></polygon>
        </g>
        <g id="R" transform="translate(888.000000, 608.000000) scale(-1, -1) rotate(90.000000) translate(-888.000000, -608.000000) translate(408.000000, 368.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l1-o1" style="fill: red;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l6-o1" style="fill: red;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l7-o0" style="fill: red;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l0-o1" style="fill: red;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l5-o3" style="fill: red;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l5-o0" style="fill: red;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l4-o1" style="fill: red;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l11-o0" style="fill: red;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l2-o2" style="fill: red;" points="160 320 320 480 0 480"></polygon>
        </g>
        <g id="F" transform="translate(128.000000, 648.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l1-o2" style="fill: #44ee00;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l0-o0" style="fill: #44ee00;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l0-o0" style="fill: #44ee00;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l10-o0" style="fill: #44ee00;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l2-o1" style="fill: #44ee00;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l1-o0" style="fill: #44ee00;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l1-o0" style="fill: #44ee00;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l14-o0" style="fill: #44ee00;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l0-o3" style="fill: #44ee00;" points="160 320 320 480 0 480"></polygon>
        </g>
        <g id="L" transform="translate(328.000000, 608.000000) scale(1, -1) rotate(90.000000) translate(-328.000000, -608.000000) translate(-152.000000, 368.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l1-o3" style="fill: #8800dd;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l11-o1" style="fill: #8800dd;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l21-o0" style="fill: #8800dd;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l10-o1" style="fill: #8800dd;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l3-o1" style="fill: #8800dd;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l18-o0" style="fill: #8800dd;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l7-o1" style="fill: #8800dd;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l9-o0" style="fill: #8800dd;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l0-o2" style="fill: #8800dd;" points="160 320 320 480 0 480"></polygon>
        </g>
        <g id="U" transform="translate(608.000000, 328.000000) scale(1, -1) translate(-608.000000, -328.000000) translate(128.000000, 88.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l1-o0" style="fill: #ffffff;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l6-o0" style="fill: #ffffff;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l20-o0" style="fill: #ffffff;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l11-o0" style="fill: #ffffff;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l5-o0" style="fill: #ffffff;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l23-o0" style="fill: #ffffff;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l8-o0" style="fill: #ffffff;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l22-o0" style="fill: #ffffff;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l3-o0" style="fill: #ffffff;" points="160 320 320 480 0 480"></polygon>
        </g>
    </g>
</svg>
`,_x=`<svg id="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 500">
<style type="text/css"><![CDATA[.sticker { stroke: #000000; stroke-width: 1px; }]]></style>
<g><title>U</title>
<polygon id="CORNERS-l7-o0" class="sticker" style="fill: #ffffff" points="247.941 89.861 283.500 115.696 269.918 157.499 212.382 138.805"/>
<polygon id="CORNERS-l1-o0" class="sticker" style="fill: #ffffff" points="154.845 157.499 141.263 115.696 176.822 89.861 212.382 138.805"/>
<polygon id="CORNERS-l6-o0" class="sticker" style="fill: #ffffff" points="176.822 89.861 212.381 64.025 247.941 89.861 212.382 138.805"/>
<polygon id="CORNERS-l0-o0" class="sticker" style="fill: #ffffff" points="212.381 199.301 168.427 199.301 154.845 157.499 212.382 138.805"/>
<polygon id="CORNERS-l2-o0" class="sticker" style="fill: #ffffff" points="269.918 157.499 256.335 199.301 212.381 199.301 212.382 138.805"/>
</g><g><title>F</title>
<polygon id="CORNERS-l8-o0" class="sticker" style="fill: #008800" points="247.941 319.263 212.381 345.098 176.822 319.263 212.382 270.32"/>
<polygon id="CORNERS-l2-o2" class="sticker" style="fill: #008800" points="212.381 209.823 256.335 209.823 269.918 251.625 212.382 270.32"/>
<polygon id="CORNERS-l19-o1" class="sticker" style="fill: #008800" points="269.918 251.625 283.500 293.428 247.941 319.263 212.382 270.32"/>
<polygon id="CORNERS-l0-o1" class="sticker" style="fill: #008800" points="154.845 251.625 168.427 209.823 212.381 209.823 212.382 270.32"/>
<polygon id="CORNERS-l3-o2" class="sticker" style="fill: #008800" points="176.822 319.263 141.263 293.428 154.845 251.625 212.382 270.32"/>
</g><g><title>L</title>
<polygon id="CORNERS-l4-o0" class="sticker" style="fill: #8800dd" points="87.302 290.176 43.349 290.176 29.766 248.374 87.303 229.68"/>
<polygon id="CORNERS-l0-o2" class="sticker" style="fill: #8800dd" points="122.862 180.736 158.421 206.571 144.839 248.374 87.303 229.68"/>
<polygon id="CORNERS-l3-o1" class="sticker" style="fill: #8800dd" points="144.839 248.374 131.256 290.176 87.302 290.176 87.303 229.68"/>
<polygon id="CORNERS-l1-o1" class="sticker" style="fill: #8800dd" points="51.743 180.736 87.302 154.901 122.862 180.736 87.303 229.68"/>
<polygon id="CORNERS-l5-o2" class="sticker" style="fill: #8800dd" points="29.766 248.374 16.184 206.571 51.743 180.736 87.303 229.68"/>
</g><g><title>BL</title>
<polygon id="CORNERS-l10-o0" class="sticker" style="fill: #ffff00" points="700.480 172.224 664.921 198.059 629.361 172.224 664.921 123.281"/>
<polygon id="CORNERS-l1-o2" class="sticker" style="fill: #ffff00" points="664.921 62.784 708.874 62.784 722.457 104.586 664.921 123.281"/>
<polygon id="CORNERS-l5-o1" class="sticker" style="fill: #ffff00" points="722.457 104.586 736.039 146.389 700.480 172.224 664.921 123.281"/>
<polygon id="CORNERS-l6-o1" class="sticker" style="fill: #ffff00" points="607.384 104.586 620.967 62.784 664.921 62.784 664.921 123.281"/>
<polygon id="CORNERS-l11-o2" class="sticker" style="fill: #ffff00" points="629.361 172.224 593.802 146.389 607.384 104.586 664.921 123.281"/>
</g><g><title>BR</title>
<polygon id="CORNERS-l13-o0" class="sticker" style="fill: #0000ff" points="545.874 172.224 510.315 198.059 474.755 172.224 510.315 123.281"/>
<polygon id="CORNERS-l6-o2" class="sticker" style="fill: #0000ff" points="510.315 62.784 554.269 62.784 567.851 104.586 510.315 123.281"/>
<polygon id="CORNERS-l11-o1" class="sticker" style="fill: #0000ff" points="567.851 104.586 581.433 146.389 545.874 172.224 510.315 123.281"/>
<polygon id="CORNERS-l7-o1" class="sticker" style="fill: #0000ff" points="452.779 104.586 466.361 62.784 510.315 62.784 510.315 123.281"/>
<polygon id="CORNERS-l12-o2" class="sticker" style="fill: #0000ff" points="474.755 172.224 439.196 146.389 452.779 104.586 510.315 123.281"/>
</g><g><title>R</title>
<polygon id="CORNERS-l12-o1" class="sticker" style="fill: #ff0000" points="373.019 180.736 408.579 206.571 394.996 248.374 337.461 229.68"/>
<polygon id="CORNERS-l2-o1" class="sticker" style="fill: #ff0000" points="279.924 248.374 266.341 206.571 301.901 180.736 337.461 229.68"/>
<polygon id="CORNERS-l7-o2" class="sticker" style="fill: #ff0000" points="301.901 180.736 337.460 154.901 373.019 180.736 337.461 229.68"/>
<polygon id="CORNERS-l19-o2" class="sticker" style="fill: #ff0000" points="337.460 290.176 293.506 290.176 279.924 248.374 337.461 229.68"/>
<polygon id="CORNERS-l14-o0" class="sticker" style="fill: #ff0000" points="394.996 248.374 381.414 290.176 337.460 290.176 337.461 229.68"/>
</g><g><title>FR</title>
<polygon id="CORNERS-l16-o1" class="sticker" style="fill: #ffffd0" points="347.220 395.413 333.638 437.215 289.684 437.215 289.685 376.719"/>
<polygon id="CORNERS-l19-o0" class="sticker" style="fill: #ffffd0" points="254.125 327.775 289.684 301.940 325.244 327.775 289.685 376.719"/>
<polygon id="CORNERS-l14-o2" class="sticker" style="fill: #ffffd0" points="325.244 327.775 360.803 353.610 347.220 395.413 289.685 376.719"/>
<polygon id="CORNERS-l8-o1" class="sticker" style="fill: #ffffd0" points="232.148 395.413 218.566 353.610 254.125 327.775 289.685 376.719"/>
<polygon id="CORNERS-l17-o2" class="sticker" style="fill: #ffffd0" points="289.684 437.215 245.730 437.215 232.148 395.413 289.685 376.719"/>
</g><g><title>FL</title>
<polygon id="CORNERS-l17-o1" class="sticker" style="fill: #3399ff" points="192.615 395.413 179.032 437.215 135.078 437.215 135.079 376.719"/>
<polygon id="CORNERS-l3-o0" class="sticker" style="fill: #3399ff" points="99.519 327.775 135.078 301.940 170.638 327.775 135.079 376.719"/>
<polygon id="CORNERS-l8-o2" class="sticker" style="fill: #3399ff" points="170.638 327.775 206.197 353.610 192.615 395.413 135.079 376.719"/>
<polygon id="CORNERS-l4-o1" class="sticker" style="fill: #3399ff" points="77.542 395.413 63.960 353.610 99.519 327.775 135.079 376.719"/>
<polygon id="CORNERS-l9-o2" class="sticker" style="fill: #3399ff" points="135.078 437.215 91.125 437.215 77.542 395.413 135.079 376.719"/>
</g><g><title>DL</title>
<polygon id="CORNERS-l18-o2" class="sticker" style="fill: #ff6633" points="677.137 319.263 641.578 293.428 655.160 251.625 712.697 270.32"/>
<polygon id="CORNERS-l4-o2" class="sticker" style="fill: #ff6633" points="770.233 251.625 783.815 293.428 748.256 319.263 712.697 270.32"/>
<polygon id="CORNERS-l9-o1" class="sticker" style="fill: #ff6633" points="748.256 319.263 712.697 345.098 677.137 319.263 712.697 270.32"/>
<polygon id="CORNERS-l5-o0" class="sticker" style="fill: #ff6633" points="712.697 209.823 756.650 209.823 770.233 251.625 712.697 270.32"/>
<polygon id="CORNERS-l10-o1" class="sticker" style="fill: #ff6633" points="655.160 251.625 668.743 209.823 712.697 209.823 712.697 270.32"/>
</g><g><title>B</title>
<polygon id="CORNERS-l15-o2" class="sticker" style="fill: #99ff00" points="587.618 290.176 543.664 290.176 530.081 248.374 587.618 229.68"/>
<polygon id="CORNERS-l10-o2" class="sticker" style="fill: #99ff00" points="623.177 180.736 658.736 206.571 645.154 248.374 587.618 229.68"/>
<polygon id="CORNERS-l18-o1" class="sticker" style="fill: #99ff00" points="645.154 248.374 631.572 290.176 587.618 290.176 587.618 229.68"/>
<polygon id="CORNERS-l11-o0" class="sticker" style="fill: #99ff00" points="552.058 180.736 587.618 154.901 623.177 180.736 587.618 229.68"/>
<polygon id="CORNERS-l13-o1" class="sticker" style="fill: #99ff00" points="530.081 248.374 516.499 206.571 552.058 180.736 587.618 229.68"/>
</g><g><title>DR</title>
<polygon id="CORNERS-l16-o2" class="sticker" style="fill: #ff66cc" points="498.098 319.263 462.539 345.098 426.980 319.263 462.539 270.32"/>
<polygon id="CORNERS-l13-o2" class="sticker" style="fill: #ff66cc" points="462.539 209.823 506.493 209.823 520.075 251.625 462.539 270.32"/>
<polygon id="CORNERS-l15-o1" class="sticker" style="fill: #ff66cc" points="520.075 251.625 533.658 293.428 498.098 319.263 462.539 270.32"/>
<polygon id="CORNERS-l12-o0" class="sticker" style="fill: #ff66cc" points="405.003 251.625 418.585 209.823 462.539 209.823 462.539 270.32"/>
<polygon id="CORNERS-l14-o1" class="sticker" style="fill: #ff66cc" points="426.980 319.263 391.420 293.428 405.003 251.625 462.539 270.32"/>
</g><g><title>D</title>
<polygon id="CORNERS-l18-o0" class="sticker" style="fill: #999999" points="587.618 300.698 631.572 300.698 645.154 342.500 587.618 361.195"/>
<polygon id="CORNERS-l16-o0" class="sticker" style="fill: #999999" points="552.058 410.138 516.499 384.303 530.081 342.500 587.618 361.195"/>
<polygon id="CORNERS-l15-o0" class="sticker" style="fill: #999999" points="530.081 342.500 543.664 300.698 587.618 300.698 587.618 361.195"/>
<polygon id="CORNERS-l17-o0" class="sticker" style="fill: #999999" points="623.177 410.138 587.618 435.974 552.058 410.138 587.618 361.195"/>
<polygon id="CORNERS-l9-o0" class="sticker" style="fill: #999999" points="645.154 342.500 658.736 384.303 623.177 410.138 587.618 361.195"/>
</g></svg>
`,Gi=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],wx={name:"2x2x2",orbits:[{orbitName:"SQUARES",numPieces:25,numOrientations:3}],defaultPattern:{SQUARES:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],orientation:Gi}},moves:{U:{SQUARES:{permutation:[1,2,3,4,0,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],orientationDelta:Gi}},"2U":{SQUARES:{permutation:[0,1,2,3,4,6,7,8,9,5,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],orientationDelta:Gi}},"3U":{SQUARES:{permutation:[0,1,2,3,4,5,6,7,8,9,11,12,13,14,10,15,16,17,18,19,20,21,22,23,24],orientationDelta:Gi}},"4U":{SQUARES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,19,15,20,21,22,23,24],orientationDelta:Gi}},"5U":{SQUARES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,22,23,24,20],orientationDelta:Gi}},R:{SQUARES:{permutation:[0,1,2,3,9,5,6,7,8,14,10,11,12,13,19,15,16,17,18,24,20,21,22,23,4],orientationDelta:Gi}},"2R":{SQUARES:{permutation:[0,1,2,8,4,5,6,7,13,9,10,11,12,18,14,15,16,17,23,19,20,21,22,3,24],orientationDelta:Gi}},"3R":{SQUARES:{permutation:[0,1,7,3,4,5,6,12,8,9,10,11,17,13,14,15,16,22,18,19,20,21,2,23,24],orientationDelta:Gi}},"4R":{SQUARES:{permutation:[0,6,2,3,4,5,11,7,8,9,10,16,12,13,14,15,21,17,18,19,20,1,22,23,24],orientationDelta:Gi}},"5R":{SQUARES:{permutation:[5,1,2,3,4,10,6,7,8,9,15,11,12,13,14,20,16,17,18,19,0,21,22,23,24],orientationDelta:Gi}}},derivedMoves:{L:"5R'","2L":"4R'","3L":"3R'","4L":"2R'","5L":"R'",D:"5U'","2D":"4U'","3D":"3U'","4D":"2U'","5D":"U'",E:"3D",M:"3L"}},Mx=`<?xml version="1.0" encoding="UTF-8"?>
<svg width="600px" height="600px" viewBox="-50 -50 600 600" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <title>3x3x3 LL</title>
  <defs>
    <g id="sticker">
        <rect x="0" y="0" width="100" height="100" stroke="black" stroke-width="0.5px" />
    </g>
  </defs>
  <g id="3x3x3-LL" stroke="none" stroke-width="4" style="none" stroke-linejoin="round">
    <use id="SQUARES-l0-o0" href="#sticker" transform="translate( 00, 00)" style="fill: #E23424"/>
    <use id="SQUARES-l1-o0" href="#sticker" transform="translate(100, 00)" style="fill: #AC2A3C"/>
    <use id="SQUARES-l2-o0" href="#sticker" transform="translate(200, 00)" style="fill: #762668"/>
    <use id="SQUARES-l3-o0" href="#sticker" transform="translate(300, 00)" style="fill: #412798"/>
    <use id="SQUARES-l4-o0" href="#sticker" transform="translate(400, 00)" style="fill: #152DC9"/>

    <use id="SQUARES-l5-o0" href="#sticker" transform="translate( 00,100)" style="fill: #E34F27"/>
    <use id="SQUARES-l6-o0" href="#sticker" transform="translate(100,100)" style="fill: #AD4D3E"/>
    <use id="SQUARES-l7-o0" href="#sticker" transform="translate(200,100)" style="fill: #794E6A"/>
    <use id="SQUARES-l8-o0" href="#sticker" transform="translate(300,100)" style="fill: #485399"/>
    <use id="SQUARES-l9-o0" href="#sticker" transform="translate(400,100)" style="fill: #2758CA"/>

    <use id="SQUARES-l10-o0" href="#sticker" transform="translate( 00,200)" style="fill: #E67A30"/>
    <use id="SQUARES-l11-o0" href="#sticker" transform="translate(100,200)" style="fill: #B17A44"/>
    <use id="SQUARES-l12-o0" href="#sticker" transform="translate(200,200)" style="fill: #7F7B6D"/>
    <use id="SQUARES-l13-o0" href="#sticker" transform="translate(300,200)" style="fill: #547F9B"/>
    <use id="SQUARES-l14-o0" href="#sticker" transform="translate(400,200)" style="fill: #3B83CB"/>

    <use id="SQUARES-l15-o0" href="#sticker" transform="translate( 00,300)" style="fill: #EAA93C"/>
    <use id="SQUARES-l16-o0" href="#sticker" transform="translate(100,300)" style="fill: #B8A94C"/>
    <use id="SQUARES-l17-o0" href="#sticker" transform="translate(200,300)" style="fill: #89AA72"/>
    <use id="SQUARES-l18-o0" href="#sticker" transform="translate(300,300)" style="fill: #63AB9E"/>
    <use id="SQUARES-l19-o0" href="#sticker" transform="translate(400,300)" style="fill: #50ADCD"/>

    <use id="SQUARES-l20-o0" href="#sticker" transform="translate( 00,400)" style="fill: #F1DA49"/>
    <use id="SQUARES-l21-o0" href="#sticker" transform="translate(100,400)" style="fill: #C1D957"/>
    <use id="SQUARES-l22-o0" href="#sticker" transform="translate(200,400)" style="fill: #95D878"/>
    <use id="SQUARES-l23-o0" href="#sticker" transform="translate(300,400)" style="fill: #74D7A2"/>
    <use id="SQUARES-l24-o0" href="#sticker" transform="translate(400,400)" style="fill: #64D8D0"/>
  </g>
</svg>`,Rx={name:"redi_cube",orbits:[{orbitName:"EDGES",numPieces:12,numOrientations:2},{orbitName:"CORNERS",numPieces:8,numOrientations:3}],defaultPattern:{EDGES:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{pieces:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]}},moves:{F:{EDGES:{permutation:[8,0,2,3,4,5,6,7,1,9,10,11],orientationDelta:[0,1,0,0,0,0,0,0,1,0,0,0]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientationDelta:[1,0,0,0,0,0,0,0]}},x:{EDGES:{permutation:[4,8,0,9,6,10,2,11,5,7,1,3],orientationDelta:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[4,0,3,5,7,6,2,1],orientationDelta:[2,1,2,1,1,2,1,2]}},y:{EDGES:{permutation:[1,2,3,0,5,6,7,4,10,8,11,9],orientationDelta:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[1,2,3,0,7,4,5,6],orientationDelta:[0,0,0,0,0,0,0,0]}}},derivedMoves:{z:"[x: y]",UR:"[y: F]",U:"[y2: F]",UL:"[y': F]",D:"[x: F]",L:"[z2: F]",R:"[x2: F]",B:"[y2 x: F]"}},bx=`<?xml version="1.0" encoding="UTF-8"?>
<svg width="546px" height="418px" viewBox="-20 -20 546 418" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<title>redi-cube</title>
<g istroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
  <g transform="translate(1.000000, 1.000000)" fill-rule="nonzero" stroke="#000000" stroke-width="1.6">
    <g id="CORNERS-l0-o0" transform="translate(208.000000, 80.000000)" style="fill: #FFFFFF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l0-o1" transform="translate(256.000000, 128.000000)" style="fill: #FF0000;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l0-o2" transform="translate(208.000000, 128.000000)" style="fill: #32CD32;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l1-o0" transform="translate(208.000000, 0.000000)" style="fill: #FFFFFF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l1-o1" transform="translate(384.000000, 128.000000)" style="fill: #2266FF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l1-o2" transform="translate(336.000000, 128.000000)" style="fill: #FF0000;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l2-o0" transform="translate(128.000000, 0.000000)" style="fill: #FFFFFF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l2-o1" transform="translate(0.000000, 128.000000)" style="fill: #FFA500;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l2-o2" transform="translate(464.000000, 128.000000)" style="fill: #2266FF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l3-o0" transform="translate(128.000000, 80.000000)" style="fill: #FFFFFF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l3-o1" transform="translate(128.000000, 128.000000)" style="fill: #32CD32;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l3-o2" transform="translate(80.000000, 128.000000)" style="fill: #FFA500;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l4-o0" transform="translate(208.000000, 256.000000)" style="fill: #FFFF00;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l4-o1" transform="translate(208.000000, 208.000000)" style="fill: #32CD32;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l4-o2" transform="translate(256.000000, 208.000000)" style="fill: #FF0000;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l5-o0" transform="translate(128.000000, 256.000000)" style="fill: #FFFF00;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l5-o1" transform="translate(80.000000, 208.000000)" style="fill: #FFA500;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l5-o2" transform="translate(128.000000, 208.000000)" style="fill: #32CD32;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l6-o0" transform="translate(128.000000, 336.000000)" style="fill: #FFFF00;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l6-o1" transform="translate(464.000000, 208.000000)" style="fill: #2266FF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l6-o2" transform="translate(0.000000, 208.000000)" style="fill: #FFA500;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l7-o0" transform="translate(208.000000, 336.000000)" style="fill: #FFFF00;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l7-o1" transform="translate(336.000000, 208.000000)" style="fill: #FF0000;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l7-o2" transform="translate(384.000000, 208.000000)" style="fill: #2266FF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="EDGES-l0-o0" transform="translate(168.000000, 60.000000)" style="fill: #FFFFFF;">
      <polygon id="Rectangle" points="0 20 20 -8.8817842e-16 40 20 40 60 0 60"></polygon>
    </g>
    <g id="EDGES-l0-o1" transform="translate(168.000000, 128.000000)" style="fill: #32CD32;">
      <polygon id="Rectangle" points="0 0 40 0 40 40 20 60 0 40"></polygon>
    </g>
    <g id="EDGES-l1-o0" transform="translate(188.000000, 40.000000)" style="fill: #FFFFFF;">
      <polygon id="Rectangle" points="20 0 60 0 60 40 20 40 0 20"></polygon>
    </g>
    <g id="EDGES-l1-o1" transform="translate(296.000000, 128.000000)" style="fill: #FF0000;">
      <polygon id="Rectangle" points="0 0 40 0 40 40 20 60 0 40"></polygon>
    </g>
    <g id="EDGES-l2-o0" transform="translate(168.000000, 0.000000)" style="fill: #FFFFFF;">
      <polygon id="Rectangle" points="0 0 40 0 40 40 20 60 0 40"></polygon>
    </g>
    <g id="EDGES-l2-o1" transform="translate(424.000000, 128.000000)" style="fill: #2266FF;">
      <polygon id="Rectangle" points="0 0 40 0 40 40 20 60 0 40"></polygon>
    </g>
    <g id="EDGES-l3-o0" transform="translate(128.000000, 40.000000)" style="fill: #FFFFFF;">
      <polygon id="Rectangle" points="0 0 40 0 60 20 40 40 0 40"></polygon>
    </g>
    <g id="EDGES-l3-o1" transform="translate(40.000000, 128.000000)" style="fill: #FFA500;">
      <polygon id="Rectangle" points="0 0 40 0 40 40 20 60 0 40"></polygon>
    </g>
    <g id="EDGES-l4-o0" transform="translate(168.000000, 256.000000)" style="fill: #FFFF00;">
      <polygon id="Rectangle" points="0 0 40 0 40 40 20 60 0 40"></polygon>
    </g>
    <g id="EDGES-l4-o1" transform="translate(168.000000, 188.000000)" style="fill: #32CD32;">
      <polygon id="Rectangle" points="0 20 20 0 40 20 40 60 0 60"></polygon>
    </g>
    <g id="EDGES-l5-o0" transform="translate(188.000000, 296.000000)" style="fill: #FFFF00;">
      <polygon id="Rectangle" points="20 0 60 0 60 40 20 40 0 20"></polygon>
    </g>
    <g id="EDGES-l5-o1" transform="translate(296.000000, 188.000000)" style="fill: #FF0000;">
      <polygon id="Rectangle" points="0 20 20 0 40 20 40 60 0 60"></polygon>
    </g>
    <g id="EDGES-l6-o0" transform="translate(168.000000, 316.000000)" style="fill: #FFFF00;">
      <polygon id="Rectangle" points="0 20 20 -5.32907052e-14 40 20 40 60 0 60"></polygon>
    </g>
    <g id="EDGES-l6-o1" transform="translate(424.000000, 188.000000)" style="fill: #2266FF;">
      <polygon id="Rectangle" points="0 20 20 -1.77635684e-15 40 20 40 60 0 60"></polygon>
    </g>
    <g id="EDGES-l7-o0" transform="translate(128.000000, 296.000000)" style="fill: #FFFF00;">
      <polygon id="Rectangle" points="0 0 40 0 60 20 40 40 0 40"></polygon>
    </g>
    <g id="EDGES-l7-o1" transform="translate(40.000000, 188.000000)" style="fill: #FFA500;">
      <polygon id="Rectangle" points="0 20 20 0 40 20 40 60 0 60"></polygon>
    </g>
    <g id="EDGES-l8-o0" transform="translate(188.000000, 168.000000)" style="fill: #32CD32;">
      <polygon id="Rectangle" points="20 0 60 0 60 40 20 40 2.66453526e-14 20"></polygon>
    </g>
    <g id="EDGES-l8-o1" transform="translate(256.000000, 168.000000)" style="fill: #FF0000;">
      <polygon id="Rectangle" points="0 0 40 0 60 20 40 40 0 40"></polygon>
    </g>
    <g id="EDGES-l9-o0" transform="translate(128.000000, 168.000000)" style="fill: #32CD32;">
      <polygon id="Rectangle" points="0 0 40 0 60 20 40 40 0 40"></polygon>
    </g>
    <g id="EDGES-l9-o1" transform="translate(60.000000, 168.000000)" style="fill: #FFA500;">
      <polygon id="Rectangle" points="20 0 60 0 60 40 20 40 0 20"></polygon>
    </g>
    <g id="EDGES-l10-o0" transform="translate(384.000000, 168.000000)" style="fill: #2266FF;">
      <polygon id="Rectangle" points="0 0 40 0 60 20 40 40 0 40"></polygon>
    </g>
    <g id="EDGES-l10-o1" transform="translate(316.000000, 168.000000)" style="fill: #FF0000;">
      <polygon id="Rectangle" points="20 0 60 0 60 40 20 40 5.32907052e-14 20"></polygon>
    </g>
    <g id="EDGES-l11-o0" transform="translate(444.000000, 168.000000)" style="fill: #2266FF;">
      <polygon id="Rectangle" points="20 0 60 0 60 40 20 40 -3.55271368e-15 20"></polygon>
    </g>
    <g id="EDGES-l11-o1" transform="translate(0.000000, 168.000000)" style="fill: #FFA500;">
      <polygon id="Rectangle" points="0 0 40 0 60 20 40 40 0 40"></polygon>
    </g>
  </g>
</g>
</svg>
`});var Ad={};dn(Ad,{megaminxLLSVG:()=>Ax});var Ax,Cd=C(()=>{Ax=`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="360px" height="343px" viewBox="0 0 360 343" version="1.1">
  <title>Megaminx LL</title>
  <defs>
    <g id="bogus">
        <rect x="-10" y="-10" width="1" height="1" stroke="black" stroke-width="0.04px" />
    </g>
  </defs>
  <g fill="none" fill-rule="nonzero" stroke="#000">
    <g style="stroke: black; stroke-width: 6; stroke-linecap: butt; stroke-linejoin: round;">
      <path id="CENTERS-l0-o0" style="fill: white;" d="M 179.5 143.480469 L 137.082031 174.296875 L 153.285156 224.164062 L 205.714844 224.164062 L 221.917969 174.296875 Z M 179.5 143.480469 "/>  />

      <path id="CORNERS-l6-o0" style="fill: white;" d="M 140.175781 92.605469 L 179.5 143.480469 L 218.824219 92.605469 L 179.5 64.035156 Z M 140.175781 92.605469 "/>  />
      <path id="CORNERS-l6-o1" style="fill: yellow;" d="M 125.15625 46.378906 L 140.175781 92.605469 L 179.5 64.035156 L 179.5 6.894531 Z M 125.15625 46.378906 "/> />
      <path id="CORNERS-l6-o2" style="fill: rgb(34, 102, 255);" d="M 179.5 64.035156 L 218.824219 92.605469 L 233.84375 46.378906 L 179.5 6.894531 Z M 179.5 64.035156 "/>  />

      <path id="EDGES-l26-o0" style="fill: white;" d="M 100.851562 121.175781 L 137.082031 174.296875 L 179.5 143.480469 L 140.175781 92.605469 Z M 100.851562 121.175781 "/> />
      <path id="EDGES-l26-o1" style="fill: yellow;" d="M 61.527344 92.605469 L 100.851562 121.175781 L 140.175781 92.605469 L 125.15625 46.378906 Z M 61.527344 92.605469 "/> />

      <path id="CORNERS-l1-o0" style="fill: white;" d="M 76.546875 195.976562 L 137.082031 174.296875 L 100.851562 121.175781 L 61.527344 149.75 Z M 76.546875 195.976562 "/> />
      <path id="CORNERS-l1-o1" style="fill: purple;" d="M 27.9375 195.976562 L 76.546875 195.976562 L 61.527344 149.75 L 7.179688 132.089844 Z M 27.9375 195.976562 "/>  />
      <path id="CORNERS-l1-o2" style="fill: yellow;" d="M 61.527344 149.75 L 100.851562 121.175781 L 61.527344 92.605469 L 7.179688 132.089844 Z M 61.527344 149.75 "/> />

      <path id="EDGES-l1-o0" style="fill: white;" d="M 91.566406 242.207031 L 153.285156 224.164062 L 137.082031 174.296875 L 76.546875 195.976562 Z M 91.566406 242.207031 "/> />
      <path id="EDGES-l1-o1" style="fill: purple;" d="M 52.242188 270.777344 L 91.566406 242.207031 L 76.546875 195.976562 L 27.9375 195.976562 Z M 52.242188 270.777344 "/> />

      <path id="CORNERS-l0-o0" style="fill: white;" d="M 155.195312 288.4375 L 153.285156 224.164062 L 91.566406 242.207031 L 106.585938 288.4375 Z M 155.195312 288.4375 "/> />
      <path id="CORNERS-l0-o1" style="fill: limegreen;" d="M 140.175781 334.664062 L 155.195312 288.4375 L 106.585938 288.4375 L 73 334.664062 Z M 140.175781 334.664062 "/>  />
      <path id="CORNERS-l0-o2" style="fill: purple;" d="M 106.585938 288.4375 L 91.566406 242.207031 L 52.242188 270.777344 L 73 334.664062 Z M 106.585938 288.4375 "/>  />

      <path id="EDGES-l0-o0" style="fill: white;" d="M 203.804688 288.4375 L 205.714844 224.164062 L 153.285156 224.164062 L 155.195312 288.4375 Z M 203.804688 288.4375 "/>  />
      <path id="EDGES-l0-o1" style="fill: limegreen;" d="M 218.824219 334.664062 L 203.804688 288.4375 L 155.195312 288.4375 L 140.175781 334.664062 Z M 218.824219 334.664062 "/>  />

      <path id="CORNERS-l2-o0" style="fill: white;" d="M 267.433594 242.207031 L 205.714844 224.164062 L 203.804688 288.4375 L 252.414062 288.4375 Z M 267.433594 242.207031 "/>  />
      <path id="CORNERS-l2-o1" style="fill: red;" d="M 306.757812 270.777344 L 267.433594 242.207031 L 252.414062 288.4375 L 286 334.664062 Z M 306.757812 270.777344 "/> />
      <path id="CORNERS-l2-o2" style="fill: limegreen;" d="M 252.414062 288.4375 L 203.804688 288.4375 L 218.824219 334.664062 L 286 334.664062 Z M 252.414062 288.4375 "/> />

      <path id="EDGES-l7-o0" style="fill: white;" d="M 282.453125 195.976562 L 221.917969 174.296875 L 205.714844 224.164062 L 267.433594 242.207031 Z M 282.453125 195.976562 "/>  />
      <path id="EDGES-l7-o1" style="fill: red;" d="M 331.0625 195.976562 L 282.453125 195.976562 L 267.433594 242.207031 L 306.757812 270.777344 Z M 331.0625 195.976562 "/>  />

      <path id="CORNERS-l7-o0" style="fill: white;" d="M 258.148438 121.175781 L 221.917969 174.296875 L 282.453125 195.976562 L 297.472656 149.75 Z M 258.148438 121.175781 "/>  />
      <path id="CORNERS-l7-o1" style="fill: rgb(34, 102, 255);" d="M 297.472656 92.605469 L 258.148438 121.175781 L 297.472656 149.75 L 351.820312 132.089844 Z M 297.472656 92.605469 "/>  />
      <path id="CORNERS-l7-o2" style="fill: red;" d="M 297.472656 149.75 L 282.453125 195.976562 L 331.0625 195.976562 L 351.820312 132.089844 Z M 297.472656 149.75 "/>  />

      <path id="EDGES-l6-o0" style="fill: white;" d="M 218.824219 92.605469 L 179.5 143.480469 L 221.917969 174.296875 L 258.148438 121.175781 Z M 218.824219 92.605469 "/> />
      <path id="EDGES-l6-o1" style="fill: rgb(34, 102, 255);" d="M 233.84375 46.378906 L 218.824219 92.605469 L 258.148438 121.175781 L 297.472656 92.605469 Z M 233.84375 46.378906 "/>  />
    </g>
    <g opacity="0">
      <g><title>U</title>
      <polygon id="CENTERS-l0-o1" href="#bogus" style="fill: white"/>
      <polygon id="CENTERS-l0-o2" href="#bogus" style="fill: white"/>
      <polygon id="CENTERS-l0-o3" href="#bogus" style="fill: white"/>
      <polygon id="CENTERS-l0-o4" href="#bogus" style="fill: white"/>
      </g><g><title>F</title>
      <polygon id="EDGES-l8-o0" href="#bogus" style="fill: limegreen"/>
      <polygon id="EDGES-l2-o0" href="#bogus" style="fill: limegreen"/>
      <polygon id="CENTERS-l2-o0" href="#bogus" style="fill: limegreen"/>
      <polygon id="CENTERS-l2-o1" href="#bogus" style="fill: limegreen"/>
      <polygon id="CENTERS-l2-o2" href="#bogus" style="fill: limegreen"/>
      <polygon id="CENTERS-l2-o3" href="#bogus" style="fill: limegreen"/>
      <polygon id="CENTERS-l2-o4" href="#bogus" style="fill: limegreen"/>
      <polygon id="EDGES-l27-o1" href="#bogus" style="fill: limegreen"/>
      <polygon id="CORNERS-l19-o1" href="#bogus" style="fill: limegreen"/>
      <polygon id="CORNERS-l8-o0" href="#bogus" style="fill: limegreen"/>
      <polygon id="EDGES-l3-o0" href="#bogus" style="fill: limegreen"/>
      <polygon id="CORNERS-l3-o2" href="#bogus" style="fill: limegreen"/>
      </g><g><title>L</title>
      <polygon id="EDGES-l5-o1" href="#bogus" style="fill: #660099"/>
      <polygon id="EDGES-l8-o1" href="#bogus" style="fill: #660099"/>
      <polygon id="CENTERS-l3-o0" href="#bogus" style="fill: #660099"/>
      <polygon id="CENTERS-l3-o1" href="#bogus" style="fill: #660099"/>
      <polygon id="CENTERS-l3-o2" href="#bogus" style="fill: #660099"/>
      <polygon id="CENTERS-l3-o3" href="#bogus" style="fill: #660099"/>
      <polygon id="CENTERS-l3-o4" href="#bogus" style="fill: #660099"/>
      <polygon id="EDGES-l4-o1" href="#bogus" style="fill: #660099"/>
      <polygon id="CORNERS-l3-o1" href="#bogus" style="fill: #660099"/>
      <polygon id="CORNERS-l4-o0" href="#bogus" style="fill: #660099"/>
      <polygon id="EDGES-l10-o1" href="#bogus" style="fill: #660099"/>
      <polygon id="CORNERS-l5-o2" href="#bogus" style="fill: #660099"/>
      </g><g><title>BL</title>
      <polygon id="EDGES-l14-o1" href="#bogus" style="fill: yellow"/>
      <polygon id="EDGES-l5-o0" href="#bogus" style="fill: yellow"/>
      <polygon id="CENTERS-l4-o0" href="#bogus" style="fill: yellow"/>
      <polygon id="CENTERS-l4-o1" href="#bogus" style="fill: yellow"/>
      <polygon id="CENTERS-l4-o2" href="#bogus" style="fill: yellow"/>
      <polygon id="CENTERS-l4-o3" href="#bogus" style="fill: yellow"/>
      <polygon id="CENTERS-l4-o4" href="#bogus" style="fill: yellow"/>
      <polygon id="EDGES-l12-o1" href="#bogus" style="fill: yellow"/>
      <polygon id="CORNERS-l5-o1" href="#bogus" style="fill: yellow"/>
      <polygon id="CORNERS-l10-o0" href="#bogus" style="fill: yellow"/>
      <polygon id="EDGES-l16-o0" href="#bogus" style="fill: yellow"/>
      <polygon id="CORNERS-l11-o2" href="#bogus" style="fill: yellow"/>
      </g><g><title>BR</title>
      <polygon id="EDGES-l21-o0" href="#bogus" style="fill: rgb(34, 102, 255)"/>
      <polygon id="EDGES-l14-o0" href="#bogus" style="fill: rgb(34, 102, 255)"/>
      <polygon id="CENTERS-l5-o0" href="#bogus" style="fill: rgb(34, 102, 255)"/>
      <polygon id="CENTERS-l5-o1" href="#bogus" style="fill: rgb(34, 102, 255)"/>
      <polygon id="CENTERS-l5-o2" href="#bogus" style="fill: rgb(34, 102, 255)"/>
      <polygon id="CENTERS-l5-o3" href="#bogus" style="fill: rgb(34, 102, 255)"/>
      <polygon id="CENTERS-l5-o4" href="#bogus" style="fill: rgb(34, 102, 255)"/>
      <polygon id="EDGES-l18-o1" href="#bogus" style="fill: rgb(34, 102, 255)"/>
      <polygon id="CORNERS-l11-o1" href="#bogus" style="fill: rgb(34, 102, 255)"/>
      <polygon id="CORNERS-l13-o0" href="#bogus" style="fill: rgb(34, 102, 255)"/>
      <polygon id="EDGES-l28-o1" href="#bogus" style="fill: rgb(34, 102, 255)"/>
      <polygon id="CORNERS-l12-o2" href="#bogus" style="fill: rgb(34, 102, 255)"/>
      </g><g><title>R</title>
      <polygon id="CORNERS-l19-o2" href="#bogus" style="fill: red"/>
      <polygon id="EDGES-l19-o1" href="#bogus" style="fill: red"/>
      <polygon id="CENTERS-l1-o0" href="#bogus" style="fill: red"/>
      <polygon id="CENTERS-l1-o1" href="#bogus" style="fill: red"/>
      <polygon id="CENTERS-l1-o2" href="#bogus" style="fill: red"/>
      <polygon id="CENTERS-l1-o3" href="#bogus" style="fill: red"/>
      <polygon id="CENTERS-l1-o4" href="#bogus" style="fill: red"/>
      <polygon id="EDGES-l2-o1" href="#bogus" style="fill: red"/>
      <polygon id="EDGES-l21-o1" href="#bogus" style="fill: red"/>
      <polygon id="CORNERS-l12-o1" href="#bogus" style="fill: red"/>
      <polygon id="EDGES-l15-o1" href="#bogus" style="fill: red"/>
      <polygon id="CORNERS-l14-o0" href="#bogus" style="fill: red"/>
      </g><g><title>C</title>
      <polygon id="CORNERS-l8-o1" href="#bogus" style="fill: #ffffd0"/>
      <polygon id="EDGES-l9-o1" href="#bogus" style="fill: #ffffd0"/>
      <polygon id="CORNERS-l19-o0" href="#bogus" style="fill: #ffffd0"/>
      <polygon id="EDGES-l19-o0" href="#bogus" style="fill: #ffffd0"/>
      <polygon id="CENTERS-l6-o0" href="#bogus" style="fill: #ffffd0"/>
      <polygon id="CENTERS-l6-o1" href="#bogus" style="fill: #ffffd0"/>
      <polygon id="CENTERS-l6-o2" href="#bogus" style="fill: #ffffd0"/>
      <polygon id="CENTERS-l6-o3" href="#bogus" style="fill: #ffffd0"/>
      <polygon id="CENTERS-l6-o4" href="#bogus" style="fill: #ffffd0"/>
      <polygon id="EDGES-l27-o0" href="#bogus" style="fill: #ffffd0"/>
      <polygon id="EDGES-l29-o1" href="#bogus" style="fill: #ffffd0"/>
      <polygon id="CORNERS-l14-o2" href="#bogus" style="fill: #ffffd0"/>
      <polygon id="CORNERS-l16-o1" href="#bogus" style="fill: #ffffd0"/>
      <polygon id="EDGES-l22-o0" href="#bogus" style="fill: #ffffd0"/>
      <polygon id="CORNERS-l17-o2" href="#bogus" style="fill: #ffffd0"/>
      </g><g><title>A</title>
      <polygon id="CORNERS-l4-o1" href="#bogus" style="fill: #3399ff"/>
      <polygon id="EDGES-l13-o1" href="#bogus" style="fill: #3399ff"/>
      <polygon id="CORNERS-l3-o0" href="#bogus" style="fill: #3399ff"/>
      <polygon id="EDGES-l3-o1" href="#bogus" style="fill: #3399ff"/>
      <polygon id="CENTERS-l7-o0" href="#bogus" style="fill: #3399ff"/>
      <polygon id="CENTERS-l7-o1" href="#bogus" style="fill: #3399ff"/>
      <polygon id="CENTERS-l7-o2" href="#bogus" style="fill: #3399ff"/>
      <polygon id="CENTERS-l7-o3" href="#bogus" style="fill: #3399ff"/>
      <polygon id="CENTERS-l7-o4" href="#bogus" style="fill: #3399ff"/>
      <polygon id="EDGES-l4-o0" href="#bogus" style="fill: #3399ff"/>
      <polygon id="EDGES-l9-o0" href="#bogus" style="fill: #3399ff"/>
      <polygon id="CORNERS-l8-o2" href="#bogus" style="fill: #3399ff"/>
      <polygon id="CORNERS-l17-o1" href="#bogus" style="fill: #3399ff"/>
      <polygon id="EDGES-l11-o0" href="#bogus" style="fill: #3399ff"/>
      <polygon id="CORNERS-l9-o2" href="#bogus" style="fill: #3399ff"/>
      </g><g><title>I</title>
      <polygon id="CORNERS-l5-o0" href="#bogus" style="fill: #ff6633"/>
      <polygon id="EDGES-l12-o0" href="#bogus" style="fill: #ff6633"/>
      <polygon id="CORNERS-l4-o2" href="#bogus" style="fill: #ff6633"/>
      <polygon id="EDGES-l13-o0" href="#bogus" style="fill: #ff6633"/>
      <polygon id="CENTERS-l8-o0" href="#bogus" style="fill: #ff6633"/>
      <polygon id="CENTERS-l8-o1" href="#bogus" style="fill: #ff6633"/>
      <polygon id="CENTERS-l8-o2" href="#bogus" style="fill: #ff6633"/>
      <polygon id="CENTERS-l8-o3" href="#bogus" style="fill: #ff6633"/>
      <polygon id="CENTERS-l8-o4" href="#bogus" style="fill: #ff6633"/>
      <polygon id="EDGES-l10-o0" href="#bogus" style="fill: #ff6633"/>
      <polygon id="EDGES-l23-o0" href="#bogus" style="fill: #ff6633"/>
      <polygon id="CORNERS-l9-o1" href="#bogus" style="fill: #ff6633"/>
      <polygon id="CORNERS-l18-o2" href="#bogus" style="fill: #ff6633"/>
      <polygon id="EDGES-l17-o0" href="#bogus" style="fill: #ff6633"/>
      <polygon id="CORNERS-l10-o1" href="#bogus" style="fill: #ff6633"/>
      </g><g><title>BF</title>
      <polygon id="CORNERS-l11-o0" href="#bogus" style="fill: #99ff00"/>
      <polygon id="EDGES-l18-o0" href="#bogus" style="fill: #99ff00"/>
      <polygon id="CORNERS-l10-o2" href="#bogus" style="fill: #99ff00"/>
      <polygon id="EDGES-l17-o1" href="#bogus" style="fill: #99ff00"/>
      <polygon id="CENTERS-l10-o0" href="#bogus" style="fill: #99ff00"/>
      <polygon id="CENTERS-l10-o1" href="#bogus" style="fill: #99ff00"/>
      <polygon id="CENTERS-l10-o2" href="#bogus" style="fill: #99ff00"/>
      <polygon id="CENTERS-l10-o3" href="#bogus" style="fill: #99ff00"/>
      <polygon id="CENTERS-l10-o4" href="#bogus" style="fill: #99ff00"/>
      <polygon id="EDGES-l16-o1" href="#bogus" style="fill: #99ff00"/>
      <polygon id="EDGES-l20-o0" href="#bogus" style="fill: #99ff00"/>
      <polygon id="CORNERS-l18-o1" href="#bogus" style="fill: #99ff00"/>
      <polygon id="CORNERS-l15-o2" href="#bogus" style="fill: #99ff00"/>
      <polygon id="EDGES-l24-o1" href="#bogus" style="fill: #99ff00"/>
      <polygon id="CORNERS-l13-o1" href="#bogus" style="fill: #99ff00"/>
      </g><g><title>E</title>
      <polygon id="CORNERS-l12-o0" href="#bogus" style="fill: #ff66cc"/>
      <polygon id="EDGES-l15-o0" href="#bogus" style="fill: #ff66cc"/>
      <polygon id="CORNERS-l13-o2" href="#bogus" style="fill: #ff66cc"/>
      <polygon id="EDGES-l24-o0" href="#bogus" style="fill: #ff66cc"/>
      <polygon id="CENTERS-l9-o0" href="#bogus" style="fill: #ff66cc"/>
      <polygon id="CENTERS-l9-o1" href="#bogus" style="fill: #ff66cc"/>
      <polygon id="CENTERS-l9-o2" href="#bogus" style="fill: #ff66cc"/>
      <polygon id="CENTERS-l9-o3" href="#bogus" style="fill: #ff66cc"/>
      <polygon id="CENTERS-l9-o4" href="#bogus" style="fill: #ff66cc"/>
      <polygon id="EDGES-l28-o0" href="#bogus" style="fill: #ff66cc"/>
      <polygon id="EDGES-l25-o0" href="#bogus" style="fill: #ff66cc"/>
      <polygon id="CORNERS-l15-o1" href="#bogus" style="fill: #ff66cc"/>
      <polygon id="CORNERS-l16-o2" href="#bogus" style="fill: #ff66cc"/>
      <polygon id="EDGES-l29-o0" href="#bogus" style="fill: #ff66cc"/>
      <polygon id="CORNERS-l14-o1" href="#bogus" style="fill: #ff66cc"/>
      </g><g><title>D</title>
      <polygon id="CORNERS-l17-o0" href="#bogus" style="fill: #999999"/>
      <polygon id="EDGES-l11-o1" href="#bogus" style="fill: #999999"/>
      <polygon id="CORNERS-l16-o0" href="#bogus" style="fill: #999999"/>
      <polygon id="EDGES-l25-o1" href="#bogus" style="fill: #999999"/>
      <polygon id="CENTERS-l11-o0" href="#bogus" style="fill: #999999"/>
      <polygon id="CENTERS-l11-o1" href="#bogus" style="fill: #999999"/>
      <polygon id="CENTERS-l11-o2" href="#bogus" style="fill: #999999"/>
      <polygon id="CENTERS-l11-o3" href="#bogus" style="fill: #999999"/>
      <polygon id="CENTERS-l11-o4" href="#bogus" style="fill: #999999"/>
      <polygon id="EDGES-l22-o1" href="#bogus" style="fill: #999999"/>
      <polygon id="EDGES-l20-o1" href="#bogus" style="fill: #999999"/>
      <polygon id="CORNERS-l15-o0" href="#bogus" style="fill: #999999"/>
      <polygon id="CORNERS-l18-o0" href="#bogus" style="fill: #999999"/>
      <polygon id="EDGES-l23-o1" href="#bogus" style="fill: #999999"/>
      <polygon id="CORNERS-l9-o0" href="#bogus" style="fill: #999999"/>
      </g>
    </g>
  </g>
</svg>
`});function Ut(t,e,i,r){let n=[];for(let s of t){let o=A.fromString(s),{family:a,amount:l}=o;if(![-1,1].includes(l))throw new Error("Invalid config move");n.push({family:a,direction:l,type:e,from:i,to:r})}return n}function Td(t,e){let i=Id[t][e]?.[0];if(!i)throw new Error(`Could not find a reference move (axis: ${t}, move source type: ${e})`);return i}function Dx(t,e,i,r){if(e+1===i){let u=kd[t].get(e);if(u)return new A(new ke(u.family),r*u.direction)}let n=xn[t],{sliceDiameter:s}=n;if(e===0&&i===s){let u=Td(t,5);return new A(new ke(u.family),r*u.direction)}let o=e+i>s;o&&([e,i]=[s-i,s-e]);let a=e+1,l=i,c=a===l;c&&(l=null),a===1&&(a=null),c&&a===1&&(l=null),!c&&l===2&&(l=null);let h=Td(t,c?o?1:0:o?3:2);return new A(new ke(h.family,l,a),r*h.direction)}function Lx(t,e=!0){if(t.length===0)return[];let i=fo[t[0].family].axis,r=xn[i],{sliceDiameter:n}=r,s=new Map,o=null;function a(u,p){let d=(s.get(u)??0)+p;e&&(d=d%4+5%4-1),d===0?s.delete(u):s.set(u,d)}let l=0;for(let u of Array.from(t).reverse()){l++;let{moveSourceInfo:p}=fo[u.family],d=u.amount*p.direction;switch(p.type){case 0:{let y=(u.innerLayer??1)-1;a(y,d),a(y+1,-d);break}case 1:{let y=n-(u.innerLayer??1);a(y,d),a(y+1,-d);break}case 2:{a((u.outerLayer??1)-1,d),a(u.innerLayer??2,-d);break}case 3:{a(n-(u.innerLayer??2),d),a(n-((u.outerLayer??1)-1),-d);break}case 4:{a(p.from,d),a(p.to,-d);break}case 5:{a(0,d),a(n,-d);break}}[0,2].includes(s.size)&&(o={suffixLength:l,sliceDeltas:new Map(s)})}if(s.size===0)return[];if(!o)return t;let[c,f]=o.sliceDeltas.keys();c>f&&([c,f]=[f,c]);let h=o.sliceDeltas.get(c);return[...t.slice(0,-o.suffixLength),...h!==0?[Dx(i,c,f,h)]:[]]}async function Pd(t,e){let i=await t.kpuzzle(),r=new Ic(i),n=new kc(i),s=()=>n.and([n.move("U"),n.not(n.or(n.moves(["F","BL","BR"])))]),o=()=>n.and([n.move("U"),n.not(n.move("F"))]),a=()=>n.or([o(),n.and([n.move("F"),n.not(n.or(n.moves(["U","BL","BR"])))])]),l=()=>n.not(n.or([n.and([n.move("U"),n.move("F")]),n.and([n.move("F"),n.move("BL")]),n.and([n.move("F"),n.move("BR")]),n.and([n.move("BL"),n.move("BR")])])),c=()=>n.not(n.or([n.and([n.move("F"),n.move("BL")]),n.and([n.move("F"),n.move("BR")]),n.and([n.move("BL"),n.move("BR")])]));switch(e){case"full":break;case"experimental-fto-fc":{r.set(n.not(s()),"Ignored");break}case"experimental-fto-f2t":{r.set(n.not(o()),"Ignored"),r.set(s(),"Dim");break}case"experimental-fto-sc":{r.set(n.not(a()),"Ignored"),r.set(o(),"Dim");break}case"experimental-fto-l2c":{r.set(n.not(l()),"Ignored"),r.set(a(),"Dim");break}case"experimental-fto-lbt":{r.set(n.not(c()),"Ignored"),r.set(l(),"Dim");break}case"experimental-fto-l3t":{r.set(c(),"Dim");break}default:console.warn(`Unsupported stickering for ${t.id}: ${e}. Setting all pieces to dim.`),r.set(n.and(n.moves([])),"Dim")}return r.toStickeringMask()}async function kx(){return["full","experimental-fto-fc","experimental-fto-f2t","experimental-fto-sc","experimental-fto-l2c","experimental-fto-lbt","experimental-fto-l3t"]}async function Vx(t,e){return(await Od()).includes(e)?Kn(t,e):(console.warn(`Unsupported stickering for ${t.id}: ${e}. Setting all pieces to dim.`),Kn(t,"full"))}function Od(){return Hx}var Cx,nR,Ld,Nd,xn,fo,Id,kd,Tx,Nx,Jn,Ix,Oc,Ud,Px,Ux,Ox,Fx,zx,Dd,Bx,Gx,Hx,Wx,Xx,qx,jx,Yx,Kx,Zx,Qx,$x,Fc,zc=C(()=>{Qn();to();Fr();Cx={333:{puzzleID:"3x3x3",eventName:"3x3x3 Cube"},222:{puzzleID:"2x2x2",eventName:"2x2x2 Cube"},444:{puzzleID:"4x4x4",eventName:"4x4x4 Cube"},555:{puzzleID:"5x5x5",eventName:"5x5x5 Cube"},666:{puzzleID:"6x6x6",eventName:"6x6x6 Cube"},777:{puzzleID:"7x7x7",eventName:"7x7x7 Cube"},"333bf":{puzzleID:"3x3x3",eventName:"3x3x3 Blindfolded"},"333fm":{puzzleID:"3x3x3",eventName:"3x3x3 Fewest Moves"},"333oh":{puzzleID:"3x3x3",eventName:"3x3x3 One-Handed"},clock:{puzzleID:"clock",eventName:"Clock"},minx:{puzzleID:"megaminx",eventName:"Megaminx"},pyram:{puzzleID:"pyraminx",eventName:"Pyraminx"},skewb:{puzzleID:"skewb",eventName:"Skewb"},sq1:{puzzleID:"square1",eventName:"Square-1"},"444bf":{puzzleID:"4x4x4",eventName:"4x4x4 Blindfolded"},"555bf":{puzzleID:"5x5x5",eventName:"5x5x5 Blindfolded"},"333mbf":{puzzleID:"3x3x3",eventName:"3x3x3 Multi-Blind"}},nR={...Cx,fto:{puzzleID:"fto",eventName:"Face-Turning Octahedron"},master_tetraminx:{puzzleID:"master_tetraminx",eventName:"Master Tetraminx"},kilominx:{puzzleID:"kilominx",eventName:"Kilominx"},redi_cube:{puzzleID:"redi_cube",eventName:"Redi Cube"},baby_fto:{puzzleID:"baby_fto",eventName:"Baby FTO"},loopover:{puzzleID:"loopover",eventName:"Loopover"}},Ld={id:"2x2x2",fullName:"2\xD72\xD72 Cube",kpuzzle:dt(async()=>{let t=new zi((await Promise.resolve().then(()=>(yi(),gi))).cube2x2x2JSON);return t.definition.experimentalIsPatternSolved=_d,t}),svg:async()=>(await Promise.resolve().then(()=>(yi(),gi))).cube2x2x2SVG,llSVG:dt(async()=>(await Promise.resolve().then(()=>(yi(),gi))).cube2x2x2LLSVG),pg:dt(async()=>Aa("2x2x2")),stickeringMask:t=>Kn(Ld,t),stickerings:()=>lo("2x2x2",{use3x3x3Fallbacks:!0})},Nd={KeyI:new A("R"),KeyK:new A("R'"),KeyW:new A("B"),KeyO:new A("B'"),KeyS:new A("D"),KeyL:new A("D'"),KeyD:new A("L"),KeyE:new A("L'"),KeyJ:new A("U"),KeyF:new A("U'"),KeyH:new A("F"),KeyG:new A("F'"),KeyC:new A("l"),KeyR:new A("l'"),KeyU:new A("r"),KeyM:new A("r'"),KeyX:new A("d"),Comma:new A("d'"),KeyT:new A("x"),KeyY:new A("x"),KeyV:new A("x'"),KeyN:new A("x'"),Semicolon:new A("y"),KeyA:new A("y'"),KeyP:new A("z"),KeyQ:new A("z'"),KeyZ:new A("M'"),KeyB:new A("M"),Period:new A("M'"),Backquote:new Bt};xn={"x axis":{sliceDiameter:3,extendsThroughEntirePuzzle:!0,moveSourceInfos:[...Ut(["R"],0,0,3),...Ut(["L'"],1,0,3),...Ut(["r","Rw"],2,0,2),...Ut(["l'","Lw'"],3,0,2),...Ut(["M'"],4,1,2),...Ut(["x","Uv","Dv'"],5,0,3)]},"y axis":{sliceDiameter:3,extendsThroughEntirePuzzle:!0,moveSourceInfos:[...Ut(["U"],0,0,3),...Ut(["D'"],1,0,3),...Ut(["u","Uw"],2,0,2),...Ut(["d'","Dw'"],3,0,2),...Ut(["E'"],4,1,2),...Ut(["y","Uv","Dv'"],5,0,3)]},"z axis":{sliceDiameter:3,extendsThroughEntirePuzzle:!0,moveSourceInfos:[...Ut(["F"],0,0,3),...Ut(["B'"],1,0,3),...Ut(["f","Fw"],2,0,3),...Ut(["b'","Bw'"],3,0,3),...Ut(["S"],4,1,2),...Ut(["z","Fv","Bv'"],5,0,3)]}},fo={};for(let[t,e]of Object.entries(xn))for(let i of e.moveSourceInfos)fo[i.family]={axis:t,moveSourceInfo:i};Id={};for(let t of Object.keys(xn)){let e={};Id[t]=e;for(let i of xn[t].moveSourceInfos)(e[i.type]??=[]).push(i)}kd={};for(let t of Object.keys(xn)){let e=new Map;kd[t]=e;for(let i of xn[t].moveSourceInfos)e.get(i.from)||e.set(i.from,i)}Tx=(t,e)=>fo[t.family].axis===fo[e.family].axis;Nx={quantumMoveOrder:()=>4,axis:{areQuantumMovesSameAxis:Tx,simplifySameAxisMoves:Lx}},Jn={id:"3x3x3",fullName:"3\xD73\xD73 Cube",inventedBy:["Ern\u0151 Rubik"],inventionYear:1974,kpuzzle:dt(async()=>Uc),svg:dt(async()=>(await Promise.resolve().then(()=>(Ta(),Ca))).cube3x3x3SVG),llSVG:dt(async()=>(await Promise.resolve().then(()=>(Ta(),Ca))).cube3x3x3LLSVG),llFaceSVG:dt(async()=>(await Promise.resolve().then(()=>(Ta(),Ca))).cube3x3x3LLFaceSVG),pg:dt(async()=>Aa("3x3x3")),stickeringMask:t=>Kn(Jn,t),stickerings:()=>lo("3x3x3"),puzzleSpecificSimplifyOptions:Nx,keyMapping:async()=>Nd},Ix={...Nd,KeyZ:new A("m'"),KeyB:new A("m"),Period:new A("m'")},Oc=new Zn({id:"4x4x4",fullName:"4\xD74\xD74 Cube"});Oc.llSVG=dt(async()=>(await Promise.resolve().then(()=>(bd(),Rd))).cube4x4x4LLSVG);Oc.keyMapping=async()=>Ix;Ud={KeyI:new A("R"),KeyK:new A("R'"),KeyW:new A("B"),KeyO:new A("B'"),KeyS:new A("D"),KeyL:new A("D'"),KeyD:new A("L"),KeyE:new A("L'"),KeyJ:new A("U"),KeyF:new A("U'"),KeyH:new A("F"),KeyG:new A("F'"),KeyN:new A("Rv'"),KeyC:new A("l"),KeyR:new A("l'"),KeyU:new A("r"),KeyM:new A("r'"),KeyX:new A("d"),Comma:new A("d'"),KeyT:new A("Lv'"),KeyY:new A("Rv"),KeyV:new A("Lv"),Semicolon:new A("Uv"),KeyA:new A("Uv'"),KeyP:new A("BR'"),KeyQ:new A("BL"),KeyZ:new A("BL'"),KeyB:new A("T"),Period:new A("BR"),Backquote:new Bt},Px=class extends yr{constructor(){super({pgID:"skewb diamond",id:"baby_fto",fullName:"Baby FTO",inventedBy:["Uwe M\xE8ffert"],setOrientationModTo1ForPiecesOfOrbits:["CENTERS"]})}stickeringMask(t){return Pd(this,t)}svg=dt(async()=>(await Promise.resolve().then(()=>(Hr(),Vr))).babyFTOSVG);keyMapping=async()=>Ud},Ux=new Px,Ox={id:"clock",fullName:"Clock",inventedBy:["Christopher C. Wiggs","Christopher J. Taylor"],inventionYear:1988,kpuzzle:dt(async()=>new zi((await Promise.resolve().then(()=>(yi(),gi))).clockJSON)),svg:dt(async()=>(await Promise.resolve().then(()=>(yi(),gi))).clockSVG)},Fx=class extends yr{constructor(){super({pgID:"FTO",id:"fto",fullName:"Face-Turning Octahedron",inventedBy:["Karl Rohrbach","David Pitcher"],inventionYear:1983})}stickeringMask(t){return Pd(this,t)}stickerings=kx;svg=dt(async()=>(await Promise.resolve().then(()=>(Hr(),Vr))).ftoSVG);keyMapping=async()=>Ud},zx=new Fx,Dd="d f 0.56",Bx={id:"kilominx",fullName:"Kilominx",kpuzzle:dt(()=>Pc(Dd,{includeCenterOrbits:!1,includeEdgeOrbits:!1})),pg:()=>ao(Dd,{includeCenterOrbits:!1,includeEdgeOrbits:!1}),svg:dt(async()=>(await Promise.resolve().then(()=>(Hr(),Vr))).kilominxSVG)},Gx={id:"loopover",fullName:"Loopover",inventedBy:["Cary Huang"],inventionYear:2018,kpuzzle:dt(async()=>new zi((await Promise.resolve().then(()=>(Hr(),Vr))).loopoverJSON)),svg:async()=>(await Promise.resolve().then(()=>(Hr(),Vr))).loopoverSVG};Hx=ba(()=>lo("megaminx"));Wx={KeyI:new A("R"),KeyK:new A("R'"),KeyW:new A("B"),KeyO:new A("B'"),KeyS:new A("FR"),KeyL:new A("FR'"),KeyD:new A("L"),KeyE:new A("L'"),KeyJ:new A("U"),KeyF:new A("U'"),KeyH:new A("F"),KeyG:new A("F'"),KeyC:new A("Lw"),KeyR:new A("Lw'"),KeyU:new A("Rw"),KeyM:new A("Rw'"),KeyX:new A("d"),Comma:new A("d'"),KeyT:new A("Rv"),KeyY:new A("Rv"),KeyV:new A("Rv'"),KeyN:new A("Rv'"),Semicolon:new A("y"),KeyA:new A("y'"),KeyP:new A("z"),KeyQ:new A("z'"),KeyZ:new A("2L'"),KeyB:new A("2R"),Period:new A("2R'"),Backquote:new Bt},Xx=class extends yr{constructor(){super({id:"megaminx",fullName:"Megaminx",inventionYear:1981})}stickeringMask(t){return Vx(this,t)}stickerings=Od;llSVG=dt(async()=>(await Promise.resolve().then(()=>(Cd(),Ad))).megaminxLLSVG);keyMapping=async()=>Wx},qx=new Xx,jx={id:"melindas2x2x2x2",fullName:"Melinda's 2\xD72\xD72\xD72",inventedBy:["Melinda Green"],kpuzzle:dt(async()=>new zi((await Promise.resolve().then(()=>(yi(),gi))).melindas2x2x2x2OrbitJSON)),svg:dt(async()=>(await Promise.resolve().then(()=>(yi(),gi))).melindas2x2x2x2OrbitSVG)},Yx=class extends yr{constructor(){super({id:"pyraminx",fullName:"Pyraminx",inventedBy:["Uwe Meffert"]})}svg=dt(async()=>(await Promise.resolve().then(()=>(yi(),gi))).pyraminxSVG)},Kx=new Yx,Zx={id:"redi_cube",fullName:"Redi Cube",inventedBy:["Oskar van Deventer"],inventionYear:2009,kpuzzle:dt(async()=>new zi((await Promise.resolve().then(()=>(Hr(),Vr))).rediCubeJSON)),svg:async()=>(await Promise.resolve().then(()=>(Hr(),Vr))).rediCubeSVG},Qx={id:"square1",fullName:"Square-1",inventedBy:["Karel Hr\u0161el","Vojtech Kopsk\xFD"],inventionYear:1990,kpuzzle:dt(async()=>new zi((await Promise.resolve().then(()=>(yi(),gi))).sq1HyperOrbitJSON)),svg:dt(async()=>(await Promise.resolve().then(()=>(yi(),gi))).sq1HyperOrbitSVG)},$x={id:"tri_quad",fullName:"TriQuad",inventedBy:["Bram Cohen","Carl Hoff"],inventionYear:2018,kpuzzle:dt(async()=>new zi((await Promise.resolve().then(()=>(yi(),gi))).triQuadJSON)),svg:dt(async()=>(await Promise.resolve().then(()=>(yi(),gi))).triQuadSVG)},Fc={"3x3x3":Jn,"2x2x2":Ld,"4x4x4":Oc,"5x5x5":new Zn({id:"5x5x5",fullName:"5\xD75\xD75 Cube"}),"6x6x6":new Zn({id:"6x6x6",fullName:"6\xD76\xD76 Cube"}),"7x7x7":new Zn({id:"7x7x7",fullName:"7\xD77\xD77 Cube"}),"40x40x40":new Zn({id:"40x40x40",fullName:"40\xD740\xD740 Cube"}),clock:Ox,megaminx:qx,pyraminx:Kx,skewb:new yr({id:"skewb",fullName:"Skewb",inventedBy:["Tony Durham"]}),square1:Qx,fto:zx,gigaminx:new yr({id:"gigaminx",fullName:"Gigaminx",inventedBy:["Tyler Fox"],inventionYear:2006}),master_tetraminx:new yr({pgID:"master tetraminx",id:"master_tetraminx",fullName:"Master Tetraminx",inventedBy:["Katsuhiko Okamoto"],inventionYear:2002}),kilominx:Bx,redi_cube:Zx,melindas2x2x2x2:jx,loopover:Gx,tri_quad:$x,baby_fto:Ux}});var Fd,Bc,zd,Da,Bd,Vi,Dt,rt,Vt,Ai,Sr,Gc,Vc,Hc,Gd,vr,Vd,Hd,Wd,Xd,qd,jd,Yd,Kd,ho,uo,Zd,Qd,$d,Jd,eu,tu,iu,ru,nu,La,Na,Ia,Wr,ka,Pa,Ua,Oa,Fa,su,ou,Ci,au,lu,cu,fu,hu,du,uu,Wc,Hi,ir,po,mo,Xr,go,Wi,yo,Yt,pu,So,ti,za,Xi,Kt,Ba,Ga,xr,es,Si,ii,rr,ts,is,qi,Va,Ha,Wa,Ot,Xa,qa,nr,sr,ja,rs,Ya,ns,ss,os,as,ls,cs,vo,xo,Eo,_o,wo,Mo,Ro,bo,Ao,Co,To,Do,Lo,No,Io,ko,Po,Uo,Oo,Fo,zo,fs,Bo,Go,Ka,Vo,Ho,Wo,mu,gu,yu,Su,Ti,ri,ji,En,$e,_n,Xc,vu,xu,Eu,Za,_u,wu,Mu,Ru,qc,jc,hi,wn,je=C(()=>{Fd=0,Bc=1,zd=2,Da=1,Bd=2,Vi=3,Dt=0,rt=1,Vt=2,Ai=0,Sr=1,Gc=2,Vc=3,Hc=4,Gd=5,vr=100,Vd=101,Hd=102,Wd=103,Xd=104,qd=200,jd=201,Yd=202,Kd=203,ho=204,uo=205,Zd=206,Qd=207,$d=208,Jd=209,eu=210,tu=211,iu=212,ru=213,nu=214,La=0,Na=1,Ia=2,Wr=3,ka=4,Pa=5,Ua=6,Oa=7,Fa=0,su=1,ou=2,Ci=0,au=1,lu=2,cu=3,fu=4,hu=5,du=6,uu=7,Wc=300,Hi=301,ir=302,po=303,mo=304,Xr=306,go=1e3,Wi=1001,yo=1002,Yt=1003,pu=1004,So=1005,ti=1006,za=1007,Xi=1008,Kt=1009,Ba=1010,Ga=1011,xr=1012,es=1013,Si=1014,ii=1015,rr=1016,ts=1017,is=1018,qi=1020,Va=35902,Ha=1021,Wa=1022,Ot=1023,Xa=1024,qa=1025,nr=1026,sr=1027,ja=1028,rs=1029,Ya=1030,ns=1031,ss=1033,os=33776,as=33777,ls=33778,cs=33779,vo=35840,xo=35841,Eo=35842,_o=35843,wo=36196,Mo=37492,Ro=37496,bo=37808,Ao=37809,Co=37810,To=37811,Do=37812,Lo=37813,No=37814,Io=37815,ko=37816,Po=37817,Uo=37818,Oo=37819,Fo=37820,zo=37821,fs=36492,Bo=36494,Go=36495,Ka=36283,Vo=36284,Ho=36285,Wo=36286,mu=3200,gu=3201,yu=0,Su=1,Ti="",ri="srgb",ji="srgb-linear",En="linear",$e="srgb",_n=7680,Xc=519,vu=512,xu=513,Eu=514,Za=515,_u=516,wu=517,Mu=518,Ru=519,qc=35044,jc="300 es",hi=2e3,wn=2001});function or(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Zt[t&255]+Zt[t>>8&255]+Zt[t>>16&255]+Zt[t>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[i&63|128]+Zt[i>>8&255]+"-"+Zt[i>>16&255]+Zt[i>>24&255]+Zt[r&255]+Zt[r>>8&255]+Zt[r>>16&255]+Zt[r>>24&255]).toLowerCase()}function bt(t,e,i){return Math.max(e,Math.min(i,t))}function bu(t,e){return(t%e+e)%e}function $a(t,e,i){return(1-i)*t+i*e}function hs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ni(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var Zt,Qa,Xo,si=C(()=>{Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qa=Math.PI/180,Xo=180/Math.PI});var Di,qo=C(()=>{si();Di=class{constructor(e=0,i=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=n}static slerpFlat(e,i,r,n,s,o,a){let l=r[n+0],c=r[n+1],f=r[n+2],h=r[n+3],u=s[o+0],p=s[o+1],d=s[o+2],y=s[o+3];if(a===0){e[i+0]=l,e[i+1]=c,e[i+2]=f,e[i+3]=h;return}if(a===1){e[i+0]=u,e[i+1]=p,e[i+2]=d,e[i+3]=y;return}if(h!==y||l!==u||c!==p||f!==d){let g=1-a,m=l*u+c*p+f*d+h*y,w=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){let k=Math.sqrt(M),T=Math.atan2(k,m*w);g=Math.sin(g*T)/k,a=Math.sin(a*T)/k}let x=a*w;if(l=l*g+u*x,c=c*g+p*x,f=f*g+d*x,h=h*g+y*x,g===1-a){let k=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=k,c*=k,f*=k,h*=k}}e[i]=l,e[i+1]=c,e[i+2]=f,e[i+3]=h}static multiplyQuaternionsFlat(e,i,r,n,s,o){let a=r[n],l=r[n+1],c=r[n+2],f=r[n+3],h=s[o],u=s[o+1],p=s[o+2],d=s[o+3];return e[i]=a*d+f*h+l*p-c*u,e[i+1]=l*d+f*u+c*h-a*p,e[i+2]=c*d+f*p+a*u-l*h,e[i+3]=f*d-a*h-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,n){return this._x=e,this._y=i,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){let r=e._x,n=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(r/2),f=a(n/2),h=a(s/2),u=l(r/2),p=l(n/2),d=l(s/2);switch(o){case"XYZ":this._x=u*f*h+c*p*d,this._y=c*p*h-u*f*d,this._z=c*f*d+u*p*h,this._w=c*f*h-u*p*d;break;case"YXZ":this._x=u*f*h+c*p*d,this._y=c*p*h-u*f*d,this._z=c*f*d-u*p*h,this._w=c*f*h+u*p*d;break;case"ZXY":this._x=u*f*h-c*p*d,this._y=c*p*h+u*f*d,this._z=c*f*d+u*p*h,this._w=c*f*h-u*p*d;break;case"ZYX":this._x=u*f*h-c*p*d,this._y=c*p*h+u*f*d,this._z=c*f*d-u*p*h,this._w=c*f*h+u*p*d;break;case"YZX":this._x=u*f*h+c*p*d,this._y=c*p*h+u*f*d,this._z=c*f*d-u*p*h,this._w=c*f*h-u*p*d;break;case"XZY":this._x=u*f*h-c*p*d,this._y=c*p*h-u*f*d,this._z=c*f*d+u*p*h,this._w=c*f*h+u*p*d;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){let r=i/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){let i=e.elements,r=i[0],n=i[4],s=i[8],o=i[1],a=i[5],l=i[9],c=i[2],f=i[6],h=i[10],u=r+a+h;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(o-n)*p}else if(r>a&&r>h){let p=2*Math.sqrt(1+r-a-h);this._w=(f-l)/p,this._x=.25*p,this._y=(n+o)/p,this._z=(s+c)/p}else if(a>h){let p=2*Math.sqrt(1+a-r-h);this._w=(s-c)/p,this._x=(n+o)/p,this._y=.25*p,this._z=(l+f)/p}else{let p=2*Math.sqrt(1+h-r-a);this._w=(o-n)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,i){let r=this.angleTo(e);if(r===0)return this;let n=Math.min(1,i/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){let r=e._x,n=e._y,s=e._z,o=e._w,a=i._x,l=i._y,c=i._z,f=i._w;return this._x=r*f+o*a+n*c-s*l,this._y=n*f+o*l+s*a-r*c,this._z=s*f+o*c+r*l-n*a,this._w=o*f-r*a-n*l-s*c,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);let r=this._x,n=this._y,s=this._z,o=this._w,a=o*e._w+r*e._x+n*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=r,this._y=n,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-i;return this._w=p*o+i*this._w,this._x=p*r+i*this._x,this._y=p*n+i*this._y,this._z=p*s+i*this._z,this.normalize(),this}let c=Math.sqrt(l),f=Math.atan2(c,a),h=Math.sin((1-i)*f)/c,u=Math.sin(i*f)/c;return this._w=o*h+this._w*u,this._x=r*h+this._x*u,this._y=n*h+this._y*u,this._z=s*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){let e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),n=Math.sqrt(1-r),s=Math.sqrt(r);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(i),s*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}});var O,Yc,Au,vt=C(()=>{si();qo();O=class t{constructor(e=0,i=0,r=0){t.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Au.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Au.setFromAxisAngle(e,i))}applyMatrix3(e){let i=this.x,r=this.y,n=this.z,s=e.elements;return this.x=s[0]*i+s[3]*r+s[6]*n,this.y=s[1]*i+s[4]*r+s[7]*n,this.z=s[2]*i+s[5]*r+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let i=this.x,r=this.y,n=this.z,s=e.elements,o=1/(s[3]*i+s[7]*r+s[11]*n+s[15]);return this.x=(s[0]*i+s[4]*r+s[8]*n+s[12])*o,this.y=(s[1]*i+s[5]*r+s[9]*n+s[13])*o,this.z=(s[2]*i+s[6]*r+s[10]*n+s[14])*o,this}applyQuaternion(e){let i=this.x,r=this.y,n=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*n-a*r),f=2*(a*i-s*n),h=2*(s*r-o*i);return this.x=i+l*c+o*h-a*f,this.y=r+l*f+a*c-s*h,this.z=n+l*h+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let i=this.x,r=this.y,n=this.z,s=e.elements;return this.x=s[0]*i+s[4]*r+s[8]*n,this.y=s[1]*i+s[5]*r+s[9]*n,this.z=s[2]*i+s[6]*r+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){let r=e.x,n=e.y,s=e.z,o=i.x,a=i.y,l=i.z;return this.x=n*l-s*a,this.y=s*o-r*l,this.z=r*a-n*o,this}projectOnVector(e){let i=e.lengthSq();if(i===0)return this.set(0,0,0);let r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Yc.copy(this).projectOnVector(e),this.sub(Yc)}reflect(e){return this.sub(Yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(e)/i;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let i=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return i*i+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){let n=Math.sin(i)*e;return this.x=n*Math.sin(r),this.y=Math.cos(i)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){let i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){let i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=n,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yc=new O,Au=new Di});var Pe,oi=C(()=>{si();Pe=class t{constructor(e=0,i=0){t.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let i=this.x,r=this.y,n=e.elements;return this.x=n[0]*i+n[3]*r+n[6],this.y=n[1]*i+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(e)/i;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){let r=Math.cos(i),n=Math.sin(i),s=this.x-e.x,o=this.y-e.y;return this.x=s*r-o*n+e.x,this.y=s*n+o*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}});var Tt,Ja,Et,ds,us,Li,Er=C(()=>{vt();oi();si();je();Tt=new O,Ja=new Pe,Et=class{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=qc,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=i.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Ja.fromBufferAttribute(this,i),Ja.applyMatrix3(e),this.setXY(i,Ja.x,Ja.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Tt.fromBufferAttribute(this,i),Tt.applyMatrix3(e),this.setXYZ(i,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)Tt.fromBufferAttribute(this,i),Tt.applyMatrix4(e),this.setXYZ(i,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Tt.fromBufferAttribute(this,i),Tt.applyNormalMatrix(e),this.setXYZ(i,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Tt.fromBufferAttribute(this,i),Tt.transformDirection(e),this.setXYZ(i,Tt.x,Tt.y,Tt.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=hs(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=ni(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=hs(i,this.array)),i}setX(e,i){return this.normalized&&(i=ni(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=hs(i,this.array)),i}setY(e,i){return this.normalized&&(i=ni(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=hs(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ni(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=hs(i,this.array)),i}setW(e,i){return this.normalized&&(i=ni(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=ni(i,this.array),r=ni(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,n){return e*=this.itemSize,this.normalized&&(i=ni(i,this.array),r=ni(r,this.array),n=ni(n,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,i,r,n,s){return e*=this.itemSize,this.normalized&&(i=ni(i,this.array),r=ni(r,this.array),n=ni(n,this.array),s=ni(s,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qc&&(e.usage=this.usage),e}},ds=class extends Et{constructor(e,i,r){super(new Uint16Array(e),i,r)}},us=class extends Et{constructor(e,i,r){super(new Uint32Array(e),i,r)}},Li=class extends Et{constructor(e,i,r){super(new Float32Array(e),i,r)}}});function Kc(t,e,i,r,n){for(let s=0,o=t.length-3;s<=o;s+=3){Rn.fromArray(t,s);let a=n.x*Math.abs(Rn.x)+n.y*Math.abs(Rn.y)+n.z*Math.abs(Rn.z),l=e.dot(Rn),c=i.dot(Rn),f=r.dot(Rn);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}var wr,_r,Yi,el,ps,ms,gs,qr,jr,Mn,jo,tl,il,Rn,Zc=C(()=>{vt();wr=class{constructor(e=new O(1/0,1/0,1/0),i=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Yi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Yi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){let r=Yi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);let r=e.geometry;if(r!==void 0){let s=r.getAttribute("position");if(i===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yi):Yi.fromBufferAttribute(s,o),Yi.applyMatrix4(e.matrixWorld),this.expandByPoint(Yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),el.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),el.copy(r.boundingBox)),el.applyMatrix4(e.matrixWorld),this.union(el)}let n=e.children;for(let s=0,o=n.length;s<o;s++)this.expandByObject(n[s],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yi),Yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jo),tl.subVectors(this.max,jo),ps.subVectors(e.a,jo),ms.subVectors(e.b,jo),gs.subVectors(e.c,jo),qr.subVectors(ms,ps),jr.subVectors(gs,ms),Mn.subVectors(ps,gs);let i=[0,-qr.z,qr.y,0,-jr.z,jr.y,0,-Mn.z,Mn.y,qr.z,0,-qr.x,jr.z,0,-jr.x,Mn.z,0,-Mn.x,-qr.y,qr.x,0,-jr.y,jr.x,0,-Mn.y,Mn.x,0];return!Kc(i,ps,ms,gs,tl)||(i=[1,0,0,0,1,0,0,0,1],!Kc(i,ps,ms,gs,tl))?!1:(il.crossVectors(qr,jr),i=[il.x,il.y,il.z],Kc(i,ps,ms,gs,tl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_r[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_r[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_r[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_r[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_r[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_r[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_r[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_r[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_r),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},_r=[new O,new O,new O,new O,new O,new O,new O,new O],Yi=new O,el=new wr,ps=new O,ms=new O,gs=new O,qr=new O,jr=new O,Mn=new O,jo=new O,tl=new O,il=new O,Rn=new O});var di,bn=C(()=>{di=class{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});let r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;let r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let s=n.indexOf(i);s!==-1&&n.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let r=this._listeners[e.type];if(r!==void 0){e.target=this;let n=r.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,e);e.target=null}}}});var Jx,Yo,Qc,Yr,rl=C(()=>{Zc();vt();Jx=new wr,Yo=new O,Qc=new O,Yr=class{constructor(e=new O,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){let r=this.center;i!==void 0?r.copy(i):Jx.setFromPoints(e).getCenter(r);let n=0;for(let s=0,o=e.length;s<o;s++)n=Math.max(n,r.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){let r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yo.subVectors(e,this.center);let i=Yo.lengthSq();if(i>this.radius*this.radius){let r=Math.sqrt(i),n=(r-this.radius)*.5;this.center.addScaledVector(Yo,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yo.copy(e.center).add(Qc)),this.expandByPoint(Yo.copy(e.center).sub(Qc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}});var Ye,ys,Ki,eE,tE,Kr,nl,vi,Ni=C(()=>{je();vt();Ye=class t{constructor(e,i,r,n,s,o,a,l,c,f,h,u,p,d,y,g){t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,n,s,o,a,l,c,f,h,u,p,d,y,g)}set(e,i,r,n,s,o,a,l,c,f,h,u,p,d,y,g){let m=this.elements;return m[0]=e,m[4]=i,m[8]=r,m[12]=n,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=f,m[10]=h,m[14]=u,m[3]=p,m[7]=d,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){let i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){let i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){let i=this.elements,r=e.elements,n=1/ys.setFromMatrixColumn(e,0).length(),s=1/ys.setFromMatrixColumn(e,1).length(),o=1/ys.setFromMatrixColumn(e,2).length();return i[0]=r[0]*n,i[1]=r[1]*n,i[2]=r[2]*n,i[3]=0,i[4]=r[4]*s,i[5]=r[5]*s,i[6]=r[6]*s,i[7]=0,i[8]=r[8]*o,i[9]=r[9]*o,i[10]=r[10]*o,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){let i=this.elements,r=e.x,n=e.y,s=e.z,o=Math.cos(r),a=Math.sin(r),l=Math.cos(n),c=Math.sin(n),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let u=o*f,p=o*h,d=a*f,y=a*h;i[0]=l*f,i[4]=-l*h,i[8]=c,i[1]=p+d*c,i[5]=u-y*c,i[9]=-a*l,i[2]=y-u*c,i[6]=d+p*c,i[10]=o*l}else if(e.order==="YXZ"){let u=l*f,p=l*h,d=c*f,y=c*h;i[0]=u+y*a,i[4]=d*a-p,i[8]=o*c,i[1]=o*h,i[5]=o*f,i[9]=-a,i[2]=p*a-d,i[6]=y+u*a,i[10]=o*l}else if(e.order==="ZXY"){let u=l*f,p=l*h,d=c*f,y=c*h;i[0]=u-y*a,i[4]=-o*h,i[8]=d+p*a,i[1]=p+d*a,i[5]=o*f,i[9]=y-u*a,i[2]=-o*c,i[6]=a,i[10]=o*l}else if(e.order==="ZYX"){let u=o*f,p=o*h,d=a*f,y=a*h;i[0]=l*f,i[4]=d*c-p,i[8]=u*c+y,i[1]=l*h,i[5]=y*c+u,i[9]=p*c-d,i[2]=-c,i[6]=a*l,i[10]=o*l}else if(e.order==="YZX"){let u=o*l,p=o*c,d=a*l,y=a*c;i[0]=l*f,i[4]=y-u*h,i[8]=d*h+p,i[1]=h,i[5]=o*f,i[9]=-a*f,i[2]=-c*f,i[6]=p*h+d,i[10]=u-y*h}else if(e.order==="XZY"){let u=o*l,p=o*c,d=a*l,y=a*c;i[0]=l*f,i[4]=-h,i[8]=c*f,i[1]=u*h+y,i[5]=o*f,i[9]=p*h-d,i[2]=d*h-p,i[6]=a*f,i[10]=y*h+u}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eE,e,tE)}lookAt(e,i,r){let n=this.elements;return vi.subVectors(e,i),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),Kr.crossVectors(r,vi),Kr.lengthSq()===0&&(Math.abs(r.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),Kr.crossVectors(r,vi)),Kr.normalize(),nl.crossVectors(vi,Kr),n[0]=Kr.x,n[4]=nl.x,n[8]=vi.x,n[1]=Kr.y,n[5]=nl.y,n[9]=vi.y,n[2]=Kr.z,n[6]=nl.z,n[10]=vi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){let r=e.elements,n=i.elements,s=this.elements,o=r[0],a=r[4],l=r[8],c=r[12],f=r[1],h=r[5],u=r[9],p=r[13],d=r[2],y=r[6],g=r[10],m=r[14],w=r[3],M=r[7],x=r[11],k=r[15],T=n[0],b=n[4],L=n[8],S=n[12],v=n[1],D=n[5],P=n[9],I=n[13],V=n[2],j=n[6],H=n[10],K=n[14],G=n[3],te=n[7],ne=n[11],ye=n[15];return s[0]=o*T+a*v+l*V+c*G,s[4]=o*b+a*D+l*j+c*te,s[8]=o*L+a*P+l*H+c*ne,s[12]=o*S+a*I+l*K+c*ye,s[1]=f*T+h*v+u*V+p*G,s[5]=f*b+h*D+u*j+p*te,s[9]=f*L+h*P+u*H+p*ne,s[13]=f*S+h*I+u*K+p*ye,s[2]=d*T+y*v+g*V+m*G,s[6]=d*b+y*D+g*j+m*te,s[10]=d*L+y*P+g*H+m*ne,s[14]=d*S+y*I+g*K+m*ye,s[3]=w*T+M*v+x*V+k*G,s[7]=w*b+M*D+x*j+k*te,s[11]=w*L+M*P+x*H+k*ne,s[15]=w*S+M*I+x*K+k*ye,this}multiplyScalar(e){let i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){let e=this.elements,i=e[0],r=e[4],n=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],h=e[6],u=e[10],p=e[14],d=e[3],y=e[7],g=e[11],m=e[15];return d*(+s*l*h-n*c*h-s*a*u+r*c*u+n*a*p-r*l*p)+y*(+i*l*p-i*c*u+s*o*u-n*o*p+n*c*f-s*l*f)+g*(+i*c*h-i*a*p-s*o*h+r*o*p+s*a*f-r*c*f)+m*(-n*a*f-i*l*h+i*a*u+n*o*h-r*o*u+r*l*f)}transpose(){let e=this.elements,i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=i,n[14]=r),this}invert(){let e=this.elements,i=e[0],r=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=e[9],u=e[10],p=e[11],d=e[12],y=e[13],g=e[14],m=e[15],w=h*g*c-y*u*c+y*l*p-a*g*p-h*l*m+a*u*m,M=d*u*c-f*g*c-d*l*p+o*g*p+f*l*m-o*u*m,x=f*y*c-d*h*c+d*a*p-o*y*p-f*a*m+o*h*m,k=d*h*l-f*y*l-d*a*u+o*y*u+f*a*g-o*h*g,T=i*w+r*M+n*x+s*k;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/T;return e[0]=w*b,e[1]=(y*u*s-h*g*s-y*n*p+r*g*p+h*n*m-r*u*m)*b,e[2]=(a*g*s-y*l*s+y*n*c-r*g*c-a*n*m+r*l*m)*b,e[3]=(h*l*s-a*u*s-h*n*c+r*u*c+a*n*p-r*l*p)*b,e[4]=M*b,e[5]=(f*g*s-d*u*s+d*n*p-i*g*p-f*n*m+i*u*m)*b,e[6]=(d*l*s-o*g*s-d*n*c+i*g*c+o*n*m-i*l*m)*b,e[7]=(o*u*s-f*l*s+f*n*c-i*u*c-o*n*p+i*l*p)*b,e[8]=x*b,e[9]=(d*h*s-f*y*s-d*r*p+i*y*p+f*r*m-i*h*m)*b,e[10]=(o*y*s-d*a*s+d*r*c-i*y*c-o*r*m+i*a*m)*b,e[11]=(f*a*s-o*h*s-f*r*c+i*h*c+o*r*p-i*a*p)*b,e[12]=k*b,e[13]=(f*y*n-d*h*n+d*r*u-i*y*u-f*r*g+i*h*g)*b,e[14]=(d*a*n-o*y*n-d*r*l+i*y*l+o*r*g-i*a*g)*b,e[15]=(o*h*n-f*a*n+f*r*l-i*h*l-o*r*u+i*a*u)*b,this}scale(e){let i=this.elements,r=e.x,n=e.y,s=e.z;return i[0]*=r,i[4]*=n,i[8]*=s,i[1]*=r,i[5]*=n,i[9]*=s,i[2]*=r,i[6]*=n,i[10]*=s,i[3]*=r,i[7]*=n,i[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,n))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){let i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){let i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){let i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){let r=Math.cos(i),n=Math.sin(i),s=1-r,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+r,c*a-n*l,c*l+n*a,0,c*a+n*l,f*a+r,f*l-n*o,0,c*l-n*a,f*l+n*o,s*l*l+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,n,s,o){return this.set(1,r,s,0,e,1,o,0,i,n,1,0,0,0,0,1),this}compose(e,i,r){let n=this.elements,s=i._x,o=i._y,a=i._z,l=i._w,c=s+s,f=o+o,h=a+a,u=s*c,p=s*f,d=s*h,y=o*f,g=o*h,m=a*h,w=l*c,M=l*f,x=l*h,k=r.x,T=r.y,b=r.z;return n[0]=(1-(y+m))*k,n[1]=(p+x)*k,n[2]=(d-M)*k,n[3]=0,n[4]=(p-x)*T,n[5]=(1-(u+m))*T,n[6]=(g+w)*T,n[7]=0,n[8]=(d+M)*b,n[9]=(g-w)*b,n[10]=(1-(u+y))*b,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,i,r){let n=this.elements,s=ys.set(n[0],n[1],n[2]).length(),o=ys.set(n[4],n[5],n[6]).length(),a=ys.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],Ki.copy(this);let c=1/s,f=1/o,h=1/a;return Ki.elements[0]*=c,Ki.elements[1]*=c,Ki.elements[2]*=c,Ki.elements[4]*=f,Ki.elements[5]*=f,Ki.elements[6]*=f,Ki.elements[8]*=h,Ki.elements[9]*=h,Ki.elements[10]*=h,i.setFromRotationMatrix(Ki),r.x=s,r.y=o,r.z=a,this}makePerspective(e,i,r,n,s,o,a=hi){let l=this.elements,c=2*s/(i-e),f=2*s/(r-n),h=(i+e)/(i-e),u=(r+n)/(r-n),p,d;if(a===hi)p=-(o+s)/(o-s),d=-2*o*s/(o-s);else if(a===wn)p=-o/(o-s),d=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=d,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,i,r,n,s,o,a=hi){let l=this.elements,c=1/(i-e),f=1/(r-n),h=1/(o-s),u=(i+e)*c,p=(r+n)*f,d,y;if(a===hi)d=(o+s)*h,y=-2*h;else if(a===wn)d=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-d,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let i=this.elements,r=e.elements;for(let n=0;n<16;n++)if(i[n]!==r[n])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){let r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}},ys=new O,Ki=new Ye,eE=new O(0,0,0),tE=new O(1,1,1),Kr=new O,nl=new O,vi=new O});var Cu,Tu,_t,Zr=C(()=>{qo();Ni();si();Cu=new Ye,Tu=new Di,_t=class t{constructor(e=0,i=0,r=0,n=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,n=this._order){return this._x=e,this._y=i,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){let n=e.elements,s=n[0],o=n[4],a=n[8],l=n[1],c=n[5],f=n[9],h=n[2],u=n[6],p=n[10];switch(i){case"XYZ":this._y=Math.asin(bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Cu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cu,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Tu.setFromEuler(this),this.setFromQuaternion(Tu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_t.DEFAULT_ORDER="XYZ"});var Qr,sl=C(()=>{Qr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}});var De,$c,lr=C(()=>{De=class t{constructor(e,i,r,n,s,o,a,l,c){t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,n,s,o,a,l,c)}set(e,i,r,n,s,o,a,l,c){let f=this.elements;return f[0]=e,f[1]=n,f[2]=a,f[3]=i,f[4]=s,f[5]=l,f[6]=r,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){let r=e.elements,n=i.elements,s=this.elements,o=r[0],a=r[3],l=r[6],c=r[1],f=r[4],h=r[7],u=r[2],p=r[5],d=r[8],y=n[0],g=n[3],m=n[6],w=n[1],M=n[4],x=n[7],k=n[2],T=n[5],b=n[8];return s[0]=o*y+a*w+l*k,s[3]=o*g+a*M+l*T,s[6]=o*m+a*x+l*b,s[1]=c*y+f*w+h*k,s[4]=c*g+f*M+h*T,s[7]=c*m+f*x+h*b,s[2]=u*y+p*w+d*k,s[5]=u*g+p*M+d*T,s[8]=u*m+p*x+d*b,this}multiplyScalar(e){let i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){let e=this.elements,i=e[0],r=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return i*o*f-i*a*c-r*s*f+r*a*l+n*s*c-n*o*l}invert(){let e=this.elements,i=e[0],r=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=f*o-a*c,u=a*l-f*s,p=c*s-o*l,d=i*h+r*u+n*p;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/d;return e[0]=h*y,e[1]=(n*c-f*r)*y,e[2]=(a*r-n*o)*y,e[3]=u*y,e[4]=(f*i-n*l)*y,e[5]=(n*s-a*i)*y,e[6]=p*y,e[7]=(r*l-c*i)*y,e[8]=(o*i-r*s)*y,this}transpose(){let e,i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,n,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(r*l,r*c,-r*(l*o+c*a)+o+e,-n*c,n*l,-n*(-c*o+l*a)+a+i,0,0,1),this}scale(e,i){return this.premultiply($c.makeScale(e,i)),this}rotate(e){return this.premultiply($c.makeRotation(-e)),this}translate(e,i){return this.premultiply($c.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){let i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){let i=this.elements,r=e.elements;for(let n=0;n<9;n++)if(i[n]!==r[n])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){let r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}},$c=new De});var iE,Du,Ss,Mr,ol,Ko,rE,nE,Lu,Nu,Iu,ku,sE,vs,Jc,At,Rr=C(()=>{qo();vt();Ni();bn();Zr();sl();lr();si();iE=0,Du=new O,Ss=new Di,Mr=new Ye,ol=new O,Ko=new O,rE=new O,nE=new Di,Lu=new O(1,0,0),Nu=new O(0,1,0),Iu=new O(0,0,1),ku={type:"added"},sE={type:"removed"},vs={type:"childadded",child:null},Jc={type:"childremoved",child:null},At=class t extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iE++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new O,i=new _t,r=new Di,n=new O(1,1,1);function s(){r.setFromEuler(i,!1)}function o(){i.setFromQuaternion(r,void 0,!1)}i._onChange(s),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ye},normalMatrix:{value:new De}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ss.setFromAxisAngle(e,i),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,i){return Ss.setFromAxisAngle(e,i),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(Lu,e)}rotateY(e){return this.rotateOnAxis(Nu,e)}rotateZ(e){return this.rotateOnAxis(Iu,e)}translateOnAxis(e,i){return Du.copy(e).applyQuaternion(this.quaternion),this.position.add(Du.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Lu,e)}translateY(e){return this.translateOnAxis(Nu,e)}translateZ(e){return this.translateOnAxis(Iu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mr.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?ol.copy(e):ol.set(e,i,r);let n=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mr.lookAt(Ko,ol,this.up):Mr.lookAt(ol,Ko,this.up),this.quaternion.setFromRotationMatrix(Mr),n&&(Mr.extractRotation(n.matrixWorld),Ss.setFromRotationMatrix(Mr),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ku),vs.child=e,this.dispatchEvent(vs),vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(sE),Jc.child=e,this.dispatchEvent(Jc),Jc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ku),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,n=this.children.length;r<n;r++){let o=this.children[r].getObjectByProperty(e,i);if(o!==void 0)return o}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,e,rE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,nE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);let i=this.children;for(let r=0,n=i.length;r<n;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let i=this.children;for(let r=0,n=i.length;r<n;r++)i[r].traverseVisible(e)}traverseAncestors(e){let i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let i=this.children;for(let r=0,n=i.length;r<n;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){let i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));n.material=a}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(s(e.animations,l))}}if(i){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),h=o(e.shapes),u=o(e.skeletons),p=o(e.animations),d=o(e.nodes);a.length>0&&(r.geometries=a),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),f.length>0&&(r.images=f),h.length>0&&(r.shapes=h),u.length>0&&(r.skeletons=u),p.length>0&&(r.animations=p),d.length>0&&(r.nodes=d)}return r.object=n,r;function o(a){let l=[];for(let c in a){let f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){let n=e.children[r];this.add(n.clone())}return this}};At.DEFAULT_UP=new O(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0});function al(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function $r(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Uu(){let t=$r("canvas");return t.style.display="block",t}function An(t){t in Pu||(Pu[t]=!0,console.warn(t))}function Ou(t,e,i){return new Promise(function(r,n){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:n();break;case t.TIMEOUT_EXPIRED:setTimeout(s,i);break;default:r()}}setTimeout(s,i)})}function Fu(t){let e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function zu(t){let e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Pu,Jr=C(()=>{Pu={}});var oE,Ii,ef,xs,xi,Zo,Ft,Ht,en=C(()=>{vt();oi();Zc();bn();Er();rl();Rr();Ni();lr();si();Jr();oE=0,Ii=new Ye,ef=new At,xs=new O,xi=new wr,Zo=new wr,Ft=new O,Ht=class t extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(al(e)?us:ds)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let s=new De().getNormalMatrix(e);r.applyNormalMatrix(s),r.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ii.makeRotationFromQuaternion(e),this.applyMatrix4(Ii),this}rotateX(e){return Ii.makeRotationX(e),this.applyMatrix4(Ii),this}rotateY(e){return Ii.makeRotationY(e),this.applyMatrix4(Ii),this}rotateZ(e){return Ii.makeRotationZ(e),this.applyMatrix4(Ii),this}translate(e,i,r){return Ii.makeTranslation(e,i,r),this.applyMatrix4(Ii),this}scale(e,i,r){return Ii.makeScale(e,i,r),this.applyMatrix4(Ii),this}lookAt(e){return ef.lookAt(e),ef.updateMatrix(),this.applyMatrix4(ef.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let n=0,s=e.length;n<s;n++){let o=e[n];r.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Li(r,3))}else{for(let r=0,n=i.count;r<n;r++){let s=e[r];i.setXYZ(r,s.x,s.y,s.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wr);let e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,n=i.length;r<n;r++){let s=i[r];xi.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yr);let e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let r=this.boundingSphere.center;if(xi.setFromBufferAttribute(e),i)for(let s=0,o=i.length;s<o;s++){let a=i[s];Zo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(xi.min,Zo.min),xi.expandByPoint(Ft),Ft.addVectors(xi.max,Zo.max),xi.expandByPoint(Ft)):(xi.expandByPoint(Zo.min),xi.expandByPoint(Zo.max))}xi.getCenter(r);let n=0;for(let s=0,o=e.count;s<o;s++)Ft.fromBufferAttribute(e,s),n=Math.max(n,r.distanceToSquared(Ft));if(i)for(let s=0,o=i.length;s<o;s++){let a=i[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Ft.fromBufferAttribute(a,c),l&&(xs.fromBufferAttribute(e,c),Ft.add(xs)),n=Math.max(n,r.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,n=i.normal,s=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Et(new Float32Array(4*r.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<r.count;L++)a[L]=new O,l[L]=new O;let c=new O,f=new O,h=new O,u=new Pe,p=new Pe,d=new Pe,y=new O,g=new O;function m(L,S,v){c.fromBufferAttribute(r,L),f.fromBufferAttribute(r,S),h.fromBufferAttribute(r,v),u.fromBufferAttribute(s,L),p.fromBufferAttribute(s,S),d.fromBufferAttribute(s,v),f.sub(c),h.sub(c),p.sub(u),d.sub(u);let D=1/(p.x*d.y-d.x*p.y);isFinite(D)&&(y.copy(f).multiplyScalar(d.y).addScaledVector(h,-p.y).multiplyScalar(D),g.copy(h).multiplyScalar(p.x).addScaledVector(f,-d.x).multiplyScalar(D),a[L].add(y),a[S].add(y),a[v].add(y),l[L].add(g),l[S].add(g),l[v].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let L=0,S=w.length;L<S;++L){let v=w[L],D=v.start,P=v.count;for(let I=D,V=D+P;I<V;I+=3)m(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let M=new O,x=new O,k=new O,T=new O;function b(L){k.fromBufferAttribute(n,L),T.copy(k);let S=a[L];M.copy(S),M.sub(k.multiplyScalar(k.dot(S))).normalize(),x.crossVectors(T,S);let D=x.dot(l[L])<0?-1:1;o.setXYZW(L,M.x,M.y,M.z,D)}for(let L=0,S=w.length;L<S;++L){let v=w[L],D=v.start,P=v.count;for(let I=D,V=D+P;I<V;I+=3)b(e.getX(I+0)),b(e.getX(I+1)),b(e.getX(I+2))}}computeVertexNormals(){let e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Et(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let u=0,p=r.count;u<p;u++)r.setXYZ(u,0,0,0);let n=new O,s=new O,o=new O,a=new O,l=new O,c=new O,f=new O,h=new O;if(e)for(let u=0,p=e.count;u<p;u+=3){let d=e.getX(u+0),y=e.getX(u+1),g=e.getX(u+2);n.fromBufferAttribute(i,d),s.fromBufferAttribute(i,y),o.fromBufferAttribute(i,g),f.subVectors(o,s),h.subVectors(n,s),f.cross(h),a.fromBufferAttribute(r,d),l.fromBufferAttribute(r,y),c.fromBufferAttribute(r,g),a.add(f),l.add(f),c.add(f),r.setXYZ(d,a.x,a.y,a.z),r.setXYZ(y,l.x,l.y,l.z),r.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=i.count;u<p;u+=3)n.fromBufferAttribute(i,u+0),s.fromBufferAttribute(i,u+1),o.fromBufferAttribute(i,u+2),f.subVectors(o,s),h.subVectors(n,s),f.cross(h),r.setXYZ(u+0,f.x,f.y,f.z),r.setXYZ(u+1,f.x,f.y,f.z),r.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Ft.fromBufferAttribute(e,i),Ft.normalize(),e.setXYZ(i,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){let c=a.array,f=a.itemSize,h=a.normalized,u=new c.constructor(l.length*f),p=0,d=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*f;for(let m=0;m<f;m++)u[d++]=c[p++]}return new Et(u,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new t,r=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=e(l,r);i.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let f=0,h=c.length;f<h;f++){let u=c[f],p=e(u,r);l.push(p)}i.morphAttributes[a]=l}i.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];i.addGroup(c.start,c.count,c.materialIndex)}return i}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let c=r[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let h=0,u=c.length;h<u;h++){let p=c[h];f.push(p.toJSON(e.data))}f.length>0&&(n[l]=f,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=e.name;let r=e.index;r!==null&&this.setIndex(r.clone(i));let n=e.attributes;for(let c in n){let f=n[c];this.setAttribute(c,f.clone(i))}let s=e.morphAttributes;for(let c in s){let f=[],h=s[c];for(let u=0,p=h.length;u<p;u++)f.push(h[u].clone(i));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,f=o.length;c<f;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}});var cr,Qo=C(()=>{en();Er();vt();cr=class t extends Ht{constructor(e=1,i=1,r=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:n,heightSegments:s,depthSegments:o};let a=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],f=[],h=[],u=0,p=0;d("z","y","x",-1,-1,r,i,e,o,s,0),d("z","y","x",1,-1,r,i,-e,o,s,1),d("x","z","y",1,1,e,r,i,n,o,2),d("x","z","y",1,-1,e,r,-i,n,o,3),d("x","y","z",1,-1,e,i,r,n,s,4),d("x","y","z",-1,-1,e,i,-r,n,s,5),this.setIndex(l),this.setAttribute("position",new Li(c,3)),this.setAttribute("normal",new Li(f,3)),this.setAttribute("uv",new Li(h,2));function d(y,g,m,w,M,x,k,T,b,L,S){let v=x/b,D=k/L,P=x/2,I=k/2,V=T/2,j=b+1,H=L+1,K=0,G=0,te=new O;for(let ne=0;ne<H;ne++){let ye=ne*D-I;for(let xe=0;xe<j;xe++){let Fe=xe*v-P;te[y]=Fe*w,te[g]=ye*M,te[m]=V,c.push(te.x,te.y,te.z),te[y]=0,te[g]=0,te[m]=T>0?1:-1,f.push(te.x,te.y,te.z),h.push(xe/b),h.push(1-ne/L),K+=1}}for(let ne=0;ne<L;ne++)for(let ye=0;ye<b;ye++){let xe=u+ye+j*ne,Fe=u+ye+j*(ne+1),Z=u+(ye+1)+j*(ne+1),ie=u+(ye+1)+j*ne;l.push(xe,Fe,ie),l.push(Fe,Z,ie),G+=6}a.addGroup(p,G,S),p+=G,u+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}});var tf,Bu=C(()=>{tf={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}}});var rf,Gu,Vu=C(()=>{rf=class{constructor(e,i,r){let n=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this.itemStart=function(f){a++,s===!1&&n.onStart!==void 0&&n.onStart(f,o,a),s=!0},this.itemEnd=function(f){o++,n.onProgress!==void 0&&n.onProgress(f,o,a),o===a&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(f){n.onError!==void 0&&n.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,h){return c.push(f,h),this},this.removeHandler=function(f){let h=c.indexOf(f);return h!==-1&&c.splice(h,2),this},this.getHandler=function(f){for(let h=0,u=c.length;h<u;h+=2){let p=c[h],d=c[h+1];if(p.global&&(p.lastIndex=0),p.test(f))return d}return null}}},Gu=new rf});var Cn,nf=C(()=>{Vu();Cn=class{constructor(e){this.manager=e!==void 0?e:Gu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){let r=this;return new Promise(function(n,s){r.load(e,n,i,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Cn.DEFAULT_MATERIAL_NAME="__DEFAULT"});var ll,Hu=C(()=>{Bu();nf();Jr();ll=class extends Cn{constructor(e){super(e)}load(e,i,r,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=tf.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){i&&i(o),s.manager.itemEnd(e)},0),o;let a=$r("img");function l(){f(),tf.add(e,this),i&&i(this),s.manager.itemEnd(e)}function c(h){f(),n&&n(h),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}});function Zi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Tn(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var Ve,Wu,Xu,qu,ju,Yu,fr=C(()=>{je();lr();Ve={enabled:!0,workingColorSpace:ji,spaces:{},convert:function(t,e,i){return this.enabled===!1||e===i||!e||!i||(this.spaces[e].transfer===$e&&(t.r=Zi(t.r),t.g=Zi(t.g),t.b=Zi(t.b)),this.spaces[e].primaries!==this.spaces[i].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[i].fromXYZ)),this.spaces[i].transfer===$e&&(t.r=Tn(t.r),t.g=Tn(t.g),t.b=Tn(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===Ti?En:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,i){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[i].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};Wu=[.64,.33,.3,.6,.15,.06],Xu=[.2126,.7152,.0722],qu=[.3127,.329],ju=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yu=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ve.define({[ji]:{primaries:Wu,whitePoint:qu,transfer:En,toXYZ:ju,fromXYZ:Yu,luminanceCoefficients:Xu,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:Wu,whitePoint:qu,transfer:$e,toXYZ:ju,fromXYZ:Yu,luminanceCoefficients:Xu,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}})});var Es,cl,Ku=C(()=>{Jr();fr();cl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Es===void 0&&(Es=$r("canvas")),Es.width=e.width,Es.height=e.height;let r=Es.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Es}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let i=$r("canvas");i.width=e.width,i.height=e.height;let r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);let n=r.getImageData(0,0,e.width,e.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=Zi(s[o]/255)*255;return r.putImageData(n,0,0),i}else if(e.data){let i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Zi(i[r]/255)*255):i[r]=Zi(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}});function sf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?cl.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var aE,_s,of=C(()=>{Ku();si();aE=0,_s=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aE++}),this.uuid=or(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(sf(n[o].image)):s.push(sf(n[o]))}else s=sf(n);r.url=s}return i||(e.images[this.uuid]=r),r}}});var lE,Ct,br=C(()=>{bn();je();si();oi();lr();of();lE=0,Ct=class t extends di{constructor(e=t.DEFAULT_IMAGE,i=t.DEFAULT_MAPPING,r=Wi,n=Wi,s=ti,o=Xi,a=Ot,l=Kt,c=t.DEFAULT_ANISOTROPY,f=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lE++}),this.uuid=or(),this.name="",this.source=new _s(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case go:e.x=e.x-Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case yo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case go:e.y=e.y-Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case yo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=Wc;Ct.DEFAULT_ANISOTROPY=1});var ws,af=C(()=>{Hu();br();nf();ws=class extends Cn{constructor(e){super(e)}load(e,i,r,n){let s=new Ct,o=new ll(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,i!==void 0&&i(s)},r,n),s}}});function lf(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(e-t)*6*i:i<1/2?e:i<2/3?t+(e-t)*6*(2/3-i):t}var Zu,tn,fl,Ne,Qt,ki=C(()=>{si();fr();je();Zu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tn={h:0,s:0,l:0},fl={h:0,s:0,l:0};Ne=class{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.toWorkingColorSpace(this,i),this}setRGB(e,i,r,n=Ve.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ve.toWorkingColorSpace(this,n),this}setHSL(e,i,r,n=Ve.workingColorSpace){if(e=bu(e,1),i=bt(i,0,1),r=bt(r,0,1),i===0)this.r=this.g=this.b=r;else{let s=r<=.5?r*(1+i):r+i-r*i,o=2*r-s;this.r=lf(o,s,e+1/3),this.g=lf(o,s,e),this.b=lf(o,s,e-1/3)}return Ve.toWorkingColorSpace(this,n),this}setStyle(e,i=ri){function r(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,i);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,i);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,i);if(o===6)return this.setHex(parseInt(s,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ri){let r=Zu[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=Tn(e.r),this.g=Tn(e.g),this.b=Tn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return Ve.fromWorkingColorSpace(Qt.copy(this),e),Math.round(bt(Qt.r*255,0,255))*65536+Math.round(bt(Qt.g*255,0,255))*256+Math.round(bt(Qt.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ve.workingColorSpace){Ve.fromWorkingColorSpace(Qt.copy(this),i);let r=Qt.r,n=Qt.g,s=Qt.b,o=Math.max(r,n,s),a=Math.min(r,n,s),l,c,f=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case r:l=(n-s)/h+(n<s?6:0);break;case n:l=(s-r)/h+2;break;case s:l=(r-n)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,i=Ve.workingColorSpace){return Ve.fromWorkingColorSpace(Qt.copy(this),i),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=ri){Ve.fromWorkingColorSpace(Qt.copy(this),e);let i=Qt.r,r=Qt.g,n=Qt.b;return e!==ri?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(e,i,r){return this.getHSL(tn),this.setHSL(tn.h+e,tn.s+i,tn.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(tn),e.getHSL(fl);let r=$a(tn.h,fl.h,i),n=$a(tn.s,fl.s,i),s=$a(tn.l,fl.l,i);return this.setHSL(r,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let i=this.r,r=this.g,n=this.b,s=e.elements;return this.r=s[0]*i+s[3]*r+s[6]*n,this.g=s[1]*i+s[4]*r+s[7]*n,this.b=s[2]*i+s[5]*r+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qt=new Ne;Ne.NAMES=Zu});var cE,hr,$o=C(()=>{ki();bn();je();si();cE=0,hr=class extends di{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cE++}),this.uuid=or(),this.name="",this.blending=Sr,this.side=Dt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ho,this.blendDst=uo,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_n,this.stencilZFail=_n,this.stencilZPass=_n,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let i in e){let r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}let n=this[i];if(n===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[i]=r}}toJSON(e){let i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});let r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Sr&&(r.blending=this.blending),this.side!==Dt&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ho&&(r.blendSrc=this.blendSrc),this.blendDst!==uo&&(r.blendDst=this.blendDst),this.blendEquation!==vr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Wr&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xc&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_n&&(r.stencilFail=this.stencilFail),this.stencilZFail!==_n&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==_n&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(i){let s=n(e.textures),o=n(e.images);s.length>0&&(r.textures=s),o.length>0&&(r.images=o)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let i=e.clippingPlanes,r=null;if(i!==null){let n=i.length;r=new Array(n);for(let s=0;s!==n;++s)r[s]=i[s].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}});var nt,Jo=C(()=>{$o();je();ki();Zr();nt=class extends hr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _t,this.combine=Fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}});var Qi,hl=C(()=>{Rr();Qi=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}});var Ar,cf,dl,rn,ff,ul,hf,Ms,df=C(()=>{vt();Ar=new O,cf=new O,dl=new O,rn=new O,ff=new O,ul=new O,hf=new O,Ms=class{constructor(e=new O,i=new O(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ar)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);let r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let i=Ar.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ar.copy(this.origin).addScaledVector(this.direction,i),Ar.distanceToSquared(e))}distanceSqToSegment(e,i,r,n){cf.copy(e).add(i).multiplyScalar(.5),dl.copy(i).sub(e).normalize(),rn.copy(this.origin).sub(cf);let s=e.distanceTo(i)*.5,o=-this.direction.dot(dl),a=rn.dot(this.direction),l=-rn.dot(dl),c=rn.lengthSq(),f=Math.abs(1-o*o),h,u,p,d;if(f>0)if(h=o*l-a,u=o*a-l,d=s*f,h>=0)if(u>=-d)if(u<=d){let y=1/f;h*=y,u*=y,p=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=s,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u<=-d?(h=Math.max(0,-(-o*s+a)),u=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+c):u<=d?(h=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(h=Math.max(0,-(o*s+a)),u=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+c);else u=o>0?-s:s,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(cf).addScaledVector(dl,u),p}intersectSphere(e,i){Ar.subVectors(e.center,this.origin);let r=Ar.dot(this.direction),n=Ar.dot(Ar)-r*r,s=e.radius*e.radius;if(n>s)return null;let o=Math.sqrt(s-n),a=r-o,l=r+o;return l<0?null:a<0?this.at(l,i):this.at(a,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;let r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){let r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){let i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,n,s,o,a,l,c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(r=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(r=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),f>=0?(s=(e.min.y-u.y)*f,o=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,o=(e.min.y-u.y)*f),r>o||s>n||((s>r||isNaN(r))&&(r=s),(o<n||isNaN(n))&&(n=o),h>=0?(a=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),r>l||a>n)||((a>r||r!==r)&&(r=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(r>=0?r:n,i)}intersectsBox(e){return this.intersectBox(e,Ar)!==null}intersectTriangle(e,i,r,n,s){ff.subVectors(i,e),ul.subVectors(r,e),hf.crossVectors(ff,ul);let o=this.direction.dot(hf),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rn.subVectors(this.origin,e);let l=a*this.direction.dot(ul.crossVectors(rn,ul));if(l<0)return null;let c=a*this.direction.dot(ff.cross(rn));if(c<0||l+c>o)return null;let f=-a*rn.dot(hf);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}});var lt,nn=C(()=>{lt=class t{constructor(e=0,i=0,r=0,n=1){t.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,n){return this.x=e,this.y=i,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let i=this.x,r=this.y,n=this.z,s=this.w,o=e.elements;return this.x=o[0]*i+o[4]*r+o[8]*n+o[12]*s,this.y=o[1]*i+o[5]*r+o[9]*n+o[13]*s,this.z=o[2]*i+o[6]*r+o[10]*n+o[14]*s,this.w=o[3]*i+o[7]*r+o[11]*n+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,n,s,l=e.elements,c=l[0],f=l[4],h=l[8],u=l[1],p=l[5],d=l[9],y=l[2],g=l[6],m=l[10];if(Math.abs(f-u)<.01&&Math.abs(h-y)<.01&&Math.abs(d-g)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+y)<.1&&Math.abs(d+g)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let M=(c+1)/2,x=(p+1)/2,k=(m+1)/2,T=(f+u)/4,b=(h+y)/4,L=(d+g)/4;return M>x&&M>k?M<.01?(r=0,n=.707106781,s=.707106781):(r=Math.sqrt(M),n=T/r,s=b/r):x>k?x<.01?(r=.707106781,n=0,s=.707106781):(n=Math.sqrt(x),r=T/n,s=L/n):k<.01?(r=.707106781,n=.707106781,s=0):(s=Math.sqrt(k),r=b/s,n=L/s),this.set(r,n,s,i),this}let w=Math.sqrt((g-d)*(g-d)+(h-y)*(h-y)+(u-f)*(u-f));return Math.abs(w)<.001&&(w=1),this.x=(g-d)/w,this.y=(h-y)/w,this.z=(u-f)/w,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){let i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}});var $i,Cr,uf,Tr,Rs,bs,Qu,pf,mf,gf,yf,Sf,vf,sn,$u=C(()=>{vt();nn();$i=new O,Cr=new O,uf=new O,Tr=new O,Rs=new O,bs=new O,Qu=new O,pf=new O,mf=new O,gf=new O,yf=new lt,Sf=new lt,vf=new lt,sn=class t{constructor(e=new O,i=new O,r=new O){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,n){n.subVectors(r,i),$i.subVectors(e,i),n.cross($i);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,i,r,n,s){$i.subVectors(n,i),Cr.subVectors(r,i),uf.subVectors(e,i);let o=$i.dot($i),a=$i.dot(Cr),l=$i.dot(uf),c=Cr.dot(Cr),f=Cr.dot(uf),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let u=1/h,p=(c*l-a*f)*u,d=(o*f-a*l)*u;return s.set(1-p-d,d,p)}static containsPoint(e,i,r,n){return this.getBarycoord(e,i,r,n,Tr)===null?!1:Tr.x>=0&&Tr.y>=0&&Tr.x+Tr.y<=1}static getInterpolation(e,i,r,n,s,o,a,l){return this.getBarycoord(e,i,r,n,Tr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Tr.x),l.addScaledVector(o,Tr.y),l.addScaledVector(a,Tr.z),l)}static getInterpolatedAttribute(e,i,r,n,s,o){return yf.setScalar(0),Sf.setScalar(0),vf.setScalar(0),yf.fromBufferAttribute(e,i),Sf.fromBufferAttribute(e,r),vf.fromBufferAttribute(e,n),o.setScalar(0),o.addScaledVector(yf,s.x),o.addScaledVector(Sf,s.y),o.addScaledVector(vf,s.z),o}static isFrontFacing(e,i,r,n){return $i.subVectors(r,i),Cr.subVectors(e,i),$i.cross(Cr).dot(n)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,n){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,i,r,n){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $i.subVectors(this.c,this.b),Cr.subVectors(this.a,this.b),$i.cross(Cr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return t.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,n,s){return t.getInterpolation(e,this.a,this.b,this.c,i,r,n,s)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){let r=this.a,n=this.b,s=this.c,o,a;Rs.subVectors(n,r),bs.subVectors(s,r),pf.subVectors(e,r);let l=Rs.dot(pf),c=bs.dot(pf);if(l<=0&&c<=0)return i.copy(r);mf.subVectors(e,n);let f=Rs.dot(mf),h=bs.dot(mf);if(f>=0&&h<=f)return i.copy(n);let u=l*h-f*c;if(u<=0&&l>=0&&f<=0)return o=l/(l-f),i.copy(r).addScaledVector(Rs,o);gf.subVectors(e,s);let p=Rs.dot(gf),d=bs.dot(gf);if(d>=0&&p<=d)return i.copy(s);let y=p*c-l*d;if(y<=0&&c>=0&&d<=0)return a=c/(c-d),i.copy(r).addScaledVector(bs,a);let g=f*d-p*h;if(g<=0&&h-f>=0&&p-d>=0)return Qu.subVectors(s,n),a=(h-f)/(h-f+(p-d)),i.copy(n).addScaledVector(Qu,a);let m=1/(g+y+u);return o=y*m,a=u*m,i.copy(r).addScaledVector(Rs,o).addScaledVector(bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}});function fE(t,e,i,r,n,s,o,a){let l;if(e.side===rt?l=r.intersectTriangle(o,s,n,!0,a):l=r.intersectTriangle(n,s,o,e.side===Dt,a),l===null)return null;vl.copy(a),vl.applyMatrix4(t.matrixWorld);let c=i.ray.origin.distanceTo(vl);return c<i.near||c>i.far?null:{distance:c,point:vl.clone(),object:t}}function xl(t,e,i,r,n,s,o,a,l,c){t.getVertexPosition(a,ml),t.getVertexPosition(l,gl),t.getVertexPosition(c,yl);let f=fE(t,e,i,r,ml,gl,yl,t0);if(f){let h=new O;sn.getBarycoord(t0,ml,gl,yl,h),n&&(f.uv=sn.getInterpolatedAttribute(n,a,l,c,h,new Pe)),s&&(f.uv1=sn.getInterpolatedAttribute(s,a,l,c,h,new Pe)),o&&(f.normal=sn.getInterpolatedAttribute(o,a,l,c,h,new O),f.normal.dot(r.direction)>0&&f.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new O,materialIndex:0};sn.getNormal(ml,gl,yl,u.normal),f.face=u,f.barycoord=h}return f}var Ju,Dn,pl,e0,ml,gl,yl,xf,Sl,t0,vl,wt,on=C(()=>{vt();oi();rl();df();Ni();Rr();$u();je();Jo();en();Ju=new Ye,Dn=new Ms,pl=new Yr,e0=new O,ml=new O,gl=new O,yl=new O,xf=new O,Sl=new O,t0=new O,vl=new O,wt=class extends At{constructor(e=new Ht,i=new nt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){let n=i[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,i){let r=this.geometry,n=r.attributes.position,s=r.morphAttributes.position,o=r.morphTargetsRelative;i.fromBufferAttribute(n,e);let a=this.morphTargetInfluences;if(s&&a){Sl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let f=a[l],h=s[l];f!==0&&(xf.fromBufferAttribute(h,e),o?Sl.addScaledVector(xf,f):Sl.addScaledVector(xf.sub(i),f))}i.add(Sl)}return i}raycast(e,i){let r=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),pl.copy(r.boundingSphere),pl.applyMatrix4(s),Dn.copy(e.ray).recast(e.near),!(pl.containsPoint(Dn.origin)===!1&&(Dn.intersectSphere(pl,e0)===null||Dn.origin.distanceToSquared(e0)>(e.far-e.near)**2))&&(Ju.copy(s).invert(),Dn.copy(e.ray).applyMatrix4(Ju),!(r.boundingBox!==null&&Dn.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Dn)))}_computeIntersections(e,i,r){let n,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,u=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let d=0,y=u.length;d<y;d++){let g=u[d],m=o[g.materialIndex],w=Math.max(g.start,p.start),M=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let x=w,k=M;x<k;x+=3){let T=a.getX(x),b=a.getX(x+1),L=a.getX(x+2);n=xl(this,m,e,r,c,f,h,T,b,L),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=g.materialIndex,i.push(n))}}else{let d=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let g=d,m=y;g<m;g+=3){let w=a.getX(g),M=a.getX(g+1),x=a.getX(g+2);n=xl(this,o,e,r,c,f,h,w,M,x),n&&(n.faceIndex=Math.floor(g/3),i.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let d=0,y=u.length;d<y;d++){let g=u[d],m=o[g.materialIndex],w=Math.max(g.start,p.start),M=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let x=w,k=M;x<k;x+=3){let T=x,b=x+1,L=x+2;n=xl(this,m,e,r,c,f,h,T,b,L),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=g.materialIndex,i.push(n))}}else{let d=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=d,m=y;g<m;g+=3){let w=g,M=g+1,x=g+2;n=xl(this,o,e,r,c,f,h,w,M,x),n&&(n.faceIndex=Math.floor(g/3),i.push(n))}}}}});var As,Ef=C(()=>{je();Ni();Rr();As=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=hi}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}});var an,i0,r0,Lt,Cs=C(()=>{Ef();si();oi();vt();an=new O,i0=new Pe,r0=new Pe,Lt=class extends As{constructor(e=50,i=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let i=.5*this.getFilmHeight()/e;this.fov=Xo*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Qa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xo*2*Math.atan(Math.tan(Qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){an.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(an.x,an.y).multiplyScalar(-e/an.z),an.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(an.x,an.y).multiplyScalar(-e/an.z)}getViewSize(e,i){return this.getViewBounds(e,i0,r0),i.subVectors(r0,i0)}setViewOffset(e,i,r,n,s,o){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,i=e*Math.tan(Qa*.5*this.fov)/this.zoom,r=2*i,n=this.aspect*r,s=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*n/l,i-=o.offsetY*r/c,n*=o.width/l,r*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}});function s0(t,e){return t.distance-e.distance}function _f(t,e,i,r){let n=!0;if(t.layers.test(e.layers)&&t.raycast(e,i)===!1&&(n=!1),n===!0&&r===!0){let s=t.children;for(let o=0,a=s.length;o<a;o++)_f(s[o],e,i,!0)}}var n0,El,o0=C(()=>{Ni();df();sl();n0=new Ye,El=class{constructor(e,i,r=0,n=1/0){this.ray=new Ms(e,i),this.near=r,this.far=n,this.camera=null,this.layers=new Qr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return n0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(n0),this}intersectObject(e,i=!0,r=[]){return _f(e,this,r,i),r.sort(s0),r}intersectObjects(e,i=!0,r=[]){for(let n=0,s=e.length;n<s;n++)_f(e[n],this,r,i);return r.sort(s0),r}}});var _l,a0=C(()=>{si();_l=class{constructor(e=1,i=0,r=0){return this.radius=e,this.phi=i,this.theta=r,this}set(e,i,r){return this.radius=e,this.phi=i,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,r){return this.radius=Math.sqrt(e*e+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(bt(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}});var wf,hE,dE,Ji,Mf=C(()=>{lr();vt();wf=new O,hE=new O,dE=new De,Ji=class{constructor(e=new O(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,n){return this.normal.set(e,i,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){let n=wf.subVectors(r,i).cross(hE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){let r=e.delta(wf),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:i.copy(e.start).addScaledVector(r,s)}intersectsLine(e){let i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){let r=i||dE.getNormalMatrix(e),n=this.coplanarPoint(wf).applyMatrix4(e),s=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}});var Ln,wl,Ts,Rf=C(()=>{je();vt();rl();Mf();Ln=new Yr,wl=new O,Ts=class{constructor(e=new Ji,i=new Ji,r=new Ji,n=new Ji,s=new Ji,o=new Ji){this.planes=[e,i,r,n,s,o]}set(e,i,r,n,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(i),a[2].copy(r),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(e){let i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=hi){let r=this.planes,n=e.elements,s=n[0],o=n[1],a=n[2],l=n[3],c=n[4],f=n[5],h=n[6],u=n[7],p=n[8],d=n[9],y=n[10],g=n[11],m=n[12],w=n[13],M=n[14],x=n[15];if(r[0].setComponents(l-s,u-c,g-p,x-m).normalize(),r[1].setComponents(l+s,u+c,g+p,x+m).normalize(),r[2].setComponents(l+o,u+f,g+d,x+w).normalize(),r[3].setComponents(l-o,u-f,g-d,x-w).normalize(),r[4].setComponents(l-a,u-h,g-y,x-M).normalize(),i===hi)r[5].setComponents(l+a,u+h,g+y,x+M).normalize();else if(i===wn)r[5].setComponents(a,h,y,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ln.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ln.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ln)}intersectsSprite(e){return Ln.center.set(0,0,0),Ln.radius=.7071067811865476,Ln.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ln)}intersectsSphere(e){let i=this.planes,r=e.center,n=-e.radius;for(let s=0;s<6;s++)if(i[s].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){let i=this.planes;for(let r=0;r<6;r++){let n=i[r];if(wl.x=n.normal.x>0?e.max.x:e.min.x,wl.y=n.normal.y>0?e.max.y:e.min.y,wl.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(wl)<0)return!1}return!0}containsPoint(e){let i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}});function Ml(){let t=null,e=!1,i=null,r=null;function n(s,o){i(s,o),r=t.requestAnimationFrame(n)}return{start:function(){e!==!0&&i!==null&&(r=t.requestAnimationFrame(n),e=!0)},stop:function(){t.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(s){i=s},setContext:function(s){t=s}}}var bf=C(()=>{});function l0(t){let e=new WeakMap;function i(a,l){let c=a.array,f=a.usage,h=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function r(a,l,c){let f=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,f);else{h.sort((p,d)=>p.start-d.start);let u=0;for(let p=1;p<h.length;p++){let d=h[u],y=h[p];y.start<=d.start+d.count+1?d.count=Math.max(d.count,y.start+y.count-d.start):(++u,h[u]=y)}h.length=u+1;for(let p=0,d=h.length;p<d;p++){let y=h[p];t.bufferSubData(c,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,i(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,a,l),c.version=a.version}}return{get:n,remove:s,update:o}}var c0=C(()=>{});var Ds,Af=C(()=>{en();Er();Ds=class t extends Ht{constructor(e=1,i=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:n};let s=e/2,o=i/2,a=Math.floor(r),l=Math.floor(n),c=a+1,f=l+1,h=e/a,u=i/l,p=[],d=[],y=[],g=[];for(let m=0;m<f;m++){let w=m*u-o;for(let M=0;M<c;M++){let x=M*h-s;d.push(x,-w,0),y.push(0,0,1),g.push(M/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let w=0;w<a;w++){let M=w+c*m,x=w+c*(m+1),k=w+1+c*(m+1),T=w+1+c*m;p.push(M,x,T),p.push(x,k,T)}this.setIndex(p),this.setAttribute("position",new Li(d,3)),this.setAttribute("normal",new Li(y,3)),this.setAttribute("uv",new Li(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}}});function Dr(t){let e={};for(let i in t){e[i]={};for(let r in t[i]){let n=t[i][r];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=n.clone():Array.isArray(n)?e[i][r]=n.slice():e[i][r]=n}}return e}function $t(t){let e={};for(let i=0;i<t.length;i++){let r=Dr(t[i]);for(let n in r)e[n]=r[n]}return e}function f0(t){let e=[];for(let i=0;i<t.length;i++)e.push(t[i].clone());return e}function Rl(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}var h0,Nn=C(()=>{fr();h0={clone:Dr,merge:$t}});var d0,u0=C(()=>{d0=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`});var p0,m0=C(()=>{p0=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`});var ai,Ls=C(()=>{$o();Nn();u0();m0();ai=class extends hr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=d0,this.fragmentShader=p0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Dr(e.uniforms),this.uniformsGroups=f0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?i.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?i.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?i.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?i.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?i.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?i.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?i.uniforms[n]={type:"m4",value:o.toArray()}:i.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;let r={};for(let n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}});var g0,y0=C(()=>{g0=`
#ifdef USE_ALPHAHASH

	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;

#endif
`});var S0,v0=C(()=>{S0=`
#ifdef USE_ALPHAHASH

	/**
	 * See: https://casual-effects.com/research/Wyman2017Hashed/index.html
	 */

	const float ALPHA_HASH_SCALE = 0.05; // Derived from trials only, and may be changed.

	float hash2D( vec2 value ) {

		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );

	}

	float hash3D( vec3 value ) {

		return hash2D( vec2( hash2D( value.xy ), value.z ) );

	}

	float getAlphaHashThreshold( vec3 position ) {

		// Find the discretized derivatives of our coordinates
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );

		// Find two nearest log-discretized noise scales
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);

		// Compute alpha thresholds at our two noise scales
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);

		// Factor to interpolate lerp with
		float lerpFactor = fract( log2( pixScale ) );

		// Interpolate alpha threshold from noise at two scales
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;

		// Pass into CDF to compute uniformly distrib threshold
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);

		// Find our final, uniformly distributed alpha threshold (\u03B1\u03C4)
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;

		// Avoids \u03B1\u03C4 == 0. Could also do \u03B1\u03C4 =1-\u03B1\u03C4
		return clamp( threshold , 1.0e-6, 1.0 );

	}

#endif
`});var x0,E0=C(()=>{x0=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`});var _0,w0=C(()=>{_0=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`});var M0,R0=C(()=>{M0=`
#ifdef USE_ALPHATEST

	#ifdef ALPHA_TO_COVERAGE

	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;

	#else

	if ( diffuseColor.a < alphaTest ) discard;

	#endif

#endif
`});var b0,A0=C(()=>{b0=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`});var C0,T0=C(()=>{C0=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif

	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD )

		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );

	#endif

#endif
`});var D0,L0=C(()=>{D0=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`});var N0,I0=C(()=>{N0=`
#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif

	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {

		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );

	}

	float getIndirectIndex( const in int i ) {

		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );

	}

#endif

#ifdef USE_BATCHING_COLOR

	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {

		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;

	}

#endif
`});var k0,P0=C(()=>{k0=`
#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif
`});var U0,O0=C(()=>{U0=`
vec3 transformed = vec3( position );

#ifdef USE_ALPHAHASH

	vPosition = vec3( position );

#endif
`});var F0,z0=C(()=>{F0=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`});var B0,G0=C(()=>{B0=`

float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
	return 0.25;

}

float D_BlinnPhong( const in float shininess, const in float dotNH ) {

	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );

}

vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( specularColor, 1.0, dotVH );

	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );

	float D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

`});var V0,H0=C(()=>{V0=`

#ifdef USE_IRIDESCENCE

	// XYZ to linear-sRGB color space
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);

	// Assume air interface for top
	// Note: We don't handle the case fresnel0 == 1
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {

		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

	// Conversion FO/IOR
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );

	}

	// ior is a value between 1.0 and 3.0. 1.0 is air interface
	float IorToFresnel0( float transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));

	}

	// Fresnel equations for dielectric/dielectric interfaces.
	// Ref: https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html
	// Evaluation XYZ sensitivity curves in Fourier space
	vec3 evalSensitivity( float OPD, vec3 shift ) {

		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );

		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;

		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;

	}

	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {

		vec3 I;

		// Force iridescenceIOR -> outsideIOR when thinFilmThickness -> 0.0
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		// Evaluate the cosTheta on the base layer (Snell law)
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );

		// Handle TIR:
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {

			return vec3( 1.0 );

		}

		float cosTheta2 = sqrt( cosTheta2Sq );

		// First interface
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;

		// Second interface
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0
		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;

		// Phase shift
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;

		// Compound terms
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );

		// Reflectance term for m = 0 (DC term amplitude)
		vec3 C0 = R12 + Rs;
		I = C0;

		// Reflectance term for m > 0 (pairs of diracs)
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {

			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;

		}

		// Since out of gamut colors might be produced, negative color values are clamped to 0.
		return max( I, vec3( 0.0 ) );

	}

#endif

`});var W0,X0=C(()=>{W0=`
#ifdef USE_BUMPMAP

	uniform sampler2D bumpMap;
	uniform float bumpScale;

	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen
	// https://mmikk.github.io/papers3d/mm_sfgrad_bump.pdf

	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)

	vec2 dHdxy_fwd() {

		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );

		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;

		return vec2( dBx, dBy );

	}

	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {

		// normalize is done to ensure that the bump map looks the same regardless of the texture's scale
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm; // normalized

		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );

		float fDet = dot( vSigmaX, R1 ) * faceDirection;

		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );

	}

#endif
`});var q0,j0=C(()=>{q0=`
#if NUM_CLIPPING_PLANES > 0

	vec4 plane;

	#ifdef ALPHA_TO_COVERAGE

		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;

		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );

			if ( clipOpacity == 0.0 ) discard;

		}
		#pragma unroll_loop_end

		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

			float unionClipOpacity = 1.0;

			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );

			}
			#pragma unroll_loop_end

			clipOpacity *= 1.0 - unionClipOpacity;

		#endif

		diffuseColor.a *= clipOpacity;

		if ( diffuseColor.a == 0.0 ) discard;

	#else

		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;

		}
		#pragma unroll_loop_end

		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

			bool clipped = true;

			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;

			}
			#pragma unroll_loop_end

			if ( clipped ) discard;

		#endif

	#endif

#endif
`});var Y0,K0=C(()=>{Y0=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`});var Z0,Q0=C(()=>{Z0=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`});var $0,J0=C(()=>{$0=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`});var ep,tp=C(()=>{ep=`
#if defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#elif defined( USE_COLOR )

	diffuseColor.rgb *= vColor;

#endif
`});var ip,rp=C(()=>{ip=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR )

	varying vec3 vColor;

#endif
`});var np,sp=C(()=>{np=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	varying vec3 vColor;

#endif
`});var op,ap=C(()=>{op=`
#if defined( USE_COLOR_ALPHA )

	vColor = vec4( 1.0 );

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	vColor = vec3( 1.0 );

#endif

#ifdef USE_COLOR

	vColor *= color;

#endif

#ifdef USE_INSTANCING_COLOR

	vColor.xyz *= instanceColor.xyz;

#endif

#ifdef USE_BATCHING_COLOR

	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );

	vColor.xyz *= batchingColor.xyz;

#endif
`});var lp,cp=C(()=>{lp=`
#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6

#ifndef saturate
// <tonemapping_pars_fragment> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )

float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }

// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand( const in vec2 uv ) {

	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );

	return fract( sin( sn ) * c );

}

#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif

struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};

struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};

#ifdef USE_ALPHAHASH

	varying vec3 vPosition;

#endif

vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

}

vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {

	// dir can be either a direction vector or a normal vector
	// upper-left 3x3 of matrix is assumed to be orthogonal

	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );

}

mat3 transposeMat3( const in mat3 m ) {

	mat3 tmp;

	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );

	return tmp;

}

bool isPerspectiveMatrix( mat4 m ) {

	return m[ 2 ][ 3 ] == - 1.0;

}

vec2 equirectUv( in vec3 dir ) {

	// dir is assumed to be unit length

	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;

	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

	return vec2( u, v );

}

vec3 BRDF_Lambert( const in vec3 diffuseColor ) {

	return RECIPROCAL_PI * diffuseColor;

} // validated

vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated

float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated
`});var fp,hp=C(()=>{fp=`
#ifdef ENVMAP_TYPE_CUBE_UV

	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0

	// These shader functions convert between the UV coordinates of a single face of
	// a cubemap, the 0-5 integer index of a cube face, and the direction vector for
	// sampling a textureCube (not generally normalized ).

	float getFace( vec3 direction ) {

		vec3 absDirection = abs( direction );

		float face = - 1.0;

		if ( absDirection.x > absDirection.z ) {

			if ( absDirection.x > absDirection.y )

				face = direction.x > 0.0 ? 0.0 : 3.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		} else {

			if ( absDirection.z > absDirection.y )

				face = direction.z > 0.0 ? 2.0 : 5.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		}

		return face;

	}

	// RH coordinate system; PMREM face-indexing convention
	vec2 getUV( vec3 direction, float face ) {

		vec2 uv;

		if ( face == 0.0 ) {

			uv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x

		} else if ( face == 1.0 ) {

			uv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y

		} else if ( face == 2.0 ) {

			uv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z

		} else if ( face == 3.0 ) {

			uv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x

		} else if ( face == 4.0 ) {

			uv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y

		} else {

			uv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z

		}

		return 0.5 * ( uv + 1.0 );

	}

	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {

		float face = getFace( direction );

		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );

		mipInt = max( mipInt, cubeUV_minMipLevel );

		float faceSize = exp2( mipInt );

		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0; // #25071

		if ( face > 2.0 ) {

			uv.y += faceSize;

			face -= 3.0;

		}

		uv.x += face * faceSize;

		uv.x += filterInt * 3.0 * cubeUV_minTileSize;

		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );

		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;

		#ifdef texture2DGradEXT

			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb; // disable anisotropic filtering

		#else

			return texture2D( envMap, uv ).rgb;

		#endif

	}

	// These defines must match with PMREMGenerator

	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0

	float roughnessToMip( float roughness ) {

		float mip = 0.0;

		if ( roughness >= cubeUV_r1 ) {

			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;

		} else if ( roughness >= cubeUV_r4 ) {

			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;

		} else if ( roughness >= cubeUV_r5 ) {

			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;

		} else if ( roughness >= cubeUV_r6 ) {

			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;

		} else {

			mip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25
		}

		return mip;

	}

	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {

		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );

		float mipF = fract( mip );

		float mipInt = floor( mip );

		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );

		if ( mipF == 0.0 ) {

			return vec4( color0, 1.0 );

		} else {

			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );

			return vec4( mix( color0, color1, mipF ), 1.0 );

		}

	}

#endif
`});var dp,up=C(()=>{dp=`

vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT

	vec3 transformedTangent = objectTangent;

#endif

#ifdef USE_BATCHING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;

	#ifdef USE_TANGENT

		transformedTangent = bm * transformedTangent;

	#endif

#endif

#ifdef USE_INSTANCING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;

	#ifdef USE_TANGENT

		transformedTangent = im * transformedTangent;

	#endif

#endif

transformedNormal = normalMatrix * transformedNormal;

#ifdef FLIP_SIDED

	transformedNormal = - transformedNormal;

#endif

#ifdef USE_TANGENT

	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;

	#ifdef FLIP_SIDED

		transformedTangent = - transformedTangent;

	#endif

#endif
`});var pp,mp=C(()=>{pp=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`});var gp,yp=C(()=>{gp=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`});var Sp,vp=C(()=>{Sp=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		emissiveColor = sRGBTransferEOTF( emissiveColor );

	#endif

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`});var xp,Ep=C(()=>{xp=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`});var _p,wp=C(()=>{_p=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`});var Mp,Rp=C(()=>{Mp=`

vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}

vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}

vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`});var bp,Ap=C(()=>{bp=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vec3 cameraToFrag;

		if ( isOrthographic ) {

			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToFrag = normalize( vWorldPosition - cameraPosition );

		}

		// Transforming Normal Vectors with the Inverse Transformation
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vec3 reflectVec = reflect( cameraToFrag, worldNormal );

		#else

			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );

		#endif

	#else

		vec3 reflectVec = vReflect;

	#endif

	#ifdef ENVMAP_TYPE_CUBE

		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );

	#else

		vec4 envColor = vec4( 0.0 );

	#endif

	#ifdef ENVMAP_BLENDING_MULTIPLY

		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_MIX )

		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_ADD )

		outgoingLight += envColor.xyz * specularStrength * reflectivity;

	#endif

#endif
`});var Cp,Tp=C(()=>{Cp=`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`});var Dp,Lp=C(()=>{Dp=`
#ifdef USE_ENVMAP

	uniform float reflectivity;

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif

#endif
`});var Np,Ip=C(()=>{Np=`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;

	#else

		varying vec3 vReflect;
		uniform float refractionRatio;

	#endif

#endif
`});var kp,Pp=C(()=>{kp=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vWorldPosition = worldPosition.xyz;

	#else

		vec3 cameraToVertex;

		if ( isOrthographic ) {

			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );

		}

		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vReflect = reflect( cameraToVertex, worldNormal );

		#else

			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );

		#endif

	#endif

#endif
`});var Up,Op=C(()=>{Up=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`});var Fp,zp=C(()=>{Fp=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`});var Bp,Gp=C(()=>{Bp=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`});var Vp,Hp=C(()=>{Vp=`
#ifdef USE_FOG

	uniform vec3 fogColor;
	varying float vFogDepth;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#else

		uniform float fogNear;
		uniform float fogFar;

	#endif

#endif
`});var Wp,Xp=C(()=>{Wp=`

#ifdef USE_GRADIENTMAP

	uniform sampler2D gradientMap;

#endif

vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {

	// dotNL will be from -1.0 to 1.0
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );

	#ifdef USE_GRADIENTMAP

		return vec3( texture2D( gradientMap, coord ).r );

	#else

		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );

	#endif

}
`});var qp,jp=C(()=>{qp=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`});var Yp,Kp=C(()=>{Yp=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`});var Zp,Qp=C(()=>{Zp=`
varying vec3 vViewPosition;

struct LambertMaterial {

	vec3 diffuseColor;
	float specularStrength;

};

void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
`});var $p,Jp=C(()=>{$p=`
uniform bool receiveShadow;
uniform vec3 ambientLightColor;

#if defined( USE_LIGHT_PROBES )

	uniform vec3 lightProbe[ 9 ];

#endif

// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere
// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {

	// normal is assumed to have unit length

	float x = normal.x, y = normal.y, z = normal.z;

	// band 0
	vec3 result = shCoefficients[ 0 ] * 0.886227;

	// band 1
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;

	// band 2
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );

	return result;

}

vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {

	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );

	return irradiance;

}

vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {

	vec3 irradiance = ambientLightColor;

	return irradiance;

}

float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

	// based upon Frostbite 3 Moving to Physically-based Rendering
	// page 32, equation 26: E[window1]
	// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

	if ( cutoffDistance > 0.0 ) {

		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

	}

	return distanceFalloff;

}

float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

	return smoothstep( coneCosine, penumbraCosine, angleCosine );

}

#if NUM_DIR_LIGHTS > 0

	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};

	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];

	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {

		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;

	}

#endif


#if NUM_POINT_LIGHTS > 0

	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};

	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {

		vec3 lVector = pointLight.position - geometryPosition;

		light.direction = normalize( lVector );

		float lightDistance = length( lVector );

		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );

	}

#endif


#if NUM_SPOT_LIGHTS > 0

	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};

	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {

		vec3 lVector = spotLight.position - geometryPosition;

		light.direction = normalize( lVector );

		float angleCos = dot( light.direction, spotLight.direction );

		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );

		if ( spotAttenuation > 0.0 ) {

			float lightDistance = length( lVector );

			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );

		} else {

			light.color = vec3( 0.0 );
			light.visible = false;

		}

	}

#endif


#if NUM_RECT_AREA_LIGHTS > 0

	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];

#endif


#if NUM_HEMI_LIGHTS > 0

	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};

	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];

	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {

		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;

		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );

		return irradiance;

	}

#endif
`});var em,tm=C(()=>{em=`
#ifdef USE_ENVMAP

	vec3 getIBLIrradiance( const in vec3 normal ) {

		#ifdef ENVMAP_TYPE_CUBE_UV

			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );

			return PI * envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {

		#ifdef ENVMAP_TYPE_CUBE_UV

			vec3 reflectVec = reflect( - viewDir, normal );

			// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );

			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );

			return envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	#ifdef USE_ANISOTROPY

		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {

			#ifdef ENVMAP_TYPE_CUBE_UV

			  // https://google.github.io/filament/Filament.md.html#lighting/imagebasedlights/anisotropy
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );

				return getIBLRadiance( viewDir, bentNormal, roughness );

			#else

				return vec3( 0.0 );

			#endif

		}

	#endif

#endif
`});var im,rm=C(()=>{im=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`});var nm,sm=C(()=>{nm=`
varying vec3 vViewPosition;

struct ToonMaterial {

	vec3 diffuseColor;

};

void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
`});var om,am=C(()=>{om=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`});var lm,cm=C(()=>{lm=`
varying vec3 vViewPosition;

struct BlinnPhongMaterial {

	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;

};

void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;

}

void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
`});var fm,hm=C(()=>{fm=`
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );

vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );

material.roughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );

#ifdef IOR

	material.ior = ior;

	#ifdef USE_SPECULAR

		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;

		#ifdef USE_SPECULAR_COLORMAP

			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;

		#endif

		#ifdef USE_SPECULAR_INTENSITYMAP

			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;

		#endif

		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );

	#else

		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;

	#endif

	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );

#else

	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;

#endif

#ifdef USE_CLEARCOAT

	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;

	#ifdef USE_CLEARCOATMAP

		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;

	#endif

	#ifdef USE_CLEARCOAT_ROUGHNESSMAP

		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;

	#endif

	material.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model
	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );

#endif

#ifdef USE_DISPERSION

	material.dispersion = dispersion;

#endif

#ifdef USE_IRIDESCENCE

	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;

	#ifdef USE_IRIDESCENCEMAP

		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;

	#endif

	#ifdef USE_IRIDESCENCE_THICKNESSMAP

		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;

	#else

		material.iridescenceThickness = iridescenceThicknessMaximum;

	#endif

#endif

#ifdef USE_SHEEN

	material.sheenColor = sheenColor;

	#ifdef USE_SHEEN_COLORMAP

		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;

	#endif

	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );

	#ifdef USE_SHEEN_ROUGHNESSMAP

		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;

	#endif

#endif

#ifdef USE_ANISOTROPY

	#ifdef USE_ANISOTROPYMAP

		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;

	#else

		vec2 anisotropyV = anisotropyVector;

	#endif

	material.anisotropy = length( anisotropyV );

	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}

	// Roughness along the anisotropy bitangent is the material roughness, while the tangent roughness increases with anisotropy.
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );

	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;

#endif
`});var dm,um=C(()=>{dm=`

struct PhysicalMaterial {

	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;

	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif

	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif

	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif

	#ifdef IOR
		float ior;
	#endif

	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif

	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif

};

// temporary
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );

vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );

    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {

	float a2 = pow2( alpha );

	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney\u2019s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

// https://google.github.io/filament/Filament.md.html#materialsystem/anisotropicmodel/anisotropicspecularbrdf
#ifdef USE_ANISOTROPY

	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {

		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );

		return saturate(v);

	}

	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {

		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;

		return RECIPROCAL_PI * a2 * pow2 ( w2 );

	}

#endif

#ifdef USE_CLEARCOAT

	// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {

		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;

		float alpha = pow2( roughness ); // UE4's roughness

		vec3 halfDir = normalize( lightDir + viewDir );

		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );

		vec3 F = F_Schlick( f0, f90, dotVH );

		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

		float D = D_GGX( alpha, dotNH );

		return F * ( V * D );

	}

#endif

vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {

	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;

	float alpha = pow2( roughness ); // UE4's roughness

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( f0, f90, dotVH );

	#ifdef USE_IRIDESCENCE

		F = mix( F, material.iridescenceFresnel, material.iridescence );

	#endif

	#ifdef USE_ANISOTROPY

		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );

		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );

		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );

	#else

		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

		float D = D_GGX( alpha, dotNH );

	#endif

	return F * ( V * D );

}

// Rect Area Light

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	float dotNV = saturate( dot( N, V ) );

	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );

	uv = uv * LUT_SCALE + LUT_BIAS;

	return uv;

}

float LTC_ClippedSphereFormFactor( const in vec3 f ) {

	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.

	float l = length( f );

	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );

}

vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {

	float x = dot( v1, v2 );

	float y = abs( x );

	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;

	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;

	return cross( v1, v2 ) * theta_sintheta;

}

vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {

	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );

	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );

	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system

	// compute transform
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );

	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );

	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );

	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );

	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

/*
	// alternate method of adjusting for horizon clipping (see referece)
	// refactoring required
	float len = length( vectorFormFactor );
	float z = vectorFormFactor.z / len;

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	// tabulated horizon-clipped sphere, apparently...
	vec2 uv = vec2( z * 0.5 + 0.5, len );
	uv = uv * LUT_SCALE + LUT_BIAS;

	float scale = texture2D( ltc_2, uv ).w;

	float result = len * scale;
*/

	return vec3( result );

}

// End Rect Area Light

#if defined( USE_SHEEN )

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float D_Charlie( float roughness, float dotNH ) {

	float alpha = pow2( roughness );

	// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 ); // 2^(-14/2), so sin2h^2 > 0 in fp16

	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );

}

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float V_Neubelt( float dotNV, float dotNL ) {

	// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );

}

vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );

	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );

	return sheenColor * ( D * V );

}

#endif

// This is a curve-fit approxmation to the "Charlie sheen" BRDF integrated over the hemisphere from 
// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF". The analysis can be found
// in the Sheen section of https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	float r2 = roughness * roughness;

	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;

	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;

	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );

	return saturate( DG * RECIPROCAL_PI );

}

// Analytical approximation of the DFG LUT, one half of the
// split-sum approximation used in indirect specular lighting.
// via 'environmentBRDF' from "Physically Based Shading on Mobile"
// https://www.unrealengine.com/blog/physically-based-shading-on-mobile
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );

	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );

	vec4 r = roughness * c0 + c1;

	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;

	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;

	return fab;

}

vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	return specularColor * fab.x + specularF90 * fab.y;

}

// Fdez-Ag\xFCera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	#ifdef USE_IRIDESCENCE

		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );

	#else

		vec3 Fr = specularColor;

	#endif

	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;

	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;

	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619; // 1/21
	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );

	singleScatter += FssEss;
	multiScatter += Fms * Ems;

}

#if NUM_RECT_AREA_LIGHTS > 0

	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;

		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction
		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;

		vec2 uv = LTC_Uv( normal, viewDir, roughness );

		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );

		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);

		// LTC Fresnel Approximation by Stephen Hill
		// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );

		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );

		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );

	}

#endif

void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );

	vec3 irradiance = dotNL * directLight.color;

	#ifdef USE_CLEARCOAT

		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );

		vec3 ccIrradiance = dotNLcc * directLight.color;

		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );

	#endif

	#ifdef USE_SHEEN

		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );

	#endif

	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}

void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {

	#ifdef USE_CLEARCOAT

		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	#ifdef USE_SHEEN

		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );

	#endif

	// Both indirect specular and indirect diffuse light accumulate here

	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;

	#ifdef USE_IRIDESCENCE

		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );

	#else

		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );

	#endif

	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );

	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;

	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;

}

#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical

// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {

	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );

}
`});var pm,mm=C(()=>{pm=`
/**
 * This is a template that can be used to light a material, it uses pluggable
 * RenderEquations (RE)for specific lighting scenarios.
 *
 * Instructions for use:
 * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined
 * - Create a material parameter that is to be passed as the third parameter to your lighting functions.
 *
 * TODO:
 * - Add area light support.
 * - Add sphere light support.
 * - Add diffuse light probe (irradiance cubemap) support.
 */

vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

vec3 geometryClearcoatNormal = vec3( 0.0 );

#ifdef USE_CLEARCOAT

	geometryClearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE

	float dotNVi = saturate( dot( normal, geometryViewDir ) );

	if ( material.iridescenceThickness == 0.0 ) {

		material.iridescence = 0.0;

	} else {

		material.iridescence = saturate( material.iridescence );

	}

	if ( material.iridescence > 0.0 ) {

		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );

		// Iridescence F0 approximation
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );

	}

#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometryPosition, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;

	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotLightInfo( spotLight, geometryPosition, directLight );

		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif

		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif

		#undef SPOT_LIGHT_MAP_INDEX

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	#if defined( USE_LIGHT_PROBES )

		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );

	#endif

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`});var gm,ym=C(()=>{gm=`
#if defined( RE_IndirectDiffuse )

	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

		irradiance += lightMapIrradiance;

	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )

		iblIrradiance += getIBLIrradiance( geometryNormal );

	#endif

#endif

#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )

	#ifdef USE_ANISOTROPY

		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );

	#else

		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );

	#endif

	#ifdef USE_CLEARCOAT

		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );

	#endif

#endif
`});var Sm,vm=C(()=>{Sm=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif
`});var xm,Em=C(()=>{xm=`
#if defined( USE_LOGDEPTHBUF )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`});var _m,wm=C(()=>{_m=`
#if defined( USE_LOGDEPTHBUF )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`});var Mm,Rm=C(()=>{Mm=`
#ifdef USE_LOGDEPTHBUF

	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`});var bm,Am=C(()=>{bm=`
#ifdef USE_LOGDEPTHBUF

	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

#endif
`});var Cm,Tm=C(()=>{Cm=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vMapUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );

	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`});var Dm,Lm=C(()=>{Dm=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`});var Nm,Im=C(()=>{Nm=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	#if defined( USE_POINTS_UV )

		vec2 uv = vUv;

	#else

		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;

	#endif

#endif

#ifdef USE_MAP

	diffuseColor *= texture2D( map, uv );

#endif

#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, uv ).g;

#endif
`});var km,Pm=C(()=>{km=`
#if defined( USE_POINTS_UV )

	varying vec2 vUv;

#else

	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

		uniform mat3 uvTransform;

	#endif

#endif

#ifdef USE_MAP

	uniform sampler2D map;

#endif

#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`});var Um,Om=C(()=>{Um=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`});var Fm,zm=C(()=>{Fm=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`});var Bm,Gm=C(()=>{Bm=`
#ifdef USE_INSTANCING_MORPH

	float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;

	}
#endif
`});var Vm,Hm=C(()=>{Vm=`
#if defined( USE_MORPHCOLORS )

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	vColor *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		#if defined( USE_COLOR_ALPHA )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];

		#elif defined( USE_COLOR )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];

		#endif

	}

#endif
`});var Wm,Xm=C(()=>{Wm=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`});var qm,jm=C(()=>{qm=`
#ifdef USE_MORPHTARGETS

	#ifndef USE_INSTANCING_MORPH

		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	#endif

	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;

	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {

		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;

		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );

	}

#endif
`});var Ym,Km=C(()=>{Ym=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`});var Zm,Qm=C(()=>{Zm=`
float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;

#ifdef FLAT_SHADED

	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );

#else

	vec3 normal = normalize( vNormal );

	#ifdef DOUBLE_SIDED

		normal *= faceDirection;

	#endif

#endif

#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )

	#ifdef USE_TANGENT

		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

	#else

		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);

	#endif

	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;

	#endif

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	#ifdef USE_TANGENT

		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

	#else

		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );

	#endif

	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;

	#endif

#endif

// non perturbed normal for clearcoat among others

vec3 nonPerturbedNormal = normal;

`});var $m,Jm=C(()=>{$m=`

#ifdef USE_NORMALMAP_OBJECTSPACE

	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

	#ifdef FLIP_SIDED

		normal = - normal;

	#endif

	#ifdef DOUBLE_SIDED

		normal = normal * faceDirection;

	#endif

	normal = normalize( normalMatrix * normal );

#elif defined( USE_NORMALMAP_TANGENTSPACE )

	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;

	normal = normalize( tbn * mapN );

#elif defined( USE_BUMPMAP )

	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );

#endif
`});var e1,t1=C(()=>{e1=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`});var i1,r1=C(()=>{i1=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`});var n1,s1=C(()=>{n1=`
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif
`});var o1,a1=C(()=>{o1=`
#ifdef USE_NORMALMAP

	uniform sampler2D normalMap;
	uniform vec2 normalScale;

#endif

#ifdef USE_NORMALMAP_OBJECTSPACE

	uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )

	// Normal Mapping Without Precomputed Tangents
	// http://www.thetenthplanet.de/archives/1180

	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );

		vec3 N = surf_norm; // normalized

		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );

		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;

		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

		return mat3( T * scale, B * scale, N );

	}

#endif
`});var l1,c1=C(()=>{l1=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = nonPerturbedNormal;

#endif
`});var f1,h1=C(()=>{f1=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`});var d1,u1=C(()=>{d1=`

#ifdef USE_CLEARCOATMAP

	uniform sampler2D clearcoatMap;

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;

#endif

#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform sampler2D clearcoatRoughnessMap;

#endif
`});var p1,m1=C(()=>{p1=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`});var g1,y1=C(()=>{g1=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`});var S1,v1=C(()=>{S1=`
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}

vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}

const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)
const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;

const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );

const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );

vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}

vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	// the 0.9999 tweak is unimportant, very tiny empirical improvement
	// return vec3( vuf * Inv255, gf * PackUpscale, bf * 0.9999 );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}

vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}

float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}

float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}

float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}

vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}

vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}

// NOTE: viewZ, the z-coordinate in camera space, is negative for points in front of the camera

float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( viewZ + near ) / ( near - far );
}

float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	// maps orthographic depth in [ 0, 1 ] to viewZ
	return depth * ( near - far ) - near;
}

// NOTE: https://twitter.com/gonnavis/status/1377183786949959682

float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}

float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	// maps perspective depth in [ 0, 1 ] to viewZ
	return ( near * far ) / ( ( far - near ) * depth - far );
}
`});var x1,E1=C(()=>{x1=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`});var _1,w1=C(()=>{_1=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_BATCHING

	mvPosition = batchingMatrix * mvPosition;

#endif

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`});var M1,R1=C(()=>{M1=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`});var b1,A1=C(()=>{b1=`
#ifdef DITHERING

	// based on https://www.shadertoy.com/view/MslGR8
	vec3 dithering( vec3 color ) {
		//Calculate grid position
		float grid_position = rand( gl_FragCoord.xy );

		//Shift the individual colors differently, thus making it even harder to see the dithering pattern
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );

		//modify shift according to grid position.
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );

		//shift the color by dither_shift
		return color + dither_shift_RGB;
	}

#endif
`});var C1,T1=C(()=>{C1=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`});var D1,L1=C(()=>{D1=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`});var N1,I1=C(()=>{N1=`
#if NUM_SPOT_LIGHT_COORDS > 0

	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#if NUM_SPOT_LIGHT_MAPS > 0

	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];

#endif

#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];

		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): create uniforms for area light shadows

	#endif
	*/

	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {

		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );

	}

	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {

		return unpackRGBATo2Half( texture2D( shadow, uv ) );

	}

	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){

		float occlusion = 1.0;

		vec2 distribution = texture2DDistribution( shadow, uv );

		float hard_shadow = step( compare , distribution.x ); // Hard Shadow

		if (hard_shadow != 1.0 ) {

			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality
			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed
			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );

		}
		return occlusion;

	}

	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

		float shadow = 1.0;

		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;

		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;

		if ( frustumTest ) {

		#if defined( SHADOWMAP_TYPE_PCF )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;

			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;

			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );

		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;

			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;

			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );

		#elif defined( SHADOWMAP_TYPE_VSM )

			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );

		#else // no percentage-closer filtering:

			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );

		#endif

		}

		return mix( 1.0, shadow, shadowIntensity );

	}

	// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D
	// vector suitable for 2D texture mapping. This code uses the following layout for the
	// 2D texture:
	//
	// xzXZ
	//  y Y
	//
	// Y - Positive y direction
	// y - Negative y direction
	// X - Positive x direction
	// x - Negative x direction
	// Z - Positive z direction
	// z - Negative z direction
	//
	// Source and test bed:
	// https://gist.github.com/tschw/da10c43c467ce8afd0c4

	vec2 cubeToUV( vec3 v, float texelSizeY ) {

		// Number of texels to avoid at the edge of each square

		vec3 absV = abs( v );

		// Intersect unit cube

		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;

		// Apply scale to avoid seams

		// two texels less per square (one texel will do for NEAREST)
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );

		// Unwrap

		// space: -1 ... 1 range for each square
		//
		// #X##		dim    := ( 4 , 2 )
		//  # #		center := ( 1 , 1 )

		vec2 planar = v.xy;

		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;

		if ( absV.z >= almostOne ) {

			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;

		} else if ( absV.x >= almostOne ) {

			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;

		} else if ( absV.y >= almostOne ) {

			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;

		}

		// Transform to UV space

		// scale := 0.5 / dim
		// translate := ( center + 0.5 ) / dim
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );

	}

	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		float shadow = 1.0;

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );

		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {

			// dp = normalized distance from light to fragment position
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?
			dp += shadowBias;

			// bd3D = base direction 3D
			vec3 bd3D = normalize( lightToPosition );

			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );

			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )

				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;

				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );

			#else // no percentage-closer filtering

				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );

			#endif

		}

		return mix( 1.0, shadow, shadowIntensity );

	}

#endif
`});var k1,P1=C(()=>{k1=`

#if NUM_SPOT_LIGHT_COORDS > 0

	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): uniforms for area light shadows

	#endif
	*/

#endif
`});var U1,O1=C(()=>{U1=`

#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )

	// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;

#endif

#if defined( USE_SHADOWMAP )

	#if NUM_DIR_LIGHT_SHADOWS > 0

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;

		}
		#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;

		}
		#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update vAreaShadowCoord with area light info

	#endif
	*/

#endif

// spot lights can be evaluated without active shadow mapping (when SpotLight.map is used)

#if NUM_SPOT_LIGHT_COORDS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {

		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

#endif


`});var F1,z1=C(()=>{F1=`
float getShadowMask() {

	float shadow = 1.0;

	#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

	DirectionalLightShadow directionalLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	SpotLightShadow spotLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	PointLightShadow pointLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update shadow for Area light

	#endif
	*/

	#endif

	return shadow;

}
`});var B1,G1=C(()=>{B1=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`});var V1,H1=C(()=>{V1=`
#ifdef USE_SKINNING

	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;

	uniform highp sampler2D boneTexture;

	mat4 getBoneMatrix( const in float i ) {

		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );

		return mat4( v1, v2, v3, v4 );

	}

#endif
`});var W1,X1=C(()=>{W1=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`});var q1,j1=C(()=>{q1=`
#ifdef USE_SKINNING

	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;

	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;

	#ifdef USE_TANGENT

		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#endif

#endif
`});var Y1,K1=C(()=>{Y1=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`});var Z1,Q1=C(()=>{Z1=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`});var $1,J1=C(()=>{$1=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`});var eg,tg=C(()=>{eg=`
#ifndef saturate
// <common> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return saturate( toneMappingExposure * color );

}

// source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf
vec3 ReinhardToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );

}

// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/
vec3 CineonToneMapping( vec3 color ) {

	// filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );

}

// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
vec3 RRTAndODTFit( vec3 v ) {

	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;

}

// this implementation of ACES is modified to accommodate a brighter viewing environment.
// the scale factor of 1/0.6 is subjective. see discussion in #19621.

vec3 ACESFilmicToneMapping( vec3 color ) {

	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	// ODT_SAT => XYZ => D60_2_D65 => sRGB
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

	color *= toneMappingExposure / 0.6;

	color = ACESInputMat * color;

	// Apply RRT and ODT
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	// Clamp to [0, 1]
	return saturate( color );

}

// Matrices for rec 2020 <> rec 709 color space conversion
// matrix provided in row-major order so it has been transposed
// https://www.itu.int/pub/R-REP-BT.2407-2017
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);

const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);

// https://iolite-engine.com/blog_posts/minimal_agx_implementation
// Mean error^2: 3.6705141e-06
vec3 agxDefaultContrastApprox( vec3 x ) {

	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;

	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;

}

// AgX Tone Mapping implementation based on Filament, which in turn is based
// on Blender's implementation using rec 2020 primaries
// https://github.com/google/filament/pull/7236
// Inputs and outputs are encoded as Linear-sRGB.

vec3 AgXToneMapping( vec3 color ) {

	// AgX constants
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);

	// explicit AgXOutsetMatrix generated from Filaments AgXOutsetMatrixInv
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);

	// LOG2_MIN      = -10.0
	// LOG2_MAX      =  +6.5
	// MIDDLE_GRAY   =  0.18
	const float AgxMinEv = - 12.47393;  // log2( pow( 2, LOG2_MIN ) * MIDDLE_GRAY )
	const float AgxMaxEv = 4.026069;    // log2( pow( 2, LOG2_MAX ) * MIDDLE_GRAY )

	color *= toneMappingExposure;

	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;

	color = AgXInsetMatrix * color;

	// Log2 encoding
	color = max( color, 1e-10 ); // avoid 0 or negative numbers for log2
	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );

	color = clamp( color, 0.0, 1.0 );

	// Apply sigmoid
	color = agxDefaultContrastApprox( color );

	// Apply AgX look
	// v = agxLook(v, look);

	color = AgXOutsetMatrix * color;

	// Linearize
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );

	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;

	// Gamut mapping. Simple clamp for now.
	color = clamp( color, 0.0, 1.0 );

	return color;

}

// https://modelviewer.dev/examples/tone-mapping

vec3 NeutralToneMapping( vec3 color ) {

	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;

	color *= toneMappingExposure;

	float x = min( color.r, min( color.g, color.b ) );

	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;

	color -= offset;

	float peak = max( color.r, max( color.g, color.b ) );

	if ( peak < StartCompression ) return color;

	float d = 1. - StartCompression;

	float newPeak = 1. - d * d / ( peak + d - StartCompression );

	color *= newPeak / peak;

	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );

	return mix( color, vec3( newPeak ), g );

}

vec3 CustomToneMapping( vec3 color ) { return color; }
`});var ig,rg=C(()=>{ig=`
#ifdef USE_TRANSMISSION

	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;

	#endif

	#ifdef USE_THICKNESSMAP

		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;

	#endif

	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );

	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );

	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );

	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );

#endif
`});var ng,sg=C(()=>{ng=`
#ifdef USE_TRANSMISSION

	// Transmission code is based on glTF-Sampler-Viewer
	// https://github.com/KhronosGroup/glTF-Sample-Viewer

	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		uniform sampler2D transmissionMap;

	#endif

	#ifdef USE_THICKNESSMAP

		uniform sampler2D thicknessMap;

	#endif

	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;

	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;

	varying vec3 vWorldPosition;

	// Mipped Bicubic Texture Filtering by N8
	// https://www.shadertoy.com/view/Dl2SDW

	float w0( float a ) {

		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );

	}

	float w1( float a ) {

		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );

	}

	float w2( float a ){

		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );

	}

	float w3( float a ) {

		return ( 1.0 / 6.0 ) * ( a * a * a );

	}

	// g0 and g1 are the two amplitude functions
	float g0( float a ) {

		return w0( a ) + w1( a );

	}

	float g1( float a ) {

		return w2( a ) + w3( a );

	}

	// h0 and h1 are the two offset functions
	float h0( float a ) {

		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );

	}

	float h1( float a ) {

		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );

	}

	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {

		uv = uv * texelSize.zw + 0.5;

		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );

		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );

		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;

		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );

	}

	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {

		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );

	}

	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {

		// Direction of refracted light.
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );

		// Compute rotation-independant scaling of the model matrix.
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );

		// The thickness is specified in local space.
		return normalize( refractionVector ) * thickness * modelScale;

	}

	float applyIorToRoughness( const in float roughness, const in float ior ) {

		// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
		// an IOR of 1.5 results in the default amount of microfacet refraction.
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );

	}

	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {

		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );

	}

	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {

		if ( isinf( attenuationDistance ) ) {

			// Attenuation distance is +\u221E, i.e. the transmitted color is not attenuated at all.
			return vec3( 1.0 );

		} else {

			// Compute light attenuation using Beer's law.
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
			return transmittance;

		}

	}

	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {

		vec4 transmittedLight;
		vec3 transmittance;

		#ifdef USE_DISPERSION

			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );

			for ( int i = 0; i < 3; i ++ ) {

				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				// Sample framebuffer to get pixel the refracted ray hits.
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;

				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];

			}

			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;

			// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;

			// Sample framebuffer to get pixel the refracted ray hits.
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif

		vec3 attenuatedColor = transmittance * transmittedLight.rgb;

		// Get the specular component.
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );

		// As less light is transmitted, the opacity should be increased. This simple approximation does a decent job 
		// of modulating a CSS background, and has no effect when the buffer is opaque, due to a solid object or clear color.
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;

		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );

	}
#endif
`});var og,ag=C(()=>{og=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;

#endif
#ifdef USE_MAP

	varying vec2 vMapUv;

#endif
#ifdef USE_ALPHAMAP

	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	varying vec2 vLightMapUv;

#endif
#ifdef USE_AOMAP

	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	varying vec2 vBumpMapUv;

#endif
#ifdef USE_NORMALMAP

	varying vec2 vNormalMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	varying vec2 vEmissiveMapUv;

#endif
#ifdef USE_METALNESSMAP

	varying vec2 vMetalnessMapUv;

#endif
#ifdef USE_ROUGHNESSMAP

	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_ANISOTROPYMAP

	varying vec2 vAnisotropyMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	varying vec2 vClearcoatMapUv;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_SPECULARMAP

	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`});var lg,cg=C(()=>{lg=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;

#endif
#ifdef USE_MAP

	uniform mat3 mapTransform;
	varying vec2 vMapUv;

#endif
#ifdef USE_ALPHAMAP

	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;

#endif
#ifdef USE_AOMAP

	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;

#endif
#ifdef USE_NORMALMAP

	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;

#endif
#ifdef USE_DISPLACEMENTMAP

	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;

#endif
#ifdef USE_METALNESSMAP

	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;

#endif
#ifdef USE_ROUGHNESSMAP

	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_ANISOTROPYMAP

	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SPECULARMAP

	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`});var fg,hg=C(()=>{fg=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	vUv = vec3( uv, 1 ).xy;

#endif
#ifdef USE_MAP

	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ALPHAMAP

	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_LIGHTMAP

	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_AOMAP

	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_BUMPMAP

	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_NORMALMAP

	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_DISPLACEMENTMAP

	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_EMISSIVEMAP

	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_METALNESSMAP

	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ROUGHNESSMAP

	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ANISOTROPYMAP

	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOATMAP

	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_IRIDESCENCEMAP

	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SHEEN_COLORMAP

	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULARMAP

	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULAR_COLORMAP

	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_TRANSMISSIONMAP

	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_THICKNESSMAP

	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;

#endif
`});var dg,ug=C(()=>{dg=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_BATCHING

		worldPosition = batchingMatrix * worldPosition;

	#endif

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`});var pg,mg,gg=C(()=>{pg=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,mg=`
uniform sampler2D t2D;
uniform float backgroundIntensity;

varying vec2 vUv;

void main() {

	vec4 texColor = texture2D( t2D, vUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_APLHA8 with video textures

		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`});var yg,Sg,vg=C(()=>{yg=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,Sg=`

#ifdef ENVMAP_TYPE_CUBE

	uniform samplerCube envMap;

#elif defined( ENVMAP_TYPE_CUBE_UV )

	uniform sampler2D envMap;

#endif

uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;

varying vec3 vWorldDirection;

#include <cube_uv_reflection_fragment>

void main() {

	#ifdef ENVMAP_TYPE_CUBE

		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );

	#elif defined( ENVMAP_TYPE_CUBE_UV )

		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );

	#else

		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`});var xg,Eg,_g=C(()=>{xg=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,Eg=`
uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;

varying vec3 vWorldDirection;

void main() {

	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );

	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`});var wg,Mg,Rg=C(()=>{wg=`
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.
// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for
// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.
varying vec2 vHighPrecisionZW;

void main() {

	#include <uv_vertex>

	#include <batching_vertex>
	#include <skinbase_vertex>

	#include <morphinstance_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vHighPrecisionZW = gl_Position.zw;

}
`,Mg=`
#if DEPTH_PACKING == 3200

	uniform float opacity;

#endif

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

varying vec2 vHighPrecisionZW;

void main() {

	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>

	#if DEPTH_PACKING == 3200

		diffuseColor.a = opacity;

	#endif

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	#include <logdepthbuf_fragment>

	// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#elif DEPTH_PACKING == 3202

		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );

	#elif DEPTH_PACKING == 3203

		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );

	#endif

}
`});var bg,Ag,Cg=C(()=>{bg=`
#define DISTANCE

varying vec3 vWorldPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <batching_vertex>
	#include <skinbase_vertex>

	#include <morphinstance_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>

	vWorldPosition = worldPosition.xyz;

}
`,Ag=`
#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>

void main () {

	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
`});var Tg,Dg,Lg=C(()=>{Tg=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,Dg=`
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV = equirectUv( direction );

	gl_FragColor = texture2D( tEquirect, sampleUV );

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`});var Ng,Ig,kg=C(()=>{Ng=`
uniform float scale;
attribute float lineDistance;

varying float vLineDistance;

#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	vLineDistance = scale * lineDistance;

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,Ig=`
uniform vec3 diffuse;
uniform float opacity;

uniform float dashSize;
uniform float totalSize;

varying float vLineDistance;

#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	if ( mod( vLineDistance, totalSize ) > dashSize ) {

		discard;

	}

	vec3 outgoingLight = vec3( 0.0 );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>

	outgoingLight = diffuseColor.rgb; // simple shader

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`});var Pg,Ug,Og=C(()=>{Pg=`
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>

}
`,Ug=`
uniform vec3 diffuse;
uniform float opacity;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );

	// accumulation (baked indirect lighting only)
	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
	#include <aomap_fragment>

	reflectedLight.indirectDiffuse *= diffuseColor.rgb;

	vec3 outgoingLight = reflectedLight.indirectDiffuse;

	#include <envmap_fragment>

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`});var Fg,zg,Bg=C(()=>{Fg=`
#define LAMBERT

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,zg=`
#define LAMBERT

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`});var Gg,Vg,Hg=C(()=>{Gg=`
#define MATCAP

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>

#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

	vViewPosition = - mvPosition.xyz;

}
`,Vg=`
#define MATCAP

uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;

varying vec3 vViewPosition;

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks

	#ifdef USE_MATCAP

		vec4 matcapColor = texture2D( matcap, uv );

	#else

		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 ); // default if matcap is missing

	#endif

	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`});var Wg,Xg,qg=C(()=>{Wg=`
#define NORMAL

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	varying vec3 vViewPosition;

#endif

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	vViewPosition = - mvPosition.xyz;

#endif

}
`,Xg=`
#define NORMAL

uniform float opacity;

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	varying vec3 vViewPosition;

#endif

#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );

	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );

	#ifdef OPAQUE

		gl_FragColor.a = 1.0;

	#endif

}
`});var jg,Yg,Kg=C(()=>{jg=`
#define PHONG

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,Yg=`
#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`});var Zg,Qg,$g=C(()=>{Zg=`
#define STANDARD

varying vec3 vViewPosition;

#ifdef USE_TRANSMISSION

	varying vec3 vWorldPosition;

#endif

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

#ifdef USE_TRANSMISSION

	vWorldPosition = worldPosition.xyz;

#endif
}
`,Qg=`
#define STANDARD

#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef IOR
	uniform float ior;
#endif

#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;

	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif

	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif

#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif

#ifdef USE_DISPERSION
	uniform float dispersion;
#endif

#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif

#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;

	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif

	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif

#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;

	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif

varying vec3 vViewPosition;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

	#include <transmission_fragment>

	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

	#ifdef USE_SHEEN

		// Sheen energy compensation approximation calculation can be found at the end of
		// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );

		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;

	#endif

	#ifdef USE_CLEARCOAT

		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );

		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );

		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;

	#endif

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`});var Jg,e2,t2=C(()=>{Jg=`
#define TOON

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,e2=`
#define TOON

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`});var i2,r2,n2=C(()=>{i2=`
uniform float size;
uniform float scale;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_POINTS_UV

	varying vec2 vUv;
	uniform mat3 uvTransform;

#endif

void main() {

	#ifdef USE_POINTS_UV

		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	#endif

	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>

	gl_PointSize = size;

	#ifdef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );

	#endif

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>

}
`,r2=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );

	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`});var s2,o2,a2=C(()=>{s2=`
#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>

void main() {

	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,o2=`
uniform vec3 color;
uniform float opacity;

#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

void main() {

	#include <logdepthbuf_fragment>

	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );

	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>

}
`});var l2,c2,f2=C(()=>{l2=`
uniform float rotation;
uniform vec2 center;

#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	vec4 mvPosition = modelViewMatrix[ 3 ];

	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );

	#ifndef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) scale *= - mvPosition.z;

	#endif

	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;

	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;

	mvPosition.xy += rotatedPosition;

	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,c2=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>

}
`});var ze,Cf=C(()=>{y0();v0();E0();w0();R0();A0();T0();L0();I0();P0();O0();z0();G0();H0();X0();j0();K0();Q0();J0();tp();rp();sp();ap();cp();hp();up();mp();yp();vp();Ep();wp();Rp();Ap();Tp();Lp();Ip();Pp();Op();zp();Gp();Hp();Xp();jp();Kp();Qp();Jp();tm();rm();sm();am();cm();hm();um();mm();ym();vm();Em();wm();Rm();Am();Tm();Lm();Im();Pm();Om();zm();Gm();Hm();Xm();jm();Km();Qm();Jm();t1();r1();s1();a1();c1();h1();u1();m1();y1();v1();E1();w1();R1();A1();T1();L1();I1();P1();O1();z1();G1();H1();X1();j1();K1();Q1();J1();tg();rg();sg();ag();cg();hg();ug();gg();vg();_g();Rg();Cg();Lg();kg();Og();Bg();Hg();qg();Kg();$g();t2();n2();a2();f2();ze={alphahash_fragment:g0,alphahash_pars_fragment:S0,alphamap_fragment:x0,alphamap_pars_fragment:_0,alphatest_fragment:M0,alphatest_pars_fragment:b0,aomap_fragment:C0,aomap_pars_fragment:D0,batching_pars_vertex:N0,batching_vertex:k0,begin_vertex:U0,beginnormal_vertex:F0,bsdfs:B0,iridescence_fragment:V0,bumpmap_pars_fragment:W0,clipping_planes_fragment:q0,clipping_planes_pars_fragment:Y0,clipping_planes_pars_vertex:Z0,clipping_planes_vertex:$0,color_fragment:ep,color_pars_fragment:ip,color_pars_vertex:np,color_vertex:op,common:lp,cube_uv_reflection_fragment:fp,defaultnormal_vertex:dp,displacementmap_pars_vertex:pp,displacementmap_vertex:gp,emissivemap_fragment:Sp,emissivemap_pars_fragment:xp,colorspace_fragment:_p,colorspace_pars_fragment:Mp,envmap_fragment:bp,envmap_common_pars_fragment:Cp,envmap_pars_fragment:Dp,envmap_pars_vertex:Np,envmap_physical_pars_fragment:em,envmap_vertex:kp,fog_vertex:Up,fog_pars_vertex:Fp,fog_fragment:Bp,fog_pars_fragment:Vp,gradientmap_pars_fragment:Wp,lightmap_pars_fragment:qp,lights_lambert_fragment:Yp,lights_lambert_pars_fragment:Zp,lights_pars_begin:$p,lights_toon_fragment:im,lights_toon_pars_fragment:nm,lights_phong_fragment:om,lights_phong_pars_fragment:lm,lights_physical_fragment:fm,lights_physical_pars_fragment:dm,lights_fragment_begin:pm,lights_fragment_maps:gm,lights_fragment_end:Sm,logdepthbuf_fragment:xm,logdepthbuf_pars_fragment:_m,logdepthbuf_pars_vertex:Mm,logdepthbuf_vertex:bm,map_fragment:Cm,map_pars_fragment:Dm,map_particle_fragment:Nm,map_particle_pars_fragment:km,metalnessmap_fragment:Um,metalnessmap_pars_fragment:Fm,morphinstance_vertex:Bm,morphcolor_vertex:Vm,morphnormal_vertex:Wm,morphtarget_pars_vertex:qm,morphtarget_vertex:Ym,normal_fragment_begin:Zm,normal_fragment_maps:$m,normal_pars_fragment:e1,normal_pars_vertex:i1,normal_vertex:n1,normalmap_pars_fragment:o1,clearcoat_normal_fragment_begin:l1,clearcoat_normal_fragment_maps:f1,clearcoat_pars_fragment:d1,iridescence_pars_fragment:p1,opaque_fragment:g1,packing:S1,premultiplied_alpha_fragment:x1,project_vertex:_1,dithering_fragment:M1,dithering_pars_fragment:b1,roughnessmap_fragment:C1,roughnessmap_pars_fragment:D1,shadowmap_pars_fragment:N1,shadowmap_pars_vertex:k1,shadowmap_vertex:U1,shadowmask_pars_fragment:F1,skinbase_vertex:B1,skinning_pars_vertex:V1,skinning_vertex:W1,skinnormal_vertex:q1,specularmap_fragment:Y1,specularmap_pars_fragment:Z1,tonemapping_fragment:$1,tonemapping_pars_fragment:eg,transmission_fragment:ig,transmission_pars_fragment:ng,uv_pars_fragment:og,uv_pars_vertex:lg,uv_vertex:fg,worldpos_vertex:dg,background_vert:pg,background_frag:mg,backgroundCube_vert:yg,backgroundCube_frag:Sg,cube_vert:xg,cube_frag:Eg,depth_vert:wg,depth_frag:Mg,distanceRGBA_vert:bg,distanceRGBA_frag:Ag,equirect_vert:Tg,equirect_frag:Dg,linedashed_vert:Ng,linedashed_frag:Ig,meshbasic_vert:Pg,meshbasic_frag:Ug,meshlambert_vert:Fg,meshlambert_frag:zg,meshmatcap_vert:Gg,meshmatcap_frag:Vg,meshnormal_vert:Wg,meshnormal_frag:Xg,meshphong_vert:jg,meshphong_frag:Yg,meshphysical_vert:Zg,meshphysical_frag:Qg,meshtoon_vert:Jg,meshtoon_frag:e2,points_vert:i2,points_frag:r2,shadow_vert:s2,shadow_frag:o2,sprite_vert:l2,sprite_frag:c2}});var fe,Tf=C(()=>{ki();oi();lr();fe={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}}});var Pi,Df=C(()=>{Cf();Nn();oi();vt();Tf();ki();lr();Pi={basic:{uniforms:$t([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:$t([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ne(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:$t([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:$t([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:$t([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Ne(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:$t([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:$t([fe.points,fe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:$t([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:$t([fe.common,fe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:$t([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:$t([fe.sprite,fe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:$t([fe.common,fe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:$t([fe.lights,fe.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Pi.physical={uniforms:$t([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag}});function h2(t,e,i,r,n,s,o){let a=new Ne(0),l=s===!0?0:1,c,f,h=null,u=0,p=null;function d(w){let M=w.isScene===!0?w.background:null;return M&&M.isTexture&&(M=(w.backgroundBlurriness>0?i:e).get(M)),M}function y(w){let M=!1,x=d(w);x===null?m(a,l):x&&x.isColor&&(m(x,1),M=!0);let k=t.xr.getEnvironmentBlendMode();k==="additive"?r.buffers.color.setClear(0,0,0,1,o):k==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,o),(t.autoClear||M)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(w,M){let x=d(M);x&&(x.isCubeTexture||x.mapping===Xr)?(f===void 0&&(f=new wt(new cr(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:Dr(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:rt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(k,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(f)),In.copy(M.backgroundRotation),In.x*=-1,In.y*=-1,In.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(In.y*=-1,In.z*=-1),f.material.uniforms.envMap.value=x,f.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(DE.makeRotationFromEuler(In)),f.material.toneMapped=Ve.getTransfer(x.colorSpace)!==$e,(h!==x||u!==x.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,h=x,u=x.version,p=t.toneMapping),f.layers.enableAll(),w.unshift(f,f.geometry,f.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new wt(new Ds(2,2),new ai({name:"BackgroundMaterial",uniforms:Dr(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Ve.getTransfer(x.colorSpace)!==$e,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,p=t.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function m(w,M){w.getRGB(bl,Rl(t)),r.buffers.color.setClear(bl.r,bl.g,bl.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(w,M=1){a.set(w),l=M,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,m(a,l)},render:y,addToRenderList:g}}var bl,In,DE,d2=C(()=>{je();Qo();Af();Ls();ki();fr();Zr();Ni();on();Df();Nn();bl={r:0,b:0,g:0},In=new _t,DE=new Ye});function u2(t,e){let i=t.getParameter(t.MAX_VERTEX_ATTRIBS),r={},n=u(null),s=n,o=!1;function a(v,D,P,I,V){let j=!1,H=h(I,P,D);s!==H&&(s=H,c(s.object)),j=p(v,I,P,V),j&&d(v,I,P,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,x(v,D,P,I),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function c(v){return t.bindVertexArray(v)}function f(v){return t.deleteVertexArray(v)}function h(v,D,P){let I=P.wireframe===!0,V=r[v.id];V===void 0&&(V={},r[v.id]=V);let j=V[D.id];j===void 0&&(j={},V[D.id]=j);let H=j[I];return H===void 0&&(H=u(l()),j[I]=H),H}function u(v){let D=[],P=[],I=[];for(let V=0;V<i;V++)D[V]=0,P[V]=0,I[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:P,attributeDivisors:I,object:v,attributes:{},index:null}}function p(v,D,P,I){let V=s.attributes,j=D.attributes,H=0,K=P.getAttributes();for(let G in K)if(K[G].location>=0){let ne=V[G],ye=j[G];if(ye===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(ye=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(ye=v.instanceColor)),ne===void 0||ne.attribute!==ye||ye&&ne.data!==ye.data)return!0;H++}return s.attributesNum!==H||s.index!==I}function d(v,D,P,I){let V={},j=D.attributes,H=0,K=P.getAttributes();for(let G in K)if(K[G].location>=0){let ne=j[G];ne===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(ne=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(ne=v.instanceColor));let ye={};ye.attribute=ne,ne&&ne.data&&(ye.data=ne.data),V[G]=ye,H++}s.attributes=V,s.attributesNum=H,s.index=I}function y(){let v=s.newAttributes;for(let D=0,P=v.length;D<P;D++)v[D]=0}function g(v){m(v,0)}function m(v,D){let P=s.newAttributes,I=s.enabledAttributes,V=s.attributeDivisors;P[v]=1,I[v]===0&&(t.enableVertexAttribArray(v),I[v]=1),V[v]!==D&&(t.vertexAttribDivisor(v,D),V[v]=D)}function w(){let v=s.newAttributes,D=s.enabledAttributes;for(let P=0,I=D.length;P<I;P++)D[P]!==v[P]&&(t.disableVertexAttribArray(P),D[P]=0)}function M(v,D,P,I,V,j,H){H===!0?t.vertexAttribIPointer(v,D,P,V,j):t.vertexAttribPointer(v,D,P,I,V,j)}function x(v,D,P,I){y();let V=I.attributes,j=P.getAttributes(),H=D.defaultAttributeValues;for(let K in j){let G=j[K];if(G.location>=0){let te=V[K];if(te===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&(te=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&(te=v.instanceColor)),te!==void 0){let ne=te.normalized,ye=te.itemSize,xe=e.get(te);if(xe===void 0)continue;let Fe=xe.buffer,Z=xe.type,ie=xe.bytesPerElement,ae=Z===t.INT||Z===t.UNSIGNED_INT||te.gpuType===es;if(te.isInterleavedBufferAttribute){let N=te.data,Q=N.stride,se=te.offset;if(N.isInstancedInterleavedBuffer){for(let oe=0;oe<G.locationSize;oe++)m(G.location+oe,N.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let oe=0;oe<G.locationSize;oe++)g(G.location+oe);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let oe=0;oe<G.locationSize;oe++)M(G.location+oe,ye/G.locationSize,Z,ne,Q*ie,(se+ye/G.locationSize*oe)*ie,ae)}else{if(te.isInstancedBufferAttribute){for(let N=0;N<G.locationSize;N++)m(G.location+N,te.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let N=0;N<G.locationSize;N++)g(G.location+N);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let N=0;N<G.locationSize;N++)M(G.location+N,ye/G.locationSize,Z,ne,ye*ie,ye/G.locationSize*N*ie,ae)}}else if(H!==void 0){let ne=H[K];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(G.location,ne);break;case 3:t.vertexAttrib3fv(G.location,ne);break;case 4:t.vertexAttrib4fv(G.location,ne);break;default:t.vertexAttrib1fv(G.location,ne)}}}}w()}function k(){L();for(let v in r){let D=r[v];for(let P in D){let I=D[P];for(let V in I)f(I[V].object),delete I[V];delete D[P]}delete r[v]}}function T(v){if(r[v.id]===void 0)return;let D=r[v.id];for(let P in D){let I=D[P];for(let V in I)f(I[V].object),delete I[V];delete D[P]}delete r[v.id]}function b(v){for(let D in r){let P=r[D];if(P[v.id]===void 0)continue;let I=P[v.id];for(let V in I)f(I[V].object),delete I[V];delete P[v.id]}}function L(){S(),o=!0,s!==n&&(s=n,c(s.object))}function S(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:L,resetDefaultState:S,dispose:k,releaseStatesOfGeometry:T,releaseStatesOfProgram:b,initAttributes:y,enableAttribute:g,disableUnusedAttributes:w}}var p2=C(()=>{je()});function m2(t,e,i){let r;function n(c){r=c}function s(c,f){t.drawArrays(r,c,f),i.update(f,r,1)}function o(c,f,h){h!==0&&(t.drawArraysInstanced(r,c,f,h),i.update(f,r,h))}function a(c,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,f,0,h);let p=0;for(let d=0;d<h;d++)p+=f[d];i.update(p,r,1)}function l(c,f,h,u){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<c.length;d++)o(c[d],f[d],u[d]);else{p.multiDrawArraysInstancedWEBGL(r,c,0,f,0,u,0,h);let d=0;for(let y=0;y<h;y++)d+=f[y]*u[y];i.update(d,r,1)}}this.setMode=n,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}var g2=C(()=>{});function y2(t,e,i,r){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");n=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(b){return!(b!==Ot&&r.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let L=b===rr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Kt&&r.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==ii&&!L)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=i.precision!==void 0?i.precision:"highp",f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let h=i.logarithmicDepthBuffer===!0,u=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),w=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),k=d>0,T=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:d,maxTextureSize:y,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:w,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:k,maxSamples:T}}var S2=C(()=>{je()});function v2(t){let e=this,i=null,r=0,n=!1,s=!1,o=new Ji,a=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let p=h.length!==0||u||r!==0||n;return n=u,r=h.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){i=f(h,u,0)},this.setState=function(h,u,p){let d=h.clippingPlanes,y=h.clipIntersection,g=h.clipShadows,m=t.get(h);if(!n||d===null||d.length===0||s&&!g)s?f(null):c();else{let w=s?0:r,M=w*4,x=m.clippingState||null;l.value=x,x=f(d,u,M,p);for(let k=0;k!==M;++k)x[k]=i[k];m.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function f(h,u,p,d){let y=h!==null?h.length:0,g=null;if(y!==0){if(g=l.value,d!==!0||g===null){let m=p+y*4,w=u.matrixWorldInverse;a.getNormalMatrix(w),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,x=p;M!==y;++M,x+=4)o.copy(h[M]).applyMatrix4(w,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}var x2=C(()=>{lr();Mf()});var Al,E2=C(()=>{bn();br();je();nn();of();Al=class extends di{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new lt(0,0,e,i),this.scissorTest=!1,this.viewport=new lt(0,0,e,i);let n={width:e,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);let s=new Ct(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);s.flipY=!1,s.generateMipmaps=r.generateMipmaps,s.internalFormat=r.internalFormat,this.textures=[];let o=r.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=i,this.textures[n].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,n=e.textures.length;r<n;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;let i=Object.assign({},e.texture.image);return this.texture.source=new _s(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}});var ui,Ns=C(()=>{E2();ui=class extends Al{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}});var Is,ks,Cl,_2=C(()=>{je();Rr();Cs();Is=-90,ks=1,Cl=class extends At{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Lt(Is,ks,e,i);n.layers=this.layers,this.add(n);let s=new Lt(Is,ks,e,i);s.layers=this.layers,this.add(s);let o=new Lt(Is,ks,e,i);o.layers=this.layers,this.add(o);let a=new Lt(Is,ks,e,i);a.layers=this.layers,this.add(a);let l=new Lt(Is,ks,e,i);l.layers=this.layers,this.add(l);let c=new Lt(Is,ks,e,i);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,i=this.children.concat(),[r,n,s,o,a,l]=i;for(let c of i)this.remove(c);if(e===hi)r.up.set(0,1,0),r.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wn)r.up.set(0,-1,0),r.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of i)this.add(c),c.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();let{renderTarget:r,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,f]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),d=e.xr.enabled;e.xr.enabled=!1;let y=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,n),e.render(i,s),e.setRenderTarget(r,1,n),e.render(i,o),e.setRenderTarget(r,2,n),e.render(i,a),e.setRenderTarget(r,3,n),e.render(i,l),e.setRenderTarget(r,4,n),e.render(i,c),r.texture.generateMipmaps=y,e.setRenderTarget(r,5,n),e.render(i,f),e.setRenderTarget(h,u,p),e.xr.enabled=d,r.texture.needsPMREMUpdate=!0}}});var Ps,Lf=C(()=>{br();je();Ps=class extends Ct{constructor(e,i,r,n,s,o,a,l,c,f){e=e!==void 0?e:[],i=i!==void 0?i:Hi,super(e,i,r,n,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}});var Tl,w2=C(()=>{je();on();Qo();Ls();Nn();Ns();_2();Lf();Tl=class extends ui{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;let r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];this.texture=new Ps(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ti}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;let r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new cr(5,5,5),s=new ai({name:"CubemapFromEquirect",uniforms:Dr(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:rt,blending:Ai});s.uniforms.tEquirect.value=i;let o=new wt(n,s),a=i.minFilter;return i.minFilter===Xi&&(i.minFilter=ti),new Cl(1,10,this).update(e,o),i.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,i,r,n){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(i,r,n);e.setRenderTarget(s)}}});function M2(t){let e=new WeakMap;function i(o,a){return a===po?o.mapping=Hi:a===mo&&(o.mapping=ir),o}function r(o){if(o&&o.isTexture){let a=o.mapping;if(a===po||a===mo)if(e.has(o)){let l=e.get(o).texture;return i(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Tl(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",n),i(c.texture,o.mapping)}else return null}}return o}function n(o){let a=o.target;a.removeEventListener("dispose",n);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:r,dispose:s}}var R2=C(()=>{je();w2()});var Dl,b2=C(()=>{Ef();Dl=class extends As{constructor(e=-1,i=1,r=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=r-e,o=r+e,a=n+i,l=n-i;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}});function LE(t){let e=[],i=[],r=[],n=t,s=t-Os+1+A2.length;for(let o=0;o<s;o++){let a=Math.pow(2,n);i.push(a);let l=1/a;o>t-Os?l=A2[o-t+Os-1]:o===0&&(l=0),r.push(l);let c=1/(a-2),f=-c,h=1+c,u=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,d=6,y=3,g=2,m=1,w=new Float32Array(y*d*p),M=new Float32Array(g*d*p),x=new Float32Array(m*d*p);for(let T=0;T<p;T++){let b=T%3*2/3-1,L=T>2?0:-1,S=[b,L,0,b+2/3,L,0,b+2/3,L+1,0,b,L,0,b+2/3,L+1,0,b,L+1,0];w.set(S,y*d*T),M.set(u,g*d*T);let v=[T,T,T,T,T,T];x.set(v,m*d*T)}let k=new Ht;k.setAttribute("position",new Et(w,y)),k.setAttribute("uv",new Et(M,g)),k.setAttribute("faceIndex",new Et(x,m)),e.push(k),n>Os&&n--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function D2(t,e,i){let r=new ui(t,e,i);return r.texture.mapping=Xr,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ll(t,e,i,r,n){t.viewport.set(e,i,r,n),t.scissor.set(e,i,r,n)}function NE(t,e,i){let r=new Float32Array(Pn),n=new O(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:Pn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function L2(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function N2(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Of(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Os,A2,Pn,Nf,C2,If,kf,Pf,Uf,kn,Us,T2,ea,I2=C(()=>{je();Er();en();on();b2();Cs();Ls();vt();ki();Ns();Jo();Qo();Os=4,A2=[.125,.215,.35,.446,.526,.582],Pn=20,Nf=new Dl,C2=new Ne,If=null,kf=0,Pf=0,Uf=!1,kn=(1+Math.sqrt(5))/2,Us=1/kn,T2=[new O(-kn,Us,0),new O(kn,Us,0),new O(-Us,0,kn),new O(Us,0,kn),new O(0,kn,-Us),new O(0,kn,Us),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],ea=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,n=100){If=this._renderer.getRenderTarget(),kf=this._renderer.getActiveCubeFace(),Pf=this._renderer.getActiveMipmapLevel(),Uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,r,n,s),i>0&&this._blur(s,0,0,i),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=N2(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=L2(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(If,kf,Pf),this._renderer.xr.enabled=Uf,e.scissorTest=!1,Ll(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Hi||e.mapping===ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),If=this._renderer.getRenderTarget(),kf=this._renderer.getActiveCubeFace(),Pf=this._renderer.getActiveMipmapLevel(),Uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:rr,format:Ot,colorSpace:ji,depthBuffer:!1},n=D2(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=D2(e,i,r);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=LE(s)),this._blurMaterial=NE(s,e,i)}return n}_compileMaterial(e){let i=new wt(this._lodPlanes[0],e);this._renderer.compile(i,Nf)}_sceneToCubeUV(e,i,r,n){let a=new Lt(90,1,i,r),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,u=f.toneMapping;f.getClearColor(C2),f.toneMapping=Ci,f.autoClear=!1;let p=new nt({name:"PMREM.Background",side:rt,depthWrite:!1,depthTest:!1}),d=new wt(new cr,p),y=!1,g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,y=!0):(p.color.copy(C2),y=!0);for(let m=0;m<6;m++){let w=m%3;w===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):w===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let M=this._cubeSize;Ll(n,w*M,m>2?M:0,M,M),f.setRenderTarget(n),y&&f.render(d,a),f.render(e,a)}d.geometry.dispose(),d.material.dispose(),f.toneMapping=u,f.autoClear=h,e.background=g}_textureToCubeUV(e,i){let r=this._renderer,n=e.mapping===Hi||e.mapping===ir;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=N2()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=L2());let s=n?this._cubemapMaterial:this._equirectMaterial,o=new wt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Ll(i,0,0,3*l,2*l),r.setRenderTarget(i),r.render(o,Nf)}_applyPMREM(e){let i=this._renderer,r=i.autoClear;i.autoClear=!1;let n=this._lodPlanes.length;for(let s=1;s<n;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=T2[(n-s-1)%T2.length];this._blur(e,s-1,s,o,a)}i.autoClear=r}_blur(e,i,r,n,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,i,r,n,"latitudinal",s),this._halfBlur(o,e,r,r,n,"longitudinal",s)}_halfBlur(e,i,r,n,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let f=3,h=new wt(this._lodPlanes[n],c),u=c.uniforms,p=this._sizeLods[r]-1,d=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Pn-1),y=s/d,g=isFinite(s)?1+Math.floor(f*y):Pn;g>Pn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Pn}`);let m=[],w=0;for(let b=0;b<Pn;++b){let L=b/y,S=Math.exp(-L*L/2);m.push(S),b===0?w+=S:b<g&&(w+=2*S)}for(let b=0;b<m.length;b++)m[b]=m[b]/w;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=m,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:M}=this;u.dTheta.value=d,u.mipInt.value=M-r;let x=this._sizeLods[n],k=3*x*(n>M-Os?n-M+Os:0),T=4*(this._cubeSize-x);Ll(i,k,T,3*x,2*x),l.setRenderTarget(i),l.render(h,Nf)}}});function k2(t){let e=new WeakMap,i=null;function r(a){if(a&&a.isTexture){let l=a.mapping,c=l===po||l===mo,f=l===Hi||l===ir;if(c||f){let h=e.get(a),u=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return i===null&&(i=new ea(t)),h=c?i.fromEquirectangular(a,h):i.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let p=a.image;return c&&p&&p.height>0||f&&p&&n(p)?(i===null&&(i=new ea(t)),h=c?i.fromEquirectangular(a):i.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function n(a){let l=0,c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:o}}var P2=C(()=>{je();I2()});function U2(t){let e={};function i(r){if(e[r]!==void 0)return e[r];let n;switch(r){case"WEBGL_depth_texture":n=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=t.getExtension(r)}return e[r]=n,n}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let n=i(r);return n===null&&An("THREE.WebGLRenderer: "+r+" extension not supported."),n}}}var O2=C(()=>{Jr()});function F2(t,e,i,r){let n={},s=new WeakMap;function o(h){let u=h.target;u.index!==null&&e.remove(u.index);for(let d in u.attributes)e.remove(u.attributes[d]);for(let d in u.morphAttributes){let y=u.morphAttributes[d];for(let g=0,m=y.length;g<m;g++)e.remove(y[g])}u.removeEventListener("dispose",o),delete n[u.id];let p=s.get(u);p&&(e.remove(p),s.delete(u)),r.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,i.memory.geometries--}function a(h,u){return n[u.id]===!0||(u.addEventListener("dispose",o),n[u.id]=!0,i.memory.geometries++),u}function l(h){let u=h.attributes;for(let d in u)e.update(u[d],t.ARRAY_BUFFER);let p=h.morphAttributes;for(let d in p){let y=p[d];for(let g=0,m=y.length;g<m;g++)e.update(y[g],t.ARRAY_BUFFER)}}function c(h){let u=[],p=h.index,d=h.attributes.position,y=0;if(p!==null){let w=p.array;y=p.version;for(let M=0,x=w.length;M<x;M+=3){let k=w[M+0],T=w[M+1],b=w[M+2];u.push(k,T,T,b,b,k)}}else if(d!==void 0){let w=d.array;y=d.version;for(let M=0,x=w.length/3-1;M<x;M+=3){let k=M+0,T=M+1,b=M+2;u.push(k,T,T,b,b,k)}}else return;let g=new(al(u)?us:ds)(u,1);g.version=y;let m=s.get(h);m&&e.remove(m),s.set(h,g)}function f(h){let u=s.get(h);if(u){let p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}var z2=C(()=>{Er();Jr()});function B2(t,e,i){let r;function n(u){r=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,p){t.drawElements(r,p,s,u*o),i.update(p,r,1)}function c(u,p,d){d!==0&&(t.drawElementsInstanced(r,p,s,u*o,d),i.update(p,r,d))}function f(u,p,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,p,0,s,u,0,d);let g=0;for(let m=0;m<d;m++)g+=p[m];i.update(g,r,1)}function h(u,p,d,y){if(d===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<u.length;m++)c(u[m]/o,p[m],y[m]);else{g.multiDrawElementsInstancedWEBGL(r,p,0,s,u,0,y,0,d);let m=0;for(let w=0;w<d;w++)m+=p[w]*y[w];i.update(m,r,1)}}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}var G2=C(()=>{});function V2(t){let e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(s,o,a){switch(i.calls++,o){case t.TRIANGLES:i.triangles+=a*(s/3);break;case t.LINES:i.lines+=a*(s/2);break;case t.LINE_STRIP:i.lines+=a*(s-1);break;case t.LINE_LOOP:i.lines+=a*s;break;case t.POINTS:i.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:n,update:r}}var H2=C(()=>{});var Fs,Ff=C(()=>{br();je();Fs=class extends Ct{constructor(e=null,i=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:n},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}});function W2(t,e,i){let r=new WeakMap,n=new lt;function s(o,a,l){let c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0,u=r.get(a);if(u===void 0||u.count!==h){let S=function(){b.dispose(),r.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,d=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],M=0;p===!0&&(M=1),d===!0&&(M=2),y===!0&&(M=3);let x=a.attributes.position.count*M,k=1;x>e.maxTextureSize&&(k=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let T=new Float32Array(x*k*4*h),b=new Fs(T,x,k,h);b.type=ii,b.needsUpdate=!0;let L=M*4;for(let v=0;v<h;v++){let D=g[v],P=m[v],I=w[v],V=x*k*4*v;for(let j=0;j<D.count;j++){let H=j*L;p===!0&&(n.fromBufferAttribute(D,j),T[V+H+0]=n.x,T[V+H+1]=n.y,T[V+H+2]=n.z,T[V+H+3]=0),d===!0&&(n.fromBufferAttribute(P,j),T[V+H+4]=n.x,T[V+H+5]=n.y,T[V+H+6]=n.z,T[V+H+7]=0),y===!0&&(n.fromBufferAttribute(I,j),T[V+H+8]=n.x,T[V+H+9]=n.y,T[V+H+10]=n.z,T[V+H+11]=I.itemSize===4?n.w:1)}}u={count:h,texture:b,size:new Pe(x,k)},r.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,i);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let d=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",d),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,i),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}var X2=C(()=>{je();Ff();nn();oi()});function q2(t,e,i,r){let n=new WeakMap;function s(l){let c=r.render.frame,f=l.geometry,h=e.get(l,f);if(n.get(h)!==c&&(e.update(h),n.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==c&&(i.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&i.update(l.instanceColor,t.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;n.get(u)!==c&&(u.update(),n.set(u,c))}return h}function o(){n=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),i.remove(c.instanceMatrix),c.instanceColor!==null&&i.remove(c.instanceColor)}return{update:s,dispose:o}}var j2=C(()=>{});var Nl,Y2=C(()=>{br();je();Nl=class extends Ct{constructor(e=null,i=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:n},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}});var zs,zf=C(()=>{br();je();zs=class extends Ct{constructor(e,i,r,n,s,o,a,l,c,f=nr){if(f!==nr&&f!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&f===nr&&(r=Si),r===void 0&&f===sr&&(r=qi),super(null,n,s,o,a,l,f,r,c),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=a!==void 0?a:Yt,this.minFilter=l!==void 0?l:Yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}});function Bs(t,e,i){let r=t[0];if(r<=0||r>0)return t;let n=e*i,s=Z2[n];if(s===void 0&&(s=new Float32Array(n),Z2[n]=s),e!==0){r.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=i,t[o].toArray(s,a)}return s}function Nt(t,e){if(t.length!==e.length)return!1;for(let i=0,r=t.length;i<r;i++)if(t[i]!==e[i])return!1;return!0}function It(t,e){for(let i=0,r=e.length;i<r;i++)t[i]=e[i]}function Il(t,e){let i=Q2[e];i===void 0&&(i=new Int32Array(e),Q2[e]=i);for(let r=0;r!==e;++r)i[r]=t.allocateTextureUnit();return i}function IE(t,e){let i=this.cache;i[0]!==e&&(t.uniform1f(this.addr,e),i[0]=e)}function kE(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Nt(i,e))return;t.uniform2fv(this.addr,e),It(i,e)}}function PE(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Nt(i,e))return;t.uniform3fv(this.addr,e),It(i,e)}}function UE(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Nt(i,e))return;t.uniform4fv(this.addr,e),It(i,e)}}function OE(t,e){let i=this.cache,r=e.elements;if(r===void 0){if(Nt(i,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(i,e)}else{if(Nt(i,r))return;ey.set(r),t.uniformMatrix2fv(this.addr,!1,ey),It(i,r)}}function FE(t,e){let i=this.cache,r=e.elements;if(r===void 0){if(Nt(i,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(i,e)}else{if(Nt(i,r))return;J2.set(r),t.uniformMatrix3fv(this.addr,!1,J2),It(i,r)}}function zE(t,e){let i=this.cache,r=e.elements;if(r===void 0){if(Nt(i,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(i,e)}else{if(Nt(i,r))return;$2.set(r),t.uniformMatrix4fv(this.addr,!1,$2),It(i,r)}}function BE(t,e){let i=this.cache;i[0]!==e&&(t.uniform1i(this.addr,e),i[0]=e)}function GE(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Nt(i,e))return;t.uniform2iv(this.addr,e),It(i,e)}}function VE(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Nt(i,e))return;t.uniform3iv(this.addr,e),It(i,e)}}function HE(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Nt(i,e))return;t.uniform4iv(this.addr,e),It(i,e)}}function WE(t,e){let i=this.cache;i[0]!==e&&(t.uniform1ui(this.addr,e),i[0]=e)}function XE(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Nt(i,e))return;t.uniform2uiv(this.addr,e),It(i,e)}}function qE(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Nt(i,e))return;t.uniform3uiv(this.addr,e),It(i,e)}}function jE(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Nt(i,e))return;t.uniform4uiv(this.addr,e),It(i,e)}}function YE(t,e,i){let r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(t.uniform1i(this.addr,n),r[0]=n);let s;this.type===t.SAMPLER_2D_SHADOW?(K2.compareFunction=Za,s=K2):s=iy,i.setTexture2D(e||s,n)}function KE(t,e,i){let r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(t.uniform1i(this.addr,n),r[0]=n),i.setTexture3D(e||ny,n)}function ZE(t,e,i){let r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(t.uniform1i(this.addr,n),r[0]=n),i.setTextureCube(e||sy,n)}function QE(t,e,i){let r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(t.uniform1i(this.addr,n),r[0]=n),i.setTexture2DArray(e||ry,n)}function $E(t){switch(t){case 5126:return IE;case 35664:return kE;case 35665:return PE;case 35666:return UE;case 35674:return OE;case 35675:return FE;case 35676:return zE;case 5124:case 35670:return BE;case 35667:case 35671:return GE;case 35668:case 35672:return VE;case 35669:case 35673:return HE;case 5125:return WE;case 36294:return XE;case 36295:return qE;case 36296:return jE;case 35678:case 36198:case 36298:case 36306:case 35682:return YE;case 35679:case 36299:case 36307:return KE;case 35680:case 36300:case 36308:case 36293:return ZE;case 36289:case 36303:case 36311:case 36292:return QE}}function JE(t,e){t.uniform1fv(this.addr,e)}function e4(t,e){let i=Bs(e,this.size,2);t.uniform2fv(this.addr,i)}function t4(t,e){let i=Bs(e,this.size,3);t.uniform3fv(this.addr,i)}function i4(t,e){let i=Bs(e,this.size,4);t.uniform4fv(this.addr,i)}function r4(t,e){let i=Bs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,i)}function n4(t,e){let i=Bs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,i)}function s4(t,e){let i=Bs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,i)}function o4(t,e){t.uniform1iv(this.addr,e)}function a4(t,e){t.uniform2iv(this.addr,e)}function l4(t,e){t.uniform3iv(this.addr,e)}function c4(t,e){t.uniform4iv(this.addr,e)}function f4(t,e){t.uniform1uiv(this.addr,e)}function h4(t,e){t.uniform2uiv(this.addr,e)}function d4(t,e){t.uniform3uiv(this.addr,e)}function u4(t,e){t.uniform4uiv(this.addr,e)}function p4(t,e,i){let r=this.cache,n=e.length,s=Il(i,n);Nt(r,s)||(t.uniform1iv(this.addr,s),It(r,s));for(let o=0;o!==n;++o)i.setTexture2D(e[o]||iy,s[o])}function m4(t,e,i){let r=this.cache,n=e.length,s=Il(i,n);Nt(r,s)||(t.uniform1iv(this.addr,s),It(r,s));for(let o=0;o!==n;++o)i.setTexture3D(e[o]||ny,s[o])}function g4(t,e,i){let r=this.cache,n=e.length,s=Il(i,n);Nt(r,s)||(t.uniform1iv(this.addr,s),It(r,s));for(let o=0;o!==n;++o)i.setTextureCube(e[o]||sy,s[o])}function y4(t,e,i){let r=this.cache,n=e.length,s=Il(i,n);Nt(r,s)||(t.uniform1iv(this.addr,s),It(r,s));for(let o=0;o!==n;++o)i.setTexture2DArray(e[o]||ry,s[o])}function S4(t){switch(t){case 5126:return JE;case 35664:return e4;case 35665:return t4;case 35666:return i4;case 35674:return r4;case 35675:return n4;case 35676:return s4;case 5124:case 35670:return o4;case 35667:case 35671:return a4;case 35668:case 35672:return l4;case 35669:case 35673:return c4;case 5125:return f4;case 36294:return h4;case 36295:return d4;case 36296:return u4;case 35678:case 36198:case 36298:case 36306:case 35682:return p4;case 35679:case 36299:case 36307:return m4;case 35680:case 36300:case 36308:case 36293:return g4;case 36289:case 36303:case 36311:case 36292:return y4}}function ty(t,e){t.seq.push(e),t.map[e.id]=e}function v4(t,e,i){let r=t.name,n=r.length;for(Bf.lastIndex=0;;){let s=Bf.exec(r),o=Bf.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){ty(i,c===void 0?new Gf(a,t,e):new Vf(a,t,e));break}else{let h=i.map[a];h===void 0&&(h=new Hf(a),ty(i,h)),i=h}}}var iy,K2,ry,ny,sy,Z2,Q2,$2,J2,ey,Gf,Vf,Hf,Bf,ln,Wf=C(()=>{Lf();br();Ff();Y2();zf();je();iy=new Ct,K2=new zs(1,1),ry=new Fs,ny=new Nl,sy=new Ps,Z2=[],Q2=[],$2=new Float32Array(16),J2=new Float32Array(9),ey=new Float32Array(4);Gf=class{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=$E(i.type)}},Vf=class{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=S4(i.type)}},Hf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){let n=this.seq;for(let s=0,o=n.length;s!==o;++s){let a=n[s];a.setValue(e,i[a.id],r)}}},Bf=/(\w+)(\])?(\[|\.)?/g;ln=class{constructor(e,i){this.seq=[],this.map={};let r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let n=0;n<r;++n){let s=e.getActiveUniform(i,n),o=e.getUniformLocation(i,s.name);v4(s,o,this)}}setValue(e,i,r,n){let s=this.map[i];s!==void 0&&s.setValue(e,r,n)}setOptional(e,i,r){let n=i[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,i,r,n){for(let s=0,o=i.length;s!==o;++s){let a=i[s],l=r[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,n)}}static seqWithValue(e,i){let r=[];for(let n=0,s=e.length;n!==s;++n){let o=e[n];o.id in i&&r.push(o)}return r}}});function Xf(t,e,i){let r=t.createShader(e);return t.shaderSource(r,i),t.compileShader(r),r}var oy=C(()=>{});function _4(t,e){let i=t.split(`
`),r=[],n=Math.max(e-6,0),s=Math.min(e+6,i.length);for(let o=n;o<s;o++){let a=o+1;r.push(`${a===e?">":" "} ${a}: ${i[o]}`)}return r.join(`
`)}function w4(t){Ve._getMatrix(ay,Ve.workingColorSpace,t);let e=`mat3( ${ay.elements.map(i=>i.toFixed(4))} )`;switch(Ve.getTransfer(t)){case En:return[e,"LinearTransferOETF"];case $e:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function ly(t,e,i){let r=t.getShaderParameter(e,t.COMPILE_STATUS),n=t.getShaderInfoLog(e).trim();if(r&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let o=parseInt(s[1]);return i.toUpperCase()+`

`+n+`

`+_4(t.getShaderSource(e),o)}else return n}function M4(t,e){let i=w4(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function R4(t,e){let i;switch(e){case au:i="Linear";break;case lu:i="Reinhard";break;case cu:i="Cineon";break;case fu:i="ACESFilmic";break;case du:i="AgX";break;case uu:i="Neutral";break;case hu:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+t+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function b4(){Ve.getLuminanceCoefficients(kl);let t=kl.x.toFixed(4),e=kl.y.toFixed(4),i=kl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function A4(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function C4(t){let e=[];for(let i in t){let r=t[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function T4(t,e){let i={},r=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){let s=t.getActiveAttrib(e,n),o=s.name,a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),i[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return i}function ta(t){return t!==""}function cy(t,e){let i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fy(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function qf(t){return t.replace(D4,N4)}function N4(t,e){let i=ze[e];if(i===void 0){let r=L4.get(e);if(r!==void 0)i=ze[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return qf(i)}function hy(t){return t.replace(I4,k4)}function k4(t,e,i,r){let n="";for(let s=parseInt(e);s<parseInt(i);s++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function dy(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function P4(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Da?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Bd?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function U4(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Hi:case ir:e="ENVMAP_TYPE_CUBE";break;case Xr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function O4(t){let e="ENVMAP_MODE_REFLECTION";return t.envMap&&t.envMapMode===ir&&(e="ENVMAP_MODE_REFRACTION"),e}function F4(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Fa:e="ENVMAP_BLENDING_MULTIPLY";break;case su:e="ENVMAP_BLENDING_MIX";break;case ou:e="ENVMAP_BLENDING_ADD";break}return e}function z4(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function uy(t,e,i,r){let n=t.getContext(),s=i.defines,o=i.vertexShader,a=i.fragmentShader,l=P4(i),c=U4(i),f=O4(i),h=F4(i),u=z4(i),p=A4(i),d=C4(s),y=n.createProgram(),g,m,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,d].filter(ta).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,d].filter(ta).join(`
`),m.length>0&&(m+=`
`)):(g=[dy(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,d,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+f:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),m=[dy(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,d,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+f:"",i.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ci?"#define TONE_MAPPING":"",i.toneMapping!==Ci?ze.tonemapping_pars_fragment:"",i.toneMapping!==Ci?R4("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,M4("linearToOutputTexel",i.outputColorSpace),b4(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ta).join(`
`)),o=qf(o),o=cy(o,i),o=fy(o,i),a=qf(a),a=cy(a,i),a=fy(a,i),o=hy(o),a=hy(a),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",i.glslVersion===jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=w+g+o,x=w+m+a,k=Xf(n,n.VERTEX_SHADER,M),T=Xf(n,n.FRAGMENT_SHADER,x);n.attachShader(y,k),n.attachShader(y,T),i.index0AttributeName!==void 0?n.bindAttribLocation(y,0,i.index0AttributeName):i.morphTargets===!0&&n.bindAttribLocation(y,0,"position"),n.linkProgram(y);function b(D){if(t.debug.checkShaderErrors){let P=n.getProgramInfoLog(y).trim(),I=n.getShaderInfoLog(k).trim(),V=n.getShaderInfoLog(T).trim(),j=!0,H=!0;if(n.getProgramParameter(y,n.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(n,y,k,T);else{let K=ly(n,k,"vertex"),G=ly(n,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(y,n.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+P+`
`+K+`
`+G)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(I===""||V==="")&&(H=!1);H&&(D.diagnostics={runnable:j,programLog:P,vertexShader:{log:I,prefix:g},fragmentShader:{log:V,prefix:m}})}n.deleteShader(k),n.deleteShader(T),L=new ln(n,y),S=T4(n,y)}let L;this.getUniforms=function(){return L===void 0&&b(this),L};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let v=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=n.getProgramParameter(y,x4)),v},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(y),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=E4++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=k,this.fragmentShader=T,this}var x4,E4,ay,kl,D4,L4,I4,py=C(()=>{Wf();oy();Cf();je();fr();vt();lr();x4=37297,E4=0;ay=new De;kl=new O;D4=/^[ \t]*#include +<([\w\d./]+)>/gm;L4=new Map;I4=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g});var B4,Pl,jf,my=C(()=>{B4=0,Pl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let i=e.vertexShader,r=e.fragmentShader,n=this._getShaderStage(i),s=this._getShaderStage(r),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let i=this.materialCache.get(e);for(let r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let i=this.materialCache,r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){let i=this.shaderCache,r=i.get(e);return r===void 0&&(r=new jf(e),i.set(e,r)),r}},jf=class{constructor(e){this.id=B4++,this.code=e,this.usedTimes=0}}});function gy(t,e,i,r,n,s,o){let a=new Qr,l=new Pl,c=new Set,f=[],h=n.logarithmicDepthBuffer,u=n.vertexTextures,p=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,v,D,P,I){let V=P.fog,j=I.geometry,H=S.isMeshStandardMaterial?P.environment:null,K=(S.isMeshStandardMaterial?i:e).get(S.envMap||H),G=K&&K.mapping===Xr?K.image.height:null,te=d[S.type];S.precision!==null&&(p=n.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let ne=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ye=ne!==void 0?ne.length:0,xe=0;j.morphAttributes.position!==void 0&&(xe=1),j.morphAttributes.normal!==void 0&&(xe=2),j.morphAttributes.color!==void 0&&(xe=3);let Fe,Z,ie,ae;if(te){let at=Pi[te];Fe=at.vertexShader,Z=at.fragmentShader}else Fe=S.vertexShader,Z=S.fragmentShader,l.update(S),ie=l.getVertexShaderID(S),ae=l.getFragmentShaderID(S);let N=t.getRenderTarget(),Q=t.state.buffers.depth.getReversed(),se=I.isInstancedMesh===!0,oe=I.isBatchedMesh===!0,we=!!S.map,Se=!!S.matcap,He=!!K,B=!!S.aoMap,li=!!S.lightMap,Ke=!!S.bumpMap,Ze=!!S.normalMap,Le=!!S.displacementMap,mt=!!S.emissiveMap,Te=!!S.metalnessMap,R=!!S.roughnessMap,E=S.anisotropy>0,W=S.clearcoat>0,J=S.dispersion>0,re=S.iridescence>0,$=S.sheen>0,Ae=S.transmission>0,de=E&&!!S.anisotropyMap,ve=W&&!!S.clearcoatMap,et=W&&!!S.clearcoatNormalMap,le=W&&!!S.clearcoatRoughnessMap,Ee=re&&!!S.iridescenceMap,Ie=re&&!!S.iridescenceThicknessMap,Ue=$&&!!S.sheenColorMap,_e=$&&!!S.sheenRoughnessMap,Qe=!!S.specularMap,We=!!S.specularColorMap,ft=!!S.specularIntensityMap,U=Ae&&!!S.transmissionMap,he=Ae&&!!S.thicknessMap,Y=!!S.gradientMap,ee=!!S.alphaMap,me=S.alphaTest>0,ue=!!S.alphaHash,Be=!!S.extensions,Mt=Ci;S.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Mt=t.toneMapping);let Xt={shaderID:te,shaderType:S.type,shaderName:S.name,vertexShader:Fe,fragmentShader:Z,defines:S.defines,customVertexShaderID:ie,customFragmentShaderID:ae,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:oe,batchingColor:oe&&I._colorsTexture!==null,instancing:se,instancingColor:se&&I.instanceColor!==null,instancingMorph:se&&I.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:N===null?t.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ji,alphaToCoverage:!!S.alphaToCoverage,map:we,matcap:Se,envMap:He,envMapMode:He&&K.mapping,envMapCubeUVHeight:G,aoMap:B,lightMap:li,bumpMap:Ke,normalMap:Ze,displacementMap:u&&Le,emissiveMap:mt,normalMapObjectSpace:Ze&&S.normalMapType===Su,normalMapTangentSpace:Ze&&S.normalMapType===yu,metalnessMap:Te,roughnessMap:R,anisotropy:E,anisotropyMap:de,clearcoat:W,clearcoatMap:ve,clearcoatNormalMap:et,clearcoatRoughnessMap:le,dispersion:J,iridescence:re,iridescenceMap:Ee,iridescenceThicknessMap:Ie,sheen:$,sheenColorMap:Ue,sheenRoughnessMap:_e,specularMap:Qe,specularColorMap:We,specularIntensityMap:ft,transmission:Ae,transmissionMap:U,thicknessMap:he,gradientMap:Y,opaque:S.transparent===!1&&S.blending===Sr&&S.alphaToCoverage===!1,alphaMap:ee,alphaTest:me,alphaHash:ue,combine:S.combine,mapUv:we&&y(S.map.channel),aoMapUv:B&&y(S.aoMap.channel),lightMapUv:li&&y(S.lightMap.channel),bumpMapUv:Ke&&y(S.bumpMap.channel),normalMapUv:Ze&&y(S.normalMap.channel),displacementMapUv:Le&&y(S.displacementMap.channel),emissiveMapUv:mt&&y(S.emissiveMap.channel),metalnessMapUv:Te&&y(S.metalnessMap.channel),roughnessMapUv:R&&y(S.roughnessMap.channel),anisotropyMapUv:de&&y(S.anisotropyMap.channel),clearcoatMapUv:ve&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:et&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:_e&&y(S.sheenRoughnessMap.channel),specularMapUv:Qe&&y(S.specularMap.channel),specularColorMapUv:We&&y(S.specularColorMap.channel),specularIntensityMapUv:ft&&y(S.specularIntensityMap.channel),transmissionMapUv:U&&y(S.transmissionMap.channel),thicknessMapUv:he&&y(S.thicknessMap.channel),alphaMapUv:ee&&y(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Ze||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!j.attributes.uv&&(we||ee),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Q,skinning:I.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:xe,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:Mt,decodeVideoTexture:we&&S.map.isVideoTexture===!0&&Ve.getTransfer(S.map.colorSpace)===$e,decodeVideoTextureEmissive:mt&&S.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(S.emissiveMap.colorSpace)===$e,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Vt,flipSided:S.side===rt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Be&&S.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&S.extensions.multiDraw===!0||oe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Xt.vertexUv1s=c.has(1),Xt.vertexUv2s=c.has(2),Xt.vertexUv3s=c.has(3),c.clear(),Xt}function m(S){let v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(let D in S.defines)v.push(D),v.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(w(v,S),M(v,S),v.push(t.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function w(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function M(S,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){let v=d[S.type],D;if(v){let P=Pi[v];D=h0.clone(P.uniforms)}else D=S.uniforms;return D}function k(S,v){let D;for(let P=0,I=f.length;P<I;P++){let V=f[P];if(V.cacheKey===v){D=V,++D.usedTimes;break}}return D===void 0&&(D=new uy(t,v,S,s),f.push(D)),D}function T(S){if(--S.usedTimes===0){let v=f.indexOf(S);f[v]=f[f.length-1],f.pop(),S.destroy()}}function b(S){l.remove(S)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:x,acquireProgram:k,releaseProgram:T,releaseShaderCache:b,programs:f,dispose:L}}var yy=C(()=>{je();sl();py();my();Df();Nn();fr()});function Sy(){let t=new WeakMap;function e(o){return t.has(o)}function i(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function r(o){t.delete(o)}function n(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:i,remove:r,update:n,dispose:s}}var vy=C(()=>{});function G4(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function xy(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ey(){let t=[],e=0,i=[],r=[],n=[];function s(){e=0,i.length=0,r.length=0,n.length=0}function o(h,u,p,d,y,g){let m=t[e];return m===void 0?(m={id:h.id,object:h,geometry:u,material:p,groupOrder:d,renderOrder:h.renderOrder,z:y,group:g},t[e]=m):(m.id=h.id,m.object=h,m.geometry=u,m.material=p,m.groupOrder=d,m.renderOrder=h.renderOrder,m.z=y,m.group=g),e++,m}function a(h,u,p,d,y,g){let m=o(h,u,p,d,y,g);p.transmission>0?r.push(m):p.transparent===!0?n.push(m):i.push(m)}function l(h,u,p,d,y,g){let m=o(h,u,p,d,y,g);p.transmission>0?r.unshift(m):p.transparent===!0?n.unshift(m):i.unshift(m)}function c(h,u){i.length>1&&i.sort(h||G4),r.length>1&&r.sort(u||xy),n.length>1&&n.sort(u||xy)}function f(){for(let h=e,u=t.length;h<u;h++){let p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:i,transmissive:r,transparent:n,init:s,push:a,unshift:l,finish:f,sort:c}}function _y(){let t=new WeakMap;function e(r,n){let s=t.get(r),o;return s===void 0?(o=new Ey,t.set(r,[o])):n>=s.length?(o=new Ey,s.push(o)):o=s[n],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var wy=C(()=>{});function V4(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new O,color:new Ne};break;case"SpotLight":i={position:new O,direction:new O,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new O,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":i={direction:new O,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":i={color:new Ne,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=i,i}}}function H4(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=i,i}}}function X4(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function My(t){let e=new V4,i=H4(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new O);let n=new O,s=new Ye,o=new Ye;function a(c){let f=0,h=0,u=0;for(let S=0;S<9;S++)r.probe[S].set(0,0,0);let p=0,d=0,y=0,g=0,m=0,w=0,M=0,x=0,k=0,T=0,b=0;c.sort(X4);for(let S=0,v=c.length;S<v;S++){let D=c[S],P=D.color,I=D.intensity,V=D.distance,j=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=P.r*I,h+=P.g*I,u+=P.b*I;else if(D.isLightProbe){for(let H=0;H<9;H++)r.probe[H].addScaledVector(D.sh.coefficients[H],I);b++}else if(D.isDirectionalLight){let H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let K=D.shadow,G=i.get(D);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,r.directionalShadow[p]=G,r.directionalShadowMap[p]=j,r.directionalShadowMatrix[p]=D.shadow.matrix,w++}r.directional[p]=H,p++}else if(D.isSpotLight){let H=e.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(P).multiplyScalar(I),H.distance=V,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,r.spot[y]=H;let K=D.shadow;if(D.map&&(r.spotLightMap[k]=D.map,k++,K.updateMatrices(D),D.castShadow&&T++),r.spotLightMatrix[y]=K.matrix,D.castShadow){let G=i.get(D);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,r.spotShadow[y]=G,r.spotShadowMap[y]=j,x++}y++}else if(D.isRectAreaLight){let H=e.get(D);H.color.copy(P).multiplyScalar(I),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),r.rectArea[g]=H,g++}else if(D.isPointLight){let H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){let K=D.shadow,G=i.get(D);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,G.shadowCameraNear=K.camera.near,G.shadowCameraFar=K.camera.far,r.pointShadow[d]=G,r.pointShadowMap[d]=j,r.pointShadowMatrix[d]=D.shadow.matrix,M++}r.point[d]=H,d++}else if(D.isHemisphereLight){let H=e.get(D);H.skyColor.copy(D.color).multiplyScalar(I),H.groundColor.copy(D.groundColor).multiplyScalar(I),r.hemi[m]=H,m++}}g>0&&(t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_FLOAT_1,r.rectAreaLTC2=fe.LTC_FLOAT_2):(r.rectAreaLTC1=fe.LTC_HALF_1,r.rectAreaLTC2=fe.LTC_HALF_2)),r.ambient[0]=f,r.ambient[1]=h,r.ambient[2]=u;let L=r.hash;(L.directionalLength!==p||L.pointLength!==d||L.spotLength!==y||L.rectAreaLength!==g||L.hemiLength!==m||L.numDirectionalShadows!==w||L.numPointShadows!==M||L.numSpotShadows!==x||L.numSpotMaps!==k||L.numLightProbes!==b)&&(r.directional.length=p,r.spot.length=y,r.rectArea.length=g,r.point.length=d,r.hemi.length=m,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=x,r.spotShadowMap.length=x,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=x+k-T,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=T,r.numLightProbes=b,L.directionalLength=p,L.pointLength=d,L.spotLength=y,L.rectAreaLength=g,L.hemiLength=m,L.numDirectionalShadows=w,L.numPointShadows=M,L.numSpotShadows=x,L.numSpotMaps=k,L.numLightProbes=b,r.version=W4++)}function l(c,f){let h=0,u=0,p=0,d=0,y=0,g=f.matrixWorldInverse;for(let m=0,w=c.length;m<w;m++){let M=c[m];if(M.isDirectionalLight){let x=r.directional[h];x.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(g),h++}else if(M.isSpotLight){let x=r.spot[p];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(g),p++}else if(M.isRectAreaLight){let x=r.rectArea[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),o.identity(),s.copy(M.matrixWorld),s.premultiply(g),o.extractRotation(s),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),d++}else if(M.isPointLight){let x=r.point[u];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),u++}else if(M.isHemisphereLight){let x=r.hemi[y];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(g),y++}}}return{setup:a,setupView:l,state:r}}var W4,Ry=C(()=>{ki();Ni();oi();vt();Tf();W4=0});function by(t){let e=new My(t),i=[],r=[];function n(f){c.camera=f,i.length=0,r.length=0}function s(f){i.push(f)}function o(f){r.push(f)}function a(){e.setup(i)}function l(f){e.setupView(i,f)}let c={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Ay(t){let e=new WeakMap;function i(n,s=0){let o=e.get(n),a;return o===void 0?(a=new by(t),e.set(n,[a])):s>=o.length?(a=new by(t),o.push(a)):a=o[s],a}function r(){e=new WeakMap}return{get:i,dispose:r}}var Cy=C(()=>{Ry()});var Ul,Ty=C(()=>{$o();je();Ul=class extends hr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=mu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}});var Ol,Dy=C(()=>{$o();Ol=class extends hr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}});var Ly,Ny,Iy=C(()=>{Ly=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,Ny=`
uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;

#include <packing>

void main() {

	const float samples = float( VSM_SAMPLES );

	float mean = 0.0;
	float squared_mean = 0.0;

	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {

		float uvOffset = uvStart + i * uvStride;

		#ifdef HORIZONTAL_PASS

			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;

		#else

			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;

		#endif

	}

	mean = mean / samples;
	squared_mean = squared_mean / samples;

	float std_dev = sqrt( squared_mean - mean * mean );

	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );

}
`});function ky(t,e,i){let r=new Ts,n=new Pe,s=new Pe,o=new lt,a=new Ul({depthPacking:gu}),l=new Ol,c={},f=i.maxTextureSize,h={[Dt]:rt,[rt]:Dt,[Vt]:Vt},u=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:Ly,fragmentShader:Ny}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let d=new Ht;d.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new wt(d,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Da;let m=this.type;this.render=function(T,b,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let S=t.getRenderTarget(),v=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),P=t.state;P.setBlending(Ai),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let I=m!==Vi&&this.type===Vi,V=m===Vi&&this.type!==Vi;for(let j=0,H=T.length;j<H;j++){let K=T[j],G=K.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;n.copy(G.mapSize);let te=G.getFrameExtents();if(n.multiply(te),s.copy(G.mapSize),(n.x>f||n.y>f)&&(n.x>f&&(s.x=Math.floor(f/te.x),n.x=s.x*te.x,G.mapSize.x=s.x),n.y>f&&(s.y=Math.floor(f/te.y),n.y=s.y*te.y,G.mapSize.y=s.y)),G.map===null||I===!0||V===!0){let ye=this.type!==Vi?{minFilter:Yt,magFilter:Yt}:{};G.map!==null&&G.map.dispose(),G.map=new ui(n.x,n.y,ye),G.map.texture.name=K.name+".shadowMap",G.camera.updateProjectionMatrix()}t.setRenderTarget(G.map),t.clear();let ne=G.getViewportCount();for(let ye=0;ye<ne;ye++){let xe=G.getViewport(ye);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),P.viewport(o),G.updateMatrices(K,ye),r=G.getFrustum(),x(b,L,G.camera,K,this.type)}G.isPointLightShadow!==!0&&this.type===Vi&&w(G,L),G.needsUpdate=!1}m=this.type,g.needsUpdate=!1,t.setRenderTarget(S,v,D)};function w(T,b){let L=e.update(y);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ui(n.x,n.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(b,null,L,u,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(b,null,L,p,y,null)}function M(T,b,L,S){let v=null,D=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)v=D;else if(v=L.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let P=v.uuid,I=b.uuid,V=c[P];V===void 0&&(V={},c[P]=V);let j=V[I];j===void 0&&(j=v.clone(),V[I]=j,b.addEventListener("dispose",k)),v=j}if(v.visible=b.visible,v.wireframe=b.wireframe,S===Vi?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:h[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let P=t.properties.get(v);P.light=L}return v}function x(T,b,L,S,v){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===Vi)&&(!T.frustumCulled||r.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);let I=e.update(T),V=T.material;if(Array.isArray(V)){let j=I.groups;for(let H=0,K=j.length;H<K;H++){let G=j[H],te=V[G.materialIndex];if(te&&te.visible){let ne=M(T,te,S,v);T.onBeforeShadow(t,T,b,L,I,ne,G),t.renderBufferDirect(L,null,I,ne,T,G),T.onAfterShadow(t,T,b,L,I,ne,G)}}}else if(V.visible){let j=M(T,V,S,v);T.onBeforeShadow(t,T,b,L,I,j,null),t.renderBufferDirect(L,null,I,j,T,null),T.onAfterShadow(t,T,b,L,I,j,null)}}let P=T.children;for(let I=0,V=P.length;I<V;I++)x(P[I],b,L,S,v)}function k(T){T.target.removeEventListener("dispose",k);for(let L in c){let S=c[L],v=T.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}var Py=C(()=>{je();Ns();Ty();Dy();Ls();Er();en();on();nn();oi();Rf();Iy()});function Uy(t,e){function i(){let U=!1,he=new lt,Y=null,ee=new lt(0,0,0,0);return{setMask:function(me){Y!==me&&!U&&(t.colorMask(me,me,me,me),Y=me)},setLocked:function(me){U=me},setClear:function(me,ue,Be,Mt,Xt){Xt===!0&&(me*=Mt,ue*=Mt,Be*=Mt),he.set(me,ue,Be,Mt),ee.equals(he)===!1&&(t.clearColor(me,ue,Be,Mt),ee.copy(he))},reset:function(){U=!1,Y=null,ee.set(-1,0,0,0)}}}function r(){let U=!1,he=!1,Y=null,ee=null,me=null;return{setReversed:function(ue){if(he!==ue){let Be=e.get("EXT_clip_control");he?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);let Mt=me;me=null,this.setClear(Mt)}he=ue},getReversed:function(){return he},setTest:function(ue){ue?N(t.DEPTH_TEST):Q(t.DEPTH_TEST)},setMask:function(ue){Y!==ue&&!U&&(t.depthMask(ue),Y=ue)},setFunc:function(ue){if(he&&(ue=j4[ue]),ee!==ue){switch(ue){case La:t.depthFunc(t.NEVER);break;case Na:t.depthFunc(t.ALWAYS);break;case Ia:t.depthFunc(t.LESS);break;case Wr:t.depthFunc(t.LEQUAL);break;case ka:t.depthFunc(t.EQUAL);break;case Pa:t.depthFunc(t.GEQUAL);break;case Ua:t.depthFunc(t.GREATER);break;case Oa:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ee=ue}},setLocked:function(ue){U=ue},setClear:function(ue){me!==ue&&(he&&(ue=1-ue),t.clearDepth(ue),me=ue)},reset:function(){U=!1,Y=null,ee=null,me=null,he=!1}}}function n(){let U=!1,he=null,Y=null,ee=null,me=null,ue=null,Be=null,Mt=null,Xt=null;return{setTest:function(at){U||(at?N(t.STENCIL_TEST):Q(t.STENCIL_TEST))},setMask:function(at){he!==at&&!U&&(t.stencilMask(at),he=at)},setFunc:function(at,Ui,dr){(Y!==at||ee!==Ui||me!==dr)&&(t.stencilFunc(at,Ui,dr),Y=at,ee=Ui,me=dr)},setOp:function(at,Ui,dr){(ue!==at||Be!==Ui||Mt!==dr)&&(t.stencilOp(at,Ui,dr),ue=at,Be=Ui,Mt=dr)},setLocked:function(at){U=at},setClear:function(at){Xt!==at&&(t.clearStencil(at),Xt=at)},reset:function(){U=!1,he=null,Y=null,ee=null,me=null,ue=null,Be=null,Mt=null,Xt=null}}}let s=new i,o=new r,a=new n,l=new WeakMap,c=new WeakMap,f={},h={},u=new WeakMap,p=[],d=null,y=!1,g=null,m=null,w=null,M=null,x=null,k=null,T=null,b=new Ne(0,0,0),L=0,S=!1,v=null,D=null,P=null,I=null,V=null,j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,K=0,G=t.getParameter(t.VERSION);G.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=K>=1):G.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=K>=2);let te=null,ne={},ye=t.getParameter(t.SCISSOR_BOX),xe=t.getParameter(t.VIEWPORT),Fe=new lt().fromArray(ye),Z=new lt().fromArray(xe);function ie(U,he,Y,ee){let me=new Uint8Array(4),ue=t.createTexture();t.bindTexture(U,ue),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Be=0;Be<Y;Be++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,ee,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(he+Be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return ue}let ae={};ae[t.TEXTURE_2D]=ie(t.TEXTURE_2D,t.TEXTURE_2D,1),ae[t.TEXTURE_CUBE_MAP]=ie(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[t.TEXTURE_2D_ARRAY]=ie(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ae[t.TEXTURE_3D]=ie(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),N(t.DEPTH_TEST),o.setFunc(Wr),Ke(!1),Ze(Bc),N(t.CULL_FACE),B(Ai);function N(U){f[U]!==!0&&(t.enable(U),f[U]=!0)}function Q(U){f[U]!==!1&&(t.disable(U),f[U]=!1)}function se(U,he){return h[U]!==he?(t.bindFramebuffer(U,he),h[U]=he,U===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=he),U===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=he),!0):!1}function oe(U,he){let Y=p,ee=!1;if(U){Y=u.get(he),Y===void 0&&(Y=[],u.set(he,Y));let me=U.textures;if(Y.length!==me.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let ue=0,Be=me.length;ue<Be;ue++)Y[ue]=t.COLOR_ATTACHMENT0+ue;Y.length=me.length,ee=!0}}else Y[0]!==t.BACK&&(Y[0]=t.BACK,ee=!0);ee&&t.drawBuffers(Y)}function we(U){return d!==U?(t.useProgram(U),d=U,!0):!1}let Se={[vr]:t.FUNC_ADD,[Vd]:t.FUNC_SUBTRACT,[Hd]:t.FUNC_REVERSE_SUBTRACT};Se[Wd]=t.MIN,Se[Xd]=t.MAX;let He={[qd]:t.ZERO,[jd]:t.ONE,[Yd]:t.SRC_COLOR,[ho]:t.SRC_ALPHA,[eu]:t.SRC_ALPHA_SATURATE,[$d]:t.DST_COLOR,[Zd]:t.DST_ALPHA,[Kd]:t.ONE_MINUS_SRC_COLOR,[uo]:t.ONE_MINUS_SRC_ALPHA,[Jd]:t.ONE_MINUS_DST_COLOR,[Qd]:t.ONE_MINUS_DST_ALPHA,[tu]:t.CONSTANT_COLOR,[iu]:t.ONE_MINUS_CONSTANT_COLOR,[ru]:t.CONSTANT_ALPHA,[nu]:t.ONE_MINUS_CONSTANT_ALPHA};function B(U,he,Y,ee,me,ue,Be,Mt,Xt,at){if(U===Ai){y===!0&&(Q(t.BLEND),y=!1);return}if(y===!1&&(N(t.BLEND),y=!0),U!==Gd){if(U!==g||at!==S){if((m!==vr||x!==vr)&&(t.blendEquation(t.FUNC_ADD),m=vr,x=vr),at)switch(U){case Sr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Gc:t.blendFunc(t.ONE,t.ONE);break;case Vc:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Hc:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Sr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Gc:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Vc:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Hc:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}w=null,M=null,k=null,T=null,b.set(0,0,0),L=0,g=U,S=at}return}me=me||he,ue=ue||Y,Be=Be||ee,(he!==m||me!==x)&&(t.blendEquationSeparate(Se[he],Se[me]),m=he,x=me),(Y!==w||ee!==M||ue!==k||Be!==T)&&(t.blendFuncSeparate(He[Y],He[ee],He[ue],He[Be]),w=Y,M=ee,k=ue,T=Be),(Mt.equals(b)===!1||Xt!==L)&&(t.blendColor(Mt.r,Mt.g,Mt.b,Xt),b.copy(Mt),L=Xt),g=U,S=!1}function li(U,he){U.side===Vt?Q(t.CULL_FACE):N(t.CULL_FACE);let Y=U.side===rt;he&&(Y=!Y),Ke(Y),U.blending===Sr&&U.transparent===!1?B(Ai):B(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);let ee=U.stencilWrite;a.setTest(ee),ee&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),mt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?N(t.SAMPLE_ALPHA_TO_COVERAGE):Q(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(U){v!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),v=U)}function Ze(U){U!==Fd?(N(t.CULL_FACE),U!==D&&(U===Bc?t.cullFace(t.BACK):U===zd?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Q(t.CULL_FACE),D=U}function Le(U){U!==P&&(H&&t.lineWidth(U),P=U)}function mt(U,he,Y){U?(N(t.POLYGON_OFFSET_FILL),(I!==he||V!==Y)&&(t.polygonOffset(he,Y),I=he,V=Y)):Q(t.POLYGON_OFFSET_FILL)}function Te(U){U?N(t.SCISSOR_TEST):Q(t.SCISSOR_TEST)}function R(U){U===void 0&&(U=t.TEXTURE0+j-1),te!==U&&(t.activeTexture(U),te=U)}function E(U,he,Y){Y===void 0&&(te===null?Y=t.TEXTURE0+j-1:Y=te);let ee=ne[Y];ee===void 0&&(ee={type:void 0,texture:void 0},ne[Y]=ee),(ee.type!==U||ee.texture!==he)&&(te!==Y&&(t.activeTexture(Y),te=Y),t.bindTexture(U,he||ae[U]),ee.type=U,ee.texture=he)}function W(){let U=ne[te];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function J(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ue(U){Fe.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),Fe.copy(U))}function _e(U){Z.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Z.copy(U))}function Qe(U,he){let Y=c.get(he);Y===void 0&&(Y=new WeakMap,c.set(he,Y));let ee=Y.get(U);ee===void 0&&(ee=t.getUniformBlockIndex(he,U.name),Y.set(U,ee))}function We(U,he){let ee=c.get(he).get(U);l.get(he)!==ee&&(t.uniformBlockBinding(he,ee,U.__bindingPointIndex),l.set(he,ee))}function ft(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},te=null,ne={},h={},u=new WeakMap,p=[],d=null,y=!1,g=null,m=null,w=null,M=null,x=null,k=null,T=null,b=new Ne(0,0,0),L=0,S=!1,v=null,D=null,P=null,I=null,V=null,Fe.set(0,0,t.canvas.width,t.canvas.height),Z.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:N,disable:Q,bindFramebuffer:se,drawBuffers:oe,useProgram:we,setBlending:B,setMaterial:li,setFlipSided:Ke,setCullFace:Ze,setLineWidth:Le,setPolygonOffset:mt,setScissorTest:Te,activeTexture:R,bindTexture:E,unbindTexture:W,compressedTexImage2D:J,compressedTexImage3D:re,texImage2D:Ee,texImage3D:Ie,updateUBOMapping:Qe,uniformBlockBinding:We,texStorage2D:et,texStorage3D:le,texSubImage2D:$,texSubImage3D:Ae,compressedTexSubImage2D:de,compressedTexSubImage3D:ve,scissor:Ue,viewport:_e,reset:ft}}var j4,Oy=C(()=>{je();ki();nn();j4={[La]:Na,[Ia]:Ua,[ka]:Oa,[Wr]:Pa,[Na]:La,[Ua]:Ia,[Oa]:ka,[Pa]:Wr}});function Yf(t,e,i,r){let n=Y4(r);switch(i){case Ha:return t*e;case Xa:return t*e;case qa:return t*e*2;case ja:return t*e/n.components*n.byteLength;case rs:return t*e/n.components*n.byteLength;case Ya:return t*e*2/n.components*n.byteLength;case ns:return t*e*2/n.components*n.byteLength;case Wa:return t*e*3/n.components*n.byteLength;case Ot:return t*e*4/n.components*n.byteLength;case ss:return t*e*4/n.components*n.byteLength;case os:case as:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ls:case cs:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case xo:case _o:return Math.max(t,16)*Math.max(e,8)/4;case vo:case Eo:return Math.max(t,8)*Math.max(e,8)/2;case wo:case Mo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ro:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Co:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case To:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Do:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Lo:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case No:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Io:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ko:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Po:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Uo:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Oo:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Fo:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case zo:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case fs:case Bo:case Go:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Ka:case Vo:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ho:case Wo:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Y4(t){switch(t){case Kt:case Ba:return{byteLength:1,components:1};case xr:case Ga:case rr:return{byteLength:2,components:1};case ts:case is:return{byteLength:2,components:4};case Si:case es:case ii:return{byteLength:4,components:1};case Va:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}var Fy=C(()=>{je()});function zy(t,e,i,r,n,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pe,f=new WeakMap,h,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(R,E){return p?new OffscreenCanvas(R,E):$r("canvas")}function y(R,E,W){let J=1,re=Te(R);if((re.width>W||re.height>W)&&(J=W/Math.max(re.width,re.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let $=Math.floor(J*re.width),Ae=Math.floor(J*re.height);h===void 0&&(h=d($,Ae));let de=E?d($,Ae):h;return de.width=$,de.height=Ae,de.getContext("2d").drawImage(R,0,0,$,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+$+"x"+Ae+")."),de}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),R;return R}function g(R){return R.generateMipmaps}function m(R){t.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(R,E,W,J,re=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=E;if(E===t.RED&&(W===t.FLOAT&&($=t.R32F),W===t.HALF_FLOAT&&($=t.R16F),W===t.UNSIGNED_BYTE&&($=t.R8)),E===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&($=t.R8UI),W===t.UNSIGNED_SHORT&&($=t.R16UI),W===t.UNSIGNED_INT&&($=t.R32UI),W===t.BYTE&&($=t.R8I),W===t.SHORT&&($=t.R16I),W===t.INT&&($=t.R32I)),E===t.RG&&(W===t.FLOAT&&($=t.RG32F),W===t.HALF_FLOAT&&($=t.RG16F),W===t.UNSIGNED_BYTE&&($=t.RG8)),E===t.RG_INTEGER&&(W===t.UNSIGNED_BYTE&&($=t.RG8UI),W===t.UNSIGNED_SHORT&&($=t.RG16UI),W===t.UNSIGNED_INT&&($=t.RG32UI),W===t.BYTE&&($=t.RG8I),W===t.SHORT&&($=t.RG16I),W===t.INT&&($=t.RG32I)),E===t.RGB_INTEGER&&(W===t.UNSIGNED_BYTE&&($=t.RGB8UI),W===t.UNSIGNED_SHORT&&($=t.RGB16UI),W===t.UNSIGNED_INT&&($=t.RGB32UI),W===t.BYTE&&($=t.RGB8I),W===t.SHORT&&($=t.RGB16I),W===t.INT&&($=t.RGB32I)),E===t.RGBA_INTEGER&&(W===t.UNSIGNED_BYTE&&($=t.RGBA8UI),W===t.UNSIGNED_SHORT&&($=t.RGBA16UI),W===t.UNSIGNED_INT&&($=t.RGBA32UI),W===t.BYTE&&($=t.RGBA8I),W===t.SHORT&&($=t.RGBA16I),W===t.INT&&($=t.RGBA32I)),E===t.RGB&&W===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),E===t.RGBA){let Ae=re?En:Ve.getTransfer(J);W===t.FLOAT&&($=t.RGBA32F),W===t.HALF_FLOAT&&($=t.RGBA16F),W===t.UNSIGNED_BYTE&&($=Ae===$e?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(R,E){let W;return R?E===null||E===Si||E===qi?W=t.DEPTH24_STENCIL8:E===ii?W=t.DEPTH32F_STENCIL8:E===xr&&(W=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Si||E===qi?W=t.DEPTH_COMPONENT24:E===ii?W=t.DEPTH_COMPONENT32F:E===xr&&(W=t.DEPTH_COMPONENT16),W}function k(R,E){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Yt&&R.minFilter!==ti?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function T(R){let E=R.target;E.removeEventListener("dispose",T),L(E),E.isVideoTexture&&f.delete(E)}function b(R){let E=R.target;E.removeEventListener("dispose",b),v(E)}function L(R){let E=r.get(R);if(E.__webglInit===void 0)return;let W=R.source,J=u.get(W);if(J){let re=J[E.__cacheKey];re.usedTimes--,re.usedTimes===0&&S(R),Object.keys(J).length===0&&u.delete(W)}r.remove(R)}function S(R){let E=r.get(R);t.deleteTexture(E.__webglTexture);let W=R.source,J=u.get(W);delete J[E.__cacheKey],o.memory.textures--}function v(R){let E=r.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),r.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let re=0;re<E.__webglFramebuffer[J].length;re++)t.deleteFramebuffer(E.__webglFramebuffer[J][re]);else t.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)t.deleteFramebuffer(E.__webglFramebuffer[J]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let W=R.textures;for(let J=0,re=W.length;J<re;J++){let $=r.get(W[J]);$.__webglTexture&&(t.deleteTexture($.__webglTexture),o.memory.textures--),r.remove(W[J])}r.remove(R)}let D=0;function P(){D=0}function I(){let R=D;return R>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+n.maxTextures),D+=1,R}function V(R){let E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function j(R,E){let W=r.get(R);if(R.isVideoTexture&&Le(R),R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){let J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(W,R,E);return}}i.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+E)}function H(R,E){let W=r.get(R);if(R.version>0&&W.__version!==R.version){Z(W,R,E);return}i.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+E)}function K(R,E){let W=r.get(R);if(R.version>0&&W.__version!==R.version){Z(W,R,E);return}i.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+E)}function G(R,E){let W=r.get(R);if(R.version>0&&W.__version!==R.version){ie(W,R,E);return}i.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+E)}let te={[go]:t.REPEAT,[Wi]:t.CLAMP_TO_EDGE,[yo]:t.MIRRORED_REPEAT},ne={[Yt]:t.NEAREST,[pu]:t.NEAREST_MIPMAP_NEAREST,[So]:t.NEAREST_MIPMAP_LINEAR,[ti]:t.LINEAR,[za]:t.LINEAR_MIPMAP_NEAREST,[Xi]:t.LINEAR_MIPMAP_LINEAR},ye={[vu]:t.NEVER,[Ru]:t.ALWAYS,[xu]:t.LESS,[Za]:t.LEQUAL,[Eu]:t.EQUAL,[Mu]:t.GEQUAL,[_u]:t.GREATER,[wu]:t.NOTEQUAL};function xe(R,E){if(E.type===ii&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ti||E.magFilter===za||E.magFilter===So||E.magFilter===Xi||E.minFilter===ti||E.minFilter===za||E.minFilter===So||E.minFilter===Xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,te[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,te[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,te[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,ne[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,ne[E.minFilter]),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,ye[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Yt||E.minFilter!==So&&E.minFilter!==Xi||E.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,n.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Fe(R,E){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",T));let J=E.source,re=u.get(J);re===void 0&&(re={},u.set(J,re));let $=V(E);if($!==R.__cacheKey){re[$]===void 0&&(re[$]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,W=!0),re[$].usedTimes++;let Ae=re[R.__cacheKey];Ae!==void 0&&(re[R.__cacheKey].usedTimes--,Ae.usedTimes===0&&S(E)),R.__cacheKey=$,R.__webglTexture=re[$].texture}return W}function Z(R,E,W){let J=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=t.TEXTURE_3D);let re=Fe(R,E),$=E.source;i.bindTexture(J,R.__webglTexture,t.TEXTURE0+W);let Ae=r.get($);if($.version!==Ae.__version||re===!0){i.activeTexture(t.TEXTURE0+W);let de=Ve.getPrimaries(Ve.workingColorSpace),ve=E.colorSpace===Ti?null:Ve.getPrimaries(E.colorSpace),et=E.colorSpace===Ti||de===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let le=y(E.image,!1,n.maxTextureSize);le=mt(E,le);let Ee=s.convert(E.format,E.colorSpace),Ie=s.convert(E.type),Ue=M(E.internalFormat,Ee,Ie,E.colorSpace,E.isVideoTexture);xe(J,E);let _e,Qe=E.mipmaps,We=E.isVideoTexture!==!0,ft=Ae.__version===void 0||re===!0,U=$.dataReady,he=k(E,le);if(E.isDepthTexture)Ue=x(E.format===sr,E.type),ft&&(We?i.texStorage2D(t.TEXTURE_2D,1,Ue,le.width,le.height):i.texImage2D(t.TEXTURE_2D,0,Ue,le.width,le.height,0,Ee,Ie,null));else if(E.isDataTexture)if(Qe.length>0){We&&ft&&i.texStorage2D(t.TEXTURE_2D,he,Ue,Qe[0].width,Qe[0].height);for(let Y=0,ee=Qe.length;Y<ee;Y++)_e=Qe[Y],We?U&&i.texSubImage2D(t.TEXTURE_2D,Y,0,0,_e.width,_e.height,Ee,Ie,_e.data):i.texImage2D(t.TEXTURE_2D,Y,Ue,_e.width,_e.height,0,Ee,Ie,_e.data);E.generateMipmaps=!1}else We?(ft&&i.texStorage2D(t.TEXTURE_2D,he,Ue,le.width,le.height),U&&i.texSubImage2D(t.TEXTURE_2D,0,0,0,le.width,le.height,Ee,Ie,le.data)):i.texImage2D(t.TEXTURE_2D,0,Ue,le.width,le.height,0,Ee,Ie,le.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){We&&ft&&i.texStorage3D(t.TEXTURE_2D_ARRAY,he,Ue,Qe[0].width,Qe[0].height,le.depth);for(let Y=0,ee=Qe.length;Y<ee;Y++)if(_e=Qe[Y],E.format!==Ot)if(Ee!==null)if(We){if(U)if(E.layerUpdates.size>0){let me=Yf(_e.width,_e.height,E.format,E.type);for(let ue of E.layerUpdates){let Be=_e.data.subarray(ue*me/_e.data.BYTES_PER_ELEMENT,(ue+1)*me/_e.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,ue,_e.width,_e.height,1,Ee,Be)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,_e.width,_e.height,le.depth,Ee,_e.data)}else i.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,Ue,_e.width,_e.height,le.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?U&&i.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,_e.width,_e.height,le.depth,Ee,Ie,_e.data):i.texImage3D(t.TEXTURE_2D_ARRAY,Y,Ue,_e.width,_e.height,le.depth,0,Ee,Ie,_e.data)}else{We&&ft&&i.texStorage2D(t.TEXTURE_2D,he,Ue,Qe[0].width,Qe[0].height);for(let Y=0,ee=Qe.length;Y<ee;Y++)_e=Qe[Y],E.format!==Ot?Ee!==null?We?U&&i.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,_e.width,_e.height,Ee,_e.data):i.compressedTexImage2D(t.TEXTURE_2D,Y,Ue,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?U&&i.texSubImage2D(t.TEXTURE_2D,Y,0,0,_e.width,_e.height,Ee,Ie,_e.data):i.texImage2D(t.TEXTURE_2D,Y,Ue,_e.width,_e.height,0,Ee,Ie,_e.data)}else if(E.isDataArrayTexture)if(We){if(ft&&i.texStorage3D(t.TEXTURE_2D_ARRAY,he,Ue,le.width,le.height,le.depth),U)if(E.layerUpdates.size>0){let Y=Yf(le.width,le.height,E.format,E.type);for(let ee of E.layerUpdates){let me=le.data.subarray(ee*Y/le.data.BYTES_PER_ELEMENT,(ee+1)*Y/le.data.BYTES_PER_ELEMENT);i.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ee,le.width,le.height,1,Ee,Ie,me)}E.clearLayerUpdates()}else i.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Ee,Ie,le.data)}else i.texImage3D(t.TEXTURE_2D_ARRAY,0,Ue,le.width,le.height,le.depth,0,Ee,Ie,le.data);else if(E.isData3DTexture)We?(ft&&i.texStorage3D(t.TEXTURE_3D,he,Ue,le.width,le.height,le.depth),U&&i.texSubImage3D(t.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Ee,Ie,le.data)):i.texImage3D(t.TEXTURE_3D,0,Ue,le.width,le.height,le.depth,0,Ee,Ie,le.data);else if(E.isFramebufferTexture){if(ft)if(We)i.texStorage2D(t.TEXTURE_2D,he,Ue,le.width,le.height);else{let Y=le.width,ee=le.height;for(let me=0;me<he;me++)i.texImage2D(t.TEXTURE_2D,me,Ue,Y,ee,0,Ee,Ie,null),Y>>=1,ee>>=1}}else if(Qe.length>0){if(We&&ft){let Y=Te(Qe[0]);i.texStorage2D(t.TEXTURE_2D,he,Ue,Y.width,Y.height)}for(let Y=0,ee=Qe.length;Y<ee;Y++)_e=Qe[Y],We?U&&i.texSubImage2D(t.TEXTURE_2D,Y,0,0,Ee,Ie,_e):i.texImage2D(t.TEXTURE_2D,Y,Ue,Ee,Ie,_e);E.generateMipmaps=!1}else if(We){if(ft){let Y=Te(le);i.texStorage2D(t.TEXTURE_2D,he,Ue,Y.width,Y.height)}U&&i.texSubImage2D(t.TEXTURE_2D,0,0,0,Ee,Ie,le)}else i.texImage2D(t.TEXTURE_2D,0,Ue,Ee,Ie,le);g(E)&&m(J),Ae.__version=$.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ie(R,E,W){if(E.image.length!==6)return;let J=Fe(R,E),re=E.source;i.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+W);let $=r.get(re);if(re.version!==$.__version||J===!0){i.activeTexture(t.TEXTURE0+W);let Ae=Ve.getPrimaries(Ve.workingColorSpace),de=E.colorSpace===Ti?null:Ve.getPrimaries(E.colorSpace),ve=E.colorSpace===Ti||Ae===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let et=E.isCompressedTexture||E.image[0].isCompressedTexture,le=E.image[0]&&E.image[0].isDataTexture,Ee=[];for(let ee=0;ee<6;ee++)!et&&!le?Ee[ee]=y(E.image[ee],!0,n.maxCubemapSize):Ee[ee]=le?E.image[ee].image:E.image[ee],Ee[ee]=mt(E,Ee[ee]);let Ie=Ee[0],Ue=s.convert(E.format,E.colorSpace),_e=s.convert(E.type),Qe=M(E.internalFormat,Ue,_e,E.colorSpace),We=E.isVideoTexture!==!0,ft=$.__version===void 0||J===!0,U=re.dataReady,he=k(E,Ie);xe(t.TEXTURE_CUBE_MAP,E);let Y;if(et){We&&ft&&i.texStorage2D(t.TEXTURE_CUBE_MAP,he,Qe,Ie.width,Ie.height);for(let ee=0;ee<6;ee++){Y=Ee[ee].mipmaps;for(let me=0;me<Y.length;me++){let ue=Y[me];E.format!==Ot?Ue!==null?We?U&&i.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me,0,0,ue.width,ue.height,Ue,ue.data):i.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me,Qe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?U&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me,0,0,ue.width,ue.height,Ue,_e,ue.data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me,Qe,ue.width,ue.height,0,Ue,_e,ue.data)}}}else{if(Y=E.mipmaps,We&&ft){Y.length>0&&he++;let ee=Te(Ee[0]);i.texStorage2D(t.TEXTURE_CUBE_MAP,he,Qe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(le){We?U&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ee[ee].width,Ee[ee].height,Ue,_e,Ee[ee].data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Qe,Ee[ee].width,Ee[ee].height,0,Ue,_e,Ee[ee].data);for(let me=0;me<Y.length;me++){let Be=Y[me].image[ee].image;We?U&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me+1,0,0,Be.width,Be.height,Ue,_e,Be.data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me+1,Qe,Be.width,Be.height,0,Ue,_e,Be.data)}}else{We?U&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ue,_e,Ee[ee]):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Qe,Ue,_e,Ee[ee]);for(let me=0;me<Y.length;me++){let ue=Y[me];We?U&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me+1,0,0,Ue,_e,ue.image[ee]):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me+1,Qe,Ue,_e,ue.image[ee])}}}g(E)&&m(t.TEXTURE_CUBE_MAP),$.__version=re.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ae(R,E,W,J,re,$){let Ae=s.convert(W.format,W.colorSpace),de=s.convert(W.type),ve=M(W.internalFormat,Ae,de,W.colorSpace),et=r.get(E),le=r.get(W);if(le.__renderTarget=E,!et.__hasExternalTextures){let Ee=Math.max(1,E.width>>$),Ie=Math.max(1,E.height>>$);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?i.texImage3D(re,$,ve,Ee,Ie,E.depth,0,Ae,de,null):i.texImage2D(re,$,ve,Ee,Ie,0,Ae,de,null)}i.bindFramebuffer(t.FRAMEBUFFER,R),Ze(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,re,le.__webglTexture,0,Ke(E)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,re,le.__webglTexture,$),i.bindFramebuffer(t.FRAMEBUFFER,null)}function N(R,E,W){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer){let J=E.depthTexture,re=J&&J.isDepthTexture?J.type:null,$=x(E.stencilBuffer,re),Ae=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=Ke(E);Ze(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,$,E.width,E.height):W?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,$,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,$,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ae,t.RENDERBUFFER,R)}else{let J=E.textures;for(let re=0;re<J.length;re++){let $=J[re],Ae=s.convert($.format,$.colorSpace),de=s.convert($.type),ve=M($.internalFormat,Ae,de,$.colorSpace),et=Ke(E);W&&Ze(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,et,ve,E.width,E.height):Ze(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,et,ve,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ve,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Q(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=r.get(E.depthTexture);J.__renderTarget=E,(!J.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),j(E.depthTexture,0);let re=J.__webglTexture,$=Ke(E);if(E.depthTexture.format===nr)Ze(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0);else if(E.depthTexture.format===sr)Ze(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function se(R){let E=r.get(R),W=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){let J=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),J){let re=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,J.removeEventListener("dispose",re)};J.addEventListener("dispose",re),E.__depthDisposeCallback=re}E.__boundDepthTexture=J}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Q(E.__webglFramebuffer,R)}else if(W){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(i.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]===void 0)E.__webglDepthbuffer[J]=t.createRenderbuffer(),N(E.__webglDepthbuffer[J],R,!1);else{let re=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=E.__webglDepthbuffer[J];t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,re,t.RENDERBUFFER,$)}}else if(i.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),N(E.__webglDepthbuffer,R,!1);else{let J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,re)}i.bindFramebuffer(t.FRAMEBUFFER,null)}function oe(R,E,W){let J=r.get(R);E!==void 0&&ae(J.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&se(R)}function we(R){let E=R.texture,W=r.get(R),J=r.get(E);R.addEventListener("dispose",b);let re=R.textures,$=R.isWebGLCubeRenderTarget===!0,Ae=re.length>1;if(Ae||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=E.version,o.memory.textures++),$){W.__webglFramebuffer=[];for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[de]=[];for(let ve=0;ve<E.mipmaps.length;ve++)W.__webglFramebuffer[de][ve]=t.createFramebuffer()}else W.__webglFramebuffer[de]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let de=0;de<E.mipmaps.length;de++)W.__webglFramebuffer[de]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(Ae)for(let de=0,ve=re.length;de<ve;de++){let et=r.get(re[de]);et.__webglTexture===void 0&&(et.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Ze(R)===!1){W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let de=0;de<re.length;de++){let ve=re[de];W.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[de]);let et=s.convert(ve.format,ve.colorSpace),le=s.convert(ve.type),Ee=M(ve.internalFormat,et,le,ve.colorSpace,R.isXRRenderTarget===!0),Ie=Ke(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,Ee,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,W.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),N(W.__webglDepthRenderbuffer,R,!0)),i.bindFramebuffer(t.FRAMEBUFFER,null)}}if($){i.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),xe(t.TEXTURE_CUBE_MAP,E);for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0)for(let ve=0;ve<E.mipmaps.length;ve++)ae(W.__webglFramebuffer[de][ve],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,ve);else ae(W.__webglFramebuffer[de],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);g(E)&&m(t.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ae){for(let de=0,ve=re.length;de<ve;de++){let et=re[de],le=r.get(et);i.bindTexture(t.TEXTURE_2D,le.__webglTexture),xe(t.TEXTURE_2D,et),ae(W.__webglFramebuffer,R,et,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),g(et)&&m(t.TEXTURE_2D)}i.unbindTexture()}else{let de=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(de=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),i.bindTexture(de,J.__webglTexture),xe(de,E),E.mipmaps&&E.mipmaps.length>0)for(let ve=0;ve<E.mipmaps.length;ve++)ae(W.__webglFramebuffer[ve],R,E,t.COLOR_ATTACHMENT0,de,ve);else ae(W.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,de,0);g(E)&&m(de),i.unbindTexture()}R.depthBuffer&&se(R)}function Se(R){let E=R.textures;for(let W=0,J=E.length;W<J;W++){let re=E[W];if(g(re)){let $=w(R),Ae=r.get(re).__webglTexture;i.bindTexture($,Ae),m($),i.unbindTexture()}}}let He=[],B=[];function li(R){if(R.samples>0){if(Ze(R)===!1){let E=R.textures,W=R.width,J=R.height,re=t.COLOR_BUFFER_BIT,$=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ae=r.get(R),de=E.length>1;if(de)for(let ve=0;ve<E.length;ve++)i.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),i.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);i.bindFramebuffer(t.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let ve=0;ve<E.length;ve++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),de){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[ve]);let et=r.get(E[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,et,0)}t.blitFramebuffer(0,0,W,J,0,0,W,J,re,t.NEAREST),l===!0&&(He.length=0,B.length=0,He.push(t.COLOR_ATTACHMENT0+ve),R.depthBuffer&&R.resolveDepthBuffer===!1&&(He.push($),B.push($),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,B)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,He))}if(i.bindFramebuffer(t.READ_FRAMEBUFFER,null),i.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let ve=0;ve<E.length;ve++){i.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[ve]);let et=r.get(E[ve]).__webglTexture;i.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,et,0)}i.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let E=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function Ke(R){return Math.min(n.maxSamples,R.samples)}function Ze(R){let E=r.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Le(R){let E=o.render.frame;f.get(R)!==E&&(f.set(R,E),R.update())}function mt(R,E){let W=R.colorSpace,J=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==ji&&W!==Ti&&(Ve.getTransfer(W)===$e?(J!==Ot||re!==Kt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}function Te(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=P,this.setTexture2D=j,this.setTexture2DArray=H,this.setTexture3D=K,this.setTextureCube=G,this.rebindTextures=oe,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=li,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Ze}var By=C(()=>{je();Jr();fr();oi();Fy()});function Gy(t,e){function i(r,n=Ti){let s,o=Ve.getTransfer(n);if(r===Kt)return t.UNSIGNED_BYTE;if(r===ts)return t.UNSIGNED_SHORT_4_4_4_4;if(r===is)return t.UNSIGNED_SHORT_5_5_5_1;if(r===Va)return t.UNSIGNED_INT_5_9_9_9_REV;if(r===Ba)return t.BYTE;if(r===Ga)return t.SHORT;if(r===xr)return t.UNSIGNED_SHORT;if(r===es)return t.INT;if(r===Si)return t.UNSIGNED_INT;if(r===ii)return t.FLOAT;if(r===rr)return t.HALF_FLOAT;if(r===Ha)return t.ALPHA;if(r===Wa)return t.RGB;if(r===Ot)return t.RGBA;if(r===Xa)return t.LUMINANCE;if(r===qa)return t.LUMINANCE_ALPHA;if(r===nr)return t.DEPTH_COMPONENT;if(r===sr)return t.DEPTH_STENCIL;if(r===ja)return t.RED;if(r===rs)return t.RED_INTEGER;if(r===Ya)return t.RG;if(r===ns)return t.RG_INTEGER;if(r===ss)return t.RGBA_INTEGER;if(r===os||r===as||r===ls||r===cs)if(o===$e)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===os)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===as)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===cs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===os)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===as)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ls)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===cs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===vo||r===xo||r===Eo||r===_o)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===vo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Eo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===_o)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===wo||r===Mo||r===Ro)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===wo||r===Mo)return o===$e?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===Ro)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===bo||r===Ao||r===Co||r===To||r===Do||r===Lo||r===No||r===Io||r===ko||r===Po||r===Uo||r===Oo||r===Fo||r===zo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===bo)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ao)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Co)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===To)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Do)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Lo)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===No)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Io)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ko)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Po)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Uo)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Oo)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Fo)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===zo)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===fs||r===Bo||r===Go)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===fs)return o===$e?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Bo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Go)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ka||r===Vo||r===Ho||r===Wo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(r===fs)return s.COMPRESSED_RED_RGTC1_EXT;if(r===Vo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ho)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Wo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qi?t.UNSIGNED_INT_24_8:t[r]!==void 0?t[r]:null}return{convert:i}}var Vy=C(()=>{je();fr()});var Fl,Hy=C(()=>{Cs();Fl=class extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}});var K4,Gs,Wy=C(()=>{vt();hl();K4={type:"move"},Gs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let i=this._hand;if(i)for(let r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let n=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let g=i.getJointPose(y,r),m=this._getHandJoint(c,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=f.position.distanceTo(h.position),p=.02,d=.005;c.inputState.pinching&&u>p+d?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-d&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=i.getPose(e.gripSpace,r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=i.getPose(e.targetRaySpace,r),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(K4)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){let r=new Qi;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}});var Z4,Q4,zl,Xy=C(()=>{Af();Ls();on();br();Z4=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Q4=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,zl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){let n=new Ct,s=e.properties.get(n);s.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let i=e.cameras[0].viewport,r=new ai({vertexShader:Z4,fragmentShader:Q4,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new wt(new Ds(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}});var Bl,qy=C(()=>{Hy();bn();Cs();oi();vt();nn();si();bf();Ns();Wy();zf();je();Xy();Bl=class extends di{constructor(e,i){super();let r=this,n=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,u=null,p=null,d=null,y=new zl,g=i.getContextAttributes(),m=null,w=null,M=[],x=[],k=new Pe,T=null,b=new Lt;b.viewport=new lt;let L=new Lt;L.viewport=new lt;let S=[b,L],v=new Fl,D=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ie=M[Z];return ie===void 0&&(ie=new Gs,M[Z]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Z){let ie=M[Z];return ie===void 0&&(ie=new Gs,M[Z]=ie),ie.getGripSpace()},this.getHand=function(Z){let ie=M[Z];return ie===void 0&&(ie=new Gs,M[Z]=ie),ie.getHandSpace()};function I(Z){let ie=x.indexOf(Z.inputSource);if(ie===-1)return;let ae=M[ie];ae!==void 0&&(ae.update(Z.inputSource,Z.frame,c||o),ae.dispatchEvent({type:Z.type,data:Z.inputSource}))}function V(){n.removeEventListener("select",I),n.removeEventListener("selectstart",I),n.removeEventListener("selectend",I),n.removeEventListener("squeeze",I),n.removeEventListener("squeezestart",I),n.removeEventListener("squeezeend",I),n.removeEventListener("end",V),n.removeEventListener("inputsourceschange",j);for(let Z=0;Z<M.length;Z++){let ie=x[Z];ie!==null&&(x[Z]=null,M[Z].disconnect(ie))}D=null,P=null,y.reset(),e.setRenderTarget(m),p=null,u=null,h=null,n=null,w=null,Fe.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h},this.getFrame=function(){return d},this.getSession=function(){return n},this.setSession=async function(Z){if(n=Z,n!==null){if(m=e.getRenderTarget(),n.addEventListener("select",I),n.addEventListener("selectstart",I),n.addEventListener("selectend",I),n.addEventListener("squeeze",I),n.addEventListener("squeezestart",I),n.addEventListener("squeezeend",I),n.addEventListener("end",V),n.addEventListener("inputsourceschange",j),g.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(k),n.renderState.layers===void 0){let ie={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(n,i,ie),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new ui(p.framebufferWidth,p.framebufferHeight,{format:Ot,type:Kt,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ie=null,ae=null,N=null;g.depth&&(N=g.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ie=g.stencil?sr:nr,ae=g.stencil?qi:Si);let Q={colorFormat:i.RGBA8,depthFormat:N,scaleFactor:s};h=new XRWebGLBinding(n,i),u=h.createProjectionLayer(Q),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),w=new ui(u.textureWidth,u.textureHeight,{format:Ot,type:Kt,depthTexture:new zs(u.textureWidth,u.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),Fe.setContext(n),Fe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function j(Z){for(let ie=0;ie<Z.removed.length;ie++){let ae=Z.removed[ie],N=x.indexOf(ae);N>=0&&(x[N]=null,M[N].disconnect(ae))}for(let ie=0;ie<Z.added.length;ie++){let ae=Z.added[ie],N=x.indexOf(ae);if(N===-1){for(let se=0;se<M.length;se++)if(se>=x.length){x.push(ae),N=se;break}else if(x[se]===null){x[se]=ae,N=se;break}if(N===-1)break}let Q=M[N];Q&&Q.connect(ae)}}let H=new O,K=new O;function G(Z,ie,ae){H.setFromMatrixPosition(ie.matrixWorld),K.setFromMatrixPosition(ae.matrixWorld);let N=H.distanceTo(K),Q=ie.projectionMatrix.elements,se=ae.projectionMatrix.elements,oe=Q[14]/(Q[10]-1),we=Q[14]/(Q[10]+1),Se=(Q[9]+1)/Q[5],He=(Q[9]-1)/Q[5],B=(Q[8]-1)/Q[0],li=(se[8]+1)/se[0],Ke=oe*B,Ze=oe*li,Le=N/(-B+li),mt=Le*-B;if(ie.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(mt),Z.translateZ(Le),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Q[10]===-1)Z.projectionMatrix.copy(ie.projectionMatrix),Z.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let Te=oe+Le,R=we+Le,E=Ke-mt,W=Ze+(N-mt),J=Se*we/R*Te,re=He*we/R*Te;Z.projectionMatrix.makePerspective(E,W,J,re,Te,R),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function te(Z,ie){ie===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ie.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(n===null)return;let ie=Z.near,ae=Z.far;y.texture!==null&&(y.depthNear>0&&(ie=y.depthNear),y.depthFar>0&&(ae=y.depthFar)),v.near=L.near=b.near=ie,v.far=L.far=b.far=ae,(D!==v.near||P!==v.far)&&(n.updateRenderState({depthNear:v.near,depthFar:v.far}),D=v.near,P=v.far),b.layers.mask=Z.layers.mask|2,L.layers.mask=Z.layers.mask|4,v.layers.mask=b.layers.mask|L.layers.mask;let N=Z.parent,Q=v.cameras;te(v,N);for(let se=0;se<Q.length;se++)te(Q[se],N);Q.length===2?G(v,b,L):v.projectionMatrix.copy(b.projectionMatrix),ne(Z,v,N)};function ne(Z,ie,ae){ae===null?Z.matrix.copy(ie.matrixWorld):(Z.matrix.copy(ae.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ie.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ie.projectionMatrix),Z.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Xo*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(v)};let ye=null;function xe(Z,ie){if(f=ie.getViewerPose(c||o),d=ie,f!==null){let ae=f.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let N=!1;ae.length!==v.cameras.length&&(v.cameras.length=0,N=!0);for(let se=0;se<ae.length;se++){let oe=ae[se],we=null;if(p!==null)we=p.getViewport(oe);else{let He=h.getViewSubImage(u,oe);we=He.viewport,se===0&&(e.setRenderTargetTextures(w,He.colorTexture,u.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(w))}let Se=S[se];Se===void 0&&(Se=new Lt,Se.layers.enable(se),Se.viewport=new lt,S[se]=Se),Se.matrix.fromArray(oe.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(oe.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(we.x,we.y,we.width,we.height),se===0&&(v.matrix.copy(Se.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),N===!0&&v.cameras.push(Se)}let Q=n.enabledFeatures;if(Q&&Q.includes("depth-sensing")){let se=h.getDepthInformation(ae[0]);se&&se.isValid&&se.texture&&y.init(e,se,n.renderState)}}for(let ae=0;ae<M.length;ae++){let N=x[ae],Q=M[ae];N!==null&&Q!==void 0&&Q.update(N,ie,c||o)}ye&&ye(Z,ie),ie.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ie}),d=null}let Fe=new Ml;Fe.setAnimationLoop(xe),this.setAnimationLoop=function(Z){ye=Z},this.dispose=function(){}}}});function jy(t,e){function i(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function r(g,m){m.color.getRGB(g.fogColor.value,Rl(t)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function n(g,m,w,M,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),h(g,m)):m.isMeshPhongMaterial?(s(g,m),f(g,m)):m.isMeshStandardMaterial?(s(g,m),u(g,m),m.isMeshPhysicalMaterial&&p(g,m,x)):m.isMeshMatcapMaterial?(s(g,m),d(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),y(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,w,M):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,i(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,i(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,i(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===rt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,i(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===rt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,i(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,i(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,i(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let w=e.get(m),M=w.envMap,x=w.envMapRotation;M&&(g.envMap.value=M,Un.copy(x),Un.x*=-1,Un.y*=-1,Un.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),g.envMapRotation.value.setFromMatrix4($4.makeRotationFromEuler(Un)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,i(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,i(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,i(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,w,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*w,g.scale.value=M*.5,m.map&&(g.map.value=m.map,i(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,i(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,i(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,i(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function f(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,i(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,i(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,w){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,i(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,i(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,i(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,i(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,i(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===rt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,i(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,i(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,i(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,i(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,i(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,i(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,i(m.specularIntensityMap,g.specularIntensityMapTransform))}function d(g,m){m.matcap&&(g.matcap.value=m.matcap)}function y(g,m){let w=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}var Un,$4,Yy=C(()=>{je();Nn();Zr();Ni();Un=new _t,$4=new Ye});function Ky(t,e,i,r){let n={},s={},o=[],a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,M){let x=M.program;r.uniformBlockBinding(w,x)}function c(w,M){let x=n[w.id];x===void 0&&(d(w),x=f(w),n[w.id]=x,w.addEventListener("dispose",g));let k=M.program;r.updateUBOMapping(w,k);let T=e.render.frame;s[w.id]!==T&&(u(w),s[w.id]=T)}function f(w){let M=h();w.__bindingPointIndex=M;let x=t.createBuffer(),k=w.__size,T=w.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,k,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,M,x),x}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){let M=n[w.id],x=w.uniforms,k=w.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let T=0,b=x.length;T<b;T++){let L=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,v=L.length;S<v;S++){let D=L[S];if(p(D,T,S,k)===!0){let P=D.__offset,I=Array.isArray(D.value)?D.value:[D.value],V=0;for(let j=0;j<I.length;j++){let H=I[j],K=y(H);typeof H=="number"||typeof H=="boolean"?(D.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,P+V,D.__data)):H.isMatrix3?(D.__data[0]=H.elements[0],D.__data[1]=H.elements[1],D.__data[2]=H.elements[2],D.__data[3]=0,D.__data[4]=H.elements[3],D.__data[5]=H.elements[4],D.__data[6]=H.elements[5],D.__data[7]=0,D.__data[8]=H.elements[6],D.__data[9]=H.elements[7],D.__data[10]=H.elements[8],D.__data[11]=0):(H.toArray(D.__data,V),V+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,P,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(w,M,x,k){let T=w.value,b=M+"_"+x;if(k[b]===void 0)return typeof T=="number"||typeof T=="boolean"?k[b]=T:k[b]=T.clone(),!0;{let L=k[b];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return k[b]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function d(w){let M=w.uniforms,x=0,k=16;for(let b=0,L=M.length;b<L;b++){let S=Array.isArray(M[b])?M[b]:[M[b]];for(let v=0,D=S.length;v<D;v++){let P=S[v],I=Array.isArray(P.value)?P.value:[P.value];for(let V=0,j=I.length;V<j;V++){let H=I[V],K=y(H),G=x%k,te=G%K.boundary,ne=G+te;x+=te,ne!==0&&k-ne<K.storage&&(x+=k-ne),P.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=x,x+=K.storage}}}let T=x%k;return T>0&&(x+=k-T),w.__size=x,w.__cache={},this}function y(w){let M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function g(w){let M=w.target;M.removeEventListener("dispose",g);let x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(n[M.id]),delete n[M.id],delete s[M.id]}function m(){for(let w in n)t.deleteBuffer(n[w]);o=[],n={},s={}}return{bind:l,update:c,dispose:m}}var Zy=C(()=>{});var Gl,Qy=C(()=>{je();ki();Rf();Ni();vt();nn();bf();c0();d2();p2();g2();S2();x2();R2();P2();O2();z2();G2();H2();X2();j2();yy();vy();wy();Cy();Ns();Py();Oy();By();Wf();Vy();qy();Yy();Zy();Jr();fr();Gl=class{constructor(e={}){let{canvas:i=Uu(),context:r=null,depth:n=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=r.getContextAttributes().alpha}else p=o;let d=new Uint32Array(4),y=new Int32Array(4),g=null,m=null,w=[],M=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ri,this.toneMapping=Ci,this.toneMappingExposure=1;let x=this,k=!1,T=0,b=0,L=null,S=-1,v=null,D=new lt,P=new lt,I=null,V=new Ne(0),j=0,H=i.width,K=i.height,G=1,te=null,ne=null,ye=new lt(0,0,H,K),xe=new lt(0,0,H,K),Fe=!1,Z=new Ts,ie=!1,ae=!1,N=new Ye,Q=new Ye,se=new O,oe=new lt,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Se=!1;function He(){return L===null?G:1}let B=r;function li(_,F){return i.getContext(_,F)}try{let _={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${"170"}`),i.addEventListener("webglcontextlost",ee,!1),i.addEventListener("webglcontextrestored",me,!1),i.addEventListener("webglcontextcreationerror",ue,!1),B===null){let F="webgl2";if(B=li(F,_),B===null)throw li(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let Ke,Ze,Le,mt,Te,R,E,W,J,re,$,Ae,de,ve,et,le,Ee,Ie,Ue,_e,Qe,We,ft,U;function he(){Ke=new U2(B),Ke.init(),We=new Gy(B,Ke),Ze=new y2(B,Ke,e,We),Le=new Uy(B,Ke),Ze.reverseDepthBuffer&&u&&Le.buffers.depth.setReversed(!0),mt=new V2(B),Te=new Sy,R=new zy(B,Ke,Le,Te,Ze,We,mt),E=new M2(x),W=new k2(x),J=new l0(B),ft=new u2(B,J),re=new F2(B,J,mt,ft),$=new q2(B,re,J,mt),Ue=new W2(B,Ze,R),le=new v2(Te),Ae=new gy(x,E,W,Ke,Ze,ft,le),de=new jy(x,Te),ve=new _y,et=new Ay(Ke),Ie=new h2(x,E,W,Le,$,p,l),Ee=new ky(x,$,Ze),U=new Ky(B,mt,Ze,Le),_e=new m2(B,Ke,mt),Qe=new B2(B,Ke,mt),mt.programs=Ae.programs,x.capabilities=Ze,x.extensions=Ke,x.properties=Te,x.renderLists=ve,x.shadowMap=Ee,x.state=Le,x.info=mt}he();let Y=new Bl(x,B);this.xr=Y,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let _=Ke.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=Ke.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(_){_!==void 0&&(G=_,this.setSize(H,K,!1))},this.getSize=function(_){return _.set(H,K)},this.setSize=function(_,F,X=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=_,K=F,i.width=Math.floor(_*G),i.height=Math.floor(F*G),X===!0&&(i.style.width=_+"px",i.style.height=F+"px"),this.setViewport(0,0,_,F)},this.getDrawingBufferSize=function(_){return _.set(H*G,K*G).floor()},this.setDrawingBufferSize=function(_,F,X){H=_,K=F,G=X,i.width=Math.floor(_*X),i.height=Math.floor(F*X),this.setViewport(0,0,_,F)},this.getCurrentViewport=function(_){return _.copy(D)},this.getViewport=function(_){return _.copy(ye)},this.setViewport=function(_,F,X,q){_.isVector4?ye.set(_.x,_.y,_.z,_.w):ye.set(_,F,X,q),Le.viewport(D.copy(ye).multiplyScalar(G).round())},this.getScissor=function(_){return _.copy(xe)},this.setScissor=function(_,F,X,q){_.isVector4?xe.set(_.x,_.y,_.z,_.w):xe.set(_,F,X,q),Le.scissor(P.copy(xe).multiplyScalar(G).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(_){Le.setScissorTest(Fe=_)},this.setOpaqueSort=function(_){te=_},this.setTransparentSort=function(_){ne=_},this.getClearColor=function(_){return _.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(_=!0,F=!0,X=!0){let q=0;if(_){let z=!1;if(L!==null){let ce=L.texture.format;z=ce===ss||ce===ns||ce===rs}if(z){let ce=L.texture.type,pe=ce===Kt||ce===Si||ce===xr||ce===qi||ce===ts||ce===is,Me=Ie.getClearColor(),Re=Ie.getClearAlpha(),Oe=Me.r,Ge=Me.g,be=Me.b;pe?(d[0]=Oe,d[1]=Ge,d[2]=be,d[3]=Re,B.clearBufferuiv(B.COLOR,0,d)):(y[0]=Oe,y[1]=Ge,y[2]=be,y[3]=Re,B.clearBufferiv(B.COLOR,0,y))}else q|=B.COLOR_BUFFER_BIT}F&&(q|=B.DEPTH_BUFFER_BIT),X&&(q|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ee,!1),i.removeEventListener("webglcontextrestored",me,!1),i.removeEventListener("webglcontextcreationerror",ue,!1),ve.dispose(),et.dispose(),Te.dispose(),E.dispose(),W.dispose(),$.dispose(),ft.dispose(),U.dispose(),Ae.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",vh),Y.removeEventListener("sessionend",xh),hn.stop()};function ee(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;let _=mt.autoReset,F=Ee.enabled,X=Ee.autoUpdate,q=Ee.needsUpdate,z=Ee.type;he(),mt.autoReset=_,Ee.enabled=F,Ee.autoUpdate=X,Ee.needsUpdate=q,Ee.type=z}function ue(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Be(_){let F=_.target;F.removeEventListener("dispose",Be),Mt(F)}function Mt(_){Xt(_),Te.remove(_)}function Xt(_){let F=Te.get(_).programs;F!==void 0&&(F.forEach(function(X){Ae.releaseProgram(X)}),_.isShaderMaterial&&Ae.releaseShaderCache(_))}this.renderBufferDirect=function(_,F,X,q,z,ce){F===null&&(F=we);let pe=z.isMesh&&z.matrixWorld.determinant()<0,Me=ES(_,F,X,q,z);Le.setMaterial(q,pe);let Re=X.index,Oe=1;if(q.wireframe===!0){if(Re=re.getWireframeAttribute(X),Re===void 0)return;Oe=2}let Ge=X.drawRange,be=X.attributes.position,tt=Ge.start*Oe,ht=(Ge.start+Ge.count)*Oe;ce!==null&&(tt=Math.max(tt,ce.start*Oe),ht=Math.min(ht,(ce.start+ce.count)*Oe)),Re!==null?(tt=Math.max(tt,0),ht=Math.min(ht,Re.count)):be!=null&&(tt=Math.max(tt,0),ht=Math.min(ht,be.count));let gt=ht-tt;if(gt<0||gt===1/0)return;ft.setup(z,q,Me,X,Re);let ci,st=_e;if(Re!==null&&(ci=J.get(Re),st=Qe,st.setIndex(ci)),z.isMesh)q.wireframe===!0?(Le.setLineWidth(q.wireframeLinewidth*He()),st.setMode(B.LINES)):st.setMode(B.TRIANGLES);else if(z.isLine){let Ce=q.linewidth;Ce===void 0&&(Ce=1),Le.setLineWidth(Ce*He()),z.isLineSegments?st.setMode(B.LINES):z.isLineLoop?st.setMode(B.LINE_LOOP):st.setMode(B.LINE_STRIP)}else z.isPoints?st.setMode(B.POINTS):z.isSprite&&st.setMode(B.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)st.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))st.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Ce=z._multiDrawStarts,ur=z._multiDrawCounts,ot=z._multiDrawCount,Oi=Re?J.get(Re).bytesPerElement:1,Vn=Te.get(q).currentProgram.getUniforms();for(let mi=0;mi<ot;mi++)Vn.setValue(B,"_gl_DrawID",mi),st.render(Ce[mi]/Oi,ur[mi])}else if(z.isInstancedMesh)st.renderInstances(tt,gt,z.count);else if(X.isInstancedBufferGeometry){let Ce=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ur=Math.min(X.instanceCount,Ce);st.renderInstances(tt,gt,ur)}else st.render(tt,gt)};function at(_,F,X){_.transparent===!0&&_.side===Vt&&_.forceSinglePass===!1?(_.side=rt,_.needsUpdate=!0,da(_,F,X),_.side=Dt,_.needsUpdate=!0,da(_,F,X),_.side=Vt):da(_,F,X)}this.compile=function(_,F,X=null){X===null&&(X=_),m=et.get(X),m.init(F),M.push(m),X.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),_!==X&&_.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();let q=new Set;return _.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ce=z.material;if(ce)if(Array.isArray(ce))for(let pe=0;pe<ce.length;pe++){let Me=ce[pe];at(Me,X,z),q.add(Me)}else at(ce,X,z),q.add(ce)}),M.pop(),m=null,q},this.compileAsync=function(_,F,X=null){let q=this.compile(_,F,X);return new Promise(z=>{function ce(){if(q.forEach(function(pe){Te.get(pe).currentProgram.isReady()&&q.delete(pe)}),q.size===0){z(_);return}setTimeout(ce,10)}Ke.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Ui=null;function dr(_){Ui&&Ui(_)}function vh(){hn.stop()}function xh(){hn.start()}let hn=new Ml;hn.setAnimationLoop(dr),typeof self<"u"&&hn.setContext(self),this.setAnimationLoop=function(_){Ui=_,Y.setAnimationLoop(_),_===null?hn.stop():hn.start()},Y.addEventListener("sessionstart",vh),Y.addEventListener("sessionend",xh),this.render=function(_,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(F),F=Y.getCamera()),_.isScene===!0&&_.onBeforeRender(x,_,F,L),m=et.get(_,M.length),m.init(F),M.push(m),Q.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Z.setFromProjectionMatrix(Q),ae=this.localClippingEnabled,ie=le.init(this.clippingPlanes,ae),g=ve.get(_,w.length),g.init(),w.push(g),Y.enabled===!0&&Y.isPresenting===!0){let ce=x.xr.getDepthSensingMesh();ce!==null&&rc(ce,F,-1/0,x.sortObjects)}rc(_,F,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(te,ne),Se=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Se&&Ie.addToRenderList(g,_),this.info.render.frame++,ie===!0&&le.beginShadows();let X=m.state.shadowsArray;Ee.render(X,_,F),ie===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=g.opaque,z=g.transmissive;if(m.setupLights(),F.isArrayCamera){let ce=F.cameras;if(z.length>0)for(let pe=0,Me=ce.length;pe<Me;pe++){let Re=ce[pe];_h(q,z,_,Re)}Se&&Ie.render(_);for(let pe=0,Me=ce.length;pe<Me;pe++){let Re=ce[pe];Eh(g,_,Re,Re.viewport)}}else z.length>0&&_h(q,z,_,F),Se&&Ie.render(_),Eh(g,_,F);L!==null&&(R.updateMultisampleRenderTarget(L),R.updateRenderTargetMipmap(L)),_.isScene===!0&&_.onAfterRender(x,_,F),ft.resetDefaultState(),S=-1,v=null,M.pop(),M.length>0?(m=M[M.length-1],ie===!0&&le.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,w.pop(),w.length>0?g=w[w.length-1]:g=null};function rc(_,F,X,q){if(_.visible===!1)return;if(_.layers.test(F.layers)){if(_.isGroup)X=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(F);else if(_.isLight)m.pushLight(_),_.castShadow&&m.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||Z.intersectsSprite(_)){q&&oe.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Q);let pe=$.update(_),Me=_.material;Me.visible&&g.push(_,pe,Me,X,oe.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||Z.intersectsObject(_))){let pe=$.update(_),Me=_.material;if(q&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),oe.copy(_.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),oe.copy(pe.boundingSphere.center)),oe.applyMatrix4(_.matrixWorld).applyMatrix4(Q)),Array.isArray(Me)){let Re=pe.groups;for(let Oe=0,Ge=Re.length;Oe<Ge;Oe++){let be=Re[Oe],tt=Me[be.materialIndex];tt&&tt.visible&&g.push(_,pe,tt,X,oe.z,be)}}else Me.visible&&g.push(_,pe,Me,X,oe.z,null)}}let ce=_.children;for(let pe=0,Me=ce.length;pe<Me;pe++)rc(ce[pe],F,X,q)}function Eh(_,F,X,q){let z=_.opaque,ce=_.transmissive,pe=_.transparent;m.setupLightsView(X),ie===!0&&le.setGlobalState(x.clippingPlanes,X),q&&Le.viewport(D.copy(q)),z.length>0&&ha(z,F,X),ce.length>0&&ha(ce,F,X),pe.length>0&&ha(pe,F,X),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function _h(_,F,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new ui(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?rr:Kt,minFilter:Xi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace}));let ce=m.state.transmissionRenderTarget[q.id],pe=q.viewport||D;ce.setSize(pe.z,pe.w);let Me=x.getRenderTarget();x.setRenderTarget(ce),x.getClearColor(V),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),Se&&Ie.render(X);let Re=x.toneMapping;x.toneMapping=Ci;let Oe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),ie===!0&&le.setGlobalState(x.clippingPlanes,q),ha(_,X,q),R.updateMultisampleRenderTarget(ce),R.updateRenderTargetMipmap(ce),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let be=0,tt=F.length;be<tt;be++){let ht=F[be],gt=ht.object,ci=ht.geometry,st=ht.material,Ce=ht.group;if(st.side===Vt&&gt.layers.test(q.layers)){let ur=st.side;st.side=rt,st.needsUpdate=!0,wh(gt,X,q,ci,st,Ce),st.side=ur,st.needsUpdate=!0,Ge=!0}}Ge===!0&&(R.updateMultisampleRenderTarget(ce),R.updateRenderTargetMipmap(ce))}x.setRenderTarget(Me),x.setClearColor(V,j),Oe!==void 0&&(q.viewport=Oe),x.toneMapping=Re}function ha(_,F,X){let q=F.isScene===!0?F.overrideMaterial:null;for(let z=0,ce=_.length;z<ce;z++){let pe=_[z],Me=pe.object,Re=pe.geometry,Oe=q===null?pe.material:q,Ge=pe.group;Me.layers.test(X.layers)&&wh(Me,F,X,Re,Oe,Ge)}}function wh(_,F,X,q,z,ce){_.onBeforeRender(x,F,X,q,z,ce),_.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),z.onBeforeRender(x,F,X,q,_,ce),z.transparent===!0&&z.side===Vt&&z.forceSinglePass===!1?(z.side=rt,z.needsUpdate=!0,x.renderBufferDirect(X,F,q,z,_,ce),z.side=Dt,z.needsUpdate=!0,x.renderBufferDirect(X,F,q,z,_,ce),z.side=Vt):x.renderBufferDirect(X,F,q,z,_,ce),_.onAfterRender(x,F,X,q,z,ce)}function da(_,F,X){F.isScene!==!0&&(F=we);let q=Te.get(_),z=m.state.lights,ce=m.state.shadowsArray,pe=z.state.version,Me=Ae.getParameters(_,z.state,ce,F,X),Re=Ae.getProgramCacheKey(Me),Oe=q.programs;q.environment=_.isMeshStandardMaterial?F.environment:null,q.fog=F.fog,q.envMap=(_.isMeshStandardMaterial?W:E).get(_.envMap||q.environment),q.envMapRotation=q.environment!==null&&_.envMap===null?F.environmentRotation:_.envMapRotation,Oe===void 0&&(_.addEventListener("dispose",Be),Oe=new Map,q.programs=Oe);let Ge=Oe.get(Re);if(Ge!==void 0){if(q.currentProgram===Ge&&q.lightsStateVersion===pe)return Rh(_,Me),Ge}else Me.uniforms=Ae.getUniforms(_),_.onBeforeCompile(Me,x),Ge=Ae.acquireProgram(Me,Re),Oe.set(Re,Ge),q.uniforms=Me.uniforms;let be=q.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(be.clippingPlanes=le.uniform),Rh(_,Me),q.needsLights=wS(_),q.lightsStateVersion=pe,q.needsLights&&(be.ambientLightColor.value=z.state.ambient,be.lightProbe.value=z.state.probe,be.directionalLights.value=z.state.directional,be.directionalLightShadows.value=z.state.directionalShadow,be.spotLights.value=z.state.spot,be.spotLightShadows.value=z.state.spotShadow,be.rectAreaLights.value=z.state.rectArea,be.ltc_1.value=z.state.rectAreaLTC1,be.ltc_2.value=z.state.rectAreaLTC2,be.pointLights.value=z.state.point,be.pointLightShadows.value=z.state.pointShadow,be.hemisphereLights.value=z.state.hemi,be.directionalShadowMap.value=z.state.directionalShadowMap,be.directionalShadowMatrix.value=z.state.directionalShadowMatrix,be.spotShadowMap.value=z.state.spotShadowMap,be.spotLightMatrix.value=z.state.spotLightMatrix,be.spotLightMap.value=z.state.spotLightMap,be.pointShadowMap.value=z.state.pointShadowMap,be.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=Ge,q.uniformsList=null,Ge}function Mh(_){if(_.uniformsList===null){let F=_.currentProgram.getUniforms();_.uniformsList=ln.seqWithValue(F.seq,_.uniforms)}return _.uniformsList}function Rh(_,F){let X=Te.get(_);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function ES(_,F,X,q,z){F.isScene!==!0&&(F=we),R.resetTextureUnits();let ce=F.fog,pe=q.isMeshStandardMaterial?F.environment:null,Me=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ji,Re=(q.isMeshStandardMaterial?W:E).get(q.envMap||pe),Oe=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ge=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),be=!!X.morphAttributes.position,tt=!!X.morphAttributes.normal,ht=!!X.morphAttributes.color,gt=Ci;q.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(gt=x.toneMapping);let ci=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,st=ci!==void 0?ci.length:0,Ce=Te.get(q),ur=m.state.lights;if(ie===!0&&(ae===!0||_!==v)){let Mi=_===v&&q.id===S;le.setState(q,_,Mi)}let ot=!1;q.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==ur.state.version||Ce.outputColorSpace!==Me||z.isBatchedMesh&&Ce.batching===!1||!z.isBatchedMesh&&Ce.batching===!0||z.isBatchedMesh&&Ce.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ce.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ce.instancing===!1||!z.isInstancedMesh&&Ce.instancing===!0||z.isSkinnedMesh&&Ce.skinning===!1||!z.isSkinnedMesh&&Ce.skinning===!0||z.isInstancedMesh&&Ce.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ce.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ce.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ce.instancingMorph===!1&&z.morphTexture!==null||Ce.envMap!==Re||q.fog===!0&&Ce.fog!==ce||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==le.numPlanes||Ce.numIntersection!==le.numIntersection)||Ce.vertexAlphas!==Oe||Ce.vertexTangents!==Ge||Ce.morphTargets!==be||Ce.morphNormals!==tt||Ce.morphColors!==ht||Ce.toneMapping!==gt||Ce.morphTargetsCount!==st)&&(ot=!0):(ot=!0,Ce.__version=q.version);let Oi=Ce.currentProgram;ot===!0&&(Oi=da(q,F,z));let Vn=!1,mi=!1,$s=!1,yt=Oi.getUniforms(),er=Ce.uniforms;if(Le.useProgram(Oi.program)&&(Vn=!0,mi=!0,$s=!0),q.id!==S&&(S=q.id,mi=!0),Vn||v!==_){Le.buffers.depth.getReversed()?(N.copy(_.projectionMatrix),Fu(N),zu(N),yt.setValue(B,"projectionMatrix",N)):yt.setValue(B,"projectionMatrix",_.projectionMatrix),yt.setValue(B,"viewMatrix",_.matrixWorldInverse);let kr=yt.map.cameraPosition;kr!==void 0&&kr.setValue(B,se.setFromMatrixPosition(_.matrixWorld)),Ze.logarithmicDepthBuffer&&yt.setValue(B,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&yt.setValue(B,"isOrthographic",_.isOrthographicCamera===!0),v!==_&&(v=_,mi=!0,$s=!0)}if(z.isSkinnedMesh){yt.setOptional(B,z,"bindMatrix"),yt.setOptional(B,z,"bindMatrixInverse");let Mi=z.skeleton;Mi&&(Mi.boneTexture===null&&Mi.computeBoneTexture(),yt.setValue(B,"boneTexture",Mi.boneTexture,R))}z.isBatchedMesh&&(yt.setOptional(B,z,"batchingTexture"),yt.setValue(B,"batchingTexture",z._matricesTexture,R),yt.setOptional(B,z,"batchingIdTexture"),yt.setValue(B,"batchingIdTexture",z._indirectTexture,R),yt.setOptional(B,z,"batchingColorTexture"),z._colorsTexture!==null&&yt.setValue(B,"batchingColorTexture",z._colorsTexture,R));let Js=X.morphAttributes;if((Js.position!==void 0||Js.normal!==void 0||Js.color!==void 0)&&Ue.update(z,X,Oi),(mi||Ce.receiveShadow!==z.receiveShadow)&&(Ce.receiveShadow=z.receiveShadow,yt.setValue(B,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(er.envMap.value=Re,er.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&F.environment!==null&&(er.envMapIntensity.value=F.environmentIntensity),mi&&(yt.setValue(B,"toneMappingExposure",x.toneMappingExposure),Ce.needsLights&&_S(er,$s),ce&&q.fog===!0&&de.refreshFogUniforms(er,ce),de.refreshMaterialUniforms(er,q,G,K,m.state.transmissionRenderTarget[_.id]),ln.upload(B,Mh(Ce),er,R)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ln.upload(B,Mh(Ce),er,R),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&yt.setValue(B,"center",z.center),yt.setValue(B,"modelViewMatrix",z.modelViewMatrix),yt.setValue(B,"normalMatrix",z.normalMatrix),yt.setValue(B,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let Mi=q.uniformsGroups;for(let kr=0,Pr=Mi.length;kr<Pr;kr++){let bh=Mi[kr];U.update(bh,Oi),U.bind(bh,Oi)}}return Oi}function _S(_,F){_.ambientLightColor.needsUpdate=F,_.lightProbe.needsUpdate=F,_.directionalLights.needsUpdate=F,_.directionalLightShadows.needsUpdate=F,_.pointLights.needsUpdate=F,_.pointLightShadows.needsUpdate=F,_.spotLights.needsUpdate=F,_.spotLightShadows.needsUpdate=F,_.rectAreaLights.needsUpdate=F,_.hemisphereLights.needsUpdate=F}function wS(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(_,F,X){Te.get(_.texture).__webglTexture=F,Te.get(_.depthTexture).__webglTexture=X;let q=Te.get(_);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||Ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(_,F){let X=Te.get(_);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(_,F=0,X=0){L=_,T=F,b=X;let q=!0,z=null,ce=!1,pe=!1;if(_){let Re=Te.get(_);if(Re.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(B.FRAMEBUFFER,null),q=!1;else if(Re.__webglFramebuffer===void 0)R.setupRenderTarget(_);else if(Re.__hasExternalTextures)R.rebindTextures(_,Te.get(_.texture).__webglTexture,Te.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let be=_.depthTexture;if(Re.__boundDepthTexture!==be){if(be!==null&&Te.has(be)&&(_.width!==be.image.width||_.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(_)}}let Oe=_.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(pe=!0);let Ge=Te.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Ge[F])?z=Ge[F][X]:z=Ge[F],ce=!0):_.samples>0&&R.useMultisampledRTT(_)===!1?z=Te.get(_).__webglMultisampledFramebuffer:Array.isArray(Ge)?z=Ge[X]:z=Ge,D.copy(_.viewport),P.copy(_.scissor),I=_.scissorTest}else D.copy(ye).multiplyScalar(G).floor(),P.copy(xe).multiplyScalar(G).floor(),I=Fe;if(Le.bindFramebuffer(B.FRAMEBUFFER,z)&&q&&Le.drawBuffers(_,z),Le.viewport(D),Le.scissor(P),Le.setScissorTest(I),ce){let Re=Te.get(_.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,Re.__webglTexture,X)}else if(pe){let Re=Te.get(_.texture),Oe=F||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Re.__webglTexture,X||0,Oe)}S=-1},this.readRenderTargetPixels=function(_,F,X,q,z,ce,pe){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Te.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&pe!==void 0&&(Me=Me[pe]),Me){Le.bindFramebuffer(B.FRAMEBUFFER,Me);try{let Re=_.texture,Oe=Re.format,Ge=Re.type;if(!Ze.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=_.width-q&&X>=0&&X<=_.height-z&&B.readPixels(F,X,q,z,We.convert(Oe),We.convert(Ge),ce)}finally{let Re=L!==null?Te.get(L).__webglFramebuffer:null;Le.bindFramebuffer(B.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(_,F,X,q,z,ce,pe){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Te.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&pe!==void 0&&(Me=Me[pe]),Me){let Re=_.texture,Oe=Re.format,Ge=Re.type;if(!Ze.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=_.width-q&&X>=0&&X<=_.height-z){Le.bindFramebuffer(B.FRAMEBUFFER,Me);let be=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,be),B.bufferData(B.PIXEL_PACK_BUFFER,ce.byteLength,B.STREAM_READ),B.readPixels(F,X,q,z,We.convert(Oe),We.convert(Ge),0);let tt=L!==null?Te.get(L).__webglFramebuffer:null;Le.bindFramebuffer(B.FRAMEBUFFER,tt);let ht=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Ou(B,ht,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,be),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ce),B.deleteBuffer(be),B.deleteSync(ht),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(_,F=null,X=0){_.isTexture!==!0&&(An("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,_=arguments[1]);let q=Math.pow(2,-X),z=Math.floor(_.image.width*q),ce=Math.floor(_.image.height*q),pe=F!==null?F.x:0,Me=F!==null?F.y:0;R.setTexture2D(_,0),B.copyTexSubImage2D(B.TEXTURE_2D,X,0,0,pe,Me,z,ce),Le.unbindTexture()},this.copyTextureToTexture=function(_,F,X=null,q=null,z=0){_.isTexture!==!0&&(An("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,_=arguments[1],F=arguments[2],z=arguments[3]||0,X=null);let ce,pe,Me,Re,Oe,Ge,be,tt,ht,gt=_.isCompressedTexture?_.mipmaps[z]:_.image;X!==null?(ce=X.max.x-X.min.x,pe=X.max.y-X.min.y,Me=X.isBox3?X.max.z-X.min.z:1,Re=X.min.x,Oe=X.min.y,Ge=X.isBox3?X.min.z:0):(ce=gt.width,pe=gt.height,Me=gt.depth||1,Re=0,Oe=0,Ge=0),q!==null?(be=q.x,tt=q.y,ht=q.z):(be=0,tt=0,ht=0);let ci=We.convert(F.format),st=We.convert(F.type),Ce;F.isData3DTexture?(R.setTexture3D(F,0),Ce=B.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(R.setTexture2DArray(F,0),Ce=B.TEXTURE_2D_ARRAY):(R.setTexture2D(F,0),Ce=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,F.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,F.unpackAlignment);let ur=B.getParameter(B.UNPACK_ROW_LENGTH),ot=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Oi=B.getParameter(B.UNPACK_SKIP_PIXELS),Vn=B.getParameter(B.UNPACK_SKIP_ROWS),mi=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,gt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,gt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Re),B.pixelStorei(B.UNPACK_SKIP_ROWS,Oe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ge);let $s=_.isDataArrayTexture||_.isData3DTexture,yt=F.isDataArrayTexture||F.isData3DTexture;if(_.isRenderTargetTexture||_.isDepthTexture){let er=Te.get(_),Js=Te.get(F),Mi=Te.get(er.__renderTarget),kr=Te.get(Js.__renderTarget);Le.bindFramebuffer(B.READ_FRAMEBUFFER,Mi.__webglFramebuffer),Le.bindFramebuffer(B.DRAW_FRAMEBUFFER,kr.__webglFramebuffer);for(let Pr=0;Pr<Me;Pr++)$s&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Te.get(_).__webglTexture,z,Ge+Pr),_.isDepthTexture?(yt&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Te.get(F).__webglTexture,z,ht+Pr),B.blitFramebuffer(Re,Oe,ce,pe,be,tt,ce,pe,B.DEPTH_BUFFER_BIT,B.NEAREST)):yt?B.copyTexSubImage3D(Ce,z,be,tt,ht+Pr,Re,Oe,ce,pe):B.copyTexSubImage2D(Ce,z,be,tt,ht+Pr,Re,Oe,ce,pe);Le.bindFramebuffer(B.READ_FRAMEBUFFER,null),Le.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else yt?_.isDataTexture||_.isData3DTexture?B.texSubImage3D(Ce,z,be,tt,ht,ce,pe,Me,ci,st,gt.data):F.isCompressedArrayTexture?B.compressedTexSubImage3D(Ce,z,be,tt,ht,ce,pe,Me,ci,gt.data):B.texSubImage3D(Ce,z,be,tt,ht,ce,pe,Me,ci,st,gt):_.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,z,be,tt,ce,pe,ci,st,gt.data):_.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,z,be,tt,gt.width,gt.height,ci,gt.data):B.texSubImage2D(B.TEXTURE_2D,z,be,tt,ce,pe,ci,st,gt);B.pixelStorei(B.UNPACK_ROW_LENGTH,ur),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ot),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Oi),B.pixelStorei(B.UNPACK_SKIP_ROWS,Vn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,mi),z===0&&F.generateMipmaps&&B.generateMipmap(Ce),Le.unbindTexture()},this.copyTextureToTexture3D=function(_,F,X=null,q=null,z=0){return _.isTexture!==!0&&(An("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,_=arguments[2],F=arguments[3],z=arguments[4]||0),An('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,F,X,q,z)},this.initRenderTarget=function(_){Te.get(_).__webglFramebuffer===void 0&&R.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?R.setTextureCube(_,0):_.isData3DTexture?R.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?R.setTexture2DArray(_,0):R.setTexture2D(_,0),Le.unbindTexture()},this.resetState=function(){T=0,b=0,L=null,Le.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let i=this.getContext();i.drawingBufferColorspace=Ve._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ve._getUnpackColorSpace()}}});var Vl,$y=C(()=>{Rr();Zr();Vl=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _t,this.environmentIntensity=1,this.environmentRotation=new _t,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}});var a3={};dn(a3,{Cube3D:()=>n3,PG3D:()=>o3,ThreePerspectiveCamera:()=>Lt,ThreeRaycaster:()=>El,ThreeScene:()=>Vl,ThreeSpherical:()=>_l,ThreeTextureLoader:()=>ws,ThreeVector2:()=>Pe,ThreeVector3:()=>O,ThreeWebGLRenderer:()=>Gl,Twisty3DScene:()=>A_,cube3DShim:()=>C_,pg3dShim:()=>T_});function r3(t){return t*t*t*(10-t*(15-6*t))}function Kf(t){return typeof t.faceletScale>"u"||t.faceletScale==="auto"?h_:t.faceletScale}function Xe(t,e){return new Di().setFromAxisAngle(t,Ei*e/4)}function m_(){return e3??(e3=new cr(On.foundationWidth,On.foundationWidth,On.foundationWidth))}function Jf(){let t=new Ht,e=.5;return t.setAttribute("position",new Et(new Float32Array([e,e,0,-e,e,0,e,-e,0,-e,e,0,-e,-e,0,e,-e,0]),3)),t.setAttribute("uv",new Et(new Float32Array([1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1]),2)),t}function g_(){return t3??(t3=Jf())}function $f(t,e,i){return Math.hypot(t[3*e]-t[3*i],t[3*e+1]-t[3*i+1],t[3*e+2]-t[3*i+2])}function y_(t,e,i,r){let n=$f(t,e,i),s=$f(t,i,r),o=$f(t,e,r),a=(n+s+o)/2;return Math.sqrt(a*(a-n)*(a-s)*(a-o))}function S_(t){let e=0;for(let i=2;3*i<t.length;i++)e+=y_(t,0,1,i);return e}function v_(t){let e=Math.hypot(t[0],t[1],t[2]);return t[0]/=e,t[1]/=e,t[2]/=e,t}function x_(t,e){let i=new Array(3);return i[0]=t[1]*e[2]-t[2]*e[1],i[1]=t[2]*e[0]-t[0]*e[2],i[2]=t[0]*e[1]-t[1]*e[0],i}function E_(t){let e=[t[3]-t[0],t[4]-t[1],t[5]-t[2]],i=[t[6]-t[3],t[7]-t[4],t[8]-t[5]],r=x_(e,i);return v_(r)}function __(t,e){let i=[],r=new Array(3),n=new Array(3);for(let s=1;s<10;s++){for(let a=0;a<t.length;a+=3){let l=(a+t.length-3)%t.length,c=(a+3)%t.length;for(let d=0;d<3;d++)r[d]=t[l+d]-t[a+d],n[d]=t[c+d]-t[a+d];let f=Math.hypot(r[0],r[1],r[2]),h=Math.hypot(n[0],n[1],n[2]);for(let d=0;d<3;d++)r[d]/=f,n[d]/=h;let u=r[0]*n[0]+r[1]*n[1]+r[2]*n[2],p=e/Math.sqrt(1-u*u);for(let d=0;d<3;d++)i[a+d]=t[a+d]+(r[d]+n[d])*p}let o=!0;for(let a=0;o&&a<i.length;a+=3){let l=(a+3)%t.length,c=0;for(let f=0;f<3;f++){let h=t[l+f]-t[a+f],u=i[l+f]-i[a+f];c+=h*u}c<=0&&(o=!1)}if(o)return i;e/=2}return t}async function C_(t,e){return new n3(await Jn.kpuzzle(),t,e)}async function T_(t,e,i,r,n){return new o3(t,await e.kpuzzle(),(await e.pg()).get3d({darkIgnoredOrbits:n}),!0,i==="floating",void 0,r)}var Jy,e_,t_,Xl,i_,r_,n_,s_,o_,a_,Vs,Lr,Je,l_,On,c_,f_,h_,d_,u_,ut,qe,Wl,p_,Zf,ia,Qf,Hl,e3,t3,n3,i3,cn,ra,s3,w_,M_,R_,b_,Nr,o3,A_,l3=C(()=>{eh();zc();Qn();to();Fr();je();Er();en();Rr();Qo();af();Jo();ki();Zr();Ni();qo();oi();vt();hl();on();je();Er();en();Rr();Jo();ki();Zr();vt();hl();on();Cs();o0();af();a0();oi();vt();Qy();$y();Jy=new ws,e_=new nt({color:new Ne(6710886).convertLinearToSRGB()}),t_=new nt({color:new Ne(13421772).convertLinearToSRGB(),side:rt,transparent:!0,opacity:.75}),Xl=new nt({visible:!1}),i_=new nt({color:4513228}),r_=new nt({color:4513228,side:rt,transparent:!0,opacity:.5}),n_=new nt({color:16776618}),s_=new nt({color:16775545,side:rt,transparent:!0,opacity:.5}),o_=new nt({color:15911883}),a_=new nt({color:15911883,side:rt,transparent:!0,opacity:.5}),Vs=class{constructor(t,e,i,r,n,s){this.vector=t,this.fromZ=e,this.color=i,this.dimColor=r,this.hintOpacityScale=n;let o=new Ne(i).convertLinearToSRGB(),a=new Ne(r).convertLinearToSRGB();this.stickerMaterial={regular:new nt({color:o,side:Dt}),dim:new nt({color:a,side:Dt}),oriented:i_,experimentalOriented2:n_,ignored:e_,invisible:Xl,mystery:o_},this.hintStickerMaterial={regular:new nt({color:new Ne(s?.hintColor??i).convertLinearToSRGB(),side:rt,transparent:!0,opacity:.5*n}),dim:new nt({color:new Ne(s?.hintDimColor??r).convertLinearToSRGB(),side:rt,transparent:!0,opacity:.5*n}),oriented:r_,experimentalOriented2:s_,ignored:t_,invisible:Xl,mystery:a_}}stickerMaterial;hintStickerMaterial},Lr=[new Vs(new O(0,1,0),new _t(-Ei/4,0,0),16777215,14540253,1.25),new Vs(new O(-1,0,0),new _t(0,-Ei/4,0),16750848,8934656,1,{hintDimColor:8930304}),new Vs(new O(0,0,1),new _t(0,0,0),65280,34816,1,{hintDimColor:39168}),new Vs(new O(1,0,0),new _t(0,Ei/4,0),16711680,6684672,1,{hintDimColor:6684672}),new Vs(new O(0,0,-1),new _t(0,Ei/2,0),2254591,1127304,.75,{hintDimColor:6246}),new Vs(new O(0,-1,0),new _t(Ei/4,0,0),16776960,8947712,1.25,{hintDimColor:14540032})],Je={U:0,L:1,F:2,R:3,B:4,D:5},l_={U:Je.U,u:Je.U,Uw:Je.U,Uv:Je.U,y:Je.U,L:Je.L,l:Je.L,Lw:Je.L,Lv:Je.L,M:Je.L,F:Je.F,f:Je.F,Fw:Je.F,Fv:Je.F,S:Je.F,z:Je.F,R:Je.R,r:Je.R,Rw:Je.R,Rv:Je.R,x:Je.R,B:Je.B,b:Je.B,Bw:Je.B,Bv:Je.B,D:Je.D,d:Je.D,Dw:Je.D,Dv:Je.D,E:Je.D},On={stickerElevation:.503,foundationWidth:1,hintStickerElevation:1.45},c_=2,f_={showMainStickers:!0,hintFacelets:"floating",showFoundation:!0,experimentalStickeringMask:void 0,foundationSprite:null,hintSprite:null,initialHintFaceletsAnimation:"auto",faceletScale:"auto"},h_=.85;d_=new nt({color:0,opacity:1,transparent:!0}),u_=new nt({color:0,opacity:.3,transparent:!0}),ut=class{constructor(t,e,i){this.orbit=t;let r=typeof e=="string"?e.split(""):e;this.stickerFaces=r.map(n=>Je[n]),this.matrix=new Ye,this.matrix.setPosition(Wl[t]),this.matrix.premultiply(new Ye().makeRotationFromQuaternion(i))}matrix;stickerFaces};qe={O:new O(0,0,0),U:new O(0,-1,0),L:new O(1,0,0),F:new O(0,0,-1),R:new O(-1,0,0),B:new O(0,0,1),D:new O(0,1,0)},Wl={EDGES:new O(0,1,1),CORNERS:new O(1,1,1),CENTERS:new O(0,1,0)},p_={EDGES:[0,1].map(t=>new Ye().makeRotationAxis(Wl.EDGES.clone().normalize(),-t*Ei/2)),CORNERS:[0,1,2].map(t=>new Ye().makeRotationAxis(Wl.CORNERS.clone().normalize(),-t*Ei/3)),CENTERS:[0,1,2,3].map(t=>new Ye().makeRotationAxis(Wl.CENTERS.clone().normalize(),-t*Ei/4))},Zf=[Je.U,Je.F,Je.R],ia={EDGES:[new ut("EDGES","UF",Xe(qe.O,0)),new ut("EDGES","UR",Xe(qe.U,3)),new ut("EDGES","UB",Xe(qe.U,2)),new ut("EDGES","UL",Xe(qe.U,1)),new ut("EDGES","DF",Xe(qe.F,2)),new ut("EDGES","DR",Xe(qe.F,2).premultiply(Xe(qe.D,1))),new ut("EDGES","DB",Xe(qe.F,2).premultiply(Xe(qe.D,2))),new ut("EDGES","DL",Xe(qe.F,2).premultiply(Xe(qe.D,3))),new ut("EDGES","FR",Xe(qe.U,3).premultiply(Xe(qe.R,3))),new ut("EDGES","FL",Xe(qe.U,1).premultiply(Xe(qe.R,3))),new ut("EDGES","BR",Xe(qe.U,3).premultiply(Xe(qe.R,1))),new ut("EDGES","BL",Xe(qe.U,1).premultiply(Xe(qe.R,1)))],CORNERS:[new ut("CORNERS","UFR",Xe(qe.O,0)),new ut("CORNERS","URB",Xe(qe.U,3)),new ut("CORNERS","UBL",Xe(qe.U,2)),new ut("CORNERS","ULF",Xe(qe.U,1)),new ut("CORNERS","DRF",Xe(qe.F,2).premultiply(Xe(qe.D,1))),new ut("CORNERS","DFL",Xe(qe.F,2).premultiply(Xe(qe.D,0))),new ut("CORNERS","DLB",Xe(qe.F,2).premultiply(Xe(qe.D,3))),new ut("CORNERS","DBR",Xe(qe.F,2).premultiply(Xe(qe.D,2)))],CENTERS:[new ut("CENTERS","U",Xe(qe.O,0)),new ut("CENTERS","L",Xe(qe.R,3).premultiply(Xe(qe.U,1))),new ut("CENTERS","F",Xe(qe.R,3)),new ut("CENTERS","R",Xe(qe.R,3).premultiply(Xe(qe.D,1))),new ut("CENTERS","B",Xe(qe.R,3).premultiply(Xe(qe.D,2))),new ut("CENTERS","D",Xe(qe.R,2))]},Qf=1/3,Hl={EDGES:[[[0,4,6],[0,4,5]],[[3,5,7],[0,7,5]],[[2,4,8],[0,10,5]],[[1,3,7],[0,1,5]],[[2,4,2],[2,4,3]],[[3,5,1],[2,7,3]],[[0,4,0],[2,10,3]],[[1,3,1],[2,1,3]],[[3,5,4],[3,6,4]],[[1,3,4],[1,2,4]],[[1,9,4],[1,8,4]],[[3,11,4],[3,0,4]]],CORNERS:[[[0,5,6],[0,5,5],[0,6,5]],[[3,5,8],[0,8,5],[0,9,5]],[[2,3,8],[0,11,5],[0,0,5]],[[1,3,6],[0,2,5],[0,3,5]],[[3,5,2],[2,6,3],[2,5,3]],[[2,3,2],[2,3,3],[2,2,3]],[[1,3,0],[2,0,3],[2,11,3]],[[0,5,0],[2,9,3],[2,8,3]]],CENTERS:[[[0,4,7]],[[0,1,4]],[[0,4,4]],[[0,7,4]],[[0,10,4]],[[0,4,1]]]},e3=null;t3=null;n3=class extends At{constructor(t,e,i={}){if(super(),this.kpuzzle=t,this.scheduleRenderCallback=e,this.options={...f_},Object.assign(this.options,i),this.kpuzzle.name()!=="3x3x3")throw new Error(`Invalid puzzle for this Cube3D implementation: ${this.kpuzzle.name()}`);i.foundationSprite&&this.setSprite(i.foundationSprite),i.hintSprite&&this.setHintSprite(i.hintSprite),this.kpuzzleFaceletInfo={};for(let r in ia){let n=[];this.kpuzzleFaceletInfo[r]=n,this.pieces[r]=ia[r].map(this.createCubie.bind(this,r,n))}this.scale.set(Qf,Qf,Qf),this.options.experimentalStickeringMask&&this.setStickeringMask(this.options.experimentalStickeringMask),this.#i(),this.options.faceletScale&&this.experimentalSetFaceletScale(this.options.faceletScale)}kpuzzleFaceletInfo;pieces={};options;experimentalHintStickerMeshes=[];experimentalFoundationMeshes=[];setSpriteURL;sprite=new Promise(t=>{this.setSpriteURL=e=>{Jy.load(e,t)}});setSprite(t){this.sprite=t}setHintSpriteURL;hintSprite=new Promise(t=>{this.setHintSpriteURL=e=>{Jy.load(e,t)}});setHintSprite(t){this.hintSprite=t}#e=null;#t(){return this.#e??=Jf()}#i(){if(this.options.initialHintFaceletsAnimation==="none"||this.options.initialHintFaceletsAnimation!=="always"&&f3())return;let t=On.hintStickerElevation-On.stickerElevation;this.#t().translate(0,0,-t),setTimeout(()=>{let e=performance.now(),i=0,r=1e3;function n(o){return o*(2-o)}let s=()=>{let o=performance.now()-e,a=n(o/r)*t;this.#t().translate(0,0,a-i),i=a,o<r&&(requestAnimationFrame(s),this.scheduleRenderCallback?.())};s()},500)}experimentalSetStickerSpriteURL(t){this.setSpriteURL(t)}experimentalSetHintStickerSpriteURL(t){this.setHintSpriteURL(t)}setStickeringMask(t){if(t.specialBehaviour==="picture"){for(let e of Object.values(this.kpuzzleFaceletInfo))for(let i of e)for(let r of i){r.facelet.material=Xl;let{hintFacelet:n}=r;n&&(n.material=Xl)}return}this.options.experimentalStickeringMask=t;for(let[e,i]of Object.entries(t.orbits))for(let r=0;r<i.pieces.length;r++){let n=i.pieces[r];if(n){let s=this.kpuzzleFaceletInfo[e][r];for(let o=0;o<s.length;o++){let a=n.facelets[o];if(a){let l=s[o],c=typeof a=="string"?a:a?.mask;l.facelet.material=Lr[l.faceIdx].stickerMaterial[c];let f=typeof a=="string"?c:a.hintMask??c;l.hintFacelet&&(l.hintFacelet.material=Lr[l.faceIdx].hintStickerMaterial[f])}}}}this.scheduleRenderCallback&&this.scheduleRenderCallback()}experimentalUpdateOptions(t){if("showMainStickers"in t)throw new Error("Unimplemented");let e=t.showFoundation;if(typeof e<"u"&&this.options.showFoundation!==e){this.options.showFoundation=e;for(let s of this.experimentalFoundationMeshes)s.visible=e}let i=t.hintFacelets;if(typeof i<"u"&&this.options.hintFacelets!==i&&c3[i]){this.options.hintFacelets=i;for(let s of this.experimentalHintStickerMeshes)s.visible=i==="floating";this.scheduleRenderCallback()}let{experimentalStickeringMask:r}=t;typeof r<"u"&&(this.options.experimentalStickeringMask=r,this.setStickeringMask(r),this.scheduleRenderCallback());let{faceletScale:n}=t;typeof n<"u"&&this.experimentalSetFaceletScale(n)}onPositionChange(t){let e=t.pattern;for(let i in ia){let r=ia[i];for(let n=0;n<r.length;n++){let s=e.patternData[i].pieces[n];this.pieces[i][s].matrix.copy(ia[i][n].matrix),this.pieces[i][s].matrix.multiply(p_[i][e.patternData[i].orientation[n]])}for(let n of t.movesInProgress){let s=n.move,o=Lr[l_[s.family]].vector,a=new Ye().makeRotationAxis(o,-this.ease(n.fraction)*n.direction*s.amount*Ei/4);for(let l=0;l<r.length;l++){let c=this.kpuzzle.moveToTransformation(s.modified({amount:1})),f=c.transformationData[i].permutation[l];if(l!==f||c.transformationData[i].orientationDelta[l]!==0){let h=e.patternData[i].pieces[l];this.pieces[i][h].matrix.premultiply(a)}}}}this.scheduleRenderCallback()}createCubie(t,e,i,r){let n=[];e.push(n);let s=new Qi;if(this.options.showFoundation){let o=this.createCubieFoundation();s.add(o),this.experimentalFoundationMeshes.push(o)}for(let o=0;o<i.stickerFaces.length;o++){let a=this.createSticker(Lr[Zf[o]],Lr[i.stickerFaces[o]],!1),l={faceIdx:i.stickerFaces[o],facelet:a};if(s.add(a),this.options.hintFacelets==="floating"){let c=this.createSticker(Lr[Zf[o]],Lr[i.stickerFaces[o]],!0);s.add(c),l.hintFacelet=c,this.experimentalHintStickerMeshes.push(c)}if(this.options.experimentalStickeringMask?.specialBehaviour==="picture"&&Hl[t]&&Hl[t][r]&&Hl[t][r][o]){let[c,f,h]=Hl[t][r][o];(async()=>{let u=async p=>{let d=await(p?this.hintSprite:this.sprite),y=this.createSticker(Lr[Zf[o]],Lr[i.stickerFaces[o]],p);y.material=new nt({map:d,side:p?rt:Vt,transparent:!0});let g=f/12,m=(f+1)/12,w=h/9,M=(h+1)/9,x=new Pe(g,w),k=new Pe(g,M),T=new Pe(m,M),b=new Pe(m,w);switch(c){case 1:{[x,k,T,b]=[k,T,b,x];break}case 2:{[x,k,T,b]=[T,b,x,k];break}case 3:{[x,k,T,b]=[b,x,k,T];break}}y.geometry.setAttribute("uv",new Et(new Float32Array([T.x,T.y,k.x,k.y,b.x,b.y,k.x,k.y,x.x,x.y,b.x,b.y]),2)),s.add(y)};u(!0),u(!1)})()}n.push(l)}return s.matrix.copy(i.matrix),s.matrixAutoUpdate=!1,this.add(s),s}createCubieFoundation(){let t=m_();return new wt(t,this.options.experimentalStickeringMask?.specialBehaviour==="picture"?d_:u_)}createSticker(t,e,i){let r=this.options.experimentalStickeringMask?.specialBehaviour==="picture"?Jf():i?this.#t():g_(),n=new wt(r,i?e.hintStickerMaterial.regular:e.stickerMaterial.regular);return n.setRotationFromEuler(t.fromZ),n.position.copy(t.vector),n.position.multiplyScalar(i?this.options.experimentalStickeringMask?.specialBehaviour==="picture"?c_:On.hintStickerElevation:On.stickerElevation),n.scale.setScalar(Kf(this.options)),n}experimentalSetFoundationOpacity(t){this.experimentalFoundationMeshes[0].material.opacity=t}experimentalSetFaceletScale(t){this.options.faceletScale=t;for(let e of Object.values(this.kpuzzleFaceletInfo))for(let i of e)for(let r of i)r.facelet.scale.setScalar(Kf(this.options)),r.hintFacelet?.scale.setScalar(Kf(this.options))}ease(t){return r3(t)}},i3=new nt({side:Vt,color:0}),cn=new nt({visible:!1}),ra=new nt({vertexColors:!0});s3=class{constructor(t,e){this.sz=t,this.tm=e,this.vertices=new Float32Array(9*t),this.uvs=void 0,this.colors=new Uint8Array(18*t),this.ind=new Uint8Array(t),this.pos=0,this.ipos=0}pos;ipos;vertices;colors;uvs;ind;add(t,e,i){this.vertices[this.pos]=t[3*e+0],this.vertices[this.pos+1]=t[3*e+1],this.vertices[this.pos+2]=t[3*e+2],this.colors[this.pos]=i>>16,this.colors[this.pos+1]=i>>8&255,this.colors[this.pos+2]=i&255,this.pos+=3}addUncolored(t,e){this.vertices[this.pos]=t[3*e+0],this.vertices[this.pos+1]=t[3*e+1],this.vertices[this.pos+2]=t[3*e+2],this.pos+=3}setind(t){this.ind[this.ipos++]=t}makePoly(t,e,i){let r=t;for(let n=1;3*(n+1)<r.length;n++)this.add(r,0,e),this.add(r,n,e),this.add(r,n+1,e),this.setind(i)}setAttributes(t){t.setAttribute("position",new Et(this.vertices,3));let e=this.colors.subarray(0,9*this.sz);t.setAttribute("color",new Et(e,3,!0))}makeGroups(t){t.clearGroups();for(let e=0;e<this.ipos;){let i=e++,r=this.ind[i];for(;this.ind[e]===r;)e++;t.addGroup(3*i,3*(e-i),r)}}saveOriginalColors(){this.colors.copyWithin(this.pos,0,this.pos)}},w_=class{origColor;origColorStickeringMask;faceColor;texturePtr=void 0;twistVal=-1;stickerStart;stickerEnd;hintStart;hintEnd;foundationStart;foundationEnd;isDup;faceNum;constructor(t,e,i,r){this.isDup=!!e.isDup,this.faceNum=e.face,this.stickerStart=t.ipos;let n=new Ne(e.color).getHex();this.origColor=n,this.origColorStickeringMask=n,r?.stickeringMask&&this.setStickeringMask(t,r.stickeringMask),this.faceColor=n;let s=this.stickerCoords(e.coords,i);t.makePoly(s,this.faceColor,this.isDup?4:0),this.stickerEnd=t.ipos}stickerCoords(t,e){return __(t.slice(),e)}hintCoords(t,e,i,r){t=this.stickerCoords(t,i),r=r.slice();for(let s=0;s<3;s++)r[s]*=.5*e;let n=new Array(t.length);for(let s=0;3*s<t.length;s++){let o=t.length/3-1-s;n[3*s]=t[3*o]+r[0],n[3*s+1]=t[3*o+1]+r[1],n[3*s+2]=t[3*o+2]+r[2]}return n}foundationCoords(t){let e=t.slice();for(let i=0;i<t.length;i++)e[i]=t[i]*.999;return e}addHint(t,e,i,r,n,s){this.hintStart=t.ipos;let o=this.hintCoords(e.coords,r,n,s);t.makePoly(o,this.faceColor,i&&!this.isDup?2:4),this.hintEnd=t.ipos}addFoundation(t,e,i){this.foundationStart=t.ipos;let r=this.foundationCoords(e.coords);t.makePoly(r,i,this.isDup?4:6),this.foundationEnd=t.ipos}setHintStickers(t,e){let i=this.isDup||!e?4:2;for(let r=this.hintStart;r<this.hintEnd;r++)t.ind[r]=i|t.ind[r]&1}setStickeringMask(t,e){let i=0;switch(e){case"regular":{i=this.origColor;break}case"dim":{this.origColor===16777215?i=14540253:i=new Ne(this.origColor).multiplyScalar(.5).getHex();break}case"oriented":{i=4513228;break}case"experimentalOriented2":{i=16776618;break}case"ignored":{i=4473924;break}case"mystery":{i=15911883;break}case"invisible":i=this.origColor}this.origColorStickeringMask=i;for(let r=9*this.stickerStart;r<9*this.stickerEnd;r+=3)t.colors[t.pos+r]=i>>16,t.colors[t.pos+r+1]=i>>8&255,t.colors[t.pos+r+2]=i&255;for(let r=9*this.hintStart;r<9*this.hintEnd;r+=3)t.colors[t.pos+r]=i>>16,t.colors[t.pos+r+1]=i>>8&255,t.colors[t.pos+r+2]=i&255;this.setHintStickers(t,e!=="invisible"&&!this.isDup)}addUVs(t){let e=t.uvs,i=t.vertices,r=new Array(3);for(let n=3*this.stickerStart;n<3*this.stickerEnd;n++){r[0]=i[3*n],r[1]=i[3*n+1],r[2]=i[3*n+2];let s=t.tm.getuv(this.faceNum,r);e[2*n]=s[0],e[2*n+1]=s[1]}for(let n=3*this.hintStart;n<3*this.hintEnd;n++){r[0]=i[3*n],r[1]=i[3*n+1],r[2]=i[3*n+2];let s=t.tm.getuv(this.faceNum,r);e[2*n]=s[0],e[2*n+1]=s[1]}}setTexture(t,e){if(this.texturePtr===e)return 0;this.texturePtr=e;let i=6*t.sz;return t.uvs.copyWithin(6*this.stickerStart,6*e.stickerStart+i,6*e.stickerEnd+i),t.uvs.copyWithin(6*this.hintStart,6*e.hintStart+i,6*e.hintEnd+i),1}setColor(t,e){let i=e.origColorStickeringMask;if(this.faceColor!==i){this.faceColor=i;let r=t.pos;return t.colors.copyWithin(9*this.stickerStart,9*e.stickerStart+r,9*e.stickerEnd+r),t.colors.copyWithin(9*this.hintStart,9*e.hintStart+r,9*e.hintEnd+r),1}else return 0}},M_=class{cubie;geo;constructor(t,e,i){this.cubie=new Qi;let r=t.coords,n=new s3(r.length/3-2,e);for(let o=1;3*o+3<r.length;o++)n.addUncolored(r,0),n.addUncolored(r,o),n.addUncolored(r,o+1);this.geo=new Ht,n.setAttributes(this.geo);let s=new wt(this.geo,cn);s.userData.quantumMove=i.notationMapper.notationToExternal(new A(t.name)),this.cubie.scale.setScalar(.99),this.cubie.add(s)}},R_=class{axis;order;constructor(t){let e=t.coordinates;this.axis=new O(e[0],e[1],e[2]),this.order=t.order}},b_=.71,Nr=.5,o3=class extends At{constructor(t,e,i,r=!1,n=!1,s=1,o=1,a={}){if(super(),this.scheduleRenderCallback=t,this.kpuzzle=e,this.stickerDat=i,this.faceletScale=o,this.params=a,i.stickers.length===0)throw Error("Reuse of stickerdat from pg; please don't do that.");this.hintMaterial=new nt({vertexColors:!0,transparent:!0,opacity:.5}),this.hintMaterialDisposable=!0,this.stickerMaterial=ra,this.stickerMaterialDisposable=!1,this.axesInfo={};let l=this.stickerDat.axis;for(let b of l)this.axesInfo[b.quantumMove.family]=new R_(b);let c=this.stickerDat.stickers;this.stickers={},this.materialArray1=new Array(8),this.materialArray2=new Array(8),this.showFoundation(r),r=!0;let f=0,h=3;for(let b of c){let L=b.coords.length/3;f+=h*(L-2)}let u=new s3(f,i.textureMapper),p=0,d=[],y=0;for(let b of i.faces)d.push(E_(b.coords)),y+=S_(b.coords);let g=o!=="auto"?o*o:b_,m=0;for(let b of c)b.isDup||m++;let w=Math.sqrt(y/m)*(1-Math.sqrt(g))/2;for(let b of c){let L=b.orbit,S=b.ord,v=b.ori;this.stickers[L]||(this.stickers[L]=[]),this.stickers[L][v]||(this.stickers[L][v]=[]);let D={};a.stickeringMask&&(D.stickeringMask=Lc(a.stickeringMask,L,S,v,!1));let P=new w_(u,b,w,D);this.stickers[L][v][S]=P}this.showHintStickers=n,n=!0;for(let b of c){let L=b.orbit,S=b.ord,v=b.ori;this.stickers[L][v][S].addHint(u,b,n,s,w,d[b.face])}this.foundationBound=u.ipos;for(let b of c){let L=b.orbit,S=b.ord,v=b.ori;r&&this.stickers[L][v][S].addFoundation(u,b,p)}let M=new Ht;u.setAttributes(M),u.makeGroups(M);let x=new wt(M,this.materialArray1);x.scale.set(Nr,Nr,Nr),this.add(x);let k=new wt(M,this.materialArray2);k.scale.set(Nr,Nr,Nr),this.add(k);let T=this.stickerDat.faces;this.movingObj=k,this.fixedGeo=M,this.filler=u;for(let b of T){let L=new M_(b,i.textureMapper,this.stickerDat);L.cubie.scale.set(Nr,Nr,Nr),this.add(L.cubie),this.controlTargets.push(L.cubie.children[0])}u.saveOriginalColors(),i.stickers=[],this.updateMaterialArrays()}stickers;axesInfo;stickerTargets=[];controlTargets=[];movingObj;filler;foundationBound;fixedGeo;lastPos;lastMoveTransformation;hintMaterial;stickerMaterial;materialArray1;materialArray2;textured=!1;showHintStickers=!1;showFoundations=!1;hintMaterialDisposable;stickerMaterialDisposable;#e=!1;isPG3DForTwisty3DPuzzleWrapper;dispose(){this.fixedGeo&&this.fixedGeo.dispose(),this.stickerMaterialDisposable&&(this.stickerMaterial.dispose(),this.stickerMaterial=ra,this.stickerMaterialDisposable=!1),this.hintMaterialDisposable&&(this.hintMaterial.dispose(),this.hintMaterial=ra,this.hintMaterialDisposable=!1)}experimentalGetStickerTargets(){return this.stickerTargets}experimentalGetControlTargets(){return this.controlTargets}#t(t){try{return this.kpuzzle.moveToTransformation(t),!0}catch{return!1}}getClosestMoveToAxis(t,e){let i=null,r=0,n=o=>o;switch(e.depth){case"secondSlice":{n=o=>o.modified({innerLayer:2});break}case"rotation":{n=o=>o.modified({family:`${o.family}v`});break}}for(let o of this.stickerDat.axis){let a=t.dot(new O(...o.coordinates));if(a>r){let l=this.stickerDat.notationMapper.notationToExternal(n(o.quantumMove));if(!l)continue;this.#t(l)&&(r=a,i=l)}}if(!i)return null;e.invert&&(i=i.invert());let s=this.kpuzzle.moveToTransformation(i).repetitionOrder();return{move:i,order:s}}setStickeringMask(t){if(this.params.stickeringMask=t,t.specialBehaviour!=="picture")for(let e of this.kpuzzle.definition.orbits){let{numPieces:i,numOrientations:r}=e;for(let n=0;n<i;n++)for(let s=0;s<r;s++){let o=Lc(t,e.orbitName,n,s,!1),a=this.stickers[e.orbitName][s][n];this.textured&&this.hintMaterialDisposable&&o==="invisible"||a.setStickeringMask(this.filler,o)}}this.#e=!0,this.lastPos&&this.onPositionChange(this.lastPos)}onPositionChange(t){let e=t.pattern.experimentalToTransformation();if(!e)throw new Error("indistinguishable pieces are not supported by PG3D yet");let i=new _t;this.movingObj.rotation.copy(i);let r=0,n=this.filler,s=n.ind;if(!this.lastPos||this.#e||!this.lastPos.pattern.experimentalToTransformation().isIdentical(e)){for(let a in this.stickers){let l=this.stickers[a],c=e.transformationData[a],f=l.length;if(f===1){let h=l[0];for(let u=0;u<h.length;u++){let p=c.permutation[u];this.textured?r+=h[u].setTexture(n,h[p]):r+=h[u].setColor(n,h[p])}}else for(let h=0;h<f;h++){let u=l[h];for(let p=0;p<u.length;p++){let d=(h+f-c.orientationDelta[p])%f,y=c.permutation[p];this.textured?r+=u[p].setTexture(n,l[d][y]):r+=u[p].setColor(n,l[d][y])}}}this.lastPos=t}let o=0;for(let a of t.movesInProgress){let l=a.move,c=this.stickerDat.unswizzle(l);if(!c)return;let f=l,h;try{h=this.kpuzzle.moveToTransformation(f.modified({amount:1}))}catch(y){let g=this.stickerDat.notationMapper.notationToInternal(f);if(g){let m=this.stickerDat.notationMapper.notationToExternal(g.modified({amount:1}));m&&(h=this.kpuzzle.moveToTransformation(m))}if(!h)throw console.log(y),y}let u=this.axesInfo[c.family],p=u.axis,d=-this.ease(a.fraction)*a.direction*c.amount*Ei/u.order;if(this.movingObj.rotateOnAxis(p,d),this.lastMoveTransformation!==h){for(let y in this.stickers){let g=this.stickers[y],m=g.length,w=h.transformationData[y];for(let M=0;M<m;M++){let x=g[M];for(let k=0;k<x.length;k++){let T=x[k],b=w.permutation[k],L=0;if((b!==k||w.orientationDelta[k]!==0)&&(L=1),L!==T.twistVal){if(L){for(let S=T.stickerStart;S<T.stickerEnd;S++)s[S]|=1;for(let S=T.hintStart;S<T.hintEnd;S++)s[S]|=1;for(let S=T.foundationStart;S<T.foundationEnd;S++)s[S]|=1}else{for(let S=T.stickerStart;S<T.stickerEnd;S++)s[S]&=-2;for(let S=T.hintStart;S<T.hintEnd;S++)s[S]&=-2;for(let S=T.foundationStart;S<T.foundationEnd;S++)s[S]&=-2}T.twistVal=L,o++}}}}this.lastMoveTransformation=h}}(this.#e||o)&&this.filler.makeGroups(this.fixedGeo),(this.#e||r)&&(this.textured&&(this.fixedGeo.getAttribute("uv").addUpdateRange(0,6*this.foundationBound),this.fixedGeo.getAttribute("uv").needsUpdate=!0),(this.#e||!this.textured)&&(this.fixedGeo.getAttribute("color").addUpdateRange(0,9*this.foundationBound),this.fixedGeo.getAttribute("color").needsUpdate=!0)),this.scheduleRenderCallback(),this.#e=!1}ease(t){return r3(t)}showHintFacelets(t){this.showHintStickers=t}updateMaterialArrays(){for(let t=0;t<8;t++)this.materialArray1[t]=cn,this.materialArray2[t]=cn;this.materialArray1[0]=this.stickerMaterial,this.materialArray2[1]=this.stickerMaterial,this.showHintStickers?(this.materialArray1[2]=this.hintMaterial,this.materialArray2[3]=this.hintMaterial):(this.materialArray1[2]=cn,this.materialArray2[3]=cn),this.showFoundations?(this.materialArray1[6]=i3,this.materialArray2[7]=i3):(this.materialArray1[6]=cn,this.materialArray2[7]=cn)}showFoundation(t){this.showFoundations=t}setHintStickerOpacity(t){this.hintMaterialDisposable&&(this.hintMaterial.dispose(),this.hintMaterialDisposable=!1),t===0?this.hintMaterial=cn:t===1?this.hintMaterial=this.stickerMaterial:(this.hintMaterial=new nt({vertexColors:!0,transparent:!0,opacity:t}),this.hintMaterialDisposable=!0)}experimentalUpdateOptions(t){t.hintFacelets!==void 0&&this.showHintFacelets(t.hintFacelets!=="none"),t.showFoundation!==void 0&&this.showFoundation(t.showFoundation),t.hintStickerOpacity!==void 0&&this.setHintStickerOpacity(t.hintStickerOpacity),this.#e=!0,this.lastPos&&this.onPositionChange(this.lastPos),typeof t.faceletScale<"u"&&t.faceletScale!==this.faceletScale&&console.warn("Dynamic facelet scale is not yet supported for PG3D. For now, re-create the TwistyPlayer to change the facelet scale."),this.updateMaterialArrays(),this.scheduleRenderCallback()}adduvs(){let t=this.filler;if(t.uvs)return;this.filler.uvs=new Float32Array(12*t.sz);for(let i in this.stickers){let r=this.stickers[i],n=r.length;for(let s=0;s<n;s++){let o=r[s];for(let a of o)a.addUVs(this.filler)}}t.uvs.copyWithin(6*t.sz,0,6*t.sz);let e=t.uvs.subarray(0,6*t.sz);this.fixedGeo.setAttribute("uv",new Et(e,2,!0))}experimentalUpdateTexture(t,e,i){e||(t=!1),t&&!this.filler.uvs&&this.adduvs(),this.textured=t,this.stickerMaterialDisposable&&(this.stickerMaterial.dispose(),this.stickerMaterialDisposable=!1),t?(this.stickerMaterial=new nt({map:e,side:Dt,transparent:!1}),this.stickerMaterialDisposable=!0):this.stickerMaterial=ra,this.hintMaterialDisposable&&(this.hintMaterial.dispose(),this.hintMaterialDisposable=!1),t?(this.hintMaterial=new nt({map:i,side:Dt,transparent:!0}),this.hintMaterialDisposable=!0):this.hintMaterial=ra,t&&this.showHintFacelets(i!==null),this.updateMaterialArrays(),this.#e=!0,this.lastPos&&this.onPositionChange(this.lastPos),this.scheduleRenderCallback()}},A_=class{renderTargets=new Set;twisty3Ds=new Set;threeJSScene=(async()=>new(await _i()).ThreeScene)();addRenderTarget(t){this.renderTargets.add(t)}scheduleRender(){for(let t of this.renderTargets)t.scheduleRender()}async addTwisty3DPuzzle(t){this.twisty3Ds.add(t),(await this.threeJSScene).add(t)}async removeTwisty3DPuzzle(t){this.twisty3Ds.delete(t),(await this.threeJSScene).remove(t)}async clearPuzzles(){for(let t of this.twisty3Ds)(await this.threeJSScene).remove(t);this.twisty3Ds.clear()}}});async function _i(){return k_??=Promise.resolve().then(()=>(l3(),a3))}function sh(){return P_??(devicePixelRatio||1)}async function oh(t,e,i,r){sa.length===0&&sa.push(ah());let n=await sa[0];return n.setSize(t,e),n.render(i,r),n.domElement}async function O_(t,e,i,r,n){if(t===0||e===0)return;sa.length===0&&sa.push(ah());let s=await oh(t,e,r,n),o=i.getContext("2d");o.clearRect(0,0,i.width,i.height),o.drawImage(s,0,0)}async function ah(){let t=(await _i()).ThreeWebGLRenderer,e=new t({antialias:!0,alpha:!0});return e.outputColorSpace=F_,e.setPixelRatio(sh()),e}function m3(t){return(Math.exp(1-t)-(1-t))/(1-Math.E)+1}async function lh(t,e,i=!1){let r=new(await _i()).ThreeSpherical(e.distance,(90-(i?-1:1)*e.latitude)/qs,((i?180:0)+e.longitude)/qs);r.makeSafe(),t.position.setFromSpherical(r),t.lookAt(0,0,0)}function X_(){return ql.shareAllNewRenderers!=="auto"?(ql.shareAllNewRenderers||nh++,ql.shareAllNewRenderers!=="never"):nh<W_?(nh++,!1):(x3=!0,!0)}function f3(){return x3}var ql,oa,g3,y3,Ir,ct,Ys,pt,Ks,zn,c3,S3,Ei,qs,D_,js,L_,Wt,pi,N_,wi,na,I_,Jt,th,h3,d3,u3,Hs,Fn,Ws,Xs,ih,k_,P_,p3,U_,sa,F_,v3,z_,rh,B_,G_,V_,H_,nh,W_,x3,jl,eh=C(()=>{Qn();ql={shareAllNewRenderers:"auto",showRenderStats:!1},oa=class{#e=0;#t=0;queue(t){return new Promise(async(e,i)=>{try{let r=++this.#e,n=await t;r>this.#t&&(this.#t=r,e(n))}catch(r){i(r)}})}},g3=0,y3=class{canReuse(t,e){return t===e||this.canReuseValue(t,e)}canReuseValue(t,e){return!1}debugGetChildren(){return Array.from(this.#e.values())}#e=new Set;addChild(t){this.#e.add(t)}removeChild(t){this.#e.delete(t)}lastSourceGeneration=0;markStale(t){if(t.detail.generation!==g3)throw new Error("A TwistyProp was marked stale too late!");if(this.lastSourceGeneration!==t.detail.generation){this.lastSourceGeneration=t.detail.generation;for(let e of this.#e)e.markStale(t);this.#i()}}#t=new Set;addRawListener(t,e){this.#t.add(t),e?.initial&&t()}removeRawListener(t){this.#t.delete(t)}#i(){this.#r||(this.#r=!0,setTimeout(()=>this.#s(),0))}#r=!1;#s(){if(!this.#r)throw new Error("Invalid dispatch state!");for(let t of this.#t)t();this.#r=!1}#n=new Map;addFreshListener(t){let e=new oa,i=null,r=async()=>{let n=await e.queue(this.get());i!==null&&this.canReuse(i,n)||(i=n,t(n))};this.#n.set(t,r),this.addRawListener(r,{initial:!0})}removeFreshListener(t){this.removeRawListener(this.#n.get(t)),this.#n.delete(t)}},Ir=class extends y3{#e;constructor(t){super(),this.#e=ba(()=>this.getDefaultValue()),t&&(this.#e=this.deriveFromPromiseOrValue(t,this.#e))}set(t){this.#e=this.deriveFromPromiseOrValue(t,this.#e);let e={sourceProp:this,value:this.#e,generation:++g3};this.markStale(new CustomEvent("stale",{detail:e}))}async get(){return this.#e}async deriveFromPromiseOrValue(t,e){return this.derive(await t,e)}},ct=class extends Ir{derive(t){return t}},Ys=Symbol("no value"),pt=class extends y3{constructor(t,e){super(),this.userVisibleErrorTracker=e,this.#e=t;for(let i of Object.values(t))i.addChild(this)}#e;#t=null;#i=null;async get(){let t=this.lastSourceGeneration;if(this.#i?.generation===t)return this.#i.output;let e={generation:t,output:this.#s(this.#r(),t,this.#t)};return this.#i=e,this.userVisibleErrorTracker?.reset(),e.output}async#r(){let t={};for(let[i,r]of Object.entries(this.#e))t[i]=r.get();let e={};for(let i in this.#e)e[i]=await t[i];return e}async#s(t,e,i=null){let r=await t,n=o=>(this.#t={inputs:r,output:Promise.resolve(o),generation:e},o);if(!i)return n(await this.derive(r));let s=i.inputs;for(let o in this.#e)if(!this.#e[o].canReuse(r[o],s[o]))return n(await this.derive(r));return i.output}},Ks=class{#e=[];addListener(t,e){let i=!1,r=n=>{i||e(n)};t.addFreshListener(r),this.#e.push(()=>{t.removeFreshListener(r),i=!0})}addMultiListener3(t,e){this.addMultiListener(t,e)}addMultiListener(t,e){let i=!1,r=t.length-1,n=async s=>{if(r>0){r--;return}if(i)return;let o=t.map(l=>l.get()),a=await Promise.all(o);e(a)};for(let s of t)s.addFreshListener(n);this.#e.push(()=>{for(let s of t)s.removeFreshListener(n);i=!0})}disconnect(){for(let t of this.#e)t()}},zn=class{constructor(t){this.callback=t}animFrameID=null;animFrame=this.animFrameWrapper.bind(this);requestIsPending(){return!!this.animFrameID}requestAnimFrame(){this.animFrameID||(this.animFrameID=requestAnimationFrame(this.animFrame))}cancelAnimFrame(){this.animFrameID&&(cancelAnimationFrame(this.animFrameID),this.animFrameID=0)}animFrameWrapper(t){this.animFrameID=0,this.callback(t)}},c3={floating:!0,none:!0},S3=class extends ct{getDefaultValue(){return"auto"}},Ei=Math.PI*2,qs=360/Ei,D_=class{};globalThis.HTMLElement?js=globalThis.HTMLElement:js=D_;L_=class{define(){}};globalThis.customElements?Wt=globalThis.customElements:Wt=new L_;N_=class{replaceSync(){}};globalThis.CSSStyleSheet?pi=globalThis.CSSStyleSheet:pi=N_;wi=class extends js{shadow;contentWrapper;constructor(t){super(),this.shadow=this.attachShadow({mode:t?.mode??"closed"}),this.contentWrapper=document.createElement("div"),this.contentWrapper.classList.add("wrapper"),this.shadow.appendChild(this.contentWrapper)}addCSS(t){this.shadow.adoptedStyleSheets.push(t)}removeCSS(t){let e=this.shadow.adoptedStyleSheets.indexOf(t);typeof e<"u"&&this.shadow.adoptedStyleSheets.splice(e,e+1)}addElement(t){return this.contentWrapper.appendChild(t)}prependElement(t){this.contentWrapper.prepend(t)}removeElement(t){return this.contentWrapper.removeChild(t)}};Wt.define("twisty-managed-custom-element",wi);na=globalThis.performance,I_=class{mode=0;dom=document.createElement("div");constructor(){this.dom.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",this.dom.addEventListener("click",t=>{t.preventDefault(),this.showPanel(++this.mode%this.dom.children.length)},!1),this.showPanel(0)}addPanel(t){return this.dom.appendChild(t.dom),t}showPanel(t){for(let e=0;e<this.dom.children.length;e++)this.dom.children[e].style.display=e===t?"block":"none";this.mode=t}beginTime=(na||Date).now();prevTime=this.beginTime;frames=0;fpsPanel=this.addPanel(new ih("FPS","#0ff","#002"));msPanel=this.addPanel(new ih("MS","#0f0","#020"));memPanel=na?.memory?this.addPanel(new ih("MB","#f08","#201")):null;REVISION=16;begin(){this.beginTime=(na||Date).now()}end(){this.frames++;let t=(na||Date).now();if(this.msPanel.update(t-this.beginTime,200),t>=this.prevTime+1e3&&(this.fpsPanel.update(this.frames*1e3/(t-this.prevTime),100),this.prevTime=t,this.frames=0,this.memPanel)){let e=na.memory;this.memPanel.update(e.usedJSHeapSize/1048576,e.jsHeapSizeLimit/1048576)}return t}update(){this.beginTime=this.end()}},Jt=Math.round(globalThis?.window?.devicePixelRatio??1),th=80*Jt,h3=48*Jt,d3=3*Jt,u3=2*Jt,Hs=3*Jt,Fn=15*Jt,Ws=74*Jt,Xs=30*Jt,ih=class{constructor(t,e,i){this.name=t,this.fg=e,this.bg=i,this.dom.width=th,this.dom.height=h3,this.dom.style.cssText="width:80px;height:48px",this.context.font=`bold ${9*Jt}px Helvetica,Arial,sans-serif`,this.context.textBaseline="top",this.context.fillStyle=i,this.context.fillRect(0,0,th,h3),this.context.fillStyle=e,this.context.fillText(t,d3,u3),this.context.fillRect(Hs,Fn,Ws,Xs),this.context.fillStyle=i,this.context.globalAlpha=.9,this.context.fillRect(Hs,Fn,Ws,Xs)}min=1/0;max=0;dom=document.createElement("canvas");context=this.dom.getContext("2d");update(t,e){this.min=Math.min(this.min,t),this.max=Math.max(this.max,t),this.context.fillStyle=this.bg,this.context.globalAlpha=1,this.context.fillRect(0,0,th,Fn),this.context.fillStyle=this.fg,this.context.fillText(`${Math.round(t)} ${this.name} (${Math.round(this.min)}-${Math.round(this.max)})`,d3,u3),this.context.drawImage(this.dom,Hs+Jt,Fn,Ws-Jt,Xs,Hs,Fn,Ws-Jt,Xs),this.context.fillRect(Hs+Ws-Jt,Fn,Jt,Xs),this.context.fillStyle=this.bg,this.context.globalAlpha=.9,this.context.fillRect(Hs+Ws-Jt,Fn,Jt,Math.round((1-t/e)*Xs))}},k_=null;P_=null;p3=.1,U_=class extends EventTarget{constructor(t){super(),this.target=t}#e=new Map;start(){this.addTargetListener("pointerdown",this.onPointerDown.bind(this)),this.addTargetListener("contextmenu",t=>{t.preventDefault()}),this.addTargetListener("touchmove",t=>t.preventDefault()),this.addTargetListener("dblclick",t=>t.preventDefault())}stop(){for(let[t,e]of this.#t.entries())this.target.removeEventListener(t,e);this.#t.clear(),this.#i=!1}#t=new Map;addTargetListener(t,e){this.#t.has(t)||(this.target.addEventListener(t,e),this.#t.set(t,e))}#i=!1;#r(){this.#i||(this.addTargetListener("pointermove",this.onPointerMove.bind(this)),this.addTargetListener("pointerup",this.onPointerUp.bind(this)),this.#i=!0)}#s(t){this.#e.delete(t.pointerId)}#n(t){let e=this.#e.get(t.pointerId);if(!e)return{movementInfo:null,hasMoved:!1};let i;return(t.movementX??0)!==0||(t.movementY??0)!==0?i={attachedInfo:e.attachedInfo,movementX:t.movementX,movementY:t.movementY,elapsedMs:t.timeStamp-e.lastTimeStamp}:i={attachedInfo:e.attachedInfo,movementX:t.clientX-e.lastClientX,movementY:t.clientY-e.lastClientY,elapsedMs:t.timeStamp-e.lastTimeStamp},e.lastClientX=t.clientX,e.lastClientY=t.clientY,e.lastTimeStamp=t.timeStamp,Math.abs(i.movementX)<p3&&Math.abs(i.movementY)<p3?{movementInfo:null,hasMoved:e.hasMoved}:(e.hasMoved=!0,{movementInfo:i,hasMoved:e.hasMoved})}onPointerDown(t){this.#r();let e={attachedInfo:{},hasMoved:!1,lastClientX:t.clientX,lastClientY:t.clientY,lastTimeStamp:t.timeStamp};this.#e.set(t.pointerId,e),this.target.setPointerCapture(t.pointerId)}onPointerMove(t){let e=this.#n(t).movementInfo;e&&(t.preventDefault(),this.dispatchEvent(new CustomEvent("move",{detail:e})))}onPointerUp(t){let e=this.#n(t),i=this.#e.get(t.pointerId);this.#s(t),this.target.releasePointerCapture(t.pointerId);let r;if(e.hasMoved)r=new CustomEvent("up",{detail:{attachedInfo:i.attachedInfo}});else{let{altKey:n,ctrlKey:s,metaKey:o,shiftKey:a}=t;r=new CustomEvent("press",{detail:{normalizedX:t.offsetX/this.target.offsetWidth*2-1,normalizedY:1-t.offsetY/this.target.offsetHeight*2,rightClick:!!(t.button&2),keys:{altKey:n,ctrlOrMetaKey:s||o,shiftKey:a}}})}this.dispatchEvent(r)}},sa=[];F_="srgb-linear";v3=new pi;v3.replaceSync(`
:host {
  width: 384px;
  height: 256px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
  place-content: center;
  contain: strict;
}

.loading {
  width: 4em;
  height: 4em;
  border-radius: 2.5em;
  border: 0.5em solid rgba(0, 0, 0, 0);
  border-top: 0.5em solid rgba(0, 0, 0, 0.7);
  border-right: 0.5em solid rgba(0, 0, 0, 0.7);
  animation: fade-in-delayed 4s, rotate 1s linear infinite;
}

@keyframes fade-in-delayed {
  0% { opacity: 0; }
  25% {opacity: 0; }
  100% { opacity: 1; }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* TODO: This is due to stats hack. Replace with \`canvas\`. */
.wrapper > canvas {
  max-width: 100%;
  max-height: 100%;
  animation: fade-in 0.25s ease-in;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.wrapper.invisible {
  opacity: 0;
}

.wrapper.drag-input-enabled > canvas {
  cursor: grab;
}

.wrapper.drag-input-enabled > canvas:active {
  cursor: grabbing;
}
`);z_=!0,rh=500,B_=50,G_=.75;V_=class{constructor(t,e,i,r){this.startTimestamp=t,this.momentumX=e,this.momentumY=i,this.callback=r,this.scheduler.requestAnimFrame(),this.lastTimestamp=t}scheduler=new zn(this.render.bind(this));lastTimestamp;render(t){let e=(this.lastTimestamp-this.startTimestamp)/rh,i=Math.min(1,(t-this.startTimestamp)/rh);if(e===0&&i>B_/rh)return;let r=m3(i)-m3(e);this.callback(this.momentumX*r*1e3,this.momentumY*r*1e3),i<1&&this.scheduler.requestAnimFrame(),this.lastTimestamp=t}},H_=class{constructor(t,e,i,r){this.model=t,this.mirror=e,this.canvas=i,this.dragTracker=r,this.dragTracker.addEventListener("move",this.onMove.bind(this)),this.dragTracker.addEventListener("up",this.onUp.bind(this))}experimentalInertia=z_;onMovementBound=this.onMovement.bind(this);experimentalHasBeenMoved=!1;temperMovement(t){return Math.sign(t)*Math.log(Math.abs(t*10)+1)/6}onMove(t){t.detail.attachedInfo??={};let{temperedX:e,temperedY:i}=this.onMovement(t.detail.movementX,t.detail.movementY),r=t.detail.attachedInfo;r.lastTemperedX=e*10,r.lastTemperedY=i*10,r.timestamp=t.timeStamp}onMovement(t,e){let i=this.mirror?-1:1,r=Math.min(this.canvas.offsetWidth,this.canvas.offsetHeight),n=this.temperMovement(t/r),s=this.temperMovement(e/r*G_);return this.model.twistySceneModel.orbitCoordinatesRequest.set((async()=>{let o=await this.model.twistySceneModel.orbitCoordinates.get();return{latitude:o.latitude+2*s*qs*i,longitude:o.longitude-2*n*qs}})()),{temperedX:n,temperedY:s}}onUp(t){t.preventDefault(),"lastTemperedX"in t.detail.attachedInfo&&"lastTemperedY"in t.detail.attachedInfo&&"timestamp"in t.detail.attachedInfo&&t.timeStamp-t.detail.attachedInfo.timestamp<60&&new V_(t.timeStamp,t.detail.attachedInfo.lastTemperedX,t.detail.attachedInfo.lastTemperedY,this.onMovementBound)}};nh=0,W_=2,x3=!1;jl=class extends wi{constructor(t,e,i){super(),this.model=t,this.options=i,this.scene=e??null,this.loadingElement=this.addElement(document.createElement("div")),this.loadingElement.classList.add("loading"),ql.showRenderStats&&(this.stats=new I_,this.stats.dom.style.position="absolute",this.contentWrapper.appendChild(this.stats.dom))}scene=null;stats=null;rendererIsShared=X_();loadingElement=null;async connectedCallback(){this.addCSS(v3),this.addElement((await this.canvasInfo()).canvas),this.#s(),new ResizeObserver(this.#s.bind(this)).observe(this.contentWrapper),this.orbitControls(),this.#e(),this.scheduleRender()}async#e(){(await this.#l()).addEventListener("press",async e=>{await this.model.twistySceneModel.movePressInput.get()==="basic"&&this.dispatchEvent(new CustomEvent("press",{detail:{pressInfo:e.detail,cameraPromise:this.camera()}}))})}#t=new oa;async clearCanvas(){if(this.rendererIsShared){let t=await this.canvasInfo();t.context.clearRect(0,0,t.canvas.width,t.canvas.height)}else{let e=(await this.renderer()).getContext();e.clear(e.COLOR_BUFFER_BIT)}}#i=0;#r=0;async#s(){let t=await this.#t.queue(this.camera()),e=this.contentWrapper.clientWidth,i=this.contentWrapper.clientHeight;this.#i=e,this.#r=i;let r=0,n=0,s=0;if(i>e&&(s=i-e,n=-Math.floor(.5*s)),t.aspect=e/i,t.setViewOffset(e,i-s,r,n,e,i),t.updateProjectionMatrix(),this.clearCanvas(),this.rendererIsShared){let o=await this.canvasInfo();o.canvas.width=e*sh(),o.canvas.height=i*sh(),o.canvas.style.width=`${e.toString()}px`,o.canvas.style.height=`${i.toString()}px`}else(await this.renderer()).setSize(e,i,!0);this.scheduleRender()}#n=null;async renderer(){if(this.rendererIsShared)throw new Error("renderer expected to be shared.");return this.#n??=ah()}#o=null;async canvasInfo(){return this.#o??=(async()=>{let t;if(this.rendererIsShared)t=this.addElement(document.createElement("canvas"));else{let i=await this.renderer();t=this.addElement(i.domElement)}this.loadingElement?.remove();let e=t.getContext("2d");return{canvas:t,context:e}})()}#a=null;async#l(){return this.#a??=(async()=>{let t=new U_((await this.canvasInfo()).canvas);return this.model?.twistySceneModel.dragInput.addFreshListener(e=>{let i=!1;switch(e){case"auto":{t.start(),i=!0;break}case"none":{t.stop();break}}this.contentWrapper.classList.toggle("drag-input-enabled",i)}),t})()}#f=null;async camera(){return this.#f??=(async()=>{let t=new(await _i()).ThreePerspectiveCamera(20,1,.1,20);return t.position.copy(new(await _i()).ThreeVector3(2,4,4).multiplyScalar(this.options?.backView?-1:1)),t.lookAt(0,0,0),t})()}#h=null;async orbitControls(){return this.#h??=(async()=>{let t=new H_(this.model,!!this.options?.backView,(await this.canvasInfo()).canvas,await this.#l());return this.model&&this.addListener(this.model.twistySceneModel.orbitCoordinates,async e=>{let i=await this.camera();lh(i,e,this.options?.backView),this.scheduleRender()}),t})()}addListener(t,e){t.addFreshListener(e),this.#c.push(()=>{t.removeFreshListener(e)})}#c=[];disconnect(){for(let t of this.#c)t();this.#c=[]}#d=null;experimentalNextRenderFinishedCallback(t){this.#d=t}async render(){if(!this.scene)throw new Error("Attempted to render without a scene");this.stats?.begin();let[t,e,i]=await Promise.all([this.scene.scene(),this.camera(),this.canvasInfo()]);this.rendererIsShared?O_(this.#i,this.#r,i.canvas,t,e):(await this.renderer()).render(t,e),this.stats?.end(),this.#d?.(),this.#d=null}#u=new zn(this.render.bind(this));scheduleRender(){this.#u.requestAnimFrame()}};Wt.define("twisty-3d-vantage",jl)});eh();Qn();Fr();function q_(t){return t.endsWith("v")||["x","y","z"].includes(t)?"Rotation":t.startsWith("2")||["M","E","S"].includes(t)?"Inner":"Outer"}var aa;function j_(){if(aa)return aa;aa={};let t=[...Object.keys(co.moves),...Object.keys(co.derivedMoves)];for(let e of t)aa[e]=q_(e);return aa}var E3={OBTM:{Rotation:{constantFactor:0,amountFactor:0,zeroAmount:0},Outer:{constantFactor:1,amountFactor:0,zeroAmount:0},Inner:{constantFactor:2,amountFactor:0,zeroAmount:0}},RBTM:{Rotation:{constantFactor:0,amountFactor:0,zeroAmount:0},Outer:{constantFactor:1,amountFactor:0,zeroAmount:0},Inner:{constantFactor:1,amountFactor:0,zeroAmount:0}},OBQTM:{Rotation:{constantFactor:0,amountFactor:0,zeroAmount:0},Outer:{constantFactor:0,amountFactor:1,zeroAmount:0},Inner:{constantFactor:0,amountFactor:2,zeroAmount:0}},RBQTM:{Rotation:{constantFactor:0,amountFactor:0,zeroAmount:0},Outer:{constantFactor:0,amountFactor:1,zeroAmount:0},Inner:{constantFactor:0,amountFactor:1,zeroAmount:0}},ETM:{Rotation:{constantFactor:1,amountFactor:0,zeroAmount:1},Outer:{constantFactor:1,amountFactor:0,zeroAmount:1},Inner:{constantFactor:1,amountFactor:0,zeroAmount:1}}};function Y_(t,e){let i=E3[t];if(!i)throw new Error(`Invalid metric for 3x3x3: ${t}`);let r=j_(),n=e.quantum.toString();if(!(n in r))throw new Error(`Invalid move for 3x3x3 ${t}: ${n}`);let s=r[n],{constantFactor:o,amountFactor:a,zeroAmount:l}=i[s];return e.amount===0?l:o+a*Math.abs(e.amount)}var la=class extends gr{constructor(t){super(),this.metric=t}traverseAlg(t){let e=0;for(let i of t.childAlgNodes())e+=this.traverseAlgNode(i);return e}traverseGrouping(t){let e=t.alg;return this.traverseAlg(e)*Math.abs(t.amount)}traverseMove(t){return this.metric(t)}traverseCommutator(t){return 2*(this.traverseAlg(t.A)+this.traverseAlg(t.B))}traverseConjugate(t){return 2*this.traverseAlg(t.A)+this.traverseAlg(t.B)}traversePause(t){return 0}traverseNewline(t){return 0}traverseLineComment(t){return 0}},K_=class extends gr{traverseAlg(t){let e=0;for(let i of t.childAlgNodes())e+=this.traverseAlgNode(i);return e}traverseGrouping(t){let e=t.alg;return this.traverseAlg(e)*Math.abs(t.amount)}traverseMove(t){return 1}traverseCommutator(t){return 2*(this.traverseAlg(t.A)+this.traverseAlg(t.B))}traverseConjugate(t){return 2*this.traverseAlg(t.A)+this.traverseAlg(t.B)}traversePause(t){return 1}traverseNewline(t){return 1}traverseLineComment(t){return 1}};function _3(t){return"A"<=t&&t<="Z"}function w3(t){let e=t.family;return _3(e[0])&&e[e.length-1]==="v"||e==="x"||e==="y"||e==="z"||e==="T"?0:1}function Z_(t){return 1}function M3(t){let e=t.family;return _3(e[0])&&e[e.length-1]==="v"||e==="x"||e==="y"||e==="z"||e==="T"?0:1}function Q_(t){return Math.abs(t.amount)*M3(t)}var MI=jt(la,[w3]),$_=jt(la,[Z_]),J_=jt(la,[Q_]),e6=jt(la,[M3]),R3=jt(K_,[w3]);function b3(t,e,i){if(t.id==="3x3x3"){if(e in E3)return jt(la,[r=>Y_(e,r)])(i)}else switch(e){case"ETM":return $_(i);case"RBTM":{if(t.pg)return e6(i);break}case"RBQTM":{if(t.pg)return J_(i);break}}throw new Error("Unsupported puzzle or metric.")}var t6=class extends gr{traverseAlg(t){let e=0;for(let i of t.childAlgNodes())e+=this.traverseAlgNode(i);return e}traverseGrouping(t){return this.traverseAlg(t.alg)*Math.abs(t.amount)}traverseMove(t){return 1}traverseCommutator(t){return 2*(this.traverseAlg(t.A)+this.traverseAlg(t.B))}traverseConjugate(t){return 2*this.traverseAlg(t.A)+this.traverseAlg(t.B)}traversePause(t){return 1}traverseNewline(t){return 0}traverseLineComment(t){return 0}},A3=jt(t6);zc();Qn();to();Fr();function uh(t,e){if(t===e)return!0;if(t.length!==e.length)return!1;for(let i=0;i<t.length;i++)if(t[i]!==e[i])return!1;return!0}function C3(t,e,i){if(t===e)return!0;if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++)if(!i(t[r],e[r]))return!1;return!0}function ph(t,e,i){return uc(t,i-e,e)}var i6=class{constructor(t){this.model=t,t.tempoScale.addFreshListener(e=>{this.tempoScale=e})}catchingUp=!1;pendingFrame=!1;tempoScale;scheduler=new zn(this.animFrame.bind(this));start(){this.catchingUp||(this.lastTimestamp=performance.now()),this.catchingUp=!0,this.pendingFrame=!0,this.scheduler.requestAnimFrame()}stop(){this.catchingUp=!1,this.scheduler.cancelAnimFrame()}catchUpMs=500;lastTimestamp=0;animFrame(t){this.scheduler.requestAnimFrame();let e=this.tempoScale*(t-this.lastTimestamp)/this.catchUpMs;this.lastTimestamp=t,this.model.catchUpMove.set((async()=>{let i=await this.model.catchUpMove.get();if(i.move===null)return i;let r=i.amount+e;return r>=1?(this.pendingFrame=!0,this.stop(),this.model.timestampRequest.set("end"),{move:null,amount:0}):(this.pendingFrame=!1,{move:i.move,amount:r})})())}},r6=class{constructor(t,e){this.delegate=e,this.model=t,this.lastTimestampPromise=this.#e(),this.model.playingInfo.addFreshListener(this.onPlayingProp.bind(this)),this.catchUpHelper=new i6(this.model),this.model.catchUpMove.addFreshListener(this.onCatchUpMoveProp.bind(this))}playing=!1;direction=1;catchUpHelper;model;lastDatestamp=0;lastTimestampPromise;scheduler=new zn(this.animFrame.bind(this));async onPlayingProp(t){t.playing!==this.playing&&(t.playing?this.play(t):this.pause())}async onCatchUpMoveProp(t){let e=t.move!==null;e!==this.catchUpHelper.catchingUp&&(e?this.catchUpHelper.start():this.catchUpHelper.stop()),this.scheduler.requestAnimFrame()}async#e(){return(await this.model.detailedTimelineInfo.get()).timestamp}jumpToStart(t){this.model.timestampRequest.set("start"),this.pause(),t?.flash&&this.delegate.flash()}jumpToEnd(t){this.model.timestampRequest.set("end"),this.pause(),t?.flash&&this.delegate.flash()}playPause(){this.playing?this.pause():this.play()}async play(t){let e=t?.direction??1,i=await this.model.coarseTimelineInfo.get();(t?.autoSkipToOtherEndIfStartingAtBoundary??!0)&&(e===1&&i.atEnd&&(this.model.timestampRequest.set("start"),this.delegate.flash()),e===-1&&i.atStart&&(this.model.timestampRequest.set("end"),this.delegate.flash())),this.model.playingInfo.set({playing:!0,direction:e,untilBoundary:t?.untilBoundary??"entire-timeline",loop:t?.loop??!1}),this.playing=!0,this.lastDatestamp=performance.now(),this.lastTimestampPromise=this.#e(),this.scheduler.requestAnimFrame()}pause(){this.playing=!1,this.scheduler.cancelAnimFrame(),this.model.playingInfo.set({playing:!1,untilBoundary:"entire-timeline"})}#t=new oa;async animFrame(t){this.playing&&this.scheduler.requestAnimFrame();let e=this.lastDatestamp,i=await this.#t.queue(Promise.all([this.model.playingInfo.get(),this.lastTimestampPromise,this.model.timeRange.get(),this.model.tempoScale.get(),this.model.currentMoveInfo.get()])),[r,n,s,o,a]=i;if(!r.playing){this.playing=!1;return}let l=a.earliestEnd;(a.currentMoves.length===0||r.untilBoundary==="entire-timeline")&&(l=s.end);let c=a.latestStart;(a.currentMoves.length===0||r.untilBoundary==="entire-timeline")&&(c=s.start);let f=(t-e)*this.direction*o;f=Math.max(f,1),f*=r.direction;let h=n+f,u=null;h>=l?r.loop?h=ph(h,s.start,s.end):(h===s.end?u="end":h=l,this.playing=!1,this.model.playingInfo.set({playing:!1})):h<=c&&(r.loop?h=ph(h,s.start,s.end):(h===s.start?u="start":h=c,this.playing=!1,this.model.playingInfo.set({playing:!1}))),this.lastDatestamp=t,this.lastTimestampPromise=Promise.resolve(h),this.model.timestampRequest.set(u??h)}},n6=class{constructor(t,e){this.model=t,this.animationController=new r6(t,e)}animationController;jumpToStart(t){this.animationController.jumpToStart(t)}jumpToEnd(t){this.animationController.jumpToEnd(t)}togglePlay(t){typeof t>"u"&&this.animationController.playPause(),t?this.animationController.play():this.animationController.pause()}async visitTwizzleLink(){let t=document.createElement("a");t.href=await this.model.twizzleLink(),t.target="_blank",t.click()}},s6={"bottom-row":!0,none:!0},o6=class extends ct{getDefaultValue(){return"auto"}},Sh=new pi;Sh.replaceSync(`
:host {
  width: 384px;
  height: 256px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
}

.wrapper > * {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.wrapper.back-view-side-by-side {
  grid-template-columns: 1fr 1fr;
}

.wrapper.back-view-top-right {
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr 3fr;
}

.wrapper.back-view-top-right > :nth-child(1) {
  grid-row: 1 / 3;
  grid-column: 1 / 3;
}

.wrapper.back-view-top-right > :nth-child(2) {
  grid-row: 1 / 2;
  grid-column: 2 / 3;
}
`);var Yl="http://www.w3.org/2000/svg",T3="data-copy-id",D3=0;function a6(){return D3+=1,`svg${D3.toString()}`}var l6={dim:{white:"#dddddd",orange:"#884400",limegreen:"#008800",red:"#660000","rgb(34, 102, 255)":"#000088",yellow:"#888800","rgb(102, 0, 153)":"rgb(50, 0, 76)",purple:"#3f003f"},oriented:"#44ddcc",ignored:"#555555",invisible:"#00000000"},c6=class{constructor(t,e,i,r=!1){if(this.kpuzzle=t,this.showUnknownOrientations=r,!e)throw new Error(`No SVG definition for puzzle type: ${t.name()}`);this.svgID=a6(),this.wrapperElement=document.createElement("div"),this.wrapperElement.classList.add("svg-wrapper"),this.wrapperElement.innerHTML=e;let n=this.wrapperElement.querySelector("svg");if(!n)throw new Error("Could not get SVG element");if(this.svgElement=n,Yl!==n.namespaceURI)throw new Error("Unexpected XML namespace");n.style.maxWidth="100%",n.style.maxHeight="100%",this.gradientDefs=document.createElementNS(Yl,"defs"),n.insertBefore(this.gradientDefs,n.firstChild);for(let s of t.definition.orbits)for(let o=0;o<s.numPieces;o++)for(let a=0;a<s.numOrientations;a++){let l=this.elementID(s.orbitName,o,a),c=this.elementByID(l),f=c?.style.fill;i?(()=>{let h=i.orbits;if(!h)return;let u=h[s.orbitName];if(!u)return;let p=u.pieces[o];if(!p)return;let d=p.facelets[a];if(!d)return;let y=typeof d=="string"?d:d?.mask,g=l6[y];typeof g=="string"?f=g:g&&(f=g[f])})():f=c?.style.fill,this.originalColors[l]=f,this.gradients[l]=this.newGradient(l,f),this.gradientDefs.appendChild(this.gradients[l]),c?.setAttribute("style",`fill: url(#grad-${this.svgID}-${l})`)}for(let s of Array.from(n.querySelectorAll(`[${T3}]`))){let o=s.getAttribute(T3);s.setAttribute("style",`fill: url(#grad-${this.svgID}-${o})`)}this.showUnknownOrientations&&this.drawPattern(this.kpuzzle.defaultPattern())}wrapperElement;svgElement;gradientDefs;originalColors={};gradients={};svgID;drawPattern(t,e,i){this.draw(t,e,i)}draw(t,e,i){let r=e?.experimentalToTransformation();if(!t)throw new Error("Distinguishable pieces are not handled for SVG yet!");for(let n of t.kpuzzle.definition.orbits){let s=t.patternData[n.orbitName],o=r?r.transformationData[n.orbitName]:null;for(let a=0;a<n.numPieces;a++)for(let l=0;l<n.numOrientations;l++){let c=this.elementID(n.orbitName,a,l),f=this.elementID(n.orbitName,s.pieces[a],(n.numOrientations-s.orientation[a]+l)%n.numOrientations),h=!1;if(o){let u=this.elementID(n.orbitName,o.permutation[a],(n.numOrientations-o.orientationDelta[a]+l)%n.numOrientations);f===u&&(h=!0),i=i||0;let p=100*(1-i*i*(2-i*i));this.gradients[c].children[0].setAttribute("stop-color",this.originalColors[f]),this.gradients[c].children[0].setAttribute("offset",`${Math.max(p-5,0)}%`),this.gradients[c].children[1].setAttribute("offset",`${Math.max(p-5,0)}%`),this.gradients[c].children[2].setAttribute("offset",`${p}%`),this.gradients[c].children[3].setAttribute("offset",`${p}%`),this.gradients[c].children[3].setAttribute("stop-color",this.originalColors[u])}else h=!0;h&&(this.showUnknownOrientations&&s.orientationMod?.[a]===1?(this.gradients[c].children[0].setAttribute("stop-color","#000"),this.gradients[c].children[0].setAttribute("offset","5%"),this.gradients[c].children[1].setAttribute("offset","5%"),this.gradients[c].children[2].setAttribute("offset","20%"),this.gradients[c].children[3].setAttribute("offset","20%"),this.gradients[c].children[3].setAttribute("stop-color",this.originalColors[f])):(this.gradients[c].children[0].setAttribute("stop-color",this.originalColors[f]),this.gradients[c].children[0].setAttribute("offset","100%"),this.gradients[c].children[1].setAttribute("offset","100%"),this.gradients[c].children[2].setAttribute("offset","100%"),this.gradients[c].children[3].setAttribute("offset","100%")))}}}newGradient(t,e){let i=document.createElementNS(Yl,"radialGradient");i.setAttribute("id",`grad-${this.svgID}-${t}`),i.setAttribute("r","70.7107%");let r=[{offset:0,color:e},{offset:0,color:"black"},{offset:0,color:"black"},{offset:0,color:e}];for(let n of r){let s=document.createElementNS(Yl,"stop");s.setAttribute("offset",`${n.offset}%`),s.setAttribute("stop-color",n.color),s.setAttribute("stop-opacity","1"),i.appendChild(s)}return i}elementID(t,e,i){return`${t}-l${e}-o${i}`}elementByID(t){return this.wrapperElement.querySelector(`#${t}`)}},K3=new pi;K3.replaceSync(`
:host {
  width: 384px;
  height: 256px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
}

.svg-wrapper,
twisty-2d-svg,
svg {
  width: 100%;
  height: 100%;
  display: grid;
  min-height: 0;
}

svg {
  animation: fade-in 0.25s ease-in;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
`);var Z3=class extends wi{constructor(t,e,i,r,n){super(),this.model=t,this.kpuzzle=e,this.svgSource=i,this.options=r,this.puzzleLoader=n,this.addCSS(K3),this.resetSVG(),this.#t.addListener(this.model.puzzleID,s=>{n?.id!==s&&this.disconnect()}),this.#t.addListener(this.model.legacyPosition,this.onPositionChange.bind(this)),this.options?.experimentalStickeringMask&&this.experimentalSetStickeringMask(this.options.experimentalStickeringMask)}svgWrapper;scheduler=new zn(this.render.bind(this));#e=null;#t=new Ks;disconnect(){this.#t.disconnect()}onPositionChange(t){try{if(t.movesInProgress.length>0){let e=t.movesInProgress[0].move,i=e;t.movesInProgress[0].direction===-1&&(i=e.invert());let r=t.pattern.applyMove(i);this.svgWrapper.draw(t.pattern,r,t.movesInProgress[0].fraction)}else this.svgWrapper.draw(t.pattern),this.#e=t}catch(e){console.warn("Bad position (this doesn't necessarily mean something is wrong). Pre-emptively disconnecting:",this.puzzleLoader?.id,e),this.disconnect()}}scheduleRender(){this.scheduler.requestAnimFrame()}experimentalSetStickeringMask(t){this.resetSVG(t)}resetSVG(t){this.svgWrapper&&this.removeElement(this.svgWrapper.wrapperElement),this.kpuzzle&&(this.svgWrapper=new c6(this.kpuzzle,this.svgSource,t),this.addElement(this.svgWrapper.wrapperElement),this.#e&&this.onPositionChange(this.#e))}render(){}};Wt.define("twisty-2d-puzzle",Z3);var f6=class{constructor(t,e,i,r){this.model=t,this.schedulable=e,this.puzzleLoader=i,this.effectiveVisualization=r,this.twisty2DPuzzle(),this.#e.addListener(this.model.twistySceneModel.stickeringMask,async n=>{(await this.twisty2DPuzzle()).experimentalSetStickeringMask(n)})}#e=new Ks;disconnect(){this.#e.disconnect()}scheduleRender(){}#t=null;async twisty2DPuzzle(){return this.#t??=(async()=>{let t=this.effectiveVisualization==="experimental-2D-LL-face"?this.puzzleLoader.llFaceSVG():this.effectiveVisualization==="experimental-2D-LL"?this.puzzleLoader.llSVG():this.puzzleLoader.svg();return new Z3(this.model,await this.puzzleLoader.kpuzzle(),await t,{},this.puzzleLoader)})()}},Q3=class extends wi{constructor(t,e){super(),this.model=t,this.effectiveVisualization=e}#e=new Ks;disconnect(){this.#e.disconnect()}async connectedCallback(){this.addCSS(Sh),this.model&&this.#e.addListener(this.model.twistyPlayerModel.puzzleLoader,this.onPuzzleLoader.bind(this))}#t;async scene(){return this.#t??=(async()=>new(await _i()).ThreeScene)()}scheduleRender(){this.#i?.scheduleRender()}#i=null;currentTwisty2DPuzzleWrapper(){return this.#i}async setCurrentTwisty2DPuzzleWrapper(t){let e=this.#i;this.#i=t,e?.disconnect();let i=t.twisty2DPuzzle();this.contentWrapper.textContent="",this.addElement(await i)}async onPuzzleLoader(t){this.#i?.disconnect();let e=new f6(this.model.twistyPlayerModel,this,t,this.effectiveVisualization);this.setCurrentTwisty2DPuzzleWrapper(e)}};Wt.define("twisty-2d-scene-wrapper",Q3);var ic=class{constructor(t,e,i){this.elem=t,this.prefix=e,this.validSuffixes=i}#e=null;clearValue(){this.#e&&this.elem.contentWrapper.classList.remove(this.#e),this.#e=null}setValue(t){if(!this.validSuffixes.includes(t))throw new Error(`Invalid suffix: ${t}`);let e=`${this.prefix}${t}`,i=this.#e!==e;return i&&(this.clearValue(),this.elem.contentWrapper.classList.add(e),this.#e=e),i}},$3=class{#e;reject;promise=new Promise((t,e)=>{this.#e=t,this.reject=e});handleNewValue(t){this.#e(t)}},J3=class extends EventTarget{constructor(t,e,i,r){super(),this.model=t,this.schedulable=e,this.puzzleLoader=i,this.visualizationStrategy=r,this.twisty3DPuzzle(),this.#e.addListener(this.model.puzzleLoader,n=>{this.puzzleLoader.id!==n.id&&this.disconnect()}),this.#e.addListener(this.model.legacyPosition,async n=>{try{(await this.twisty3DPuzzle()).onPositionChange(n),this.scheduleRender()}catch{this.disconnect()}}),this.#e.addListener(this.model.twistySceneModel.hintFacelet,async n=>{(await this.twisty3DPuzzle()).experimentalUpdateOptions({hintFacelets:n==="auto"?"floating":n}),this.scheduleRender()}),this.#e.addListener(this.model.twistySceneModel.foundationDisplay,async n=>{(await this.twisty3DPuzzle()).experimentalUpdateOptions({showFoundation:n!=="none"}),this.scheduleRender()}),this.#e.addListener(this.model.twistySceneModel.stickeringMask,async n=>{(await this.twisty3DPuzzle()).setStickeringMask(n),this.scheduleRender()}),this.#e.addListener(this.model.twistySceneModel.faceletScale,async n=>{(await this.twisty3DPuzzle()).experimentalUpdateOptions({faceletScale:n}),this.scheduleRender()}),this.#e.addMultiListener3([this.model.twistySceneModel.stickeringMask,this.model.twistySceneModel.foundationStickerSprite,this.model.twistySceneModel.hintStickerSprite],async n=>{"experimentalUpdateTexture"in await this.twisty3DPuzzle()&&((await this.twisty3DPuzzle()).experimentalUpdateTexture(n[0].specialBehaviour==="picture",n[1],n[2]),this.scheduleRender())})}#e=new Ks;disconnect(){this.#e.disconnect()}scheduleRender(){this.schedulable.scheduleRender(),this.dispatchEvent(new CustomEvent("render-scheduled"))}#t=null;async twisty3DPuzzle(){return this.#t??=(async()=>{let t=_i();if(this.puzzleLoader.id==="3x3x3"&&this.visualizationStrategy==="Cube3D"){let[e,i,r,n]=await Promise.all([this.model.twistySceneModel.foundationStickerSprite.get(),this.model.twistySceneModel.hintStickerSprite.get(),this.model.twistySceneModel.stickeringMask.get(),this.model.twistySceneModel.initialHintFaceletsAnimation.get()]);return(await t).cube3DShim(()=>this.schedulable.scheduleRender(),{foundationSprite:e,hintSprite:i,experimentalStickeringMask:r,initialHintFaceletsAnimation:n})}else{let[e,i,r,n]=await Promise.all([this.model.twistySceneModel.hintFacelet.get(),this.model.twistySceneModel.foundationStickerSprite.get(),this.model.twistySceneModel.hintStickerSprite.get(),this.model.twistySceneModel.faceletScale.get()]),s=(await t).pg3dShim(()=>this.schedulable.scheduleRender(),this.puzzleLoader,e==="auto"?"floating":e,n,this.puzzleLoader.id==="kilominx");return s.then(o=>o.experimentalUpdateTexture(!0,i??void 0,r??void 0)),s}})()}async raycastMove(t,e){let i=await this.twisty3DPuzzle();if(!("experimentalGetControlTargets"in i)){console.info("not PG3D! skipping raycast");return}let r=i.experimentalGetControlTargets(),[n,s]=await Promise.all([t,this.model.twistySceneModel.movePressCancelOptions.get()]),o=n.intersectObjects(r);if(o.length>0){let a=i.getClosestMoveToAxis(o[0].point,e);a?this.model.experimentalAddMove(a.move,{cancel:s}):console.info("Skipping move!")}}},mh=class extends wi{constructor(t){super(),this.model=t}#e=new ic(this,"back-view-",["auto","none","side-by-side","top-right"]);#t=new Ks;disconnect(){this.#t.disconnect()}async connectedCallback(){this.addCSS(Sh);let t=new jl(this.model,this);this.addVantage(t),this.model&&(this.#t.addMultiListener([this.model.puzzleLoader,this.model.visualizationStrategy],this.onPuzzle.bind(this)),this.#t.addListener(this.model.backView,this.onBackView.bind(this))),this.scheduleRender()}#i=null;setBackView(t){let e=["side-by-side","top-right"].includes(t),i=this.#i!==null;this.#e.setValue(t),e?i||(this.#i=new jl(this.model,this,{backView:!0}),this.addVantage(this.#i),this.scheduleRender()):this.#i&&(this.removeVantage(this.#i),this.#i=null)}onBackView(t){this.setBackView(t)}async onPress(t){let e=this.#n;if(!e){console.info("no wrapper; skipping scene wrapper press!");return}let i=(async()=>{let[r,{ThreeRaycaster:n,ThreeVector2:s}]=await Promise.all([t.detail.cameraPromise,(async()=>{let{ThreeRaycaster:l,ThreeVector2:c}=await _i();return{ThreeRaycaster:l,ThreeVector2:c}})()]),o=new n,a=new s(t.detail.pressInfo.normalizedX,t.detail.pressInfo.normalizedY);return o.setFromCamera(a,r),o})();e.raycastMove(i,{invert:!t.detail.pressInfo.rightClick,depth:t.detail.pressInfo.keys.ctrlOrMetaKey?"rotation":t.detail.pressInfo.keys.shiftKey?"secondSlice":"none"})}#r;async scene(){return this.#r??=(async()=>new(await _i()).ThreeScene)()}#s=new Set;addVantage(t){t.addEventListener("press",this.onPress.bind(this)),this.#s.add(t),this.contentWrapper.appendChild(t)}removeVantage(t){this.#s.delete(t),t.remove(),t.disconnect(),this.#n?.disconnect()}experimentalVantages(){return this.#s.values()}scheduleRender(){for(let t of this.#s)t.scheduleRender()}#n=null;async setCurrentTwisty3DPuzzleWrapper(t,e){let i=this.#n;try{this.#n=e,i?.disconnect(),t.add(await e.twisty3DPuzzle())}finally{i&&t.remove(await i.twisty3DPuzzle())}this.#o.handleNewValue(e)}#o=new $3;async experimentalTwisty3DPuzzleWrapper(){return this.#n||this.#o.promise}#a=new oa;async onPuzzle(t){if(t[1]==="2D")return;this.#n?.disconnect();let[e,i]=await this.#a.queue(Promise.all([this.scene(),new J3(this.model,this,t[0],t[1])]));this.setCurrentTwisty3DPuzzleWrapper(e,i)}};Wt.define("twisty-3d-scene-wrapper",mh);var eS=new pi;eS.replaceSync(`
:host {
  width: 384px;
  height: 24px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.wrapper {
  grid-auto-flow: column;
}

.viewer-link-none .twizzle-link-button {
  display: none;
}

.wrapper twisty-button,
.wrapper twisty-control-button {
  width: inherit;
  height: inherit;
}
`);var tS=new pi;tS.replaceSync(`
:host:not([hidden]) {
  display: grid;
}

:host {
  width: 48px;
  height: 24px;
}

.wrapper {
  width: 100%;
  height: 100%;
}

button {
  width: 100%;
  height: 100%;
  border: none;
  
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  background-color: rgba(196, 196, 196, 0.75);
}

button:enabled {
  background-color: rgba(196, 196, 196, 0.75)
}

.dark-mode button:enabled {
  background-color: #88888888;
}

button:disabled {
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0.25;
  pointer-events: none;
}

.dark-mode button:disabled {
  background-color: #ffffff44;
}

button:enabled:hover {
  background-color: rgba(255, 255, 255, 0.75);
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

/* TODO: fullscreen icons have too much padding?? */
.svg-skip-to-start button,
button.svg-skip-to-start {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNjQzIDEwMzdxMTktMTkgMzItMTN0MTMgMzJ2MTQ3MnEwIDI2LTEzIDMydC0zMi0xM2wtNzEwLTcxMHEtOS05LTEzLTE5djcxMHEwIDI2LTEzIDMydC0zMi0xM2wtNzEwLTcxMHEtOS05LTEzLTE5djY3OHEwIDI2LTE5IDQ1dC00NSAxOUg5NjBxLTI2IDAtNDUtMTl0LTE5LTQ1VjEwODhxMC0yNiAxOS00NXQ0NS0xOWgxMjhxMjYgMCA0NSAxOXQxOSA0NXY2NzhxNC0xMSAxMy0xOWw3MTAtNzEwcTE5LTE5IDMyLTEzdDEzIDMydjcxMHE0LTExIDEzLTE5eiIvPjwvc3ZnPg==");
}

.svg-skip-to-end button,
button.svg-skip-to-end {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik05NDEgMjU0N3EtMTkgMTktMzIgMTN0LTEzLTMyVjEwNTZxMC0yNiAxMy0zMnQzMiAxM2w3MTAgNzEwcTggOCAxMyAxOXYtNzEwcTAtMjYgMTMtMzJ0MzIgMTNsNzEwIDcxMHE4IDggMTMgMTl2LTY3OHEwLTI2IDE5LTQ1dDQ1LTE5aDEyOHEyNiAwIDQ1IDE5dDE5IDQ1djE0MDhxMCAyNi0xOSA0NXQtNDUgMTloLTEyOHEtMjYgMC00NS0xOXQtMTktNDV2LTY3OHEtNSAxMC0xMyAxOWwtNzEwIDcxMHEtMTkgMTktMzIgMTN0LTEzLTMydi03MTBxLTUgMTAtMTMgMTl6Ii8+PC9zdmc+");
}

.svg-step-forward button,
button.svg-step-forward {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNjg4IDE1NjhxMCAyNi0xOSA0NWwtNTEyIDUxMnEtMTkgMTktNDUgMTl0LTQ1LTE5cS0xOS0xOS0xOS00NXYtMjU2aC0yMjRxLTk4IDAtMTc1LjUgNnQtMTU0IDIxLjVxLTc2LjUgMTUuNS0xMzMgNDIuNXQtMTA1LjUgNjkuNXEtNDkgNDIuNS04MCAxMDF0LTQ4LjUgMTM4LjVxLTE3LjUgODAtMTcuNSAxODEgMCA1NSA1IDEyMyAwIDYgMi41IDIzLjV0Mi41IDI2LjVxMCAxNS04LjUgMjV0LTIzLjUgMTBxLTE2IDAtMjgtMTctNy05LTEzLTIydC0xMy41LTMwcS03LjUtMTctMTAuNS0yNC0xMjctMjg1LTEyNy00NTEgMC0xOTkgNTMtMzMzIDE2Mi00MDMgODc1LTQwM2gyMjR2LTI1NnEwLTI2IDE5LTQ1dDQ1LTE5cTI2IDAgNDUgMTlsNTEyIDUxMnExOSAxOSAxOSA0NXoiLz48L3N2Zz4=");
}

.svg-step-backward button,
button.svg-step-backward {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNjg4IDIwNDhxMCAxNjYtMTI3IDQ1MS0zIDctMTAuNSAyNHQtMTMuNSAzMHEtNiAxMy0xMyAyMi0xMiAxNy0yOCAxNy0xNSAwLTIzLjUtMTB0LTguNS0yNXEwLTkgMi41LTI2LjV0Mi41LTIzLjVxNS02OCA1LTEyMyAwLTEwMS0xNy41LTE4MXQtNDguNS0xMzguNXEtMzEtNTguNS04MC0xMDF0LTEwNS41LTY5LjVxLTU2LjUtMjctMTMzLTQyLjV0LTE1NC0yMS41cS03Ny41LTYtMTc1LjUtNmgtMjI0djI1NnEwIDI2LTE5IDQ1dC00NSAxOXEtMjYgMC00NS0xOWwtNTEyLTUxMnEtMTktMTktMTktNDV0MTktNDVsNTEyLTUxMnExOS0xOSA0NS0xOXQ0NSAxOXExOSAxOSAxOSA0NXYyNTZoMjI0cTcxMyAwIDg3NSA0MDMgNTMgMTM0IDUzIDMzM3oiLz48L3N2Zz4=");
}

.svg-pause button,
button.svg-pause {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNTYwIDEwODh2MTQwOHEwIDI2LTE5IDQ1dC00NSAxOWgtNTEycS0yNiAwLTQ1LTE5dC0xOS00NVYxMDg4cTAtMjYgMTktNDV0NDUtMTloNTEycTI2IDAgNDUgMTl0MTkgNDV6bS04OTYgMHYxNDA4cTAgMjYtMTkgNDV0LTQ1IDE5aC01MTJxLTI2IDAtNDUtMTl0LTE5LTQ1VjEwODhxMC0yNiAxOS00NXQ0NS0xOWg1MTJxMjYgMCA0NSAxOXQxOSA0NXoiLz48L3N2Zz4=");
}

.svg-play button,
button.svg-play {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNDcyLjUgMTgyM2wtMTMyOCA3MzhxLTIzIDEzLTM5LjUgM3QtMTYuNS0zNlYxMDU2cTAtMjYgMTYuNS0zNnQzOS41IDNsMTMyOCA3MzhxMjMgMTMgMjMgMzF0LTIzIDMxeiIvPjwvc3ZnPg==");
}

.svg-enter-fullscreen button,
button.svg-enter-fullscreen {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgd2lkdGg9IjI4Ij48cGF0aCBkPSJNMiAyaDI0djI0SDJ6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTkgMTZIN3Y1aDV2LTJIOXYtM3ptLTItNGgyVjloM1Y3SDd2NXptMTIgN2gtM3YyaDV2LTVoLTJ2M3pNMTYgN3YyaDN2M2gyVjdoLTV6Ii8+PC9zdmc+");
}

.svg-exit-fullscreen button,
button.svg-exit-fullscreen {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgd2lkdGg9IjI4Ij48cGF0aCBkPSJNMiAyaDI0djI0SDJ6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTcgMThoM3YzaDJ2LTVIN3Yyem0zLThIN3YyaDVWN2gtMnYzem02IDExaDJ2LTNoM3YtMmgtNXY1em0yLTExVjdoLTJ2NWg1di0yaC0zeiIvPjwvc3ZnPg==");
}

.svg-twizzle-tw button,
button.svg-twizzle-tw {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODY0IiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzk3LjU4MSAxNTEuMTh2NTcuMDg0aC04OS43MDN2MjQwLjM1MmgtNjYuOTU1VjIwOC4yNjRIMTUxLjIydi01Ny4wODNoMjQ2LjM2MXptNTQuMzEgNzEuNjc3bDcuNTEyIDMzLjY5MmMyLjcxOCAxMi4xNiA1LjU4IDI0LjY4IDguNTg0IDM3LjU1NWEyMTgwLjc3NSAyMTgwLjc3NSAwIDAwOS40NDIgMzguODQzIDEyNjYuMyAxMjY2LjMgMCAwMDEwLjA4NiAzNy41NTVjMy43Mi0xMi41OSA3LjM2OC0yNS40NjYgMTAuOTQ1LTM4LjYyOCAzLjU3Ni0xMy4xNjIgNy4wMS0yNi4xMSAxMC4zLTM4Ljg0M2w1Ljc2OS0yMi40NTZjMS4yNDgtNC44ODcgMi40NzItOS43MDUgMy42NzQtMTQuNDU1IDMuMDA0LTExLjg3NSA1LjY1MS0yMi45NjIgNy45NC0zMy4yNjNoNDYuMzU0bDIuMzg0IDEwLjU2M2EyMDAwLjc3IDIwMDAuNzcgMCAwMDMuOTM1IDE2LjgyOGw2LjcxMSAyNy43MWMxLjIxMyA0Ljk1NiAyLjQ1IDkuOTggMy43MDkgMTUuMDczYTMxMTkuNzc3IDMxMTkuNzc3IDAgMDA5Ljg3MSAzOC44NDMgMTI0OS4yMjcgMTI0OS4yMjcgMCAwMDEwLjczIDM4LjYyOCAxOTA3LjYwNSAxOTA3LjYwNSAwIDAwMTAuMzAxLTM3LjU1NSAxMzk3Ljk0IDEzOTcuOTQgMCAwMDkuNjU3LTM4Ljg0M2w0LjQtMTkuMDQ2Yy43MTUtMy4xMyAxLjQyMS02LjIzNiAyLjExOC05LjMyMWw5LjU3Ny00Mi44OGg2Ni41MjZhMjk4OC43MTggMjk4OC43MTggMCAwMS0xOS41MjkgNjYuMzExbC01LjcyOCAxOC40ODJhMzIzNy40NiAzMjM3LjQ2IDAgMDEtMTQuMDE1IDQzLjc1MmMtNi40MzggMTkuNi0xMi43MzMgMzcuNjk4LTE4Ljg4NSA1NC4yOTRsLTMuMzA2IDguODI1Yy00Ljg4NCAxMi44OTgtOS40MzMgMjQuMjYzLTEzLjY0NyAzNC4wOTVoLTQ5Ljc4N2E4NDE3LjI4OSA4NDE3LjI4OSAwIDAxLTIxLjAzMS02NC44MDkgMTI4OC42ODYgMTI4OC42ODYgMCAwMS0xOC44ODUtNjQuODEgMTk3Mi40NDQgMTk3Mi40NDQgMCAwMS0xOC4yNCA2NC44MSAyNTc5LjQxMiAyNTc5LjQxMiAwIDAxLTIwLjM4OCA2NC44MWgtNDkuNzg3Yy00LjY4Mi0xMC45MjYtOS43Mi0yMy43NDMtMTUuMTEtMzguNDUxbC0xLjYyOS00LjQ3Yy01LjI1OC0xNC41MjEtMTAuNjgtMzAuMTkyLTE2LjI2Ni00Ny4wMTRsLTIuNDA0LTcuMjhjLTYuNDM4LTE5LjYtMTMuMDItNDAuMzQ0LTE5Ljc0My02Mi4yMzRhMjk4OC43MDcgMjk4OC43MDcgMCAwMS0xOS41MjktNjYuMzExaDY3LjM4NXoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg==");
}
`);var fn=typeof document>"u"?null:document,h6=fn?.fullscreenEnabled||!!fn?.webkitFullscreenEnabled;function d6(){return document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen()}function L3(){return document.fullscreenElement?document.fullscreenElement:document.webkitFullscreenElement??null}function u6(t){return t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen()}var p6=["skip-to-start","skip-to-end","step-forward","step-backward","pause","play","enter-fullscreen","exit-fullscreen","twizzle-tw"],m6=class extends pt{derive(t){return{fullscreen:{enabled:h6,icon:document.fullscreenElement===null?"enter-fullscreen":"exit-fullscreen",title:"Enter fullscreen"},"jump-to-start":{enabled:!t.coarseTimelineInfo.atStart,icon:"skip-to-start",title:"Restart"},"play-step-backwards":{enabled:!t.coarseTimelineInfo.atStart,icon:"step-backward",title:"Step backward"},"play-pause":{enabled:!(t.coarseTimelineInfo.atStart&&t.coarseTimelineInfo.atEnd),icon:t.coarseTimelineInfo.playing?"pause":"play",title:t.coarseTimelineInfo.playing?"Pause":"Play"},"play-step":{enabled:!t.coarseTimelineInfo.atEnd,icon:"step-forward",title:"Step forward"},"jump-to-end":{enabled:!t.coarseTimelineInfo.atEnd,icon:"skip-to-end",title:"Skip to End"},"twizzle-link":{enabled:!0,icon:"twizzle-tw",title:"View at Twizzle",hidden:t.viewerLink==="none"}}}},N3={fullscreen:!0,"jump-to-start":!0,"play-step-backwards":!0,"play-pause":!0,"play-step":!0,"jump-to-end":!0,"twizzle-link":!0},iS=class extends wi{constructor(t,e,i){super(),this.model=t,this.controller=e,this.defaultFullscreenElement=i}buttons=null;connectedCallback(){this.addCSS(eS);let t={};for(let e in N3){let i=new rS;t[e]=i,i.htmlButton.addEventListener("click",()=>this.#e(e)),this.addElement(i)}this.buttons=t,this.model?.buttonAppearance.addFreshListener(this.update.bind(this)),this.model?.twistySceneModel.colorScheme.addFreshListener(this.updateColorScheme.bind(this))}#e(t){switch(t){case"fullscreen":{this.onFullscreenButton();break}case"jump-to-start":{this.controller?.jumpToStart({flash:!0});break}case"play-step-backwards":{this.controller?.animationController.play({direction:-1,untilBoundary:"move"});break}case"play-pause":{this.controller?.togglePlay();break}case"play-step":{this.controller?.animationController.play({direction:1,untilBoundary:"move"});break}case"jump-to-end":{this.controller?.jumpToEnd({flash:!0});break}case"twizzle-link":{this.controller?.visitTwizzleLink();break}default:throw new Error("Missing command")}}async onFullscreenButton(){if(!this.defaultFullscreenElement)throw new Error("Attempted to go fullscreen without an element.");if(L3()===this.defaultFullscreenElement)d6();else{this.buttons?.fullscreen.setIcon("exit-fullscreen"),u6(await this.model?.twistySceneModel.fullscreenElement.get()??this.defaultFullscreenElement);let t=()=>{L3()!==this.defaultFullscreenElement&&(this.buttons?.fullscreen.setIcon("enter-fullscreen"),window.removeEventListener("fullscreenchange",t))};window.addEventListener("fullscreenchange",t)}}async update(t){for(let e in N3){let i=this.buttons[e],r=t[e];i.htmlButton.disabled=!r.enabled,i.htmlButton.title=r.title,i.setIcon(r.icon),i.hidden=!!r.hidden}}updateColorScheme(t){for(let e of Object.values(this.buttons??{}))e.updateColorScheme(t)}};Wt.define("twisty-buttons",iS);var rS=class extends wi{htmlButton=document.createElement("button");updateColorScheme(t){this.contentWrapper.classList.toggle("dark-mode",t==="dark")}connectedCallback(){this.addCSS(tS),this.addElement(this.htmlButton)}#e=new ic(this,"svg-",p6);setIcon(t){this.#e.setValue(t)}};Wt.define("twisty-button",rS);var nS=new pi;nS.replaceSync(`
:host {
  width: 384px;
  height: 16px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  background: rgba(196, 196, 196, 0.75);
}

input:not(:disabled) {
  cursor: ew-resize;
}

.wrapper.dark-mode {
  background: #666666;
}
`);var g6=!1,ec=!1;fn?.addEventListener("mousedown",t=>{t.which&&(ec=!0)},!0);fn?.addEventListener("mouseup",t=>{t.which&&(ec=!1)},!0);var gh=0,$l=0;fn?.addEventListener("mousedown",()=>{$l++},!1);fn?.addEventListener("mousemove",sS,!1);fn?.addEventListener("mouseenter",sS,!1);function sS(t){gh=t.pageY}var I3=0,k3=0,ch=!1,fh=0,oS=class extends wi{constructor(t,e){super(),this.model=t,this.controller=e}async onDetailedTimelineInfo(t){let e=await this.inputElem();e.min=t.timeRange.start.toString(),e.max=t.timeRange.end.toString(),e.disabled=e.min===e.max,e.value=t.timestamp.toString()}async connectedCallback(){this.addCSS(nS),this.addElement(await this.inputElem()),this.model?.twistySceneModel.colorScheme.addFreshListener(this.updateColorScheme.bind(this))}updateColorScheme(t){this.contentWrapper.classList.toggle("dark-mode",t==="dark")}#e=null;async inputElem(){return this.#e??=(async()=>{let t=document.createElement("input");return t.type="range",t.disabled=!0,this.model?.detailedTimelineInfo.addFreshListener(this.onDetailedTimelineInfo.bind(this)),t.addEventListener("input",this.onInput.bind(this)),t.addEventListener("keydown",this.onKeypress.bind(this)),t})()}async onInput(t){if(ch)return;let e=await this.inputElem();await this.slowDown(t,e);let i=parseInt(e.value);this.model?.playingInfo.set({playing:!1}),this.model?.timestampRequest.set(i)}onKeypress(t){switch(t.key){case"ArrowLeft":case"ArrowRight":{this.controller?.animationController.play({direction:t.key==="ArrowLeft"?-1:1,untilBoundary:"move"}),t.preventDefault();break}case" ":{this.controller?.togglePlay(),t.preventDefault();break}}}async slowDown(t,e){if(g6&&ec){let i=e.getBoundingClientRect(),r=i.top+i.height/2;console.log(r,t,gh,ec);let n=Math.abs(r-gh),s=1;n>64&&(s=Math.max(2**(-(n-64)/64),1/32));let o=parseInt(e.value);if(console.log("cl",fh,$l,o),fh===$l){let a=(o-k3)*s;console.log("delta",a,n),ch=!0;let l=o;l=I3+a*s+(o-I3)*Math.min(1,(1/2)**(n*n/64)),e.value=l.toString(),console.log(s),ch=!1,this.contentWrapper.style.opacity=s.toString()}else fh=$l;k3=o}}};Wt.define("twisty-scrubber",oS);var y6=null;async function P3(t,e){let[{ThreePerspectiveCamera:i,ThreeScene:r},n,s,o,a,l,c]=await Promise.all([(async()=>{let{ThreePerspectiveCamera:M,ThreeScene:x}=await _i();return{ThreePerspectiveCamera:M,ThreeScene:x}})(),await t.puzzleLoader.get(),await t.visualizationStrategy.get(),await t.twistySceneModel.stickeringRequest.get(),await t.twistySceneModel.stickeringMaskRequest.get(),await t.legacyPosition.get(),await t.twistySceneModel.orbitCoordinates.get()]),f=e?.width??2048,h=e?.height??2048,u=f/h,p=y6??=await(async()=>new i(20,u,.1,20))(),d=new r,y=new J3(t,{scheduleRender:()=>{}},n,s);d.add(await y.twisty3DPuzzle()),await lh(p,c);let m=(await oh(f,h,d,p)).toDataURL(),w=await aS(t);return{dataURL:m,download:async M=>{lS(m,M??w)}}}async function aS(t){let[e,i]=await Promise.all([t.puzzleID.get(),t.alg.get()]);return`[${e}]${i.alg.experimentalNumChildAlgNodes()===0?"":` ${i.alg.toString()}`}`}function lS(t,e,i="png"){let r=document.createElement("a");r.href=t,r.download=`${e}.${i}`,r.click()}var cS=new pi;cS.replaceSync(`
:host {
  width: 384px;
  height: 256px;
  display: grid;

  -webkit-user-select: none;
  user-select: none;
}

.wrapper {
  display: grid;
  overflow: hidden;
  contain: size;
  grid-template-rows: 7fr minmax(1.5em, 0.5fr) minmax(2em, 1fr);
}

.wrapper > * {
  width: inherit;
  height: inherit;
  overflow: hidden;
}

.wrapper.controls-none {
  grid-template-rows: 7fr;
}

.wrapper.controls-none twisty-scrubber,
.wrapper.controls-none twisty-control-button-panel ,
.wrapper.controls-none twisty-scrubber,
.wrapper.controls-none twisty-buttons {
  display: none;
}

twisty-scrubber {
  background: rgba(196, 196, 196, 0.5);
}

.wrapper.checkered,
.wrapper.checkered-transparent {
  background-color: #EAEAEA;
  background-image: linear-gradient(45deg, #DDD 25%, transparent 25%, transparent 75%, #DDD 75%, #DDD),
    linear-gradient(45deg, #DDD 25%, transparent 25%, transparent 75%, #DDD 75%, #DDD);
  background-size: 32px 32px;
  background-position: 0 0, 16px 16px;
}

.wrapper.checkered-transparent {
  background-color: #F4F4F4;
  background-image: linear-gradient(45deg, #DDDDDD88 25%, transparent 25%, transparent 75%, #DDDDDD88 75%, #DDDDDD88),
    linear-gradient(45deg, #DDDDDD88 25%, transparent 25%, transparent 75%, #DDDDDD88 75%, #DDDDDD88);
}

.wrapper.dark-mode {
  background-color: #444;
  background-image: linear-gradient(45deg, #DDDDDD0b 25%, transparent 25%, transparent 75%, #DDDDDD0b 75%, #DDDDDD0b),
    linear-gradient(45deg, #DDDDDD0b 25%, transparent 25%, transparent 75%, #DDDDDD0b 75%, #DDDDDD0b);
}

.visualization-wrapper > * {
  width: 100%;
  height: 100%;
}

.error-elem {
  width: 100%;
  height: 100%;
  display: none;
  place-content: center;
  font-family: sans-serif;
  box-shadow: inset 0 0 2em rgb(255, 0, 0);
  color: red;
  text-shadow: 0 0 0.2em white;
  background: rgba(255, 255, 255, 0.25);
}

.wrapper.error .visualization-wrapper {
  display: none;
}

.wrapper.error .error-elem {
  display: grid;
}
`);var U3=class extends ct{getDefaultValue(){return null}},yh=class extends Ir{getDefaultValue(){return null}derive(t){return typeof t=="string"?new URL(t,location.href):t}},ca=class fS{warnings;errors;constructor(e){this.warnings=Object.freeze(e?.warnings??[]),this.errors=Object.freeze(e?.errors??[]),Object.freeze(this)}add(e){return new fS({warnings:this.warnings.concat(e?.warnings??[]),errors:this.errors.concat(e?.errors??[])})}log(){this.errors.length>0?console.error(`\u{1F6A8} ${this.errors[0]}`):this.warnings.length>0?console.warn(`\u26A0\uFE0F ${this.warnings[0]}`):console.info("\u{1F60E} No issues!")}};function hS(t){try{let e=ge.fromString(t),i=[];return e.toString()!==t&&i.push("Alg is non-canonical!"),{alg:e,issues:new ca({warnings:i})}}catch(e){return{alg:new ge,issues:new ca({errors:[`Malformed alg: ${e.toString()}`]})}}}function S6(t,e){return t.alg.isIdentical(e.alg)&&uh(t.issues.warnings,e.issues.warnings)&&uh(t.issues.errors,e.issues.errors)}var O3=class extends Ir{getDefaultValue(){return{alg:new ge,issues:new ca}}canReuseValue(t,e){return S6(t,e)}async derive(t){return typeof t=="string"?hS(t):{alg:t,issues:new ca}}},v6=class extends pt{derive(t){return t.kpuzzle.algToTransformation(t.setupAlg.alg)}},x6=class extends pt{derive(t){if(t.setupTransformation)return t.setupTransformation;switch(t.setupAnchor){case"start":return t.setupAlgTransformation;case"end":{let i=t.indexer.transformationAtIndex(t.indexer.numAnimatedLeaves()).invert();return t.setupAlgTransformation.applyTransformation(i)}default:throw new Error("Unimplemented!")}}},E6=class extends ct{getDefaultValue(){return null}},_6=class extends ct{getDefaultValue(){return{move:null,amount:0}}canReuseValue(t,e){return t.move===e.move&&t.amount===e.amount}},w6=class extends pt{derive(t){return{patternIndex:t.currentMoveInfo.patternIndex,movesFinishing:t.currentMoveInfo.movesFinishing.map(e=>e.move),movesFinished:t.currentMoveInfo.movesFinished.map(e=>e.move)}}canReuseValue(t,e){return t.patternIndex===e.patternIndex&&C3(t.movesFinishing,e.movesFinishing,(i,r)=>i.isIdentical(r))&&C3(t.movesFinished,e.movesFinished,(i,r)=>i.isIdentical(r))}},M6=class extends pt{derive(t){function e(i){return t.detailedTimelineInfo.atEnd&&t.catchUpMove.move!==null&&i.currentMoves.push({move:t.catchUpMove.move,direction:-1,fraction:1-t.catchUpMove.amount,startTimestamp:-1,endTimestamp:-1}),i}if(t.indexer.currentMoveInfo)return e(t.indexer.currentMoveInfo(t.detailedTimelineInfo.timestamp));{let i=t.indexer.timestampToIndex(t.detailedTimelineInfo.timestamp),r={patternIndex:i,currentMoves:[],movesFinishing:[],movesFinished:[],movesStarting:[],latestStart:-1/0,earliestEnd:1/0};if(t.indexer.numAnimatedLeaves()>0){let n=t.indexer.getAnimLeaf(i)?.as(A);if(!n)return e(r);let s=t.indexer.indexToMoveStartTimestamp(i),o=t.indexer.moveDuration(i),a=o?(t.detailedTimelineInfo.timestamp-s)/o:0,l=s+o,c={move:n,direction:1,fraction:a,startTimestamp:s,endTimestamp:l};a===0?r.movesStarting.push(c):a===1?r.movesFinishing.push(c):(r.currentMoves.push(c),r.latestStart=Math.max(r.latestStart,s),r.earliestEnd=Math.min(r.earliestEnd,l))}return e(r)}}},R6=class extends pt{derive(t){let e=t.indexer.transformationAtIndex(t.currentLeavesSimplified.patternIndex);e=t.anchoredStart.applyTransformation(e);for(let i of t.currentLeavesSimplified.movesFinishing)e=e.applyMove(i);for(let i of t.currentLeavesSimplified.movesFinished)e=e.applyMove(i);return e.toKPattern()}};function Gn(t){switch(Math.abs(t)){case 0:return 0;case 1:return 1e3;case 2:return 1500;default:return 2e3}}var dS=class extends gr{constructor(t=Gn){super(),this.durationForAmount=t}traverseAlg(t){let e=0;for(let i of t.childAlgNodes())e+=this.traverseAlgNode(i);return e}traverseGrouping(t){return t.amount*this.traverseAlg(t.alg)}traverseMove(t){return this.durationForAmount(t.amount)}traverseCommutator(t){return 2*(this.traverseAlg(t.A)+this.traverseAlg(t.B))}traverseConjugate(t){return 2*this.traverseAlg(t.A)+this.traverseAlg(t.B)}traversePause(t){return this.durationForAmount(1)}traverseNewline(t){return this.durationForAmount(1)}traverseLineComment(t){return this.durationForAmount(0)}},b6=class{constructor(t,e){this.kpuzzle=t,this.moves=new ge(e.experimentalExpand())}moves;durationFn=new dS(Gn);getAnimLeaf(t){return Array.from(this.moves.childAlgNodes())[t]}indexToMoveStartTimestamp(t){let e=new ge(Array.from(this.moves.childAlgNodes()).slice(0,t));return this.durationFn.traverseAlg(e)}timestampToIndex(t){let e=0,i;for(i=0;i<this.numAnimatedLeaves();i++)if(e+=this.durationFn.traverseMove(this.getAnimLeaf(i)),e>=t)return i;return i}patternAtIndex(t){return this.kpuzzle.defaultPattern().applyTransformation(this.transformationAtIndex(t))}transformationAtIndex(t){let e=this.kpuzzle.identityTransformation();for(let i of Array.from(this.moves.childAlgNodes()).slice(0,t))e=e.applyMove(i);return e}algDuration(){return this.durationFn.traverseAlg(this.moves)}numAnimatedLeaves(){return A3(this.moves)}moveDuration(t){return this.durationFn.traverseMove(this.getAnimLeaf(t))}},F3={u:"y",l:"x",f:"z",r:"x",b:"z",d:"y",m:"x",e:"y",s:"z",x:"x",y:"y",z:"z"};function A6(t,e){return F3[t.family[0].toLowerCase()]===F3[e.family[0].toLowerCase()]}var C6=class extends gr{traverseAlg(t){let e=[];for(let i of t.childAlgNodes())e.push(this.traverseAlgNode(i));return Array.prototype.concat(...e)}traverseGroupingOnce(t){if(t.experimentalIsEmpty())return[];let e=[];for(let n of t.childAlgNodes()){if(!(n.is(A)||n.is(un)||n.is(mr)))return this.traverseAlg(t);let s=n.as(A);s&&e.push(s)}let i=Gn(e[0].amount);for(let n=0;n<e.length-1;n++){for(let s=1;s<e.length;s++)if(!A6(e[n],e[s]))return this.traverseAlg(t);i=Math.max(i,Gn(e[n].amount))}let r=e.map(n=>({animLeafAlgNode:n,msUntilNext:0,duration:i}));return r[r.length-1].msUntilNext=i,r}traverseGrouping(t){let e=[],i=t.amount>0?t.alg:t.alg.invert();for(let r=0;r<Math.abs(t.amount);r++)e.push(this.traverseGroupingOnce(i));return Array.prototype.concat(...e)}traverseMove(t){let e=Gn(t.amount);return[{animLeafAlgNode:t,msUntilNext:e,duration:e}]}traverseCommutator(t){let e=[],i=[t.A,t.B,t.A.invert(),t.B.invert()];for(let r of i)e.push(this.traverseGroupingOnce(r));return Array.prototype.concat(...e)}traverseConjugate(t){let e=[],i=[t.A,t.B,t.A.invert()];for(let r of i)e.push(this.traverseGroupingOnce(r));return Array.prototype.concat(...e)}traversePause(t){if(t.experimentalNISSGrouping)return[];let e=Gn(1);return[{animLeafAlgNode:t,msUntilNext:e,duration:e}]}traverseNewline(t){return[]}traverseLineComment(t){return[]}},T6=jt(C6);function D6(t){let e=0;return T6(t).map(r=>{let n={animLeaf:r.animLeafAlgNode,start:e,end:e+r.duration};return e+=r.msUntilNext,n})}var hh=class{constructor(t,e,i){this.kpuzzle=t,this.animLeaves=i?.animationTimelineLeaves??D6(e)}animLeaves;getAnimLeaf(t){return this.animLeaves[Math.min(t,this.animLeaves.length-1)]?.animLeaf??null}getAnimLeafWithRange(t){return this.animLeaves[Math.min(t,this.animLeaves.length-1)]}indexToMoveStartTimestamp(t){let e=0;return this.animLeaves.length>0&&(e=this.animLeaves[Math.min(t,this.animLeaves.length-1)].start),e}timestampToIndex(t){let e=0;for(e=0;e<this.animLeaves.length;e++)if(this.animLeaves[e].start>=t)return Math.max(0,e-1);return Math.max(0,e-1)}timestampToPosition(t,e){let i=this.currentMoveInfo(t),r=e??this.kpuzzle.identityTransformation().toKPattern();for(let n of this.animLeaves.slice(0,i.patternIndex)){let s=n.animLeaf.as(A);s!==null&&(r=r.applyMove(s))}return{pattern:r,movesInProgress:i.currentMoves}}currentMoveInfo(t){let e=1/0;for(let c of this.animLeaves)if(c.start<=t&&c.end>=t)e=Math.min(e,c.start);else if(c.start>t)break;let i=[],r=[],n=[],s=[],o=-1/0,a=1/0,l=0;for(let c of this.animLeaves)if(c.end<=e){if(!isFinite(e)&&c.start>t)break;l++}else{if(c.start>t)break;{let f=c.animLeaf.as(A);if(f!==null){let h=(t-c.start)/(c.end-c.start),u=!1;h>1&&(h=1,u=!0);let p={move:f,direction:1,fraction:h,startTimestamp:c.start,endTimestamp:c.end};switch(h){case 0:{r.push(p);break}case 1:{u?s.push(p):n.push(p);break}default:i.push(p),o=Math.max(o,c.start),a=Math.min(a,c.end)}}}}return{patternIndex:l,currentMoves:i,latestStart:o,earliestEnd:a,movesStarting:r,movesFinishing:n,movesFinished:s}}patternAtIndex(t,e){let i=e??this.kpuzzle.defaultPattern();for(let r=0;r<this.animLeaves.length&&r<t;r++){let s=this.animLeaves[r].animLeaf.as(A);s!==null&&(i=i.applyMove(s))}return i}transformationAtIndex(t){let e=this.kpuzzle.identityTransformation();for(let i of this.animLeaves.slice(0,t)){let r=i.animLeaf.as(A);r!==null&&(e=e.applyMove(r))}return e}algDuration(){let t=0;for(let e of this.animLeaves)t=Math.max(t,e.end);return t}numAnimatedLeaves(){return this.animLeaves.length}moveDuration(t){let e=this.getAnimLeafWithRange(t);return e.end-e.start}},Bn=class{constructor(t,e,i,r,n=[]){this.moveCount=t,this.duration=e,this.forward=i,this.backward=r,this.children=n}},L6=class extends gr{constructor(t){super(),this.kpuzzle=t,this.identity=t.identityTransformation(),this.dummyLeaf=new Bn(0,0,this.identity,this.identity,[])}identity;dummyLeaf;durationFn=new dS(Gn);cache={};traverseAlg(t){let e=0,i=0,r=this.identity,n=[];for(let s of t.childAlgNodes()){let o=this.traverseAlgNode(s);e+=o.moveCount,i+=o.duration,r===this.identity?r=o.forward:r=r.applyTransformation(o.forward),n.push(o)}return new Bn(e,i,r,r.invert(),n)}traverseGrouping(t){let e=this.traverseAlg(t.alg);return this.mult(e,t.amount,[e])}traverseMove(t){let e=t.toString(),i=this.cache[e];if(i)return i;let r=this.kpuzzle.moveToTransformation(t);return i=new Bn(1,this.durationFn.traverseAlgNode(t),r,r.invert()),this.cache[e]=i,i}traverseCommutator(t){let e=this.traverseAlg(t.A),i=this.traverseAlg(t.B),r=e.forward.applyTransformation(i.forward),n=e.backward.applyTransformation(i.backward),s=r.applyTransformation(n),o=new Bn(2*(e.moveCount+i.moveCount),2*(e.duration+i.duration),s,s.invert(),[e,i]);return this.mult(o,1,[o,e,i])}traverseConjugate(t){let e=this.traverseAlg(t.A),i=this.traverseAlg(t.B),n=e.forward.applyTransformation(i.forward).applyTransformation(e.backward),s=new Bn(2*e.moveCount+i.moveCount,2*e.duration+i.duration,n,n.invert(),[e,i]);return this.mult(s,1,[s,e,i])}traversePause(t){return t.experimentalNISSGrouping?this.dummyLeaf:new Bn(1,this.durationFn.traverseAlgNode(t),this.identity,this.identity)}traverseNewline(t){return this.dummyLeaf}traverseLineComment(t){return this.dummyLeaf}mult(t,e,i){let r=Math.abs(e),n=t.forward.selfMultiply(e);return new Bn(t.moveCount*r,t.duration*r,n,n.invert(),i)}},zt=class{constructor(t,e){this.apd=t,this.back=e}},N6=class extends Or{constructor(t,e,i){super(),this.kpuzzle=t,this.algOrAlgNode=e,this.apd=i,this.i=-1,this.dur=-1,this.goali=-1,this.goaldur=-1,this.move=void 0,this.back=!1,this.moveDuration=0,this.st=this.kpuzzle.identityTransformation(),this.root=new zt(this.apd,!1)}move;moveDuration;back;st;root;i;dur;goali;goaldur;moveByIndex(t){return this.i>=0&&this.i===t?this.move!==void 0:this.dosearch(t,1/0)}moveByDuration(t){return this.dur>=0&&this.dur<t&&this.dur+this.moveDuration>=t?this.move!==void 0:this.dosearch(1/0,t)}dosearch(t,e){return this.goali=t,this.goaldur=e,this.i=0,this.dur=0,this.move=void 0,this.moveDuration=0,this.back=!1,this.st=this.kpuzzle.identityTransformation(),this.algOrAlgNode.is(ge)?this.traverseAlg(this.algOrAlgNode,this.root):this.traverseAlgNode(this.algOrAlgNode,this.root)}traverseAlg(t,e){if(!this.firstcheck(e))return!1;let i=e.back?t.experimentalNumChildAlgNodes()-1:0;for(let r of Lh(t.childAlgNodes(),e.back?-1:1)){if(this.traverseAlgNode(r,new zt(e.apd.children[i],e.back)))return!0;i+=e.back?-1:1}return!1}traverseGrouping(t,e){if(!this.firstcheck(e))return!1;let i=this.domult(e,t.amount);return this.traverseAlg(t.alg,new zt(e.apd.children[0],i))}traverseMove(t,e){return this.firstcheck(e)?(this.move=t,this.moveDuration=e.apd.duration,this.back=e.back,!0):!1}traverseCommutator(t,e){if(!this.firstcheck(e))return!1;let i=this.domult(e,1);return i?this.traverseAlg(t.B,new zt(e.apd.children[2],!i))||this.traverseAlg(t.A,new zt(e.apd.children[1],!i))||this.traverseAlg(t.B,new zt(e.apd.children[2],i))||this.traverseAlg(t.A,new zt(e.apd.children[1],i)):this.traverseAlg(t.A,new zt(e.apd.children[1],i))||this.traverseAlg(t.B,new zt(e.apd.children[2],i))||this.traverseAlg(t.A,new zt(e.apd.children[1],!i))||this.traverseAlg(t.B,new zt(e.apd.children[2],!i))}traverseConjugate(t,e){if(!this.firstcheck(e))return!1;let i=this.domult(e,1);return i?this.traverseAlg(t.A,new zt(e.apd.children[1],!i))||this.traverseAlg(t.B,new zt(e.apd.children[2],i))||this.traverseAlg(t.A,new zt(e.apd.children[1],i)):this.traverseAlg(t.A,new zt(e.apd.children[1],i))||this.traverseAlg(t.B,new zt(e.apd.children[2],i))||this.traverseAlg(t.A,new zt(e.apd.children[1],!i))}traversePause(t,e){return this.firstcheck(e)?(this.move=t,this.moveDuration=e.apd.duration,this.back=e.back,!0):!1}traverseNewline(t,e){return!1}traverseLineComment(t,e){return!1}firstcheck(t){return t.apd.moveCount+this.i<=this.goali&&t.apd.duration+this.dur<this.goaldur?this.keepgoing(t):!0}domult(t,e){let i=t.back;if(e===0)return i;e<0&&(i=!i,e=-e);let r=t.apd.children[0],n=Math.min(Math.floor((this.goali-this.i)/r.moveCount),Math.ceil((this.goaldur-this.dur)/r.duration-1));return n>0&&this.keepgoing(new zt(r,i),n),i}keepgoing(t,e=1){return this.i+=e*t.apd.moveCount,this.dur+=e*t.apd.duration,e!==1?t.back?this.st=this.st.applyTransformation(t.apd.backward.selfMultiply(e)):this.st=this.st.applyTransformation(t.apd.forward.selfMultiply(e)):t.back?this.st=this.st.applyTransformation(t.apd.backward):this.st=this.st.applyTransformation(t.apd.forward),!1}},I6=16;function k6(t,e){let i=new ma,r=new ma;for(let n of t.childAlgNodes())r.push(n),r.experimentalNumAlgNodes()>=e&&(i.push(new qt(r.toAlg())),r.reset());return i.push(new qt(r.toAlg())),i.toAlg()}var P6=class extends gr{traverseAlg(t){let e=t.experimentalNumChildAlgNodes();return e<I6?t:k6(t,Math.ceil(Math.sqrt(e)))}traverseGrouping(t){return new qt(this.traverseAlg(t.alg),t.amount)}traverseMove(t){return t}traverseCommutator(t){return new ei(this.traverseAlg(t.A),this.traverseAlg(t.B))}traverseConjugate(t){return new ei(this.traverseAlg(t.A),this.traverseAlg(t.B))}traversePause(t){return t}traverseNewline(t){return t}traverseLineComment(t){return t}},U6=jt(P6),z3=class{constructor(t,e){this.kpuzzle=t;let i=new L6(this.kpuzzle),r=U6(e);this.decoration=i.traverseAlg(r),this.walker=new N6(this.kpuzzle,r,this.decoration)}decoration;walker;getAnimLeaf(t){if(this.walker.moveByIndex(t)){if(!this.walker.move)throw new Error("`this.walker.mv` missing");let e=this.walker.move;return this.walker.back?e.invert():e}return null}indexToMoveStartTimestamp(t){if(this.walker.moveByIndex(t)||this.walker.i===t)return this.walker.dur;throw new Error(`Out of algorithm: index ${t}`)}indexToMovesInProgress(t){if(this.walker.moveByIndex(t)||this.walker.i===t)return this.walker.dur;throw new Error(`Out of algorithm: index ${t}`)}patternAtIndex(t,e){return this.walker.moveByIndex(t),(e??this.kpuzzle.defaultPattern()).applyTransformation(this.walker.st)}transformationAtIndex(t){return this.walker.moveByIndex(t),this.walker.st}numAnimatedLeaves(){return this.decoration.moveCount}timestampToIndex(t){return this.walker.moveByDuration(t),this.walker.i}algDuration(){return this.decoration.duration}moveDuration(t){return this.walker.moveByIndex(t),this.walker.moveDuration}},O6=1024,F6=class extends pt{derive(t){switch(t.indexerConstructorRequest){case"auto":return t.animationTimelineLeaves!==null||R3(t.alg.alg)<=O6&&t.puzzle==="3x3x3"&&t.visualizationStrategy==="Cube3D"?hh:z3;case"tree":return z3;case"simple":return b6;case"simultaneous":return hh;default:throw new Error("Invalid indexer request!")}}},z6=class extends ct{getDefaultValue(){return"auto"}},B6=class extends pt{derive(t){return new t.indexerConstructor(t.kpuzzle,t.algWithIssues.alg,{animationTimelineLeaves:t.animationTimelineLeaves})}},G6=class extends pt{derive(t){return{pattern:t.currentPattern,movesInProgress:t.currentMoveInfo.currentMoves}}},V6=!0,B3=class extends pt{async derive(t){try{return V6&&t.kpuzzle.algToTransformation(t.algWithIssues.alg),t.algWithIssues}catch(e){return{alg:new ge,issues:new ca({errors:[`Invalid alg for puzzle: ${e.toString()}`]})}}}},H6=class extends ct{getDefaultValue(){return"start"}},W6=class extends ct{getDefaultValue(){return null}},X6=class extends pt{async derive(t){return t.puzzleLoader.kpuzzle()}},q6=class extends ct{getDefaultValue(){return Ys}},j6=class extends pt{async derive(t){return t.puzzleLoader.id}},Y6=class extends ct{getDefaultValue(){return Ys}},K6=class extends pt{derive(t){if(t.puzzleIDRequest&&t.puzzleIDRequest!==Ys){let e=Fc[t.puzzleIDRequest];return e||this.userVisibleErrorTracker.set({errors:[`Invalid puzzle ID: ${t.puzzleIDRequest}`]}),e}return t.puzzleDescriptionRequest&&t.puzzleDescriptionRequest!==Ys?wd(t.puzzleDescriptionRequest):Jn}},Z6=class extends pt{derive(t){return{playing:t.playingInfo.playing,atStart:t.detailedTimelineInfo.atStart,atEnd:t.detailedTimelineInfo.atEnd}}canReuseValue(t,e){return t.playing===e.playing&&t.atStart===e.atStart&&t.atEnd===e.atEnd}},Q6=class extends pt{derive(t){let e=this.#e(t),i=!1,r=!1;return e>=t.timeRange.end&&(r=!0,e=Math.min(t.timeRange.end,e)),e<=t.timeRange.start&&(i=!0,e=Math.max(t.timeRange.start,e)),{timestamp:e,timeRange:t.timeRange,atStart:i,atEnd:r}}#e(t){switch(t.timestampRequest){case"auto":return t.setupAnchor==="start"&&t.setupAlg.alg.experimentalIsEmpty()?t.timeRange.end:t.timeRange.start;case"start":return t.timeRange.start;case"end":return t.timeRange.end;case"anchor":return t.setupAnchor==="start"?t.timeRange.start:t.timeRange.end;case"opposite-anchor":return t.setupAnchor==="start"?t.timeRange.end:t.timeRange.start;default:return t.timestampRequest}}canReuseValue(t,e){return t.timestamp===e.timestamp&&t.timeRange.start===e.timeRange.start&&t.timeRange.end===e.timeRange.end&&t.atStart===e.atStart&&t.atEnd===e.atEnd}},$6=class extends Ir{async getDefaultValue(){return{direction:1,playing:!1,untilBoundary:"entire-timeline",loop:!1}}async derive(t,e){let i=await e,r=Object.assign({},i);return Object.assign(r,t),r}canReuseValue(t,e){return t.direction===e.direction&&t.playing===e.playing&&t.untilBoundary===e.untilBoundary&&t.loop===e.loop}},J6=class extends Ir{getDefaultValue(){return 1}derive(t){return t<0?1:t}},ew={auto:!0,start:!0,end:!0,anchor:!0,"opposite-anchor":!0},tw=class extends ct{getDefaultValue(){return"auto"}set(t){let e=this.get();super.set((async()=>this.validInput(await t)?t:e)())}validInput(t){return!!(typeof t=="number"||ew[t])}};var iw=class extends ct{getDefaultValue(){return"auto"}},rw=class extends pt{derive(t){return{start:0,end:t.indexer.algDuration()}}},nw=class extends ct{getDefaultValue(){return"auto"}},sw=class extends ct{getDefaultValue(){return"auto"}},ow=class extends pt{derive(t){switch(t.puzzleID){case"clock":case"square1":case"redi_cube":case"melindas2x2x2x2":case"tri_quad":case"loopover":return"2D";case"3x3x3":switch(t.visualizationRequest){case"auto":case"3D":return"Cube3D";default:return t.visualizationRequest}default:switch(t.visualizationRequest){case"auto":case"3D":return"PG3D";case"experimental-2D-LL":case"experimental-2D-LL-face":return["2x2x2","4x4x4","megaminx"].includes(t.puzzleID)?"experimental-2D-LL":"2D";default:return t.visualizationRequest}}}},aw=class extends ct{getDefaultValue(){return"auto"}},lw=class extends ct{getDefaultValue(){return"auto"}},cw=class extends ct{getDefaultValue(){return"auto"}},fw=null;async function hw(){return fw??=new(await _i()).ThreeTextureLoader}var G3=class extends pt{async derive(t){let{spriteURL:e}=t;return e===null?null:new Promise(async(i,r)=>{let n=()=>{console.warn("Could not load sprite:",e.toString()),i(null)};try{(await hw()).load(e.toString(),i,n,n)}catch{n()}})}},dw={facelets:["regular","regular","regular","regular","regular"]};async function uw(t){let{definition:e}=await t.kpuzzle(),i={orbits:{}};for(let r of e.orbits)i.orbits[r.orbitName]={pieces:new Array(r.numPieces).fill(dw)};return i}var pw=class extends pt{getDefaultValue(){return{orbits:{}}}async derive(t){return t.stickeringMaskRequest?t.stickeringMaskRequest:t.stickeringRequest==="picture"?{specialBehaviour:"picture",orbits:{}}:t.puzzleLoader.stickeringMask?.(t.stickeringRequest??"full")??uw(t.puzzleLoader)}},mw={"-":"Regular",D:"Dim",I:"Ignored",X:"Invisible",O:"IgnoreNonPrimary",P:"PermuteNonPrimary",o:"Ignoriented","?":"OrientationWithoutPermutation",M:"Mystery","@":"Regular"};function gw(t){let e={orbits:{}},i=t.split(",");for(let r of i){let[n,s,...o]=r.split(":");if(o.length>0)throw new Error(`Invalid serialized orbit stickering mask (too many colons): \`${r}\``);let a=[];e.orbits[n]={pieces:a};for(let l of s){let c=mw[l];a.push(Nc(c))}}return e}var yw=class extends Ir{getDefaultValue(){return null}derive(t){return t===null?null:typeof t=="string"?gw(t):t}},Sw=class extends ct{getDefaultValue(){return null}},vw=class extends ct{getDefaultValue(){return"auto"}},xw=class extends ct{getDefaultValue(){return{}}},Ew=class extends ct{getDefaultValue(){return"auto"}},_w=class extends ct{getDefaultValue(){return"auto"}},ww=class extends pt{derive(t){return t.colorSchemeRequest==="dark"?"dark":"light"}},Mw=class extends ct{getDefaultValue(){return"auto"}},Rw=class extends ct{getDefaultValue(){return null}},bw=35,Aw=class extends ct{getDefaultValue(){return bw}};function uS(t,e){return t.latitude===e.latitude&&t.longitude===e.longitude&&t.distance===e.distance}var Cw=class extends Ir{getDefaultValue(){return"auto"}canReuseValue(t,e){return t===e||uS(t,e)}async derive(t,e){if(t==="auto")return"auto";let i=await e;i==="auto"&&(i={});let r=Object.assign({},i);return Object.assign(r,t),typeof r.latitude<"u"&&(r.latitude=Math.min(Math.max(r.latitude,-90),90)),typeof r.longitude<"u"&&(r.longitude=ph(r.longitude,180,-180)),r}},Tw=class extends pt{canReuseValue(t,e){return uS(t,e)}async derive(t){if(t.orbitCoordinatesRequest==="auto")return H3(t.puzzleID,t.strategy);let e=Object.assign(Object.assign({},H3(t.puzzleID,t.strategy),t.orbitCoordinatesRequest));if(Math.abs(e.latitude)<=t.latitudeLimit)return e;{let{latitude:i,longitude:r,distance:n}=e;return{latitude:t.latitudeLimit*Math.sign(i),longitude:r,distance:n}}}},Dw={latitude:31.717474411461005,longitude:0,distance:5.877852522924731},Lw={latitude:35,longitude:30,distance:6},V3={latitude:35,longitude:30,distance:6.25},Nw={latitude:Math.atan(1/2)*qs,longitude:0,distance:6.7},Iw={latitude:26.56505117707799,longitude:0,distance:6};function H3(t,e){if(t[1]==="x")return e==="Cube3D"?Lw:V3;switch(t){case"megaminx":case"gigaminx":return Nw;case"pyraminx":case"master_tetraminx":return Iw;case"skewb":return V3;default:return Dw}}var kw=class{constructor(t){this.twistyPlayerModel=t,this.orbitCoordinates=new Tw({orbitCoordinatesRequest:this.orbitCoordinatesRequest,latitudeLimit:this.latitudeLimit,puzzleID:t.puzzleID,strategy:t.visualizationStrategy}),this.stickeringMask=new pw({stickeringMaskRequest:this.stickeringMaskRequest,stickeringRequest:this.stickeringRequest,puzzleLoader:t.puzzleLoader})}background=new _w;colorSchemeRequest=new Mw;dragInput=new vw;foundationDisplay=new lw;foundationStickerSpriteURL=new yh;fullscreenElement=new Rw;hintFacelet=new S3;hintStickerSpriteURL=new yh;initialHintFaceletsAnimation=new cw;latitudeLimit=new Aw;movePressInput=new Ew;movePressCancelOptions=new xw;orbitCoordinatesRequest=new Cw;stickeringMaskRequest=new yw;stickeringRequest=new Sw;faceletScale=new aw;colorScheme=new ww({colorSchemeRequest:this.colorSchemeRequest});foundationStickerSprite=new G3({spriteURL:this.foundationStickerSpriteURL});hintStickerSprite=new G3({spriteURL:this.hintStickerSpriteURL});orbitCoordinates;stickeringMask},Pw={errors:[]},Uw=class extends ct{getDefaultValue(){return Pw}reset(){this.set(this.getDefaultValue())}canReuseValue(t,e){return uh(t.errors,e.errors)}},Ow=class{userVisibleErrorTracker=new Uw;alg=new O3;backView=new iw;controlPanel=new o6;catchUpMove=new _6;indexerConstructorRequest=new z6;playingInfo=new $6;puzzleDescriptionRequest=new q6;puzzleIDRequest=new Y6;setupAnchor=new H6;setupAlg=new O3;setupTransformation=new W6;tempoScale=new J6;timestampRequest=new tw;viewerLink=new nw;visualizationFormat=new sw;title=new U3;videoURL=new yh;competitionID=new U3;animationTimelineLeavesRequest=new E6;puzzleLoader=new K6({puzzleIDRequest:this.puzzleIDRequest,puzzleDescriptionRequest:this.puzzleDescriptionRequest},this.userVisibleErrorTracker);kpuzzle=new X6({puzzleLoader:this.puzzleLoader});puzzleID=new j6({puzzleLoader:this.puzzleLoader});puzzleAlg=new B3({algWithIssues:this.alg,kpuzzle:this.kpuzzle});puzzleSetupAlg=new B3({algWithIssues:this.setupAlg,kpuzzle:this.kpuzzle});visualizationStrategy=new ow({visualizationRequest:this.visualizationFormat,puzzleID:this.puzzleID});indexerConstructor=new F6({alg:this.alg,puzzle:this.puzzleID,visualizationStrategy:this.visualizationStrategy,indexerConstructorRequest:this.indexerConstructorRequest,animationTimelineLeaves:this.animationTimelineLeavesRequest});setupAlgTransformation=new v6({setupAlg:this.puzzleSetupAlg,kpuzzle:this.kpuzzle});indexer=new B6({indexerConstructor:this.indexerConstructor,algWithIssues:this.puzzleAlg,kpuzzle:this.kpuzzle,animationTimelineLeaves:this.animationTimelineLeavesRequest});anchorTransformation=new x6({setupTransformation:this.setupTransformation,setupAnchor:this.setupAnchor,setupAlgTransformation:this.setupAlgTransformation,indexer:this.indexer});timeRange=new rw({indexer:this.indexer});detailedTimelineInfo=new Q6({timestampRequest:this.timestampRequest,timeRange:this.timeRange,setupAnchor:this.setupAnchor,setupAlg:this.setupAlg});coarseTimelineInfo=new Z6({detailedTimelineInfo:this.detailedTimelineInfo,playingInfo:this.playingInfo});currentMoveInfo=new M6({indexer:this.indexer,detailedTimelineInfo:this.detailedTimelineInfo,catchUpMove:this.catchUpMove});buttonAppearance=new m6({coarseTimelineInfo:this.coarseTimelineInfo,viewerLink:this.viewerLink});currentLeavesSimplified=new w6({currentMoveInfo:this.currentMoveInfo});currentPattern=new R6({anchoredStart:this.anchorTransformation,currentLeavesSimplified:this.currentLeavesSimplified,indexer:this.indexer});legacyPosition=new G6({currentMoveInfo:this.currentMoveInfo,currentPattern:this.currentPattern});twistySceneModel=new kw(this);async twizzleLink(){let[t,e,i,r,n,s,o,a]=await Promise.all([this.viewerLink.get(),this.puzzleID.get(),this.puzzleDescriptionRequest.get(),this.alg.get(),this.setupAlg.get(),this.setupAnchor.get(),this.twistySceneModel.stickeringRequest.get(),this.twistySceneModel.twistyPlayerModel.title.get()]),l=t==="experimental-twizzle-explorer",c=new URL(`https://alpha.twizzle.net/${l?"explore":"edit"}/`);return r.alg.experimentalIsEmpty()||c.searchParams.set("alg",r.alg.toString()),n.alg.experimentalIsEmpty()||c.searchParams.set("setup-alg",n.alg.toString()),s!=="start"&&c.searchParams.set("setup-anchor",s),o!=="full"&&o!==null&&c.searchParams.set("experimental-stickering",o),l&&i!==Ys?c.searchParams.set("puzzle-description",i):e!=="3x3x3"&&c.searchParams.set("puzzle",e),a&&c.searchParams.set("title",a),c.toString()}experimentalAddAlgLeaf(t,e){let i=t.as(A);i?this.experimentalAddMove(i,e):this.alg.set((async()=>{let n=(await this.alg.get()).alg.concat(new ge([t]));return this.timestampRequest.set("end"),n})())}experimentalAddMove(t,e){let i=typeof t=="string"?new A(t):t;this.alg.set((async()=>{let[{alg:r},n]=await Promise.all([this.alg.get(),this.puzzleLoader.get()]),s=pc(r,i,{...e,...await xd(n)});return this.timestampRequest.set("end"),this.catchUpMove.set({move:i,amount:0}),s})())}experimentalRemoveFinalChild(){this.alg.set((async()=>{let t=(await this.alg.get()).alg,e=Array.from(t.childAlgNodes()),[i]=e.splice(-1);if(!i)return t;this.timestampRequest.set("end");let r=i.as(A);return r&&this.catchUpMove.set({move:r.invert(),amount:0}),new ge(e)})())}};function it(t){return new Error(`Cannot get \`.${t}\` directly from a \`TwistyPlayer\`.`)}var Fw=class extends wi{experimentalModel=new Ow;set alg(t){this.experimentalModel.alg.set(t)}get alg(){throw it("alg")}set experimentalSetupAlg(t){this.experimentalModel.setupAlg.set(t)}get experimentalSetupAlg(){throw it("setup")}set experimentalSetupAnchor(t){this.experimentalModel.setupAnchor.set(t)}get experimentalSetupAnchor(){throw it("anchor")}set puzzle(t){this.experimentalModel.puzzleIDRequest.set(t)}get puzzle(){throw it("puzzle")}set experimentalPuzzleDescription(t){this.experimentalModel.puzzleDescriptionRequest.set(t)}get experimentalPuzzleDescription(){throw it("experimentalPuzzleDescription")}set timestamp(t){this.experimentalModel.timestampRequest.set(t)}get timestamp(){throw it("timestamp")}set hintFacelets(t){this.experimentalModel.twistySceneModel.hintFacelet.set(t)}get hintFacelets(){throw it("hintFacelets")}set experimentalStickering(t){this.experimentalModel.twistySceneModel.stickeringRequest.set(t)}get experimentalStickering(){throw it("experimentalStickering")}set experimentalStickeringMaskOrbits(t){this.experimentalModel.twistySceneModel.stickeringMaskRequest.set(t)}get experimentalStickeringMaskOrbits(){throw it("experimentalStickeringMaskOrbits")}set experimentalFaceletScale(t){this.experimentalModel.twistySceneModel.faceletScale.set(t)}get experimentalFaceletScale(){throw it("experimentalFaceletScale")}set backView(t){this.experimentalModel.backView.set(t)}get backView(){throw it("backView")}set background(t){this.experimentalModel.twistySceneModel.background.set(t)}get background(){throw it("background")}set colorScheme(t){this.experimentalModel.twistySceneModel.colorSchemeRequest.set(t)}get colorScheme(){throw it("colorScheme")}set controlPanel(t){this.experimentalModel.controlPanel.set(t)}get controlPanel(){throw it("controlPanel")}set visualization(t){this.experimentalModel.visualizationFormat.set(t)}get visualization(){throw it("visualization")}set experimentalTitle(t){this.experimentalModel.title.set(t)}get experimentalTitle(){throw it("experimentalTitle")}set experimentalVideoURL(t){this.experimentalModel.videoURL.set(t)}get experimentalVideoURL(){throw it("experimentalVideoURL")}set experimentalCompetitionID(t){this.experimentalModel.competitionID.set(t)}get experimentalCompetitionID(){throw it("experimentalCompetitionID")}set viewerLink(t){this.experimentalModel.viewerLink.set(t)}get viewerLink(){throw it("viewerLink")}set experimentalMovePressInput(t){this.experimentalModel.twistySceneModel.movePressInput.set(t)}get experimentalMovePressInput(){throw it("experimentalMovePressInput")}set experimentalMovePressCancelOptions(t){this.experimentalModel.twistySceneModel.movePressCancelOptions.set(t)}get experimentalMovePressCancelOptions(){throw it("experimentalMovePressCancelOptions")}set cameraLatitude(t){this.experimentalModel.twistySceneModel.orbitCoordinatesRequest.set({latitude:t})}get cameraLatitude(){throw it("cameraLatitude")}set cameraLongitude(t){this.experimentalModel.twistySceneModel.orbitCoordinatesRequest.set({longitude:t})}get cameraLongitude(){throw it("cameraLongitude")}set cameraDistance(t){this.experimentalModel.twistySceneModel.orbitCoordinatesRequest.set({distance:t})}get cameraDistance(){throw it("cameraDistance")}set cameraLatitudeLimit(t){this.experimentalModel.twistySceneModel.latitudeLimit.set(t)}get cameraLatitudeLimit(){throw it("cameraLatitudeLimit")}set indexer(t){this.experimentalModel.indexerConstructorRequest.set(t)}get indexer(){throw it("indexer")}set tempoScale(t){this.experimentalModel.tempoScale.set(t)}get tempoScale(){throw it("tempoScale")}set experimentalSprite(t){this.experimentalModel.twistySceneModel.foundationStickerSpriteURL.set(t)}get experimentalSprite(){throw it("experimentalSprite")}set experimentalHintSprite(t){this.experimentalModel.twistySceneModel.hintStickerSpriteURL.set(t)}get experimentalHintSprite(){throw it("experimentalHintSprite")}set fullscreenElement(t){this.experimentalModel.twistySceneModel.fullscreenElement.set(t)}get fullscreenElement(){throw it("fullscreenElement")}set experimentalInitialHintFaceletsAnimation(t){this.experimentalModel.twistySceneModel.initialHintFaceletsAnimation.set(t)}get experimentalInitialHintFaceletsAnimation(){throw it("experimentalInitialHintFaceletsAnimation")}set experimentalDragInput(t){this.experimentalModel.twistySceneModel.dragInput.set(t)}get experimentalDragInput(){throw it("experimentalDragInput")}experimentalGet=new zw(this.experimentalModel)},zw=class{constructor(t){this.model=t}async alg(){return(await this.model.alg.get()).alg}async setupAlg(){return(await this.model.setupAlg.get()).alg}puzzleID(){return this.model.puzzleID.get()}async timestamp(){return(await this.model.detailedTimelineInfo.get()).timestamp}},dh="data-",tc={alg:"alg","experimental-setup-alg":"experimentalSetupAlg","experimental-setup-anchor":"experimentalSetupAnchor",puzzle:"puzzle","experimental-puzzle-description":"experimentalPuzzleDescription",visualization:"visualization","hint-facelets":"hintFacelets","experimental-stickering":"experimentalStickering","experimental-stickering-mask-orbits":"experimentalStickeringMaskOrbits",background:"background","color-scheme":"colorScheme","control-panel":"controlPanel","back-view":"backView","experimental-initial-hint-facelets-animation":"experimentalInitialHintFaceletsAnimation","viewer-link":"viewerLink","experimental-move-press-input":"experimentalMovePressInput","experimental-drag-input":"experimentalDragInput","experimental-title":"experimentalTitle","experimental-video-url":"experimentalVideoURL","experimental-competition-id":"experimentalCompetitionID","camera-latitude":"cameraLatitude","camera-longitude":"cameraLongitude","camera-distance":"cameraDistance","camera-latitude-limit":"cameraLatitudeLimit","tempo-scale":"tempoScale","experimental-sprite":"experimentalSprite","experimental-hint-sprite":"experimentalHintSprite"},Bw=Object.fromEntries(Object.values(tc).map(t=>[t,!0])),Gw={experimentalMovePressCancelOptions:!0},W3,pS=Symbol("intersectedCallback");function Vw(t){W3??=new IntersectionObserver((e,i)=>{for(let r of e)r.isIntersecting&&r.intersectionRect.height>0&&(r.target[pS](),i.unobserve(r.target))}),W3.observe(t)}var fa=class extends Fw{controller=new n6(this.experimentalModel,this);buttons;experimentalCanvasClickCallback=()=>{};constructor(t={}){super();for(let[e,i]of Object.entries(t)){if(!(Bw[e]||Gw[e])){console.warn(`Invalid config passed to TwistyPlayer: ${e}`);break}this[e]=i}}#e=new ic(this,"controls-",["auto"].concat(Object.keys(s6)));#t=document.createElement("div");#i=document.createElement("div");#r=!1;async connectedCallback(){this.addCSS(cS),Vw(this)}async[pS](){if(this.#r)return;this.#r=!0,this.addElement(this.#t).classList.add("visualization-wrapper"),this.addElement(this.#i).classList.add("error-elem"),this.#i.textContent="Error",this.experimentalModel.userVisibleErrorTracker.addFreshListener(e=>{let i=e.errors[0]??null;this.contentWrapper.classList.toggle("error",!!i),i&&(this.#i.textContent=i)});let t=new oS(this.experimentalModel,this.controller);this.contentWrapper.appendChild(t),this.buttons=new iS(this.experimentalModel,this.controller,this),this.contentWrapper.appendChild(this.buttons),this.experimentalModel.twistySceneModel.background.addFreshListener(e=>{this.contentWrapper.classList.toggle("checkered",["auto","checkered"].includes(e)),this.contentWrapper.classList.toggle("checkered-transparent",e==="checkered-transparent")}),this.experimentalModel.twistySceneModel.colorScheme.addFreshListener(e=>{this.contentWrapper.classList.toggle("dark-mode",["dark"].includes(e))}),this.experimentalModel.controlPanel.addFreshListener(e=>{this.#e.setValue(e)}),this.experimentalModel.visualizationStrategy.addFreshListener(this.#l.bind(this)),this.experimentalModel.puzzleID.addFreshListener(this.flash.bind(this))}#s="auto";experimentalSetFlashLevel(t){this.#s=t}flash(){this.#s==="auto"&&this.#n?.animate([{opacity:.25},{opacity:1}],{duration:250,easing:"ease-out"})}#n=null;#o=new $3;#a=null;#l(t){if(t!==this.#a){this.#n?.remove(),this.#n?.disconnect();let e;switch(t){case"2D":case"experimental-2D-LL":case"experimental-2D-LL-face":{e=new Q3(this.experimentalModel.twistySceneModel,t);break}case"Cube3D":case"PG3D":{e=new mh(this.experimentalModel),this.#o.handleNewValue(e);break}default:throw new Error("Invalid visualization")}this.#t.appendChild(e),this.#n=e,this.#a=t}}async experimentalCurrentVantages(){this.connectedCallback();let t=this.#n;return t instanceof mh?t.experimentalVantages():[]}async experimentalCurrentCanvases(){let t=await this.experimentalCurrentVantages(),e=[];for(let i of t)e.push((await i.canvasInfo()).canvas);return e}async experimentalCurrentThreeJSPuzzleObject(t){this.connectedCallback();let i=await(await this.#o.promise).experimentalTwisty3DPuzzleWrapper(),r=i.twisty3DPuzzle(),n=(async()=>{await r,await new Promise(s=>setTimeout(s,0))})();if(t){let s=new zn(async()=>{});i.addEventListener("render-scheduled",async()=>{s.requestIsPending()||(s.requestAnimFrame(),await n,t())})}return r}jumpToStart(t){this.controller.jumpToStart(t)}jumpToEnd(t){this.controller.jumpToEnd(t)}play(){this.controller.togglePlay(!0)}pause(){this.controller.togglePlay(!1)}togglePlay(t){this.controller.togglePlay(t)}experimentalAddMove(t,e){this.experimentalModel.experimentalAddMove(t,e)}experimentalAddAlgLeaf(t,e){this.experimentalModel.experimentalAddAlgLeaf(t,e)}static get observedAttributes(){let t=[];for(let e of Object.keys(tc))t.push(e,dh+e);return t}experimentalRemoveFinalChild(){this.experimentalModel.experimentalRemoveFinalChild()}attributeChangedCallback(t,e,i){t.startsWith(dh)&&(t=t.slice(dh.length));let r=tc[t];r&&(this[r]=i)}async experimentalScreenshot(t){return(await P3(this.experimentalModel,t)).dataURL}async experimentalDownloadScreenshot(t){if(["2D","experimental-2D-LL","experimental-2D-LL-face"].includes(await this.experimentalModel.visualizationStrategy.get())){let i=await this.#n.currentTwisty2DPuzzleWrapper().twisty2DPuzzle(),r=new XMLSerializer().serializeToString(i.svgWrapper.svgElement),n=URL.createObjectURL(new Blob([r]));lS(n,t??await aS(this.experimentalModel),"svg")}else await(await P3(this.experimentalModel)).download(t)}};Wt.define("twisty-player",fa);var mS=new pi;mS.replaceSync(`
:host {
  display: inline;
}

.wrapper {
  display: inline;
}

a:not(:hover) {
  color: inherit;
  text-decoration: none;
}

twisty-alg-leaf-elem.twisty-alg-comment {
  color: rgba(0, 0, 0, 0.4);
}

.wrapper.current-move {
  background: rgba(66, 133, 244, 0.3);
  margin-left: -0.1em;
  margin-right: -0.1em;
  padding-left: 0.1em;
  padding-right: 0.1em;
  border-radius: 0.1em;
}
`);async function Hw(t){return new Promise((e,i)=>{let r=document.getElementById(t);r&&e(r);let n=new MutationObserver(s=>{for(let o of s)o.attributeName==="id"&&o.target instanceof Element&&o.target.getAttribute("id")===t&&(e(o.target),n.disconnect())});n.observe(document.body,{attributeFilter:["id"],subtree:!0})})}var Ww=.25,Zs=class extends wi{constructor(t,e,i,r,n,s){if(super({mode:"open"}),this.algOrAlgNode=r,this.classList.add(t),this.addCSS(mS),s){let o=this.contentWrapper.appendChild(document.createElement("a"));o.href="#",o.textContent=e,o.addEventListener("click",a=>{a.preventDefault(),i.twistyAlgViewer.jumpToIndex(i.earliestMoveIndex,n)})}else this.contentWrapper.appendChild(document.createElement("span")).textContent=e}pathToIndex(t){return[]}setCurrentMove(t){this.contentWrapper.classList.toggle("current-move",t)}};Wt.define("twisty-alg-leaf-elem",Zs);var Qs=class extends js{constructor(t,e){super(),this.algOrAlgNode=e,this.classList.add(t)}queue=[];addString(t){this.queue.push(document.createTextNode(t))}addElem(t){return this.queue.push(t.element),t.moveCount}flushQueue(t=1){for(let e of gS(this.queue,t))this.append(e);this.queue=[]}pathToIndex(t){return[]}};Wt.define("twisty-alg-wrapper-elem",Qs);function Xw(t){return t===1?-1:1}function qw(t,e){return e<0?Xw(t):t}function gS(t,e){if(e===1)return t;let i=Array.from(t);return i.reverse(),i}var jw=class extends Or{traverseAlg(t,e){let i=0,r=new Qs("twisty-alg-alg",t),n=!0;for(let s of hc(t.childAlgNodes(),e.direction))n||r.addString(" "),n=!1,s.as(Bt)?.experimentalNISSGrouping&&r.addString("^("),s.as(qt)?.experimentalNISSPlaceholder||(i+=r.addElem(this.traverseAlgNode(s,{earliestMoveIndex:e.earliestMoveIndex+i,twistyAlgViewer:e.twistyAlgViewer,direction:e.direction}))),s.as(Bt)?.experimentalNISSGrouping&&r.addString(")");return r.flushQueue(e.direction),{moveCount:i,element:r}}traverseGrouping(t,e){let i=t.experimentalAsSquare1Tuple(),r=qw(e.direction,t.amount),n=0,s=new Qs("twisty-alg-grouping",t);return s.addString("("),i?(n+=s.addElem({moveCount:1,element:new Zs("twisty-alg-move",i[0].amount.toString(),e,i[0],!0,!0)}),s.addString(", "),n+=s.addElem({moveCount:1,element:new Zs("twisty-alg-move",i[1].amount.toString(),e,i[1],!0,!0)})):n+=s.addElem(this.traverseAlg(t.alg,{earliestMoveIndex:e.earliestMoveIndex+n,twistyAlgViewer:e.twistyAlgViewer,direction:r})),s.addString(`)${t.experimentalRepetitionSuffix}`),s.flushQueue(),{moveCount:n*Math.abs(t.amount),element:s}}traverseMove(t,e){let i=new Zs("twisty-alg-move",t.toString(),e,t,!0,!0);return e.twistyAlgViewer.highlighter.addMove(t[fi],i),{moveCount:1,element:i}}traverseCommutator(t,e){let i=0,r=new Qs("twisty-alg-commutator",t);r.addString("["),r.flushQueue();let[n,s]=gS([t.A,t.B],e.direction);return i+=r.addElem(this.traverseAlg(n,{earliestMoveIndex:e.earliestMoveIndex+i,twistyAlgViewer:e.twistyAlgViewer,direction:e.direction})),r.addString(", "),i+=r.addElem(this.traverseAlg(s,{earliestMoveIndex:e.earliestMoveIndex+i,twistyAlgViewer:e.twistyAlgViewer,direction:e.direction})),r.flushQueue(e.direction),r.addString("]"),r.flushQueue(),{moveCount:i*2,element:r}}traverseConjugate(t,e){let i=0,r=new Qs("twisty-alg-conjugate",t);r.addString("[");let n=r.addElem(this.traverseAlg(t.A,{earliestMoveIndex:e.earliestMoveIndex+i,twistyAlgViewer:e.twistyAlgViewer,direction:e.direction}));return i+=n,r.addString(": "),i+=r.addElem(this.traverseAlg(t.B,{earliestMoveIndex:e.earliestMoveIndex+i,twistyAlgViewer:e.twistyAlgViewer,direction:e.direction})),r.addString("]"),r.flushQueue(),{moveCount:i+n,element:r}}traversePause(t,e){return t.experimentalNISSGrouping?this.traverseAlg(t.experimentalNISSGrouping.alg,e):{moveCount:1,element:new Zs("twisty-alg-pause",".",e,t,!0,!0)}}traverseNewline(t,e){let i=new Qs("twisty-alg-newline",t);return i.append(document.createElement("br")),{moveCount:0,element:i}}traverseLineComment(t,e){return{moveCount:0,element:new Zs("twisty-alg-line-comment",`//${t.text}`,e,t,!1,!1)}}},Yw=jt(jw),Kw=class{moveCharIndexMap=new Map;currentElem=null;addMove(t,e){this.moveCharIndexMap.set(t,e)}set(t){let e=t?this.moveCharIndexMap.get(t[fi])??null:null;this.currentElem!==e&&(this.currentElem?.classList.remove("twisty-alg-current-move"),this.currentElem?.setCurrentMove(!1),e?.classList.add("twisty-alg-current-move"),e?.setCurrentMove(!0),this.currentElem=e)}},yS=class extends js{highlighter=new Kw;#e;#t=null;lastClickTimestamp=null;constructor(t){super(),t?.twistyPlayer&&(this.twistyPlayer=t?.twistyPlayer)}connectedCallback(){}setAlg(t){this.#e=Yw(t,{earliestMoveIndex:0,twistyAlgViewer:this,direction:1}).element,this.textContent="",this.appendChild(this.#e)}get twistyPlayer(){return this.#t}set twistyPlayer(t){this.#i(t)}async#i(t){if(this.#t){console.warn("twisty-player reassignment is not supported");return}if(t===null)throw new Error("clearing twistyPlayer is not supported");this.#t=t,this.#t.experimentalModel.alg.addFreshListener(r=>{this.setAlg(r.alg)});let e=(await this.#t.experimentalModel.alg.get()).alg,i=fi in e?e:ge.fromString(e.toString());this.setAlg(i),t.experimentalModel.currentMoveInfo.addFreshListener(r=>{let n=r.currentMoves[0];if(n??=r.movesStarting[0],n??=r.movesFinishing[0],!n)this.highlighter.set(null);else{let s=n.move;this.highlighter.set(s)}}),t.experimentalModel.detailedTimelineInfo.addFreshListener(r=>{r.timestamp!==this.lastClickTimestamp&&(this.lastClickTimestamp=null)})}async jumpToIndex(t,e){let i=this.#t;if(i){i.pause();let r=(async()=>{let n=await i.experimentalModel.indexer.get(),s=e?n.moveDuration(t)*Ww:0;return n.indexToMoveStartTimestamp(t)+n.moveDuration(t)-s})();i.experimentalModel.timestampRequest.set(await r),this.lastClickTimestamp===await r?(i.play(),this.lastClickTimestamp=null):this.lastClickTimestamp=await r}}async attributeChangedCallback(t,e,i){if(t==="for"){let r=document.getElementById(i);if(r||console.info("for= elem does not exist, waiting for one"),await customElements.whenDefined("twisty-player"),r=await Hw(i),!(r instanceof fa)){console.warn("for= elem is not a twisty-player");return}this.twistyPlayer=r}}static get observedAttributes(){return["for"]}};Wt.define("twisty-alg-viewer",yS);var Zw=class extends Or{traverseAlg(t,e){let i=[],r=0;for(let n of t.childAlgNodes()){let s=this.traverseAlgNode(n,{numMovesSofar:e.numMovesSofar+r});i.push(s.tokens),r+=s.numLeavesInside}return{tokens:Array.prototype.concat(...i),numLeavesInside:r}}traverseGrouping(t,e){let i=this.traverseAlg(t.alg,e);return{tokens:i.tokens,numLeavesInside:i.numLeavesInside*t.amount}}traverseMove(t,e){return{tokens:[{leaf:t,idx:e.numMovesSofar}],numLeavesInside:1}}traverseCommutator(t,e){let i=this.traverseAlg(t.A,e),r=this.traverseAlg(t.B,{numMovesSofar:e.numMovesSofar+i.numLeavesInside});return{tokens:i.tokens.concat(r.tokens),numLeavesInside:i.numLeavesInside*2+r.numLeavesInside}}traverseConjugate(t,e){let i=this.traverseAlg(t.A,e),r=this.traverseAlg(t.B,{numMovesSofar:e.numMovesSofar+i.numLeavesInside});return{tokens:i.tokens.concat(r.tokens),numLeavesInside:i.numLeavesInside*2+r.numLeavesInside*2}}traversePause(t,e){return{tokens:[{leaf:t,idx:e.numMovesSofar}],numLeavesInside:1}}traverseNewline(t,e){return{tokens:[],numLeavesInside:0}}traverseLineComment(t,e){return{tokens:[],numLeavesInside:0}}},Qw=jt(Zw),$w=class extends ct{getDefaultValue(){return""}},Jw=class extends pt{derive(t){return hS(t.value)}},eM=class extends Ir{getDefaultValue(){return{selectionStart:0,selectionEnd:0,endChangedMostRecently:!1}}async derive(t,e){let{selectionStart:i,selectionEnd:r}=t,n=await e,s=t.selectionStart===n.selectionStart&&t.selectionEnd!==(await e).selectionEnd;return{selectionStart:i,selectionEnd:r,endChangedMostRecently:s}}},tM=class extends pt{derive(t){return t.selectionInfo.endChangedMostRecently?t.selectionInfo.selectionEnd:t.selectionInfo.selectionStart}},iM=class extends pt{derive(t){return Qw(t.algWithIssues.alg,{numMovesSofar:0}).tokens}},rM=class extends pt{derive(t){function e(r){if(r===null)return null;let n;return t.targetChar<r.leaf[fi]?n="before":t.targetChar===r.leaf[fi]?n="start":t.targetChar<r.leaf[Fi]?n="inside":t.targetChar===r.leaf[Fi]?n="end":n="after",{leafInfo:r,where:n}}let i=null;for(let r of t.leafTokens){if(t.targetChar<r.leaf[fi]&&i!==null)return e(i);if(t.targetChar<=r.leaf[Fi])return e(r);i=r}return e(i)}},nM=class{valueProp=new $w;selectionProp=new eM;targetCharProp=new tM({selectionInfo:this.selectionProp});algEditorAlgWithIssues=new Jw({value:this.valueProp});leafTokensProp=new iM({algWithIssues:this.algEditorAlgWithIssues});leafToHighlight=new rM({leafTokens:this.leafTokensProp,targetChar:this.targetCharProp})},sM="//";function oM(t){try{return ge.fromString(t)}catch{return null}}function SS(t,e){let i=t.indexOf(e);return i===-1?[t,""]:[t.slice(0,i),t.slice(i)]}function X3(t){let e=[];for(let i of t.split(`
`)){let[r,n]=SS(i,sM);r=r.replaceAll("\u2019","'"),e.push(r+n)}return e.join(`
`)}function aM(t,e){let{value:i}=t,{selectionStart:r,selectionEnd:n}=t,s=i.slice(0,r),o=i.slice(n);e=e.replaceAll(`\r
`,`
`);let a=s.match(/\/\/[^\n]*$/),l=i[r-1]==="/"&&e[0]==="/",c=a||l,f=e.match(/\/\/[^\n]*$/),h=e;if(c){let[g,m]=SS(e,`
`);h=g+X3(m)}else h=X3(e);let u=!c&&r!==0&&![`
`," "].includes(h[0])&&![`
`," "].includes(i[r-1]),p=!f&&n!==i.length&&![`
`," "].includes(h.at(-1))&&![`
`," "].includes(i[n]);function d(g,m){let w=g+h+m,M=!!oM(s+w+o);return M&&(h=w),M}u&&p&&d(" "," ")||u&&d(" ","")||p&&d(""," "),fn?.execCommand("insertText",!1,h)||t.setRangeText(h,r,n,"end")}var vS=new pi;vS.replaceSync(`
:host {
  width: 384px;
  display: grid;
}

.wrapper {
  /*overflow: hidden;
  resize: horizontal;*/

  background: var(--background, none);
  display: grid;
}

textarea, .carbon-copy {
  grid-area: 1 / 1 / 2 / 2;

  width: 100%;
  font-family: sans-serif;
  line-height: 1.2em;

  font-size: var(--font-size, inherit);
  font-family: var(--font-family, sans-serif);

  box-sizing: border-box;

  padding: var(--padding, 0.5em);
  /* Prevent horizontal growth. */
  overflow-x: hidden;
}

textarea {
  resize: none;
  background: none;
  z-index: 2;
  border: 1px solid var(--border-color, rgba(0, 0, 0, 0.25));
  overflow: hidden;
}

.carbon-copy {
  white-space: pre-wrap;
  word-wrap: break-word;
  color: transparent;
  user-select: none;
  pointer-events: none;

  z-index: 1;
}

.carbon-copy .highlight {
  background: var(--highlight-color, rgba(255, 128, 0, 0.5));
  padding: 0.1em 0.2em;
  margin: -0.1em -0.2em;
  border-radius: 0.2em;
}

.wrapper.issue-warning textarea,
.wrapper.valid-for-puzzle-warning textarea {
  outline: none;
  border: 1px solid rgba(200, 200, 0, 0.5);
  background: rgba(255, 255, 0, 0.1);
}

.wrapper.issue-error textarea,
.wrapper.valid-for-puzzle-error textarea {
  outline: none;
  border: 1px solid red;
  background: rgba(255, 0, 0, 0.1);
}
`);var Kl="for-twisty-player",q3="placeholder",j3="twisty-player-prop",lM=class extends wi{model=new nM;#e=document.createElement("textarea");#t=document.createElement("div");#i=document.createElement("span");#r=document.createElement("span");#s=document.createElement("span");#n=new ic(this,"valid-for-puzzle-",["none","warning","error"]);#o=null;#a;get#l(){return this.#o===null?null:this.#o.experimentalModel[this.#a]}debugNeverRequestTimestamp=!1;constructor(t){super(),this.#t.classList.add("carbon-copy"),this.addElement(this.#t),this.#e.rows=1,this.addElement(this.#e),this.#i.classList.add("prefix"),this.#t.appendChild(this.#i),this.#r.classList.add("highlight"),this.#t.appendChild(this.#r),this.#s.classList.add("suffix"),this.#t.appendChild(this.#s),this.#e.placeholder="Alg",this.#e.setAttribute("spellcheck","false"),this.addCSS(vS),this.#e.addEventListener("input",()=>{this.#f=!0,this.onInput()}),this.#e.addEventListener("blur",()=>this.onBlur()),document.addEventListener("selectionchange",()=>this.onSelectionChange()),t?.twistyPlayer&&(this.twistyPlayer=t.twistyPlayer),this.#a=t?.twistyPlayerProp??"alg",t?.twistyPlayerProp==="alg"&&this.model.leafToHighlight.addFreshListener(e=>{e&&this.highlightLeaf(e.leafInfo.leaf)})}connectedCallback(){this.#e.addEventListener("paste",t=>{let e=t.clipboardData?.getData("text");e&&(aM(this.#e,e),t.preventDefault(),this.onInput())})}set algString(t){this.#e.value=t,this.onInput()}get algString(){return this.#e.value}set placeholder(t){this.#e.placeholder=t}#f=!1;onInput(){this.#r.hidden=!0,this.highlightLeaf(null);let t=this.#e.value.trimEnd();this.model.valueProp.set(t),this.#l?.set(t)}async onSelectionChange(){if(document.activeElement!==this||this.shadow.activeElement!==this.#e||this.#a!=="alg")return;let{selectionStart:t,selectionEnd:e}=this.#e;this.model.selectionProp.set({selectionStart:t,selectionEnd:e})}async onBlur(){}setAlgIssueClassForPuzzle(t){this.#n.setValue(t)}#h(t){return t.endsWith(`
`)?`${t} `:t}#c=null;highlightLeaf(t){if(t===null){this.#i.textContent="",this.#r.textContent="",this.#s.textContent=this.#h(this.#e.value);return}t!==this.#c&&(this.#c=t,this.#i.textContent=this.#e.value.slice(0,t[fi]),this.#r.textContent=this.#e.value.slice(t[fi],t[Fi]),this.#s.textContent=this.#h(this.#e.value.slice(t[Fi])),this.#r.hidden=!1)}get twistyPlayer(){return this.#o}set twistyPlayer(t){if(this.#o){console.warn("twisty-player reassignment/clearing is not supported");return}this.#o=t,t&&((async()=>this.algString=this.#l?(await this.#l.get()).alg.toString():"")(),this.#a==="alg"&&(this.#o?.experimentalModel.puzzleAlg.addFreshListener(e=>{if(e.issues.errors.length===0){this.setAlgIssueClassForPuzzle(e.issues.warnings.length===0?"none":"warning");let i=e.alg,r=ge.fromString(this.algString);i.isIdentical(r)||(this.algString=i.toString(),this.onInput())}else this.setAlgIssueClassForPuzzle("error")}),this.model.leafToHighlight.addFreshListener(async e=>{if(e===null)return;let[i,r]=await Promise.all([await t.experimentalModel.indexer.get(),await t.experimentalModel.timestampRequest.get()]);if(r==="auto"&&!this.#f)return;let n=i.indexToMoveStartTimestamp(e.leafInfo.idx),s=i.moveDuration(e.leafInfo.idx),o;switch(e.where){case"before":{o=n;break}case"start":case"inside":{o=n+s/4;break}case"end":case"after":{o=n+s;break}default:throw console.log("invalid where"),new Error("Invalid where!")}this.debugNeverRequestTimestamp||t.experimentalModel.timestampRequest.set(o)}),t.experimentalModel.currentLeavesSimplified.addFreshListener(async e=>{let r=(await t.experimentalModel.indexer.get()).getAnimLeaf(e.patternIndex);this.highlightLeaf(r)})))}attributeChangedCallback(t,e,i){switch(t){case Kl:{let r=document.getElementById(i);if(!r){console.warn(`${Kl}= elem does not exist`);return}if(!(r instanceof fa)){console.warn(`${Kl}=is not a twisty-player`);return}this.twistyPlayer=r;return}case q3:{this.placeholder=i;return}case j3:{if(this.#o)throw console.log("cannot set prop"),new Error("cannot set prop after twisty player");this.#a=i;return}}}static get observedAttributes(){return[Kl,q3,j3]}};Wt.define("twisty-alg-editor",lM);var Jl=new pi;Jl.replaceSync(`
.wrapper {
  background: rgb(255, 245, 235);
  border: 1px solid rgba(0, 0, 0, 0.25);

  /* Workaround from https://stackoverflow.com/questions/40010597/how-do-i-apply-opacity-to-a-css-color-variable */
  --text-color: 0, 0, 0;
  --heading-background: 255, 230, 210;

  color: rgb(var(--text-color));
}

.setup-alg, twisty-alg-viewer {
  padding: 0.5em 1em;
}

.heading {
  background: rgba(var(--heading-background), 1);
  color: rgba(var(--text-color), 1);
  font-weight: bold;
  padding: 0.25em 0.5em;
  display: grid;
  grid-template-columns: auto 1fr;

  /* For the move count hover elems. */
  position: sticky;
}

.heading.title {
  background: rgb(255, 245, 235);
  font-size: 150%;
  white-space: pre-wrap;
}

.heading .move-count {
  font-weight: initial;
  text-align: right;
  color: rgba(var(--text-color), 0.4);
}

.wrapper.dark-mode .heading .move-count {
  color: rgba(var(--text-color), 0.7);
}

.heading a {
  text-decoration: none;
  color: inherit;
}

twisty-player {
  width: 100%;
  min-height: 128px;
  height: 288px;
  resize: vertical;
  overflow-y: hidden;
}

twisty-player + .heading {
  padding-top: 0.5em;
}

twisty-alg-viewer {
  display: inline-block;
}

.wrapper {
  container-type: inline-size;
}

.scrollable-region {
  border-top: 1px solid rgba(0, 0, 0, 0.25);
}

.scrollable-region {
  max-height: 18em;
  overflow-y: auto;
}

@container (min-width: 512px) {
  .responsive-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  twisty-player {
    height: 320px
  }
  .scrollable-region {
    border-top: none;
    border-left: 1px solid rgba(0, 0, 0, 0.25);
    contain: strict;
    max-height: 100cqh;
  }
}

.wrapper:fullscreen,
.wrapper:fullscreen .responsive-wrapper {
  width: 100%;
  height: 100%;
}

.wrapper:fullscreen twisty-player,
.wrapper:fullscreen .scrollable-region {
  height: 50%;
}

@container (min-width: 512px) {
  .wrapper:fullscreen twisty-player,
  .wrapper:fullscreen .scrollable-region {
    height: 100%;
  }
}

/* TODO: dedup with Twizzle Editor */
.move-count > span:hover:before {
  background-color: rgba(var(--heading-background), 1);
  color: rgba(var(--text-color), 1);
  backdrop-filter: blur(4px);
  z-index: 100;
  position: absolute;
  padding: 0.5em;
  top: 1.5em;
  right: 0;
  content: attr(data-before);
  white-space: pre-wrap;
  text-align: left;
}

.move-count > span:hover {
  color: rgba(var(--text-color), 1);
  cursor: help;
}
`);var xS=new pi;xS.replaceSync(`
.wrapper {
  background: white;
  --heading-background: 232, 239, 253
}

.wrapper.dark-mode {
  --text-color: 236, 236, 236;
  --heading-background: 29, 29, 29;
}

.scrollable-region {
  overflow-y: auto;
}

.wrapper.dark-mode {
  background: #262626;
  --text-color: 142, 142, 142;
  border-color: #FFFFFF44;
  color-scheme: dark;
}

.wrapper.dark-mode .heading:not(.title) {
  background: #1d1d1d;
}

.heading.title {
  background: none;
}
`);function cM(t="",e=location.href){let i={alg:"alg","setup-alg":"experimental-setup-alg","setup-anchor":"experimental-setup-anchor",puzzle:"puzzle",stickering:"experimental-stickering","puzzle-description":"experimental-puzzle-description",title:"experimental-title","video-url":"experimental-video-url",competition:"experimental-competition-id"},r=new URL(e).searchParams,n={};for(let[s,o]of Object.entries(i)){let a=r.get(t+s);if(a!==null){let l=tc[o];n[l]=a}}return n}var Zl="outer block moves (e.g. R, Rw, or 4r)",Ql="inner block moves (e.g. M or 2-5r)",Y3={OBTM:`HTM = OBTM ("Outer Block Turn Metric"):
\u2022 ${Ql} count as 2 turns
\u2022 ${Zl} count as 1 turn
\u2022 rotations (e.g. x) count as 0 turns`,OBQTM:`QTM = OBQTM ("Outer Block Quantum Turn Metric"):
\u2022 ${Ql} count as 2 turns per quantum (e.g. M2 counts as 4)
\u2022 ${Zl} count as 1 turn per quantum (e.g. R2 counts as 2)
\u2022 rotations (e.g. x) count as 0 turns`,RBTM:`STM = RBTM ("Range Block Turn Metric"):
\u2022 ${Ql} count as 1 turn
\u2022 ${Zl} count as 1 turn
\u2022 rotations (e.g. x) count as 0 turns`,RBQTM:`SQTM = RBQTM ("Range Block Quantum Turn Metric"):
\u2022 ${Ql} count as 1 turn per quantum (e.g. M2 counts as 2)
\u2022 ${Zl} count as 1 turn per quantum (e.g. R2 counts as 2)
\u2022 rotations (e.g. x) count as 0 turns`,ETM:`ETM ("Execution Turn Metric"):
\u2022 all moves (including rotations) count as 1 turn`},fM={OBTM:"OB",OBQTM:"OBQ",RBTM:"RB",RBQTM:"RBQ",ETM:"E"},hM=class extends wi{constructor(t){super({mode:"open"}),this.options=t}twistyPlayer=null;a=null;#e(){if(this.contentWrapper.textContent="",this.a){let e=this.contentWrapper.appendChild(document.createElement("span"));e.textContent="\u2757\uFE0F",e.title="Could not show a player for link",this.addElement(this.a)}this.removeCSS(Jl);let t=this.shadow.adoptedStyleSheets.indexOf(Jl);typeof t<"u"&&this.shadow.adoptedStyleSheets.splice(t,t+1),this.#t?.remove()}#t;#i;#r;#s;async connectedCallback(){if(this.#r=this.addElement(document.createElement("div")),this.#r.classList.add("responsive-wrapper"),this.options?.colorScheme==="dark"&&this.contentWrapper.classList.add("dark-mode"),this.addCSS(Jl),this.options?.cdnForumTweaks&&this.addCSS(xS),this.a=this.querySelector("a"),!this.a)return;let t=cM("",this.a.href),e=this.a?.href,{hostname:i,pathname:r}=new URL(e);if(i!=="alpha.twizzle.net"){this.#e();return}if(["/edit/","/explore/"].includes(r)){let n=r==="/explore/";if(t.puzzle&&!(t.puzzle in Fc)){let a=(await Promise.resolve().then(()=>(no(),ro))).getPuzzleDescriptionString(t.puzzle);delete t.puzzle,t.experimentalPuzzleDescription=a}if(this.twistyPlayer=this.#r.appendChild(new fa({background:this.options?.cdnForumTweaks?"checkered-transparent":"checkered",colorScheme:this.options?.colorScheme==="dark"?"dark":"light",...t,viewerLink:n?"experimental-twizzle-explorer":"auto"})),this.twistyPlayer.fullscreenElement=this.contentWrapper,t.experimentalTitle&&(this.twistyPlayer.experimentalTitle=t.experimentalTitle),this.#i=this.#r.appendChild(document.createElement("div")),this.#i.classList.add("scrollable-region"),t.experimentalTitle&&this.#n(t.experimentalTitle).classList.add("title"),t.experimentalSetupAlg){this.#n("Setup",async()=>(await this.twistyPlayer?.experimentalModel.setupAlg.get())?.alg.toString()??null);let a=this.#i.appendChild(document.createElement("div"));a.classList.add("setup-alg"),a.textContent=new ge(t.experimentalSetupAlg).toString()}let s=this.#n("Moves",async()=>(await this.twistyPlayer?.experimentalModel.alg.get())?.alg.toString()??null);this.#s=s.appendChild(dM(this.twistyPlayer.experimentalModel)),this.#s.classList.add("move-count"),this.#i.appendChild(new yS({twistyPlayer:this.twistyPlayer})).part.add("twisty-alg-viewer")}else this.#e()}#n(t,e){let i=this.#i.appendChild(document.createElement("div"));i.classList.add("heading");let r=i.appendChild(document.createElement("span"));if(r.textContent=t,e){r.textContent+=" ";let n=r.appendChild(document.createElement("a"));n.textContent="\u{1F4CB}",n.href="#",n.title="Copy to clipboard";async function s(o){n.textContent=o,await new Promise(a=>setTimeout(a,2e3)),n.textContent===o&&(n.textContent="\u{1F4CB}")}n.addEventListener("click",async o=>{o.preventDefault(),n.textContent="\u{1F4CB}\u2026";let a=await e();if(a)try{await navigator.clipboard.writeText(a),s("\u{1F4CB}\u2705")}catch(l){throw s("\u{1F4CB}\u274C"),l}else s("\u{1F4CB}\u274C")})}return i}};Wt.define("twizzle-link",hM);function dM(t,e=document.createElement("span")){async function i(){let[r,n]=await Promise.all([t.puzzleAlg.get(),t.puzzleLoader.get()]);if(r.issues.errors.length!==0){e.textContent="";return}let s=!0;function o(a){s?s=!1:e.append(")(");let l=e.appendChild(document.createElement("span")),c=b3(n,a,r.alg);l.append(`${fM[a]}: `);let f=l.appendChild(document.createElement("span"));f.textContent=c.toString(),f.classList.add("move-number"),l.setAttribute("data-before",Y3[a]??""),l.setAttribute("title",Y3[a]??"")}e.textContent="(",n.id==="3x3x3"?(o("OBTM"),o("OBQTM"),o("RBTM")):n.pg&&(o("RBTM"),o("RBQTM")),o("ETM"),e.append(")")}return t.puzzleAlg.addFreshListener(i),t.puzzleID.addFreshListener(i),e}export{fa as TwistyPlayer};
