console.log("sanity check")

function renderGifs() {
  $.ajax({
    method:'GET',
    url:'http://api.giphy.com/v1/gifs/search',
    data: $(".form-inline").serialize(),
    success: onSuccess,
    error: onError,
  });
}

$(document).on("ready", function(){
    renderGifs();
    $('.form-inline').on('submit',function(event){
      event.preventDefault();
      renderGifs();
    });
});

function onSuccess(json){
  // json.data.forEach(function(gif){
  //   console.log(gif.images.fixed_height.url)
  // })
  // $(".gif-image").remove();
  console.log(json.data)
  json.data.forEach(function(gif) {
    $(".gif-gallery").append("<img class='gif-image' src=" + gif.images.fixed_height.url + ">");
  });
};

function onError(xhr, status, errorThrown){
  console.log(xhr, status, errorThrown)
};
