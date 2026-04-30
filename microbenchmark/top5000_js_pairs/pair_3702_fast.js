const Benchmark = {
    run: function() {
        var VAR_1 = new Array(5);
        var VAR_2 = new Array(5000);
        var VAR_3 = String.fromCharCode.apply(undefined, VAR_2);
    }
};