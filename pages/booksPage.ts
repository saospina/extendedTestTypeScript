import { element, by, ElementFinder, ElementArrayFinder, $$ } from 'protractor';
import { GlobalActivities } from '../pages/GlobalActivities';

let globalActivities = new GlobalActivities();

export class BooksPage {

    addButton: ElementFinder = element(by.css('input[onclick="addToCart()"]'));
    
    public async addBooks(quantity: number, book: string) {
        await this.setBook(await this.findBookInTheTable(book), quantity);
        await this.addButton.click();
    }

    private async findBookInTheTable(book: string): Promise<number>{
        let position: number;
        let numberOfRows: number = await element.all(by.css("#listing > tbody > tr")).count();
        for (let row: number = 2; row <= numberOfRows; row++) {
            let cellValue: string = await element(by.css("#listing > tbody > tr:nth-child(" + row + ") > td:nth-child(1)")).getText();
            if (book == cellValue) {
                position = row;
                row = numberOfRows;
            }
        }
        return position;
    }

    private async setBook(position: number, quantity: number) {
        let quantityTextInput: ElementFinder = element(by.css("#listing > tbody > tr:nth-child(" + position + ") > td:nth-child(4) > input[type = 'text']"));
        await quantityTextInput.clear();
        await quantityTextInput.sendKeys(quantity.toString());
    }

    public async getGrandTotal(): Promise<string> {
        return await element(by.id("total")).getAttribute("value");
    }

    public async calculateGrandTotal(): Promise<string>  {
        let totalSum: number = 0;
        let numberOfRows: number = await element.all(by.css("#added > tbody > tr")).count();
        for (let row: number = 2; row <= numberOfRows; row++) {
            let cellValue: string = await element(by.css("#added > tbody > tr:nth-child(" + row + ") > td:nth-child(4)")).getText();
            let newCellValue: string = cellValue.replace("Rs.", "");
            totalSum = totalSum + parseInt(newCellValue);
        }
        return totalSum.toString();
    }

}