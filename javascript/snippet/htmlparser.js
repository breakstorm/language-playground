// 참고 사이트 : https://gist.github.com/sansolmom/48cdb413d13dcc8f89b9210e13487fd3 
// 참고 사이트 : https://gist.github.com/expert0226/00532bf7f646ed9618e70f21cc75fc76 


const textNode = (text, targetNode)=>{
	if(text.length) targetNode.push({type:"TEXT", text});
	return '';
}

const parser =  (input, stacks, stack, cursor, text, char)  => {
	while(cursor < input.length){
      const char = input[cursor++];
      if(char === '<'){
        text = textNode(text, stack.tag.children);
        debugger;
        if(input[cursor++] !== '/'){
			let name = input.substring(cursor - 1, cursor = input.indexOf('>', cursor)); 
			const isClose = input[cursor - 1 ] === '/';
			if(isClose) name = name.substr(0, name.length - 1);
			const tag = {name, type:'NODE', children:[]};
			cursor++; 
			stack.tag.children.push(tag)
			if(!isClose){
				stacks.push({tag, back:stack});
				break;
			}
	    } else if(stack.tag.name == input.substring(cursor, input.indexOf('>', cursor))){
	    	cursor = input.indexOf('>', cursor);
  			stack = stack.back;
	    }
	  }else{
	      text += char;
	  } 
    }

	return {curosr, text, isClose}
}

const htmlparser = (input) => {
	const stacks = [], result = {tag:{TYPE:"ROOT", children: []}};
	let cursor = 0, stack = result;
	let char = '', text='';


	do{
    const v = parser(input, stacks, stack cursor, text, char);
    ({cursor, text} = v);
	}while(stack = stacks.pop());

  
}

const str = `
  <div>
  a
  <a> b </a>
  c
  <img/>
  d
</div>`

const str2 = `
<a>bbb</a>
`

htmlparser(str2);