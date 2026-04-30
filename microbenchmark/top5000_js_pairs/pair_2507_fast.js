const Benchmark = {
    run: function() {
        var VAR_4 = ["Hello you"];
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_4.push(", and you");
        }
        VAR_4.join("");
    }
};