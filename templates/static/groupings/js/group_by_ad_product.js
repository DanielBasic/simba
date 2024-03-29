// filtros do datatable gerenciar agrupamento
$(document).ready(function(){
    $("#produtos-table").DataTable();
  });


//Alerta com JS Fecha quando clica no botão
$(document).ready(function () {
    $(".btn-close").on("click", function () {
      $(this).closest(".alert").hide();
    });
  });


document.addEventListener("DOMContentLoaded", function() {
var alertElement = document.getElementById("myAlert");
if (alertElement) {
    setTimeout(function(){
    alertElement.remove();
    }, 5000);
}
});


document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[id^="excluir-anuncio-"]');

    buttons.forEach(function (button) {
      button.addEventListener('click', function (event) {
        event.preventDefault();

        const groupId = button.id.replace('excluir-anuncio-', '');
        const title = button.title;

        const confirmation = confirm('Você tem certeza de que deseja excluir esse produto? Você perderá todos os dados armazenados');

        if (confirmation) {
          // Se o usuário confirmar, envie o formulário
          document.getElementById('formulario-exclusao-' + groupId).submit();
        }
      });
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    const tracking_infos = JSON.parse(document.getElementById('tracking_infos').textContent);
    var arrows_price = document.querySelectorAll('#arrow_price');
    var arrows_health = document.querySelectorAll('#arrow_health');
    function updateArrowsAndPercentages(arrowElements) {
        var threshold = 0;
        arrowElements.forEach(function(arrowElement) {
            var group_id = parseInt(arrowElement.getAttribute('group_id'));
            var product_id = arrowElement.getAttribute('product_id');
            var id;
            if (!isNaN(group_id)){
                id = group_id;
            }else {
                id = product_id;
            }
            console.log(id);

            var value_id_arrow = arrowElement.id;
            
            var variation_percentage ;

            if (value_id_arrow == 'arrow_price') {
                variation_percentage = 'price_variation_percentage';
            } else {
                if (value_id_arrow == 'arrow_health'){
                    variation_percentage = 'health_variation_percentage'
                }
            }

            var value_percentage = tracking_infos[id][variation_percentage];

            arrowElement.innerHTML = '';

            if (value_percentage !== 0) {
                var arrowClass = value_percentage >= threshold ? 'green' : 'red';


                arrowElement.style.backgroundColor = arrowClass;
                
            }

            var percentageCircle = document.createElement('div');
            percentageCircle.className = 'percentage-circle';
            percentageCircle.innerText = value_percentage + '%';
            var arrowIcon = document.createElement('i');
            value_percentage >= threshold ? arrowIcon.className = 'icono fas fa-sort-up': arrowIcon.className = 'icono fas fa-sort-down';
            percentageCircle.appendChild(arrowIcon);

            // Append the percentage circle to the container
            arrowElement.appendChild(percentageCircle);
        });
    }
    updateArrowsAndPercentages(arrows_price);
    updateArrowsAndPercentages(arrows_health);
});


function showLineCharComparation(url, ctx_id) {

  fetch(url, {
      method: 'get',
  }).then(function(result){
      return result.json()
  }).then(function(data){
  
  console.log('dict', data)

  const ctx = document.getElementById(ctx_id).getContext('2d');
  const myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: data['actual_dates'],
          datasets: [
              {
                  label: data['actual_dates'],
                  data: data['actual_data'],
                  backgroundColor: "#CB1EA8",
                  borderColor: "#FFFFFF",
                  borderWidth: 0.2,
                  lineTension: 0.3,
                  pointBorderColor: 'transparent',
                  borderJoinStyle: 'round',
              },
              {
                  label: data['old_dates'],
                  data: data['old_data'],
                  backgroundColor: "#1E90FF",
                  borderColor: "#FFFFFF",
                  borderWidth: 0.2,
                  lineTension: 0.3,
                  pointBorderColor: 'transparent',
                  borderJoinStyle: 'round',
              }
          ]
      },
  });
});
}

