$(function() {
  $('#btn-submit').on('click', function(event) {
    event.preventDefault();
    var param = $('#contact-form');

    $.ajax({
      url: param.attr('action'),
      type: 'get',
      dataType: 'jsonp',
      contentType: 'application/javascript',
      data: param.serialize(),
      jsonp: 'callback',
    })
    .done(function(data){
      alert('お問い合わせありがとうございました。');
    })
    .fail(function(data){
      alert('お問い合わせありがとうございました。');
    });
  });
})
