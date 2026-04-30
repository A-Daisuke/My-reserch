const Benchmark = {
    run: function() {
        var VAR_1 = [...Array(200).keys()];
        var VAR_4 = VAR_1.slice();
        VAR_4.push(99);
        VAR_4.unshift(99);
        var VAR_5 = new Uint8Array(VAR_4);
    }
};