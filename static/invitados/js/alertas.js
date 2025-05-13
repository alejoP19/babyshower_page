
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
const csrftoken = getCookie("csrftoken");

if (document.querySelector("#datos")) {
  let formulario = document.querySelector("#datos");

  formulario.onsubmit = function (e) {
    e.preventDefault();
    fntGuardar();
  };

  async function fntGuardar() {
    let namesField = document.querySelector("#names_guest").value;
    let last_nameField = document.querySelector("#last_name_guest").value;
    let quantityField = document.querySelector("#quantity_guest").value;

    try {
      if (namesField == "" || last_nameField == "" || quantityField == "") {
        Swal.fire(
          "All fields are required",
          "Please fill in all fields",
          "error"
        );
      } else {
        const data = new FormData(formulario);
       
        let resp = fetch("/assistance/", {
          method: "POST",
          body: data,
          headers: {
            "X-CSRF-TOKEN": getCookie("csrftoken"),
            "x-requested-with": "XMLHttpRequest",

          },
          // mode: 'cors',
          // cache: 'no-cache',
        });

        return new Promise((resp) => {
          Swal.fire({
            title: "¡Hello!?",
            text: " Do you want to confirm your attendance?",
            icon: "question",
          }).then((resp) => {
           
              
            if (resp.isConfirmed) {
               
        
                Swal.fire({
                  // background:' URL(/static/invitados/img/lets_share.jpg', 
                  background:'rgb(234, 224, 255)',
                  width:'370px',
                  padding:'1% 1%',
                  title: '<b style="color:rgb(255, 59, 173); font-size:30px; top:0">¡nice!</b>',
                  html: '<b style="color:rgb(1, 255, 170);  text-shadow:-1px 1px 1px rgb(0, 0, 0)">¡Correctly Recorded Assistance!</b>',
                  // imageUrl: 'https://m.media-amazon.com/images/I/712wB01pHsL._AC_SL1001_.jpg',
                  imageUrl: '/static/invitados/img/lets_share.jpg',
                  imageWidth: "90%",
                  imageHeight: "80%",
                  showConfirmButton: true,
                //   timer: 4000,
                });
              }if(resp){
                window.location.href = "/";
              }
            })
          });
        }
     
    } catch (err) {
      alert("ocurrió un error: " + err);
    }
  }
}
// .then(
//           function (response) {
//             console.log(response);
//              if (response.status == 200) {
//              var a =  window.location.href = "/";
//              return a
//             }

//           }
//         )
    