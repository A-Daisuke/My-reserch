const Benchmark = {
    run: function() {
        Number.prototype.VAR_1 = 64;
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_2 == 0 && typeof VAR_2 === "number";
          VAR_2 == VAR_2 && typeof VAR_2 === "number";
        }
    }
};