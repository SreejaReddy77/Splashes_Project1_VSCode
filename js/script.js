$(document).ready(function(){
  // jQuery component #1: animated navigation scrolling behavior
  $('.nav-link').on('click', function(){
    $(this).addClass('clicked');
  });

  // Registration form interaction
  $('.register-form').on('submit', function(e){
    e.preventDefault();
    $(this).fadeOut(200, function(){
      $(this).replaceWith('<div class="alert alert-success text-center"><strong>You are on your way!</strong><br>Thanks for registering with Splashes. We will be in touch soon.</div>');
    });
  });

  // Contact form interaction
  $('#contactForm').on('submit', function(e){
    e.preventDefault();
    $('#formMessage').hide().html('<div class="alert alert-success">Thanks! Your message has been received. We will contact you soon.</div>').fadeIn();
    this.reset();
  });

  // jQuery component #2 + Ajax: load schedule data
  if ($('#scheduleBody').length) {
    $.ajax({
      url: 'data/schedule.json',
      dataType: 'json',
      success: function(data){
        let rows = '';
        $.each(data, function(i, item){
          rows += `<tr><td><strong>${item.day}</strong></td><td>${item.time}</td><td>${item.program}</td><td>${item.age}</td><td><span class="pill">${item.spots} spots</span></td></tr>`;
        });
        $('#scheduleBody').html(rows);
        $('#scheduleStatus').removeClass('alert-light').addClass('alert-success').text('Schedule loaded successfully.');
      },
      error: function(){
        $('#scheduleStatus').removeClass('alert-light').addClass('alert-danger').text('Unable to load the schedule. Please try again.');
      }
    });
  }
});