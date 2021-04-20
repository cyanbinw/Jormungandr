

export class WebAddress {
    address: string = 'http://localhost:8080'
    // address: string = 'http://192.168.2.213:8080'

    public getYearAllData = this.address + '/v1/GetYearAllData'

    public getFourMonthAllData = this.address + '/v1/GetFourMonthAllData'

    public getInvestments = this.address + '/v1/GetInvestments'

    public getInvestmentsTable = this.address + '/v1/GetInvestmentsTable'

    public addInvestmentsTable = this.address + '/v1/AddInvestmentsTable'

    public updateInvestmentsTable = this.address + '/v1/UpdateInvestmentsTable'

    public getInvestmentDiagram = this.address + '/v1/GetInvestmentDiagram'

    public getInvestmentOption = this.address + '/v1/GetInvestmentOption'
}

const api = new WebAddress();
export default api