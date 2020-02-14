// Main Array
const quizQuestions = [
    {
        question: "Had to do it on 'em. Pick a pair of Vans.",
        choices: [
            "./quizAssets/v-shoe.jpg", 
            "./quizAssets/g-shoe.jpg", 
            "./quizAssets/p-shoe.jpg"],
        categories: ["vapor", "grunge", "pastel"]
    },
    {
        question: "Congrats, you just signed a record deal! Pick your album cover design.",
        choices: [
            "./quizAssets/p-album.jpg", 
            "./quizAssets/v-album.jpg", 
            "./quizAssets/g-album.jpg"],
        categories: ["pastel", "vapor", "grunge"]
    },
    {
        question: "You just turned 25. You're having a quarter-life crisis and MUST repaint your room. Pick a colour palette.",
        choices: [
            "./quizAssets/g-palette.png", 
            "./quizAssets/p-palette.png", 
            "./quizAssets/v-palette.jpg"],
        categories: ["grunge", "pastel", "vapor"]

    },
    {
        question: "Fill in the blank. I wish I could go back to the: ",
        choices: [
            "./quizAssets/v-year.png", 
            "./quizAssets/g-year.png", 
            "./quizAssets/p-year.jpg"],
        categories: ["vapor", "grunge", "pastel"]

    },
    {
        question: "Time to get away. Pick a destination.",
        choices: [
            "./quizAssets/p-vacation.jpg", 
            "./quizAssets/v-vacation.jpg", 
            "./quizAssets/g-vacation.jpg"],
        categories: ["pastel", "vapor", "grunge"]

    }];

// Global Variable Declaration
let currentQuestion = 0;
const aestheticScore = [];




// Print all the questions to the page, Start quiz
    function printQuestion() {
        const askQuestion = quizQuestions[currentQuestion].question;

            $('h2').html('Question ' + parseInt(currentQuestion + 1) + ": " + askQuestion);
            

    
        const options = quizQuestions[currentQuestion].choices;
        const wave = quizQuestions[currentQuestion].categories;


            let formHtml = '';


            // print the selections to each radio button
            for (let i = 0; i < options.length; i++) {
                formHtml += `
                <input type='radio' name='option' value='${wave[i]}' id='${i}'>
                <label for='${i}'>
                    <img src='${options[i]}'>
                </label></<input>`;

                $('.questionBox').html(formHtml);
            }

    };


//Grab the value of the question and do something
    function grabAestheticValue() {
        // const checked = $('input[type=radio]:checked');
        const selectedValue = $('input[type=radio]:checked').val();
        console.log(selectedValue);

        if (selectedValue === 'grunge') {
            aestheticScore.push(selectedValue);

        } else if (selectedValue === 'vapor') {
            aestheticScore.push(selectedValue);

        } else if (selectedValue === 'pastel'){
            aestheticScore.push(selectedValue);
        }
        console.log(aestheticScore);
        

    };

$(document).ready(function(){

//Username Creation and Beginning of Quiz
    $('#startWave').on('click', function(e){
        e.preventDefault();
        const userName = $('#waveName');
        
        // make this a local variable since I only need it here
        let waveName = userName.val();
        
        if (waveName === ''){
            alert('Please enter a ~ wavename ~ to start the quiz.');

        } else {
            $('.letsGo').html(`<p>surf's up, ${waveName}.</p>`);
            console.log(waveName);
        }

        $('.question').show()
        userName.val('');

    });

    
    printQuestion();

// Proceed to the next question in the array, if we hit the last question go to results, if not display the next question
//Bounce an alert if there wasn't an option checked 
    
    const nextButton = $('.next');

// Next Question in Array
    nextButton.on('click', function(){
        grabAestheticValue();
        currentQuestion++;


        // in order to move to the next question, we have to make sure we're still within the array.length
        if (currentQuestion < quizQuestions.length){
            // keep going
            printQuestion();
            
        } 
        if (currentQuestion == quizQuestions.length - 1){
            // on the last question we want that click to trigger the result div
            
            nextButton.on('click', function(){
                
            let vaporScore = [];
            let grungeScore = [];
            let pastelScore = [];

            for(let i = 0; i <= aestheticScore.length; i++){
                const tallyScore = aestheticScore[i];

                if (tallyScore === 'vapor'){
                    vaporScore.push(tallyScore);
                        
                } else if (tallyScore === 'grunge'){
                    grungeScore.push(tallyScore);
                    
                } else if (tallyScore === 'pastel'){
                    pastelScore.push(tallyScore);
                }
            }

            // Compare Arrays
            const vaporLength = vaporScore.length;
            const grungeLength = grungeScore.length;
            const pastelLength = pastelScore.length;
            
            console.log(vaporLength);
            console.log(grungeLength);
            console.log(pastelLength);
            
                if(vaporLength > grungeLength && vaporLength > pastelLength){
                    let HtmlToAppend = `
                    <h3>YOU ARE</h3>
                    <span class='aesthetic aestheticV'>VaporWave</div>
                    `
                    $('.result').html(HtmlToAppend);
                } else if (grungeLength > vaporLength && grungeLength > pastelLength){
                    let HtmlToAppend = `
                    <h3>YOU ARE</h3>
                    <span class='aesthetic aestheticG'>Grunge</div>
                    `
                    $('.result').html(HtmlToAppend);
                } else {
                    let HtmlToAppend = `
                    <h3>YOU ARE</h3>
                    <span class='aesthetic aestheticP'>Pastel</div>
                    `
                    $('.result').html(HtmlToAppend);
                }
                    
                
                    $('.question').hide();
                    $('header').hide();
                    $('.result').show().fadeIn();
                



            
            
     
                //After showing result on click of last button, clear quiz, aesthetic array and start again
            });
        };
    });














    
});
// Document Ready Scope


// New options in case of double answers
// pastel goth = pastel + grunge
// Pastel + vaporwave = seapunk
// vaporwave + grunge = ocean grunge

// Tech win was fine tuning scoring else/if bc of extra result
// Comparing arrays and making dynamic elements 



