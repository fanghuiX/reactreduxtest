let Mock=require('mockjs');
let Random=Mock.Random;

module.exports=()=>{
  let data={
    commands:[]
  };

  for(let i=0;i<99;i++){
    let content=Random.cparagraph(0,10);

    data.commands.push({
      name:Random.cword(1,7),
      commandstr:content.substr(10,50)
    })
  }
  return data
}
