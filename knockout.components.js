ko.components.register('multi-checkbox', {
    viewModel : function(params) {
        var self = this;
        self.options = params.options;
        self.optionsText = params.optionsText;
        self.rootCss = params.css;
        self.elementsPerRow = params.elementsPerRow;
        var acceptedColumns = [12,6,4,3,2,1];
        var numberOfColumns = (12 / self.elementsPerRow);
        numberOfColumns = acceptedColumns.indexOf(self.numberOfColumns)> -1 ? self.numberOfColumns : 1;
        self.childCss = 'col-sm-' + numberOfColumns;
        self.selecteds = ko.observableArray([]);    
        self.value = params.value;
        self.registerSelectedValue = function(element, data) {
            if (element.checked === true) {
                self.selecteds.push(data);
            } else {
                self.selecteds.remove(data);
            }
            self.value(self.selecteds());
        }
    }, 
    template: '<div data-bind="css: rootCss, foreach: options"> \
                <div data-bind="css: $parent.childCss">\
                    <input type="checkbox" data-bind="event: { change: function() { $parent.registerSelectedValue($element, this) } } "/><span data-bind="text: $parent.options()[$index()][$parent.optionsText]"></span> \
                </div>\
              </div>\
              '
});