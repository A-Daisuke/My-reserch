const Benchmark = {
    run: function() {
        var VAR_1 = 0,
          VAR_2 = 100000;
        var VAR_3 = [];
        for (; VAR_1 <= VAR_2; VAR_1++) {
          VAR_3.push(VAR_1);
        }
        VAR_3 = VAR_3.join("");
    }
};