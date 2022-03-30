import setStyle from '../utils/utils.js'

class Form {
    constructor(){
    }

    createForm(){
        const form = document.createElement('div');
        const form_name = document.createElement('input');
        const form_surname = document.createElement('input');
        const form_title = document.createElement('h3');
        const form_button = document.createElement('button');

        setStyle(form,{
            position: 'absolute',
            height: '400px',
            width: '25%',
            backgroundColor : 'white',
            display: 'flex',
            flexWrap : 'wrap',
            flexDirection: 'column',
            justifyContent : 'center',
            alignItems : 'center',
            borderRadius : '10px',
        })

        setStyle(form_name,{
            width: '250px',
            height: '30px',
            borderRadius : '20px',
        })

        setStyle(form_surname,{
            width: '250px',
            height: '30px',
            marginTop : '30px',
            borderRadius : '20px',
            justifyContent : 'center',

        })

        setStyle(form_title,{
            fontFamily: 'Helvetica',
            marginBottom: '80px',
        })

        setStyle(form_button,{
            marginTop: '30px',
            width: '100px',
            height: '25px',
            backgroundColor: '#2196f3',
            borderRadius : '10px',
            color : 'white',
            cursor : 'pointer',
            border: 'none',
            type : 'button'

        })

        form_title.innerHTML = 'Memory Card Game';
        form_button.innerHTML = 'Submit'
        form.appendChild(form_title);
        form.appendChild(form_name);
        form.appendChild(form_surname);
        form.appendChild(form_button);
        return form;
    }

}

export default Form;