const Benchmark = {
    run: function() {
        var VAR_1 = {};
        var VAR_2 = 1000;
        while (VAR_2-- > 0) VAR_1[VAR_2 % 5] = VAR_1[VAR_2 % 5] || VAR_2 % 2;
    }
};