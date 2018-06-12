import fieldFactory from './fieldFactory'
import { Form } from './form'

let form:Form = new Form();

form.locale = "eu";

let factory:fieldFactory = new fieldFactory();

form.fields.push(factory.createField('phone'));
form.fields.push(factory.createField('country'));
form.fields.push(factory.createField('text'));

let fieldsArray:Array<string> = ['phone', 'text', 'country'];


fieldsArray.forEach(element => {
    form.fields.push(factory.createField(element)); 

});

element => {
    form.fields.push(factory.createField(element));

}