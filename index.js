let screen = document.getElementById("screen")
buttons = document.querySelectorAll( 'button')
let ScreenValue ='';

for (item of buttons)
{
    item.addEventListener('click', (e) => {
        buttonText= e.target.innerText;
        console.log('Button is',buttonText)
        if (buttonText == 'X' ){
            buttonText = '*' ;
            ScreenValue += buttonText;
            screen.value = ScreenValue;
        }
        
        else if ( buttonText == 'Clr'){
            ScreenValue = ' ';
            screen.value = ScreenValue;
        }
        
        else if (buttonText == 'Del'){
            ScreenValue = ScreenValue.slice(0, -1);
            screen.value = ScreenValue; 
        }

        else if (buttonText == '='){
            screen.value = eval(ScreenValue);
        }

        else{
            ScreenValue += buttonText;
            screen.value= ScreenValue;
        }

    
    })
}