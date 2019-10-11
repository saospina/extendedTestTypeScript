"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const globalActivities_1 = require("../pages/globalActivities");
const loginPage_1 = require("../pages/loginPage");
const booksPage_1 = require("../pages/booksPage");
const fs = require("fs");
const links = JSON.parse(fs.readFileSync('./data/links.json', 'utf8'));
const users = JSON.parse(fs.readFileSync('./data/users.json', 'utf8'));
let globalActivities = new globalActivities_1.GlobalActivities();
let loginPage = new loginPage_1.LoginPage();
let booksPage = new booksPage_1.BooksPage();
describe('Add books in the shopping cart', () => __awaiter(this, void 0, void 0, function* () {
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        yield globalActivities.navigateToThePage(links.login);
        yield loginPage.sendFormLogin(users.right.username, users.right.password);
    }));
    it('Add books', () => __awaiter(this, void 0, void 0, function* () {
        yield booksPage.addBooks(2, "Core Java");
        yield booksPage.addBooks(5, "Ruby for Rails");
        yield booksPage.addBooks(2, "Python Cookbook");
        expect(yield booksPage.getGrandTotal()).toEqual(yield booksPage.calculateGrandTotal());
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va3NTcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3BlY3MvYm9va3NTcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxnRUFBNkQ7QUFDN0Qsa0RBQStDO0FBQy9DLGtEQUErQztBQUMvQyx5QkFBeUI7QUFFekIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDdEUsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFFdEUsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLG1DQUFnQixFQUFFLENBQUM7QUFDOUMsSUFBSSxTQUFTLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7QUFDaEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7QUFFaEMsUUFBUSxDQUFDLGdDQUFnQyxFQUFFLEdBQVEsRUFBRTtJQUVqRCxTQUFTLENBQUUsR0FBUSxFQUFFO1FBQ2pCLE1BQU0sZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RELE1BQU0sU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlFLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsV0FBVyxFQUFFLEdBQVEsRUFBRTtRQUN0QixNQUFNLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUM5QyxNQUFNLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDL0MsTUFBTSxDQUFDLE1BQU0sU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sU0FBUyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQztJQUMzRixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9