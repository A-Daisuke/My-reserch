const Benchmark = {
    run: function() {
        let VAR_1 = "asdf".repeat(10000);
        const VAR_2 = Math.random() < 0.5 ? 1 : 0;
        var VAR_3 = { KEY_1: VAR_1 };
        JSON.stringify(VAR_3);
    }
};