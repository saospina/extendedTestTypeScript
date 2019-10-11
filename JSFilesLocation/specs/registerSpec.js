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
const registerPage_1 = require("../pages/registerPage");
const fs = require("fs");
const links = JSON.parse(fs.readFileSync('./data/links.json', 'utf8'));
const userInfo = JSON.parse(fs.readFileSync('./data/userInfo.json', 'utf8'));
let globalActivities = new globalActivities_1.GlobalActivities();
let registerPage = new registerPage_1.RegisterPage();
describe('Register the user information', () => __awaiter(this, void 0, void 0, function* () {
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        yield globalActivities.navigateToThePage(links.register);
    }));
    it('Send all the user information', () => __awaiter(this, void 0, void 0, function* () {
        yield registerPage.sendFormRegister(userInfo.username, userInfo.password, userInfo.password2, userInfo.gender, userInfo.address, userInfo.billingAddress, userInfo.state, userInfo.termsAndCondition);
        expect(yield registerPage.getMessageAlert()).toEqual('Registered Successfully');
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJTcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3BlY3MvcmVnaXN0ZXJTcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxnRUFBNkQ7QUFDN0Qsd0RBQXFEO0FBQ3JELHlCQUF5QjtBQUV6QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsbUJBQW1CLEVBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUN0RSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsc0JBQXNCLEVBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUU1RSxJQUFJLGdCQUFnQixHQUFHLElBQUksbUNBQWdCLEVBQUUsQ0FBQztBQUM5QyxJQUFJLFlBQVksR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQztBQUV0QyxRQUFRLENBQUMsK0JBQStCLEVBQUUsR0FBUSxFQUFFO0lBRWhELFNBQVMsQ0FBRSxHQUFRLEVBQUU7UUFDakIsTUFBTSxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0QsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywrQkFBK0IsRUFBRSxHQUFRLEVBQUU7UUFDMUMsTUFBTSxZQUFZLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN0TSxNQUFNLENBQUMsTUFBTSxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUNwRixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9