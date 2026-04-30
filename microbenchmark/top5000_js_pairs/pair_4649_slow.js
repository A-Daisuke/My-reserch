const Benchmark = {
    run: function() {
        var VAR_1 = [...Array(200).keys()];
        var VAR_2 = new Uint8Array(VAR_1);
        var VAR_3 = Array.from(VAR_2);
        VAR_3.push(99);
        VAR_3.unshift(99);
        VAR_3 = new Uint8Array(VAR_3);
    }
};