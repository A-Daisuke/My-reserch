const Benchmark = {
    run: function() {
        let VAR_1 = "a".repeat(100000);
        let VAR_2 = VAR_1.split("");
        for (let VAR_4 of VAR_2) {
          VAR_4 = VAR_4 + "1";
        }
    }
};