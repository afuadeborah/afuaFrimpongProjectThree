// Global Variable Declaration
const beginButton = $('.begin');





$(document).ready(function(){
    
// Username Creation and Beginning of Quiz
    beginButton.on('click', function beginWave(){
        
        const userName = $('input');
        // make this a local variable since I only need it here
        let waveName = userName.val();
        
        if (waveName === ''){
            alert('Please fill in a ~ wavename ~ to start the quiz.');

        } else {
            $('.letsGo').html( `<p>let's r i d e, ${waveName}.</p>`);
            console.log(waveName);
        }

        userName.val('');
        $('.question').show()
        $('question').slideDown('slow');
        $('li').show();
    
    });
    // DONE

    
    const selection = $("input[type='radio']");
    
    selection.on('click', function() {
        const vapor = $('input[value="vapor"]');
        
        console.log('I been clicked');
        // use this keyword to allow user to click any option then use if else statement to score
        

        
            
        
            
        });











});
// Document Ready Scope


