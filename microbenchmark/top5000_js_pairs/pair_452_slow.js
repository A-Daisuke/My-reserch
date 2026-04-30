const Benchmark = {
    run: function() {
        let VAR_1 = 100000;
        let VAR_2 = [];
        while (VAR_1--) {
          VAR_2.push("a");
        }
        VAR_2 = VAR_2.join("");
    }
};