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
const protractor_1 = require("protractor");
const GlobalActivities_1 = require("../pages/GlobalActivities");
let globalActivities = new GlobalActivities_1.GlobalActivities();
class RegisterPage {
    constructor() {
        this.usernameTextInput = protractor_1.element(protractor_1.by.name('username'));
        this.passwordTextInput = protractor_1.element(protractor_1.by.name('password'));
        this.password2TextInput = protractor_1.element(protractor_1.by.name('password2'));
        this.maleRadioButton = protractor_1.element(protractor_1.by.css('input[value="M"]'));
        this.femaleRadioButton = protractor_1.element(protractor_1.by.css('input[value="F"]'));
        this.addressTextInput = protractor_1.element(protractor_1.by.name('address'));
        this.billingAddressTextInput = protractor_1.element(protractor_1.by.name('billaddress'));
        this.stateSelectInput = protractor_1.$('[name="state"]');
        this.termsAndConditionsCheckBox = protractor_1.element(protractor_1.by.name('agree'));
        this.registerButton = protractor_1.element(protractor_1.by.css('input[value="Register"]'));
    }
    sendFormRegister(username, password, password2, gender, address, billingAddress, state, TermsAndCondition) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.usernameTextInput.sendKeys(username);
            yield this.passwordTextInput.sendKeys(password);
            yield this.password2TextInput.sendKeys(password2);
            yield this.chooseGender(gender);
            yield this.addressTextInput.sendKeys(address);
            yield this.billingAddressTextInput.sendKeys(billingAddress);
            yield this.stateSelectInput.element(protractor_1.by.cssContainingText('option', state)).click();
            yield this.markTermsAndCondition(TermsAndCondition);
            yield this.registerButton.click();
        });
    }
    chooseGender(gender) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (gender) {
                case 'male':
                    yield this.maleRadioButton.click();
                    break;
                case 'female':
                    yield this.femaleRadioButton.click();
                    break;
                default:
                    break;
            }
        });
    }
    markTermsAndCondition(TermsAndCondition) {
        return __awaiter(this, void 0, void 0, function* () {
            if (TermsAndCondition == true) {
                yield this.termsAndConditionsCheckBox.click();
            }
        });
    }
    getMessageAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.browser.switchTo().alert().getText();
        });
    }
}
exports.RegisterPage = RegisterPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvcmVnaXN0ZXJQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBb0U7QUFDcEUsZ0VBQTZEO0FBRTdELElBQUksZ0JBQWdCLEdBQUcsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO0FBRTlDLE1BQWEsWUFBWTtJQUF6QjtRQUVJLHNCQUFpQixHQUFrQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNoRSxzQkFBaUIsR0FBa0Isb0JBQU8sQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDaEUsdUJBQWtCLEdBQWtCLG9CQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLG9CQUFlLEdBQWtCLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFDckUsc0JBQWlCLEdBQWtCLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFDdkUscUJBQWdCLEdBQWtCLG9CQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQzlELDRCQUF1QixHQUFrQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUN6RSxxQkFBZ0IsR0FBa0IsY0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDdEQsK0JBQTBCLEdBQWtCLG9CQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLG1CQUFjLEdBQWtCLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7SUFxQy9FLENBQUM7SUFuQ2dCLGdCQUFnQixDQUFDLFFBQWdCLEVBQUUsUUFBZ0IsRUFBRSxTQUFpQixFQUFFLE1BQWMsRUFBRSxPQUFlLEVBQUUsY0FBc0IsRUFBRSxLQUFhLEVBQUUsaUJBQTBCOztZQUNuTCxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDaEQsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hELE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNsRCxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEMsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzlDLE1BQU0sSUFBSSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM1RCxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ25GLE1BQU0sSUFBSSxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDcEQsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RDLENBQUM7S0FBQTtJQUVZLFlBQVksQ0FBQyxNQUFjOztZQUNwQyxRQUFRLE1BQU0sRUFBRTtnQkFDWixLQUFLLE1BQU07b0JBQ1AsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUNuQyxNQUFNO2dCQUNWLEtBQUssUUFBUTtvQkFDVCxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDckMsTUFBTTtnQkFDVjtvQkFDSSxNQUFNO2FBQ2I7UUFDTCxDQUFDO0tBQUE7SUFFWSxxQkFBcUIsQ0FBQyxpQkFBMEI7O1lBQ3pELElBQUksaUJBQWlCLElBQUksSUFBSSxFQUFFO2dCQUMzQixNQUFNLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNqRDtRQUNMLENBQUM7S0FBQTtJQUVZLGVBQWU7O1lBQ3hCLE9BQU8sTUFBTSxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3RELENBQUM7S0FBQTtDQUVKO0FBaERELG9DQWdEQyJ9