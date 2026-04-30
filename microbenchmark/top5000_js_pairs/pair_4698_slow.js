const Benchmark = {
    run: function() {
        var VAR_1, VAR_2, VAR_3;
        for (VAR_1 = 1000; VAR_1 > 0; VAR_1 -= 1) {
          VAR_3 = VAR_1.toString();
          VAR_2 = 1 === VAR_3.length && VAR_3.charAt(0) !== "0" ? "0" + VAR_3 : VAR_3;
        }
    }
};