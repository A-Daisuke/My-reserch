const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 1000;
        while (--VAR_2) VAR_1.push(VAR_2);
        VAR_1 = VAR_1.reverse();
    }
};