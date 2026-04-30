const Benchmark = {
    run: function() {
        var VAR_1 = [...Array(200).keys()];
        var VAR_2 = new Uint8Array(VAR_1);
        var VAR_3 = new Uint8Array(VAR_2.length + 2);
        VAR_3[0] = 99;
        VAR_3[VAR_2.length + 1] = 99;
        VAR_3.set(VAR_2, 1);
    }
};