const Benchmark = {
    run: function() {
        var VAR_1 = 12345;
        var VAR_2 = VAR_1;
        var VAR_3 = new Array();
        for (var VAR_4 = 0; VAR_4 < VAR_2; VAR_4++) VAR_3.push(VAR_4);
    }
};