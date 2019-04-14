var $ = require ("jquery");
import "@progress/kendo-ui/js/kendo.grid";
require('./css/main.css')

export function createCurrency(rootElement, gridData,gridTitle){
    rootElement.append(
        $("<div>").append(
            $("<div>").append( `<h3> class = "gridCurrency" ${gridTitle} </h3>`),
            $("<div>").kendoGrid({
                columns:titleArray,
                dataSource: {
                    data: gridData,
                },
                scrollable: false,
                selectable: "cell"
            })
        )
    )
}