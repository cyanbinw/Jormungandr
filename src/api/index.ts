

export class WebAddress {
    address: string = 'http://localhost:8080'
    // address: string = 'http://192.168.2.213:8080'

    public getYearAllData = this.address + '/v1/Bill/GetYearAllData'

    public getFourMonthAllData = this.address + '/v1/Bill/GetFourMonthAllData'

    public getInvestments = this.address + '/v1/Investment/GetInvestments'

    public getInvestmentsTable = this.address + '/v1/Investment/GetInvestmentsTable'

    public addInvestmentsTable = this.address + '/v1/Investment/AddInvestmentsTable'

    public updateInvestmentsTable = this.address + '/v1/Investment/UpdateInvestmentsTable'

    public getInvestmentDiagram = this.address + '/v1/Investment/GetInvestmentDiagram'

    public getInvestmentOption = this.address + '/v1/Investment/GetInvestmentOption'

    public getTarget = this.address + '/v1/Target/GetTarget'
}

const api = new WebAddress();
export default api