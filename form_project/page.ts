import { Header } from "./header";
import { Footer } from "./footer";
import { Content } from "./content";
import { Form } from "./form";

export class Page{
    header:Header;
    footer:Footer
    content:Content
    form:Form
    locale:string

    setLocale(locale:string){
        this.locale = locale;
    }

    getLocale():string{
        return this.locale;
    }
}