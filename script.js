// Global Variable Declaration
const beginButton = $('.begin');


$(document).ready(function(){
    
// Username Creation and Beginning of Quiz
    beginButton.on('click', function(){
        
        const userName = $('#waveName');
        
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
        $('li').show();
    
    });
    // DONE

    // Show Question

    const resultArray = [];
    const selection = $('input[type=radio]').val();
    // Find a way to access this value 
    const vapor = $('input[value=vapor]');
    const grunge = $('input[value=grunge]');
    const pastel = $('input[value=pastel]');

    // Click Answer
    selection.on('click', function(){
        console.log('clicked');
    });












    
});
// Document Ready Scope


