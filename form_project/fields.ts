
export interface field{
        type:String;
        id:String;
        value:String;
        isValid():boolean;
    

}

export class EmailField implements field {
        type:String;
        id:String;
        value:String;
        isValid():boolean{
            return false
        };
        
        Length(){

        }
}

export class EmployeeField implements field {
        type:String;
        id:String;
        value:String;
        isValid():boolean{
                return false
        };


        employeeList:object;


}

export class TextField implements field {
        type:String;
        id:String;
        value:String;
        isValid():boolean{
                let regExp = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
                let phone = this.value.match(regExp);
                return Boolean(phone);

    };
        employeeList:object;

}


export class PhoneNumberField implements field {
        type:String;
        id:string;
        value:String;
        isValid(): boolean{
                let regExp = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
                let phone = this.value.match(regExp);
                return Boolean(phone);
    };
        


}

export class CountryField implements field {
        type: string;
        id: string;
        value: string;
        locale:string;
        countryList:object = {'uk':["uk","Ireland"], 'de':["Germany","Austria","Belguim","Luxemborg","Switzerland"]}
        
        isValid(): boolean{
                return false;
    };

      
}

export class UserName extends TextField{
        isValid(){
            return false;
    }


}