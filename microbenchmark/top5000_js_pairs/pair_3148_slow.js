const Benchmark = {
    run: function() {
        var VAR_1, VAR_2, VAR_3;
        VAR_2 = [];
        for (VAR_1 = VAR_3 = 1; VAR_3 <= 100; VAR_1 = ++VAR_3) {
          VAR_2.push([!(VAR_1 % 3) ? "fizz" : void 0] + [!(VAR_1 % 5) ? "buzz" : void 0] || VAR_1);
        }
    }
};