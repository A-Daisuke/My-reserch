const Benchmark = {
    run: function() {
        var VAR_4 = 1,
          VAR_5 = "Fizz",
          VAR_6 = "Buzz",
          VAR_7 = [];
        for (; VAR_4 <= 100; VAR_4++) {
          VAR_7.push(!(VAR_4 % 3) ? (!(VAR_4 % 5) ? VAR_5 + VAR_6 : VAR_5) : !(VAR_4 % 5) ? VAR_6 : VAR_4);
        }
    }
};