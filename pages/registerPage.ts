import { element, by, ElementFinder, $, browser } from 'protractor';
import { GlobalActivities } from '../pages/GlobalActivities';

let globalActivities = new GlobalActivities();

export class RegisterPage {

    usernameTextInput: ElementFinder = element(by.name('username'));
    passwordTextInput: ElementFinder = element(by.name('password'));
    password2TextInput: ElementFinder = element(by.name('password2'));
    maleRadioButton: ElementFinder = element(by.css('input[value="M"]'));
    femaleRadioButton: ElementFinder = element(by.css('input[value="F"]'));
    addressTextInput: ElementFinder = element(by.name('address'));
    billingAddressTextInput: ElementFinder = element(by.name('billaddress'));
    stateSelectInput: ElementFinder = $('[name="state"]');
    termsAndConditionsCheckBox: ElementFinder = element(by.name('agree'));
    registerButton: ElementFinder = element(by.css('input[value="Register"]'));
    
    public async sendFormRegister(username: string, password: string, password2: string, gender: string, address: string, billingAddress: string, state: string, TermsAndCondition: boolean) {
        await this.usernameTextInput.sendKeys(username);
        await this.passwordTextInput.sendKeys(password);
        await this.password2TextInput.sendKeys(password2);
        await this.chooseGender(gender);
        await this.addressTextInput.sendKeys(address);
        await this.billingAddressTextInput.sendKeys(billingAddress);
        await this.stateSelectInput.element(by.cssContainingText('option', state)).click();
        await this.markTermsAndCondition(TermsAndCondition);
        await this.registerButton.click();
    }

    public async chooseGender(gender: string) {
        switch (gender) {
            case 'male':
                await this.maleRadioButton.click();
                break;
            case 'female':
                await this.femaleRadioButton.click();
                break;
            default: 
                break;
        }
    }

    public async markTermsAndCondition(TermsAndCondition: boolean) {
        if (TermsAndCondition == true) {
            await this.termsAndConditionsCheckBox.click();
        }
    }

    public async getMessageAlert(): Promise<string> {
        return await browser.switchTo().alert().getText();
    }

}