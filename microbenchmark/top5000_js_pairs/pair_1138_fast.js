const Benchmark = {
    run: function() {
        let VAR_1 = "a".repeat(100000);
        let VAR_2 = VAR_1.split("");
        for (let VAR_6 of VAR_2) {
          VAR_6 = VAR_6 + "1";
        }
    }
};