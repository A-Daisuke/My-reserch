const Benchmark = {
    run: function() {
        let VAR_1 = "a".repeat(100000);
        let VAR_2 = VAR_1.split("");
        VAR_2.forEach(function (VAR_3, VAR_4, VAR_5) {
          VAR_3 = VAR_3 + "1";
        });
    }
};