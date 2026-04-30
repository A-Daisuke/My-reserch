const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_1.push(String.fromCharCode(97));
        }
        var VAR_3 = VAR_1.join("");
    }
};