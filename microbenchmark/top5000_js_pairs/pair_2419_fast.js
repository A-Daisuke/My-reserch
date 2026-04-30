const Benchmark = {
    run: function() {
        var VAR_1 = ["foo", "bar", "lolol", "corn", "what"];
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          String.prototype.concat.apply("", VAR_1);
        }
    }
};