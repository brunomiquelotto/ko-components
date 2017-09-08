function myViewModel() {
    var self = this;
    self.opcoes = ko.observableArray([
        {CompanyId: 1, Name: 'Fiat'},
        {CompanyId: 2, Name: 'Jeep'},
        {CompanyId: 3, Name: 'Chrysler'},
        {CompanyId: 4, Name: 'Alfa Romeo'},
        {CompanyId: 5, Name: 'Dodge'},
        {CompanyId: 6, Name: 'Maserati'},
        {CompanyId: 7, Name: 'Fiat Brasil'}
    ]);
    self.selected = ko.observableArray();
}
ko.applyBindings(new myViewModel());