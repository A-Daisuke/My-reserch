const Benchmark = {
    run: function() {
        var VAR_1 = 12345;
        var VAR_2 = [];
        var VAR_3 = VAR_1;
        while (VAR_2.length < VAR_3) VAR_2.push([]);
    }
};