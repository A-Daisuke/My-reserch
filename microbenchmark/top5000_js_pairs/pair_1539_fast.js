const Benchmark = {
    run: function() {
        var VAR_1 = "Test abc test test abc test test test abc test test abc".repeat(
          5000,
        );
        var VAR_2 = VAR_1.replace(new RegExp("abc", "g"), "");
    }
};