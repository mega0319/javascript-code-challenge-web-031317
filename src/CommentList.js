function CommentList(){
  this.comments = []
}

CommentList.prototype.render = function(){
  this.comments.forEach(function(el){
    return `<ul>${el.render()}</ul>`
  })
}

CommentList.prototype.addComment = function(string){
  var newCommentInstance = new Comment(string)
  this.comments.push(newCommentInstance)
}
