const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = 10000,
          VAR_3;
        for (var VAR_4 = 0; VAR_4 < VAR_2; VAR_4++) {
          VAR_1.push("hello ");
        }
        VAR_3 = VAR_1.join("");
        console.log(VAR_3);
    }
};