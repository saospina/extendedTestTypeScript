import { GlobalActivities } from '../pages/globalActivities';
import { LoginPage } from '../pages/loginPage';
import { BooksPage } from '../pages/booksPage';
import * as fs from 'fs';

const links = JSON.parse(fs.readFileSync('./data/links.json','utf8'));
const users = JSON.parse(fs.readFileSync('./data/users.json','utf8'));

let globalActivities = new GlobalActivities();
let loginPage = new LoginPage();
let booksPage = new BooksPage();

describe('Add books in the shopping cart', async() => {

    beforeAll( async() => {
        await globalActivities.navigateToThePage(links.login);
        await loginPage.sendFormLogin(users.right.username, users.right.password);
    });

    it('Add books', async() => {
        await booksPage.addBooks(2, "Core Java");
        await booksPage.addBooks(5, "Ruby for Rails");
        await booksPage.addBooks(2, "Python Cookbook");
        expect(await booksPage.getGrandTotal()).toEqual(await booksPage.calculateGrandTotal());
    });

});