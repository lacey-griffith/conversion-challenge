
ouibounce($('#ouibounce-modal')[0]);

$('body').on('click', function() {
$('#ouibounce-modal').hide();
window.open('https://github.com/lacey-griffith', '_blank')
});


function findCity(){
    fetch(`https://conversionfanatics.com/cf-test-task/geo-api/`)
    .then(res => {
        return res.json();
    }).then(data => {
        const city = data.city.toUpperCase();
        generateModal(city);
    })
    .catch(err => res.status(500).json(err))
}

function generateModal(city){
    $('#ouibounce-modal').append(`
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title"> WAIT! A SPECIAL OFFER FOR <span class='city'>${city}</span> RESIDENTS...</h6>
        </div>
        <div class="modal-body text-center">
          <h2 class="modal-body-content">Claim your instant discount before the timer runs out!</h2>
        </div>
        <div class='clock'></div>
        <script>
        var clock = $('.clock').FlipClock(3600, {
          clockFace: 'HourlyCounter',
          countdown: true
      });
        </script>
        <div class="modal-footer justify-content-center">
          <button type="button" class="btn btn-danger btn-lg" id="claim-discount">ClAIM DISCOUNT</button>
        </div>
      </div>
    </div>
    `)
}


window.addEventListener("load", findCity());