const Benchmark = {
    run: function() {
        var VAR_1, VAR_2, VAR_3, VAR_4;
        for (VAR_1 = 1000; VAR_1 > 0; VAR_1 -= 1) {
          VAR_3 = "0" + VAR_1.toString();
          VAR_2 =
            1 === VAR_3.length && parseInt(VAR_3, 10).toString() === VAR_3
              ? "0" + VAR_3
              : VAR_3;
        }
    }
};