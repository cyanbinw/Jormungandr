import { number } from "echarts";
import moment from "moment"

export default class InvestmentTableData {
    public ID: number = 0;
    public Name: string = '';
    public TypeID: number = 0;
    public TypeName: string = '';
    public Account: number = 0;
    public Share: number = 0;
    public NetWorth: number = 0;
    public Date: any = 0;
    public ActivityStatus: number = 0;
    public ActivityName: string = ''

    constructor(data: any) {
        this.ID = data.id;
        this.Name = data.name;
        this.TypeID = data.type;
        this.TypeName = data.typeName;
        this.Account = data.account;
        this.Share = data.share;
        this.NetWorth = data.netWorth;
        this.Date = moment((data.date as Date)).format("yyyy-MM-DD");
        this.ActivityStatus = data.activity;
        this.ActivityName = data.activityName;
    }

    add(data: any) {
        this.ID = data.id;
        this.Name = data.name;
        this.TypeID = data.type;
        this.TypeName = data.typeName;
        this.Account = data.account;
        this.Share = data.share;
        this.NetWorth = data.netWorth;
        this.Date = moment((data.date as Date)).format("yyyy-MM-DD");
        this.ActivityStatus = data.activityStatus;
        this.ActivityName = data.activityName;
    }
}

export class InvestmentData {
    public id!:number
    public name!: string
    public account!: number
    public share!: number
    public netWorth!: number
    public type!: number
    public activity!: number
    public date!: Date

    constructor(){
    }

    add(data: any){
        this.id = Number(data.id)
        this.name = data.name
        this.account = Number(data.account)
        this.share = Number(data.share)
        this.netWorth = Number(data.netWorth)
        this.type = Number(data.type)
        this.activity = Number(data.activity)
        this.date = new Date(data.date)
    }

    addForInvestmentTableData(data: InvestmentTableData){
        this.id = Number(data.ID)
        this.name = data.Name
        this.account = Number(data.Account)
        this.share = Number(data.Share)
        this.netWorth = Number(data.NetWorth)
        this.type = Number(data.TypeID)
        this.activity = Number(data.ActivityStatus)
        this.date = new Date(data.Date)
    }
}