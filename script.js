// Global Variable Declaration
const beginButton = $('.begin');


$(document).ready(function(){
// We want the user to input a username which is stored and to be used on the result page





// On click of the 'Let's Begin' button, we want the quiz to start and the first question to appear
    beginButton.on('click', function beginWave(){
        
        let waveName = $('input').val();
        
        if (waveName === ''){
                alert('Please fill in a ~ wavename ~ to start the quiz.');
            } else {
                
                console.log(waveName);
            }
        });
        console.log('first question next');
// NO SMOOTHIES IN ANON CALBACK

    // function beginWave(){};
    
    // function nextQuestion(){};
    
    // function clickSelection(){};











});
// Document Ready Scope

