const Benchmark = {
    run: function() {
        let VAR_1 = "asdf".repeat(10000);
        var VAR_4 = new TextEncoder("utf-8");
        VAR_4.encode(VAR_1);
    }
};