const APP = (SET =>{


  'use strict';
  const repeat = (count, ...arg) => {
    const f = arg.pop();
    for(let i = 0; i < count; i++) f(i, ...arg); // ?
  };
  const PROP = (self, ...v) => Object.assign(self, ...v); // 코드의 의도가 반영 된다. 속성을 넘기기 위한것 으로 만들었다. 
  const ERR = v => {throw v;} //문이 방해하면 식으로 만든다.
  const IS_OVERRIDE = _ => ERR('override!');
  const TMPL = (self, method, ...arg) => { '_' + method in self ? self['_' + method](arg) : ERR(); } // 프로그래밍을 하는 것은 코드에 기억을 남긴다. 
  const HOOK = (p, method) => typeof p.prototype[method] === 'function' ? '_' + method : ERR();
  const SubData = class {
    constructor(listener) { PROP(this, {listener}); } //코드를 수정하는 일이 없다면 들여쓰기를 하지 않고 사용
    notify(){ if(this.listener) this.listen(); }
    clear() { TMPL(this, 'clear')()} //언어에서 지원하지 않으면 함수로 만들면 된다. 
  }    
    //언더를 붙이는 템플릿 명시적 패턴
  const Stage = class extends SubData {
    [HOOK(SubData, 'clear')](){ //HOOK을 사용하지 않는 이상 함수를 호출할 수 없다. 
      this.stage = 0;
      this.isNext();
    }
    isNext() {
      if(this.stage++ === SET.stage.max) return false;
      else {
        this.notify();
        return true;
      }
    }
    get spped() {
      const {stage: {speed: [min, max], max: stageMax}} = SET;
      return min - (min - max) * (this.stage - 1) / stageMax;
    }
    get count() {
      const {stage: {count: [max, inc]}} = SET; //destructing은 선언적으로 표현된다. 
      return max + inc * (this.stage - 1);
    }
  }
  const Score = class extends SubData {
    [HOOK(SubData, 'clear')]() {
      this.curr = this.total = 0;
      this.notify();
    }
    add(line, stage) {
      //...
    }
  }
  const Block = class {
    static get() {

    }
    constructor() {}
    left() {}
    right() {}
    get block() {}
  }
  const Data = class extends Array {
    constructor(row, col) {
      super(row);
      this.fill([]);
      PROP(this, {col});
    }
    cell() {}
    row() {}
    all() {}
  }
  const Renderer = class {
    constructor() {}
    clear() {
      IS_OVERRIDE();
    }
    render(v) {
      TMPL(this, 'render', v)
    }
  }
  const TableRenderer = class extends Renderer {
    [HOOK(Renderer, 'render')]() {  }
    [OVERRIDE(Renderer, 'clear')]() {}
  }
  const Panel = class {
    constructor(game, _init, _render) { PROP(this, {_init, _render}); }
    init(...arg){ return this.base = this._init(this.game, ...arg); } //arguments가 있는데 왜 rest operator를 사용하는 것일까? => 코드에 arguments의 의도가 표현되지 않는다. 'use strict'에서 arguments를 못 사용하게 한다. 
    render(...arg) {
      this._render(this.base, this.game, ...arg);
    }
  }
  const Game = class {
    constructor(col, row, basePanel) {} 
    addState(state, {init, render}, f) {
      this.state[state] = f;
      this.panel[panel] = new Panel(this, init, render);
    }
  }
  return {
    init() {
      const game = new Game(10, 20, {
        init() {
          return document.sel('#stage');
        }, 
        render(base, game, panel, {base: el = panel.init()}) {
          base.innerHTML = '';
          base.appendChild(el);
        }
      });
      game.addState(Game.title, {
        init(game, ...arg){
          document.sel('#title').style.display = 'block';
          document.sel('#title.sart').onclick = _ =>game.setState(Game.stageIntro);
          return sel('#title');
        }, null}, (_, {stage, score})=>{
          //stageClear
          stage.clear();
          score.clear();
        });

    }
  }
})(SET)
APP.init();



// 매직넘버 (상수)는 모두 settings로 옮긴다.  상수는 마지막에 관리자 페이지로 가게된다. 
// 유틸리티를 가져오는 경우 : 학습 시간 소요 => ES6는 편해서 만들어 사용해도 시간이 많이 소요 되지 않는다. 
// 문은 컴파일러한테 주는 힌트, 식 이 아니다. 
// 코드에 집착하지 않으면 제품이 나오지 않는다. 로직이 안정한지 아닌지 아는 방법, 분기!!!!! mendatory code
// 섬김 배열? 길이는 500이지만, 안에 undefied도 차있지 않는 배열
// 주석은 이해되지 않는다. 코드로 전달해야 한다. (상용소프트웨어도 코드와 문서는 일치하지 않는다.)
// 전략 객체? 
// 객체지향의 목표, 어떻게 하면 코드로 기술하지 않고 조합형으로 (동적으로) 사용할 수 있을까? 
// 게임객체의 목표. 상태를 호스팅 해주는 역할
// // 패널과 액션 
// 전략패턴 ?
// 상태패턴 ?
// 레이지 초기화 ? 
// 프로그램이란 나의 새로운 언어를 만드는 것.

// 객체망으로 문제를 해결하는 방법