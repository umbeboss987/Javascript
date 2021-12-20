import setStyle from './utils/utils.js'

class Form {
    constructor(){
       return this.createForm();
    }

    createForm(){
        let form = document.createElement('form');
        let form_name = document.createElement('input');
        let form_surname = document.createElement('input');
        setStyle(form,{
            position: 'absolute',
            heigth: '500px',
            width: '300px',
        })

        setStyle(form_name,{
            width: '250px',
            heigth: '40px',
        })

        setStyle(form_surname,{
            width: '250px',
            heigth: '40px',
        })

        form.appendChild(form_name);
        form.appendChild(form_surname);

        return form;
    }

}

export default Form;