const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) VAR_1.push("ttgdrfgdfgdsyogihjoghj");
        VAR_1.splice(0, VAR_1.length);
    }
};