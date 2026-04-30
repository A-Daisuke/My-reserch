const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 10000;
        while (VAR_2--) VAR_1.push(VAR_2);
        while (VAR_1.length) VAR_1.pop();
    }
};