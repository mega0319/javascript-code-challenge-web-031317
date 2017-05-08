function Comment(text){
  this.text = text
}

Comment.prototype.render = function(){
  return `<li>${this.text}</li>`
}


//ES6
// class Comment{
//   constructor(text){
//     this.text = text
//   }
//
//   render(){
//     return `<li>${this.text}</li>`
//   }
//
// }
