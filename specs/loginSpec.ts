import { GlobalActivities } from '../pages/globalActivities';
import { LoginPage } from '../pages/loginPage';
import * as fs from 'fs';

const links = JSON.parse(fs.readFileSync('./data/links.json','utf8'));
const users = JSON.parse(fs.readFileSync('./data/users.json','utf8'));

let globalActivities = new GlobalActivities();
let loginPage = new LoginPage();

describe('Login on the website', async() => {
    
    beforeAll( async() => {
        await globalActivities.navigateToThePage(links.login);
    });

    it('Send form with none information', async() => {
        await loginPage.sendFormLogin('', '');
        expect(await loginPage.getMessageError()).toEqual('Invalid username or password');
    });

    it('Enter wrong username and password', async() => {
        await loginPage.sendFormLogin(users.wrong.username, users.wrong.password);
        expect(await loginPage.getMessageError()).toEqual('Invalid username or password');
    });

    it('Enter right username and password', async() => {
        await loginPage.clearFormLogin();
        await loginPage.sendFormLogin(users.right.username, users.right.password);
        expect(await globalActivities.getTitlePage()).toEqual('Books');
    });

});