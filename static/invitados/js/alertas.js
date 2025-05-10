function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
const csrftoken = getCookie('csrftoken');

if (document.querySelector("#datos")) {
            let formulario = document.querySelector("#datos");
          
            formulario.onsubmit = function(e) {
                e.preventDefault();
                fntGuardar();
            }

            async function fntGuardar() {

                let namesField = document.querySelector('#names_guest').value;
                let last_nameField = document.querySelector('#last_name_guest').value;
                let quantityField = document.querySelector('#quantity_guest').value;
             
                try {
                    if (namesField == "" || last_nameField == "" || quantityField == "") {

                        Swal.fire(
                            'Todos los campos del formulario son obligarorios',
                            'Intentar De nuevo',
                            'error'
                        )
                    } else {

                        const data = new FormData(formulario);
                                    // for (const element of data) {
                                    //   alert(element); 
                                      
                                    // }

                        let resp = fetch("/assistance/", {
                            method: 'POST',
                            body: data,
                            headers: {
                          
                                'X-CSRF-TOKEN':getCookie('csrftoken'),
                            },
                            // mode: 'cors',
                            // cache: 'no-cache',
          
                        })

                        return new Promise(resp => {
                            Swal.fire({
                                background: '#000000',
                                title: '<b style="color:#03FFFF">Bienvenido!</b>',
                                html: '<b style="color:#2ECC71">¡Ahora podrás iniciar sesión, haz click en OK!</b>',
                                imageUrl: 'https://mundoentrenamiento.com/wp-content/uploads/2021/01/big-data-en-el-futbol-moderno.jpg',
                                imageWidth: '70%',
                                imageHeight: '60%',
                                imageAlt: 'Custom image',
                                // width: '70%',
                            }).then((resp) => {
                                if (resp.isConfirmed) {

                                  Swal.fire({
                                background: '#000000',
                                title: '<b style="color:#03FFFF">Bienvenido!</b>',
                                html: '<b style="color:#2ECC71">¡Ahora podrás iniciar sesión, haz click en OK!</b>',
                                imageUrl: 'https://mundoentrenamiento.com/wp-content/uploads/2021/01/big-data-en-el-futbol-moderno.jpg',
                                imageWidth: '70%',
                                imageHeight: '60%',
                                imageAlt: 'Custom image',
                                // width: '70%',
                            })
                              
                                   
                                }
                            });

                        });
                    }
                } catch (err) {
                    alert("ocurrió un error: " + err);

                }
            }
        }


