const Benchmark = {
    run: function() {
        var VAR_1 = [];
        (function fill() {
          VAR_1.length < 1000 && fill(VAR_1.push("codewars"));
        })();
    }
};