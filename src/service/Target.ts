import { number } from "echarts";
import moment from "moment"

export default class TargetData {
    public ID!: number;
    public Target!: string;
    public Revenue!: number;
    public Expend!: number;
    public Assets!: AssetsData[];
    public Liabilities!: LiabilitiesData[];
    public Skill!: string;
    public Other!: string;
}

export class AssetsData {
    public ID!: number;
    public AssetsName!: string;
    public AssetsAmount!: number;
}

export class LiabilitiesData {
    public ID!: number;
    public LiabilitiesName!: string;
    public LiabilitiesAmount!: number;
}