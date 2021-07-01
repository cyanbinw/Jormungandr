import moment from "moment"

export default class BillTableData{
    public ID: number = 0;
	public BillNumber: number = 0;
	public Type:       string = '';
	public BillName:   string = '';
	public Account:    number = 0;
	public Date:       any = 0;
	public Remarks:    string = '';

    constructor(c: any){
        this.ID = Number(c.ID);
        this.BillNumber = Number(c.BillNumber);
        this.Type = c.Type;
        this.BillName = c.BillName;
        this.Account = Number(c.Account);
        this.Date = moment((c.Date as Date)).format("yyyy-MM-DD HH:mm");
        this.Remarks = c.Remarks;
    }
}