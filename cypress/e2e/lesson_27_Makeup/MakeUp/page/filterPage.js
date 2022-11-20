const { result } = require("cypress/types/lodash");

/*
Comments : 
1) const { result } = require("cypress/types/lodash"); - этот импорт не понятно зачем тебе тут
2) checkSortForName(numberResult, expectFirstSymbol) - названия параметров надо более понятно ставить, не понятно что такое numberResult
3) Об этом коде не совсем корректно6 немного ломает логику.

  if(popular1>popular2){
                 result = true
            }else {
                 result = false
             }

по умолчанию у тебя выражение должно быть true это если предположить, 
значит мы можем немного упростить запись и убрать else:

       1. надо прописать что переменная по умолчанию задана будет let result = false
       2. тогда только если if(popular1>popular2) нам понадобится переприсвоить значение переменной  {result = true}
       
4) следи за названием переменных popular1 - это не окей
5) и твои класс не должны содержать лишний код или комменты, пока учишься окей
6) parseFloat - обрати внимание ниже на документацию 


parseFloat() - это по факту плавающая точка, думаю у тебя отзыв не может содержать 12,5 комментариев.
Поэтому рекоммендую использовать parseInt(). 


 * Converts a string to an integer.
 * @param string A string to convert into a number.
 * @param radix A value between 2 and 36 that specifies the base of the number in `string`.
 * If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal.
 * All other strings are considered decimal.

declare function parseInt(string: string, radix?: number): number;
    
* Converts a string to a floating-point number.
* @param string A string that contains a floating-point number.

declare function parseFloat(string: string): number;


7) Так давай разберем этот метод

 checkSortForPopular(numberResult1,numberResult2){
        let result
        cy.get(this.selectors.popularText).eq(numberResult1).should('be.visible').invoke('text')
        .then(($text)=>{
            const popular1 = parseFloat($text)
        cy.get(this.selectors.popularText).eq(numberResult2).should('be.visible').invoke('text')
        .then(($text)=>{
            const popular2 = parseFloat($text)
        if(popular1>popular2){
                 result = true
            }else {
                 result = false
             }
             expect(result).to.be.true
        })
    })
    } 
    
    1. упрощаем условие как описала выше
    2. меняет parseFloat => parseInt
    3. дубликация произошла вот тут cy.get(this.selectors.popularText).eq(numberResult1).should('be.visible').invoke('text') 
    стоит может вынести в отдельный метод
    
      getPopularText(indexOfElement) {
          return cy.get(this.selectors.popularText).eq(indexOfElement).should('be.visible').invoke('text');
        }
    
    4. expect(result).to.be.true. - не совсем удачная проверка, можно улучшить. =>  expect(popular1>popular2).to.be.true
    
    expect может содержать внутри выржение или условие которое в итоге приходит к чему-то
    
    
    Итак метод мы немного почистили и сделали красивее:
    
     checkSortForPopular(...indexOfElement){
       this.getPopularText(indexOfElement[0])
        .then(($text)=>{
            const commentsFirstProduct = parseInt($text)
        this.getPopularText(indexOfElement[1])        
            .then(($text)=>{
            const commentsSecondProduct = parseInt($text)
             expect(commentsFirstProduct>commentsSecondProduct).to.be.true
        })
    })
    }
    
    Чтобы я еще рекомендовала, пожалуйста, вынеси в кастомнуюю команду реализацию так как если заметишь дубликация еще присуща и 
    expect(commentsFirstProduct>commentsSecondProduct).to.be.true. лучше делать в тесте
    
    по -факту у тебя будет только вот этот кусок кода  в кастомной комманде 
    
     checkSortForPopular(indexOfElement){
       this.getPopularText(indexOfElement)
        .then(($text)=>{
            const commentsFirstProduct = parseInt($text)})
            
      но тебе придется дописать еще врапер чтобы возвращать число  и тогда вызывать метод два раза как-то так в тесте
      expect(cy.customcommand(selector, 1) > cy.customcommand(selector, 2)).to.be.true
      
      
    
  8)  new filter => new filter()  не забывай скобки
   

*/
class filter {
    selectors = {
        sortCategory: '.catalog-sort-list>li>label',
        allResultsFilter:'[class="simple-slider-list"]>li',
        all:'[class="simple-slider-list"] li:nth-child(2)>div>div>a',
        popularText:'.simple-slider-list>li>div>div>div>a'
    }

    clickOnSortCategory (sortCategory) {
        cy.get(this.selectors.sortCategory,{timeout:3000}).should('be.visible').contains(sortCategory).click();
    }

    // choiceBlokOfSort(numberResult) {
    //     cy.get(this.selectors.allResultsFilter).eq(numberResult).should('be.visible')
    // }
    
    // checkSortForName(numberResult,expectFirstSymbol) {
    //     this.choiceBlokOfSort(numberResult).invoke('attr', 'data-brand')
    //     .then(($element) => {
    //         const productText = $element[0]
    //         expect(productText).equal(expectFirstSymbol)
    //     })
    // }

    checkSortForName(numberResult,expectFirstSymbol) {
        cy.get(this.selectors.allResultsFilter).eq(numberResult).should('be.visible').invoke('attr', 'data-brand')
             .then(($element) => {
                 const productText = $element[0]
                 expect(productText).equal(expectFirstSymbol)
             })
         }

         
    checkSortForPopular(numberResult1,numberResult2){
        let result
        cy.get(this.selectors.popularText).eq(numberResult1).should('be.visible').invoke('text')
        .then(($text)=>{
            const popular1 = parseFloat($text)
        cy.get(this.selectors.popularText).eq(numberResult2).should('be.visible').invoke('text')
        .then(($text)=>{
            const popular2 = parseFloat($text)
        if(popular1>popular2){
                 result = true
            }else {
                 result = false
             }
             expect(result).to.be.true
        })
    })
    }

}module.exports = new filter
