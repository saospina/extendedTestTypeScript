import { GlobalActivities } from '../pages/globalActivities';
import { RegisterPage } from '../pages/registerPage';
import * as fs from 'fs';

const links = JSON.parse(fs.readFileSync('./data/links.json','utf8'));
const userInfo = JSON.parse(fs.readFileSync('./data/userInfo.json','utf8'));

let globalActivities = new GlobalActivities();
let registerPage = new RegisterPage();

describe('Register the user information', async() => {

    beforeAll( async() => {
        await globalActivities.navigateToThePage(links.register);
    });

    it('Send all the user information', async() => {
        await registerPage.sendFormRegister(userInfo.username, userInfo.password, userInfo.password2, userInfo.gender, userInfo.address, userInfo.billingAddress, userInfo.state, userInfo.termsAndCondition);
        expect(await registerPage.getMessageAlert()).toEqual('Registered Successfully');
    });

});