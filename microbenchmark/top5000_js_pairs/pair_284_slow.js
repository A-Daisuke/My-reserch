const Benchmark = {
    run: function() {
        var VAR_1 = [];
        VAR_1.push("0");
        VAR_1.push(null);
        VAR_1.push(true);
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) VAR_1.push("Item" + VAR_2);
        var VAR_3 = "|" + VAR_1.join("|") + "|";
        var VAR_4 = /\|Item54321\|/.test(VAR_3);
    }
};