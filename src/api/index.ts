

export class WebAddress {
    address: string = 'http://localhost:8080'
    // address: string = 'http://192.168.2.213:8080'

    public getBillsYearAllData = this.address + '/v1/Bill/GetBillsYearAllData'

    public getBillsDataByMonth = this.address + '/v1/Bill/GetBillsDataByMonth'

    public getBillsTable = this.address + '/v1/Bill/GetBillsTable'

    public getBillsTableOption = this.address + '/v1/Bill/GetBillsOption'

    public getBillsDiagram = this.address + '/v1/Bill/GetBillsDiagram'



    public getInvestments = this.address + '/v1/Investment/GetInvestments'

    public getInvestmentsTable = this.address + '/v1/Investment/GetInvestmentsTable'

    public addInvestmentsTable = this.address + '/v1/Investment/AddInvestmentsTable'

    public updateInvestmentsTable = this.address + '/v1/Investment/UpdateInvestmentsTable'

    public getInvestmentDiagram = this.address + '/v1/Investment/GetInvestmentDiagram'

    public getInvestmentOption = this.address + '/v1/Investment/GetInvestmentOption'



    public getTarget = this.address + '/v1/Target/GetTarget'

    

    public setBillNameWork = this.address + '/v1/Work/BillNameSetWork'
}

const api = new WebAddress();
export default api