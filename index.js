var $ = require ("jquery");
import "@progress/kendo-ui/js/kendo.grid";
require('./css/style.css')

export function createCurrency(rootElement, outColumns, gridData, gridTitle){
    rootElement.append(
        $("<div>").append(
            $("<div>").append( `<h3 class = "gridCurrencyTitle">  ${gridTitle} </h3>`),
            $("<div>").kendoGrid({
                columns:outColumns,
                dataSource: {
                    data: gridData,
                },
                scrollable: false,
                selectable: "cell"
            }).addClass("kendoCurrencyGrid")
        ).addClass("tableCurrency")
    )
}
