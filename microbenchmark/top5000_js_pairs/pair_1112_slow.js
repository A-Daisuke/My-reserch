const Benchmark = {
    run: function() {
        let VAR_1 = "a".repeat(100000);
        let VAR_2 = VAR_1.split("");
        VAR_2.forEach((VAR_3) => (VAR_3 = VAR_3 + "1"));
    }
};