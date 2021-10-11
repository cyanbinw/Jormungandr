import { number } from "echarts";
import moment from "moment"

export default class InvestmentTableData {
    public ID: number = 0;
    public ItemID: number = 0;
    public Code: string = '';
    public Name: string = '';
    public TypeID: number = 0;
    public TypeName: string = '';
    public Account: number = 0;
    public Share: number = 0;
    public NetWorth: number = 0;
    public ServiceCharge: number = 0;
    public Date: any = 0;
    public ActivityStatus: number = 0;
    public ActivityName: string = ''

    constructor(data: any) {
        this.ID = data.id;
        this.ItemID = data.itemID;
        this.Code = data.code;
        this.Name = data.name;
        this.TypeID = data.type;
        this.TypeName = data.typeName;
        this.Account = data.account;
        this.Share = data.share;
        this.NetWorth = data.netWorth;
        this.ServiceCharge = data.serviceCharge;
        this.Date = moment((data.date as Date)).format("yyyy-MM-DD");
        this.ActivityStatus = data.activity;
        this.ActivityName = data.activityName;
    }

    add(data: any) {
        this.ID = data.id;
        this.ItemID = data.itemID;
        this.Code = data.code;
        this.Name = data.name;
        this.TypeID = data.type;
        this.TypeName = data.typeName;
        this.Account = data.account;
        this.Share = data.share;
        this.NetWorth = data.netWorth;
        this.ServiceCharge = data.serviceCharge;
        this.Date = moment((data.date as Date)).format("yyyy-MM-DD");
        this.ActivityStatus = data.activityStatus;
        this.ActivityName = data.activityName;
    }
}

export class InvestmentData {
    public id!:number
    public itemID!:number
    public code!:string
    public name!: string
    public account!: number
    public share!: number
    public netWorth!: number
    public serviceCharge!: number
    public type!: number
    public activity!: number
    public date!: Date

    constructor(){
    }

    add(data: any){
        this.id = Number(data.id)
        this.itemID = Number(data.itemID)
        this.code = data.code
        this.name = data.name
        this.account = Number(data.account)
        this.share = Number(data.share)
        this.netWorth = Number(data.netWorth)
        this.serviceCharge = Number(data.serviceCharge)
        this.type = Number(data.type)
        this.activity = Number(data.activity)
        this.date = new Date(moment((data.date as Date)).format("yyyy-MM-DD"))
    }

    addForInvestmentTableData(data: InvestmentTableData){
        this.id = Number(data.ID)
        this.itemID = Number(data.ItemID)
        this.code = data.Code
        this.name = data.Name
        this.account = Number(data.Account)
        this.share = Number(data.Share)
        this.netWorth = Number(data.NetWorth)
        this.serviceCharge = Number(data.ServiceCharge)
        this.type = Number(data.TypeID)
        this.activity = Number(data.ActivityStatus)
        this.date = new Date(moment((data.Date as Date)).format("yyyy-MM-DD"))
    }
}