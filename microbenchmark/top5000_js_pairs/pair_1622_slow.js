const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 500; VAR_2++) {
          VAR_1.push(Math.random(Math.floor() * 100));
        }
        eval(VAR_1.join("+"));
    }
};