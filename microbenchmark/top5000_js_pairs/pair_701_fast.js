const Benchmark = {
    run: function() {
        var VAR_1 = new Uint8Array(32768);
        VAR_2 = Array.prototype.slice.call(VAR_1);
        VAR_2.length === 32768;
        VAR_2.constructor === Array;
        new Uint8Array(VAR_1);
        new Uint8Array(VAR_1);
        new Uint8Array(VAR_1);
        new Uint8Array(VAR_1);
        new Uint8Array(VAR_1);
        new Uint8Array(VAR_1);
        new Uint8Array(VAR_1);
        new Uint8Array(VAR_1);
        new Uint8Array(VAR_1);
        new Uint8Array(VAR_1);
    }
};