const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        var VAR_3 = Math.floor(VAR_1.length / 2);
        function FUNCTION_1(VAR_4) {
          return Math.floor(Math.random() * (VAR_4 + 1));
        }
        VAR_1.splice(VAR_3, 1, "foo");
    }
};