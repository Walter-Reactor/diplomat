// generated by diplomat-tool
import type { CyclicStructA } from "./CyclicStructA"
import type { pointer, codepoint } from "./diplomat-runtime.d.ts";

type CyclicStructB_Obj = {
    field: number;
};

export class CyclicStructB {

    get field() : number;
    set field(value: number); 
    constructor(structObj : CyclicStructB_Obj);

    static getA(): CyclicStructA;

    static getAOption(): CyclicStructA | null;
}