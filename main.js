const kontener = $('<div id="dane-programisty"></div>');
const listaCech = $(`<ul id="lista-danych"></ul>`);
const jednaZCech = $(`<li></li>`);

$( document ).ready(function() {
    $('#btn').on('click', function(event) {
     $.ajax({
        url: 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php',
        dataType: 'json',
        statusCode: {
            200: function() {
                console.log(`komunikat 200`);
            }
        },
            success: function(data) {
                console.log(`success`);
                let imie = `Imię: ` + `${data.imie}` + `<br>`;
                let nazwisko = `Nazwisko: ` + `${data.nazwisko}`+ `<br>`;
                let zawod = `Zawód: ` + `${data.zawod}`+ `<br>`;
                let firma = `Firma: ` + `${data.firma}`+ `<br>`;
                $('#btn').after(kontener);
                $(`#dane-programisty`).append(listaCech);
                $(`#lista-danych`).append(imie, nazwisko, zawod, firma);      
        },
            error: function(error) {
                console.error(error);
            }
     })
        if (listaCech.length > 0) {
            $('#btn').off('click');
        }
    }  
)}
)

    


