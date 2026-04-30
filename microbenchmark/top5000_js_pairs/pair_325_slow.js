const Benchmark = {
    run: function() {
        var VAR_1,
          VAR_2 = [],
          VAR_3 = 0;
        for (; VAR_3 < 100000; VAR_3++) {
          VAR_2.push("abcdefjklmnopqrstuvwxyz");
        }
        VAR_1 = VAR_2.join("");
    }
};