const Benchmark = {
    run: function() {
        var VAR_1 = new Array(1000);
        var VAR_2 = VAR_1.slice(0);
        var VAR_3 = VAR_1.slice(0);
        VAR_3.pop();
    }
};