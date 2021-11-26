import { number } from "echarts";
import moment from "moment"

//Discard
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
    public ServiceChargeList: InvestmentServiceCharge[] = []

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
        this.ServiceCharge = data.serviceCharge
        this.Date = moment((data.date as Date)).format("yyyy-MM-DD");
        this.ActivityStatus = data.activity;
        this.ActivityName = data.activityName;
        this.ServiceChargeList = data.serviceChargeList;
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
        this.ServiceCharge = data.serviceCharge
        this.Date = moment((data.date as Date)).format("yyyy-MM-DD");
        this.ActivityStatus = data.activityStatus;
        this.ActivityName = data.activityName;
        this.ServiceChargeList = data.serviceChargeList;
    }
}

export class InvestmentData {
    public id!: number
    public itemID!: number
    public code!: string
    public name!: string
    public account!: number
    public share!: number
    public netWorth!: number
    public serviceCharge!: number
    public type!: number
    public typeName!: string
    public activity!: number
    public activityName!: string
    public date!: any
    public serviceChargeList: InvestmentServiceCharge[] = []

    constructor() {

    }

    add(data: any) {
        this.id = Number(data.id)
        this.itemID = Number(data.itemID)
        this.code = data.code
        this.name = data.name
        this.account = Number(data.account)
        this.share = Number(data.share)
        this.netWorth = Number(data.netWorth)
        this.serviceCharge = Number(data.serviceCharge)
        this.type = Number(data.type)
        this.typeName = data.typeName
        this.activity = Number(data.activity)
        this.activityName = data.activityName
        this.date = new Date(moment((data.date as Date)).format("yyyy-MM-DD"))
        this.setServiceChargeList(data.serviceChargeList)
    }

    set(data: any): InvestmentData {
        this.id = Number(data.id)
        this.itemID = Number(data.itemID)
        this.code = data.code
        this.name = data.name
        this.account = Number(data.account)
        this.share = Number(data.share)
        this.netWorth = Number(data.netWorth)
        this.serviceCharge = Number(data.serviceCharge)
        this.type = Number(data.type)
        this.typeName = data.typeName
        this.activity = Number(data.activity)
        this.activityName = data.activityName
        this.date = moment((data.date as Date)).format("yyyy-MM-DD")
        this.setServiceChargeList(data.serviceChargeList)
        return this
    }

    addForInvestmentTableData(data: InvestmentTableData) {
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
        this.serviceChargeList = data.ServiceChargeList ?? []
    }

    setServiceChargeList(data: any) {
        if (!data) {
            return
        }
        data.forEach(c => this.serviceChargeList.push(new InvestmentServiceCharge(c)))
    }

    addServiceChargeList(data: any) {
        data.array.forEach(c => {
            this.serviceChargeList.push(new InvestmentServiceCharge(c))
        });
    }
}

export class InvestmentServiceCharge {
    public itemID !: Number
    public typeID !: Number
    public cost !: Number

    constructor(data: any) {
        if (!data) {
            return
        }
        this.itemID = Number(data.itemID)
        this.typeID = Number(data.typeID)
        this.cost = Number(data.cost)
    }
}

export class InvestmentReportForm {
    public position                 !: Number     //持仓
    public positionInvestment       !: Number //持仓投资
    public totalPositionInvestment  !: Number //持仓总投资
    public positionSell             !: Number //持仓卖出
    public positionServiceCharge    !: Number // 持仓手续费
    public positionInformation      !: string  // 持仓信息
    public clearance                !: Number     //清仓
    public clearanceInvestment      !: Number //清仓投资
    public totalClearanceInvestment !: Number //清仓总投资
    public clearanceSell            !: Number //清仓卖出
    public clearanceServiceCharge   !: Number // 清仓手续费
    public clearanceInformation     !: string  // 清仓信息
    public total                    !: Number     //总体
    public totalInvestment          !: Number //总体投资
    public totalTotalInvestment     !: Number //总体总投资
    public totalSell                !: Number //总体卖出
    public totalServiceCharge       !: Number // 总体手续费
    public totalInformation         !: string  // 总体信息
}