$(function() {
  $('#btn-submit').on('click', function(event) {
    event.preventDefault();
    var param = $('#contact-form');

    if (param[0].reportValidity() == false) {
      return;
    }

    $.ajax({
      url: param.attr('action'),
      type: 'get',
      dataType: 'jsonp',
      contentType: 'application/javascript',
      data: param.serialize(),
      jsonp: 'callback',
    })
    .done(function(data, textStatus, jqXHR){
      console.log(jqXHR);
      alert('お問い合わせありがとうございました。');
      window.location.href = '/';
    })
    .fail(function(data, textStatus, jqXHR){
      console.log(jqXHR);
      alert('お問い合わせありがとうございました。');
      window.location.href = '/';
    });
  });
})
