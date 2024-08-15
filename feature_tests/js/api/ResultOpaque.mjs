// generated by diplomat-tool
import { ErrorEnum } from "./ErrorEnum.mjs"
import { ErrorStruct } from "./ErrorStruct.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";

const ResultOpaque_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.ResultOpaque_destroy(ptr);
});

export class ResultOpaque {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    
    constructor(ptr, selfEdge) {
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        // Unconditionally register to destroy when this object is ready to garbage collect.
        ResultOpaque_box_destroy_registry.register(this, this.#ptr);
    }

    get ffiValue() {
        return this.#ptr;
    }

    static new_(i) {
        
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 5, 4, true);
        const result = wasm.ResultOpaque_new(diplomatReceive.buffer, i);
    
        try {
            if (!diplomatReceive.resultFlag) {
                const cause = ErrorEnum[Array.from(ErrorEnum.values.keys())[diplomatRuntime.enumDiscriminant(wasm, diplomatReceive.buffer)]];
                throw new globalThis.Error('ErrorEnum: ' + cause.value, { cause });
            }
            return new ResultOpaque(diplomatRuntime.ptrRead(wasm, diplomatReceive.buffer), []);
        }
        
        finally {
            diplomatReceive.free();
        }
    }

    static newFailingFoo() {
        
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 5, 4, true);
        const result = wasm.ResultOpaque_new_failing_foo(diplomatReceive.buffer);
    
        try {
            if (!diplomatReceive.resultFlag) {
                const cause = ErrorEnum[Array.from(ErrorEnum.values.keys())[diplomatRuntime.enumDiscriminant(wasm, diplomatReceive.buffer)]];
                throw new globalThis.Error('ErrorEnum: ' + cause.value, { cause });
            }
            return new ResultOpaque(diplomatRuntime.ptrRead(wasm, diplomatReceive.buffer), []);
        }
        
        finally {
            diplomatReceive.free();
        }
    }

    static newFailingBar() {
        
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 5, 4, true);
        const result = wasm.ResultOpaque_new_failing_bar(diplomatReceive.buffer);
    
        try {
            if (!diplomatReceive.resultFlag) {
                const cause = ErrorEnum[Array.from(ErrorEnum.values.keys())[diplomatRuntime.enumDiscriminant(wasm, diplomatReceive.buffer)]];
                throw new globalThis.Error('ErrorEnum: ' + cause.value, { cause });
            }
            return new ResultOpaque(diplomatRuntime.ptrRead(wasm, diplomatReceive.buffer), []);
        }
        
        finally {
            diplomatReceive.free();
        }
    }

    static newFailingUnit() {
        
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 5, 4, true);
        const result = wasm.ResultOpaque_new_failing_unit(diplomatReceive.buffer);
    
        try {
            if (!diplomatReceive.resultFlag) {
                return null;
            }
            return new ResultOpaque(diplomatRuntime.ptrRead(wasm, diplomatReceive.buffer), []);
        }
        
        finally {
            diplomatReceive.free();
        }
    }

    static newFailingStruct(i) {
        
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 9, 4, true);
        const result = wasm.ResultOpaque_new_failing_struct(diplomatReceive.buffer, i);
    
        try {
            if (!diplomatReceive.resultFlag) {
                const cause = new ErrorStruct()._fromFFI(diplomatReceive.buffer);
                throw new globalThis.Error('ErrorStruct: ' + cause.toString(), { cause });
            }
            return new ResultOpaque(diplomatRuntime.ptrRead(wasm, diplomatReceive.buffer), []);
        }
        
        finally {
            diplomatReceive.free();
        }
    }

    static newInErr(i) {
        
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 5, 4, true);
        const result = wasm.ResultOpaque_new_in_err(diplomatReceive.buffer, i);
    
        try {
            if (!diplomatReceive.resultFlag) {
                const cause = new ResultOpaque(diplomatRuntime.ptrRead(wasm, diplomatReceive.buffer), []);
                throw new globalThis.Error('ResultOpaque: ' + cause.toString(), { cause });
            }
    
        }
        
        finally {
            diplomatReceive.free();
        }
    }

    static newInt(i) {
        
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 5, 4, true);
        const result = wasm.ResultOpaque_new_int(diplomatReceive.buffer, i);
    
        try {
            if (!diplomatReceive.resultFlag) {
                return null;
            }
            return (new Int32Array(wasm.memory.buffer, diplomatReceive.buffer, 1))[0];
        }
        
        finally {
            diplomatReceive.free();
        }
    }

    static newInEnumErr(i) {
        
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 5, 4, true);
        const result = wasm.ResultOpaque_new_in_enum_err(diplomatReceive.buffer, i);
    
        try {
            if (!diplomatReceive.resultFlag) {
                const cause = new ResultOpaque(diplomatRuntime.ptrRead(wasm, diplomatReceive.buffer), []);
                throw new globalThis.Error('ResultOpaque: ' + cause.toString(), { cause });
            }
            return ErrorEnum[Array.from(ErrorEnum.values.keys())[diplomatRuntime.enumDiscriminant(wasm, diplomatReceive.buffer)]];
        }
        
        finally {
            diplomatReceive.free();
        }
    }

    assertInteger(i) {
        wasm.ResultOpaque_assert_integer(this.ffiValue, i);
    
        try {}
        
        finally {}
    }
}