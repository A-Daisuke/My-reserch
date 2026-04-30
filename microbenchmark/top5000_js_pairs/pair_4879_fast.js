const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 1000;
        var VAR_3;
        while (--VAR_2) VAR_1.push(VAR_2 + "a");
        VAR_3 = VAR_1.slice(0);
    }
};