// Main Array
const quizQuestions = [
    {
        question: "Had to do it on 'em. Pick a pair of Vans.",
        choices: [
            "./quizAssets/v-shoe.jpg",
            "./quizAssets/b-shoe.jpg", 
            "./quizAssets/g-shoe.jpg", 
            "./quizAssets/p-shoe.jpg"],
        categories: ["vapor", "baddie", "grunge", "pastel"]
    },
    {
        question: "Congrats, you just signed a record deal! Pick your album cover design.",
        choices: [
            "./quizAssets/p-album.jpg", 
            "./quizAssets/v-album.jpg",
            "./quizAssets/b-album.jpg", 
            "./quizAssets/g-album.jpg"],
        categories: ["pastel", "vapor", "baddie", "grunge"]
    },
    {
        question: "You just turned 25. You're having a quarter-life crisis and MUST repaint your room. Pick a colour palette.",
        choices: [
            "./quizAssets/g-palette.png", 
            "./quizAssets/p-palette.png", 
            "./quizAssets/v-palette.jpg",
            "./quizAssets/b-palette.png"
        ],
        categories: ["grunge", "pastel", "vapor", "baddie"]

    },
    {
        question: "Fill in the blank. I wish I could go back to the ___: ",
        choices: [
            "./quizAssets/b-year.jpg",
            "./quizAssets/v-year.png", 
            "./quizAssets/g-year.png", 
            "./quizAssets/p-year.jpg"],
        categories: ["baddie", "vapor", "grunge", "pastel"]

    },
    {
        question: "Time to get away. Pick a destination.",
        choices: [
            "./quizAssets/b-vacation.jpg",
            "./quizAssets/p-vacation.jpg", 
            "./quizAssets/v-vacation.jpg", 
            "./quizAssets/g-vacation.jpg"],
        categories: ["baddie", "pastel", "vapor", "grunge"]

    }];

// Global Variable Declaration
let currentQuestion = 0;
const aestheticScore = [];


// Print all the questions to the page, Start quiz
    function printQuestion() {
        const askQuestion = quizQuestions[currentQuestion].question;
        $('.result').hide();
        $('h2').html('Question ' + parseInt(currentQuestion + 1) + ": " + askQuestion);
            

    
        const options = quizQuestions[currentQuestion].choices;
        const wave = quizQuestions[currentQuestion].categories;


// Print the selections to each radio button
        let formHtml = '';

        for (let i = 0; i < options.length; i++) {
            formHtml += `
            <div class="option-container">

                <input type="radio" name="option" value="${wave[i]}" id="${i}">

                    <label for='${i}' tabindex="0">

                        <img src='${options[i]}'>

                    </label>

                </input>

            </div>`;

            $('.questionBox').html(formHtml);
        }

    };


//Grab the value of the question and do something
    function grabAestheticValue() {
        const selectedValue = $('input[type=radio]:checked').val();

        if (selectedValue === 'grunge') {            
            aestheticScore.push(selectedValue);

        } else if (selectedValue === 'vapor') {
            aestheticScore.push(selectedValue);

        } else if (selectedValue === 'pastel'){
            aestheticScore.push(selectedValue);
        } 
    
        
    };



$(document).ready(function(){

// Beginning of Quiz
    $('#startWave').on('click', function(){
   
        $('.question').show();
        $('footer').hide();

    });

    
    printQuestion();

// Proceed to the next question in the array, if we hit the last question go to results, if not display the next question
// Bounce an alert if there wasn't an option checked 
    
    const nextButton = $('.next');


// Next Question in Array
    nextButton.on('click', function(e){
        e.preventDefault();
        grabAestheticValue();
       
        currentQuestion++;

        


        // in order to move to the next question, we have to make sure we're still within the array.length
        if (currentQuestion < quizQuestions.length){
            // keep going
            printQuestion();
            
        } 

// On the last question we want that click to trigger the result 
        if (currentQuestion == quizQuestions.length - 1){
            
            nextButton.on('click', function(e){
                e.preventDefault();
                
                let vaporScore = [];
                let grungeScore = [];
                let pastelScore = [];
                let baddieScore = [];

                for(let i = 0; i <= aestheticScore.length; i++){
                    const tallyScore = aestheticScore[i];

                    if (tallyScore === 'vapor'){
                        vaporScore.push(tallyScore);
                            
                    } else if (tallyScore === 'grunge'){
                        grungeScore.push(tallyScore);
                        
                    } else if (tallyScore === 'pastel'){
                        pastelScore.push(tallyScore);
                    } else if (tallyScore === 'baddie'){
                        baddieScore.push(tallyScore);
                    }
                }

// Compare Arrays
                const vaporLength = vaporScore.length;
                const grungeLength = grungeScore.length;
                const pastelLength = pastelScore.length;
                const baddieLength = baddieScore.length;
                
                
                if(vaporLength > grungeLength && vaporLength > pastelLength && vaporLength > baddieLength){
                    let HtmlToAppend = `
                    <h3 class='aesthetic glitch' tabindex="0">VaporWave</h3>
                    `
                    $('.result').html(HtmlToAppend);
                    $('.result').addClass('aestheticV');
                } else if (grungeLength > vaporLength && grungeLength > pastelLength && grungeLength > baddieLength){
                    let HtmlToAppend = `
                    <h3 class='aesthetic glitch' tabindex="0">Grunge</dh3>
                    `
                    $('.result').addClass('aestheticG');
                    $('.result').html(HtmlToAppend);
                } else if (pastelLength > vaporLength && pastelLength > grungeLength && pastelLength > baddieLength){
                    let HtmlToAppend = `
                    <h3 class='aesthetic glitch' tabindex="0">Pastel</h3>
                    `
                    $('.result').addClass('aestheticP');
                    $('.result').html(HtmlToAppend);
                } else {
                    let HtmlToAppend = `
                    <h3 class='aesthetic glitch' tabindex="0">Baddie</h3>
                    `
                    $('.result').addClass('aestheticB');
                    $('.result').html(HtmlToAppend);
                }
                            
                        
                $('.question').hide();
                $('header').hide();
                $('.result').show();
                $('.footer').show();
                
            });
        };
    });


});
// Document Ready Scope