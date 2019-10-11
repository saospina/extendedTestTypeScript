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
class BooksPage {
    constructor() {
        this.addButton = protractor_1.element(protractor_1.by.css('input[onclick="addToCart()"]'));
    }
    addBooks(quantity, book) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.setBook(yield this.findBookInTheTable(book), quantity);
            yield this.addButton.click();
        });
    }
    findBookInTheTable(book) {
        return __awaiter(this, void 0, void 0, function* () {
            let position;
            let numberOfRows = yield protractor_1.element.all(protractor_1.by.css("#listing > tbody > tr")).count();
            for (let row = 2; row <= numberOfRows; row++) {
                let cellValue = yield protractor_1.element(protractor_1.by.css("#listing > tbody > tr:nth-child(" + row + ") > td:nth-child(1)")).getText();
                if (book == cellValue) {
                    position = row;
                    row = numberOfRows;
                }
            }
            return position;
        });
    }
    setBook(position, quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            let quantityTextInput = protractor_1.element(protractor_1.by.css("#listing > tbody > tr:nth-child(" + position + ") > td:nth-child(4) > input[type = 'text']"));
            yield quantityTextInput.clear();
            yield quantityTextInput.sendKeys(quantity.toString());
        });
    }
    getGrandTotal() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.element(protractor_1.by.id("total")).getAttribute("value");
        });
    }
    calculateGrandTotal() {
        return __awaiter(this, void 0, void 0, function* () {
            let totalSum = 0;
            let numberOfRows = yield protractor_1.element.all(protractor_1.by.css("#added > tbody > tr")).count();
            for (let row = 2; row <= numberOfRows; row++) {
                let cellValue = yield protractor_1.element(protractor_1.by.css("#added > tbody > tr:nth-child(" + row + ") > td:nth-child(4)")).getText();
                let newCellValue = cellValue.replace("Rs.", "");
                totalSum = totalSum + parseInt(newCellValue);
            }
            return totalSum.toString();
        });
    }
}
exports.BooksPage = BooksPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va3NQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvYm9va3NQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBZ0Y7QUFDaEYsZ0VBQTZEO0FBRTdELElBQUksZ0JBQWdCLEdBQUcsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO0FBRTlDLE1BQWEsU0FBUztJQUF0QjtRQUVJLGNBQVMsR0FBa0Isb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQztJQXlDL0UsQ0FBQztJQXZDZ0IsUUFBUSxDQUFDLFFBQWdCLEVBQUUsSUFBWTs7WUFDaEQsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ2xFLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQyxDQUFDO0tBQUE7SUFFYSxrQkFBa0IsQ0FBQyxJQUFZOztZQUN6QyxJQUFJLFFBQWdCLENBQUM7WUFDckIsSUFBSSxZQUFZLEdBQVcsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN0RixLQUFLLElBQUksR0FBRyxHQUFXLENBQUMsRUFBRSxHQUFHLElBQUksWUFBWSxFQUFFLEdBQUcsRUFBRSxFQUFFO2dCQUNsRCxJQUFJLFNBQVMsR0FBVyxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsR0FBRyxHQUFHLEdBQUcscUJBQXFCLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUMxSCxJQUFJLElBQUksSUFBSSxTQUFTLEVBQUU7b0JBQ25CLFFBQVEsR0FBRyxHQUFHLENBQUM7b0JBQ2YsR0FBRyxHQUFHLFlBQVksQ0FBQztpQkFDdEI7YUFDSjtZQUNELE9BQU8sUUFBUSxDQUFDO1FBQ3BCLENBQUM7S0FBQTtJQUVhLE9BQU8sQ0FBQyxRQUFnQixFQUFFLFFBQWdCOztZQUNwRCxJQUFJLGlCQUFpQixHQUFrQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsa0NBQWtDLEdBQUcsUUFBUSxHQUFHLDRDQUE0QyxDQUFDLENBQUMsQ0FBQztZQUNySixNQUFNLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2hDLE1BQU0saUJBQWlCLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzFELENBQUM7S0FBQTtJQUVZLGFBQWE7O1lBQ3RCLE9BQU8sTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0QsQ0FBQztLQUFBO0lBRVksbUJBQW1COztZQUM1QixJQUFJLFFBQVEsR0FBVyxDQUFDLENBQUM7WUFDekIsSUFBSSxZQUFZLEdBQVcsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNwRixLQUFLLElBQUksR0FBRyxHQUFXLENBQUMsRUFBRSxHQUFHLElBQUksWUFBWSxFQUFFLEdBQUcsRUFBRSxFQUFFO2dCQUNsRCxJQUFJLFNBQVMsR0FBVyxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsR0FBRyxHQUFHLEdBQUcscUJBQXFCLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN4SCxJQUFJLFlBQVksR0FBVyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDeEQsUUFBUSxHQUFHLFFBQVEsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDaEQ7WUFDRCxPQUFPLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMvQixDQUFDO0tBQUE7Q0FFSjtBQTNDRCw4QkEyQ0MifQ==