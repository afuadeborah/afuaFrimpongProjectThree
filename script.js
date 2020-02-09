// Global Variable Declaration
const beginButton = $('.begin');


$(document).ready(function(){
// We want the user to input a username which is stored and to be used on the result page

    beginButton.on('click', function beginWave(){
        
        let waveName = $('input').val();
        
        if (waveName === ''){
                alert('Please fill in a ~ wavename ~ to start the quiz.');
                
        } else {
            $('.letsGo').html( `<p>let's r i d e, ${waveName}.</p>`);
            console.log(waveName);
        }
            $('input').val('');
    });

// DONE
// On click of the 'Let's Begin' button, we want the quiz to start and the first question to appear


    // function beginWave(){};
    
    // function nextQuestion(){};
    
    // function clickSelection(){};











});
// Document Ready Scope

