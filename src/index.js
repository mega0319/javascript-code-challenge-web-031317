$(document).ready(function(){
  // your code here!
  commentShow()
})

function commentShow(){
  $('#submit').on('click', function(e){
    e.preventDefault()
    const $input = $('#input').val()
    var newComment = new Comment($input)
    // debugger
    $('#comment-list').append(newComment.render())
    $('#input').val('')
  })
}
