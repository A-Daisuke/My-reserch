const Benchmark = {
    run: function() {
        var VAR_1 = /children|id|style|class|dir|lang/;
        var VAR_2 = "lang";
        for (VAR_3 = 0; VAR_3 < 10000; VAR_3++) var VAR_4 = VAR_1.test(VAR_2);
    }
};