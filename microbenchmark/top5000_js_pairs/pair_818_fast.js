const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 25000; VAR_2++) VAR_1.push(1);
        for (var VAR_5 = 0, VAR_6; (VAR_6 = VAR_1[VAR_2]); VAR_2++) {}
    }
};