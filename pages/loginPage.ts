import { element, by, ElementFinder } from 'protractor';
import { GlobalActivities } from '../pages/GlobalActivities';

let globalActivities = new GlobalActivities();

export class LoginPage {
    
    usernameTextInput: ElementFinder = element(by.name('user'));
    passwordTextInput: ElementFinder = element(by.name('password'));
    loginButton: ElementFinder = element(by.css('input[onclick="login()"]'));
    messageError: ElementFinder = element(by.id('errorMessage'));

    public async sendFormLogin(username: string, password: string) {
        await this.usernameTextInput.sendKeys(username);
        await this.passwordTextInput.sendKeys(password);
        await this.loginButton.click();
    }

    public async clearFormLogin() {
        await this.usernameTextInput.clear();
        await this.passwordTextInput.clear();
    }

    public async getMessageError(): Promise<string> {
        return await this.messageError.getText();
    }

}