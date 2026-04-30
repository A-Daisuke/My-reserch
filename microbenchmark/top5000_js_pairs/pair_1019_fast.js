const Benchmark = {
    run: function() {
        let VAR_1 = "a".repeat(100000);
        let VAR_2 = VAR_1.split("");
        VAR_2.forEach(function (VAR_7, VAR_8, VAR_9) {
          VAR_7 = VAR_7 + "1";
        });
    }
};