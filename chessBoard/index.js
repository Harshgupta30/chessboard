function print(){
    let board_size = document.getElementById('btn1').value;
    const board = document.getElementById('board');
    for(let i=0;i<board_size;i++){
      let row="";
      for(let j=0;j<board_size;j++){
        if(i%2==0){
          if(j%2==0){
            row+="#";
          }
          else{
            row+="*";
          }
        }
        else{
          if(j%2==0){
            row+="*";
          }
          else{
            row+="#";
          }
        }
      }
      const lab=document.createElement("label");
      const node=document.createTextNode(row);
      lab.appendChild(node);
  
      board.appendChild(lab);
      board.appendChild(newLine());
    }
  }
  
  function newLine(){
    return document.createElement("br");
  }
  
  