const Benchmark = {
    run: function() {
        var VAR_1 =
          '.classquery-w460, .ltie9 [data-classquery*=".classquery-w460"] { background-color: green; width: 450px; }';
        var VAR_2;
        for (var VAR_3 = 0; VAR_3 < 9999; VAR_3++) {
          VAR_2 = VAR_1.replace(
            /.classquery-w460, .ltie9 \[data-classquery\*=".classquery-w460"\]\s*?{/g,
            "",
          );
        }
    }
};